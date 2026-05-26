# Treble Crochet

The long stitch. Lacy height.

## What It Is

Treble crochet (US) / double treble (UK) is a **very tall stitch** that creates an airy, open fabric. It works up quickly but produces a more lace-like, less dense material.

## Construction

- **Yarn over twice**: Before inserting hook
- **Pull through**: Four loops on hook
- **Work off in pairs**: Three times yarn over and pull through two
- **Height**: Nearly three times single crochet

## Visual DNA

- **Very tall stitches**: Long vertical posts
- **Lacy openness**: Large gaps between stitches
- **Quick coverage**: Fewer stitches needed
- **Delicate hand**: Light, airy, less structural
- **Common uses**: Lace projects, shawls, openwork, speed projects

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `stitch_height` | 0.05–0.12 | Very tall |
| `openness` | 0.4–0.7 | Large gaps |
| `post_thickness` | 0.001–0.01 | Thin vertical posts |

## GLSL Snippet

```glsl
float treble_crochet(vec2 uv, float h, float w) {
    vec2 local = fract(uv / vec2(w, h));
    float post = smoothstep(0.0, 0.15, local.x) * smoothstep(1.0, 0.85, local.x);
    return post * (local.y + 0.3); // Taller visual
}
```

## Prompt Template

> "Treble crochet lace fabric in [COLOR] fine cotton, very tall stitches creating airy open texture, delicate lightweight hand, lacy crochet project"

## Anti-Drift

- **US vs UK naming**: US "treble" = UK "double treble"
- **Not double crochet**: Treble is significantly taller
- **Very open**: Large holes; not for dense fabric

---

*Very tall. The height is the lace.*
