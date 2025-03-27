import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Particles from "./components/ParticlesComponent";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <div className="relative w-full h-auto overflow-x-hidden">
        <Particles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;