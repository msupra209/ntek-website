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
