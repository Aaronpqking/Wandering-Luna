# Foundation remediation report

STATUS: PASS

STARTING SHA: `0f5ad68fc9f9a5ad1e7a84cf358ae383aff7c05c`  
ENDING SHA: `0f5ad68fc9f9a5ad1e7a84cf358ae383aff7c05c`  
Branch: `main`. Changes remain uncommitted for review; no deployment or merge was performed. The pre-existing `.gitignore` change was preserved and is excluded from the implementation inventory.

NEXT VERSION: 16.3.4  
REACT / REACT DOM VERSION: 19.3.0  
TypeScript: 5.9.3. ESLint: 9.39.5 with eslint-config-next 16.3.4. Node used: 22.22.2; npm: 10.9.7.

## Verification

| Check | Result | Evidence |
| --- | --- | --- |
| npm install | PASS | Final install up to date, 431 packages audited, zero known vulnerabilities |
| Clean lockfile install | PASS | npm ci succeeded without peer conflicts; deprecation warnings noted below |
| TYPECHECK | PASS | npm run typecheck: Next route generation and tsc --noEmit |
| LINT | PASS | npm run lint executes ESLint with zero allowed warnings; prebuild enforces it |
| BUILD | PASS | npm run build: lint gate and Next 16.3.4 Webpack production build |
| Route unit tests | PASS | 30 Node built-in tests; no testing dependency added |
| ROUTING VALIDATION | PASS | Root plus all 22 localized routes; 20 invalid URLs return real HTTP 404 for ordinary and Googlebot requests |
| SEO/HREFLANG VALIDATION | PASS | Canonical, reciprocal en/es/x-default, OG, Twitter, Organization JSON-LD, all 22 sitemap URLs and robots |
| IMAGE OPTIMIZATION | PASS | Eight live image optimizer requests returned smaller WebP responses; hero preloaded, other images lazy |
| ARCHITECTURE BOUNDARY | PASS | Four runtime dependencies; no Supabase, Netlify, booking/payment/auth/database/CMS additions; AcuityScheduler unchanged |
| Browser smoke checks | PASS | Chrome desktop and mobile navigation, language switching, SSR language, loaded images, stable image geometry, no horizontal overflow or hydration/runtime errors |
| Diff hygiene | PASS | git diff --check; source images, globals.css and AcuityScheduler unchanged |

Before implementation, build, typecheck and lint all failed to start because dependencies were not installed (`next`/`tsc`: command not found). These were not passing baseline checks. [The full baseline](remediation-baseline.json) records every original package version.

## Implementation

- Migrated async App Router params and installed patched Next 16 / React 19 packages.
- Split the neutral entry root layout from the localized root layout to server-render the correct `html.lang` without client mutation. Kept the chooser's markup and homepage design/section order.
- Centralized semantic locale paths in `lib/routes.ts`, including known location slugs and strict route validation. Unknown event, gathering and retreat slugs do not render placeholders.
- Centralized site origin and the confirmed Instagram URL; removed the assumed production domain. Added reciprocal sitemap/SEO alternates using the route authority and rejected invalid routes before metadata generation.
- Enabled Next image optimization at quality 85, corrected responsive sizes without changing aspect containers, replaced deprecated image priority with preload, and reviewed bilingual alt text against every original photograph.
- Replaced unsupported location venue/environment claims and corrected targeted Spanish mixed-language defects. Retained marketing intent and existing operational placeholders.
- Removed unused starter components and their dependencies, Supabase, Netlify configuration and the obsolete SWC WASM dependency. Moved build/type/lint tools into devDependencies.
- Replaced the README with project architecture, commands, routing, Vercel setup, environment variables, business-fact requirements and non-goals.

## HTTP route coverage

`/` returns 200 with English and Español choices even when the browser requests Spanish.

| English (200, lang=en) | Spanish (200, lang=es) |
| --- | --- |
| /en | /es |
| /en/schedule | /es/horario |
| /en/gatherings | /es/encuentros |
| /en/retreats | /es/retiros |
| /en/about | /es/acerca |
| /en/contact | /es/contacto |
| /en/locations | /es/lugares |
| /en/locations/luquillo | /es/lugares/luquillo |
| /en/locations/palmas-del-mar | /es/lugares/palmas-del-mar |
| /en/locations/rio-grande | /es/lugares/rio-grande |
| /en/locations/naguabo | /es/lugares/naguabo |

