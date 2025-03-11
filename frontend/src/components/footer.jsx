import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-5 text-center">
    

      {/* Footer Section */}
      <div className="mt-10 bg-black text-white py-6 text-center border-t border-gray-700">
        <div className="flex justify-center space-x-4 mb-3">
          <a href="#" className="bg-orange-500 p-3 rounded-full">
            <FaFacebookF className="text-black" />
          </a>
          <a href="#" className="bg-orange-500 p-3 rounded-full">
            <FaInstagram className="text-black" />
          </a>
          <a href="#" className="bg-orange-500 p-3 rounded-full">
            <FaYoutube className="text-black" />
          </a>
        </div>
        <p className="text-gray-400">Kovvalpally, Kanhangad South Kasaragod, Kerala-671531</p>
        <p className="text-gray-500 mt-2">Copyright © 2025 Black Simba</p>
      </div>
    </div>
  );
};

export default Footer;