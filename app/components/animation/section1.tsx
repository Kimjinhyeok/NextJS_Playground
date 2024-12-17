'use client';

import { getRandomBGColor } from "@/app/util";
import React, { useMemo } from "react"

const getRandomAniamtion = () => {
  const number = Number.parseInt(`${Math.random() * 5 + 1}`);
  switch(number) {
    case 1:
      return 'animate-spin';
    case 2:
      return 'animate-ping';
    case 3:
      return 'animate-bounce';
    case 4:
      return 'animate-pulse';
    case 5:
      return 'animate-fade-in-fast';
  }
}
type AnimateSectionProps = {
  active: boolean
} & React.PropsWithChildren;
const AnimateSection = React.forwardRef<HTMLDivElement, AnimateSectionProps>(({active = false, children, ...props}, ref) => {
  
  const bgColor = useMemo(() => getRandomBGColor(), []);
  const animation = useMemo(() => getRandomAniamtion(), []);
  
  return (
    <div ref={ref} className={`w-full h-screen flex justify-center items-center ${bgColor}`} {...props} >
      <div className={`w-96 h-96 flex justify-center items-center text-black text-4xl ${active ? animation : ""} duration-1000`}>
        {children}
      </div>
    </div>
  )
});

export default AnimateSection;