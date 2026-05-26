# Slip Stitch

The invisible join.

## What It Is

Slip stitch is a **flat, nearly invisible stitch** used for joining, edging, or moving the hook without adding height. It creates no visible stitch structure.

## Construction

- **Insert hook**: Into desired stitch
- **Yarn over, pull through**: Both the stitch and the loop on hook
- **Result**: One loop remains; no new stitch formed
- **Use**: Joining rounds, moving across, edging

## Visual DNA

- **Flat line**: Barely visible on surface
- **No height**: Adds zero vertical dimension
- **Smooth join**: Seamless connection between pieces
- **Functional**: Usually hidden, not decorative
- **Common uses**: Joining rounds, finishing edges, surface crochet, moving position

## Shader Parameters

| Parameter | Range | Notes |
|-----------|-------|-------|
| `visibility` | 0.0–0.1 | Nearly invisible |
| `line_thickness` | 0.001–0.005 | Very fine |

## GLSL Snippet

```glsl
float slip_stitch(vec2 uv, float thickness) {
    float line = smoothstep(thickness, 0.0, abs(uv.y));
    return line * 0.1; // Barely visible
}
```

## Prompt Template

> "Slip stitch join in [COLOR] yarn, nearly invisible flat connection between crochet pieces, functional not decorative, seamless edge finishing"

## Anti-Drift

- **Not a real stitch**: Slip stitch adds no fabric; just moves the hook
- **Invisible purpose**: Used for joining, not for building fabric
- **Not decorative**: Usually hidden in finished work

---

*Pull through and through. The join is the function.*
