import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Courses", "About", "Contact"];

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          📚 <span className="text-yellow-300">Edu</span>Tech
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-yellow-300 transition-colors">{link}</a>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-yellow-400 text-indigo-900 font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 text-sm">
          Get Started
        </button>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-indigo-800 px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm font-medium pt-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="block hover:text-yellow-300">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;