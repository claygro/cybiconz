import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CybiLearn from "./pages/Cybilearn";
import Community from "./pages/Community";
function App() {
  return (
    <Router>
      <div className="bg-[#050A18] text-white min-h-screen font-sans selection:bg-teal-500/30">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cybilearn" element={<CybiLearn />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
