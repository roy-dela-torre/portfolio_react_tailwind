import ShinyText from '@/reacbits/ShinyText/ShinyText';
import React from 'react';
import ElectricBorder from '@/reacbits/ElectricBorder/ElectricBorder';
const wordpressServices: Array<{ title: string; description: string }> = [
  {
    title: 'Theme Development',
    description: 'Creating custom WordPress themes from scratch or modifying existing ones to meet client requirements.',
  },
  {
    title: 'Customization',
    description: 'Customizing WordPress websites, themes, and plugins to align with client branding and design preferences.',
  },
  {
    title: 'Custom Theme Development',
    description: 'Build unique WordPress websites using custom themes tailored to your brand and business needs.',
  },
  {
    title: 'Static Websites',
    description: 'Fast, secure, and easy-to-manage static WordPress sites for portfolios, landing pages, and small businesses.',
  },
  {
    title: 'Dynamic Websites',
    description: 'Fully dynamic WordPress solutions for blogs, e-commerce, membership, and complex business logic.',
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

const shopifyServices: Array<{ title: string; description: string }> = [
  {
    title: 'Theme Customization',
    description: 'Tailoring Shopify themes to perfectly match client branding and design visions. This includes deep layout adjustments using Liquid, advanced CSS styling, and adding custom features with JavaScript. All customizations are fully responsive, ensuring a seamless user experience across all devices, from desktop to mobile.',
  },
  {
    title: 'Store Setup',
    description: 'Expertly setting up new Shopify stores by configuring core settings, adding and managing products, and structuring intuitive collections. This service includes the full integration of payment gateways and the establishment of diverse shipping options, ensuring your e-commerce store is fully operational and ready for business.',
  },
  {
    title: 'Custom Theme Development',
    description: 'Design and develop custom Shopify themes for a unique, branded e-commerce experience.',
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

  <div className="h-full p-6 border border-slate-700 rounded-lg bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h4 className="font-bold text-slate-100 mb-2 text-lg">
      <ShinyText
        text={title}
        disabled={false}
        speed={3}
        className='text-white'
      />
    </h4>
    <ShinyText
      text={description}
      disabled={false}
      speed={3}
      className='text-white'
    />
  </div>


);


const Services: React.FC = () => {
  return (
    <section id="services" className="wrapper mx-auto ">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-cyan-400 font-mono mr-2 text-2xl">02.</span>
        What I Do
        <ElectricBorder
          color="#00BFFF"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
          className='w-full border-top'
        >
        </ElectricBorder>
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
          <div className="flex flex-col lg:grid lg:grid-cols-4 grid-rows-6 gap-5">
            <div className="col-span-2 row-span-3">
              <ServiceCard {...shopifyServices[0]} />
            </div>
            <div className="col-span-2 row-span-3 col-start-1 row-start-4">
              <ServiceCard {...shopifyServices[1]} />
            </div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-1">
              <ServiceCard {...shopifyServices[2]} />
            </div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-3">
              <ServiceCard {...shopifyServices[3]} />
            </div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-5">
              <ServiceCard {...shopifyServices[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;