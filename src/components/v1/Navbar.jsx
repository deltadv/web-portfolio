import { GrInstagram } from "react-icons/gr";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import avatar from "../../assets/avatar.png";

const Navbar = () => {
  return (
    <nav className="w-full h-[90px] flex justify-center items-center px-4 bg-transparent font-semibold z-10">
      {/* Logo */}
      <div className="absolute left-7 cursor-pointer">
        <img
          src={avatar}
          alt="Avatar"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>

      {/* Social Media Links - Visible on mobile and medium screens */}
      <div className="absolute items-center right-7 flex space-x-4 lg:hidden text-[#898989]">
        <a
          href="https://www.instagram.com/devaraja_"
          className="text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/deva-raja"
          className="text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/deltadv"
          className="text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="mailto:deltadv.code@gmail.com"
          className="text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail />
        </a>
        <a
          href="https://drive.google.com/file/d/1c5dfdl71wL72OqQfWb9ReBPCIGn6rq8x/view?usp=drive_link"
          className="font-normal text-[12px] tracking-wide text-[#FFFFFF] px-4 py-2 border border-[#555555] rounded-sm transition-colors duration-300 bg-[#121212] hover:bg-[#2A2A2A]"
          aria-label="Download CV"
        >
          CV
        </a>
      </div>

      {/* Social Media Links - Visible on large screens */}
      <div className="absolute left-36 hidden lg:flex space-x-10 text-[#898989]">
        <a
          href="https://www.instagram.com/devaraja_"
          className="text-[12px] tracking-wider hover:text-[#FFFFFF]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/deva-raja"
          className="text-[12px] tracking-wider hover:text-[#FFFFFF]"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/deltadv"
          className="text-[12px] tracking-wider hover:text-[#FFFFFF]"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      {/* Email and CV */}
      <div className="absolute right-7 hidden lg:flex space-x-4">
        <a
          href="mailto:deltadv.code@gmail.com"
          className="font-normal text-[12px] tracking-wide text-[#FFFFFF] px-4 py-2 border border-[#555555] rounded-sm transition-colors duration-300 bg-[#121212] hover:bg-[#2A2A2A]"
          aria-label="Email Deva"
        >
          deltadv.code@gmail.com
        </a>
        <a
          href="https://drive.google.com/file/d/1c5dfdl71wL72OqQfWb9ReBPCIGn6rq8x/view?usp=drive_link"
          className="font-normal text-[12px] tracking-wide text-[#FFFFFF] px-4 py-2 border border-[#555555] rounded-sm transition-colors duration-300 bg-[#121212] hover:bg-[#2A2A2A]"
          aria-label="Download CV"
          download
        >
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
