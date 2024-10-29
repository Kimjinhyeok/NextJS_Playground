import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { nanumGothic } from "../fonts/font";
import Chip from "../components/intro/chip";

export const metadata:Metadata = {
  title: "KJH | Intorduce",
  description: 'introduce about Kimjinhyeok'
}
export default function Page({}) {

  return (
    <main className="relative container mx-auto">
      <Navigation />
      <div className="px-6 pt-20 space-y-8 md:space-y-16 md:pt-24 lg:pt-32 animate-fade-in-fast">
        <div className={`${nanumGothic.className} relative w-full h-full flex space-x-2`}>
          <div className="absolute left-0 h-full w-52 border-r border-zinc-800">in nav</div>
          <div className="pl-52 flex-1 h-full flex flex-col space-y-32">
            <div className="w-full flex-col space-y-4">
              <h2 className="text-4xl font-bold">Profile</h2>
              <hr className="border-zinc-800" />
              <ul className="grid gap-1">
                <li className="text-xl">
                  <span className="font-semibold mr-2">Name.</span>
                  <span>김진혁(Kim jinhyeok)</span>
                </li>
                <li className="text-xl">
                  <span className="font-semibold mr-2">Birth.</span>
                  <span>1992.01.11</span>
                </li>
                <li className="text-xl">
                  <span className="font-semibold mr-2">Email.</span>
                  <span>bkho6243@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="w-full flex-col space-y-4">
              <h2 className="text-4xl font-bold">Skills</h2>
              <hr className="border-zinc-800" />
              <ul className="grid gap-3">
                <li className="text-xl flex flex-col space-y-2">
                  <div className="font-sals font-semibold mr-2">Key Skills</div>
                  <div className="flex justify-start space-x-2">
                    <Chip>React</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>JavaScript</Chip>
                    <Chip>ES6+</Chip>
                    <Chip>NextJS</Chip>
                    <Chip>Redux</Chip>
                    <Chip>Material UI</Chip>
                    <Chip>Tailwindcss</Chip>
                  </div>
                </li>
                <li className="text-xl flex flex-col space-y-2">
                  <div className="font-sals font-semibold mr-2">Additional Skiils</div>
                  <div className="flex justify-start space-x-2">
                    <Chip level="level2">Angular.js</Chip>
                    <Chip level="level2">NodeJS</Chip>
                    <Chip level="level2">oneM2M</Chip>
                    <Chip level="level2">cesiumJS</Chip>
                    <Chip level="level3">D3</Chip>
                    <Chip level="level3">MongoDB</Chip>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full flex-col space-y-4">
              <h2 className="text-4xl font-bold">Career</h2>
              <hr className="border-zinc-800" />
              <ul className="grid gap-1">
                <li className="text-xl">
                  <span className="font-semibold mr-2">Name.</span>
                  <span>김진혁(Kim jinhyeok)</span>
                </li>
                <li className="text-xl">
                  <span className="font-semibold mr-2">Birth.</span>
                  <span>1992.01.11</span>
                </li>
                <li className="text-xl">
                  <span className="font-semibold mr-2">Email.</span>
                  <span>bkho6243@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}