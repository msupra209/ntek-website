# NTeK Solutions Website Revamp — Plan
Built via CRIT method (Context / Role / Interview / Task). See [context/product.md](product.md) and [context/tech-stack.md](tech-stack.md) for supporting detail.

## Current site audit (as of 2026-08-14)

| Page | URL | What's there | Gap |
|---|---|---|---|
| Home | `/` | Hero, "what we offer" intro, 9 service cards, coverage teaser | Generic stock photo, no proof points, no differentiation |
| About | `/about-1` | 3 bullet facts (est. 2004, HQ Kuwait, 14 countries) | Thin — no team, no leadership, no story, no certifications |
| Regional Services | `/regional-services` | Same 9 service cards restated, no detail pages per service | No depth per service — decision-makers can't evaluate fit without a call |
| Coverage Area | `/our-coverage-area` | Static map graphic, SLA by country (e.g. "Jordan: 24x7x4") | Good raw data, poor presentation — buried in an image, not scannable |
| Contact | `/contact` | Phone numbers only (Bahrain, Kuwait, UAE, Rest of World) | No lead form found — hard conversion dead-end for enterprise/gov buyers who expect a form + response SLA |

**Platform:** Wix (inferred from URL slugs and asset patterns). **Mobile:** functional, not distinctive. **Brand:** navy blue + logo mark only, no real visual system.

## Proposed information architecture

Audience-routed rather than one-size-fits-all, per the "audience-routed, not audience-blended" product principle:

```
/                          Home — credibility-first hero, proof strip, audience nav
/about                     Company story, timeline (2004→now), leadership, certifications
/services/                 Services overview (9 lines, grouped into 3-4 categories)
/services/[service-slug]   Individual service detail pages (currently missing — biggest IA gap)
/industries or /sectors    NEW — light segmentation for enterprise / government / SMB (even 3 short blocks beats none)
/partners                  NEW — AWS, Acronis, Infrascale, Oracle, Nakivo, Doubletake logos + partner-tier messaging
/coverage                  Interactive-feeling coverage page — country table, not just static map image
/contact                   Working form (routed by inquiry type) + existing phone numbers retained
```

Open question: whether `/industries` ships in phase 1 or phase 2 — see Phasing below.

## Content strategy by audience

- **IT/procurement decision-makers:** service depth pages with SLA specifics, security/compliance posture, "why NTeK" comparison points.
- **Government/public sector:** certifications, years-in-operation, project count, references — front-loaded on About and Home, citable without a sales call.
- **SMBs:** plain-language "what managed IT actually gets you," simplified pricing/engagement framing, low-friction contact.
- **Channel partners:** dedicated `/partners` page — partner-tier logos and language, not sales-funnel CTAs.

Replace adjective-heavy copy ("innovative," "best-in-class," "quality") with numbers and named proof wherever Majid/NteK can supply them — 70+ infrastructure projects, 20 years, 14 countries, 1-2 hour field deployment SLA are all already on the current site as raw claims; the revamp's job is presenting them as evidence, not prose.

## Brand refresh scope

Existing NteK identity (logo, navy blue) stands. Refresh = typography, spacing, imagery, and componentry brought up to a modern B2B/fintech-adjacent bar — not a new logo or color system. Confirm with Majid before any token/color decisions ship (standard AIOS token-integrity discipline applies if this touches any shared design-system asset — unlikely here since NTeK is outside UDesign, but flag if that changes).

## Tech approach

Handlebars static-site build, mirroring `agh-website` — see [context/tech-stack.md](tech-stack.md) for full rationale and structure.

## Phasing (proposed — confirm before locking)

1. **Foundation:** IA sign-off, content inventory/copy pass, brand refresh direction (typography/imagery/component style), Handlebars scaffold setup.
2. **Build:** Home, About, Services overview + detail pages, Coverage, Contact (with working form).
3. **Extend:** Partners page, industries/sectors segmentation, any case studies NteK can supply.
4. **Launch:** hosting cutover from Wix, DNS, redirects from old URLs (`/about-1`, `/regional-services`, `/our-coverage-area` → new slugs), analytics.

## Open decisions (flagged, not assumed)

- Arabic/RTL version — in scope or not?
- Contact form backend — PHP (like AGH) vs. form service, depends on target hosting.
- Hosting target for the new static build.
- Does `/industries` ship in phase 1 or get deferred to phase 3?
- Any real client names/logos/case studies NteK is cleared to publish (current site has none — biggest credibility gap for gov/enterprise buyers).
