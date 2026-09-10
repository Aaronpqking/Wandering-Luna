# Next 15 framework compatibility remediation

Scope: framework compatibility only. No Stage 3 work, redesign, route simplification, or business-content changes.

Starting branch: `feat/foundation-real-photos-instagram`.
Starting SHA: `86490aad9722ff3e7727121920d26fd2bc88cc7a`.
The ending SHA is supplied in the review handoff; this report is committed with the implementation.
Full starting scripts and versions: [next15-baseline.json](next15-baseline.json).

## Versions and compatibility evidence

| Dependency | Before (installed) | After (installed) |
| --- | --- | --- |
| next | 16.3.4 | 15.5.24 (exact pin) |
| eslint-config-next | 16.3.4 | 15.5.24 (exact pin) |
| react / react-dom | 19.3.0 | 19.1.9 (exact pins) |
| @types/react | 19.3.0 | 19.1.17 (exact pin) |
| @types/react-dom | 19.3.0 | 19.1.11 (exact pin) |
| typescript | 5.9.3 | 5.9.3 (unchanged) |
| @types/node | 22.20.2 | 22.20.2 (unchanged) |
| @eslint/eslintrc | 3.3.7 (transitive) | 3.3.1 (new direct dev dependency) |

Published npm metadata for `next@15.5.24` permits React and React DOM `^19.0.0` (also React 18); React DOM 19.1.9 requires React `^19.1.9`. The chosen stable pair satisfies both. React type packages are aligned to 19.1. Next's ESLint package permits ESLint 9 and TypeScript >=3.3.1. Node 22.22.2 satisfies Next's Node engine requirement. No canary packages, framework source patches, or forced peer installation were used.

References: [support policy](https://nextjs.org/support-policy), [Next 15.5/typegen](https://nextjs.org/blog/next-15-5), [Next 15 upgrade APIs](https://nextjs.org/docs/15/app/guides/upgrading/version-15), [ESLint FlatCompat](https://nextjs.org/docs/15/app/api-reference/config/eslint), [Next 15 image API](https://nextjs.org/docs/15/app/api-reference/components/image).

## Next 16 construct audit

| Construct | Migration outcome |
| --- | --- |
| Async route params | Kept: valid in Next 15; layouts, pages and metadata still await params. |
| Multiple root layouts | Kept: neutral entry and localized documents retain server-rendered language. |
| generateStaticParams | Kept unchanged at locale and page levels; all 22 localized routes generated. |
| Metadata and route authority | Kept unchanged; canonical, reciprocal alternates and validation use existing authority. |
| Hero image preload | Replaced Next 16 `preload` prop with Next 15 `priority`; emitted image preload verified. |
| Other image APIs | Kept fill, sizes, quality=85, qualities allowlist and lazy loading; actual optimization verified. |
| Type generation | Kept `next typegen && tsc --noEmit`, supported since 15.5. |
| TypeScript configuration | JSX uses `preserve`; removed Next 16-only `.next/dev/types` include; `.next/types` remains. |
| Lint configuration | FlatCompat loads Next 15 Core Web Vitals and TypeScript rules. No rule/gate disabled. |
| Development compiler | `next dev` defaults to Webpack in Next 15; no Turbopack flags. |
| Build compiler | `next build`; removed unsupported Next 16 `--webpack` flag. |
| PostCSS and fonts | Explicit ESM `postcss.config.mjs`, Tailwind 3 + autoprefixer and original fonts retained. |
| ESM package | `type: module` retained. |

## Final validation

| Gate | Result |
| --- | --- |
| TYPECHECK | PASS |
| LINT | PASS, zero warnings |
| TEST | PASS, 30 tests |
| BUILD COLD | PASS, including build lint/type validation and final tracing |
| DEV COLD | PASS, plain npm run dev from empty .next |
| BOLT-COMPATIBLE DEVELOPMENT MODE | YES: default Webpack command; actual Bolt runtime not available for direct testing |
| ROUTING REGRESSION | PASS, production and development HTTP checks plus browser switches |
| SEO REGRESSION | PASS, both modes |
| ARCHITECTURE REGRESSION | PASS |

Final cold sequence removed `.next`, `node_modules`, and `tsconfig.tsbuildinfo`, then ran `npm install`, `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build` successfully. No existing build output was reused. Before development validation, `.next` was deleted again and the exact `npm run dev` command was started. This machine is macOS with native SWC, not Bolt's Linux x64/WASM runtime.

Development requests verified `/`, `/en`, `/es`, `/en/schedule`, `/es/horario`, and every other supported locale route. The unchanged HTTP regression script verified 22 localized routes plus the neutral entry, EN/ES document language, reciprocal language-switch links, canonical URLs, hreflang including x-default, OG/Twitter, Organization JSON-LD and Instagram profile URL, 20 invalid paths with true HTTP 404 for browsers and Googlebot, sitemap, robots, and all eight optimized WebP responses. Production passed the same script.

Chrome at 375px and 1440px verified both homepage languages, loaded fonts and global CSS, ten photo placements, no horizontal overflow, Instagram profile and featured-post embed URLs, and actual two-way language switches for schedule/horario and locations/luquillo/lugares/luquillo. No page runtime errors were observed. No workStore invariant, PostCSS error, next/font error or Turbopack binding failure occurred.

The route authority, root layouts, static params, metadata, sitemap, robots, Acuity abstraction, content, photo binaries, Instagram implementation and Vercel architecture are unchanged. Runtime/dependency scans found no Supabase or Netlify integration. Only the hero priority prop changes application code. No Stage 3 implementation is included.

## Files modified

- `package.json` and `package-lock.json`: target versions, FlatCompat dependency, build command.
- `eslint.config.mjs`: Next 15-compatible configuration loading.
- `tsconfig.json`: Next 15 JSX/type output conventions.
- `components/home/hero.tsx`: priority prop.
- `README.md`: current stack, compiler commands and audit caveat.
- `docs/next15-baseline.json`: pre-migration baseline.
- `docs/next15-migration.md`: compatibility audit and results.

The pre-existing `.gitignore` edit remains local and is excluded from this change.

## Known risks and limits

- Bolt itself was not available in this session. The compatible Webpack mode passes locally; Linux/WASM preview must still be verified in Bolt. The reported upstream Next 16 defect is user-provided context, not independently reproduced here.
- `npm audit` reports two dependency findings (one high, one moderate) through Next 15.5.24's nested PostCSS 8.4.31. The root PostCSS is 8.5.28. Advisories include GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp and GHSA-r28c-9q8g-f849. The exact requested framework pin is retained; no unreviewed override or upgrade back to Next 16 was applied.
- Google fonts still require network access for a cold compilation. No font redesign or source change was made.
- One cold attempt reached final build tracing and failed with local ENOSPC. The complete cold sequence was repeated and passed. Available disk space remains low.
- npm reports upstream deprecations for ESLint 9 and glob 10.5. No incompatible major updates were forced. npm also materializes two extraneous Sharp/WASM optional artifacts on this machine, as before the migration; they are not added to the package manifest.
- Development warns about the localhost/127.0.0.1 origin difference and the existing missing favicon returns 404. Neither prevents compilation or the required route checks.
- The production site origin and Acuity business details remain pending as documented in README. No deployment or Stage 3 work was performed.
