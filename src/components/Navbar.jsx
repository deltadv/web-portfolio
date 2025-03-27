import { useState, useEffect } from "react";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import avatar from "../assets/avatar.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Fungsi untuk reload halaman
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-[70px] flex items-center px-6 bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 font-semibold z-10">
        <div className="flex items-center space-x-2">
          <button onClick={() => setIsAvatarOpen(true)} aria-label="Buka avatar">
            <img src={avatar} alt="Avatar Deva" className="w-10 h-10 rounded-full" />
          </button>
          <a
            href="/web-portfolio"
            onClick={handleReload}
            className="text-xl font-monserrat text-[#00BFFF] cursor-pointer"
          >
            delta
          </a>
        </div>

        {/* Social Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-12 font-monserrat">
          <a href="https://www.instagram.com/devaraja_" className="text-[12px] hover:text-[#00BFFF]">Instagram</a>
          <a href="https://www.linkedin.com/in/deva-raja" className="text-[12px] hover:text-[#00BFFF]">LinkedIn</a>
          <a href="https://wa.link/x8dfzf" className="text-[12px] hover:text-[#00BFFF]">Hire Me</a>
        </div>

        {/* Social Media & Email */}
        <div className="ml-auto flex items-center space-x-4 font-monserrat">
          <a href="mailto:deltadv.code@gmail.com" className="hidden lg:flex text-[12px] px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-[#1E1E1E] hover:bg-gray-100 dark:hover:bg-[#222222]">
            deltadv.code@gmail.com
          </a>
          <div className="flex lg:hidden space-x-4">
            <a href="https://www.instagram.com/devaraja_" className="text-xl hover:text-[#00BFFF]"><GrInstagram /></a>
            <a href="https://www.linkedin.com/in/deva-raja" className="text-xl hover:text-[#00BFFF]"><BsLinkedin /></a>
            <a href="https://wa.link/x8dfzf" className="text-xl hover:text-[#00BFFF]"><IoCall/></a>
            <a href="mailto:deltadv.code@gmail.com" className="text-xl hover:text-[#00BFFF]"><SiGmail /></a>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
      </nav>

      {/* Modal Avatar */}
      {isAvatarOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={() => setIsAvatarOpen(false)}></div>
          <div className="relative rounded-lg">
            <img src={avatar} alt="Avatar Deva" className="w-64 h-64 sm:w-96 sm:h-96 rounded-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;