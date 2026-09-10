# Stage 4 handoff

STARTING SHA: `60cd4302488a00d035f5d96ccd3f2808be978af0`.
Branch: `feat/stage-4-acuity-booking`, created directly from the authorized Stage 3B commit.
STATUS: BLOCKED — live account/embed inputs and Vercel acceptance remain required.

## Preflight and governance

Baseline typecheck, lint, 56 tests and production build passed. Next 16.3.4 and React 19.3.0 retained. Stage 3B content, 23 public URLs, route/publication/SEO authority, original supplied photos, true 404s and Vercel architecture confirmed. No custom backend, Supabase, Netlify or Acuity API integration.

Starting status included an unrelated .gitignore modification and untracked generated AGENTS.md/CLAUDE.md. Package manifest and lock were clean. The .gitignore edit remains excluded.

AGENTS.md: AUDITED / COMMITTED. No secrets, credentials, destructive permissions, stale SHAs, test bypasses or conflicting project instructions found. Preserved the generated Next documentation guidance and added concise project authority for source, local Node, Vercel, Next 16, bilingual routing, Acuity boundaries, business facts and mandatory gates. No generated instructions were deleted.

CLAUDE.md: AUDITED / COMMITTED; unchanged minimal `@AGENTS.md` adapter, no duplicate specification or questionable guidance.

## Implementation

Typed public URL validation accepts reviewed general scheduling URL shapes and safely rejects malformed/credential-bearing/admin/unrelated URLs. Missing configuration keeps the existing intentional fallback. Valid configuration selects a small client iframe component with localized context, loading/slow-load guidance, Instagram and an always-visible direct link. The official resizing script uses next/script only alongside the scheduler. No account IDs or real scheduler were invented/configured.

Only Schedule/Horario contain the configured iframe. Home remains a central-schedule CTA. Configured copy also updates schedule steps/metadata, contact guidance and relevant location wording; absent configuration retains existing wording. No language parameters, custom payment logic, API calls or DOM manipulation.

The native Node test runner imports shared TypeScript directly. `allowImportingTsExtensions` is enabled alongside existing `noEmit` so both the compiler and Node can resolve that explicit shared import; no suppressions or dependencies added.

## Operational status

- ACUITY PLAN: UNKNOWN.
- ACUITY CALENDAR MODEL: RECOMMENDED — one calendar, not four geographic calendars.
- SCHEDULER URL: BLOCKED.
- OFFICIAL EMBED: BLOCKED for the account; generic official mechanism implemented.
- ACUITY LANGUAGE: BLOCKED / ACUITY_SCHEDULER_LANGUAGE_CONFIRMATION_REQUIRED.
- STRIPE: UNKNOWN.
- APPLE PAY / GOOGLE PAY: NOT TESTED / NOT TESTED.
- ATH MÓVIL: SEPARATE / UNCHANGED.
- TIMEZONE: BLOCKED pending account verification; required America/Puerto_Rico documented.
- GROUP CLASSES: BUSINESS_FACT_REQUIRED.
- WAIVER: BUSINESS_FACT_REQUIRED.
- PACKAGE SUPPORT: DEFERRED.

See [operating model](acuity-operating-model.md) for sources, account discovery checklist, Stripe/domain setup, supported testing and owner decisions. Standard's automatic waitlist is currently one-on-one only; group class waitlisting is not promised.

## Validation

TYPECHECK: PASS. LINT: PASS. TEST: PASS (59 tests). BUILD: PASS.
ROUTING: PASS locally in absent and synthetic configured states; invalid browser/crawler routes still true 404 and sitemap remains 23.
SEO REGRESSION: PASS locally; an existing production-origin defect is separately BLOCKED below.
SECURITY REVIEW: PASS — no secrets, credentials, test client data or payment details added; no dependencies/API/backend/CSP relaxation or iframe sandbox. Public URL parser rejects non-general links and private query parameters.

Browser checks passed on EN Schedule and ES Horario at 375/390/430/768/1440, both fallback and synthetic configured states (20 combinations), covering one H1, no horizontal overflow, localized iframe title, direct link and no page runtime errors. The synthetic URL and script were intercepted; these checks do not prove Acuity resizing, appointment selection, confirmation, capacity, payment or wallets. All those require actual account acceptance. The fixed mobile booking bar only exists on the homepage, not the scheduler pages.

## Deployment and risks

Vercel Preview: https://wandering-luna-b0k34z960-eleanor-v1.vercel.app — deployment succeeded for implementation `f1ea7c58dc4d99bde3bd0ac2f2da943d7e2fb188` (deployment 6378879971). `/en/schedule` returned HTTP 302 to Vercel SSO on September 10, 2026. VERCEL_ACCEPTANCE_BLOCKED: authorized preview access is required. No Production promotion authorized or performed.

Confirmed active public origin on September 10, 2026: https://wandering-luna.vercel.app. Its /en route returns Wandering Luna content but canonical points to http://localhost:3000/en. Correct Production NEXT_PUBLIC_SITE_URL and redeploy through a separately authorized production action. Preview SEO should use that same production origin. Stripe domain registration remains unverified.

An initial server-start approval failed because the review service reported a usage limit. After the user requested continuation, the reviewed retry succeeded. No bypass was used.

Cross-origin iframe load events cannot establish transaction readiness; always retain direct-open recovery. Actual account snippet may require reviewing an unsupported URL shape. Do not populate the public variable until the active account/snippet and operating decisions are confirmed. No account admin access or private data has been requested.

## Files

Created: AGENTS.md, CLAUDE.md, lib/acuity.ts, components/acuity-embed.tsx, tests/acuity.test.mjs, docs/acuity-operating-model.md, docs/stage4-report.md.

Modified: .env.example, README.md, components/home/schedule.tsx, components/secondary/pages.tsx, lib/secondary-content.ts, scripts/verify-routes.mjs, tsconfig.json.

Removed: none.
PACKAGE.JSON CHANGED: NO. PACKAGE-LOCK CHANGED: NO.

## Next action

Owner/admin supplies active-account status, plan, general scheduling URL, official embed snippet, scheduler language, real offerings and operational policies, Stripe status and timezone verification. Configure an accessible Preview, execute supported booking/admin/confirmation tests, and separately authorize payment testing if needed. Correct the production-origin environment before production acceptance. Stop here: no custom APIs, accounts, payments backend or automatic production promotion.
