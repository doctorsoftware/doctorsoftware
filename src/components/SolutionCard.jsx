import React from 'react';

const SolutionCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="text-blue-600 text-3xl mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  );
};

export default SolutionCard; 