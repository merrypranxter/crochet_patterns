# Shell Stitch

Fan-shaped beauty. Scalloped edges.

## What It Is

Shell stitch creates **fan-shaped clusters** of multiple stitches worked into one base stitch. The result is a scalloped, decorative edge or all-over wavy pattern.

## Construction

- **Multiple stitches in one**: 5, 7, or 9 double crochets in same stitch
- **Fan shape**: Stitches radiate from a single point
- **Skip stitches**: Spaces between shells create the scallop
- **Can be stacked**: Shells on shells for dense texture

## Visual DNA

- **Fan shapes**: Semicircular clusters radiating outward
- **Scalloped edges**: Natural wavy border
- **Decorative texture**: Not structural; purely ornamental
- **Open centers**: The fan center is denser; edges are open
- **Common uses**: Edgings, baby blankets, shawls, decorative borders

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `fan_width` | 30°–180° | How wide the shell spreads |
| `stitches_per_shell` | 3–9 | Number of stitches in fan |
| `shell_spacing` | 0.05–0.2 | Distance between shell centers |
| `edge_scallop` | 0.0–0.1 | Normal displacement for wave |

## GLSL Snippet

```glsl
float shell_stitch(vec2 uv, vec2 center, float width, float stitches) {
    float angle = atan(uv.y - center.y, uv.x - center.x);
    float dist = length(uv - center);
    float fan = smoothstep(width, 0.0, abs(angle)) * smoothstep(0.0, 0.1, dist);
    return fan;
}
```

## Prompt Template

> "Shell stitch edging in [COLOR] cotton, fan-shaped clusters of double crochets creating scalloped wave border, decorative crochet lace, baby blanket trim"

## Anti-Drift

- **Not cluster stitch**: Cluster stitches are grouped at top; shells radiate from base
- **Not fan stitch**: Fan and shell are similar; shell is the more common term
- **Decorative not structural**: Shells don't add strength; they add beauty

---

*Fan of stitches. The scallop is the edge.*
