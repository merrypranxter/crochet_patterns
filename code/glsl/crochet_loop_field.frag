#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform float u_stitchScale;
uniform float u_reliefDepth;

float sdCapsule(vec2 p, vec2 a, vec2 b, float r) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h) - r;
}

float yarnNoise(vec2 p) {
    return sin((p.x + p.y) * 80.0) * 0.03 + sin(p.x * 31.0) * 0.02;
}

float stitch(vec2 uv) {
    vec2 p = fract(uv) - 0.5;
    float left = sdCapsule(p, vec2(-0.22, -0.30), vec2(0.0, 0.25), 0.07 + yarnNoise(p));
    float right = sdCapsule(p, vec2(0.22, -0.30), vec2(0.0, 0.25), 0.07 + yarnNoise(p.yx));
    float top = sdCapsule(p, vec2(-0.16, 0.25), vec2(0.16, 0.25), 0.06);
    float d = min(min(left, right), top);
    return smoothstep(0.035, -0.01, d);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 p = uv * aspect * u_stitchScale;
    p.x += 0.5 * mod(floor(p.y), 2.0);
    float s = stitch(p);
    float shade = s * (0.75 + 0.25 * sin(p.y * 6.283 + u_time));
    vec3 base = mix(u_colorA, u_colorB, mod(floor(p.x) + floor(p.y), 2.0));
    vec3 bg = vec3(0.94, 0.90, 0.84);
    vec3 col = mix(bg, base * (0.85 + shade * u_reliefDepth), s);
    gl_FragColor = vec4(col, 1.0);
}
