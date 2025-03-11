"use client";

import { motion } from "framer-motion";

export default function NutritionInfo() {
  const nutritionFacts = [
    { label: "Energy", value: "45 KCAL", percentage: "2.25%" },
    { label: "Carbohydrates", value: "11g", percentage: "22%" },
    { label: "Added Sugar", value: "5.99g", percentage: "19.18%" },
    { label: "Total Sugar", value: "8.5g", percentage: "-" },
    { label: "Protein", value: "20g", percentage: "-" },
    { label: "Saturated Fat", value: "30g", percentage: "-" },
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full mx-auto h-[500px] flex items-center justify-center -ml-20">
            {/* Rotating Can Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute z-20"
            >
              <div className="relative">
                <img
                  src="/images/can.svg"
                  alt="Energy Drink Can"
                  className="w-[300px] drop-shadow-[0_0_30px_rgba(230,91,7,0.6)] ml-32 mt-20"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-[#E65B07]/30 blur-lg rounded-full"></div>
              </div>
            </motion.div>

            {nutritionFacts.map((fact, index) => {
              const angle = (index * (360 / nutritionFacts.length)) * (Math.PI / 180);
              const radius = 280; // Increased radius for better spacing
              const delay = 0.2 + index * 0.15;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    x,
                    y,
                    y: [y, y - 12, y, y + 12, y], // Floating effect
                  }}
                  transition={{
                    duration: 3,
                    delay,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: "50%", top: "50%" }}
                >
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#E65B07]/70 to-[#E65B07]"
                    style={{
                      transform: `rotate(${angle * (180 / Math.PI)}deg)`,
                      transformOrigin: "left center",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: delay + 0.2 }}
                  />

                  {/* Pulsing Dot Animation */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[#E65B07]"
                    style={{ transform: `translate(-50%, -50%)` }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  <div className="bg-black/70 border border-[#E65B07]/50 rounded-lg p-4 w-48 shadow-[0_0_20px_rgba(230,91,7,0.2)]">
                    <p className="text-[#E65B07] font-semibold text-lg mb-1">{fact.label}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-white text-lg">{fact.value}</p>
                      <p className="text-[#E65B07] text-lg font-semibold">{fact.percentage}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Twinkling Sparks Animation */}
            {[...Array(14)].map((_, i) => {
              const angle = (i * 25) * (Math.PI / 180);
              const radius = 100 + Math.random() * 100; // Expanded range
              const scale = 0.6 + Math.random() * 0.6;

              return (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-[#E65B07]/80"
                  style={{ left: "50%", top: "50%", transform: `translate(-50%, -50%)` }}
                  initial={{ x: 0, y: 0, scale: 0 }}
                  animate={{
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                    scale,
                    opacity: [0.3, 0.9, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2,
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
            className="text-sm text-gray-300 mt-32 italic"
          >
            Percentage values based on a 2000 kcal daily intake
          </motion.p>
        </div>
      </div>
    </section>
  );
}
