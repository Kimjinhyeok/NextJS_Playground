'use client';

import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios";
import { KeyboardEventHandler, useState } from "react";

interface User {
  name: string,
  age: number,
  id: string
}
export default function TanStackQueryPage() {

  const [name, setName] = useState<string>('');

  const queryClient = useQueryClient();
  const getUsers = async (name?:string) => {
    const res = await axios.get('http://localhost:3001/users', { params: { name } });
    // const users = res.data?.map((item:User) => ({ name: item.name, age:item.age, id:item.id }));
    return res.data ? res.data as User[] : [] //users || [];
  }
  const { data, isLoading, isError, error } = useQuery<User[]>({ queryKey: ['users', name], queryFn: () => getUsers(name), enabled: true })
  const onEnter:KeyboardEventHandler<HTMLInputElement> = (event) => {
    if(event.key !== 'Enter') return;
    event.stopPropagation();
    const name = (event.target as HTMLInputElement).value;
    setName(name);
  }
  if(isLoading) return <></>
  if(isError) return (
    <div className="w-full h-full">{error.message}</div>
  )
  return (
    <div className="w-[400px] h-min-[600px] flex flex-col space-y-4">
      <ul>
        {
          data?.map((data:User) => (<li>{data.name}</li>))
        }
      </ul>
      <input onKeyDown={onEnter} placeholder="Search..." className="bg-white p-4 text-black"/>
    </div>
  )
}