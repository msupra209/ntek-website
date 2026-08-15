# NteK Website — Design Research Findings

Research conducted 2026-08-15 during the revamp planning pass. Written down
because these conclusions took real digging and would otherwise live only in a
chat transcript.

---

## Finding 1 — There are no same-niche award-winning storytelling sites

**Checked:** Awwwards, FWA, CSSDA, Webby Awards, plus the portfolios of the
agencies behind the strongest candidates (Cuberto, Vide Infra).

**Result:** no recent, same-niche (MSP / managed IT / cloud / network
infrastructure) award-winning site exists — not in 2026, not in any year.
Searches for "Awwwards 2026 managed IT services / MSP / cloud infrastructure"
return nothing. This is not a search failure; the category simply does not enter
design competitions. It is lead-gen-conservative by convention, not necessity.

**Why this matters strategically:** it is the opportunity, not a dead end. If
NteK executes a genuinely designed site, there is no in-category competitor to
be compared against, and the fidelity bar to look new is therefore lower than it
would be competing head-to-head with a top-tier agency build.

### Closest verified references (adjacent categories)

| Site | Category | Recognition | Date | Technique worth borrowing |
|---|---|---|---|---|
| SAFE Security | Cyber risk quantification | Awwwards Honorable Mention (agency: Cuberto) | Apr 2021 | Renders abstract risk data as a live 3D visualisation rather than a dashboard screenshot |
| CyberConvoy | Cybersecurity | Awwwards Honorable Mention | Feb 2024 | Interactive *layer* visualisation — capabilities as stacked layers you scroll through, then compress back into one system |
| iCOMAT | Aerospace composites | Awwwards Site of the Day | — | Scroll-pinned macro video of the real manufacturing rig; camera pushes from wide shot to microscopic detail, so **scale itself** is the explanatory device |

iCOMAT is cross-industry and was included only because the live site was
browsed directly to confirm the technique rather than trusting a summary.

**Process note / correction:** the first research pass proposed Madar
(Gulf logistics, Vide Infra), Rollpark (modular parking) and iCOMAT. Majid
correctly pushed back — those were selected for "serious industrial B2B
storytelling", not for niche or recency, and their dates were never verified.
The table above is the corrected, date-verified set.

---

## Finding 2 — Vide Infra is the agreed aesthetic reference

Majid reviewed the ten competitor sites (see `competitors.md`) and found none
of them good enough. The closest match to the desired look and feel came from
**Vide Infra's** client portfolio — specifically how they structure web
components and build bespoke visual identity per client.

**Direction taken from this:** section-based composition with a strong bespoke
identity, rather than a continuous scroll-narrative. The five-beat storytelling
concept (region → route → boots on ground → multiplied → stack) was explicitly
**dropped** at Majid's direction in favour of the section-based approach now
built.

---

## Finding 3 — Category visual clichés to avoid

The polygonal network sphere / wireframe globe is the single most overused
visual in enterprise tech — present on thousands of IT, cybersecurity and
blockchain sites. Three AI-generated hero candidates all converged on it and
were **rejected on this basis alone**, despite being technically well executed.

The chosen direction — dark topographic survey relief — was selected because it
ties the visual language directly to the actual differentiator (coverage across
14 countries), and because nobody in the category is using it.

**Rule going forward:** if a visual could sit unchanged on a competitor's site,
it is wrong for NteK regardless of execution quality.

---

## Finding 4 — Stock and synthetic imagery is the credibility failure mode

The current nteksolutions.net loses credibility largely through generic stock
photography (hands on keyboards, anonymous server rooms). AI-generated
photorealistic "engineers" and "datacenters" would reproduce exactly the same
failure in a new form — enterprise and government buyers recognise both
instantly.

**Consequence:** only *abstract* assets were generated. Real photography of
NteK's own people, vans and racks is scoped as a production line item and
cannot be substituted.

---

## Finding 5 — The mark only holds on light grounds (verified 2026-08-15)

The logo was rendered at two scales on five grounds and inspected before any
option was designed — rather than reasoned about from path coordinates.

| Ground | Result |
|---|---|
| `#FFFFFF` | Full lockup reads — ring, orbit dots, "Solutions". Clean. |
| `#F2F1EE` bone | Same. Clean. |
| `#091E81` brand navy | **"Solutions" disappears entirely** (navy on navy). The K's leg breaks out of the light ellipse into the field. |
| `#050B2B` | As above, plus the ring loses definition. |
| `#080B10` near-black | As above. |

**Root cause of the first build's logo problem.** The committed-dark ground made
the true navy unusable as ink — `#091E81` on `#080B10` is **1.42:1** against a
4.5:1 requirement — which forced two compromises: the accent was lifted to
`hsl(229.5 87% 62%)` = `#4A67F2`, and the mark was re-cut with all 15 navy fills
flipped to `#FFFFFF` plus the ring to `#5E6879`. The result shipped a logo
containing **zero brand colour**. Majid flagged both.

**Rule going forward:** the mark is never recoloured. It is given a light plate
instead. On a dark or navy page that means a bone header bar and bone footer.
Contrast facts worth keeping:

- `#091E81` on `#FFFFFF` → **13.9:1** (AAA) — usable as display ink
- `#E6E6E6` on `#091E81` → **11.1:1** — the ring grey works as body type on navy
- `#C1C2BD` on `#091E81` → **7.7:1** — the warm grey works as secondary type

So on a navy ground the fix is not to lighten the navy; it is to make the navy
the **ground** and let the mark's own two greys become the type. Three brand
colours, nothing invented.

---

## Finding 6 — Both agreed references are light-ground (verified 2026-08-15)

Visited directly rather than recalled.

| Site | Ground | Structure worth taking |
|---|---|---|
| cuberto.com | Pure white | Centred oversized geometric grotesk, tiny sub-line, then a single full-bleed rounded dark media card. Services as prose blocks. |
| videinfra.com | Flat warm grey ~`#CFCFCF` | Left-aligned massive grotesk, period-terminated single words. IA is **numbered expertise verticals 01–04** with project cards nested under each, then a hard proof block. Hairline rules, hamburger-only chrome. |

**Caveat on Cuberto:** its signature personality — custom cursor, morphing
shapes, expressive easing — reads as "creative studio" and works against
Product Principle #1 (*credibility over cleverness*) for a government
procurement audience. Structure was borrowed; personality was not.

---

## Open research not yet done

- **Per-site competitor audit.** `competitors.md` lists ten companies but
  carries no per-site notes. A proper pass would capture, for each: hero
  treatment, IA, proof points used, and one thing worth taking.
- **Per-country SLA data.** The current site publishes `24x7x4` for Jordan,
  Lebanon and Pakistan only. The other eleven countries are unpublished and must
  come from NteK — they were deliberately not invented.
- **Real client names / case studies.** None are published on the current site.
  This is the single biggest credibility gap for government and enterprise
  buyers, who expect citable references.
