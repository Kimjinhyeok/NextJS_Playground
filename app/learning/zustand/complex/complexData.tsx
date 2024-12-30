'use client';

import { useEffect } from "react";
import DataA1 from "./DataA1";
import DataA2 from "./DataA2";
import NameViewer from "./name";
import { useComplexStore } from "@/app/store/zustand";
import { CopmexDataProps } from "./page";

export default function ComplexData({initData}: {initData:CopmexDataProps}) {

  useEffect(() => {
    useComplexStore.setState({
      hasInit: true,
      dataA: {
        value1: initData.dataA1,
        value2: initData.dataA2
      },
      name: initData.name
    })
  }, [])
  
  return (
    <div className="flex flex-col gap-4">
      <div className="h-10 p-4 flex items-center space-x-2 border border-white rounded-lg">
        <span className="font-bold">Name</span>
        <span><NameViewer data={initData.name} /></span>
      </div>
      <div className="flex space-x-2">
        <div className="h-10 p-4 flex items-center space-x-4 border border-white rounded-lg">
          <span>Data 1.</span>
          <span><DataA1 data={initData.dataA1} /></span>
        </div>
        <div className="h-10 p-4 flex items-center space-x-4 border border-white rounded-lg">
          <span>Data 2.</span>
          <span><DataA2 data={initData.dataA2} /></span>
        </div>
      </div>
    </div>
  )
}