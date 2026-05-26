# Filet Crochet

Pixel art in thread.

## What It Is

Filet crochet creates **pictures and patterns using a grid of open and closed squares**. It's essentially binary art — filled square = 1, open square = 0 — rendered in crochet.

## Construction

- **Open mesh**: Chain 2, double crochet = open square
- **Closed mesh**: Double crochet in each chain space = closed square
- **Grid system**: All work is on a regular square grid
- **Charts**: Patterns are read from grid charts

## Visual DNA

- **Binary grid**: Open and closed squares creating images
- **Geometric patterns**: Usually floral, scenic, or abstract motifs
- **Net-like ground**: The mesh structure is visible throughout
- **Monochrome tradition**: Usually one color, relying on open/closed contrast
- **Common uses**: Curtains, table runners, wall hangings, religious imagery

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `mesh_size` | 0.01–0.05 | Size of each grid square |
| `open_ratio` | 0.0–1.0 | Percentage of open squares |
| `line_thickness` | 0.001–0.01 | Thread width |
| `pattern_image` | — | Binary image for filet chart |

## GLSL Snippet

```glsl
float filet_crochet(vec2 uv, float size, sampler2D chart) {
    vec2 grid = floor(uv / size);
    vec2 local = fract(uv / size);
    float is_open = texture(chart, grid / chart_size).r;
    float mesh = is_open > 0.5 ? grid_line(local) : filled_square(local);
    return mesh;
}
```

## Prompt Template

> "Filet crochet panel in white cotton, [MOTIF] pattern created by open and closed mesh squares, net-like grid with geometric design, traditional monochrome crochet art"

## Anti-Drift

- **Not filet lace**: Filet crochet is crochet mesh; filet lace is knotted net
- **Binary system**: Open/closed is the only two states
- **Chart-driven**: Every filet pattern starts as a grid chart
- **Not regular lace**: Filet is specifically the open/closed mesh grid

---

*Open or closed. The mesh is the pixel.*
