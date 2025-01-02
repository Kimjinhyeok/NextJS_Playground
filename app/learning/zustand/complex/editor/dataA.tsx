'use client';
import { ComplexState, useComplexStore } from "@/app/store/zustand"
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

export default function DataAEditor({ target, initData }: {target: keyof ComplexState['dataA'] ,initData: number}) {

  const updateDataA = useComplexStore(state => state.updateDataA);
  const [value, setValue] = useState(initData)

  const onChange:ChangeEventHandler<HTMLInputElement> = (event) => {
    const changedValue = event.target.value;
    setValue(parseInt(changedValue));
  }
  const onEnter:KeyboardEventHandler = (e) => {
    if(e.key !== 'Enter') return;
    updateDataA(target, value);
  }
  return (
    <input value={value} type="number" onChange={onChange} onKeyDown={onEnter} className="text-black"/>
  )
}