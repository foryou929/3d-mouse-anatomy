import { WebGLRenderer } from 'https://cdn.skypack.dev/three@v0.132.2';
import { LinearEncoding } from 'https://cdn.skypack.dev/three@v0.132.2';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding =  LinearEncoding;
  return renderer;
}

export { createRenderer };
