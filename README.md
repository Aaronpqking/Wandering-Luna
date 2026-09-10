# Wandering Luna

A bilingual foundation for Wandering Luna's yoga, ritual, gatherings and retreat presence in Eastern Puerto Rico. The approved homepage design, section order and supplied photography are preserved. Secondary pages remain placeholders for confirmed content.

## Stack and development

Node.js 22, Next.js 16.3.4 App Router, React / React DOM 19.3.0, TypeScript 5.9, Tailwind CSS 3.4 and Lucide icons. ESLint uses Next's flat configuration. There is no shadcn/Radix starter component library in the live application.

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm start
# In another terminal, with the production server running:
npm run verify:routes
```

`npm run build` uses Next 16's supported Webpack compiler because Turbopack's CSS worker could not bind its IPC port in the remediation environment. It runs lint first via `prebuild`; lint errors or warnings stop the build. Next 16 does not run ESLint itself. `typecheck` generates Next route types before running TypeScript, including on a fresh checkout. Tests use Node's built-in runner and TypeScript stripping; no test framework dependency is needed. Use Node 22.18 or later in the 22.x line for the validation scripts.

## V1 architecture and routing

`lib/content.ts` owns bilingual copy. `lib/routes.ts` is the authority for route translation, allowed routes, static generation, the language switcher and sitemap paths. `lib/seo.tsx` uses the same authority for canonical URLs, en/es/x-default alternates, OpenGraph, Twitter and Organization JSON-LD.

| English | Spanish |
| --- | --- |
| `/en` | `/es` |
| `/en/schedule` | `/es/horario` |
| `/en/gatherings` | `/es/encuentros` |
| `/en/retreats` | `/es/retiros` |
| `/en/about` | `/es/acerca` |
| `/en/contact` | `/es/contacto` |
| `/en/locations` | `/es/lugares` |

Location detail routes append one of `luquillo`, `palmas-del-mar`, `rio-grande`, or `naguabo` to the localized location index. Only these four location slugs render. Unknown paths, wrong-language aliases, extra segments, and all unconfirmed event/gathering/retreat detail slugs return HTTP 404.

`/` remains a neutral English/Español chooser without browser-language redirection. `app/(entry)/layout.tsx` and `app/[locale]/layout.tsx` are separate root layouts. The latter awaits route params and renders the document language on the server. Crossing root layouts performs a full page navigation, as Next documents. There is no client-side mutation of `html.lang`.

## Acuity boundary and non-goals

`components/acuity-scheduler.tsx` remains the original placeholder abstraction. Acuity is the future operational source of truth for schedules, availability and booking. No Acuity API, iframe, credentials or fake schedule has been added.

V1 excludes Supabase, a database, authentication, custom admin, custom booking logic, Stripe integration, Acuity/ATH APIs, CMS and new business features. Venue/event/retreat details must be confirmed before expanding the placeholder routes.

## Vercel deployment and environment

Deploy to **Vercel**, using its Next.js preset, Node 22 and the build command **`npm run build`** so the lint gate runs. No `vercel.json` is needed. Netlify configuration and dependencies have been removed.

Copy `.env.example` to `.env.local` for local configuration:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Confirmed absolute HTTP(S) origin, without path, query, credentials or fragment | `http://localhost:3000` |
| `TEST_BASE_URL` | Optional address of the server used by `verify:routes` | `http://localhost:3000` |

`lib/site-config.ts` is the only site-origin and social-URL authority. Set `NEXT_PUBLIC_SITE_URL` in Vercel **before building** and rebuild after changes. Its localhost fallback is for development; it is not a production business fact. Use the same site URL when running validation against a configured build. Instagram is the confirmed `@wandering_luna_` handle. The homepage lazily embeds the supplied public post `DX4RTARjoxj`, with an always-visible direct post link if Instagram is blocked or unavailable. The embed is served by Instagram and may use its cookies. This is a featured post, not an automatically updating feed; adding a full feed requires account-authorized integration or a supplied feed-widget embed. No Instagram access tokens, scraper, or new package was added.

The homepage uses eight real Wandering Luna photographs selected from the 23 uploaded assets. All served images in `public/photos/` are genuine WebP files; stock sources were removed. The original-resolution WebP collection is in `assets/wandering-luna-webp/`, and [photo sources](docs/photo-sources.json) maps each section to its upload. Next/Vercel generates responsive delivery at quality 85; the hero is preloaded and other images load lazily. Bilingual alt text lives in `lib/image-alt.ts`. Image containers retain their aspect ratios, with crop positions adjusted for the uploaded portraits.

## BUSINESS_FACT_REQUIRED

These markers are internal documentation/comments and must never appear in public copy:

- Confirm the owned production domain and configure `NEXT_PUBLIC_SITE_URL` before launch.
- Confirm exact venues, addresses, access instructions, environmental features and operational details for all four locations.
- Confirm class schedules, availability, event/retreat slugs, dates, prices and booking details before adding data or connecting Acuity.
- Confirm which offerings accept ATH Móvil before extending the preserved payment note.
- Supply a verified direct contact channel and confirm Nicole's biography/portrait attribution before expanding the About and Contact placeholders. Image alt text does not infer identity.
- Confirm any legal business name, telephone or opening hours before publication; these are not present in structured data.

The homepage marketing intent is preserved. Unconfirmed venue-specific claims were replaced with conservative location copy.

## Validation and maintenance notes

See [the baseline](docs/remediation-baseline.json) for the original dependency versions and pre-install check failures, and [the remediation report](docs/remediation-report.md) for final results and file/dependency inventories. The HTTP validation script checks every supported route, document language, language-switch links, reciprocal SEO alternates, 404 status for browsers and crawlers, sitemap/robots and actual optimized image responses.

ESLint 9.39.5 is deprecated upstream but remains compatible with the ESLint peer ranges of Next 16.3.4's bundled import, React and accessibility plugins. Reassess ESLint 10 when those plugins support it; do not force incompatible peers. The Tailwind 3 toolchain also brings deprecated `glob` 10.5.0; the final npm audit reports zero known vulnerabilities. Google fonts retain the original `next/font/google` setup and require network access during a clean build.

Migration references: [Next 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16), [root layouts](https://nextjs.org/docs/app/api-reference/file-conventions/layout), [image component](https://nextjs.org/docs/app/api-reference/components/image).

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-cprkazts)
