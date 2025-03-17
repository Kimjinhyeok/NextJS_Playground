'use client';

import { useEffect, useRef } from "react";

type Point = {x: number, y: number};
type PathData = Array<Point>;
type CanvasContext = {
  target: CanvasRenderingContext2D|null,
  data: PathData,
  lastPoint?: Point
}
export default function QeueAnimePage() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasContext>({ target: null, data: Array()});
  const animeIdRef = useRef<number|null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  useEffect(() => {

    if(!canvasRef.current) return;
    const canvas = canvasRef.current;

    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    ctxRef.current.target = canvas.getContext('2d');

    canvas.addEventListener('click', onMouseDown);
    return () => {
      canvas.removeEventListener('click', onMouseDown);
      if(animeIdRef.current) cancelAnimationFrame(animeIdRef.current);
    }
  }, []);

  const onMouseDown = (event:MouseEvent) => {
    if(!canvasRef.current || !ctxRef.current.target) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    const position = {x: event.clientX, y: event.clientY};

    ctxRef.current?.data.push(position);

    if(!isAnimatingRef.current) {
      isAnimatingRef.current = true;
      progressQueue(ctxRef.current.target);
    }
  }

  const progressQueue = (ctx:CanvasRenderingContext2D) => {
    if(ctxRef.current?.data.length == 0) {
      isAnimatingRef.current = false;
      return;
    }

    isAnimatingRef.current = true;

    const nextPoint = ctxRef.current?.data.shift();
    const lastPoint = ctxRef.current?.lastPoint;
    if(nextPoint) {
      drawAnimationPath(ctx, lastPoint ?? null, nextPoint, () => {
        ctxRef.current.lastPoint = nextPoint;
        progressQueue(ctx);
      })
    }
  }

  const drawAnimationPath = (ctx:CanvasRenderingContext2D, from:Point|null, to:Point, callback:()=>void) => {
    if(!from) {
      ctx.beginPath();
      ctx.arc(to.x, to.y, 3, 0, Math.PI * 2);
      ctx.fill();
      callback();
      return;
    }

    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentX = from.x + (to.x - from.x) * progress;
      const currentY = from.y + (to.y - from.y) * progress;

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(currentX, currentY);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();

      if(progress < 1) {
        animeIdRef.current = requestAnimationFrame(animate);
      } else {
        callback();
      };
    };

    animeIdRef.current = requestAnimationFrame(animate);
  }
  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="bg-white" />
    </div>
  )
}