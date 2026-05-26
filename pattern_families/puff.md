# Puff Stitch

The soft cloud. Raised and round.

## What It Is

Puff stitch creates **raised, cloud-like bumps** by working multiple yarn-overs and partial stitches into one base, then completing them all together. Softer than popcorn, less defined.

## Construction

- **Multiple yarn-overs**: Yarn wrapped around hook 3–5 times
- **Partial pulls**: Pull through some loops, leave others
- **Complete together**: Final yarn-over pulls through all remaining loops
- **Soft ball**: Creates a puffy, rounded bump

## Visual DNA

- **Rounded bumps**: Soft, cloud-like protrusions
- **Less defined than popcorn**: Puffy rather than crisp
- **Tactile texture**: Soft to the touch
- **Scattered or aligned**: Can be random or in patterns
- **Common uses**: Baby items, textured blankets, decorative panels

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `puff_size` | 0.02–0.08 | Diameter of bump |
| `puff_height` | 0.0–0.1 | Soft normal displacement |
| `softness` | 0.5–1.0 | Edge blur vs. crisp |
| `density` | 0.0–0.5 | Coverage of surface |

## GLSL Snippet

```glsl
float puff_stitch(vec2 uv, vec2 pos, float size) {
    float dist = length(uv - pos) / size;
    float puff = pow(max(0.0, 1.0 - dist), 2.0);
    return puff * puff_height;
}
```

## Prompt Template

> "Puff stitch texture in [COLOR] baby yarn, soft cloud-like bumps scattered across fabric, gentle rounded protrusions, tactile nursery crochet"

## Anti-Drift

- **Not popcorn**: Popcorn is worked complete then pushed to front; puff is worked as one soft bump
- **Not bobble**: Bobble is knit; puff is crochet
- **Softer than popcorn**: Less structural, more cloud-like

---

*Yarn-over cloud. The softness is the feature.*
