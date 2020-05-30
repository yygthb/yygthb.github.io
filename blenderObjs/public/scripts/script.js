import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/OrbitControls.js";
import { OBJLoader2 } from "https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/OBJLoader2.js";
import { MTLLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/MTLLoader.js";
import { MtlObjBridge } from "https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js";

// import * as THREE from "../three.module.js";
// import { OrbitControls } from "../OrbitControls.js";
// import { OBJLoader2 } from "../three/examples/jsm/loaders/OBJLoader2.js";
// import { MTLLoader } from "../three/examples/jsm/loaders/MTLLoader.js";
// import { MtlObjBridge } from "../three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js";

let loadingManager = null;

function main() {
  
  {
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    );
    if (isMobile) {
      document.getElementsByClassName("content__product")[0].classList.add("mobile");
    } else {
      document.getElementsByClassName("content__product")[0].classList.add("desktop");
    }
  }
  
  let objects = [];
  let emissive = 0x008000;

  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas });

  // CAMERA
  const fov = 45;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // camera.position.set(10, 10, 10);
  camera.position.x = 0;
  camera.position.y = 5;
  camera.position.z = 10;
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();

  // SCENE
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("lightgrey");

  // LIGHT
  {
    {
      const skyColor = 0xb1e1ff; // light blue
      const groundColor = 0xb97a20; // brownish orange
      const intensity = 1;
      const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
      scene.add(light);
    }
    {
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      const light2 = new THREE.DirectionalLight(color, intensity);
      light.position.set(5, 10, 2);
      light2.position.set(-5, -10, -2);
      scene.add(light);
      scene.add(light.target);
      scene.add(light2);
      scene.add(light2.target);
    }
  }

  // OBJ MOUSEMOVE
  function _objectLinkSetBackgroundColor(id) {
    let objectLink = document.getElementById(id);
    objectLink.style.backgroundColor = "lightgreen";
  }
  function _objectLinkRemoveBackgroundColor(id) {
    let objectLink = document.getElementById(id);
    objectLink.style.backgroundColor = "white";
  }
  function _removeBackgroundColor() {
    let listA = document.getElementsByClassName("blenderObj");
    for (let item of listA) {
      item.style.backgroundColor = "white";
    }
    objects.forEach((object) => {
      if (object.material.length === undefined) {
        object.material.emissive.setHex(0x000000);
      } else {
        object.material.forEach((m) => {
          m.emissive.setHex(0x000000);
        });
      }
    });
  }

  function _raycast() {
    const raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2(),
      INTERSECTED;

    const div = document.getElementsByClassName("content__product_composition_ul");
    objects.forEach((object) => {
      div[0].insertAdjacentHTML(
        "afterbegin",
        `
          <a href="#"  id="${object.name}" class="blenderObj">XXXXXXXX</a>
      `
      );
    });

    {
      document.getElementById("yellowcone_Yellowcone_yellowcone").innerHTML = "Yellow Cone";
      document.getElementById("bluesphere_Bluesphere_bluesphere").innerHTML = "Blue Sphere";
      document.getElementById("redcube_Redcube_redcube").innerHTML = "Red Cube";
      document.getElementById("KubikRubika_Cube.001").innerHTML = "Rubik's Cube";
    }

    canvas.addEventListener("touchstart", onDocumentMouseEvent, false);
    canvas.addEventListener("mousemove", onDocumentMouseEvent, false);
    // canvas.addEventListener("mousedown", onDocumentMouseEvent, false);

    function onDocumentMouseEvent(event) {
      event.preventDefault();
      if (event.type == "touchstart") {
        // mouse.x = (event.touches[0].clientX / renderer.domElement.width) * 2 - 1;
        // mouse.y = -(event.touches[0].clientY / renderer.domElement.height) * 2 + 1;
        const pixelRatio = window.devicePixelRatio;
        const mouseX = (event.touches[0].clientX / renderer.domElement.width) * 2 * pixelRatio - 1;
        const mouseY = -(event.touches[0].clientY / renderer.domElement.height) * 2 * pixelRatio + 1;
        mouse.x = mouseX;
        mouse.y = mouseY;
      } else {
        mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
        mouse.y = -(event.clientY / renderer.domElement.height) * 2 + 1;
      }

      raycaster.setFromCamera(mouse, camera);

      let intersects = raycaster.intersectObjects(objects, true);
      if (intersects.length > 0) {
        _removeBackgroundColor();
        if (INTERSECTED) {
          if (INTERSECTED.material.length === undefined) {
            INTERSECTED.material.emissive.setHex(0x000000);
            _objectLinkRemoveBackgroundColor(INTERSECTED.name);
          } else {
            INTERSECTED.material.forEach((m) => {
              m.emissive.setHex(0x000000);
            });
            _objectLinkRemoveBackgroundColor(INTERSECTED.name);
          }
          INTERSECTED = null;
        }

        INTERSECTED = intersects[0].object;
        if (INTERSECTED.material.length === undefined) {
          INTERSECTED.material.emissive.setHex(emissive);
          // console.log("TARGET: ", INTERSECTED.name);
          _objectLinkSetBackgroundColor(INTERSECTED.name);
        } else {
          INTERSECTED.material.forEach((m) => {
            m.emissive.setHex(emissive);
          });
          // console.log("TARGET: ", INTERSECTED.name);
          _objectLinkSetBackgroundColor(INTERSECTED.name);
        }
      } else {
        if (INTERSECTED) {
          if (INTERSECTED.material.length === undefined) {
            INTERSECTED.material.emissive.setHex(0x000000);
            _objectLinkRemoveBackgroundColor(INTERSECTED.name);
          } else {
            INTERSECTED.material.forEach((m) => {
              m.emissive.setHex(0x000000);
            });
            _objectLinkRemoveBackgroundColor(INTERSECTED.name);
          }
          INTERSECTED = null;
        }
      }
    }

    // LINKS MOUSEOVER
    objects.forEach((object) => {
      const li = document.getElementById(object.name);
      li.addEventListener("touchstart", () => {
        _removeBackgroundColor();

        li.style.backgroundColor = "lightgreen";
        if (object.material.length === undefined) {
          object.material.emissive.setHex(emissive);
        } else {
          object.material.forEach((m) => {
            m.emissive.setHex(emissive);
          });
        }
      });
      li.addEventListener("mousemove", () => {
        li.style.backgroundColor = "lightgreen";
        // console.log(`mouseover on ${object.name}`);
        // console.log("object: ", object);
        if (object.material.length === undefined) {
          object.material.emissive.setHex(emissive);
        } else {
          object.material.forEach((m) => {
            m.emissive.setHex(emissive);
          });
        }
      });
      li.addEventListener("mouseout", () => {
        _removeBackgroundColor();
        li.style.backgroundColor = "white";
        if (object.material.length === undefined) {
          object.material.emissive.setHex(0x000000);
        } else {
          object.material.forEach((m) => {
            m.emissive.setHex(0x000000);
          });
        }
      });
    });
  }

  let manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    // console.log("manager onload");
    _raycast();
  };

  // OBJECT LOAD
  {
    const mtlLoader = new MTLLoader(manager);
    mtlLoader.load("./public/models/shapes.mtl", (mtlParseResult) => {
      const objLoader = new OBJLoader2(manager);
      const materials = MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult);
      objLoader.addMaterials(materials);
      objLoader.load("./public/models/shapes.obj", (root) => {
        scene.add(root);

        // console.log("root: ", root);
        root.children.forEach((child) => {
          // console.log(child);
          objects.push(child);
        });
      });
    });
  }

  // console.log("objects: ", objects);

  const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
    navigator.userAgent
  );
  if (isMobile) {
    document.getElementsByClassName("content__product")[0].classList.add("mobile");
  } else {
    document.getElementsByClassName("content__product")[0].classList.add("desktop");
  }
  // -----------------------------------------

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    if (isMobile) {
      const width = (canvas.clientWidth * pixelRatio) | 0;
      const height = (canvas.clientHeight * pixelRatio) | 0;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    } else {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
