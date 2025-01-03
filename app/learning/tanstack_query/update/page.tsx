'use client';

import { Query, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { ChangeEvent, MouseEventHandler, useState } from "react";

interface User {
  name: string,
  age: number,
  id: string
}
export default function tanStackQueryUpdatePage() {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User>({ age: 0, name: '', id: '' });

  const getUsers = async () => {
    const res = await axios.get('http://localhost:3001/users');
    return res.data as User[];
  }
  const updateUser = async (data:User) => {
    const res = await axios.put(`http://localhost:3001/users/${data.id}`, data);
    return res.data;
  }
  const query = useQuery<User[]>({
    queryKey: ['get_users'], queryFn: getUsers,
  });
  const mutation = useMutation({ 
    mutationKey: ['update_user', user], 
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['get_users'], exact: false })
    }
  })

  const onChange = (key:keyof User) => (event:ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setUser({
      ...user,
      [key]: value
    });
  }
  const runUpdate:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    mutation.mutate(user);
  }
  return (
    <div className="flex space-x-2 min-w-[400px]">
      <div className="w-full max-h-[400px] overflow-auto">
        <ul className="m-2">
          {
            query.isSuccess ?
            query.data?.map(item => (
              <li className="my-2 p-2 w-full border border-slate-200 rounded-md">
                <div className=""><span>ID: </span><span>{ item.id }</span></div>
                <div className=""><span>Name: </span><span>{ item.name }</span></div>
                <div className=""><span>Age: </span><span>{ item.age }</span></div>
              </li>
            ))
            : <UserListSkeleton />
          }
        </ul>
      </div>
      <div className="flex flex-col space-y-4 h-full">
        <form name="user_update" className="flex flex-col w-[400px] h-full m-2 p-4 space-y-2 border border-slate-200 rounded-md">
          <input onChange={onChange("id")} className="w-full px-2 py-1 text-black rounded-sm" placeholder="user_id" />
          <input onChange={onChange("name")} className="w-full px-2 py-1 text-black rounded-sm" placeholder="user_name" />
          <input onChange={onChange("age")} type="number" className="w-full px-2 py-1 text-black rounded-sm" placeholder="user_age" />
          <button onClick={runUpdate} className="w-full p-2 bg-slate-700 rounded-sm">수정</button>
          <div className="flex-1 flex justify-center items-center">
            {
              mutation.isIdle
              ? <>대기 중</>
              : mutation.isSuccess
                ? <>수정 완료</>
                : mutation.isPending
                  ? <>'전송 중'</>
                  : <></>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

const UserListSkeleton = () => (
  <div className="w-[131px] h-[380px] border border-slate-200 rounded-md" />
)