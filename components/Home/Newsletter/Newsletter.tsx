import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const Newsletter = () => {
  return (
    <div className="bg-black py-16 flex items-center justify-center w-full flex-col text-center px-4">
      {/* Icon */}
      <BsEnvelopePaper className="w-16 h-16 text-white mb-6" />

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Your Travel Journey Starts Here
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mb-6">
        Sign up and we&apos;ll send the best deals to you
      </p>

      {/* Input + Button */}
      <div className="w-full max-w-md flex bg-white rounded-full overflow-hidden shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 outline-none text-gray-700"
        />
        <button className="bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-all">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
