'use client';

import '@/app/raindrop.css';
import { MouseEvent, MouseEventHandler, ReactElement, useEffect, useMemo, useRef } from 'react';
export default function RainDropPage() {

  const ref = useRef<HTMLDivElement>(null)
  const makeStemSplat = (randoHundo:number, randoFiver:number) => (
    <>
      <div className="stem w-[1px] h-[60%] ml-[7px] bg-gradient-to-t from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.25)]" style={{
        animationDelay: `0.${randoHundo}s`,
        animationDuration: `0.5${randoHundo}s`,
        }}></div>
      <div className="splat w-[15px] h-[10px] border-t-[2px] border-dotted border-[rgba(255,255,255,0.25)] rounded-[50%] opacity-100 scale-0" style={{
        animationDelay: `0.${randoHundo}s`,
        animationDuration: `0.5${randoHundo}s`,
        }}></div>
    </>
  )
  const makeDrops = (increment:number, randoHundo:number, randoFiver:number, isBack:boolean): React.ReactElement => {
    return (
      isBack
      ?
      <div key={`drop${increment}`} className="drop" style={{
          left: `${increment}%`,
          bottom: randoFiver + randoFiver - 1 + 100, 
          animationDelay: `0.${randoHundo}s`,
          animationDuration: `0.5${randoHundo}s`,
        }}
      >
        { makeStemSplat(randoHundo, randoFiver) }  
      </div>
      :
      <div key={`backdrop${increment}`} className="drop" style={{
          right: `${increment}%`,
          bottom: randoFiver + randoFiver - 1 + 100, 
          animationDelay: `0.${randoHundo}s`,
          animationDuration: `0.5${randoHundo}s`,
        }}
      >
        { makeStemSplat(randoHundo, randoFiver) }  
      </div>
    )
  }
  const makeItRain = () => {
    let increment = 0;
    const drops = [];
    const backDrops = [];

    while(increment < 100) {
      // random number between 98 and 1
      const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      // random number between 5 and 2
      const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));

      // increment
      increment += randoFiver;

      //add new raindrop with various randomizations to certain css properties
      drops.push(makeDrops(increment, randoHundo, randoFiver, false));
      backDrops.push(makeDrops(increment, randoHundo, randoFiver, true));
    }
    return (
      <>
        <div className='rain front-row'>
          {drops}
        </div>
        <div className='rain back-row'>
          {backDrops}
        </div>
      </>
    )
  }
  const toggleOptions = (className:string) => (event:MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if(!ref.current) return;

    let cpClassName = `${ref.current.className}`;
    if(cpClassName.includes(className)) {
      cpClassName = cpClassName.replace(className, '');
    } else {
      cpClassName = cpClassName.concat(` ${className}`);
    }
    ref.current.className = cpClassName;
    if(event.currentTarget.className.includes('active')) {
      event.currentTarget.className = event.currentTarget.className.replace('active', '');
    } else {
      event.currentTarget.className += ' active';
    }
  }
  const rains = useMemo(() => makeItRain, [])
  return (
    <main className="relative bg-black">
      <div ref={ref} className="splat-toggle">
        { rains() }
        <div className="toggles">
          <div onClick={toggleOptions('splat-toggle')} className="splat-toggle toggle active">SPLAT</div>
          <div onClick={toggleOptions('back-row-toggle')} className="back-row-toggle toggle">BACK<br/>ROW</div>
          <div onClick={toggleOptions('single-toggle')} className="single-toggle toggle">SINGLE</div>
        </div>
      </div>
    </main>
  )
}