# Stage 3B — complete public V1 content

## Source and baseline

Starting SHA: `131ea9fb36a1771f0152ba7670c7706ed83250ca`.
Source branch: `feat/stage-3a-secondary-pages`.
Work branch: `feat/stage-3b-public-content`.

The user explicitly authorized an override of the updated-main prerequisite after confirming Stage 3A was promoted through Vercel. Main still pointed to `cd45492990bec995ce96428fdf2db858174558cc` at the source check. This branch starts from the accepted Stage 3A commit, not old main or the experimental Next 15 branch.

Baseline: Next 16.3.4, React/React DOM 19.3.0. Package lock was clean and matched the committed Stage 3A lock; no install or dependency modification was needed. Baseline typecheck, lint, all 46 existing tests and production build passed before feature work. Stage 3A schedule/locations, unique metadata and routePublication were present; the four unfinished families were initially noindex. Vercel remains the deployment target; no Supabase, Netlify or connected Acuity integration exists.

## Pages and content

Implemented `/en/gatherings`, `/es/encuentros`, `/en/retreats`, `/es/retiros`, `/en/about`, `/es/acerca`, `/en/contact`, `/es/contacto`.

All reuse Stage 3A's editorial vocabulary. Typed EN/ES content is centralized in `lib/secondary-content.ts`, including unique title/description pairs, editorial sections, captions, future states and action labels. The generic PlaceholderPage and its unused content records are removed.

- Gatherings: shared practice, reflection, ritual and community; two supplied photographs; honest upcoming-announcement state; Instagram and Schedule actions. No event records or detail routes.
- Retreats: prominent supplied retreat photograph, philosophy of longer-form practice, what confirmed future announcements will communicate, and Contact action. No invented dates, destinations, inclusions or reservations.
- About: Nicole's approved portrait, her role behind Wandering Luna, approach to practice and connection to Puerto Rico/community; Locations and Schedule actions. No credentials or teaching-history claims.
- Contact: Instagram inquiry guidance, substantive next-step sections for practice/gatherings/retreats, and no form/backend. Optional email, phone and WhatsApp fields are centralized in `lib/site-config.ts`; absent/blank fields render no links.

## Publication and SEO

All current V1 routes are indexable. Contact is substantive enough to publish: it provides the confirmed channel, guidance on starting an inquiry, the current booking boundary and links to relevant content, not just an isolated social link.

Sitemap count: 23 URLs, verified against actual XML: one neutral root plus 11 EN and 11 ES destinations.

Indexable paths:

- `/`
- `/en`, `/es`
- `/en/schedule`, `/es/horario`
- `/en/gatherings`, `/es/encuentros`
- `/en/retreats`, `/es/retiros`
- `/en/about`, `/es/acerca`
- `/en/contact`, `/es/contacto`
- `/en/locations`, `/es/lugares`
- `/en/locations/{luquillo,palmas-del-mar,rio-grande,naguabo}` and their `/es/lugares/` equivalents

Noindex valid routes: none. Unknown paths, wrong-language aliases and unconfirmed nested event/retreat paths remain true 404, never sitemap entries.

Publication decisions stay in routePublication. The existing metadata and sitemap implementation consume the expanded typed content and centralized publication state. Canonical, reciprocal EN/ES/x-default, OpenGraph, Twitter and Organization JSON-LD are retained. No LocalBusiness address data is added. README explicitly requires the intended `NEXT_PUBLIC_SITE_URL` in Vercel production/preview scopes; localhost remains the validated local fallback.

## Validation

- TYPECHECK: PASS.
- LINT: PASS, zero warnings.
- TEST: PASS, 56 tests, including all prior routing checks, all completed metadata/publication assertions and optional contact channel tests.
- BUILD: PASS, Next 16 Webpack with the existing lint and TypeScript gates.
- ROUTING / SEO: PASS locally. HTTP validator covers all 22 locale URLs plus root, 32 invalid routes for both browser and crawler, new page dispatch, unique metadata, robots, sitemap, canonical/hreflang and image delivery.
- ACCESSIBILITY / RESPONSIVE: PASS for the scoped checks: all eight new routes at 375, 390, 430, 768 and 1440px; one H1, logical heading progression, no horizontal overflow, meaningful localized image alt, visible keyboard focus, link/button dimensions of at least approximately 44px, both language directions and mobile Escape-to-close. Shared header/footer target sizes and footer contrast improved. This is not a formal accessibility certification.
- IMAGE PROVENANCE: PASS. Eight served photos remain byte-identical to supplied WebP source files. New pages only reuse those sources through next/image. New leading images preload; later images remain lazy. No important copy is embedded in imagery.
- ARCHITECTURE BOUNDARY: PASS. Homepage components, Stage 3A page components, font setup, palette, reduced-motion CSS, package manifest and lockfile are unchanged. Shared navigation now exposes all destinations, with a mobile/tablet menu to avoid crowding. No CMS, auth, database, payments, contact backend or Acuity integration.

Final local production runtime validation also passed: the full HTTP routing/SEO/image validator and all 40 browser route/viewport checks completed with no runtime or hydration errors.

Vercel Preview successfully deployed implementation commit `d7170f0ea27b3d2997b8cef357127254d4af5d4d` (deployment `6378316821`):
https://wandering-luna-nukfrotsd-eleanor-v1.vercel.app

On September 10, 2026, requesting `/en/gatherings` returned HTTP 302 to Vercel SSO. Required preview runtime acceptance and deployed-origin verification are BLOCKED by access protection. Local checks do not substitute for the requested preview runtime checks. Overall status: BLOCKED pending an authorized accessible preview. No production promotion was performed.

## Files

Created:

- `components/secondary/public-pages.tsx`
- `tests/contact.test.mjs`
- `docs/stage3b-report.md`

Modified:

- `app/[locale]/[[...segments]]/page.tsx`
- `components/secondary/editorial.tsx`
- `components/language-switcher.tsx`
- `components/mobile-nav.tsx`
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `lib/content.ts`
- `lib/secondary-content.ts`
- `lib/routes.ts`
- `lib/site-config.ts`
- `tests/secondary.test.mjs`
- `scripts/verify-routes.mjs`
- `README.md`

Removed: `components/placeholder-page.tsx`.

PACKAGE.JSON CHANGED: NO.
PACKAGE-LOCK CHANGED: NO.
No dependencies added or changed.

## Missing facts and known risks

BUSINESS_FACT_REQUIRED extension points cover Nicole's personal story, training, certifications and teaching history; real gathering/retreat records and their operational details; optional contact channels; and the production canonical origin. No response-time promise, phone/email, medical claim, private-session availability, venue policy or retreat inclusion is invented.

Instagram remains an external contact service; there is no guaranteed response time or integrated messaging. Acuity remains unconnected, with no payments or custom booking/contact forms.

Vercel preview protection previously redirected unauthenticated requests to SSO. Authorized preview access was requested for this slice. Production promotion is not authorized by this task and will not be performed.

Fonts need network access on a fresh build. The pinned Browserslist data can emit a stale-data notice; package files remain unchanged as requested. The existing favicon request returns 404 and is separate from page runtime checks.

Generated AGENTS.md and CLAUDE.md remain local and uncommitted, alongside the pre-existing .gitignore edit. Automatic approval review rejected their cleanup; no workaround was attempted. They are not part of Stage 3B.

Next recommended phase: finish protected-preview acceptance and obtain editorial/operational confirmation, then scope Acuity integration separately. Do not start Stage 4 or connect any integration automatically.
