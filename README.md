# Crochet Patterns

Knots, loops, nodes, and radial magic.

This repository documents crochet structures as **discrete graph construction** — each stitch is a node with 1–3 connections, and the fabric grows by adding, connecting, and occasionally removing nodes.

## The Core Principle

Crochet is fundamentally different from knitting:
- **Knitting**: Continuous yarn, interlooped rows. All stitches connected in a line.
- **Crochet**: One active loop on hook. Each stitch is completed and tied off before next begins. Discrete units.

This means crochet can:
- Change direction mid-row
- Create 3D forms more easily
- Make tighter, more rigid fabric
- Produce radial/spiral forms naturally

## Visual DNA of Crocheted Cloth

- **Knot-like texture**: Each stitch has a "head" and "post"
- **More structural than knit**: Less stretch, more shape memory
- **Radial forms**: Doilies, mandalas, amigurumi spheres
- **Lace capability**: Filet crochet creates binary mesh
- **Shell / cluster shapes**: Multiple stitches in one base = scalloped edge

## The Stitch Families

### Basic Stitches
- [Chain stitch](pattern_families/chain.md) — foundation row, spacing unit
- [Single crochet](pattern_families/single_crochet.md) — tight, dense, short
- [Double crochet](pattern_families/double_crochet.md) — taller, more open
- [Treble crochet](pattern_families/treble.md) — very tall, lacy
- [Slip stitch](pattern_families/slip_stitch.md) — flat join, no height

### Textured Stitches
- [Shell stitch](pattern_families/shell.md) — multiple stitches in one base, fan shape
- [Puff stitch](pattern_families/puff.md) — yarn-over multiple times, raised ball
- [Popcorn stitch](pattern_families/popcorn.md) — cluster that pops to front
- [Cluster stitch](pattern_families/cluster.md) — partial stitches grouped

### Modular / Geometric
- [Granny squares](pattern_families/granny_square.md) — modular color blocks
- [Filet crochet](pattern_families/filet.md) — open/closed mesh as binary grid
- [Ripple / chevron](pattern_families/ripple.md) — wave pattern via increases/decreases

### Lace / Delicate
- [Crochet lace](pattern_families/crochet_lace.md) — openwork with floral motifs
- [Irish crochet](pattern_families/irish.md) — sculptural floral appliqué
- [Doily geometry](pattern_families/doily.md) — radial medallions, pineapples

### Advanced / Sculptural
- [Hyperbolic crochet](pattern_families/hyperbolic.md) — exponential growth, coral forms
- [Amigurumi](pattern_families/amigurumi.md) — spherical construction, spiral rounds
- [Freeform crochet](pattern_families/freeform.md) — non-repeating, sculptural

## Shader Translation: Crochet-Specific Parameters

| Parameter | What It Controls | Range | Notes |
|-----------|---------------|-------|-------|
| `stitch_height` | Height of one stitch post | 0.02–0.1 | UV space |
| `stitch_width` | Width of stitch head | 0.02–0.1 | Slightly wider than height |
| `loop_openness` | How open the loop is | 0.0–1.0 | 0 = tight, 1 = loose |
| `shell_fan_width` | Angle of shell spread | 30°–180° | Wider = more dramatic |
| `granny_square_size` | Module dimensions | 0.1–0.5 | UV space |
| `filet_mesh_density` | Open/closed ratio | 0.0–1.0 | 0 = all closed, 1 = all open |
| `hyperbolic_increase_rate` | Extra stitches per round | 1–10 | Standard = 6 for flat circle |

## Crochet-to-Shader Logic

### Basic Stitch Knot
```glsl
float crochet_stitch(vec2 uv, vec2 pos, float w, float h) {
    vec2 local = uv - pos;
    float head = smoothstep(w, 0.0, abs(local.x));
    float post = smoothstep(h, 0.0, max(0.0, local.y));
    return max(head, post);
}
```

### Granny Square Module
```glsl
float granny_square(vec2 uv, float size, int colors[]) {
    vec2 tile = fract(uv / size);
    // 3×3 color blocks within square
    int block_x = int(tile.x * 3.0);
    int block_y = int(tile.y * 3.0);
    return palette[block_x + block_y * 3];
}
```

### Filet Mesh (Binary)
```glsl
float filet_mesh(vec2 uv, float mesh_size, float pattern[]) {
    vec2 grid = floor(uv / mesh_size);
    int idx = int(grid.x + grid.y * grid_width);
    return pattern[idx]; // 1.0 = solid, 0.0 = open
}
```

## Prompt Templates

### Basic Crochet
> "Hand-crocheted [ITEM] in [FIBER], showing the knot-and-loop texture of [STITCH TYPE] stitches, slight variation in tension, soft fiber fuzz, traditional craft photography"

### Granny Square
> "A colorful granny square blanket in [FIBER], showing modular color blocks with classic 3-round square construction, white border between squares, vintage craft aesthetic"

### Lace Doily
> "A delicate white cotton crochet doily with [MOTIF] radial pattern, fine thread, open mesh ground with dense floral medallion center, scalloped edge, traditional doily photography"

## Anti-Drift: Crochet-Specific

- **Crochet ≠ knitting**: Crochet has discrete, completed stitches; knitting has continuous loops
- **Granny squares are modular**: They are joined, not continuous fabric
- **Filet crochet is binary**: Open mesh = 0, closed mesh = 1; it is pixel art in thread
- **Hyperbolic crochet grows exponentially**: Standard flat circle = 6 increases per round; hyperbolic = more than 6
- **Amigurumi is worked in spiral rounds**: No joining at round end; continuous spiral

---

*This repo treats crochet as freeform graph construction. Each stitch is a node. The hook is the cursor. The pattern is the traversal.*
