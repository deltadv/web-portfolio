import React, { useState } from "react";
import DkampusImg from "../../assets/dkampus.png";

const Dkampus = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="bg-transparent text-gray-900 dark:text-white pt-4 pb-12 lg:pb-20 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 dark:text-[#5f606a] text-xs md:text-sm mb-6 tracking-wider">
          December 2024
        </p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-2/3 space-y-6 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Dkampus: Online Food Delivery App
            </h1>
            <p className="text-gray-700 dark:text-[#8c8d9e] text-sm md:text-base leading-loose">
              An online food delivery app designed for students near campus, offering a variety of local meals with easy ordering and quick delivery.
            </p>
          </div>

          <div className="lg:w-1/3 space-y-6 lg:space-y-5">
            {[{ title: "Design Tool", detail: "Figma" }, { title: "Font", detail: "Source Sans Pro" }].map((item, index) => (
              <div key={index} className="text-sm md:text-sm">
                <h3 className="font-semibold mb-1 text-[#00BFFF] font-caveat text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-[#797a8a]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-10">
          <button
            onClick={() => setIsImageOpen(true)}
            aria-label="Preview Dkampus App"
            className="w-full"
          >
            <img
              src={DkampusImg}
              alt="Tampilan Aplikasi Dkampus"
              className="w-full h-auto object-cover cursor-pointer"
            />
          </button>
        </div>
      </div>

      {isImageOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setIsImageOpen(false)}
          ></div>
          <div className="relative rounded-lg">
            <img
              src={DkampusImg}
              alt="Tampilan Aplikasi Dkampus"
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Dkampus;
