'use client';
import { useEffect, useRef, useState } from "react"
import AnimateSection from "../../../components/animation/section1";

export default function AnimationListPage({}) {

  const targetRef = useRef<(HTMLDivElement | null)[]>([]);

  const [list, setList] = useState([false, false, false, false]);
  useEffect(() => {
    
    if(targetRef.current.filter(ref => ref !== null).length < 4) return;
  
    const Option:IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    }

    const observer = new IntersectionObserver((entries, _observer) => {
      entries.forEach((entry) => {
        const idx = targetRef.current.indexOf(entry.target as HTMLDivElement);

        if(entry.isIntersecting) {
          setList(prev => [
            ...prev.slice(0, idx),
            true,
            ...prev.slice(idx+1, list.length)
          ]);
        }
      })
    }, Option);

    targetRef.current.forEach((target) => {
      target && observer.observe(target)
    });

    return () => {
      observer.disconnect();
    }
  }, [])
  
  return (
    <main className="w-full h-screen overflow-y-auto">
      <AnimateSection key={1} ref={e => {targetRef.current[0] = e}} active={list[0]}>
        <h1>1</h1>
      </AnimateSection>
      <AnimateSection key={2} ref={e => {targetRef.current[1] = e}} active={list[1]}>
        <h1>2</h1>
      </AnimateSection>
      <AnimateSection key={3} ref={e => {targetRef.current[2] = e}} active={list[2]}>
        <h1>3</h1>
      </AnimateSection>
      <AnimateSection key={4} ref={e => {targetRef.current[3] = e}} active={list[3]}>
        <h1>4</h1>
      </AnimateSection>
    </main>
  )
}