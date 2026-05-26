# Crochet Lace

Openwork beauty. Delicate holes.

## What It Is

Crochet lace encompasses **all open, delicate crochet fabrics** with holes as part of the design. It ranges from simple mesh to elaborate floral medallions, and includes Irish crochet, filet, and many traditional forms.

## Construction

- **Chains and spaces**: Chain stitches create gaps; other stitches fill solid areas
- **Motif-based**: Often built from separate motifs joined together
- **Irish method**: Motifs worked separately, then joined on a mesh ground
- **Net grounds**: Mesh or filet base with motifs applied

## Visual DNA

- **Open holes**: Visible gaps between stitches are intentional
- **Floral motifs**: Roses, leaves, shamrocks common in traditional lace
- **Scalloped edges**: Decorative wavy borders
- **Delicate thread**: Usually fine cotton or linen thread
- **Common uses**: Doilies, edgings, bridal, christening gowns, table linens

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `openness` | 0.2–0.8 | Percentage of holes |
| `motif_complexity` | 0–1 | Simple mesh to elaborate floral |
| `thread_fineness` | 0.001–0.01 | Very fine for delicate lace |
| `edge_scallop` | 0.0–0.1 | Wavy border |

## GLSL Snippet

```glsl
float crochet_lace(vec2 uv, float density, float motif) {
    float mesh = hex_grid(uv, density);
    float floral = floral_motif(uv, motif_scale);
    return mix(mesh, floral, motif);
}
```

## Prompt Template

> "Crochet lace doily in white fine cotton, delicate openwork with [MOTIF] pattern, floral medallions on mesh ground, scalloped edge, traditional handmade lace"

## Anti-Drift

- **Not knitted lace**: Crochet lace uses hook; knitted lace uses needles
- **Not tatting**: Tatting is shuttle lace; crochet is hook-based
- **Thread weight matters**: Lace uses very fine thread, not yarn

---

*Chains and spaces. The hole is the design.*
