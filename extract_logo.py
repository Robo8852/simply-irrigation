"""
Extract logo from raster image and convert to SVG using color separation + potrace.

Uses potrace default evenodd mode with a clipPath to hide the bounding box fill.
"""

import cv2
import numpy as np
import subprocess
import tempfile
import os
import re
from pathlib import Path


def isolate_color(img_hsv, h_range, s_min=50, v_min=50, close_size=3, close_iter=2):
    lower = np.array([h_range[0], s_min, v_min])
    upper = np.array([h_range[1], 255, 255])
    mask = cv2.inRange(img_hsv, lower, upper)
    # Gaussian blur to smooth edges before morphology
    mask = cv2.GaussianBlur(mask, (3, 3), 0)
    _, mask = cv2.threshold(mask, 127, 255, cv2.THRESH_BINARY)
    # Close gaps (fill holes in shapes)
    kernel = np.ones((close_size, close_size), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel, iterations=close_iter)
    # Remove small noise
    kernel_small = np.ones((3, 3), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel_small, iterations=1)
    return mask


def trace_to_svg(mask, turdsize=5):
    """Trace mask using potrace default (evenodd) mode."""
    bmp_path = tempfile.mktemp(suffix='.bmp')
    svg_path = tempfile.mktemp(suffix='.svg')
    try:
        cv2.imwrite(bmp_path, mask)
        subprocess.run([
            'potrace', bmp_path, '-s', '-o', svg_path,
            '-t', str(turdsize), '-a', '1.3', '-O', '0.5',
        ], capture_output=True, text=True, check=True)
        return Path(svg_path).read_text()
    finally:
        for f in [bmp_path, svg_path]:
            if os.path.exists(f):
                os.unlink(f)


def get_inner_content(svg_text):
    """Extract the <g> block with transform and path, keeping structure intact."""
    match = re.search(r'(<g\s[^>]*>.*?</g>)', svg_text, re.DOTALL)
    return match.group(1) if match else ""


def main():
    input_path = "simpy-irrigation-img.png"
    output_path = "public/logo.svg"

    print(f"Loading {input_path}...")
    img = cv2.imread(input_path)
    if img is None:
        print(f"Error: Could not load {input_path}")
        return

    h, w = img.shape[:2]
    print(f"Image size: {w}x{h}")

    # Crop to logo area only
    crop_bottom = int(h * 0.62)
    img_cropped = img[0:crop_bottom, :]
    ch, cw = img_cropped.shape[:2]
    print(f"Cropped to: {cw}x{ch}")

    img_hsv = cv2.cvtColor(img_cropped, cv2.COLOR_BGR2HSV)

    print("Isolating colors...")
    blue_mask = isolate_color(img_hsv, h_range=(95, 130), s_min=80, v_min=100,
                              close_size=3, close_iter=2)
    green_mask = isolate_color(img_hsv, h_range=(35, 85), s_min=40, v_min=80,
                               close_size=3, close_iter=2)

    # Also create a combined mask for finding the tight bounding box
    combined = cv2.bitwise_or(blue_mask, green_mask)
    # Find bounding rect of all content
    coords = cv2.findNonZero(combined)
    if coords is None:
        print("Error: no content found in masks")
        return
    x, y, bw, bh = cv2.boundingRect(coords)
    print(f"Content bounds: x={x}, y={y}, w={bw}, h={bh}")

    # Add some padding
    pad = 10
    x = max(0, x - pad)
    y = max(0, y - pad)
    bw = min(cw - x, bw + 2 * pad)
    bh = min(ch - y, bh + 2 * pad)

    # Crop masks to content area for tighter SVG
    blue_mask = blue_mask[y:y+bh, x:x+bw]
    green_mask = green_mask[y:y+bh, x:x+bw]

    # Invert masks — potrace traces WHITE on BLACK by default
    # Our masks have white=logo, so invert so potrace sees logo as "foreground"
    # Actually potrace traces BLACK foreground, so if our masks are white=logo,
    # that's already correct. Let's NOT invert.
    # Wait — BMP: potrace traces dark pixels. Our masks: 255=logo, 0=bg.
    # So potrace sees 255 as white (background) and 0 as black (bg too).
    # We need to invert so the logo pixels become 0 (dark/foreground for potrace).
    blue_mask = cv2.bitwise_not(blue_mask)
    green_mask = cv2.bitwise_not(green_mask)

    cv2.imwrite("public/debug_blue_mask.png", blue_mask)
    cv2.imwrite("public/debug_green_mask.png", green_mask)

    print("Tracing...")
    blue_svg = trace_to_svg(blue_mask)
    green_svg = trace_to_svg(green_mask)

    # Get the <g> blocks (which contain transform + compound path with evenodd)
    blue_g = get_inner_content(blue_svg)
    green_g = get_inner_content(green_svg)

    # Replace fill color
    blue_g = blue_g.replace('fill="#000000"', 'fill="#4992DF"')
    green_g = green_g.replace('fill="#000000"', 'fill="#87B66D"')

    # The potrace viewBox (both should be same since masks are same size)
    vb_match = re.search(r'viewBox="([^"]+)"', blue_svg)
    viewbox = vb_match.group(1)
    # Parse viewBox to get dimensions for clipPath
    vb_parts = viewbox.split()
    vb_w, vb_h = float(vb_parts[2]), float(vb_parts[3])

    # Use a clipPath to mask out the bounding-box fill from evenodd rendering
    # The clipPath is slightly inset so the bbox edge doesn't show
    inset = 0.5
    final_svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}"
  preserveAspectRatio="xMidYMid meet">
  <defs>
    <clipPath id="logo-clip">
      <rect x="{inset}" y="{inset}" width="{vb_w - 2*inset}" height="{vb_h - 2*inset}"/>
    </clipPath>
  </defs>
  <g clip-path="url(#logo-clip)">
    {blue_g}
    {green_g}
  </g>
</svg>'''

    Path(output_path).write_text(final_svg)
    print(f"Logo saved to {output_path}")

    # PNG preview
    try:
        import cairosvg
        cairosvg.svg2png(url=output_path, write_to='public/logo_preview.png',
                         output_width=960, background_color='#212128')
        print("Preview saved to public/logo_preview.png")
    except Exception as e:
        print(f"Could not generate preview: {e}")


if __name__ == "__main__":
    main()
