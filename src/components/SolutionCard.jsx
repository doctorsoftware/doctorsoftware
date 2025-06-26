import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function SolutionCard({ title, icon, modules }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow p-6 border border-blue-100 hover:shadow-lg transition flex flex-col">
      <button
        className="flex items-center justify-between w-full focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl text-blue-600">{icon}</span>
          <span className="font-semibold text-lg text-gray-900">{title}</span>
        </div>
        <FaChevronDown className={`ml-2 text-gray-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <ul className="pl-2 space-y-2">
          {modules.map((mod, i) => (
            <li key={i} className="text-gray-700 text-base flex items-center gap-2">
              <span className="text-blue-400">•</span> {mod}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 