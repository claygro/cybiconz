import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="bg-[#050A18] text-white min-h-screen font-sans selection:bg-teal-500/30">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
