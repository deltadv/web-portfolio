import React from "react";
import PlantiqueImg from "../assets/plantique.png";

const Plantique = () => {
  return (
    <div className="bg-[#DFE2EF] text-white px-6 sm:px-12 md:px-16 lg:px-28 py-12 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Tanggal */}
        <p className="text-[#A9ABBA] text-xs sm:text-sm mb-4 tracking-wide">
          Januari 2025
        </p>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Bagian kiri */}
          <div className="lg:col-span-2">
            {/* Judul */}
            <h1 className="text-[28px] sm:text-[36px] text-[#082431] md:text-[48px] font-semibold mb-6 leading-tight md:leading-snug tracking-normal">
              Plantique: Plant E-Commerce App
            </h1>
            {/* Deskripsi */}
            <p className="text-[#797986] text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
              Plantique adalah aplikasi <span className="italic">e-commerce</span> khusus buat para pecinta
              tanaman. Desainnya dibuat biar kelihatan adem, simpel, dan
              tentunya nyaman dipakai. Fokusnya ada di estetika yang bikin
              betah <span className="italic">scrolling</span>, sambil tetap ngasih kemudahan buat nyari dan
              beli tanaman yang diinginkan. Pas banget buat yang suka taneman
              atau lagi mulai hobi berkebun.
            </p>
          </div>
          {/* Bagian kanan: Detail */}
          <div className="space-y-6 lg:pl-28 lg:pt-4">
            <div className="text-xs sm:text-sm leading-relaxed tracking-wide">
              <h3 className="font-medium pb-1 text-[#082431]">Design Tool</h3>
              <p className="text-[#797986]">Figma</p>
            </div>
            <div className="text-xs sm:text-sm leading-relaxed tracking-wide">
              <h3 className="font-medium pb-1 text-[#082431]">Font</h3>
              <p className="text-[#797986]">Poppins</p>
              <p className="text-[#797986]">Roboto</p>
              <p className="text-[#797986]">Caveat</p>
            </div>
          </div>
        </div>

        {/* Gambar */}
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
