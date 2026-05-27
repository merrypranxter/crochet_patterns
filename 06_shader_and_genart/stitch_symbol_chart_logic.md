# Stitch Symbol Chart Logic

Crochet symbol charts use glyphs for stitches. A code generator can draw chains as ovals, single crochet as crosses, double crochet as tall T marks, and shells as grouped tall marks.

## Useful Parameters

- stitchScale
- loopThickness
- yarnFuzz
- reliefDepth
- colorCount
- patternMask
- repeatSize
- jitterAmount
- rowOffset
- roundIndex

## Implementation Advice

Start with a readable symbolic version, then add yarn texture. The biggest failure mode is making pretty fuzzy fabric that no longer reads as crochet.
