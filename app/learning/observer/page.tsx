'use client';

import React, { useCallback, useEffect, useRef, useState } from "react"

type DivColors = 0|1|2|3|4|5|6|7|8|9|10;
const colors = {
  0 : 'red',
  1 : 'blue',
  2 : 'green',
  3 : 'yellow',
  4 : 'orange',
  5 : 'emerald',
  6 : 'cyan',
  7 : 'pink',
  8 : 'rose',
  9 : 'violet',
  10 : 'indigo'
}

const createDivElement = (color:DivColors, key:number) => {

  const getBgColor = () => {
    switch(color) {
      case 0:
        return 'bg-red-100'
      case 1:
        return 'bg-blue-100'
      case 2:
        return 'bg-green-100'
      case 3:
        return 'bg-yellow-100'
      case 4:
        return 'bg-orange-100'
      case 5:
        return 'bg-emerald-100'
      case 6:
        return 'bg-cyan-100'
      case 7:
        return 'bg-pink-100'
      case 8:
        return 'bg-rose-100'
      case 9:
        return 'bg-violet-100'
      case 10:
        return 'bg-indigo-100'
    }
  }
  return (
    <div key={key} className={`w-[1080px] h-screen ${getBgColor()} mx-auto flex justify-center items-center`} >
      <h1 className="text-8xl text-black">{key}</h1>
    </div>
  )
}
export default function ObserverPage({}) {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  const [divList, setDivList] = useState<Array<JSX.Element>>([])
  const fetchCallback = ([entry]:IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if(entry.isIntersecting) {
      setDivList((prev) => [...prev, createDivElement(
        parseInt(`${Math.random() * 11}`) as DivColors, prev.length+1)
      ]);
    }
  }
  
  useEffect(() => {
    const options = {
      root: null, // viewport, Null일 떈 브라우저
      rootMargin: '0px',
      threshold: 0.5, // 대상요소가 얼마나 보일 때 콜백할 것인지에 대한 설정값, 0.5 = 50%
    };
    // entries : IntersectionObserverEvent 객체 배열
    // observer : IntersectionObserver 인스탠스

    const observer = new IntersectionObserver(fetchCallback, options);

    // ref 객체가 마운트 될 때
    if(targetRef.current) {
      observer.observe(targetRef.current);
    }

    setDivList([createDivElement(0, 1)])
    return () => {
      if(targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    }
  }, [])
  
  return (
    <main className="w-screen h-screen overflow-auto" ref={mainRef}>
      {
        divList.map(item => item)
      }
      <div className="w-screen" ref={targetRef}></div>
    </main>
  )
}