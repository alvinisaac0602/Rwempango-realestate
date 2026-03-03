import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
        >
          Rwempango
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/realestate">Real Estate</Link>
            </li>
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/agriculture">Agriculture</Link>
            </li>
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/finance">Finance</Link>
            </li>
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-700" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col p-6 space-y-6 text-gray-700 font-medium">
          <li>
            <Link onClick={() => setMobileMenuOpen(false)} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={() => setMobileMenuOpen(false)} to="/realestate">Real Estate</Link>
          </li>
          <li>
            <Link onClick={() => setMobileMenuOpen(false)} to="/agriculture">Agriculture</Link>
          </li>
          <li>
            <Link onClick={() => setMobileMenuOpen(false)} to="/finance">Finance</Link>
          </li>
          <li>
            <Link onClick={() => setMobileMenuOpen(false)} to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;