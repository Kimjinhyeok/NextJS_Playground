"use client"; // client 동작 선언

import { CameraControls, Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "../components/threejs/box";

export default function ThreeJSPage({}) {

  /**
   * Three.js만을 사용할 경우, ThreeJS를 global로 불러와야함
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  document.querySelector('#canvas-container').appendChild(renderer.domElement)

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()
  */
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div id="canvas-container" className="w-2/3 h-2/3 bg-gray-200">
        <Canvas>
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <ambientLight intensity={Math.PI / 2}/>
          <group scale={20} position={[0, -10, 0]}>
            <Box position={[1.2, 0, 0]} />
          </group>
          {/* <Environment preset="city" background blur={1} /> */}
          <PerspectiveCamera makeDefault position={[80, 20, 80]} />
        </Canvas>
      </div>
    </div>
  )
}