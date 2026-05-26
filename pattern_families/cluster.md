# Cluster Stitch

Gathered at the top. Unified peak.

## What It Is

Cluster stitch groups **multiple partial stitches** that share a common top loop. Unlike popcorn, the stitches are joined at the top before completing, creating a teardrop or triangular shape.

## Construction

- **Partial stitches**: Start several stitches but don't finish
- **Common top**: All partial stitches join at one top loop
- **Teardrop shape**: Wide at base, pointed at top
- **Often paired with chains**: Chain spaces between clusters

## Visual DNA

- **Teardrop shapes**: Wide base, narrow top
- **Unified peak**: All stitches meet at one point
- **Often in patterns**: Clusters and chains create lace-like openwork
- **Less dimensional than popcorn**: Flatter, more integrated
- **Common uses**: Lace patterns, floral motifs, openwork, decorative fills

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `cluster_width` | 0.02–0.1 | Width at base |
| `cluster_height` | 0.02–0.1 | Height to peak |
| `pointiness` | 0.0–1.0 | How sharp the peak |

## GLSL Snippet

```glsl
float cluster(vec2 uv, vec2 base, float w, float h) {
    vec2 local = (uv - base) / vec2(w, h);
    float width_at_height = (1.0 - local.y) * w;
    float inside = step(abs(local.x), width_at_height);
    return inside * smoothstep(0.0, 1.0, local.y);
}
```

## Prompt Template

> "Cluster stitch lace in [COLOR] cotton, teardrop shapes gathered at top points, wide bases with unified peaks, openwork crochet pattern with chain spaces between"

## Anti-Drift

- **Not popcorn**: Cluster joins at top; popcorn pops to front
- **Not shell**: Shell radiates from base; cluster gathers at top
- **Often in lace**: Clusters + chains = classic crochet lace

---

*Gathered at the peak. The teardrop is the unit.*
