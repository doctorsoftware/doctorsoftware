import React from 'react';
import { FaUserMd, FaProcedures, FaFileMedical, FaPills, FaCalendarCheck, FaFlask, FaFileInvoiceDollar, FaBoxes, FaListOl, FaXRay, FaVideo, FaChartBar, FaTint, FaUserNurse, FaTools } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

const modules = [
  { icon: <FaUserMd />, title: 'OPD', description: 'Outpatient management for registration, visits, and billing.' },
  { icon: <FaProcedures />, title: 'IPD', description: 'Inpatient admission, bed management, and discharge workflows.' },
  { icon: <FaFileMedical />, title: 'EMR/EHR', description: 'Electronic Medical Records for all patient data and history.' },
  { icon: <FaPills />, title: 'Pharmacy', description: 'Integrated pharmacy inventory, dispensing, and billing.' },
  { icon: <FaCalendarCheck />, title: 'Appointment Booking', description: 'Online and in-person appointment scheduling and reminders.' },
  { icon: <FaFlask />, title: 'Lab Management (LIS)', description: 'Lab test orders, results, and reporting.' },
  { icon: <FaFileInvoiceDollar />, title: 'Billing & Invoicing', description: 'Automated billing, insurance, and payment tracking.' },
  { icon: <FaBoxes />, title: 'Inventory', description: 'Stock management for medicines, consumables, and assets.' },
  { icon: <FaListOl />, title: 'Queue/Token', description: 'Queue and token management for patient flow.' },
  { icon: <FaXRay />, title: 'Radiology', description: 'Radiology module for imaging orders and results.' },
  { icon: <FaVideo />, title: 'Teleconsultation', description: 'Secure video consultations and remote care.' },
  { icon: <FaChartBar />, title: 'Reports & Analytics', description: 'Comprehensive analytics and downloadable reports.' },
  { icon: <FaTint />, title: 'Blood Bank', description: 'Blood bank inventory and donor management.' },
  { icon: <FaUserNurse />, title: 'Nurse/Ward', description: 'Nursing and ward management tools.' },
  { icon: <FaTools />, title: 'Asset Management', description: 'Track and manage hospital assets and equipment.' },
];

export default function Modules() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <section className="py-16 flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">All Modules</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {modules.map((mod, i) => (
              <FeatureCard key={i} icon={<span className="text-3xl text-blue-600">{mod.icon}</span>} title={mod.title} description={mod.description} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 