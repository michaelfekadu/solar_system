import * as THREE from "three";
import { useEffect } from "react";
import SceneInit from "@/lib/SceneInit";
import Planet from "@/lib/Planet";
import Rotation from "@/lib/Rotation";
import { TextureLoader } from "three";

const x = 4;
export default function Home() {
  useEffect(() => {
    // TODO: Understand this code later.
    let test = new SceneInit();
    test.initScene();
    test.animate();

    const sunGeometry = new THREE.SphereGeometry(50);
    const sunTexture = new THREE.TextureLoader().load("sun.jpeg");
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    const solarSystem = new THREE.Group();
    solarSystem.add(sunMesh);
    test.scene.add(solarSystem);

    const mercury = new Planet(10, x * 48, "mercury.png");
    const mercuryMesh = mercury.getMesh();
    let mercurySystem = new THREE.Group();
    mercurySystem.add(mercuryMesh);

    const venus = new Planet(13, x * 70, "venus.jpeg");
    const venusMesh = venus.getMesh();
    let venusSystem = new THREE.Group();
    venusSystem.add(venusMesh);

    const earth = new Planet(14, x * 96, "earth.jpeg");
    const earthMesh = earth.getMesh();
    let earthSystem = new THREE.Group();
    earthSystem.add(earthMesh);

    const mars = new Planet(12, x * 120, "mars.jpeg");
    const marsMesh = mars.getMesh();
    let marsSystem = new THREE.Group();
    marsSystem.add(marsMesh);

    const jupiter = new Planet(30, x * 150, "jupiter.jpeg");
    const jupiterMesh = jupiter.getMesh();
    let jupiterSystem = new THREE.Group();
    jupiterSystem.add(jupiterMesh);

    // const saturnRingGeo = new THREE.RingGeometry(10, 20, 32);
    // const saturnRingMat = new THREE.MeshStandardMaterial({
    //   map: TextureLoader().load("uranusring.jpeg"),
    // });

    // const saturnRingGeo = new THREE.RingGeometry(10, 20, 32);
    //   const texture = new THREE.TextureLoader().load("uranusring.jpeg");
    //   const material = new THREE.MeshBasicMaterial({ map: texture });
    //   const mesh = new THREE.Mesh(saturnRingGeo, material);
    //   const ringmesh =

    const saturn = new Planet(25, x * 190, "saturn.jpeg");
    const saturnMesh = saturn.getMesh();
    let saturnSystem = new THREE.Group();
    saturnSystem.add(saturnMesh);

    const uranus = new Planet(20, x * 220, "uranus.jpeg");
    const uranusMesh = uranus.getMesh();
    let uranusSystem = new THREE.Group();
    uranusSystem.add(uranusMesh);

    const neptune = new Planet(18, x * 240, "neptune.jpeg");
    const neptuneMesh = neptune.getMesh();
    let neptuneSystem = new THREE.Group();
    neptuneSystem.add(neptuneMesh);

    solarSystem.add(
      mercurySystem,
      venusSystem,
      earthSystem,
      marsSystem,
      jupiterSystem,
      saturnSystem,
      uranusSystem,
      neptuneSystem
    );

    const mercuryRotation = new Rotation(mercuryMesh);
    const mercuryRotationMesh = mercuryRotation.getMesh();
    mercurySystem.add(mercuryRotationMesh);
    const venusRotation = new Rotation(venusMesh);
    const venusRotationMesh = venusRotation.getMesh();
    venusSystem.add(venusRotationMesh);
    const earthRotation = new Rotation(earthMesh);
    const earthRotationMesh = earthRotation.getMesh();
    earthSystem.add(earthRotationMesh);
    const marsRotation = new Rotation(marsMesh);
    const marsRotationMesh = marsRotation.getMesh();
    marsSystem.add(marsRotationMesh);
    const jupiterRotation = new Rotation(jupiterMesh);
    const jupiterRotationMesh = jupiterRotation.getMesh();
    jupiterSystem.add(jupiterRotationMesh);
    const saturnRotation = new Rotation(saturnMesh);
    const saturnRotationMesh = saturnRotation.getMesh();
    saturnSystem.add(saturnRotationMesh);
    const uranusRotation = new Rotation(uranusMesh);
    const uranusRotationMesh = uranusRotation.getMesh();
    uranusSystem.add(uranusRotationMesh);
    const neptuneRotation = new Rotation(neptuneMesh);
    const neptuneRotationMesh = neptuneRotation.getMesh();
    neptuneSystem.add(neptuneRotationMesh);

    // NOTE: Animate solar system at 60fps.
    const EARTH_YEAR = 2 * Math.PI * (2 / 60) * (1 / 60);
    const animate = () => {
      sunMesh.rotation.y += 0.001;
      mercurySystem.rotation.y += EARTH_YEAR * 4;
      venusSystem.rotation.y += EARTH_YEAR * 2;
      earthSystem.rotation.y += EARTH_YEAR;
      marsSystem.rotation.y += EARTH_YEAR * 0.8;
      jupiterSystem.rotation.y += EARTH_YEAR * 0.6;
      saturnSystem.rotation.y += EARTH_YEAR * 0.4;
      uranusSystem.rotation.y += EARTH_YEAR * 0.2;
      neptuneSystem.rotation.y += EARTH_YEAR * 0.1;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}
