import React, { useRef } from "react";
import Model, { ParticleModelProps } from "./model";
import { Object3D } from "three";

const PATH = "/threejs/venus/venus_v1.1.glb";

export type VenusProps = {
  isRotating? : boolean,
} & ParticleModelProps;

const INIT_PROPS:VenusProps = {
  isRotating: true, 
  scale: 1, 
  rotation: [90, 0, 0],
  position: [0, 0, 0],
}

const VenusModel = React.forwardRef<Object3D, VenusProps>((props:VenusProps = INIT_PROPS, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={props.scale} rotation={props.rotation}/>
  )
})

export default VenusModel;