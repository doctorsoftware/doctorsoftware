import React from "react";

const SolutionCard = ({ title, icon, description }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default SolutionCard; 