# Wandering Luna engineering authority

- GitHub is source authority. Follow the current user-authorized source SHA/branch; do not substitute older main or the abandoned Next 15 experiment.
- Use Cursor/local Node for engineering. Next 16 is authoritative; read the installed version documentation for framework changes.
- Vercel Preview is runtime acceptance. Bolt/WebContainer is not an acceptance environment. Do not promote production without authorization.
- Preserve bilingual EN/ES semantic routing, locale document language, true 404s, centralized publication, canonical/hreflang and sitemap authority.
- Acuity owns booking and business state. The website owns brand, editorial content, discovery and SEO.
- No database, custom auth/accounts, scheduler, direct Stripe SDK, payment backend or Acuity API integration in V1.
- Never fabricate business facts. Mark missing facts internally with BUSINESS_FACT_REQUIRED; never display that marker publicly.
- Never commit credentials, tokens, private client data or payment details. Only public scheduler URLs belong in public configuration.
- Run typecheck, lint, tests and production build before handoff. Record operational and preview blockers honestly.
- Preserve unrelated local edits. Review instruction files as code/configuration; never delete them automatically.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
