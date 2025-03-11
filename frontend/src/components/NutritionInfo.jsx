"use client";

import { motion } from "framer-motion";

export default function NutritionInfo() {
  // Nutrition facts data
  const nutritionFacts = [
    { label: "Energy", value: "45 KCAL", percentage: "2.25%" },
    { label: "Carbohydrates", value: "11g", percentage: "22%" },
    { label: "Added Sugar", value: "5.99g", percentage: "19.18%" },
    { label: "Total Sugar", value: "8.5g", percentage: "-" },
    { label: "Protein", value: "20g", percentage: "-" },
    { label: "Saturated Fat", value: "30g", percentage: "-" },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 flex justify-center items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Section Heading */}
          

          {/* Content Wrapper - Increased height for better spacing */}
          <div className="relative  w-full mx-auto h-[400px] flex items-center justify-center -ml-16">
            {/* Center Can Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute z-20"
            >
              <div className="relative">
                <img
                  src="/images/can.svg"
                  alt="Energy Drink Can"
                  className="w-[250px] drop-shadow-[0_0_20px_rgba(230,91,7,0.5)] ml-28 mt-16"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#E65B07]/30 blur-md rounded-full"></div>
              </div>
            </motion.div>

            {/* Radiating Nutrition Facts - Increased radius */}
            {nutritionFacts.map((fact, index) => {
              // Circular Positioning Logic with adjusted radius
              const angle = (index * (360 / nutritionFacts.length)) * (Math.PI / 180);
              // Increased radius to avoid overlapping
              const radius = 240;
              const delay = 0.2 + index * 0.15;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x, y }}
                  transition={{ duration: 0.8, delay, type: "spring", stiffness: 50 }}
                  className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: "50%", top: "50%" }}
                >
                  
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#E65B07]/70 to-[#E65B07]"
                    style={{
                      transform: `rotate(${angle * (180 / Math.PI)}deg)`,
                      transformOrigin: "left center",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: delay + 0.2 }}
                  />

                  
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#E65B07]"
                    style={{ transform: `translate(-50%, -50%)` }}
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />

                  
                  <div className="bg-black/60 border border-[#E65B07]/50 rounded-lg p-3 w-40 shadow-[0_0_15px_rgba(230,91,7,0.15)]">
                    <p className="text-[#E65B07] font-medium text-sm mb-1">{fact.label}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-white text-sm">{fact.value}</p>
                      <p className="text-[#E65B07] text-sm font-medium">{fact.percentage}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative Sparks - Positioned to avoid overlapping */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180);
              // Adjusted radius range to avoid overlapping with facts
              const radius = 80 + Math.random() * 80;
              const scale = 0.5 + Math.random() * 0.5;

              return (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-[#E65B07]/70"
                  style={{ left: "50%", top: "50%", transform: `translate(-50%, -50%)` }}
                  initial={{ x: 0, y: 0, scale: 0 }}
                  animate={{ 
                    x: Math.cos(angle) * radius, 
                    y: Math.sin(angle) * radius, 
                    scale, 
                    opacity: [0.3, 0.8, 0.3] 
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 3, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    delay: i * 0.2 
                  }}
                />
              );
            })}
          </div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-xs text-gray-400 mt-32 italic"
          >
            Percentage values based on a 2000 kcal daily intake
          </motion.p>
        </div>
      </div>
    </section>
  );
}