import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
        >
          Rwempango
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/realestate">
                Real Estate
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/agriculture">
                Agriculture
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/finance">
                Finance
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-900 transition-colors" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
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

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-md">
          <ul className="flex flex-col px-4 pb-6 space-y-4 text-gray-700 font-medium">
            <li>
              <Link onClick={() => setMobileMenuOpen(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setMobileMenuOpen(false)} to="/realestate">
                Real Estate
              </Link>
            </li>
            <li>
              <Link onClick={() => setMobileMenuOpen(false)} to="/agriculture">
                Agriculture
              </Link>
            </li>
            <li>
              <Link onClick={() => setMobileMenuOpen(false)} to="/finance">
                Finance
              </Link>
            </li>
            <li>
              <Link onClick={() => setMobileMenuOpen(false)} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;