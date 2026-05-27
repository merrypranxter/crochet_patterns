# P5 Implementation Notes

p5.js examples should use simple geometry first: arcs, circles, capsules, cells, symbols, and repeat loops before attempting realistic yarn rendering.

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
