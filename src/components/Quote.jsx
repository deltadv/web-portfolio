import React from "react";

const Quote = () => {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-28 py-12 lg:py-20 bg-[#121212]">
      {/* Container untuk Quote */}
      <div className="text-center flex flex-col items-center justify-center space-y-6">
        {/* Quote Text */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide font-medium text-white leading-loose">
          "The ideal is not a fixed point; it’s a horizon that moves as we
          advance."
        </p>

        {/* Author */}
        <p className="text-[#666666] text-base sm:text-lg md:text-xl font-medium tracking-wide leading-7 italic">
          — Simone de Beauvoir
        </p>
      </div>
    </div>
  );
};

export default Quote;