404s checked: `/en/garbage`, `/es/cualquier-cosa`, `/en/locations/not-a-location`, `/es/lugares/no-existe`, `/en/events/test`, `/es/eventos/test`, `/en/gatherings/test`, `/es/encuentros/test`, `/en/retreats/test`, `/es/retiros/test`, `/en/schedule/extra`, `/es/horario/extra`, `/en/locations/luquillo/extra`, `/es/lugares/luquillo/extra`, `/en/horario`, `/es/schedule`, `/en/lugares`, `/es/locations`, `/fr`, `/garbage`. Invalid pages emit neither a canonical nor Organization JSON-LD.

Chrome additionally clicked through schedule, Luquillo, Palmas del Mar and homepage language switches in both directions, checked the mobile menu switch, and verified the Spanish branded 404. Desktop checks used 1440×1000; mobile used 390×844. HTTP validation is reproducible with `npm run verify:routes` against a running production server.

## Image delivery measurements

Responses from `/_next/image`, width 640, quality 85, Accept image/webp:

| Image | Source bytes | Delivered bytes |
| --- | ---: | ---: |
| hero | 1,885,980 | 54,066 |
| about-nicole | 1,694,286 | 34,032 |
| practice-yoga | 1,809,084 | 51,444 |
| practice-gatherings | 1,817,260 | 50,444 |
| practice-retreats | 1,510,600 | 64,032 |
| gatherings-night-circle | 1,773,251 | 41,336 |
| gatherings-candle | 1,480,116 | 21,108 |
| social-group | 1,959,453 | 57,564 |

All source assets remain unchanged. Seven `.webp`-named sources contain PNG data; Next correctly detected and optimized them. No duplicate source variants were added. Image bounding boxes remained stable when lazy images finished loading in Chrome; this is a smoke check, not a field Core Web Vitals measurement.

## Dependencies

60 original direct dependencies → 13 total: four runtime and nine development dependencies. No new direct package names were added. Existing packages were upgraded or moved to devDependencies. Temporary `playwright-core` tooling was installed outside the repository for Chrome checks.

Runtime: `next`, `react`, `react-dom`, `lucide-react`.

Development: `@types/node`, `@types/react`, `@types/react-dom`, `autoprefixer`, `eslint`, `eslint-config-next`, `postcss`, `tailwindcss`, `typescript`.

DEPENDENCIES REMOVED:

- `@hookform/resolvers`
- `@netlify/plugin-nextjs`
- `@next/swc-wasm-nodejs`
- `@radix-ui/react-accordion`
- `@radix-ui/react-alert-dialog`
- `@radix-ui/react-aspect-ratio`
- `@radix-ui/react-avatar`
- `@radix-ui/react-checkbox`
- `@radix-ui/react-collapsible`
- `@radix-ui/react-context-menu`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-hover-card`
- `@radix-ui/react-label`
- `@radix-ui/react-menubar`
- `@radix-ui/react-navigation-menu`
- `@radix-ui/react-popover`
- `@radix-ui/react-progress`
- `@radix-ui/react-radio-group`
- `@radix-ui/react-scroll-area`
- `@radix-ui/react-select`
- `@radix-ui/react-separator`
- `@radix-ui/react-slider`
- `@radix-ui/react-slot`
- `@radix-ui/react-switch`
- `@radix-ui/react-tabs`
- `@radix-ui/react-toast`
- `@radix-ui/react-toggle`
- `@radix-ui/react-toggle-group`
- `@radix-ui/react-tooltip`
- `@supabase/supabase-js`
- `class-variance-authority`
- `clsx`
- `cmdk`
- `date-fns`
- `embla-carousel-react`
- `input-otp`
- `next-themes`
- `react-day-picker`
- `react-hook-form`
- `react-resizable-panels`
- `recharts`
- `sonner`
- `tailwind-merge`
- `tailwindcss-animate`
- `vaul`
- `zod`

DEPENDENCIES ADDED: none. The lockfile includes the upgraded packages' required transitive dependencies.

## Remaining BUSINESS_FACT_REQUIRED items

- Owned production domain; set NEXT_PUBLIC_SITE_URL before a Vercel production build.
- Exact venues, addresses, access instructions, environment and operational details for the four locations.
- Confirmed schedules, availability, event/retreat details, prices and booking configuration before any Acuity connection.
- Which offerings accept ATH Móvil, before extending the preserved payment note.
- Verified direct contact channel and Nicole biography/portrait attribution before expanding placeholders.
- Any legal business name, phone or opening hours before adding those facts; none were invented in structured data.

## Known risks and limits

- The environment blocked Google font fetching in the sandbox, then Turbopack's CSS worker failed to bind its IPC port. The final build uses the officially supported Next 16 Webpack option and succeeded with network access for the existing fonts. Vercel should run `npm run build` to retain the lint gate. No deployment was performed.
- ESLint 9.39.5 is deprecated upstream, but Next's bundled import/React/accessibility plugins declare peer ranges through ESLint 9. ESLint 10 was incompatible with those peer ranges and is not forced into the project. Tailwind 3's transitive glob 10.5.0 also emits a deprecation warning. Final npm install/npm ci reported zero audit findings.
- On this macOS setup, npm ls labels two WASM support packages as extraneous even after npm ci. They are generated installation artifacts, not direct dependencies or committed application code; native image optimization passed.
- A missing site URL intentionally falls back to localhost. That fallback must be replaced by the confirmed origin before launch, and the site rebuilt. Production ownership and Acuity credentials remain unverified.
- Separate root layouts trigger a full document navigation between the root chooser and localized pages; language switching was checked in Chrome. Cross-browser testing and production field performance were not measured.

## Files modified

- `README.md`
- `app/[locale]/[[...segments]]/page.tsx`
- `app/[locale]/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `components/home/about.tsx`
- `components/home/final-cta.tsx`
- `components/home/gatherings.tsx`
- `components/home/hero.tsx`
- `components/home/locations.tsx`
- `components/home/practice.tsx`
- `components/home/retreats.tsx`
- `components/home/schedule.tsx`
- `components/home/social.tsx`
- `components/language-switcher.tsx`
- `components/mobile-book-bar.tsx`
- `components/mobile-nav.tsx`
- `components/placeholder-page.tsx`
- `components/site-footer.tsx`
- `components/site-header.tsx`
- `lib/content.ts`
- `lib/seo.tsx`
- `next.config.js`
- `package-lock.json`
- `package.json`
- `postcss.config.js`
- `tailwind.config.ts`
- `tsconfig.json`

