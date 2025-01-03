'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface User {
  name: string,
  age: number,
  id: string
}
export default function TankStackPostPage() {

  const [user, setUser] = useState<User>({ name: '', age: 0, id: '' });
  const queryClient = useQueryClient();

  const postUser = async (user:User) => {
    const res = await axios.post('http://localhost:3001/users', user);
    return res.data;
  }
  const mutation = useMutation({
    mutationFn: postUser
  })
  const onSave = (event:React.FormEvent) => {
    event.preventDefault();
    mutation.mutate(user);
  }
  const onChangeUser = (key:string) => (event:ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    if(!value) return;

    setUser({
      ...user,
      [key] : (key === 'age') ? parseInt(value) : value
    })
  }
  return (
    <div className="flex flex-col space-y-4 w-[400px] h-[600px] p-4 border border-gray-300 rounded-md">
      <div className="text-xl h-20">
        {
          mutation.isError ? <span>{ mutation.error.message }</span>
          : mutation.isSuccess ? <span>저장이 성공했습니다.</span>
          : mutation.isPending ? <span>전송중...</span>
          : <></>
        }
      </div>
      <form className="flex flex-col space-y-2">
        <input name="id"    type="text"   onChange={onChangeUser("id")} className="text-black px-2 rounded-md" placeholder="id"/>
        <input name="name"  type="text"   onChange={onChangeUser("name")} className="text-black px-2 rounded-md" placeholder="name"/>
        <input name="age"   type="number" onChange={onChangeUser("age")} className="text-black px-2 rounded-md" placeholder="age"/>
        <button onClick={onSave} className="bg-slate-500 rounded-md">전송</button>
      </form>
    </div>
  )
}