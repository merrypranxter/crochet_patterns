# Pattern Grammar

A simple crochet pattern grammar can be represented as tokens.

```text
PATTERN := ROW+ | ROUND+
ROW := TOKEN+ TURN
ROUND := TOKEN+ JOIN? NEXT_ROUND
TOKEN := STITCH | REPEAT | COLOR_CHANGE | INCREASE | DECREASE | CHAIN_SPACE
STITCH := ch | slst | sc | hdc | dc | tr | shell | puff | bobble | cluster
REPEAT := * TOKEN+ * x N
```

## Example

```text
ROUND 1: ch3, 2dc, ch2, *3dc, ch2* x3, join
```

## Why This Matters

This lets AI agents convert crochet into code, chart symbols, visual prompts, and validation rules.
