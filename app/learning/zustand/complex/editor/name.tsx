'use client';
import { useComplexStore } from "@/app/store/zustand"
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react"

export default function ComplexNameEditor({initName}:{initName:string}) {

  const setName = useComplexStore(state => state.setName)
  const [value, setValue] = useState(initName)

  const onChange:ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  }

  const onKeyDown:KeyboardEventHandler = (event) => {
    if(event.key !== 'Enter') return;
    setName(value);
  }
  return (
    <input value={value} onChange={onChange} onKeyDown={onKeyDown} type="text" className="text-black"/>
  )
}