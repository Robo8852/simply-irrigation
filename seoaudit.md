 Based on the audit I already ran earlier this session, here's where everything stands:

  What You HAVE

  ┌──────────────────────────┬───────────────────┬──────────────────────────────────────────┐
  │         Element          │      Status       │                 Location                 │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Schema: LocalBusiness    │ Done              │ components/JsonLd.tsx (root layout)      │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Schema: Organization     │ Done              │ components/JsonLd.tsx (root layout)      │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Schema: FAQPage          │ Done              │ app/faq/page.tsx + each service page     │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Schema: Article          │ Done              │ app/blog/[slug]/page.tsx                 │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Schema: AggregateRating  │ Done              │ app/testimonials/page.tsx                │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Schema: Service          │ Done (just added) │ app/services/[slug]/page.tsx             │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ robots.txt               │ Done              │ app/robots.ts                            │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Sitemap                  │ Done (just fixed) │ app/sitemap.ts — all 24 routes           │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ FAQ page                 │ Done              │ app/faq/page.tsx — 18 Q&As + schema      │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Service area page        │ Done              │ app/service-area/page.tsx with ZIP codes │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ OG/Twitter cards         │ Done (just added) │ Blog + service pages                     │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Meta titles/descriptions │ Done              │ All pages                                │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ llms.txt                 │ Done (just added) │ public/llms.txt                          │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ GA4                      │ Done              │ Needs NEXT_PUBLIC_GA_ID env var          │
  ├──────────────────────────┼───────────────────┼──────────────────────────────────────────┤
  │ Image optimization       │ Done              │ avif/webp, lazy loading, priority LCP    │
  └──────────────────────────┴───────────────────┴──────────────────────────────────────────┘

  What's Still MISSING

  1. Google Search Console — not verified yet (env var ready, you need to register)
  2. Google Business Profile link — sameAs has Facebook/Instagram but no GBP URL
  3. BreadcrumbList schema — no breadcrumb markup on service/blog pages
  4. HowTo schema — could add to service pages (installation, maintenance)
  5. WebSite schema with SearchAction — helps sitelinks in Google
  6. Social profiles — need to confirm Facebook/Instagram URLs are real
  7. More blog content — only 3 posts, thin for topical authority
  8. Internal cross-linking — service pages don't link to related services, FAQ, or testimonials
  9. Review/citation sites — no Yelp, Angi, HomeAdvisor presence in schema

  Want me to tackle items 3-5 (BreadcrumbList, HowTo, WebSite schemas)? Those are the highest-impact remaining gaps for
  structured data.