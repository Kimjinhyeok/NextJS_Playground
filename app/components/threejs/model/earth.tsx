import React, { useRef } from "react";
import Model from "./model";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";

const PATH = "/threejs/earth_globe_gltf/scene.gltf";

export type EarthProps = {
  isRotating? : boolean,
}
const EarthModel = React.forwardRef<Object3D>((props:EarthProps = { isRotating: true }, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={1} rotation={[90, 0, 0]}/>
  )
})

export default EarthModel;