import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/v2/Navbar";
import Particles from "./components/v2/ParticlesComponent";
import Home from "./components/v2/Home";
import Projects from "./components/v2/Projects";

const App = () => {
  return (
    <Router>
      <div className="relative w-full h-auto overflow-x-hidden">
        <Particles />
        <Navbar />
        <Routes>
          <Route path="/web-portfolio" element={<Home />} />
          <Route path="/web-portfolio/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;