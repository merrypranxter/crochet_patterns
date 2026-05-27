// Simple crochet stitch chart SVG builder.
// Use in browser or Node with minor adaptation.

const NS = 'http://www.w3.org/2000/svg';

function el(name, attrs = {}) {
  const node = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  return node;
}

export function createChartSVG(cells, options = {}) {
  const cell = options.cellSize || 28;
  const rows = cells.length;
  const cols = Math.max(...cells.map(r => r.length));
  const svg = el('svg', { width: cols * cell, height: rows * cell, viewBox: `0 0 ${cols * cell} ${rows * cell}` });
  svg.style.background = options.background || 'white';

  cells.forEach((row, y) => {
    row.forEach((token, x) => drawSymbol(svg, token, x * cell + cell / 2, y * cell + cell / 2, cell * 0.6));
  });

  return svg;
}

function drawSymbol(svg, token, cx, cy, s) {
  const stroke = 'black';
  const fill = 'none';
  if (token === 'ch') {
    svg.appendChild(el('ellipse', { cx, cy, rx: s * 0.35, ry: s * 0.18, fill, stroke, 'stroke-width': 2 }));
  } else if (token === 'sc') {
    svg.appendChild(el('line', { x1: cx-s/3, y1: cy-s/3, x2: cx+s/3, y2: cy+s/3, stroke, 'stroke-width': 2 }));
    svg.appendChild(el('line', { x1: cx+s/3, y1: cy-s/3, x2: cx-s/3, y2: cy+s/3, stroke, 'stroke-width': 2 }));
  } else if (token === 'dc') {
    svg.appendChild(el('line', { x1: cx, y1: cy+s/2, x2: cx, y2: cy-s/2, stroke, 'stroke-width': 2 }));
    svg.appendChild(el('line', { x1: cx-s/4, y1: cy-s/2, x2: cx+s/4, y2: cy-s/2, stroke, 'stroke-width': 2 }));
    svg.appendChild(el('line', { x1: cx-s/5, y1: cy, x2: cx+s/5, y2: cy-s/5, stroke, 'stroke-width': 2 }));
  } else {
    svg.appendChild(el('circle', { cx, cy, r: s * 0.18, fill: stroke }));
  }
}
