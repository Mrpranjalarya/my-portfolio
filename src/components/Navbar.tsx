import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-yellow-400 text-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Left - Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-gray-800" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-gray-800" />
          </a>
        </div>

        {/* Right - Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <a href="#about" className="hover:text-gray-800">About</a>
          <a href="#education" className="hover:text-gray-800">Education</a>
          <a href="#skills" className="hover:text-gray-800">Skills</a>
          <a href="#projects" className="hover:text-gray-800">Projects</a>
          <a href="#certificates" className="hover:text-gray-800">Certificates</a>
          <a href="#contact" className="hover:text-gray-800">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-400 px-6 py-4 space-y-3 text-lg font-medium">
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-gray-800">About</a>
          <a href="#education" onClick={() => setIsOpen(false)} className="block hover:text-gray-800">Education</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-gray-800">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-gray-800">Projects</a>
          <a href="#certificates" onClick={() => setIsOpen(false)} className="block hover:text-gray-800">Certificates</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-gray-800">Contact</a>
        </div>
      )}
    </nav>
  );
}
