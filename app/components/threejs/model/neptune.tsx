import React, { useRef } from "react";
import Model, { ParticleModelProps } from "./model";
import { Object3D } from "three";

const PATH = "/threejs/neptune/neptune.glb";

export type NeptuneProps = {
  isRotating? : boolean,
} & ParticleModelProps;

const INIT_PROPS:NeptuneProps = {
  isRotating: true, 
  scale: 1, 
  rotation: [90, 0, 0],
  position: [0, 0, 0],
}

const NeptuneModel = React.forwardRef<Object3D, NeptuneProps>((props:NeptuneProps = INIT_PROPS, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={props.scale} rotation={props.rotation}/>
  )
})

export default NeptuneModel;