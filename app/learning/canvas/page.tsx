'use client';

import { PropsWithChildren, useEffect, useRef, useState } from "react"

type CanvasState = {
  width: number
  height: number
}
type DrawingData = Array<MousePointData>|null;

type ContextState = {
  context: CanvasRenderingContext2D|null,
  data: DrawingData,
}
type MousePointData = {
  x: number,
  y: number,
}

export default function CanvasPage() {

  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement|null>(null);
  const ctxRef = useRef<ContextState>({ context: null,  data: Array<MousePointData>()});

  useEffect(() => {
    if(!ref.current) return;

    if(!canvasRef.current) {
      canvasRef.current = initCanvas();
      drawCanvas();
      
      window.addEventListener('resize', resizeCanvas)
  
  
      const context = canvasRef.current.getContext('2d');
      if(context) {
        ctxRef.current.context = context;
        drawPath(context, ctxRef.current.data);
        
      }
    }

    return () => {
      if(!canvasRef.current) return;
      window.removeEventListener('resize', resizeCanvas);
      if(canvasRef.current) {
        canvasRef.current.removeEventListener('click', onMouseDown);
      }
    }
  }, [])
  
  const initCanvas = () => {
    const canvas = document.createElement('canvas');

    canvas.addEventListener('click', onMouseDown);

    ref.current?.appendChild(canvas);
    return canvas;
  }

  const onMouseDown = (event:MouseEvent) => {
    console.log(event.clientX, event.clientY);
    ctxRef.current.data?.push({ x:event.clientX, y:event.clientY })

    drawCtx();
  }
  const resizeCanvas = () => {
    drawCanvas();
    drawCtx();
  }
  const drawCanvas = () => {
    
    if(!canvasRef.current) return;
    const width = document.body.getBoundingClientRect().width;
    const height = document.body.getBoundingClientRect().height;


    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.backgroundColor= '#ffffff'
  }

  const drawPath = (context:CanvasRenderingContext2D, data:DrawingData) => {
    
    if(!context || !data || ((data instanceof Array) && data.length <= 0)) return null;
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.beginPath();

    if(data instanceof Array) {
      const cpData = Array.from(data);
      context.moveTo(cpData[0].x, cpData[0].y);
      cpData.shift();

      data.forEach(point => {
        context.lineTo(point.x, point.y);
      })
    }
    context.stroke();
  }

  const drawCtx = () => {
    if(!ctxRef.current.context) return;
    drawPath(ctxRef.current.context, ctxRef.current.data);
  }

  return (
    <div ref={ref} className="w-full h-full" />
  )
}