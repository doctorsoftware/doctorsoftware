import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <form
            className="bg-primary/5 rounded-xl p-8 shadow flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input type="text" placeholder="Full Name" required className="px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
            <input type="email" placeholder="Email Address" required className="px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
            <input type="tel" placeholder="Phone Number" required className="px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
            <textarea placeholder="Your Message" rows={4} required className="px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
            <button type="submit" className="bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition">Send Message</button>
            {submitted && <div className="text-green-600 font-medium mt-2">Thank you! We will contact you soon.</div>}
          </form>
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-primary mb-2">Doctor 247 HMS</h2>
              <p className="text-gray-700">123 HealthTech Avenue<br />Bangalore, India<br />PIN 560001</p>
            </div>
            <div>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:info@doctor247hms.com" className="text-primary underline">info@doctor247hms.com</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+911234567890" className="text-primary underline">+91 12345 67890</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 