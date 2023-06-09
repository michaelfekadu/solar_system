import * as THREE from "three";

export default class Planet {
  radius: any;
  positionX: any;
  textureFile: any;
  mesh: any;

  constructor(radius?: any, positionX?: any, textureFile?: any, mesh?: any) {
    this.radius = radius;
    this.positionX = positionX;
    this.textureFile = textureFile;
    this.mesh = mesh;
  }

  getMesh() {
    if (this.mesh === undefined || this.mesh === null) {
      const geometry = new THREE.SphereGeometry(this.radius);
      const texture = new THREE.TextureLoader().load(this.textureFile);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.position.x += this.positionX;
    }
    return this.mesh;
  }
}
