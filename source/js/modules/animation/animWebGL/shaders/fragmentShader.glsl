precision mediump float;

uniform sampler2D uMap;
varying vec2 vUv;

void main() {
  vec4 texel = texture2D( uMap, vUv );
  gl_FragColor = texel;
}
