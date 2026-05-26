# Doily Geometry

Radial medallions. Pineapple elegance.

## What It Is

Doily crochet creates **circular or oval lace pieces** worked in rounds from a center point. Classic motifs include pineapples, fans, and radiating patterns. Doilies are the quintessential crochet lace form.

## Construction

- **Center start**: Small ring at center, worked outward
- **Rounds**: Each round increases to keep flat
- **Classic motifs**: Pineapple, wheel, star, medallion
- **Finishing edge**: Usually scalloped or picot border

## Visual DNA

- **Radial symmetry**: Patterns radiate from center
- **Pineapple motifs**: Teardrop-shaped clusters in rows
- **Increasing rounds**: Each round larger than the last
- **Lacy ground**: Open mesh between solid motifs
- **Common uses**: Table decoration, under plates, wall art, bridal

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `radius` | 0.1–1.0 | Overall doily size |
| `round_count` | 5–30 | Number of concentric rounds |
| `motif_type` | 0–3 | 0 = pineapple, 1 = wheel, 2 = fan, 3 = star |
| `edge_scallop` | 0.0–0.1 | Border waviness |

## GLSL Snippet

```glsl
float doily(vec2 uv, float rounds) {
    float r = length(uv - 0.5);
    float angle = atan(uv.y - 0.5, uv.x - 0.5);
    float ring = floor(r * rounds);
    float motif = sin(angle * (ring + 3.0));
    return motif * smoothstep(0.5, 0.0, r);
}
```

## Prompt Template

> "Crochet doily in white fine cotton, radial [MOTIF] pattern worked in rounds from center, pineapple motifs with scalloped outer edge, traditional lace table decoration"

## Anti-Drift

- **Not just any lace**: Doily specifically means circular/oval medallion
- **Worked in rounds**: Not rows; radial construction
- **Pineapple is classic**: The teardrop cluster is a signature doily motif

---

*Round and round. The medallion is the form.*
