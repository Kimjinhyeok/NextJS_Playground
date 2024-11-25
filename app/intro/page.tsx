import { nanumGothic } from "../fonts/font";

export default function Page({}) {

  return (
    <main>
      <h1 className={`${nanumGothic.className} mb-4 text-xl md:text-2xl`}>Intro</h1>
      <div className="">Test</div>
      <div className="h-[2450px] w-full bg-red-500"></div>
    </main>
  )
}