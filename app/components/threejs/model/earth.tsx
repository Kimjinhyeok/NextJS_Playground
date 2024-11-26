import React, { useRef } from "react";
import Model from "./model";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";

const PATH = "/threejs/earth_globe_gltf/scene.gltf";

export type EarthProps = {
  isRotating? : boolean,
}
const EarthModel = (props:EarthProps = { isRotating: true }) => {
  
  const modelRef = useRef<Object3D>(null);
  useFrame(() => {
    if(modelRef.current) {
      // const obj = ref as unknown as Object3D; // Object3D로 캐스팅
      if(props.isRotating) modelRef.current.rotation.y += 0.01;
    }
  });

  
  return (
    <Model ref={modelRef} path={PATH} scale={1} rotation={[90, 0, 0]}/>
  )
}

export default EarthModel;