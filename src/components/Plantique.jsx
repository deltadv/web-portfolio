import React from "react";
import PlantiqueImg from "../assets/plantique.png";

const Plantique = () => {
  return (
    <div className="bg-[#19302b] text-white px-6 sm:px-12 md:px-16 lg:px-72 py-12 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Date */}
        <p className="text-[#5f606a] text-xs sm:text-sm mb-4 tracking-wide">
          January 2025
        </p>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold mb-6 leading-tight md:leading-snug tracking-normal">
              Plantique: Plant E-Commerce App
            </h1>
            {/* Description */}
            <p className="text-[#797a8a] text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
              Plantique is an e-commerce app for plant lovers, designed to be
              calm, simple, and easy to use. It offers a visually pleasing
              experience that keeps users engaged while making plant shopping
              effortless—perfect for beginners and enthusiasts alike.
            </p>
          </div>
          {/* Right Section: Details */}
          <div className="space-y-6 lg:pl-28 lg:pt-4">
            <div className="text-xs sm:text-sm leading-relaxed tracking-wide">
              <h3 className="font-medium pb-1]">Design Tool</h3>
              <p className="text-[#797a8a]">Figma</p>
            </div>
            <div className="text-xs sm:text-sm leading-relaxed tracking-wide">
              <h3 className="font-medium pb-1">Font</h3>
              <p className="text-[#797a8a]">Poppins</p>
              <p className="text-[#797a8a]">Roboto</p>
              <p className="text-[#797a8a]">Caveat</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 w-full">
          <img
            src={PlantiqueImg}
            alt="Plantique App"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Plantique;
