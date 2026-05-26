# Double Crochet

Taller. Airier. The workhorse.

## What It Is

Double crochet (US) / treble crochet (UK) is a **tall, versatile stitch** that creates a more open, flexible fabric than single crochet. It's the most commonly used stitch for general projects.

## Construction

- **Yarn over, insert hook**: Into stitch below
- **Pull through**: Three loops on hook
- **Yarn over, pull through two**: Twice
- **Height**: About twice single crochet

## Visual DNA

- **Taller stitches**: More vertical space between rows
- **More open**: Visible gaps between stitches
- **Drapey hand**: Flexible, moves well
- **Quick to work**: Taller = fewer stitches for same area
- **Common uses**: Blankets, scarves, garments, general projects

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `stitch_height` | 0.03–0.08 | Taller than single |
| `stitch_width` | 0.02–0.05 | Slightly wider |
| `openness` | 0.2–0.5 | Visible gaps between |

## GLSL Snippet

```glsl
float double_crochet(vec2 uv, float h, float w) {
    vec2 local = fract(uv / vec2(w, h));
    float post = smoothstep(0.0, 0.2, local.x) * smoothstep(1.0, 0.8, local.x);
    return post * local.y;
}
```

## Prompt Template

> "Double crochet blanket in [COLOR] wool, tall stitches with moderate openness, drapey flexible fabric, quick-to-work texture, general purpose crochet"

## Anti-Drift

- **US vs UK naming**: US "double crochet" = UK "treble crochet"
- **Not single crochet**: Much taller and more open
- **Most common stitch**: The default for most projects

---

*Tall and versatile. The openness is the drape.*
