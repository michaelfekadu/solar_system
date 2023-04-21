import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
  fov: number;
  camera: any;
  scene: any;
  stats: any;
  controls: any;
  renderer: any;

  constructor(
    fov = 50,
    camera?: any,
    scene?: any,
    stats?: any,
    controls?: any,
    renderer?: any
  ) {
    this.fov = fov;
    this.scene = scene;
    this.stats = stats;
    this.camera = camera;
    this.controls = controls;
    this.renderer = renderer;
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      100000
    );
    this.camera.position.z = 1000;
    this.camera.position.y = 1000;
    this.camera.position.x = 1000;

    this.scene = new THREE.Scene();

    const cubeGeometry = new THREE.BoxGeometry(8000, 8000, 8000);

    const spaceTexture = new THREE.TextureLoader().load("space.avif");

    const cubeMaterial = new THREE.MeshBasicMaterial({
      map: spaceTexture,
      side: THREE.BackSide,
    });

    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

    this.scene.add(cubeMesh);

    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("myThreeJsCanvas") as HTMLCanvasElement,
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    window.addEventListener("resize", () => this.onWindowResize(), false);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
