import React, { useRef } from "react";
import Model, { ParticleModelProps } from "./model";
import { Object3D } from "three";

const PATH = "/threejs/sun/scene.gltf";

export type SunProps = {
  isRotating? : boolean,
} & ParticleModelProps;

const INIT_PROPS:SunProps = {
  isRotating: true, 
  scale: 1, 
  rotation: [90, 0, 0],
  position: [0, 0, 0],
}

const SunModel = React.forwardRef<Object3D, SunProps>((props:SunProps = INIT_PROPS, ref) => {
    
  return (
    <Model ref={ref} path={PATH} scale={props.scale} rotation={props.rotation}/>
  )
})

export default SunModel;