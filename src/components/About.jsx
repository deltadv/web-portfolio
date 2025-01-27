import React from "react";

const About = () => {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-40 py-12 overflow-hidden items-center bg-[#121212]">
      {/* Container untuk judul dan deskripsi */}
      <div className="relative flex flex-col items-start justify-start space-y-8">
        {/* Judul */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide font-semibold text-left text-white">
          I love to create something simple and clean
        </h1>

        {/* Deskripsi */}
        <div className="text-[#666666] tracking-normal leading-7">
          <p>
            Seorang UI/UX Designer, saat ini tinggal di Sukabumi yang
            punya bakmi non-halal terenak menurut saya. Saya pribadi suka desain
            yang <span className="italic">simple</span>, <span className="italic">clean</span>, dan ga berlebihan. Kalau bisa sih, setiap elemen
            punya fungsi yang jelas dan ga ada yang mubazir. Oh iya, saya juga
            orangnya <span className="italic">detail-oriented</span> banget, jadi kadang bisa kelamaan ngurusin
            hal-hal kecil yang menurut saya penting, sampe-sampe lupa waktu.
          </p>
          <p className="mt-4">
            Saya itu penggemar berat <span className="font-medium text-[#a6a6a6]">Pokémon</span>. Kalau kalian notice, di salah satu dari 
            gambar di atas, saya sisipin salah satu legendary favorit saya,
            Zekrom. Tapi, kalau soal <span className="italic">all-time favorite</span> sih, Lucario selalu jadi jagoan saya.
            Oh iya, saya udah mainin hampir semua main series game <span className="font-medium text-[#a6a6a6]">Pokémon</span>, jadi <span className="italic">feel free </span>
            buat ajak saya ngobrol panjang lebar soal itu kalau kalian juga
            suka.
          </p>
          <p className="mt-4">
            Kalau lagi ga desain atau main game <span className="font-medium text-[#a6a6a6]">Pokémon</span>, saya biasanya ngabisin
            waktu luang saya dengan nonton, entah itu nonton film, <span className="italic">series</span>,
            ataupun <span className="italic">anime</span>. Saya suka banget sama <span className="italic">series</span> <span className="font-medium text-[#a6a6a6]">Dark</span>. Series ini tuh
            tentang perjalanan waktu, misteri, dan keterkaitan antara masa lalu,
            sekarang, dan masa depan. Kalau kalian suka cerita dengan plot yang
            bikin pusing, penuh <span className="italic">twist</span>, dan ada unsur <span className="italic">sci-fi</span>, saya bisa
            rekomendasiin banget buat nonton <span className="italic">series</span> ini.
          </p>
          <p className="mt-4">
            Mungkin segitu aja dari saya. Terima kasih sudah meluangkan waktu untuk membaca.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
