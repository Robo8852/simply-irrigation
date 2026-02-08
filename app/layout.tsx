import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, localBusinessSchema, organizationSchema } from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simplyirrigationllc.com"),
  title: {
    default: "Simply Irrigation LLC | Sprinkler & Irrigation Services in Bradenton, FL",
    template: "%s | Simply Irrigation LLC",
  },
  description:
    "Professional irrigation installation, repair, and maintenance in Bradenton, Sarasota, and Lakewood Ranch, FL. Licensed & insured. Call 941-538-2593 for a free estimate.",
  keywords: [
    "irrigation installation Bradenton FL",
    "sprinkler repair Bradenton",
    "irrigation maintenance Sarasota",
    "landscaping Bradenton FL",
    "sprinkler system Lakewood Ranch",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simplyirrigationllc.com",
    siteName: "Simply Irrigation LLC",
    title: "Simply Irrigation LLC | Sprinkler & Irrigation Services in Bradenton, FL",
    description:
      "Professional irrigation installation, repair, and maintenance in Bradenton, Sarasota, and Lakewood Ranch, FL. Call 941-538-2593.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Simply Irrigation LLC - Professional Sprinkler Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simply Irrigation LLC | Bradenton, FL",
    description:
      "Expert irrigation installation, repair & maintenance. Serving Bradenton, Sarasota & Lakewood Ranch. Call 941-538-2593.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={organizationSchema} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
