import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight font-sans">
              Doctor 247 HMS
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-sans">
              Modern, cloud-based Hospital Management Software for OPD, IPD, Billing, Pharmacy, Lab, Reports, and more. Empower your healthcare facility with seamless, secure, and scalable SaaS.
            </p>
            <div className="flex gap-4">
              <Link to="/pricing" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">View Pricing</Link>
              <Link to="/contact" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-secondary/90 transition">Request Demo</Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center border border-primary/20">
              <span className="text-7xl mb-4">🏥</span>
              <div className="text-primary font-bold text-2xl mb-2">All-in-One HMS</div>
              <div className="text-gray-500 text-center">For Hospitals, Clinics, Labs &amp; More</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Key Features</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-primary/5 p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl mb-2">🗂️</div>
              <h3 className="font-semibold text-lg mb-1">OPD &amp; IPD Management</h3>
              <p className="text-gray-600 text-sm">Seamless patient registration, admission, and discharge workflows.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl mb-2">💳</div>
              <h3 className="font-semibold text-lg mb-1">Billing &amp; Insurance</h3>
              <p className="text-gray-600 text-sm">Automated billing, insurance claims, and payment tracking.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl mb-2">🧪</div>
              <h3 className="font-semibold text-lg mb-1">Lab &amp; Pharmacy</h3>
              <p className="text-gray-600 text-sm">Integrated lab test management and pharmacy inventory.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-lg mb-1">Reports &amp; Analytics</h3>
              <p className="text-gray-600 text-sm">Real-time dashboards and downloadable reports for all modules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to transform your hospital management?</h2>
          <p className="text-gray-700 mb-6">Contact us for a free demo and see how Doctor 247 HMS can streamline your operations.</p>
          <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow hover:bg-primary/90 transition">Get Started</Link>
        </div>
      </section>
    </div>
  );
} 