import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../public/logo.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="w-12 h-12 mr-2 rounded-full"
          />
          {/* <span className="text-xl font-bold hidden sm:block">Artist Logo</span> */}
        </div>

        {/* Navigation Links for Large Screens */}
        <ul className="hidden sm:flex gap-8 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-yellow-500">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Facebook Link */}
        <a
          href="https://facebook.com/your-profile-id"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block text-blue-500 hover:text-blue-400"
        >
          <FaFacebook size={24} />
        </a>
       

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <ul className="sm:hidden bg-gray-700 text-center text-lg">
          <li className="py-2 border-b border-gray-600">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="py-2 border-b border-gray-600">
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li className="py-2 border-b border-gray-600">
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="py-2">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="py-2">
            <a
              href="https://www.facebook.com/share/17yKCjxsrc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              Facebook
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
