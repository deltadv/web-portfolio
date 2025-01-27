import React from "react";
import DkampusImg from "../assets/dkampus.png";

const Dkampus = () => {
  return (
    <div className="bg-[#1a1a1a] text-white px-6 sm:px-12 md:px-16 lg:px-40 py-12 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Tanggal */}
        <p className="text-[#4b4c55] text-xs sm:text-sm mb-4 tracking-wide">
          Desember 2024
        </p>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Bagian kiri */}
          <div className="lg:col-span-2">
            {/* Judul */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold mb-6 leading-tight md:leading-snug tracking-normal">
              Dkampus: Online Food Delivery App
            </h1>
            {/* Deskripsi */}
            <p className="text-[#797a8a] text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
              Dkampus adalah aplikasi <span className="italic">online food delivery</span> yang 
              didesain khusus buat mahasiswa yang pengen cari makan tanpa ribet. Desainnya 
              dibuat simpel, modern, dan tetap <span className="italic">fun</span> biar mahasiswa gampang nemuin makanan 
              favorit mereka. Selain itu, aplikasi ini juga fokus ke pengalaman pengguna 
              yang mulus banget, jadi semua orang bisa pesan makanan dengan cepat tanpa drama.
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
              <p className="text-[#797a8a]">Source Sans Pro</p>
            </div>
          </div>
        </div>

        {/* Gambar */}
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
