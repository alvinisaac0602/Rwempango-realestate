import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Rwempango</h2>
          <p className="text-gray-400">
            Providing loans, wealth management, insurance, and financial solutions for individuals, groups, and small institutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/realestate" className="hover:text-white transition-colors">Realestate</a></li>
            <li><a href="/agriculture" className="hover:text-white transition-colors">Agriculture</a></li>
            <li><a href="/finance" className="hover:text-white transition-colors">Finance</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p>Email: info@rwempango.com</p>
          <p>Phone: +256 700 000 000</p>
          <p>Address: Kampala, Uganda</p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-2">Get the latest updates and offers</p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-900"
            />
            <button 
              type="submit" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6 text-gray-400">
        <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
        <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
        <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Rwempango. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer