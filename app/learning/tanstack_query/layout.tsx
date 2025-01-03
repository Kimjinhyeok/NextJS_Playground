'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

const queryClient = new QueryClient();

export default function TankStackQueryLayout({ children }: { children:React.ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        { children }
      </div>
    </QueryClientProvider>
  ) 
}