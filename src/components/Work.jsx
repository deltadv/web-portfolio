import React from "react";
import { MdWeb } from "react-icons/md";
import { FaGithub, FaFigma } from "react-icons/fa";

// Data proyek
const projects = [
  {
    type: "code",
    title: "Notes App",
    description: "A simple note-taking app built with MERN.",
    demoUrl: "",
    repoUrl: "https://github.com/deltadv/notes-app",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    type: "code",
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
    demoUrl: "https://deltadv.github.io/web-portfolio",
    repoUrl: "https://github.com/deltadv/web-portfolio",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    type: "code",
    title: "To-Do App",
    description: "A simple to-do app built with React and Tailwind CSS.",
    demoUrl: "",
    repoUrl: "https://github.com/deltadv/todo-app",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    type: "code",
    title: "Weather App",
    description:
      "A simple weather app built with React and Tailwind CSS.",
    demoUrl: "",
    repoUrl: "https://github.com/deltadv/weather-app",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    type: "uiux",
    title: "Dkampus: Online Food Delivery App",
    description: "UI/UX design for a campus food delivery app.",
    demoUrl:
      "https://www.figma.com/proto/QCnIZILxWYZgSX6DvPt5RI/Dkampus?page-id=1%3A3&node-id=1757-3291&viewport=-1487%2C2374%2C0.49&t=nck8zZpUnl7KJkSA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1757%3A3291&show-proto-sidebar=1",
    repoUrl: "",
    technologies: ["Figma"],
  },
  {
    type: "uiux",
    title: "Javaksa: Javanese Script Learning App",
    description: "UI/UX design for a Javanese script learning app.",
    demoUrl:
      "https://www.figma.com/proto/1U8mmgLu5yvqTST0iuuMRY/Javaksa?page-id=0%3A1&node-id=1-385&viewport=827%2C1594%2C0.59&t=Hc7mvxUQF17xHOTk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A385",
    repoUrl: "https://www.figma.com/design/1U8mmgLu5yvqTST0iuuMRY/Javaksa?node-id=0-1&t=lb2LR3dk6sQBDva9-1",
    technologies: ["Figma"],
  },
];

const Work = () => {
  return (
    <section
      name="work"
      className="w-full h-auto py-20 mt-[60px] flex flex-col justify-center items-center px-4"
    >
      {/* Header Section */}
      <div className="max-w-[1000px] w-full flex flex-col items-center">
        <div className="text-center pb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00BFFF]">02</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Personal Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-6">
            Here are some of the projects I've worked on, including both coding
            and UI/UX design projects.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4"
          >
            {/* Project Title */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>

            {/* Technology Badges */}
            <div className="mt-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100 text-xs font-semibold px-2 py-1 rounded-sm mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons for Demo and GitHub */}
            <div className="mt-4 flex justify-between">
              {/* Demo Button */}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-[#00BFFF] text-white text-sm px-4 py-2 rounded-md hover:bg-[#009ACD] transition duration-200"
                >
                  <MdWeb className="mr-2" />
                  Demo
                </a>
              ) : (
                <button className="flex items-center justify-center bg-gray-400 text-white text-sm px-4 py-2 rounded-md">
                  <MdWeb className="mr-2" />
                  Demo
                </button>
              )}

              {/* GitHub Button */}
              {project.type === "code" &&
                (project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-950 transition duration-200"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                ) : (
                  <button className="flex items-center justify-center bg-gray-400 text-white text-sm px-4 py-2 rounded-md">
                    <FaGithub className="mr-2" />
                    GitHub
                  </button>
                ))}
              {/* Figma Button */}
              {project.type === "uiux" &&
                (project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#F24E1E] text-white text-sm px-4 py-2 rounded-md hover:bg-[#D43B17] transition duration-200"
                  >
                    <FaFigma className="mr-2" />
                    Figma
                  </a>
                ) : (
                  <button className="flex items-center justify-center bg-gray-400 text-white text-sm px-4 py-2 rounded-md">
                    <FaFigma className="mr-2" />
                    Figma
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
