# Irish Crochet

Sculptural floral appliqué.

## What It Is

Irish crochet is a **highly detailed, sculptural lace** where three-dimensional floral and leaf motifs are worked separately, then arranged and joined on a mesh or net background. It reached peak popularity in the 19th century.

## Construction

- **Separate motifs**: Each flower, leaf, stem worked individually
- **Sculptural elements**: Petals and leaves are raised and dimensional
- **Mesh joining**: Motifs connected with chain mesh or bars
- **Cotton thread**: Traditionally fine white or ecru cotton

## Visual DNA

- **3D florals**: Roses, shamrocks, leaves that stand proud of ground
- **Mesh background**: Net-like base connecting the motifs
- **Dense arrangement**: Motifs packed closely with minimal mesh showing
- **Victorian aesthetic**: Elaborate, ornate, highly detailed
- **Common uses**: Bridal veils, christening gowns, collars, cuffs, accessories

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `motif_height` | 0.0–0.2 | 3D relief of florals |
| `mesh_density` | 0.1–0.5 | Background net fineness |
| `motif_density` | 0.3–0.9 | How packed the motifs are |
| `thread_fineness` | 0.001–0.01 | Very fine cotton |

## GLSL Snippet

```glsl
float irish_crochet(vec2 uv, sampler2D motif_map) {
    float motif = texture(motif_map, uv).r;
    float mesh = hex_grid(uv, 0.1);
    float height = motif * 0.15;
    return max(mesh * 0.3, height);
}
```

## Prompt Template

> "Irish crochet lace in white fine cotton, sculptural roses and shamrocks arranged on delicate mesh ground, Victorian ornate floral appliqué, dimensional petals, heirloom textile"

## Anti-Drift

- **Not regular crochet lace**: Irish is specifically separate motifs joined on mesh
- **Not tatting**: Irish crochet is hook-based; tatting is shuttle-based
- **Sculptural**: The 3D quality is the defining feature

---

*Motifs on mesh. The rose is the sculpture.*
