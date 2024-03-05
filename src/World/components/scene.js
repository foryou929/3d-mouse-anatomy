import { Color, Scene } from 'https://cdn.skypack.dev/three@v0.132.2';

function createScene() {
  const scene = new Scene();

  scene.background = new Color(0x888888);

  return scene;
}

export { createScene };
