export default function Features() {
  const features = [
    {
      title: "Theme Development",
      description: "Creating custom WordPress themes from scratch or modifying existing ones to meet client requirements.",
    },
    {
      title: "Customization",
      description: "Customizing WordPress websites, themes, and plugins to align with client branding and design preferences.",
    },
    {
      title: "Website Maintenance",
      description: "Providing ongoing maintenance and updates to WordPress websites, including troubleshooting issues and optimizing performance.",
    },
    {
      title: "Content Management",
      description: "Setting up and configuring content management systems, including organizing site content, creating menus, and managing media.",
    },
    {
      title: "SEO Optimization",
      description: "Implementing SEO best practices to improve website visibility and search engine rankings.",
    },
    {
      title: "Performance Optimization",
      description: "Optimizing website speed and performance through techniques such as caching, image optimization, and code optimization.",
    },
    {
      title: "Security",
      description: "Implementing security measures to protect WordPress websites from vulnerabilities, malware, and hacking attempts.",
    },
    {
      title: "Responsive Design",
      description: "Ensuring websites are mobile-friendly and responsive across various devices and screen sizes.",
    },
    {
      title: "Integration",
      description: "Integrating third-party services, APIs, and tools with WordPress websites to extend functionality and streamline workflows.",
    },
    {
      title: "Theme Customization",
      description: "Customizing Shopify themes to match client branding and design requirements, including layout adjustments, styling changes, and adding custom features.",
    },
    {
      title: "Store Setup",
      description: "Setting up Shopify stores, configuring settings, adding products, organizing collections, and setting up payment gateways and shipping options.",
    },
    {
      title: "Integration",
      description: "Integrating Shopify stores with third-party services and platforms, such as payment gateways, shipping carriers, marketing tools, and inventory management systems.",
    },
    {
      title: "Store Maintenance",
      description: "Providing ongoing maintenance and updates to Shopify stores, including troubleshooting issues, updating content, and managing store settings.",
    },
    {
      title: "Responsive Design",
      description: "Ensuring Shopify stores are responsive and mobile-friendly, providing a seamless shopping experience across devices.",
    },
  ];

  return (
    <section id="featured" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-lg font-medium">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">What I Do</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
