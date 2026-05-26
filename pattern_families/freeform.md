# Freeform Crochet

Unplanned. Organic. Sculptural.

## What It Is

Freeform crochet abandons patterns and rules, creating **non-repeating, organic, sculptural fabric** through intuitive stitch combinations, color changes, and texture mixing.

## Construction

- **No pattern**: Worked intuitively, stitch by stitch
- **Mixed stitches**: Any stitches combined freely
- **Color improvisation**: Changes happen organically
- **Sculptural**: Shaped in 3D as it's worked

## Visual DNA

- **Organic forms**: No straight lines or regular repeats
- **Texture chaos**: Mix of smooth, bumpy, lacy areas
- **Color landscapes**: Gradual or abrupt color shifts
- **Art piece**: Usually wall art or wearable sculpture
- **Common uses**: Art installations, wearable art, bags, mixed-media pieces

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `chaos_factor` | 0.0–1.0 | How irregular |
| `texture_mix` | 0–5 | Number of different stitch types |
| `color_gradient` | 0–1 | Smooth vs. abrupt changes |
| `sculptural_depth` | 0.0–0.3 | 3D relief variation |

## GLSL Snippet

```glsl
float freeform(vec2 uv, float seed) {
    float noise = fbm(uv * 3.0 + seed);
    float stitch = noise > 0.5 ? shell_stitch(uv) : single_crochet(uv);
    return stitch;
}
```

## Prompt Template

> "Freeform crochet art piece in [COLOR PALETTE], organic non-repeating sculptural fabric with mixed textures, intuitive color changes, wearable art crochet, no pattern"

## Anti-Drift

- **Not random**: Freeform is intuitive, not random; the artist makes choices
- **Not beginner work**: Requires advanced skill to look intentional
- **Mixed media often**: Combined with beads, fabric, found objects

---

*No pattern, all intuition. The form is the discovery.*
