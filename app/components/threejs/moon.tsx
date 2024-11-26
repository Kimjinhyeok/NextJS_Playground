import React from "react"
import { Object3D } from "three"

export type MoonProps = {
  position?: [number, number, number],
  args?: [number, number, number],
}
const Moon = React.forwardRef<Object3D, MoonProps>((props = {
  position: [3, 0, 0],
  args: [0.3, 32, 32],
}, ref) => {

  return (
    <mesh position={props.position}>
      <sphereGeometry args={props.args} />
      <meshStandardMaterial color={'gray'} />
    </mesh>
  )
});
export default Moon;