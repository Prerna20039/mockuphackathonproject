"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative w-full mx-auto bg-black min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background text with subtle parallax effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <motion.h1
          className="text-[#8231007D] text-[15vw] font-black tracking-tighter leading-none text-center z-0 opacity-90"
          animate={{ y: [-10, 0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          BLACK
          <br />
          SIMBA
        </motion.h1>
      </motion.div>

      {/* Product image with entrance animation and floating effect */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8, rotate: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: [15, 10, 15] }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative w-[300px] h-[500px] md:w-[450px] md:h-[600px]"
        >
          <img
            src="/images/can.svg"
            alt="Black Simba Energy Drink Can"
            width={539}
            height={776}
            className="object-contain transform origin-bottom -ml-16"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
