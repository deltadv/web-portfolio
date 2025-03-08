import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import GalleryLagi from "./components/GalleryLagi";
import PokemonUnite from "./components/project/PokemonUnite";
import Plantique from "./components/project/Plantique";
import Dkampus from "./components/project/Dkampus";
import BackToTopButton from "./components/BackToTop";
import Quote from "./components/Quote";
import Boomburst from "./components/project/Boomburst";

const App = () => {
  return (
    <div className="relative w-full h-auto bg-[#121212] overflow-x-hidden">
      <Navbar />
      <Home />
      <Gallery />
      <About />
      <GalleryLagi />
      <Quote />
      <Boomburst />
      <Plantique />
      <PokemonUnite />
      <Dkampus />
      <BackToTopButton />
    </div>
  );
};

export default App;
