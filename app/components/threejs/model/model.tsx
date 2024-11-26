import { useGLTF } from "@react-three/drei"
import { ThreeElements } from "@react-three/fiber";
import React from "react";
import { Object3D } from "three";

export type ThreejsRotation = [number, number, number];
export type ModelProps = {
  path: string, 
  scale?: number,
  rotation?: ThreejsRotation
}; 


const Model = React.forwardRef<Object3D, ModelProps>((props, ref) => {

  const { scene } = useGLTF(props.path);
  
  return (
    <primitive ref={ref} object={scene} scale={props.scale} rotation={props.rotation}/>
  )
})

export default Model;