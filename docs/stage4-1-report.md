# Stage 4.1 — embed conformance and origin guard

Starting branch: feat/stage-4-acuity-booking.
STARTING SHA: f3081e949ff0d4e0697127ab79c7c9a3eabaca8f.
Work branch: feat/stage-4-1-embed-origin.
Starting git status: only the unrelated .gitignore edit, which remains excluded.
Next 16.3.4 remains authoritative. Baseline typecheck, lint, 59 tests and build passed.

## Changes and validation

ACUITY LOADED STATE: PASS. Loaded renders no loading/recovery text; loading and unavailable retain their respective localized messages. Direct booking link remains visible. Tests transpile and render the actual React component with controlled hook states; the loaded assertions fail with the previous ternary. Both locales and payment-only iframe permission are covered.

OFFICIAL URL COMPATIBILITY: PASS for reviewed forms. app.acuityscheduling.com/schedule.php requires owner, as do shared www/bare hosts. Branded as.me and acuityscheduling.com links remain supported; as.me custom paths follow the documented single-segment letters/numbers/hyphens format. Public selectors are owner, exact ref=embedded_csp, appointmentType=class or positive numeric ID, and positive numeric calendarID. No real identifier is configured. Nicole's copied snippet still needs review before activation.

URL ALLOWLIST SECURITY: PASS. Reject duplicate/unapproved queries, arbitrary ref values, first/last name, email, phone, form answers, certificate/coupon values, credentials, non-HTTPS, unrelated hosts, custom ports and unsupported paths. No input values are appended to the configured URL.

IFRAME PAYMENT CONFORMANCE: PASS for the reviewed embed shape. Only allow="payment" added, no unrelated permissions, iframe sandbox or Stripe integration. Sources and evidence limits are in the operating model: Acuity official workflow/parameter documentation plus ShopWired's own integration documentation showing the current full generated snippet. No claim of wallet or live-account acceptance.

PRODUCTION CANONICAL GUARD: PASS. VERCEL_ENV=production requires a configured HTTPS non-loopback origin satisfying existing structural validation. Unit tests cover missing/malformed/HTTP/loopback/credentials/path/query/fragment and valid production/preview origins. A real production-mode build with the variable absent fails with a clear NEXT_PUBLIC_SITE_URL configuration error. Ordinary local build remains successful without the variable. No permanent business domain is hardcoded.

INPUT SHEET: COMPLETE as an unfilled operational intake, not as confirmed business facts. Covers account, scheduler selection/snippet, first offering, payments and policies. All Classes is recommended if other appointment families coexist; no account decision has been made.

TYPECHECK: PASS. LINT: PASS. TEST: PASS — 71. BUILD: PASS — ordinary local build; missing-origin Production build intentionally fails. Correctly configured Production-mode build also PASS with NEXT_PUBLIC_SITE_URL=https://wandering-luna.vercel.app.

## Files

Modified: components/acuity-embed.tsx, lib/acuity.ts, lib/site-config.ts, tests/acuity.test.mjs, docs/acuity-operating-model.md, README.md.
Created: tests/acuity-embed.test.mjs, tests/site-origin.test.mjs, docs/acuity-input-sheet.md, docs/stage4-1-report.md.
Removed: none. package.json and package-lock.json unchanged. No new dependencies.

## Known risks / next action

The existing production localhost canonical is not retroactively fixed by this code. Set Production NEXT_PUBLIC_SITE_URL=https://wandering-luna.vercel.app before a separately authorized deployment. Preview should normally share that canonical origin. Future domain adoption requires updating environment configuration.

No real scheduler, account choice, Stripe connection or production promotion was performed. Exact account snippet, operating inputs, accessible Vercel runtime and eligible-device wallet testing are still required for Stage 4 live acceptance. Stop after this conformance slice.
