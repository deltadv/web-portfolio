import React from "react";
import Unite from "../assets/pokemon-unite.png";
import UniteMobile from "../assets/pokemon-unite-mobile.png";

const PokemonUnite = () => {
  return (
    <div className="bg-[#0B0E17] text-white px-6 sm:px-12 md:px-16 lg:px-64 py-12 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Tanggal */}
        <p className="text-[#4b4c55] text-xs sm:text-sm mb-4 tracking-wide">
          September 2024
        </p>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Bagian kiri */}
          <div className="lg:col-span-2">
            {/* Judul */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold mb-6 leading-tight md:leading-snug tracking-normal">
              Pokémon Unite Landing Page
            </h1>
            {/* Deskripsi */}
            <p className="text-[#797a8a] text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
              Desain ulang <span className="italic">landing page</span> Pokémon Unite ini dibuat biar
              tampilannya lebih modern dan keren. Desainnya fokus ke
              elemen-elemen visual yang lebih{" "}
              <span className="italic">fresh</span>, tetap simpel, tapi tetap
              bisa ngasih <span className="italic">vibe</span> seru yang cocok
              buat para fans <span className="italic">game</span>-nya.
            </p>
          </div>
          {/* Bagian kanan: Detail */}
          <div className="space-y-6 lg:pl-28 lg:pt-4">
            <div className="text-xs sm:text-sm leading-relaxed tracking-wide">
              <h3 className="font-medium pb-1 text-white">Design Tool</h3>
              <p className="text-[#797a8a]">Figma</p>
            </div>
            <div className="text-xs sm:text-sm leading-relaxed tracking-wide">
              <h3 className="font-medium pb-1 text-white">Font</h3>
              <p className="text-[#797a8a]">Exo</p>
            </div>
          </div>
        </div>

        {/* Gambar */}
        <div className="mt-12 w-full">
          {/* Gambar desktop */}
          <img
            src={Unite}
            alt="Pokemon Unite"
            className="w-full h-auto object-cover"
          />
          {/* Gambar mobile */}
          {/* <img
            src={UniteMobile}
            alt="Pokemon Unite Mobile"
            className="block sm:hidden w-full h-auto object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PokemonUnite;
