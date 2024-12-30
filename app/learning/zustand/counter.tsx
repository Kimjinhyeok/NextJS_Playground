'use client';

import { useCountStore } from "@/app/store/zustand";
import React, { useEffect, useState } from "react";
import CountController from "./controller";

export interface CounterProps {
  initialCount: number;
}
export default function Counter({initialCount}:CounterProps) {

  const {hasInit, count} = useCountStore();
  
  useEffect(() => {
    useCountStore.setState(({hasInit: true, count: initialCount}))
  }, [])
  
  return (
    <>
      <div className="w-full flex justify-center">
        <h1 className="text-5xl">{ hasInit ? count : initialCount }</h1>
        {/* <h1 className="text-5xl">{ count }</h1> */}
      </div>
      <CountController />
    </>
  )
}