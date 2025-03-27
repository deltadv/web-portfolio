import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <Router>
      <div className="relative w-full h-auto overflow-x-hidden">
        <Navbar />
        <MusicPlayer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;