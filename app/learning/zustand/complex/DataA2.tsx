'use client';

import { useComplexStore } from "@/app/store/zustand"

export default function DataA2({data}:{data:number}) {

  const hasInit = useComplexStore(state => state.hasInit);
  const value2 = useComplexStore(state => state.dataA.value2);
  return (
    <>{ hasInit ? value2 : data }</>
  )
}