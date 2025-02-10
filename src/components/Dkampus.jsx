import React from "react";
import DkampusImg from "../assets/dkampus.png";

const Dkampus = () => {
  return (
    <div className="bg-[#1a1a1a] text-white px-6 sm:px-12 md:px-16 lg:px-72 py-12 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Date */}
        <p className="text-[#4b4c55] text-xs sm:text-sm mb-4 tracking-wide">
          December 2024
        </p>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold mb-6 leading-tight md:leading-snug tracking-normal">
              Dkampus: Online Food Delivery App
            </h1>
            {/* Description */}
            <p className="text-[#797a8a] text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
              Dkampus is an online food delivery app designed specifically for students 
              who want quick and hassle-free access to meals. The design is simple, modern, 
              and playful, making it easy for users to discover their favorite dishes. 
              The app focuses on delivering a seamless user experience, ensuring that 
              anyone can place an order quickly and effortlessly.
            </p>
          </div>
          {/* Right Section: Details */}
          <div className="space-y-6 lg:pl-28 lg:pt-4">
            <div className="text-xs sm:text-sm leading-relaxed tracking-wide">
              <h3 className="font-medium pb-1 text-white">Design Tool</h3>
              <p className="text-[#797a8a]">Figma</p>
            </div>
            <div className="text-xs sm:text-sm leading-relaxed tracking-wide">
              <h3 className="font-medium pb-1 text-white">Font</h3>
              <p className="text-[#797a8a]">Source Sans Pro</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 w-full">
          <img
            src={DkampusImg}
            alt="Dkampus App"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Dkampus;
