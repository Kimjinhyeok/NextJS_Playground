import React from "react";

export default function TitleLayout({ children }: { children:React.ReactNode }) {

  return (
    <div className="fixed h-20 w-full p-4 flex backdrop-blur-sm bg-gradient-to-r from-black/55 from-10% via-[#0082FF]/55 via-100%">
      <div className="">
        {children}
      </div>
    </div>
  )
}