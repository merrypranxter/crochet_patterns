// Yarn twist helper snippet.
// `strandUV.x` should run along the yarn strand.

float yarnTwist(vec2 strandUV, float twistFrequency, float fuzzAmount) {
    float twist = sin(strandUV.x * twistFrequency + strandUV.y * 12.0);
    float fine = sin(strandUV.x * twistFrequency * 3.7 + strandUV.y * 41.0) * 0.5;
    return twist * 0.5 + fine * fuzzAmount;
}

vec3 applyYarnTwist(vec3 baseColor, vec2 strandUV, float twistFrequency, float fuzzAmount) {
    float t = yarnTwist(strandUV, twistFrequency, fuzzAmount);
    return baseColor * (0.88 + 0.18 * t);
}
