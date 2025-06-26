import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const solutions = [
  { to: '/solutions/hospitals', label: 'Hospitals' },
  { to: '/solutions/labs', label: 'Labs' },
  { to: '/solutions/pharmacies', label: 'Pharmacies' },
  { to: '/solutions/radiology', label: 'Radiology' },
  { to: '/solutions/nursing-homes', label: 'Nursing Homes' },
  { to: '/solutions/doctor-practices', label: 'Doctor Practices' },
];

const industries = [
  { to: '/industries/general', label: 'General Hospital' },
  { to: '/industries/eye', label: 'Eye Hospital' },
  { to: '/industries/dental', label: 'Dental' },
  { to: '/industries/specialty', label: 'Specialty' },
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
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded shadow-lg z-40" onMouseLeave={closeDropdown}>
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
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
              onClick={() => handleDropdown('industries')}
              onBlur={closeDropdown}
              type="button"
            >
              Industries <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {dropdown === 'industries' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded shadow-lg z-40" onMouseLeave={closeDropdown}>
                {industries.map(link => (
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
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive ? 'text-blue-600' : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Open menu">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="flex flex-col px-4 py-2 space-y-2">
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
            <div>
              <button
                className="flex items-center gap-1 w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
                onClick={() => handleDropdown('industries')}
                type="button"
              >
                Industries <FaChevronDown className="text-xs mt-0.5" />
              </button>
              {dropdown === 'industries' && (
                <div className="ml-4 mt-1">
                  {industries.map(link => (
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
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block py-2 px-2 rounded text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive ? 'text-blue-600' : ''}`
                }
                onClick={() => setOpen(false)}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 