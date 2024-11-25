'use client';
import { useEffect, useRef } from "react";
import { useMousePosition } from "../util/mouse";

export interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticty?: number;
  ease?: number;
  refresh?: boolean;
}
export default function Particles({
  className = "",
  quantity = 30,
  staticty = 50,
  ease = 50,
  refresh = false
}:ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{x:number, y:number}>({ x: 0, y: 0 });
  const canvasSize = useRef<{w : number, h: number}>({w: 0, h: 0});
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  useEffect(() => {
    if(canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');
    }
    initCanvas();
    animate();
    window.addEventListener('resize', initCanvas);

    return () => {
      window.removeEventListener('resize', initCanvas);
    }
  }, []);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const onMouseMove = () => {
    if(canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      const inside = x < w / 2 
                      && x > -w / 2 
                      && y < h / 2 
                      && y > -h / 2;
      if(inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };

  type Circle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
  };

  const resizeCanvas = () => {
    if(canvasContainerRef.current && canvasRef.current && contextRef.current) {
      circles.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      contextRef.current.scale(dpr, dpr);
    }
  }
  const circleParams = ():Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 0.1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;

    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    }
  }

  const drawCircle = (circle: Circle, update = false) => {
    if(contextRef.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      contextRef.current.translate(translateX, translateY);
      contextRef.current.beginPath();
      contextRef.current.arc(x, y, size, 0, 2 * Math.PI);
      contextRef.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      contextRef.current.fill();
      contextRef.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if(!update) {
        circles.current.push(circle);
      }
    }
  }

  const clearContext = () => {
    if(contextRef.current) {
      contextRef.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    }
  }

  const drawParticles = () => {
    clearContext();
    const particleCount = quantity;
    for(let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  }

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + 2;
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    clearContext();
    circles.current.forEach((circle:Circle, i: number) => {
      const edge = [
        circle.x + circle.translateX - circle.size, // 왼쪽 공간
        canvasSize.current.w - circle.x - circle.translateX - circle.size, //오른쪽 공간
        circle.y + circle.translateY - circle.size, // 윗쪽 공간
        canvasSize.current.h - circle.y - circle.translateY - circle.size, //아랫 공간
      ];
      const closestEdge = edge.reduce((a,b) => Math.min(a,b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
      );
      if(remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if(circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX += (mouse.current.x / (staticty / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.current.y / (staticty / circle.magnetism) - circle.translateY) / ease;
      // circle gets out of the canvas

      if(
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        //remove the circle from array
        circles.current.splice(i, 1);

        //create new circle
        const newCircle = circleParams();
        drawCircle(newCircle);
        // update circle position
      } else {
        drawCircle({
          ...circle,
          x: circle.x,
          y: circle.y,
          translateX: circle.translateX,
          translateY: circle.translateY
        },
        true)
      }
    });
    window.requestAnimationFrame(animate);
  }
  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}