import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesComponent from './components/Particles';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ParticlesComponent />
      <Navbar toggleNav={setIsNavOpen} />
      <Home isNavOpen={isNavOpen} />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
