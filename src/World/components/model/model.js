import { FBXLoader } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/loaders/GLTFLoader.js';

async function loadModel(url) {  
  const loader = new GLTFLoader();
  const data = await Promise.all([
    loader.loadAsync(url)
  ]);
  let modelData = data[0]
  return {
    modelData
  };
}

export { loadModel };