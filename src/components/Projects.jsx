import React from "react";
import Dkampus from "./project/Dkampus";
import Plantique from "./project/Plantique";
import Boomburst from "./project/Boomburst";

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