import EarthModel from "@/app/components/threejs/model/earth";
import Moon from "@/app/components/threejs/moon";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { BufferGeometry, Color, Group, Object3D, Vector3 } from "three";

export type EarthAndMoonProps = {
  isRunning: boolean,
}

const distanceFromEarth = 60;
const EarthAndMoon = React.forwardRef<Group, EarthAndMoonProps>(({isRunning = true}, ref) => {

  const earthRef = useRef<Object3D>(null);
  const groupRef = useRef<Group>(null)
  useFrame(() => {
    if(!isRunning) return;
    if(earthRef.current) earthRef.current.rotation.y += 0.01;
    if(groupRef.current) groupRef.current.rotation.y -= 0.01;
  })

  const drawCircularOrbit = (radius:number, segments:number) => {
    const points:Vector3[] = [];
    for(let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2; // 각도 계산
      points.push(new Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    const geometry = new BufferGeometry().setFromPoints(points);
    return geometry;
  }
  return (
    <group>
      <EarthModel ref={earthRef}/>

      { /* 달 궤도 그리기 */}
      <line geometry={drawCircularOrbit(distanceFromEarth, 64)}>
        <lineBasicMaterial attach='material' color={Color.NAMES.lightslategrey} linewidth={1} />
      </line>
      <group ref={groupRef}>
        <Moon position={[distanceFromEarth, 0, 0]}/>
      </group>
    </group>
  )
});

export default EarthAndMoon;