'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from 'lucide-react';
import { usePathname } from "next/navigation";

const Links = [
  {path : "Projects",  href: "/projects"},
  {path : "Introduce",     href: "/intro"},
  {path : "Contact", href: "/portfolio"},
]
export const Navigation: React.FC = () => {
  const [isIntersecting, setIsIntersecting] = useState(true);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if(!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => 
        setIsIntersecting(entry.isIntersecting),
    );
  
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    }
  }, [])
  
  const pathname = usePathname();

  return (
    <header ref={ref}>
      <div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
        isIntersecting
        ? "bg-zinc-900/0 border-transparent"
        : "bg-zinc-900/500 border-zinc-800"
      }`}>
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {
              Links.map(item => (
                <Link
                  key={item.path}
                  href={item.href}
                  className={`duration-200 ${pathname == item.href ? 'font-bold' : ''} text-zinc-400 hover:text-zinc-100`}
                >{item.path}</Link>
              ))
            }
          </div>
          <Link
            href="/portfolio"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          ><ArrowLeft className="w-6 h-6" /></Link>
        </div>
      </div>
    </header>
  )
}