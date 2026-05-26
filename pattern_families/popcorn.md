# Popcorn Stitch

The popped kernel. Crisp and dimensional.

## What It Is

Popcorn stitch creates **crisp, dimensional bumps** by working multiple complete stitches into one base, then pulling the group tight to pop forward from the fabric.

## Construction

- **Multiple complete stitches**: 5 double crochets in same stitch
- **Remove hook**: Take hook out, insert in first stitch
- **Pull through**: Draw last loop through first stitch
- **Pop forward**: The cluster tightens and pops to the front

## Visual DNA

- **Crisp spheres**: Defined, round bumps
- **Dimensional pop**: Sits proud of the fabric surface
- **Shadowed base**: Creates depth and shadow
- **Often paired with smooth**: Popcorns on stockinette or double crochet ground
- **Common uses**: Textured blankets, pillows, bags, decorative panels

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `popcorn_size` | 0.02–0.08 | Diameter |
| `pop_height` | 0.0–0.15 | Crisp normal displacement |
| `crispness` | 0.8–1.0 | Sharp edge vs. soft |
| `spacing` | 0.05–0.3 | Distance between popcorns |

## GLSL Snippet

```glsl
float popcorn(vec2 uv, vec2 pos, float size, float height) {
    float dist = length(uv - pos) / size;
    float shape = sqrt(max(0.0, 1.0 - dist * dist));
    return shape * height;
}
```

## Prompt Template

> "Popcorn stitch blanket in [COLOR] wool, crisp round bumps popping forward from smooth double crochet ground, dimensional shadowed texture, tactile crochet"

## Anti-Drift

- **Not puff stitch**: Popcorn is crisp and defined; puff is soft
- **Not bobble**: Bobble is knit; popcorn is crochet
- **Pop action**: The physical act of popping creates the shape

---

*Pop to the front. The kernel is the bump.*
