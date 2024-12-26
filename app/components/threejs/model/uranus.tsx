import React, { useRef } from "react";
import Model, { ParticleModelProps } from "./model";
import { Object3D } from "three";

const PATH = "/threejs/uranus/uranus.glb";

export type UranusProps = {
  isRotating? : boolean,
} & ParticleModelProps;

const INIT_PROPS:UranusProps = {
  isRotating: true, 
  scale: 1, 
  rotation: [90, 0, 0],
  position: [0, 0, 0],
}

const UranusModel = React.forwardRef<Object3D, UranusProps>((props:UranusProps = INIT_PROPS, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={props.scale} rotation={props.rotation}/>
  )
})

export default UranusModel;