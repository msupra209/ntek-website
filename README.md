# NteK Solutions — Website

Front-end build of the revamped NteK Solutions landing page.

## Run it

```bash
python3 "/Users/ms/Documents/projects/NTeK Solutions/website/serve.py"
```

Then open http://127.0.0.1:8091

There is also a `ntek-website` entry in `~/Documents/AIOS/.claude/launch.json`.
Note: Claude Code's sandboxed preview launcher cannot read `~/Documents/projects`,
so during the build the site was served from a scratchpad copy. Running the
command above directly works fine.

## Structure

```
index.html            single landing page, all sections
css/site.css          tokens → base → components → sections → responsive
js/site.js            progressive enhancement only
assets/img/           hero plate + section texture
assets/fonts/         self-hosted woff2 (no CDN font dependency)
assets/generated/     original AI-generated plates + the prompts used
context/              product, tech-stack, competitors, revamp plan
serve.py              zero-dependency static dev server
```

## Design system

**Visual language:** technical survey cartography — chosen because coverage
across 14 countries is the actual differentiator, and topography says that far
better than the polygonal-network-globe trope every other MSP site uses.

**Type:** Archivo (display) · IBM Plex Sans (body) · IBM Plex Mono (data/labels).
The Plex family's engineering heritage is deliberate — it rhymes with the
cartographic imagery instead of fighting it.

**Palette:** committed dark. Grounds are sampled from the hero plate so image
and page share a floor. One accent — no second hue anywhere.

### Accent is derived from the logo, not invented

The first pass built tokens before the logo had been seen, which was the wrong
order — the mark is the one fixed input and should have set the palette. Once
`NTeK-logo.gif` was supplied, its navy was sampled at **`#091E81`** =
`hsl(229.5 87% 27%)`. That is far too dark to serve as an accent on a near-black
ground, so the UI accent keeps the brand hue and saturation **exactly** and only
raises lightness:

| Token | Value | Role |
|---|---|---|
| `--brand` | `#091E81` | the mark itself; print and light contexts |
| `--accent` | `#4A67F2` | UI accent on dark (`hsl(229.5 87% 62%)`) |
| `--accent-lit` | `#8397F6` | hover / emphasis |
| `--accent-dim` | `#121C49` | tinted surfaces |

The pre-logo accent was `#4E7DF0` (hue 222.6°) — close by eye but off-brand by
~7° of hue. Corrected.

**Known tension, deliberately left:** the logo's ring grey is `#C1C2BD`, a warm
neutral, while the UI greys are cool/blue-biased to sit with the accent. Rather
than warm the whole UI to match a legacy artifact of the old mark, the dark
logo variant recolours the ring to the UI grey so the two systems agree.

**Second tension, flagged not resolved:** the logotype is a serif; the UI type
is entirely sans. A serif logotype against a sans UI is a common and defensible
pairing, but it is now a *choice* rather than an accident. The alternative is
introducing a serif display face to echo the mark — worth a decision.

## Logo assets

| File | Use |
|---|---|
| `assets/NTeK-logo.svg` | master, full lockup, brand colours — light backgrounds and print |
| `assets/NTeK-logo-dark.svg` | full lockup for dark backgrounds — used in the footer |
| `assets/NTeK-logo-nav.svg` | compact lockup, "Solutions" removed — used in the nav |
| `assets/NTeK-logo.gif` | original 272×141 source supplied by the client |

The master SVG was traced manually by Majid; verified as true vector (14 paths,
2 circles, 1 rotated ellipse, no embedded raster) with fills matching the
sampled source exactly.

**Why a dark variant exists:** the mark's inner disc is `#E6E6E6`, which glows
as a pale blob on the `#080B10` ground while the navy wordmark sinks into it.
The dark variant drops the disc, sets the wordmark white and mutes the orbit
ring to `#5E6879`.

**Why a compact variant exists:** at nav scale (34px tall) the full lockup
renders "Solutions" at roughly 6px, which reads as a smudge rather than a word.
The compact lockup drops those nine glyphs and tightens the viewBox to 242×102.

## Architecture rules

1. **No real content may depend on an animation completing.** Entrance motion is
   CSS-driven and triggered by IntersectionObserver. A blocked CDN, a stalled
   rAF loop, or a JS error degrades to "no animation" — never "blank page".
   This is enforced because the first build violated it and rendered a blank
   hero when the frame loop stalled.
2. **GSAP is decorative only** — it drives the hero parallax and nothing else.
   The library is loaded from CDN; if it fails, the page is unaffected.
3. **Counters carry their true value in the HTML.** JS resets to zero and counts
   up only if it can, with a `setTimeout` failsafe that snaps to the real figure.
4. **The hero plate is masked, not covered.** The source image has a hard tonal
   seam at ~44% width (verified by pixel sampling: a flat step from luminance
   18 → 40). Everything left of it is masked out; the flat region removed is
   ~`#060606`, within a hair of `--void`, so the join is invisible.

## Content provenance

Every factual claim traces to nteksolutions.net: operating since 2004,
HQ Kuwait, 14 named countries, 70+ infrastructure projects, 1–2 hour field
deployment, the nine service lines, the platform partners, and the four
regional phone numbers.

**Not invented:** per-country SLA figures. The current site publishes `24x7x4`
for Jordan, Lebanon and Pakistan only. Rather than fabricate the other eleven,
the map shows coverage status without per-country SLA. Real figures need to
come from NteK before that detail ships.

## Known gaps

- **Contact form has no backend.** Submitting shows a notice pointing to the
  phone numbers. Backend choice is still open — see `context/tech-stack.md`.
- **Partner logos are typographic wordmarks, not real logos.** Real SVGs for
  AWS, Infrascale, Acronis, Nakivo, Doubletake and Oracle need to be dropped in.
  (The NteK mark itself is now real vector — see Logo assets above.)
- **No real NteK photography.** Deliberate — generic stock is what undermines
  the current site, and AI-generated "engineers" would be the same failure.
  Real photography of NteK's own people, vans and racks is a production line
  item, not something to fake.
- **Single page only.** Per-service detail pages, About, and the audience
  routing described in `context/revamp-plan.md` are not built yet.
- **Not yet ported to Handlebars.** `context/tech-stack.md` specifies mirroring
  the AGH build system. This is deliberately flat HTML first so the design could
  be reviewed before committing to the build pipeline.
- **Per-country SLA data** — see above.
