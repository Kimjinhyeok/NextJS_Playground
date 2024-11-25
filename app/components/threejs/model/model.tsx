import { useGLTF } from "@react-three/drei"

export type ModelProps = {
  path: string, 
  scale?: number,
}; 
export default function Model(props:ModelProps) {

  const { scene } = useGLTF(props.path);
  
  return (
    <primitive object={scene} scale={props.scale}/>
  )
}