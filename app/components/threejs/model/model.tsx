import { useGLTF } from "@react-three/drei"
import { ThreeElements } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Box3, Box3Helper, Object3D, Color, Vector3 } from "three";

export type Vector3Array = [number, number, number];
export type ModelProps = {
  path: string, 
  scale?: Vector3Array | number,
  rotation?: Vector3Array,
  position?: Vector3Array
}; 
export type ParticleModelProps = Omit<ModelProps, 'path'>

const Model = React.forwardRef<Object3D, ModelProps>((props, ref) => {

  const { scene } = useGLTF(props.path);
  
  useEffect(() => {
    const bbox = new Box3().setFromObject(scene);
    const size = bbox.getSize(new Vector3());
    console.log(`size : ${size.toArray()}`)
    return () => {
      
    }
  }, [scene])
  
  return (
    <primitive position={props.position} ref={ref} object={scene} scale={props.scale} rotation={props.rotation} />
  )
})

export default Model;