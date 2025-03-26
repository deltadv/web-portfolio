import React from "react";
import pattern1 from "../../assets/1.png";
import pattern2 from "../../assets/2.png";
import pattern3 from "../../assets/3.png";
import pattern4 from "../../assets/4.png";

const Gallery = () => {
  return (
    <div className="w-full h-auto p-4 md:px-10 lg:px-28 sm:py-8 flex flex-col justify-center items-center bg-[#121212]">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 xl:grid-cols-4">
        {[pattern1, pattern2, pattern3, pattern4].map(
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
  );
};

export default Gallery;
