import React from 'react';

const pricingData = [
  {
    category: 'WordPress Development',
    plans: [
      {
        title: 'Informational Site',
        price: '$1,500',
        features: [
          'Custom Theme',
          'Static Content',
          'Responsive Design',
          'Contact Form',
        ],
      },
      {
        title: 'Dynamic Content Site',
        price: '$2,500',
        features: [
          'All features of Informational Site',
          'Blog/Portfolio Integration',
          'Content Management System',
        ],
      },
      {
        title: 'E-commerce Site',
        price: '$4,000',
        features: [
          'All features of Dynamic Content Site',
          'WooCommerce Integration',
          'Payment Gateway Setup',
        ],
      },
    ],
  },
  {
    category: 'Shopify Development',
    plans: [
      {
        title: 'Informational Site',
        price: '$1,200',
        features: [
          'Custom Theme',
          'Static Content',
          'Responsive Design',
        ],
      },
      {
        title: 'Dynamic Content Site',
        price: '$2,200',
        features: [
          'All features of Informational Site',
          'Blog/Portfolio Integration',
          'Content Management System',
        ],
      },
      {
        title: 'E-commerce Site',
        price: '$3,500',
        features: [
          'All features of Dynamic Content Site',
          'Shopify Payments Setup',
          'Product Page Customization',
        ],
      },
    ],
  },
];

const PricingSection: React.FC = () => (
  <section id="pricing" className="wrapper mx-auto py-16">
    <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">Pricing</h2>
    <div className="space-y-16">
      {pricingData.map((category) => (
        <div key={category.category}>
          <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.plans.map((plan) => (
              <div key={plan.title} className="p-6 border border-slate-700 rounded-lg bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="font-bold text-slate-100 mb-2 text-lg">{plan.title}</h4>
                <div className="text-cyan-400 text-3xl font-extrabold mb-4">Starting at {plan.price}</div>
                <ul className="text-slate-200 space-y-2 mb-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PricingSection;
