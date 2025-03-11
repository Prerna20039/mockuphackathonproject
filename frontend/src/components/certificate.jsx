import React from 'react';

const BlackSimbaCertificate = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Certificate</h2>

        <p className="text-lg mb-4">
          Become a part of the Black Simba Pride and embrace the energy of the wild.
        </p>

        <p className="text-base mb-8">
          We believe in transparency and keeping our customers informed about the products they consume. Stay up-to-date with our latest product specifications.
        </p>

        <div className="relative mb-8">
          {/* Replace with your certificate image */}
          <img
            src="/images/certificate.png" 
            alt="Black Simba Certificate"
            className="w-full rounded-lg"
          />
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300">
          VIEW →
        </button>
      </div>
    </div>
  );
};

export default BlackSimbaCertificate;