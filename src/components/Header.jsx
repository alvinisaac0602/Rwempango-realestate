import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-50 shadow-md px-6 py-4 flex items-center justify-between relative">
      {/* Left: Logo / Site Name */}
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-bold text-gray-900">Rwempango</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 border-l border-gray-300 pl-6 text-gray-700 font-medium">
          <li>
            <Link className="hover:text-gray-900 transition-colors" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-gray-900 transition-colors" to="/realestate">Real estate</Link>
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
      <div className="md:hidden flex items-center">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <HiX className="w-6 h-6 text-gray-700" />
          ) : (
            <HiMenu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-medium border-t border-gray-200">
            <li>
              <Link onClick={() => setMobileMenuOpen(false)} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={() => setMobileMenuOpen(false)} to="/realestate">Realestate</Link>
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
      )}
    </header>
  )
}

export default Header