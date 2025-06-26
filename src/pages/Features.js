import React from 'react';

const features = [
  { icon: '🗂️', title: 'OPD Management', desc: 'Outpatient registration, visit tracking, and billing.' },
  { icon: '🏥', title: 'IPD Management', desc: 'Inpatient admission, bed allocation, discharge, and billing.' },
  { icon: '💳', title: 'Billing & Insurance', desc: 'Automated billing, insurance claims, and payment tracking.' },
  { icon: '💊', title: 'Pharmacy', desc: 'Inventory, dispensing, and purchase management.' },
  { icon: '🧪', title: 'Laboratory', desc: 'Test orders, results, and lab inventory.' },
  { icon: '📅', title: 'Appointments', desc: 'Doctor and patient scheduling, reminders, and calendar.' },
  { icon: '📄', title: 'EMR', desc: 'Electronic Medical Records for all patients.' },
  { icon: '📦', title: 'Inventory', desc: 'Stock management for all hospital supplies.' },
  { icon: '👩‍⚕️', title: 'HR & Payroll', desc: 'Staff management, attendance, and payroll.' },
  { icon: '📊', title: 'Reports & Analytics', desc: 'Comprehensive, real-time reporting for all modules.' },
];

export default function Features() {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center">All-in-One HMS Modules</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-primary/5 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h2 className="font-semibold text-lg mb-1 text-gray-900">{f.title}</h2>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 