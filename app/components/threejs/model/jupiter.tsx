import React, { useRef } from "react";
import Model, { ParticleModelProps } from "./model";
import { Object3D } from "three";

const PATH = "/threejs/jupiter/jupiter.glb";

export type JupiterProps = {
  isRotating? : boolean,
} & ParticleModelProps;

const INIT_PROPS:JupiterProps = {
  isRotating: true, 
  scale: 1, 
  rotation: [90, 0, 0],
  position: [0, 0, 0],
}

const JupiterModel = React.forwardRef<Object3D, JupiterProps>((props:JupiterProps = INIT_PROPS, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={props.scale} rotation={props.rotation}/>
  )
})

export default JupiterModel;