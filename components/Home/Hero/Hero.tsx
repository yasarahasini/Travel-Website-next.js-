import SearchBox from "@/components/Helper/SearchBox";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh] overflow-hidden">
      {/* Video Background */}
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
        <div data-aos="fade-up" className="max-w-2xl">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Let&apos;s Enjoy Nature
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 drop-shadow-md">
            Get the best prices on 2,000,000+ properties worldwide
          </p>

          {/* Search Box */}
          <div className="mt-6">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
