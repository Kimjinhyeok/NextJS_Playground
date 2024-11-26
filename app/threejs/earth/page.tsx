'use client';

import EarthModel from "@/app/components/threejs/model/earth";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export default function EarthPage({}) {

  const [rotation, setRotation] = useState(true);
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <div className="fixed bottom-5 right-5 flex space-x-4 z-10">
        <button role="button" className={`py-2 px-4 rounded-md ${rotation ? 'bg-blue-400' : 'bg-gray-400'}`} onClick={() => setRotation(!rotation)}>
          {
            rotation ? "회전" : "멈춤"
          }
        </button>
      </div>
      <Canvas>
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI/1.6} />
        <ambientLight intensity={Math.PI / 2} />

        <EarthModel isRotating={rotation} />
        <PerspectiveCamera makeDefault position={[80, 20, 80]} />
      </Canvas>
    </div>
  )
}