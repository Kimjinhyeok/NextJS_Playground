'use client';

import EarthModel from "@/app/components/threejs/model/earth";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function EarthPage({}) {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Canvas>
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI/1.6} />
        <ambientLight intensity={Math.PI / 2} />

        <EarthModel />
        <PerspectiveCamera makeDefault position={[80, 20, 80]} />
      </Canvas>
    </div>
  )
}