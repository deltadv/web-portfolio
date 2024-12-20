import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ImDownload2 } from "react-icons/im";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Home = ({ isNavOpen }) => {
  return (
    <section
      name="home"
      className="w-full h-screen flex flex-col justify-center items-center px-4"
    >
      {/* Nama dan Title */}
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#00BFFF] text-center"> {/* Changed to Tomato */}
        Hello there!
      </h2>
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-4 text-gray-900 dark:text-gray-100 text-center">
        I'm Deva Raja
      </h1>

      {/* Animasi Deskripsi */}
      {!isNavOpen && (
        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "UI/UX Designer",
            2000,
            "Pokémon Trainer",
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300 mt-4 text-center"
        />
      )}

      {/* Tombol */}
      <div className="font-medium mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.link/x8dfzf"
          className="text-white bg-[#00BFFF] hover:bg-[#009ACD] py-3 px-6 rounded-md text-center" // Changed to Tomato
          aria-label="Contact Me"
        >
          Hire Me
        </a>
        <a
          href="https://drive.google.com/file/d/1BacS1iY7BQDT0UW0_9PtBvyKxgdjvAgu/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700 py-3 px-6 rounded-md text-center"
          aria-label="Download CV"
        >
          CV <ImDownload2 className="ml-2" />
        </a>
      </div>

      {/* Social Icons - Only visible on tablet and mobile */}
      <div className="flex space-x-4 mt-8 xl:hidden">
        <a
          href="https://linkedin.com/in/deva-raja"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin size={30} className="text-[#0A66C2]" />
        </a>
        <a
          href="mailto:deltadv.code@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <TbMailFilled size={30} className="text-[#DB4437]" />
        </a>
        <a
          href="https://github.com/deltadv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub size={30} className="text-[#181717] dark:text-gray-100" />
        </a>
        <a
          href="https://instagram.com/devaraja_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={30} className="text-[#E1306C]" />
        </a>
      </div>
    </section>
  );
};

export default Home;
