"use client"

import { motion } from "framer-motion"

export default function LaunchSection() {
  const images = [
    {
      src: "/images/one.svg",
      alt: "Launch ceremony group photo 1",
      className: "col-span-2 md:col-span-3 row-span-1",
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
      className: "col-span-2 md:col-span-3 row-span-1",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: "0px 4px 20px rgba(230,91,7,0.3)",
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#E65B07] text-4xl md:text-5xl font-bold mb-4"
          >
            🚀 Launching Soon.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl"
          >
            Glimpse from Launching Ceremony!!
          </motion.p>
        </div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`relative ${image.className} aspect-[16/9] overflow-hidden rounded-2xl shadow-lg`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300"
                animate={{ scale: [1, 1.02, 1], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
