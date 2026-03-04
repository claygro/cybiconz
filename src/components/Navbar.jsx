import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050A18]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          CYBICON<span className="text-[#00FF8E]">Z</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#00FF8E] transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#00FF8E] transition">
            About
          </Link>
          <Link to="/service" className="hover:text-[#00FF8E] transition">
            Services
          </Link>

          <div className="relative group">
            <button className="flex items-center hover:text-[#00FF8E] py-4 transition">
              Platforms <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute hidden group-hover:block top-full left-0 bg-[#0A1128] border border-white/10 p-2 w-48 rounded-lg shadow-2xl">
              <Link
                to="/cybilearn"
                className="block px-4 py-2 hover:bg-white/5 rounded"
              >
                CybiLearn
              </Link>
              <a
                href="###"
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-2 hover:bg-white/5 rounded"
              >
                ShoppingGhar
              </a>
            </div>
          </div>
          <Link to="/team" className="hover:text-[#00FF8E] transition">
            Meet team
          </Link>
          <Link to="/community" className="hover:text-[#00FF8E] transition">
            Community
          </Link>
          <Link
            to="/contact"
            className="bg-[#00FF8E] text-[#005730] px-6 py-2.5 rounded-full hover:bg-[#00ca6f] transition"
          >
            Start a Project
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1128] border-b border-white/10 px-6 py-8 space-y-4">
          <Link
            to="/"
            className="block text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/service"
            className="block text-lg"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/cybilearn"
            className="block text-lg font-bold text-[#00FF8E]"
            onClick={() => setIsOpen(false)}
          >
            CybiLearn
          </Link>
          <Link
            to="/team"
            className="block text-lg"
            onClick={() => setIsOpen(false)}
          >
            Meet team
          </Link>
          <Link
            to="/community"
            className="block text-lg"
            onClick={() => setIsOpen(false)}
          >
            Community
          </Link>
          <Link
            to="/contact"
            className="block bg-teal-500 text-center py-3 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
