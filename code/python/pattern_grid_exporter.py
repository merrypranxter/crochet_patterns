#!/usr/bin/env python3
"""Export a simple filet/tapestry crochet grid as CSV and SVG."""

from pathlib import Path
import csv

GRID = [
    "00111100",
    "01100110",
    "11000011",
    "11011011",
    "11000011",
    "01100110",
    "00111100",
]

OUT = Path("pattern_grid_output")
OUT.mkdir(exist_ok=True)

with (OUT / "grid.csv").open("w", newline="") as f:
    writer = csv.writer(f)
    for row in GRID:
        writer.writerow(list(row))

cell = 24
w, h = len(GRID[0]) * cell, len(GRID) * cell
rects = []
for y, row in enumerate(GRID):
    for x, val in enumerate(row):
        fill = "black" if val == "1" else "white"
        rects.append(f'<rect x="{x*cell}" y="{y*cell}" width="{cell}" height="{cell}" fill="{fill}" stroke="#999"/>')
svg = f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">' + "".join(rects) + "</svg>"
(OUT / "grid.svg").write_text(svg)
print(f"Wrote {OUT}/grid.csv and {OUT}/grid.svg")
