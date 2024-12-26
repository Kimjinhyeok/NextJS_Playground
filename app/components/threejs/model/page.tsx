'use client'
import { CameraControls, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SunModel from '@/app/components/threejs/model/sun';
import EarthModel from "@/app/components/threejs/model/earth";
import MercuryModel from "@/app/components/threejs/model/mercury";
import VenusModel from "@/app/components/threejs/model/venus";
import MarsModel from "@/app/components/threejs/model/mars";
import JupiterModel from "@/app/components/threejs/model/jupiter";
import SaturnModel from "@/app/components/threejs/model/saturn";
import NeptuneModel from "./neptune";

export default function SolarRealSizeViewerPage({}) {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div id="canvas-container" className="w-2/3 h-2/3 bg-gray-200">
        <Canvas>
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <OrbitControls enableRotate={true} enablePan={true} />
          <ambientLight intensity={Math.PI / 2}/>

          <SunModel scale={10} position={[0,0,0]}/>
          <group position={[150, 0, 0]}>
            <MercuryModel position={[0,0,0]} scale={0.00355}/>
          </group>
          <group position={[180, 0, 0]}>
            <VenusModel position={[0,0,0]} scale={0.879}/>
          </group>
          <group position={[215,0,0]}>
            <EarthModel position={[0,0,0]} scale={0.08426}/>
          </group>
          <group position={[255,0,0]}>
            <MarsModel position={[0,0,0]} scale={0.496}/>
          </group>
          <group position={[420,0,0]}>
            <JupiterModel position={[0,0,0]} scale={4.68}/>
          </group>
          <group position={[490,0,0]}>
            <SaturnModel position={[0,0,0]} scale={0.0227}/>
          </group>
          <group position={[500,0,0]}>
            <NeptuneModel position={[0,0,0]} scale={1}/>
          </group>

          <PerspectiveCamera makeDefault position={[80, 20, 80]} />
        </Canvas>
      </div>
    </div>
  )
}