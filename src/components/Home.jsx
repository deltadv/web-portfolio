import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-28 py-12 overflow-hidden bg-[#121212]">
      <div className="relative flex flex-col items-center justify-between">
        {/* Nama dan Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-white">
          Deva Raja,
          <br />
          User Interface Designer
        </h1>
      </div>
    </div>
  );
};

export default Home;