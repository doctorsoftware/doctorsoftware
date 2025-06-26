import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-green-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🏥</span>
          <span className="font-bold text-gray-900">Doctor 247 HMS</span>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link to="/features" className="text-gray-600 hover:text-blue-600 transition">Features</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
        </nav>
        <div className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Doctor 247 HMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 