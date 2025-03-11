"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion"

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)
  const canControls = useAnimationControls()
  const textControls = useAnimationControls()
  const particleControls = useAnimationControls()
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const canScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const canRotate = useTransform(scrollYProgress, [0, 1], [15, 25])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0.9, 0])
  
  // Lightning bolt positions
  const lightningPositions = [
    { x: -120, y: 50, delay: 0, scale: 0.7, rotate: -15 },
    { x: 120, y: -30, delay: 0.2, scale: 0.8, rotate: 20 },
    { x: -80, y: -80, delay: 0.4, scale: 0.6, rotate: -5 },
    { x: 100, y: 80, delay: 0.3, scale: 0.75, rotate: 10 },
  ]
  
  // Trigger the dramatic entrance animation
  const triggerEntranceAnimation = async () => {
    if (hasAnimated) return
    
    // Background flash
    await textControls.start({
      opacity: [0, 0.2, 0],
      scale: [0.8, 1.2, 0.9],
      transition: { duration: 0.5 }
    })
    
    // Can dramatic entrance
    await canControls.start({
      y: [300, -50, 0],
      rotate: [0, 30, 15],
      scale: [0.5, 1.2, 1],
      transition: { 
        duration: 1, 
        times: [0, 0.6, 1],
        ease: "easeOut" 
      }
    })
    
    // Text reveal
    await textControls.start({
      opacity: 0.9,
      y: [50, 0],
      scale: [0.9, 1],
      transition: { duration: 0.8 }
    })
    
    // Particles explosion
    particleControls.start({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: { duration: 1.5 }
    })
    
    setHasAnimated(true)
  }
  
  useEffect(() => {
    setIsMounted(true)
    
    // Initialize with elements hidden
    textControls.set({ opacity: 0 })
    canControls.set({ y: 300, opacity: 0 })
    particleControls.set({ opacity: 0 })
    
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => {
      triggerEntranceAnimation()
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (!isMounted) {
    return null
  }
  
  return (
    <section 
      ref={containerRef}
      className="relative w-full   mt-0 bg-black  flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Energy wave background */}
      <div className="absolute top-14 inset-0 overflow-hidden z-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={`wave-${index}`}
            className="absolute w-[200%] h-16 left-0 bg-gradient-to-r from-transparent via-[#823100] to-transparent opacity-10"
            style={{
              top: `calc(${(index + 1) * 18}% - 8px)`,
              filter: "blur(8px)"
            }}
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              duration: 12 + index * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Animated lightning/energy bolts */}
      {lightningPositions.map((pos, index) => (
        <motion.div
          key={`lightning-${index}`}
          className="absolute z-10 pointer-events-none"
          style={{ x: pos.x, y: pos.y, rotate: pos.rotate }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, pos.scale, 0],
          }}
          transition={{
            duration: 1.5,
            delay: hasAnimated ? 2 + pos.delay : 1 + pos.delay,
            repeat: Infinity,
            repeatDelay: 5 + Math.random() * 3,
          }}
        >
          <svg width="80" height="120" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M20 0 L15 25 L25 28 L10 60 L15 35 L5 32 L20 0Z"
              fill="#ff6b00"
              stroke="#ffb700"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Explosion particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-5"
        animate={particleControls}
      >
        {Array.from({ length: 40 }).map((_, index) => {
          const angle = (index / 40) * Math.PI * 2
          const radius = 150 + Math.random() * 100
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          
          return (
            <motion.div
              key={`particle-${index}`}
              className="absolute rounded-full bg-gradient-to-r from-[#ff6b00] to-[#823100]"
              style={{
                width: 3 + Math.random() * 8,
                height: 3 + Math.random() * 8,
                left: "50%",
                top: "50%",
                x: x,
                y: y,
                boxShadow: "0 0 8px #ff6b00"
              }}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: x,
                y: y,
                opacity: [1, 0],
              }}
              transition={{
                duration: 1 + Math.random() * 1,
                ease: "easeOut",
              }}
            />
          )
        })}
      </motion.div>
      
      {/* Background text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: textOpacity }}
        animate={textControls}
      >
        <motion.h1 
          className="text-[#8231007D] text-[15vw] font-black tracking-tighter leading-none text-center z-0"
        >
          BLACK
          <br />
          SIMBA
        </motion.h1>
      </motion.div>
        
      {/* Pulsing glow behind can */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-[#823100] filter blur-3xl z-1 opacity-20"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Product image with dramatic animations */}
      <motion.div 
        className="relative z-10 flex items-center justify-center w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="relative w-[300px] h-[500px] md:w-[400px] md:h-[500px] ml-40 pt-2"
          style={{
            scale: canScale,
            rotate: canRotate,
          }}
          animate={canControls}
        >
          {/* The can image */}
          <motion.img
            src="/images/can.svg"
            alt="Black Simba Energy Drink Can"
            width={539}
            height={776}
            className="object-contain origin-bottom -ml-16 filter drop-shadow-2xl"
            animate={{
              filter: ["drop-shadow(0 0 8px rgba(255,107,0,0.3))", "drop-shadow(0 0 25px rgba(255,107,0,0.7))", "drop-shadow(0 0 8px rgba(255,107,0,0.3))"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            priority
          />
          
          {/* Energy aura around can */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-[#ff6b0033] to-transparent rounded-full blur-md -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Flying energy particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-2">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={`fly-${index}`}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full"
            style={{ 
              background: index % 3 === 0 ? "#ff6b00" : "#823100",
              boxShadow: index % 3 === 0 ? "0 0 8px #ff6b00" : "0 0 4px #823100"
            }}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: 0,
              opacity: 0,
            }}
            animate={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{ 
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Call to action with dramatic reveal */}
      <motion.div
        className="absolute bottom-16 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1.5, duration: 0.8 }
        }}
      >
       
      </motion.div>
      
      {/* Product tagline */}
      
    </section>
  )
}