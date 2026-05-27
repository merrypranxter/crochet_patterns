# Loop Field Shader Notes

A loop field shader uses SDF arcs and capsules to draw repeated stitch loops in screen or UV space.

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
