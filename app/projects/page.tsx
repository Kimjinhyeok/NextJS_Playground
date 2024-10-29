import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { CalendarDays, Eye, Users } from "lucide-react";
import { Article } from "./article";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'KJH | Introduce',
  description: '',
}
export default function ProjectsPage({}) {

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 animate-fade-in-fast">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            프론트엔드 개발자로서 참여했던 프로젝트 목록입니다.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={`/projects/${''}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-2 items-center">
                    <CalendarDays className="w-4 h-4"/>
                    <div className="text-xs leading-3 flex items-center text-zinc-100 gap-1">
                      <span>2024.06.01</span>
                      <span>~</span>
                      <span>2024.09.05</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Users className="w-4 h-4" />
                    <span>2</span>
                  </span>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  featured.title
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  featured.description
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            <Card key='proj1'>
              <Article project={{
                date: new Date("2024-05-16"),
                description: 'test1 description',
                slug: '...',
                title: 'test1 title'
              }} views={parseInt(`${Math.random() * 100}`) } />
            </Card>
            <Card key='proj2'>
              <Article project={{
                date: new Date("2024-02-16"),
                description: 'test2 description',
                slug: '...',
                title: 'test2 title'
              }} views={parseInt(`${Math.random() * 100}`) } />
            </Card>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">

          </div>
        </div>
      </div>
    </div>
  )
}