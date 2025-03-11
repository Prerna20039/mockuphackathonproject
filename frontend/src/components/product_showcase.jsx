"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ProductShowcase() {
  const videoRef = useRef(null)
  
  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error)
      })
    }
  }, [])
  
  return (
    <section className="relative mt-2 w-full bg-black text-white py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Video Section - Left */}
          <div className="lg:col-span-3 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden w-[750px] ml-0 "
            >
              <video ref={videoRef} className="w-full h-auto rounded-xl" loop muted playsInline>
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
          
          {/* Product Image - Center (Enlarged) */}
         
          
          {/* Text Content - Right */}
          <motion.div
            className="lg:col-span-3 absolute left-[900px] "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-[#E65B07]  text-2xl md:text-3xl font-bold mb-6">
              Black Simba- Your Source of Energy and Vitality
            </h2>
            
            <div className="space-y-4 text-gray-200">
              <p className="leading-relaxed">
                "Black Simba is more than just an energy drink - it's a lifestyle. Our premium energy booster drink is
                meticulously crafted to give you the power and stamina you need to conquer your day.
              </p>
              
              <p className="leading-relaxed">
                Whether you're an athlete pushing your limits, a professional striving for success, or simply someone
                who wants to feel revitalized, Black Simba is your ultimate companion."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}