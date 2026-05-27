# Crochet As Loop Topology

Crochet can be modeled as a growing graph of connected loops. Each stitch attaches to one or more existing points, creates height, and leaves a new top loop available for later rows or rounds.

## Graph Model

- Nodes: stitch tops, chain positions, post insertion points, ring anchors
- Edges: yarn segments connecting loops
- Faces: holes, chain spaces, filet windows, lace gaps
- Weights: stitch height, tension, yarn thickness, color, relief

## Topological Behaviors

### Flat Growth
A flat circle requires regular increases. Too few increases creates cupping. Too many creates ruffling or hyperbolic flare.

### Tube Growth
Repeating rounds without increases produces cylinders, sleeves, amigurumi bodies, bags, and tubes.

### Hyperbolic Growth
Increasing too often creates exponential edge expansion. This produces coral-like ruffles and saddle surfaces.

### Lace Voids
Chains and skipped stitches create holes. In visual systems, these holes matter as much as the yarn.

## Generative Translation

A crochet generator can treat each stitch as a particle or glyph placed on a grid, radial system, or graph. Stitch type controls height, width, relief, and hole formation.
