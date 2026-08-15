# NTeK Website — Image Generation Prompts

Generate in the Gemini app (Nano Banana Pro) using Majid's Pro allowance. Save outputs into this folder using the filenames below.

**Global rules for every asset:**
- No text, no letterforms, no logos, no watermarks
- No people, no hands, no faces
- No literal servers, racks, cables, or datacenter photography — abstract only
- Palette locked to deep navy + near-black. No teal, no purple, no orange, no cyan glow
- 16:9 landscape
- Set to 1 variation at a time (per the Pro tip in your screenshot) so each generation is a distinct take

**Why abstract only:** the current NteK site loses credibility to generic stock photography. AI-generated "engineers" and "server rooms" are the same failure in a new form — an enterprise or government buyer spots them immediately, and they contradict the proof-over-adjectives principle the whole revamp is built on. Real NteK photography stays a separate production line item.

---

## Asset 1 — Hero background
**Filename:** `hero-01.png`, `hero-02.png`, `hero-03.png` (3 takes)

> Abstract 3D render of an angular geometric lattice — interconnected nodes joined by taut straight connections, forming a precise structural network that recedes into deep shadow. Deep navy blue and near-black palette only. A single cool light source from the upper right catches sharp specular edges along the geometry; everything else falls into darkness. The structure sits in the right two-thirds of the frame, with the left third dissolving into near-black empty space. Matte metallic surfaces, shallow depth of field, extremely clean and precise. Restrained, engineering-grade, premium corporate infrastructure aesthetic. No text, no logos, no people, no recognizable hardware. 16:9 landscape.

**Critical:** the left third must stay dark and empty — the headline sits there. If a take fills the whole frame, it's unusable.

---

## Asset 2 — Section texture
**Filename:** `texture-01.png`, `texture-02.png` (2 takes)

> Extremely subtle dark background texture: fine precision contour lines, like a technical topographic survey drawn in thin faint navy on near-black. Very low contrast, almost invisible — intended to sit behind body text without competing with it. Flat and even across the whole frame, no focal point, no vignette, no central subject, no glow. Restrained technical drafting aesthetic. No text, no logos. 16:9 landscape.

**Critical:** if you can clearly "see" it at a glance, it's too strong — this should read as barely-there paper grain, not a graphic.

---

## Theme note

The hero section will stay dark in **both** light and dark site themes — a deliberate choice (common on premium corporate sites) that means we only need dark assets, not a light-mode counterpart. Flag it if you'd rather the hero flip with the theme; that changes the generation list.

## After generating

Drop the files in this folder. I'll pick them up, check them at real hero dimensions against the layout, and integrate — including a fallback if any take doesn't hold up at full width.
