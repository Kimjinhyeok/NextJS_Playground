import Link from "next/link";
import { nanumGothic } from "./fonts/font";
import { Metadata } from "next";

const navigations = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Introduce", href: "/introduce" },
]

export const metadata:Metadata = {
  title: '404 페이지'
}
export default function NotFound() {

  const getMiddleDot = (idx:number) => (
    idx < navigations.length-1
    ? <span 
        key={idx}
        className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">·</span>
    : <></>
  )
  return (
    <main className={`${nanumGothic.className} w-screen h-screen flex justify-center items-center bg-gradient-to-tl from-black via-zinc-600/20 to-black`}>
      <div className="absolute opacity-10 text-[10em] leading-3 md:text-[25rem] md:leading-4 lg:text-[40em] lg:leading-4 -z-10 pointer-events-none">404</div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl md:text-4xl">페이지를 찾을 수 없습니다.</h2>
        <p className="text-sm md:text-base">요청하신 페이지는 존재하지 않는 페이지입니다.</p>
        <div className="flex space-x-2">
          {
            navigations.map((item, idx) => (
              <>
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >{item.name}</Link>
                { getMiddleDot(idx) }
              </>
            ))
          }
        </div>
      </div>
    </main>
  )
}