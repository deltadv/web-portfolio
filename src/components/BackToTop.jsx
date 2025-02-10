import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai"; // Import React Icon

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          className="fixed bottom-5 right-5 text-xs font-medium bg-white text-[#121212] px-3 py-2 rounded-sm shadow-sm flex items-center space-x-1"
        >
          <span>Back to Top</span>
          <AiOutlineArrowUp className="h-4 w-4" /> {/* Mengganti SVG dengan React Icon */}
        </button>
      )}
    </>
  );
};
