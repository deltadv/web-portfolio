import React from 'react'
import pattern5 from "../../assets/5.png";
import pattern6 from "../../assets/6.png";
import pattern7 from "../../assets/7.png";
import pattern8 from "../../assets/8.png";

const GalleryLagi = () => {
  return (
    <div className="w-full h-auto p-4 md:px-10 lg:px-28 sm:py-8 flex flex-col justify-center items-center bg-[#121212]">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 xl:grid-cols-4">
        {[pattern5, pattern6, pattern7, pattern8].map(
          (pattern, index) => (
            <div key={index} className="relative group">
              <img
                className="w-full h-full object-cover aspect-square"
                src={pattern}
                alt={`gallery-photo-${index + 1}`}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default GalleryLagi