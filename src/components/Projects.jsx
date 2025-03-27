import React from "react";
import Dkampus from "./projects/Dkampus";
import Plantique from "./projects/Plantique";
import Boomburst from "./projects/Boomburst";

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-[#121212] pt-20">
      <Boomburst />
      <Plantique />
      <Dkampus />
    </section>
  );
};

export default Projects;