import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    features: [
      'Up to 10 users',
      'Basic OPD/IPD',
      'Standard Billing',
      'Email Support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/month',
    features: [
      'Up to 50 users',
      'All modules included',
      'Priority Support',
      'Advanced Analytics',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: '',
    features: [
      'Unlimited users',
      'Custom Integrations',
      'Dedicated Manager',
      '24/7 Phone Support',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center">Simple, Transparent Pricing</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 shadow border transition-all ${plan.highlight ? 'border-primary bg-primary/5 scale-105' : 'border-gray-100 bg-white'}`}
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h2>
              <div className="text-4xl font-extrabold text-primary mb-4">{plan.price}<span className="text-lg font-normal">{plan.period}</span></div>
              <ul className="mb-8 space-y-2">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-white hover:bg-secondary/90'}`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 