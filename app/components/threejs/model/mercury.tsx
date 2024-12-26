import React, { useRef } from "react";
import Model, { ParticleModelProps } from "./model";
import { Object3D } from "three";

const PATH = "/threejs/mercury/mercurio_v1_1.glb";

export type MercuryProps = {
  isRotating? : boolean,
} & ParticleModelProps;

const INIT_PROPS:MercuryProps = {
  isRotating: true, 
  scale: 1, 
  rotation: [90, 0, 0],
  position: [0, 0, 0],
}

const MercuryModel = React.forwardRef<Object3D, MercuryProps>((props:MercuryProps = INIT_PROPS, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={props.scale} rotation={props.rotation}/>
  )
})

export default MercuryModel;