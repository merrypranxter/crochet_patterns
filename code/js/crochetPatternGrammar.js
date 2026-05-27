// Crochet Pattern Grammar Helpers
// Simple token utilities for pattern generators and chart builders.

export const STITCHES = {
  ch: { name: 'chain', height: 0, width: 1, symbol: 'oval' },
  slst: { name: 'slip stitch', height: 0.2, width: 1, symbol: 'dot' },
  sc: { name: 'single crochet', height: 1, width: 1, symbol: 'x' },
  hdc: { name: 'half double crochet', height: 1.5, width: 1, symbol: 'T' },
  dc: { name: 'double crochet', height: 2, width: 1, symbol: 'T-slash' },
  tr: { name: 'treble crochet', height: 3, width: 1, symbol: 'T-double-slash' },
  shell: { name: 'shell', height: 2, width: 5, symbol: 'fan' },
  puff: { name: 'puff stitch', height: 1.5, width: 1, symbol: 'puff' }
};

export function expandRepeat(tokens, count) {
  const out = [];
  for (let i = 0; i < count; i++) out.push(...tokens);
  return out;
}

export function rowWidth(tokens) {
  return tokens.reduce((sum, t) => sum + (STITCHES[t]?.width ?? 1), 0);
}

export function tokenize(patternString) {
  return patternString
    .replace(/,/g, ' ')
    .split(/\s+/)
    .map(t => t.trim())
    .filter(Boolean);
}

export function summarize(patternString) {
  const tokens = tokenize(patternString);
  const counts = {};
  for (const token of tokens) counts[token] = (counts[token] || 0) + 1;
  return { tokens, counts, approximateWidth: rowWidth(tokens) };
}
