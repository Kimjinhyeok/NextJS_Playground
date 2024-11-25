import { useGLTF } from "@react-three/drei";
import Model from "./model";

const PATH = '/threejs/rubber_duck/rubber_duck_toy_4k.gltf';

useGLTF.preload(PATH);
export default function RubberDock({}) {

  return (
    <Model path={PATH} scale={100}/>
  )
}