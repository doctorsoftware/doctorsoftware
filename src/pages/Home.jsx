import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

const features = [
  {
    icon: '👨‍⚕️',
    title: 'Patient Management',
    description: 'Seamless patient registration, records, and appointment scheduling for multispeciality hospitals.'
  },
  {
    icon: '💊',
    title: 'Pharmacy Module',
    description: 'Integrated pharmacy management for inventory, dispensing, and billing.'
  },
  {
    icon: '📊',
    title: 'Reporting & Analytics',
    description: 'Real-time dashboards and downloadable reports for all hospital operations.'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 font-sans drop-shadow">Doctor 247 HMS</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-sans">Modern, cloud-based Multispeciality Hospital Management Software. Streamline patient care, operations, and analytics with our all-in-one SaaS platform.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/pricing" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Start Free Trial</Link>
          <Link to="/contact" className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition">Contact Us</Link>
        </div>
        <div className="text-7xl mb-8">🏥</div>
      </section>
      {/* Features Grid */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 