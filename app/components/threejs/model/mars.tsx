import React, { useRef } from "react";
import Model, { ParticleModelProps } from "./model";
import { Object3D } from "three";

const PATH = "/threejs/mars/mars.glb";

export type MarsProps = {
  isRotating? : boolean,
} & ParticleModelProps;

const INIT_PROPS:MarsProps = {
  isRotating: true, 
  scale: 1, 
  rotation: [90, 0, 0],
  position: [0, 0, 0],
}

const MarsModel = React.forwardRef<Object3D, MarsProps>((props:MarsProps = INIT_PROPS, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={props.scale} rotation={props.rotation}/>
  )
})

export default MarsModel;