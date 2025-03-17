'use client';

import { useEffect, useRef } from "react"

export default function CanvasAnimation() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animeRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if(!canvas) return;

    canvas.width = document.body.getBoundingClientRect().width;
    canvas.height = document.body.getBoundingClientRect().height;
    const ctx = canvas.getContext('2d');
    if(!ctx) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    drawingAnimationPath(ctx, 100, 100, 500, 500, width, height, 1000);

    return () => {
      if (animeRef.current) cancelAnimationFrame(animeRef.current);
    }
  }, [])
  
  const drawingAnimationPath = (
    ctx:CanvasRenderingContext2D, 
    startX:number, 
    startY:number,
    endX:number,
    endY:number, 
    width:number, 
    height:number, 
    duration:number
  ) => {
    const startTime = performance.now();

    const animate = (currentTime:number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0~1까지 진행률 계산

      const currentX = startX + (endX - startX) * progress;
      const currentY = startY + (endY - startY) * progress;

      ctx.clearRect(0, 0, width, height); // canvas초기화

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(currentX, currentY);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
      if( progress < 1) {
        animeRef.current = requestAnimationFrame(animate)
      }
    };

    animeRef.current = requestAnimationFrame(animate);
  }
  
  return (
    <div className="w-screen h-screen">
      <canvas ref={canvasRef} className="bg-white" />
    </div>
  )
}