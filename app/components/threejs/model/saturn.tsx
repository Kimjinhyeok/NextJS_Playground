import React, { useRef } from "react";
import Model, { ParticleModelProps } from "./model";
import { Object3D } from "three";

const PATH = "/threejs/saturn/saturn.glb";

export type SaturnProps = {
  isRotating? : boolean,
} & ParticleModelProps;

const INIT_PROPS:SaturnProps = {
  isRotating: true, 
  scale: 1, 
  rotation: [90, 0, 0],
  position: [0, 0, 0],
}

const SaturnModel = React.forwardRef<Object3D, SaturnProps>((props:SaturnProps = INIT_PROPS, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={props.scale} rotation={props.rotation}/>
  )
})

export default SaturnModel;