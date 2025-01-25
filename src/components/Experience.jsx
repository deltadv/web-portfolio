import React from "react";

const Experience = () => {
  const experiences = [
    {
      dateRange: "Oct 2023 - Sep 2024",
      title: "UI/UX Designer",
      company: "D’Creativ Indonesia",
      location: "Bandung, Indonesia",
      description:
        "Developed the UI/UX for an online food delivery app, focusing on usability and engagement through research and prototyping.",
    },
    {
      dateRange: "Jul 2023 - Sep 2023",
      title: "Front-End Web Developer",
      company: "PT Dirgantara Indonesia",
      location: "Bandung, Indonesia",
      description:
        "Enhanced a CRM system with Next.js, ensuring design consistency and optimizing performance.",
    },
    {
      dateRange: "Oct 2022 - Oct 2022",
      title: "Project Based Intern: UI/UX Designer Virtual Internship Experience",
      company: "Niagahoster",
      location: "Remote",
      description:
        "Completed UI/UX tasks at Niagahoster, including research, design, and testing.",
    },
  ];

  return (
    <div className="relative w-full h-auto flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-16 overflow-hidden bg-[#121212]">
      {/* Container untuk judul */}
      <div className="mb-12">
        <h1 className="text-3xl lg:text-5xl font-semibold tracking-wide text-white">
          Professional Experience
        </h1>
      </div>

      {/* Container untuk daftar pengalaman */}
      <div className="flex flex-col gap-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border-b border-[#333333] pb-6"
          >
            <p className="text-sm text-[#666666]">{experience.dateRange}</p>
            <h2 className="text-xl font-semibold text-white">{experience.title}</h2>
            <p className="text-sm text-[#B0B0B0] font-medium">
              {experience.company} - {experience.location}
            </p>
            <p className="text-base text-[#AAAAAA] leading-relaxed">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;