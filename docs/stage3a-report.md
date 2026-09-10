# Stage 3A — schedule, locations and SEO safety

Starting SHA: `cd45492990bec995ce96428fdf2db858174558cc` (current `origin/main`).
Branch: `feat/stage-3a-secondary-pages`, created directly from main.
Framework: Next 16.3.4 / React and React DOM 19.3.0, unchanged.
Ending SHA is included in the final handoff; this report travels with the implementation.

## Preflight

`npm install`, typecheck, lint, 30 existing unit tests, production build and the existing HTTP route/SEO/image validator passed before feature work. GitHub reported the main Vercel deployment successful. Main's package manifest remains unchanged. `npm install` synchronized the existing lockfile with main's declared dependencies; Next type generation corrected main's JSX setting to its required `react-jsx`. Neither is imported from the experimental Next 15 branch. No Next 15 branch was merged.

Photography remained active and true browser/crawler 404 responses were verified. No Supabase or Netlify package/runtime integration is present. The existing local `.gitignore` change is excluded.

## Implemented pages

English: `/en/schedule`, `/en/locations`, and `/en/locations/{luquillo,palmas-del-mar,rio-grande,naguabo}`.

Spanish: `/es/horario`, `/es/lugares`, and `/es/lugares/{luquillo,palmas-del-mar,rio-grande,naguabo}`.

Reusable PageHero, EditorialSection, ImageTextSection, CTASection and LocationLinks compose three page types; one location detail component serves all four places. The homepage component sequence is unchanged. Header language controls and the mobile menu received contrast fixes; language-switch links retain query/hash values after hydration.

The schedule uses the existing AcuityScheduler boundary with an optional heading and a deliberate unconnected state. It explains future online reservations, links to Instagram for inquiries, and provides location shortcuts and a conditional three-step booking explanation. No fake timetable, form, payment integration, or Acuity connection is included. ATH claims are omitted from this new page.

## Content and publication authority

`lib/secondary-content.ts` contains typed EN/ES schedule, locations index, individual locations, editorial copy, CTAs, SEO titles/descriptions, and optional venue fields. The original homepage/placeholder content stays in `lib/content.ts`. Missing venue details produce no headings or boxes. Images are not attributed to specific towns or venues.

`lib/routes.ts` retains semantic routing and now owns publication status. Valid routes and published routes remain separate. Completed pages use unique metadata selected centrally in `lib/seo.tsx`; canonical, reciprocal en/es/x-default, OpenGraph, Twitter and Organization JSON-LD are preserved. No LocalBusiness address schema was added.

Indexable / sitemap URLs (15):

- `/`
- `/en`, `/es`
- `/en/schedule`, `/es/horario`
- `/en/locations`, `/es/lugares`
- `/en/locations/luquillo`, `/es/lugares/luquillo`
- `/en/locations/palmas-del-mar`, `/es/lugares/palmas-del-mar`
- `/en/locations/rio-grande`, `/es/lugares/rio-grande`
- `/en/locations/naguabo`, `/es/lugares/naguabo`

Noindex/follow AND excluded from sitemap (navigation remains functional):

- `/en/gatherings`, `/es/encuentros`
- `/en/retreats`, `/es/retiros`
- `/en/about`, `/es/acerca`
- `/en/contact`, `/es/contacto`

`NEXT_PUBLIC_SITE_URL` remains the sole canonical-origin authority. Vercel production and preview scopes must have the intended canonical origin configured and be rebuilt. Localhost remains the local fallback; no Vercel hostname or future custom domain was hardcoded. Actual environment configuration cannot be asserted without preview access.

## Validation

- TYPECHECK: PASS.
- LINT: PASS, zero warnings.
- TEST: PASS, 46 unit tests (30 existing plus publication, unique bilingual metadata, optional-field omission, and completed route switching tests).
- BUILD: PASS, Next 16 Webpack, lint and TypeScript gates enabled.
- ROUTING: PASS locally: all valid routes, 20 wrong/unknown paths as true 404 for browsers and Googlebot, language switches for all completed routes.
- SEO: PASS locally: unique completed-page titles/descriptions, robots directives, canonical/hreflang, OG/Twitter, Organization JSON-LD, 15-URL sitemap and robots.
- IMAGE PROVENANCE: PASS: all eight public photos hash-identical to their supplied WebP originals; optimized responses remain smaller and valid WebP.
- ARCHITECTURE BOUNDARY: PASS: Next 16/main authority, Vercel, locale root layouts and static generation preserved; no excluded feature integration.
- Responsive browser checks: all 12 completed routes at 375, 768 and 1440 pixels, one H1, image decoding, both language directions, no horizontal overflow or page runtime errors. Homepage still has ten photo placements and its Instagram embed.

## Vercel acceptance

Pending branch deployment and authorized preview access. The existing main deployment's generated URL redirects to Vercel SSO. An authorized shareable preview link/access has been requested. Local checks are not a substitute for the required Vercel acceptance; overall status is BLOCKED until the deployed preview can be checked.

## File inventory

Created: `lib/secondary-content.ts`, `components/secondary/editorial.tsx`, `components/secondary/pages.tsx`, `tests/secondary.test.mjs`, `docs/stage3a-report.md`.

Modified: `app/[locale]/[[...segments]]/page.tsx`, `app/sitemap.ts`, `components/acuity-scheduler.tsx`, `components/language-switcher.tsx`, `components/mobile-nav.tsx`, `components/site-header.tsx`, `lib/routes.ts`, `lib/seo.tsx`, `scripts/verify-routes.mjs`, `README.md`, `package-lock.json`, `tsconfig.json`.

Removed: none. Direct dependencies and package scripts changed: none.

## BUSINESS_FACT_REQUIRED and known limits

- Confirm the deployment canonical origin in Vercel settings.
- Connect/configure Acuity only in a separately authorized stage; confirm offerings, dates, times, prices and booking details first.
- Confirm venue, address, directions, parking, what to bring and weather notes for each location before populating the optional fields.
- ATH handling is unconfirmed; the new schedule omits it. The previously approved homepage copy is otherwise preserved.
- No instructor credentials, exact addresses, amenities, class duration, capacities, refund rules or weather policies were invented.
- Gatherings, Retreats, About and Contact remain unfinished but explicitly noindex. No event routes were introduced.
- Source photography is authentic but exact photo locations are unverified; captions do not identify a venue.
- Fonts still require network access during a fresh build. Bolt/WebContainer is not used as an acceptance environment.

Stop after Stage 3A. No later content slices or Acuity connection are included.
