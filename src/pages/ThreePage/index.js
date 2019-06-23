import React, { useEffect } from "react";
import "./index.css";
import updateOnScroll from "uos";
import * as THREE from "three";

const App = () => {
  var camera, scene, renderer, loader;
  var geometry, material, mesh;
  const images = [];
  useEffect(() => {
    const header = document.querySelector(".header");
    updateOnScroll(0, 0.05, p => (header.style.opacity = 1 - p));
    updateOnScroll(0, 1, p => animate(p));

    init();
    animate();
  }, []);

  function init() {
    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      100
    );
    camera.position.z = 8;

    scene = new THREE.Scene();

    // geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    // material = new THREE.MeshNormalMaterial();

    // mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const name = `BryantDental_glasses_360_shortLoupes_000ID.png`;
    const frames = 14;

    loader = new THREE.TextureLoader();

    for (let i = 1; i <= frames; i += 1) {
      // const imageFrame = i < 10 ? `0${i}` : i;
      // const imageUrl = require(`../../../../images/${name.replace("ID", imageFrame)}`);
      // images.push(imageUrl);
    }

    material = new THREE.MeshLambertMaterial({
      map: loader.load(images[0])
    });
    geometry = new THREE.PlaneGeometry(10, 10 * 0.75);
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    var light = new THREE.PointLight(0xffffff, 1, 0);

    // Specify the light's position
    light.position.set(1, 1, 100);

    // Add the light to the scene
    scene.add(light);
    renderer.render(scene, camera);

    document.body.appendChild(renderer.domElement);
  }

  function animate(p = 0) {
    // material = new THREE.MeshLambertMaterial({
    //   map: images[parseInt(p) % 14]
    // });
    // geometry = new THREE.PlaneGeometry(10, 10 * 0.75);
    // mesh = new THREE.Mesh(geometry, material);

    // console.log(mesh.material)

    mesh.material.map = loader.load(images[0]);
    mesh.material.needsUpdate = true;
    mesh.needsUpdate = true;
    // scene.add(mesh);
    // requestAnimationFrame(animate);

    // mesh.rotation.x = 1 - p * 10;
    // mesh.rotation.y = 1 - p * 10;

    renderer.render(scene, camera);
  }

  return (
    <main>
      <div className="frame">
        <div className="frame__title-wrap">
          <h1 className="frame__title">WebGL Transitions on Scroll</h1>
        </div>
        <a
          className="frame__github"
          href="https://github.com/vaneenige/scroll-transitions-webgl"
        >
          GitHub
        </a>
        <div className="frame__links">
          <a href="https://tympanus.net/Development/SVGImageHover/">
            Previous Demo
          </a>
          <a href="https://tympanus.net/codrops/?p=38923">Article</a>
        </div>
      </div>
      <div className="content content--canvas">
        <div className="header">
          <h1 className="header__title">Phenomenon</h1>
          <p className="header__text">WebGL based transitions on scroll</p>
        </div>
        <div className="heading">
          A tiny wrapper around three.js built for high-performance WebGL
          experiences.
        </div>
        <div className="heading">
          GPU based for smooth transitions like scale, rotation and movement.
        </div>
        <div className="heading">
          Modify default geometry and material for infinite possibilities.
        </div>
        <div className="heading">That's it, thank you for scrolling! :)</div>
      </div>
    </main>
  );
};

export default App;
