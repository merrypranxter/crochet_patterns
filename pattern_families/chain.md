# Chain Stitch

The foundation. The beginning of everything.

## What It Is

Chain stitch is the **starting row of crochet** — a series of loops linked together, forming the base from which all other stitches build. It's also used for spacing, lacework, and decorative lines.

## Construction

- **Yarn over, pull through**: The basic motion repeated
- **Loop links**: Each new loop passes through the previous
- **Foundation chain**: The base for all subsequent rows
- **Can be worked alone**: Decorative chain lines, jewelry, edging

## Visual DNA

- **V-shaped loops**: Each chain looks like a small V
- **Uniform size**: Consistent loop size = consistent foundation
- **Flexible**: Can curve, angle, or stay straight
- **Visible links**: The interconnection is obvious
- **Common uses**: Foundation row, lace motifs, decorative cords, jewelry

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `chain_size` | 0.01–0.05 | Size of each loop |
| `link_thickness` | 0.001–0.01 | Yarn diameter |
| `curve_tension` | 0.0–1.0 | How tight the curve is |

## GLSL Snippet

```glsl
float chain_stitch(vec2 uv, float size) {
    float link = fract(uv.x / size);
    float loop = abs(link - 0.5) * 2.0;
    return smoothstep(1.0, 0.0, loop);
}
```

## Prompt Template

> "Crochet chain stitch foundation in [COLOR] yarn, uniform V-shaped loops linked together, the beginning row of a crochet project, smooth even tension"

## Anti-Drift

- **Not knitting**: Crochet chain is done with one hook; knitting uses two needles
- **Foundation only**: Most chain stitch is hidden under subsequent rows
- **Can be decorative**: Standing alone as lace or cord

---

*Loop through loop. The chain is the start.*
