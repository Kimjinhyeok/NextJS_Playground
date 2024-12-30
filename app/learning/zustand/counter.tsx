'use client';

import { useCountStore } from "@/app/store/zustand";
import React, { useEffect } from "react";
import CountController from "./controller";

export interface CounterProps {
  initialCount: number;
}
export default function Counter({initialCount}:CounterProps) {

  const count = useCountStore(state => state.count);
  useEffect(() => {
    useCountStore.setState(({ count: initialCount }));
  }, [])
  
  return (
    <>
      <div className="w-full flex justify-center">
        <h1 className="text-5xl">{ count }</h1>
      </div>
      <CountController />
    </>
  )
}