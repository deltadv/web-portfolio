import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#00bfff"],
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.5 },
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 300,
        },
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2 },
          random: true,
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.03,
            opacity: { min: 0.2, max: 1 },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="particles-background"
      options={options}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-white dark:bg-[#121212]"
    />
  );
};

export default ParticlesComponent;