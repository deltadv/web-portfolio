import React from "react";
import BoomburstImg from "../../assets/boomburst.png";

const Boomburst = () => {
  return (
    <div className="bg-[#171717] text-white px-6 sm:px-12 md:px-16 lg:px-72 py-12 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Date */}
        <p className="text-[#5f606a] text-xs sm:text-sm mb-4 tracking-wide">
          February 2025
        </p>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold mb-6 leading-tight md:leading-snug tracking-normal">
              Boomburst: Music Player App
            </h1>
            {/* Description */}
            <p className="text-[#797a8a] text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
              Boomburst is a modern music player with a clean layout,
              dark theme, and vibrant accents. It makes exploring favorite
              tracks and discovering new music effortless and fun—perfect for
              those who want their music experience to look as good as it
              sounds.
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
              <p className="text-[#797a8a]">Oxygen</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 w-full">
          <img
            src={BoomburstImg}
            alt="Boomburst App"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Boomburst;
