'use client';

import { useComplexStore } from "@/app/store/zustand"

export default function DataA1({data}:{data: number}) {

  const hasInit = useComplexStore(state => state.hasInit)
  const value1 = useComplexStore(state => state.dataA.value1)
  return (
    <>{ hasInit ? value1 : data }</>
  )
}