"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
       <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
        Unlimited{" "} 
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Ux/Ai</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Ux/Ai</span>
          </div>
        </div>
        {" "}designs
      </h2>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We're a design studio that offers unlimited digital experiences for a monthly subscription 
          to scale your business.
        </p>
       
      </div>
      <BackgroundBeams />
    </div>
  );
}
