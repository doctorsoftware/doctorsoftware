import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-green-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🏥</span>
          <span className="font-bold text-gray-900">Doctor 247 HMS</span>
        </div>
        <nav className="flex flex-wrap gap-4 items-center justify-center">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition">Blog</Link>
          <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition">Terms</Link>
          <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition">Privacy</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition text-xl"><FaLinkedin /></a>
          <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition text-xl"><FaWhatsapp /></a>
        </div>
        <div className="text-gray-500 text-sm text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Doctor 247 HMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 