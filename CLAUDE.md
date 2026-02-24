# Simply Irrigation LLC - Agent Instructions

## Project Overview
Next.js 16 marketing site for Simply Irrigation LLC, an irrigation services company.
Tech: Next.js 16.1.6 (App Router, Turbopack), Tailwind CSS v4, TypeScript, Lucide React, Resend email.

## Multi-Agent Orchestration (MANDATORY)
You are the **orchestrator**. You do NOT do implementation work directly. Your role is to:
- Break tasks into parallel workstreams
- Spawn **5+ sub-agents** using the Task tool for every non-trivial task
- Coordinate results and resolve conflicts between agent outputs
- Communicate progress and decisions to the user

### Agent Pipeline
For every task, spawn these agents. **Maximize parallelism** — launch all independent agents simultaneously:

**Wave 1 (parallel):**
1. **Explore agent** (`subagent_type: Explore`) — Research codebase, find relevant files, map current patterns
2. **Plan agent** (`subagent_type: Plan`) — Design implementation approach, identify files to change

**Wave 2 (parallel, after Wave 1):**
3. **Code agent** (`subagent_type` matching the work: `frontend-design`, `javascript-typescript:typescript-pro`, `full-stack-orchestration:full-stack-feature`, etc.) — Implement changes
4. **SEO/Content agent** (when applicable, `subagent_type: general-purpose`) — Validate SEO, schema, content quality

**Wave 3 (parallel, after Wave 2):**
5. **Code Review agent** (`subagent_type: code-refactoring:code-reviewer`) — Review all changes for quality, security, consistency
6. **Test agent** (`subagent_type: codebase-cleanup:test-automator` or Bash) — Run `npm run build`, validate correctness

### Rules
- **Always spawn at least 5 agents** per non-trivial task. More is fine.
- **Never do implementation work in the main thread** — delegate to sub-agents.
- **Run independent agents in the same message** to maximize parallelism.
- If a task has multiple independent changes (e.g., fix 3 files), spawn **separate code agents for each** in parallel.
- After all agents complete, summarize results to the user concisely.
- **Do not ask the user for permission to start work.** When a task is clear, begin immediately by spawning agents. Only ask clarifying questions when requirements are genuinely ambiguous.

## Brand
- Colors: Blue #4992DF, Green #87B66D, Dark #212128
- Professional tone, service-focused content

## Architecture
- App Router with 24 routes (services, blog, legal, contact)
- Dynamic routes use `params: Promise<{}>` pattern (Next.js 16 — must await)
- Tailwind v4: `@import "tailwindcss"` and `@theme inline` syntax
- Resend must be lazily instantiated inside route handlers, never at top level

## Key Directories
- `app/` — Pages and API routes
- `app/services/[slug]/page.tsx` — 5 service detail pages
- `app/blog/[slug]/page.tsx` — 3 blog posts
- `app/api/contact/route.ts` — Contact form (Resend)
- `components/` — Shared components (JsonLd, GoogleAnalytics, Header, Footer)
- `lib/blog.ts` — Blog post content data
- `public/` — Static assets and images

## Agent Guidelines
- Read existing code before modifying. Understand patterns first.
- Follow existing conventions: component structure, naming, styling patterns.
- Keep changes minimal and focused on the task at hand.
- Do not add unnecessary abstractions, comments, or type annotations.
- Do not modify unrelated files or add features not requested.
- Test builds with `npm run build` after significant changes.

## Environment Variables
- `RESEND_API_KEY` — Required for contact form email delivery
- `NEXT_PUBLIC_GA_ID` — Required for Google Analytics 4 tracking

## Common Pitfalls
- Resend top-level instantiation breaks builds without API key
- Dynamic route params must be awaited in Next.js 16
- Tailwind v4 dark mode is overridden to class-based (effectively disabled)
- Logo SVG uses transformed coordinates (scale 0.1, translate)

## Code Quality
- No unused variables or imports
- Prefer editing existing files over creating new ones
- Run ESLint via `npx next lint` to check for issues
- Images in `public/` should be optimized before committing
