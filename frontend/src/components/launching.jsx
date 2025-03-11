"use client"

import { motion } from "framer-motion"

export default function LaunchSection() {
  const images = [
    {
      src: "/images/one.svg",
      alt: "Launch ceremony group photo 1",
      className: "col-span-2 md:col-span-3 row-span-1", // Ensure same size as fourth image
    },
    {
      src: "/images/two.svg",
      alt: "Launch ceremony group photo 2",
      className: "col-span-2 md:col-span-2 row-span-1",
    },
    {
      src: "/images/image.svg",
      alt: "Black Simba brand showcase",
      className: "col-span-2 md:col-span-2 row-span-1",
    },
    {
      src: "/images/four.svg",
      alt: "Launch ceremony group photo 3",
      className: "col-span-2 md:col-span-3 row-span-1", // Same size as first image
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#E65B07] text-3xl md:text-4xl font-bold mb-4"
          >
            Launching Soon.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Glimpse from Launching Ceremony!!
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative ${image.className} aspect-[16/9] overflow-hidden rounded-2xl`} // Ensures equal height
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
