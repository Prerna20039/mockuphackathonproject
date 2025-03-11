"use client";
import { motion } from "framer-motion";

export default function CertificateSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h2 className="text-[#E65B07] text-3xl md:text-4xl font-bold mb-2">
          Certificate
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Become a part of the Black Simba Pride and embrace energy of the wild.
        </p>

        {/* Purple Bordered Box */}
        <div className="bg-[#1A1512] p-6 rounded-md md:p-10 inline-block">
          {/* Description Box */}
          <div className=" p-4 mb-6 inline-block">
            <p className="text-gray-300 text-base md:text-lg">
              We believe in transparency and keeping our customers informed
              about the products they consume. Stay up-to-date with our latest
              product specifications.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/images/certificate.svg"
              alt="Product Specification"
              className=" rounded-lg w-64 md:w-80"
            />
          </div>

          {/* VIEW Button */}
          <div className="flex justify-center">
            <button className="border-2 border-[#666666] text-[#E65B07] rounded-md px-4 py-2 flex items-center gap-2  transition">
              VIEW <img src="/images/arrow.svg"></img>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
