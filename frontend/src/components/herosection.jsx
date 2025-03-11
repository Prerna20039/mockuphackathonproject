"use client"


import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="relative w-full mx-auto bg-black min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[#8231007D] text-[15vw] font-black tracking-tighter leading-none text-center z-0 opacity-90">
          BLACK
          <br />
          SIMBA
        </h1>
      </div>

      {/* Product image */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="relative w-[300px] h-[500px] md:w-[450px] md:h-[600px]">
          <img
            src="/images/can.svg"
            alt="Black Simba Energy Drink Can"
            width={539}
            height={776}
            className="object-contain transform rotate-[15deg] origin-bottom -ml-16 "
            priority
          />
        </div>
      </div>

      
    </section>
  )
}
