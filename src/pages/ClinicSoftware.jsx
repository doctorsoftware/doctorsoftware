import React from 'react';
import { FaUserMd, FaNotesMedical, FaCalendarCheck, FaMicrophone, FaVideo, FaDesktop, FaComments, FaFileMedical, FaClinicMedical, FaHeartbeat, FaChartLine, FaSyringe, FaHospitalAlt, FaQuoteLeft } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const benefits = [
  { icon: <FaNotesMedical className="text-blue-600 text-2xl" />, text: 'OPD Management' },
  { icon: <FaUserMd className="text-blue-600 text-2xl" />, text: 'Doctor App' },
  { icon: <FaCalendarCheck className="text-blue-600 text-2xl" />, text: 'Patient Queue & Token System' },
  { icon: <FaMicrophone className="text-blue-600 text-2xl" />, text: 'Voice-to-Text Notes' },
  { icon: <FaVideo className="text-blue-600 text-2xl" />, text: 'Telemedicine' },
  { icon: <FaDesktop className="text-blue-600 text-2xl" />, text: 'Kiosk Mode' },
  { icon: <FaComments className="text-blue-600 text-2xl" />, text: 'Patient Communication' },
  { icon: <FaFileMedical className="text-blue-600 text-2xl" />, text: 'EMR (Electronic Medical Records)' },
];

const features = [
  { icon: <FaNotesMedical />, title: 'Outpatient', description: '' },
  { icon: <FaVideo />, title: 'Telemedicine', description: '' },
  { icon: <FaFileMedical />, title: 'EMR', description: '' },
  { icon: <FaCalendarCheck />, title: 'Queue/Token', description: '' },
  { icon: <FaDesktop />, title: 'Kiosk', description: '' },
  { icon: <FaComments />, title: 'Communication', description: '' },
  { icon: <FaMicrophone />, title: 'Speech-to-text', description: '' },
  { icon: <FaClinicMedical />, title: 'Medical Camp', description: '' },
  { icon: <FaHeartbeat />, title: 'Diabetes Management', description: '' },
  { icon: <FaChartLine />, title: 'Revenue Cycle', description: '' },
  { icon: <FaSyringe />, title: 'Vaccine Management', description: '' },
];

const testimonials = [
  {
    name: 'Sunrise Clinic',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Doctor 247 HMS has transformed our clinic operations. The queue system and EMR are game changers!'
  },
  {
    name: 'Greenleaf Family Practice',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The telemedicine and patient communication tools are seamless. Our patients love the convenience.'
  },
  {
    name: 'City Health Clinic',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'Easy to use, reliable, and packed with features. Highly recommended for any modern clinic.'
  },
];

export default function ClinicSoftware() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-100 to-green-100 py-16 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Best Clinic Management Software</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">Digitize and streamline your clinic operations with advanced tools designed for modern-day practitioners.</p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <span className="text-[7rem] md:text-[10rem]">🏥</span>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Clinic Software?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-lg shadow p-5 border border-blue-100 hover:shadow-lg transition">
              {b.icon}
              <span className="text-gray-800 font-medium text-lg">{b.text}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Feature Highlights */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Feature Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={<span className="text-3xl text-blue-600">{f.icon}</span>} title={f.title} description={f.description} />
          ))}
        </div>
      </section>
      {/* Screenshots Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Clinic Dashboard in Action</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-72 h-44 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-2xl">Screenshot 1</div>
          <div className="w-72 h-44 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-2xl">Screenshot 2</div>
          <div className="w-72 h-44 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-2xl">Screenshot 3</div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clinics Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border border-blue-100 flex flex-col items-center text-center">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
              <FaQuoteLeft className="text-blue-300 text-2xl mb-2" />
              <p className="text-gray-700 mb-4">{t.quote}</p>
              <div className="font-semibold text-blue-700">{t.name}</div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Start managing your clinic efficiently today</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Start Free Trial</Link>
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition">Watch Demo</button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 