import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Healthcare Facility?
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Reduce administrative workload by 60%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Improve patient satisfaction scores</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Streamline billing and reduce errors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">24/7 technical support included</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
              </div>
              <div>
                <input type="text" placeholder="Hospital/Clinic Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
              </div>
              <div>
                <textarea placeholder="Additional Requirements" rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Request Free Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 