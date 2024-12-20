import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, label: "HTML5", color: "text-[#E34F26]" },
    { icon: FaCss3Alt, label: "CSS3", color: "text-[#1572B6]" },
    { icon: FaJs, label: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: FaReact, label: "React", color: "text-[#61DAFB]" },
    { icon: SiNextdotjs, label: "Next.js", color: "text-black dark:text-white" },
    { icon: FaNodeJs, label: "Node.js", color: "text-[#339933]" },
    { icon: SiExpress, label: "Express.js", color: "text-gray-500 dark:text-white" },
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-[#06B6D4]" },
    { icon: FaGithub, label: "GitHub", color: "text-black dark:text-white" },
    { icon: SiMongodb, label: "MongoDB", color: "text-[#47A248]" },
    { icon: GrMysql, label: "MySQL", color: "text-[#4479A1]" },
    { icon: FaFigma, label: "Figma", color: "text-[#F24E1E]" },
  ];

  return (
    <section
      name="skills"
      className="w-full h-auto py-20 flex flex-col justify-center items-center px-4"
    >
      <div className="max-w-[1000px] w-full flex flex-col items-center">
        <div className="text-center pb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00BFFF]">01</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Technologies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-6">
            Here are some of the technologies and tools I have experience with.
          </p>
        </div>
        <div className="text-gray-800 dark:text-gray-200 leading-loose text-center">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex flex-col items-center p-4 rounded-lg w-36 sm:w-40"
              >
                <div
                  className={`p-6 rounded-lg bg-gray-100 dark:bg-gray-700 ${skill.color}`}
                >
                  <skill.icon size={60} aria-label={skill.label} />
                </div>
                <p className="mt-3">{skill.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