## Files added

- `.env.example`
- `app/(entry)/layout.tsx`
- `app/(entry)/page.tsx`
- `app/[locale]/not-found.tsx`
- `docs/remediation-baseline.json`
- `docs/remediation-report.md`
- `eslint.config.mjs`
- `lib/fonts.ts`
- `lib/image-alt.ts`
- `lib/routes.ts`
- `lib/site-config.ts`
- `scripts/verify-routes.mjs`
- `tests/routes.test.mjs`

## Files removed

- `.eslintrc.json`
- `app/layout.tsx`
- `app/page.tsx`
- `components.json`
- `components/ui/accordion.tsx`
- `components/ui/alert-dialog.tsx`
- `components/ui/alert.tsx`
- `components/ui/aspect-ratio.tsx`
- `components/ui/avatar.tsx`
- `components/ui/badge.tsx`
- `components/ui/breadcrumb.tsx`
- `components/ui/button.tsx`
- `components/ui/calendar.tsx`
- `components/ui/card.tsx`
- `components/ui/carousel.tsx`
- `components/ui/chart.tsx`
- `components/ui/checkbox.tsx`
- `components/ui/collapsible.tsx`
- `components/ui/command.tsx`
- `components/ui/context-menu.tsx`
- `components/ui/dialog.tsx`
- `components/ui/drawer.tsx`
- `components/ui/dropdown-menu.tsx`
- `components/ui/form.tsx`
- `components/ui/hover-card.tsx`
- `components/ui/input-otp.tsx`
- `components/ui/input.tsx`
- `components/ui/label.tsx`
- `components/ui/menubar.tsx`
- `components/ui/navigation-menu.tsx`
- `components/ui/pagination.tsx`
- `components/ui/popover.tsx`
- `components/ui/progress.tsx`
- `components/ui/radio-group.tsx`
- `components/ui/resizable.tsx`
- `components/ui/scroll-area.tsx`
- `components/ui/select.tsx`
- `components/ui/separator.tsx`
- `components/ui/sheet.tsx`
- `components/ui/skeleton.tsx`
- `components/ui/slider.tsx`
- `components/ui/sonner.tsx`
- `components/ui/switch.tsx`
- `components/ui/table.tsx`
- `components/ui/tabs.tsx`
- `components/ui/textarea.tsx`
- `components/ui/toast.tsx`
- `components/ui/toaster.tsx`
- `components/ui/toggle-group.tsx`
- `components/ui/toggle.tsx`
- `components/ui/tooltip.tsx`
- `hooks/use-toast.ts`
- `lib/utils.ts`
- `netlify.toml`

`app/page.tsx` was moved unchanged to `app/(entry)/page.tsx`; the former top-level layout was replaced by the entry and locale root layouts. Removed UI files were unused by all live application imports. No live UI primitive was removed.

Official migration references: [Next 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16), [root layouts](https://nextjs.org/docs/app/api-reference/file-conventions/layout), [image preload](https://nextjs.org/docs/app/api-reference/components/image#preload).
