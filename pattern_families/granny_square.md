# Granny Square

The modular icon.

## What It Is

Granny square is a **modular crochet motif** worked in rounds from a center point, creating a square with characteristic corner chain spaces and side clusters. It's the building block of countless blankets and garments.

## Construction

- **Center ring**: Usually 4 chains joined to form a ring
- **Rounds**: Worked outward in square formation
- **Corner chains**: 2–3 chain stitches create the square corners
- **Side clusters**: 3 double crochets in each space between corners
- **Color rounds**: Each round often changes color

## Visual DNA

- **Concentric squares**: Each round adds a border layer
- **Corner gaps**: Distinctive chain-space corners
- **Color blocks**: Each round a different color in classic versions
- **Modular**: Many squares joined for larger pieces
- **Common uses**: Blankets, bags, garments, accessories, afghans

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `round_count` | 3–10 | Number of concentric squares |
| `corner_openness` | 0.0–0.2 | Size of corner chain gap |
| `color_per_round` | 0–1 | Whether colors change each round |
| `square_size` | 0.1–0.5 | Final square dimensions |

## GLSL Snippet

```glsl
float granny_square(vec2 uv, float rounds) {
    float dist = max(abs(uv.x - 0.5), abs(uv.y - 0.5));
    float ring = floor(dist * rounds * 2.0);
    return ring / rounds;
}
```

## Prompt Template

> "Classic granny square in [COLOR PALETTE], concentric rounds of double crochet clusters with corner chain spaces, each round a different color, traditional modular crochet motif"

## Anti-Drift

- **Not solid square**: Granny has open corner spaces; solid granny is different
- **Not any square**: The specific cluster+chain structure defines it
- **Modular by nature**: Designed to be joined with other squares

---

*Cluster and chain, round by round. The square is the module.*
