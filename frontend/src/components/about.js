import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Install via npm install framer-motion

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Delay for smooth animation
  }, []);

  return (
    <section className="relative bg-black text-white py-12 px-4 md:px-16 overflow-hidden">
      {/* Background Overlay with Faint Image Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-80">
        <img
          src="/images/background.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-orange-500 text-2xl font-bold uppercase tracking-wide"
        >
          About Me
        </motion.h2>

        {/* Description Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg text-gray-300 leading-relaxed mt-4"
        >
          We believe in the power of nature to rejuvenate and empower. Inspired by the untamed spirit of the African wilderness, our energy booster drink is a fusion of premium ingredients carefully selected for their energizing properties.
          <br />
          Each can of Black Simba contains Water, Carbon Dioxide (E290), Sugar, Acidity Regulators (E331, E300), Taurine, Caffeine, Vitamins (B3, B2, B6, B12), and permitted natural food colors (E150D).
        </motion.p>

        {/* Manufacturer & Marketer Section */}
        <div className="flex flex-col md:flex-row justify-between mt-8 text-left">
          {/* Manufacturer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <h3 className="text-orange-500 font-semibold">Manufactured & Packed</h3>
            <p className="text-gray-400">
              BLUE MARINE BOTTLING COMPANY <br />
              Madhur, Kasaragod, Kerala, India - 671124
            </p>
          </motion.div>

          {/* Marketer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 mt-4 md:mt-0"
          >
            <h3 className="text-orange-500 font-semibold">Marketer</h3>
            <p className="text-gray-400">
              fssai: 11323999000547 <br />
              HASBI INDUSTRIES LLP <br />
              Oriikkadavu, Padne, Thrikkaripur, Kasaragod Kerala - 671312 (INDIA)
            </p>
          </motion.div>
        </div>

        {/* FSSAI License Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-orange-700 transition duration-300 shadow-lg hover:shadow-orange-500/50"
        >
          SEE FSSAI LICENSE →
        </motion.button>
      </div>
    </section>
  );
};

export default AboutSection;
