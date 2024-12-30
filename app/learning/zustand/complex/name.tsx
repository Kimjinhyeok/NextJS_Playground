'use client';

import { useComplexStore } from "@/app/store/zustand"

export default function NameViewer({data}:{data:string}) {

  const name = useComplexStore(state => state.name)
  return (
    <>{ name ? name : data }</>
  )
}