import React from 'react';

const wordpressServices = [
  {
    title: 'Theme Development',
    description: 'Creating custom WordPress themes from scratch or modifying existing ones to meet client requirements.',
  },
  {
    title: 'Customization',
    description: 'Customizing WordPress websites, themes, and plugins to align with client branding and design preferences.',
  },
  {
    title: 'Website Maintenance',
    description: 'Providing ongoing maintenance and updates, including troubleshooting issues and optimizing performance.',
  },
  {
    title: 'Content Management',
    description: 'Setting up and configuring content management systems, including organizing site content, creating menus, and managing media.',
  },
  {
    title: 'SEO Optimization',
    description: 'Implementing SEO best practices to improve website visibility and search engine rankings.',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing website speed and performance through techniques such as caching, image optimization, and code optimization.',
  },
  {
    title: 'Security',
    description: 'Implementing security measures to protect WordPress websites from vulnerabilities, malware, and hacking attempts.',
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring websites are mobile-friendly and responsive across various devices and screen sizes.',
  },
  {
    title: 'Integration',
    description: 'Integrating third-party services, APIs, and tools with WordPress websites to extend functionality and streamline workflows.',
  }
];

const shopifyServices = [
  {
    title: 'Theme Customization',
    description: 'Customizing Shopify themes to match client branding and design requirements, including layout adjustments, styling changes, and adding custom features.',
  },
  {
    title: 'Store Setup',
    description: 'Setting up Shopify stores, configuring settings, adding products, organizing collections, and setting up payment gateways and shipping options.',
  },
  {
    title: 'Integration',
    description: 'Integrating Shopify stores with third-party services and platforms, such as payment gateways, shipping carriers, marketing tools, and inventory management systems.',
  },
  {
    title: 'Store Maintenance',
    description: 'Providing ongoing maintenance and updates to Shopify stores, including troubleshooting issues, updating content, and managing store settings.',
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring Shopify stores are responsive and mobile-friendly, providing a seamless shopping experience across devices.',
  }
];

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300 h-full">
    <h4 className="font-bold text-slate-100 mb-2 text-lg">{title}</h4>
    <p className="text-slate-400">{description}</p>
  </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="wrapper mx-auto ">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-cyan-400 font-mono mr-2 text-2xl">02.</span>
        What I Do
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>

      <div className="space-y-16">
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">WordPress Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wordpressServices.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">Shopify Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopifyServices.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;