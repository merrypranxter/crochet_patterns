# Amigurumi

The yarn creature. Spiral spheres.

## What It Is

Amigurumi is the Japanese art of **crocheting small stuffed creatures and objects**. It's characterized by working in continuous spiral rounds, creating a seamless, sculptural fabric.

## Construction

- **Spiral rounds**: No joining at round end; continuous spiral
- **Single crochet**: Almost exclusively uses single crochet
- **Increasing then decreasing**: Shapes created by stitch count changes
- **Stuffing**: Filled with polyfill to create 3D forms

## Visual DNA

- **Seamless spiral**: No visible join between rounds
- **Tight stitches**: Dense fabric hides stuffing
- **Sculptural forms**: Spheres, cylinders, limbs from stitch shaping
- **Cute aesthetic**: Small scale, big eyes, kawaii influence
- **Common uses**: Toys, dolls, animals, food replicas, keychains

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `stitch_density` | 0.8–1.0 | Very tight |
| `spiral_visible` | 0.0–0.3 | Slight spiral line |
| `stuffing_roundness` | 0.0–0.2 | Bulge from filling |
| `scale` | 0.05–0.3 | Small amigurumi size |

## GLSL Snippet

```glsl
float amigurumi(vec2 uv, float density) {
    float spiral = atan(uv.y, uv.x) + length(uv) * 10.0;
    float stitch = fract(spiral * density);
    return smoothstep(0.0, 0.3, stitch) * smoothstep(1.0, 0.7, stitch);
}
```

## Prompt Template

> "Amigurumi [CREATURE] in [COLOR] yarn, tight single crochet spiral construction, seamless rounds, slight stuffing bulge, cute kawaii crochet toy, handmade plush"

## Anti-Drift

- **Not regular crochet**: Amigurumi uses spiral, not joined rounds
- **Not knitting**: Amigurumi is crocheted, not knitted
- **Single crochet only**: Almost never uses taller stitches

---

*Spiral and stuff. The creature is the form.*
