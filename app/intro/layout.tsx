import React from "react";
import IntroTitle from "../ui/title/title";
import TitleLayout from "../ui/title/layout";

export default function Layout({ children }: { children:React.ReactNode }) {

  return (
    <div className="flex flex-col h-screen w-screen md:overflow-hidden">
      <TitleLayout>
        <IntroTitle />
      </TitleLayout>
      <div className="w-full flex flex-row">
        <div className="flex flex-row md:w-64">
          <nav className="mt-20 w-full bg-green-700">
            Navi
          </nav>
        </div>
        <div className="flex-1 max-h-screen overflow-y-auto">
          <div className="mt-20">
            { children } 
          </div>
        </div>
      </div>
    </div>
  )
}