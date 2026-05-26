# Hyperbolic Crochet

Exponential ruffles. Coral geometry.

## What It Is

Hyperbolic crochet creates **surfaces of negative curvature** by increasing stitches faster than geometrically necessary. The excess fabric buckles outward, creating ruffles, waves, and complex organic forms.

## Construction

- **Constant increase**: More stitches added per round than needed for flat
- **Exponential growth**: Each round has more ruffles than the last
- **Standard flat circle**: 6 increases per round
- **Hyperbolic**: 7+ increases per round (more = more ruffled)

## Visual DNA

- **Ruffled edges**: Undulating, wavy borders
- **Exponential complexity**: Outer rounds have dramatically more detail
- **Coral-like forms**: Resembles marine biology
- **Non-Euclidean**: Mathematically fascinating
- **Common uses**: Art installations, coral reef projects, mathematical models, sculpture

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `increase_rate` | 0–10 | Extra stitches per round |
| `round_count` | 3–50 | Number of growth rounds |
| `ruffle_amplitude` | 0.0–0.5 | Wave height |
| `color_stripes` | 0–1 | Growth rings visible |

## GLSL Snippet

```glsl
float hyperbolic_crochet(vec2 uv, float rate, float rounds) {
    float r = length(uv);
    float circumference = 2.0 * PI * r;
    float excess = rate * rounds;
    float freq = circumference / (6.0 + excess);
    float angle = atan(uv.y, uv.x);
    float ruffle = sin(angle * freq) * (excess * 0.1);
    return ruffle;
}
```

## Prompt Template

> "Hyperbolic crochet coral form in [COLOR PALETTE] acrylic yarn, exponential ruffle growth from center, increasingly complex wavy edges, mathematical biology textile art, non-Euclidean surface"

## Anti-Drift

- **Not just ruffled**: The ruffles follow exponential math
- **6 = flat**: Fewer increases = spherical; more = hyperbolic
- **Color reveals structure**: Stripes show growth rings

---

*Exponential increase. The ruffle is the curvature.*
