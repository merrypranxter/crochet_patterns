# Single Crochet

The tightest crochet. Dense and solid.

## What It Is

Single crochet (US) / double crochet (UK) is the **shortest and densest basic crochet stitch**. It creates a firm, tight fabric with minimal holes between stitches.

## Construction

- **Insert hook**: Into the stitch below
- **Yarn over, pull through**: Two loops on hook
- **Yarn over, pull through both**: Completed stitch
- **Height**: Shortest of the basic stitches

## Visual DNA

- **Small tight stitches**: Minimal gap between stitches
- **Dense fabric**: Nearly solid surface
- **Slight texture**: Each stitch is a small bump
- **Firm hand**: Little stretch, good structure
- **Common uses**: Amigurumi, bags, toys, tight fabric, sculptural crochet

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `stitch_height` | 0.01–0.04 | Short, tight |
| `stitch_width` | 0.01–0.04 | Nearly square |
| `density` | 0.8–1.0 | Very close together |

## GLSL Snippet

```glsl
float single_crochet(vec2 uv, float h, float w) {
    vec2 grid = floor(uv / vec2(w, h));
    vec2 local = fract(uv / vec2(w, h));
    float stitch = smoothstep(0.0, 0.3, local.y) * smoothstep(1.0, 0.7, local.y);
    return stitch;
}
```

## Prompt Template

> "Single crochet fabric in [COLOR] cotton, dense tight stitches with minimal holes, firm hand suitable for bags or toys, smooth even surface, amigurumi texture"

## Anti-Drift

- **US vs UK naming**: US "single crochet" = UK "double crochet"
- **Not double crochet**: Double is taller and more open
- **Densest basic stitch**: For firm, structural fabric

---

*Short and tight. The density is the feature.*
