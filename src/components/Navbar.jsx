import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ toggleNav }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    toggleNav(!nav);
  };

  const menuItems = ["skills", "work", "contact"];

  return (
    <nav className="fixed w-full h-[60px] flex justify-center items-center px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-semibold z-10">
      {/* Logo */}
      <div className="absolute left-4 cursor-pointer">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-xl text-[#00BFFF]"
        >
          DevaScript
        </Link>
      </div>

      {/* Menu untuk desktop (ukuran layar >= 1280px) */}
      <ul className="hidden xl:flex space-x-6">
        {menuItems.map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="dark:hover:text-[#00BFFF] hover:text-[#00BFFF]"
              aria-label={item}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Toggle Theme */}
      <div className="absolute right-16">
        <ThemeToggle />
      </div>

      {/* Hamburger untuk layar < 1280px */}
      <div onClick={handleClick} className="absolute right-4 xl:hidden z-10">
        {nav ? (
          <FaTimes aria-label="Close menu" />
        ) : (
          <FaBars aria-label="Open menu" />
        )}
      </div>

      {/* Menu untuk mobile dan tablet */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center ${
          nav ? "block" : "hidden"
        } xl:hidden`}
      >
        {menuItems.map((item) => (
          <li key={item} className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={item}
              smooth={true}
              duration={500}
              aria-label={item}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons untuk layar >= 1280px */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          {[
            {
              href: "https://linkedin.com/in/deva-raja",
              icon: <FaLinkedin size={30} />,
              label: "Linkedin",
              bg: "bg-[#0A66C2]",
            },
            {
              href: "mailto:deltadv.code@gmail.com",
              icon: <TbMailFilled size={30} />,
              label: "Email",
              bg: "bg-[#DB4437]",
            },
            {
              href: "https://github.com/deltadv",
              icon: <FaGithub size={30} />,
              label: "GitHub",
              bg: "bg-[#181717]",
            },
            {
              href: "https://instagram.com/devaraja_",
              icon: <FaInstagram size={30} />,
              label: "Instagram",
              bg: "bg-[#E1306C]",
            },
          ].map(({ href, icon, label, bg }) => (
            <li
              key={label}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bg}`}
            >
              <a
                className="flex justify-between items-center w-full font-medium text-gray-100"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
