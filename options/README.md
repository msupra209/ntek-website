# Landing page options — 2026-08-15

Two distinct directions for the NteK landing page, built from the same verified
content. Open `options/index.html` for the side-by-side chooser.

The first build (`../index.html`) is untouched and still runs — this folder sits
alongside it rather than replacing it.

---

## The problem these solve

The first build committed to a dark ground. That single decision forced two
things Majid flagged:

1. The brand navy `#091E81` scores **1.42:1** on `#080B10` — unusable as ink —
   so the accent was lifted to `#4A67F2`. Same hue, +35% lightness, visibly a
   different colour.
2. The mark had to be re-cut for dark: 15 navy fills → `#FFFFFF`, ring →
   `#5E6879`. The logo shipped containing **zero brand colour**.

Before designing either option the mark was rendered on five grounds and
inspected. It only holds on light grounds — on navy the word "Solutions"
disappears completely and the K's leg breaks out of the ellipse. Full detail in
`../context/design-research.md`, Finding 5.

**So neither option recolours the logo, and neither lightens `#091E81`.**
The master `assets/NTeK-logo.svg` is used verbatim in both.

---

## Option A — "Ledger"

**Reference:** Cuberto, structure only.

White ground. Oversized centred grotesk. One full-bleed rounded navy plate
directly under the hero carrying the coverage map, then nine service cards in a
grid.

- Ground `#FFFFFF`, alternating `#F7F7F5` bone
- `#091E81` at full strength as display ink — 13.9:1
- Logo on white, unaltered
- IA: hero → map plate → ledger → 9 cards → platforms → contact

The navy runs as a field in exactly one place — the map plate — so the page gets
a strong brand moment without the ground fighting the mark.

## Option B — "Field Manual"

**Reference:** Vide Infra.

The brand navy is the ground, not the accent. Left-aligned massive grotesk with
period-terminated lines. Nine numbered expertise rows. One inverted bone section
where the map runs in navy.

- Ground `#091E81`; bone `#F2F1EE` header bar, footer and coverage section
- Type is the mark's own greys: `#E6E6E6` (11.1:1) and `#C1C2BD` (7.7:1)
- Logo on the bone bar, unaltered — it never touches navy
- IA: hero → proof strip → 9 numbered rows → coverage → platforms → contact

---

---

## Imagery

Only two source plates survive the credibility rules in `../context/design-research.md`:
the **topographic relief** and the **contour texture**. The three `hero-0*.png`
takes are the polygonal-network-globe cliché Finding 3 rejected and are not used
by either option.

Both plates are dark. Rather than regenerate them for a light ground, each is
composited:

| Layer | Ground | Treatment |
|---|---|---|
| `relief.jpg` | navy | `mix-blend-mode: screen` — near-black falls away, only the lit ridges survive |
| `relief.jpg` | white plate interior | screened inside the navy plate, masked left→right |
| `contour.jpg` | navy | screened at low opacity |
| `contour.jpg` | white / bone | `invert` + `brightness` + `contrast`, then `multiply` |

The brightness step matters: inverting alone lifts the plate's near-black ground
to about `#EBE8E1`, which multiplies into the page as a grey haze. Pushing that
ground back to pure white drops it out of the multiply entirely and leaves only
the drawn lines.

**The tonal seam.** `relief.jpg` carries a verified hard step at ~44% width. Both
options lay a horizontal mask ramp straight across it rather than trying to
crop around it, and the headline sits in the cleared area.

### Weight — closes open decision #2

| | Before | After |
|---|---|---|
| relief | 2.13MB PNG | **309KB** JPEG q84 |
| contour | 2.90MB PNG | **257KB** JPEG q80, 1600px |
| total | 5.03MB | **566KB** (−89%) |

Checked for the banding that was the stated risk — none visible at q84, contour
detail intact. Originals are kept in `assets/img/`. `sips` still cannot write
WebP on this machine, so JPEG is the format.

### Service marks

`assets/icons/services.svg` — nine drafting-register marks on a 24×24 grid,
1.4 stroke, no fills, `currentColor` so one sprite serves both the white and the
navy option. Inlined per page as a hidden sprite so there is no external `<use>`
fetch. Option A puts them at the head of each card; Option B leads each numbered
row with one.

No stock photography, no synthetic people or datacenters, no network globe.

## Content integrity — unchanged from the first build

- **No invented SLA data.** `24x7x4` is published for Jordan, Lebanon and
  Pakistan only; the other eleven countries are not. The map shows coverage
  status without per-country SLA.
- **No stock or synthetic photography.** Neither option uses imagery of people
  or datacenters. Real NteK photography remains a production line item.
- **Partner logos are typographic wordmarks.** Real SVGs still needed.
- **No client names or case studies.** None are published today.

## Architecture rules carried over

1. **No real content depends on an animation completing.** Reveals are CSS +
   IntersectionObserver with a 3.2s failsafe that forces everything visible.
2. Counters carry true values in the HTML; the count-up only re-animates them.
3. No CDN dependencies. Fonts are self-hosted, motion is CSS + vanilla JS, GSAP
   is gone.
4. `prefers-reduced-motion` disables reveals, map draw and count-up.

## Known gaps

- **Type differentiation is thinner than ground differentiation.** Both options
  use Archivo / IBM Plex — the only faces self-hosted in `assets/fonts`. A serif
  display face for Option A would echo the serif wordmark and settle open
  decision #1; it needs a licence call first.
- **Contact form has no backend.** Submitting states that plainly and points to
  the phone desks rather than pretending to send.
- Arabic / RTL still unscoped.

## Running it

```bash
python3 "/Users/ms/Documents/Projects/NTeK Solutions/website/serve.py"
```

Then open http://127.0.0.1:8091/options/

⚠️ Claude Code's sandboxed preview launcher **cannot read `~/Documents/Projects`**
— `preview_start` fails with `Operation not permitted`, and this reproduced again
on 2026-08-15 from three different paths including a non-hidden folder inside
`~/Documents/AIOS`. The working route is to mirror the build into the session
scratchpad under `/private/tmp/claude-501/…` and serve from there. Running
`serve.py` from a normal terminal works fine.
