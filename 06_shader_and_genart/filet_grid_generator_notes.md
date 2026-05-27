# Filet Grid Generator Notes

Filet crochet maps cleanly to binary image grids: open cells and filled cells. The trick is making the grid look like thread, not pixels.

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
