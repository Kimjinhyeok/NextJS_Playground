'use client';

import { useCountStore } from "@/app/store/zustand";

export default function CountController() {

  const {
    increase,
    decrease
  } = useCountStore();

  return (
    <div className="space-x-4">
      <button onClick={increase} className="w-32 h-16 rounded-md border border-white">
        <span className="text-xl">+1</span>
      </button>
      <button onClick={decrease} className="w-32 h-16 rounded-md border border-white">
        <span className="text-xl">-1</span>
      </button>
    </div>
  )
}