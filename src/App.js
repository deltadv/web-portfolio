import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import GalleryLagi from "./components/GalleryLagi";
import PokemonUnite from "./components/PokemonUnite";
import Plantique from "./components/Plantique";
import Dkampus from "./components/Dkampus";
import BackToTopButton from "./components/BackToTop";
import Quote from "./components/Quote";

const App = () => {
  return (
    <div className="relative w-full h-auto bg-[#121212] overflow-x-hidden">
      <Navbar />
      <Home />
      <Gallery />
      <About />
      <GalleryLagi />
      <Quote />
      <Plantique />
      <PokemonUnite />
      <Dkampus />
      <BackToTopButton />
    </div>
  );
};

export default App;
