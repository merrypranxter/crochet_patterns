# Crochet Texture Overview

A crochet shader should not be a noise texture with yarn colors. It should use repeated loop units, soft stitch relief, yarn twist noise, and pattern-level structure.

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
