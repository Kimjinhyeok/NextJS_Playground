'use client';
import RubberDock from "@/app/components/threejs/model/rubber_duck";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ThreejsGltfModelPage({}) {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div id="canvas-container" className="w-2/3 h-2/3 bg-gray-200">
        <Canvas>
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <ambientLight intensity={Math.PI / 2}/>

          <RubberDock />

          <PerspectiveCamera makeDefault position={[80, 20, 80]} />
        </Canvas>
      </div>
    </div>
  )
}