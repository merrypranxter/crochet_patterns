#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_threadColor;
uniform vec3 u_bgColor;
uniform float u_gridScale;

float lineBox(vec2 p, float thickness) {
    vec2 d = abs(p - 0.5);
    float border = min(min(d.x, d.y), min(0.5 - d.x, 0.5 - d.y));
    return smoothstep(thickness, thickness * 0.5, border);
}

float cellMask(vec2 id) {
    float v = sin(id.x * 12.9898 + id.y * 78.233) * 43758.5453;
    return step(0.45, fract(v));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = uv * u_gridScale;
    vec2 cell = fract(p);
    vec2 id = floor(p);
    float border = lineBox(cell, 0.08);
    float filled = cellMask(id) * smoothstep(0.45, 0.25, length(cell - 0.5));
    float thread = max(border, filled);
    vec3 col = mix(u_bgColor, u_threadColor, thread);
    gl_FragColor = vec4(col, 1.0);
}
