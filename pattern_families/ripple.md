# Ripple / Chevron Crochet

The wave in yarn.

## What It Is

Ripple or chevron crochet creates **wave-shaped rows** by increasing at peaks and decreasing at valleys. The result is a fabric with undulating zigzag edges and striped appearance.

## Construction

- **Increases at peaks**: 3 stitches in one space to create high point
- **Decreases at valleys**: Skip stitches or work together to create low point
- **Repeating wave**: The pattern repeats across the row
- **Can be worked flat or in round**: Both produce wave effects

## Visual DNA

- **Zigzag rows**: Wavy top and bottom edges
- **Peak and valley**: Regular rhythm of highs and lows
- **Color striping**: Often worked in color rows that emphasize the wave
- **Drapey**: The wave shape gives fabric movement
- **Common uses**: Blankets, scarves, afghans, decorative items

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `wave_amplitude` | 0.02–0.1 | Height of zigzag |
| `wave_frequency` | 0.05–0.3 | Peaks per unit |
| `peak_width` | 0.01–0.05 | Width at high point |
| `color_stripes` | 0–1 | Whether rows change color |

## GLSL Snippet

```glsl
float ripple_crochet(vec2 uv, float freq, float amp) {
    float wave = sin(uv.x * freq * PI) * amp;
    float row = fract(uv.y);
    float stitch = abs(row - 0.5 + wave);
    return smoothstep(0.5, 0.0, stitch);
}
```

## Prompt Template

> "Ripple crochet blanket in [COLOR PALETTE], wavy zigzag rows with peaks and valleys, color stripes emphasizing the wave pattern, soft drapey afghan"

## Anti-Drift

- **Not chevron stitch**: Chevron stitch is similar but may have different construction
- **Increases and decreases**: The wave comes from stitch count changes
- **Not regular rows**: Each row follows the wave, not straight across

---

*Increase at the peak, decrease at the valley. The wave is the rhythm.*
