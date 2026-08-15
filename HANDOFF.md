# NteK Solutions Website — Session Handoff

**Session date:** 2026-08-15
**Repo:** https://github.com/msupra209/ntek-website (private, `main`, pushed)
**Local:** `~/Documents/projects/NTeK Solutions/website`

---

## Start here

1. Read `README.md` — design system, architecture rules, logo assets, known gaps
2. Read `context/design-research.md` — why the direction is what it is
3. Run it: `python3 "/Users/ms/Documents/projects/NTeK Solutions/website/serve.py"` → http://127.0.0.1:8091

⚠️ **Preview gotcha:** Claude Code's sandboxed launcher **cannot read `~/Documents/projects`**. `preview_start` will fail with `Operation not permitted`. Copy the site into the session scratchpad and point `.claude/launch.json` there for live preview. Running `serve.py` directly from a normal terminal works fine.

---

## What exists

A single-page, section-based, committed-dark landing page. Flat HTML/CSS/JS — deliberately **not** yet ported to Handlebars so the design could be judged first.

**Sections:** nav → hero → operating ledger → coverage map → service stack (3 tiers × 3) → platforms → contact → footer.

**The centrepiece** is the coverage map: a 14-country SVG with Kuwait as hub, links drawing outward west→east, nodes popping in sequence. It's the one thing no competitor has.

## Design direction, and why

- **Visual language: technical survey cartography.** Chosen because coverage across 14 countries is the actual differentiator, and topography says that better than the polygonal-network-globe trope the category defaults to. Three AI hero candidates all produced that globe and were rejected on that basis alone.
- **Committed dark**, grounds sampled from the hero plate so image and page share a floor.
- **Type:** Archivo (display) / IBM Plex Sans (body) / IBM Plex Mono (data). Self-hosted, no CDN font dependency.
- **Accent derived from the logo**, not invented — `#091E81` → `hsl(229.5 87% 62%)` = `#4A67F2`.

## Non-negotiable architecture rules

1. **No real content may depend on an animation completing.** Entrance motion is CSS + IntersectionObserver. GSAP is decorative (hero parallax) only. This is enforced because the first build violated it and shipped a blank hero when the frame loop stalled.
2. Counters carry true values in HTML with a `setTimeout` failsafe.
3. The hero plate is **masked**, not covered — the source has a verified tonal seam at ~44% width (pixel-sampled: flat step luminance 18→40).

## Content integrity — do not undo

- **No invented SLA data.** The live site publishes `24x7x4` for Jordan, Lebanon and Pakistan only. The other eleven countries are unpublished. The map deliberately shows coverage status without per-country SLA.
- **No stock or AI photography of people/datacenters.** Generic stock is what undermines the current site; synthetic "engineers" would be the same failure. Only abstract assets were generated. Real NteK photography is a production line item.
- **Partner logos are typographic wordmarks**, not real logos — real SVGs still needed.

---

## Open decisions (need Majid or NteK)

| # | Decision | Notes |
|---|---|---|
| 1 | **Serif logo vs sans UI** | Logotype is serif, UI is all sans. Defensible pairing — but call it deliberately, or introduce a serif display face to echo the mark. **Flagged, unresolved.** |
| 2 | **Image weight** | In-use images are **5.1MB combined**. JPEG q82 → 642KB (87% smaller). Not done: JPEG blocking in near-black gradients risks reintroducing the banding that was just fixed. Needs doing *with* verification. `sips` cannot write WebP on this machine. |
| 3 | Contact form backend | No backend. Submitting shows a notice pointing to the phone numbers. PHP (like AGH) vs form service — depends on hosting. |
| 4 | Arabic / RTL | Never scoped in or out. |
| 5 | Hosting target | Current site is Wix. New build needs a host + DNS + redirects from `/about-1`, `/regional-services`, `/our-coverage-area`. |
| 6 | Per-country SLA data | Must come from NteK. |
| 7 | Real client names / case studies | None published today. Biggest credibility gap for government/enterprise buyers. |

## Next logical steps

1. Decide #1 and #2 above (both are design calls, both cheap to action)
2. Per-service detail pages — the biggest IA gap; buyers can't evaluate fit without a call
3. Port to Handlebars per `context/tech-stack.md` (mirror `~/Documents/projects/agh-website`)
4. Competitor audit pass — `context/competitors.md` lists ten sites but has **no per-site notes**; the audit was never run

---

## Session history / corrections worth not repeating

- **Reference research must be date- and category-verified.** A first pass cited logistics/aerospace/parking sites as if they were category research. Corrected finding: **no same-niche (MSP/managed-IT) award-winning site exists at all**, across Awwwards/FWA/CSSDA/Webby. Closest real matches are cybersecurity — SAFE (2021), CyberConvoy (2024).
- **Brand assets before design tokens.** The token system was built before the logo was seen; the accent landed 7° off brand hue and had to be re-derived. Now encoded as a rule in `~/Documents/AIOS/.claude/rules/design-research-protocol.md`.
- **Aesthetic reference is Vide Infra's portfolio** — bespoke per-client component structure. The five-beat scroll-narrative concept was explicitly **dropped** in favour of the section-based approach now built.
- Machine constraints recorded in memory: no `node`/`gh`/`php`/`PIL`/ImageMagick on this shell's PATH.

## Related commits

- `msupra209/ntek-website` → `e15056b` initial build
- AIOS `6bb9df4` — CRIT skill + launch config
- AIOS `aa0287f` — design-research protocol rule + generate-skill corrections
