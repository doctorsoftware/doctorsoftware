import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown, FaBars } from 'react-icons/fa';

const solutions = [
  { to: '/solutions/clinics', label: 'Clinics' },
  { to: '/solutions/hospitals', label: 'Hospitals' },
  { to: '/solutions/specialty-care', label: 'Specialty Care' },
  { to: '/solutions/patients', label: 'Patients' },
  { to: '/solutions/cfo', label: 'CFO' },
  { to: '/solutions/it-manager', label: 'IT Manager' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  // Dropdown open/close handlers
  const handleDropdown = (menu) => setDropdown(dropdown === menu ? null : menu);
  const closeDropdown = () => setDropdown(null);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">🏥</span>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">Doctor 247 HMS</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
              onClick={() => handleDropdown('solutions')}
              onBlur={closeDropdown}
              type="button"
            >
              Solutions <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {dropdown === 'solutions' && (
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded shadow-lg z-40" onMouseLeave={closeDropdown}>
                {solutions.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={closeDropdown}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* Login Link */}
          <NavLink
            to="/login"
            className="px-4 py-2 rounded font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition border border-transparent hover:border-blue-200"
          >
            Login
          </NavLink>
          {/* Book Demo CTA */}
          <NavLink
            to="/contact"
            className="ml-2 px-5 py-2 rounded-lg font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition"
          >
            Book Demo
          </NavLink>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Open menu">
          <FaBars className="w-6 h-6 text-blue-600" />
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="flex flex-col px-4 py-2 space-y-2">
            {/* Solutions Dropdown */}
            <div>
              <button
                className="flex items-center gap-1 w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
                onClick={() => handleDropdown('solutions')}
                type="button"
              >
                Solutions <FaChevronDown className="text-xs mt-0.5" />
              </button>
              {dropdown === 'solutions' && (
                <div className="ml-4 mt-1">
                  {solutions.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="block px-2 py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => { closeDropdown(); setOpen(false); }}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            {/* Login Link */}
            <NavLink
              to="/login"
              className="block py-2 px-2 rounded text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Login
            </NavLink>
            {/* Book Demo CTA */}
            <NavLink
              to="/contact"
              className="block py-2 px-2 rounded-lg font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition"
              onClick={() => setOpen(false)}
            >
              Book Demo
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
} 