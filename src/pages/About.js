import React from 'react';

export default function About() {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">About Doctor 247 HMS</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Doctor 247 HMS is a leading SaaS platform designed to empower hospitals, clinics, and healthcare providers with modern, cloud-based management tools. Our mission is to simplify healthcare operations, improve patient outcomes, and enable digital transformation for healthcare organizations of all sizes.
        </p>
        <div className="bg-primary/5 rounded-xl p-8 shadow text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To deliver secure, scalable, and user-friendly hospital management solutions that drive efficiency, transparency, and better care for all.
          </p>
          <h3 className="text-xl font-semibold text-primary mb-2">Our Values</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Innovation in healthcare technology</li>
            <li>✔ Commitment to data security and privacy</li>
            <li>✔ Customer-centric support and service</li>
            <li>✔ Continuous improvement and learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 