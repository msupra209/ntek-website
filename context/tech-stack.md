# NTeK Solutions Website — Tech Stack

## Decision
Mirror the AGH website architecture (`~/Documents/projects/agh-website/`): a Handlebars static-site build system, not raw HTML files and not a Wix/CMS rebuild.

## Why
- AGH is the proven, working pattern for this kind of institutional/corporate site in this workflow — reuse over reinvention.
- Static output = fast, cheap to host, no CMS licensing or Wix lock-in (current site's platform).
- Handlebars partials/components keep header/footer/CTA blocks DRY across 9 service pages + 4 audience-routed pages without a database.

## Structure (mirrors AGH)
```
website/
  src/
    layout.hbs           ← base page shell
    partials/            ← header, footer, nav, CTA blocks
    components/          ← reusable blocks (service card, stat tile, coverage map, etc.)
    pages/                ← per-page Handlebars templates
    pages.json            ← page/route config
    config.json            ← site-wide config (nav, contact numbers, etc.)
  build.js               ← compiles src/ → root *.html build artifacts
  css/
  js/
  assets/
  package.json           ← handlebars devDependency, `npm run build`
```

## Non-negotiable rule (once build.js exists)
**Never edit root `.html` files directly** — they are build artifacts. Always edit in `src/`, then run `node build.js`. (Same rule as AGH — see `~/Documents/projects/agh-website/CLAUDE-STARTUP.md` for the failure pattern this prevents.)

## Not yet decided
- Contact form backend (AGH uses PHP scripts — `contact-form.php`, `rate-limit.php` — confirm if NTeK's hosting supports PHP, or if this should be a form service like Formspree/Resend instead)
- Hosting target (current site is on Wix; new static build needs a host — Vercel, Netlify, or existing NTeK hosting)
- Whether Playwright test coverage (used on AGH) is warranted here, or overkill for a marketing site of this size

## Status
Planning stage — no scaffold built yet. Build this once IA and content direction are signed off (see `revamp-plan.md`).
