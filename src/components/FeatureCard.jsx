import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100 hover:shadow-lg transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-1 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
} 