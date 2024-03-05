import { DirectionalLight, HemisphereLight, AmbientLight } from 'https://cdn.skypack.dev/three@v0.132.2';

function createLights() {
  const ambientLight = new AmbientLight(0x404040);

  const mainLight1 = new DirectionalLight('white', 2.8);
  const mainLight2 = new DirectionalLight('white', 2.8);
  const mainLight3 = new DirectionalLight('white', 2.8);
  const mainLight4 = new DirectionalLight('white', 2.8);
  const mainLight5 = new DirectionalLight('white', 2.8);
  const mainLight6 = new DirectionalLight('white', 2.8);
  mainLight1.position.set(0, 0, 1000);
  mainLight2.position.set(0, 0, -1000);
  mainLight3.position.set(1000, 0, 0);
  mainLight4.position.set(-1000, 0, 0);
  mainLight5.position.set(0, 1000, 0);
  mainLight6.position.set(0, -1000, 0);

  return { ambientLight, mainLight1, mainLight2, mainLight3, mainLight4, mainLight5, mainLight6 };
}

export { createLights };
