# Acuity operating model — V1

Status: architecture prepared; live activation blocked. No account configuration, bookings or transactions have been performed.

## Confirmed

The user authorized Acuity as booking/business authority and Next.js as brand, editorial, discovery and SEO authority. Instagram is the confirmed contact channel. Puerto Rico is the operating context. The approved source is Stage 3B `60cd4302488a00d035f5d96ccd3f2808be978af0`; Next 16.3.4 and React 19.3.0 remain unchanged.

No account URL, account embed snippet or operational account settings have been supplied. Repository configuration contains no live scheduler. Public documentation verifies the generic iframe plus official `https://embed.acuityscheduling.com/js/embed.js` mechanism; it does not establish Nicole's account configuration. [Official embed documentation](https://developers.acuityscheduling.com/) and [website installation guide](https://help.acuityscheduling.com/hc/en-us/articles/16676884389133-Adding-Acuity-Scheduling-to-your-website).

## Recommended operating structure

Use one standalone account owned and billed by Wandering Luna/Nicole. Standard is the working recommendation for packages, SMS and expansion to six calendars, but the site has no tier dependency and no upgrade has been made. Existing plan: UNKNOWN. [Calendar limits](https://help.acuityscheduling.com/hc/en-us/articles/27101574736909-Adding-and-managing-calendars), [SMS availability](https://help.acuityscheduling.com/hc/en-us/articles/16676915777293-Sending-appointment-reminders-via-text).

Begin with one operational calendar for the known instructor, not four geographic calendars. Expand only for staffing, concurrency or actual operational separation. Use confirmed appointment-type locations where practical. Standard's automatic waitlist currently supports one-on-one appointments, **not group classes**; do not promise a class waitlist. [Current waitlist scope](https://acuityscheduling.com/learn/fill-slots-with-waitlist-software).

Use Group Classes for recurring public yoga. For each owner-confirmed offering, enter title, duration, exact location, participant limit, price, calendar, recurrence/date/time, booking limits, payment rule and intake/waiver assignment inside Acuity. Do not create types until these facts are approved. Gatherings/retreats require a workflow decision separately; no invented catalog or class records are stored in Next.js.

Acuity owns availability, capacity, attendees, client records, confirmations, reminders, cancellations, rescheduling and package balances. Nicole manages weather changes and communication from the attendee list there; no weather automation or duplicate database.

## BUSINESS_FACT_REQUIRED — account handoff

Ask the Acuity admin for these non-secret facts:

- Active account YES/NO, current plan and ownership/billing confirmation.
- General Scheduling Page URL and exact official snippet: Scheduling Page → Link → Direct Links & Embedding → Embed Scheduler → Copy.
- Current Scheduling Page Language and intended language; review confirmation/reminder templates as well.
- Stripe connected YES/NO, payment-at-booking policy and intended wallet support.
- Actual class names, durations, prices, participant limits, calendars, dates/times, recurrence and confirmed venues/addresses.
- Cancellation/rescheduling, weather threshold, refund versus credit, notice period and alternate-venue policy.
- Approved waiver/terms, optional intake needs, and minor-participant requirements if applicable.
- Verified production origin and domain ownership; authorized accessible Vercel Preview for acceptance.

Do not send API keys, passwords, admin/session URLs, payment details or private client records. Current blockers: ACUITY_ACCOUNT_INPUT_BLOCKED, ACUITY_EMBED_INPUT_BLOCKED, ACUITY_SCHEDULER_LANGUAGE_CONFIRMATION_REQUIRED / ACUITY_LANGUAGE_CONFIRMATION_BLOCKED, ACUITY_PAYMENT_CONFIGURATION_BLOCKED.

## Website configuration and activation

`NEXT_PUBLIC_ACUITY_SCHEDULER_URL` is the sole public scheduler authority. Leave it blank until the admin confirms the active general scheduler and matches the official snippet. No account identifier is hardcoded. Use the exact reviewed iframe src, decoding HTML &amp; separators to & when entering a URL environment value; do not paste the entire HTML snippet as the URL. Supported inputs are HTTPS branded `*.as.me` / `*.acuityscheduling.com` root or schedule.php links; as.me also supports a single documented letters/numbers/hyphens custom link segment. Shared acuityscheduling.com, www.acuityscheduling.com and app.acuityscheduling.com require /schedule.php and a positive numeric owner. The query allowlist is owner, exact ref=embedded_csp, appointmentType (positive numeric ID or class), and positive numeric calendarID, each at most once. V1 rejects customer prefill, form answers, certificates/coupons, credentials, fragments, unknown parameters/values, admin paths and unrelated hosts. An unusual official snippet must be reviewed rather than guessed or silently rewritten.

The configured URL is used unchanged for both EN/ES, the iframe and direct-open fallback. No language/filter parameters are invented. Missing/invalid configuration renders the deliberate existing fallback and Instagram. Valid configuration renders the scheduler only on Schedule/Horario; home and locations retain central Schedule CTAs. The official script loads through next/script only with the embed and is deduplicated. The iframe delegates only allow="payment"; no iframe sandbox or global browser-security changes.

The iframe starts at the official 800px height and its official script controls resizing. Loading/slow-load feedback and an always-available direct link support failure recovery. An iframe load event does not prove booking availability; cross-origin errors cannot be reliably diagnosed by the parent. Live acceptance must inspect the actual flow.

Vercel Preview and Production each require deliberate environment configuration:

- `NEXT_PUBLIC_SITE_URL`: confirmed authoritative production origin for canonical/hreflang/sitemap, including Preview builds. Local default remains http://localhost:3000.
- `NEXT_PUBLIC_ACUITY_SCHEDULER_URL`: confirmed public general scheduling URL; blank while blocked.

Public variables are baked into the build: redeploy after changing them. Do not copy secrets into public variables. Do not enable Production merely to test Preview. Schedule/home context, Schedule metadata, Contact guidance and Luquillo reservation wording switch with valid configuration; review all wording against the confirmed operating state before activation. No unconditional claims of live availability have been introduced.

## Language and time zone

One shared scheduler/account serves both locale pages. Account language is UNKNOWN; do not choose it for Nicole. Website headings/fallbacks remain EN/ES. Acuity's single Scheduling Page Language is configured at Scheduling Page → Settings; bilingual offering descriptions may be useful, without manipulating iframe controls or duplicating bookings. [Language settings](https://help.acuityscheduling.com/hc/en-us/articles/16676948508685-Changing-your-account-and-scheduling-page-language).

Required business time zone: `America/Puerto_Rico`, not `America/New_York`. Actual account setting: UNVERIFIED, therefore TIMEZONE BLOCKED. Owner may retain client automatic conversion, but must ensure venue/time expectations are clear. No custom timezone logic in Next.js.

## Payment and wallets

Stripe connection remains UNKNOWN. Owner sequence: Acuity → Payment Settings → connect Stripe → approve payment-at-booking rule. Full payment is a simple recommendation for low-cost group classes, not a confirmed policy; deposit, card-on-file and no-required-payment are owner decisions. No Stripe SDK, webhook, card handling or payment backend in this repository.

For Stripe-powered embedded wallet checkout, register the actual production website domain in Stripe; Acuity handles registration for its standalone scheduler. Confirm the production domain before registering it. `https://wandering-luna.vercel.app/en` returned HTTP 200 with Wandering Luna content on September 10, 2026, confirming the active public origin `https://wandering-luna.vercel.app`. However, its canonical was `http://localhost:3000/en`: the deployed NEXT_PUBLIC_SITE_URL needs correction to the verified origin and a separately authorized production redeploy. No production environment was changed. Register any later custom domain too. Ephemeral previews are not the primary wallet-domain configuration. [Official processor and domain instructions](https://help.acuityscheduling.com/hc/en-us/articles/28050756621325-Connecting-and-disconnecting-payment-processors).

Apple Pay and Google Pay: NOT TESTED. Eligible device/browser and real account/domain configuration are required; code inspection cannot establish acceptance. No separate wallet implementation.

ATH Móvil remains separate and unchanged; no API, webhook or automatic reservation confirmation. It is omitted from the central booking surface to avoid implying online payment equivalence.

Packages, multi-class packs, gift certificates and memberships/subscriptions are DEFERRED. Confirm availability in the actual plan and owner-approved products/prices. Use Acuity's store/direct links and redemption state; never website-managed balances. [Package overview](https://help.acuityscheduling.com/hc/en-us/articles/16676947677325-Packages-gift-certificates-and-subscriptions-overview).

## Intake, policy and search checklist

Collect participant name/contact and only necessary approved questions in Acuity. Attach owner-approved waiver/terms acknowledgement. No legal language is drafted here; an acknowledgement checkbox is not represented as a legally sufficient signature. Avoid unnecessary health data.

Consider Acuity's Block Search Engine Crawlers option only after confirming impact: the website is the editorial SEO authority. Do not change it automatically. [Scheduling page settings](https://help.acuityscheduling.com/hc/en-us/articles/16676869274125-Using-scheduling-page-features).

## Acceptance before real customers

Follow [Acuity's supported test workflow](https://help.acuityscheduling.com/hc/en-us/articles/16676949879309-Test-your-scheduler). With owner-provided test contact details, book a session, check confirmation receipt, admin attendee record, capacity change, reminders and configured cancellation/rescheduling. For payment-required non-payment tests use a private 100% test coupon. Remove test appointments/client data/coupon after verification; never commit those details. Processor acceptance requires separate deliberate authorization for a small real payment and processor refund; fees may remain. Never use fake card numbers against a live account.

On Vercel Preview test EN/ES schedule at 375/390/430px and desktop: selection, scrolling/resizing, unclipped controls, sticky controls, fallback link, understandable language, completion, confirmation/admin record, no console/hydration errors and intact SEO/23 URLs/404s. Test wallets on eligible devices after Stripe domain confirmation. Until account inputs and authorized preview access exist, live booking, payments and wallet acceptance remain blocked/not tested.


## Stage 4.1 conformance and scheduler selection

General Scheduler exposes the account's public offering families. All Classes is the specialized class-list entry point from Direct Links & Embedding. Recommend All Classes on the website if unrelated appointment families coexist; the real account structure and owner choice remain unknown. No selection or real identifier is hardcoded. Other specialized links/parameters need review before extending the allowlist. [Acuity direct-link and custom-path documentation](https://help.acuityscheduling.com/hc/en-us/articles/16676933640461-Sharing-direct-links-to-the-scheduler) and [parameter reference](https://help.acuityscheduling.com/hc/en-us/articles/31919067234445-Parameters-for-dynamic-links).

Acuity's public developer guide verifies iframe plus embed.js and directs owners to copy account code. The current full generated shape is corroborated by the integration platform's own [ShopWired Acuity installation documentation](https://help.shopwired.io/manual/acuity-scheduling): app.acuityscheduling.com/schedule.php, ref=embedded_csp and allow="payment". Nicole's exact account snippet is still required before live activation; this is compatibility work, not verification of her account. Payment permission alone is not wallet acceptance.

On Vercel Production (`VERCEL_ENV=production`), missing or invalid NEXT_PUBLIC_SITE_URL now fails the build. HTTPS and a non-loopback origin are required; the existing no-credentials/path/query/fragment checks remain. Ordinary local builds still default to localhost. Current Production configuration should be `NEXT_PUBLIC_SITE_URL=https://wandering-luna.vercel.app`. Preview should normally use that same production canonical origin, not its ephemeral hostname. This is a deployment setting, not a permanent domain hardcoded into application logic. No environment or production deployment was changed here.

Complete [the short input sheet](acuity-input-sheet.md) to finish the operational handoff.
