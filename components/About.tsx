import React from 'react';

const About: React.FC = () => {
  const skills = ['WordPress', 'Shopify', 'PHP', 'Liquid', 'React', 'WooCommerce', 'Tailwind CSS', 'JavaScript', 'Python', 'Git', 'HTML5', 'CSS3', 'REST APIs', 'Figma', 'Hosting Platforms', 'Server Management', 'SEO Best Practices'];

  return (
    <section id="about" className="wrapper mx-auto ">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-cyan-400 font-mono mr-2 text-2xl">01.</span>
        About Me
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <div className="grid grid-cols-1">
        <div className="text-slate-400 space-y-4 text-lg">
          <p>
            Hello! I'm Roy, a web developer with a passion for creating powerful and beautiful websites. My expertise lies in the WordPress and Shopify ecosystems, where I enjoy the challenge of building custom solutions to meet unique client needs.
          </p>
          <p>
            My journey into web development began with a curiosity for how websites worked, which quickly evolved into a career. Whether it's crafting a pixel-perfect theme from scratch or extending functionality with custom plugins, I am dedicated to delivering high-quality, performant products.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-2 text-slate-300">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="text-cyan-400 mr-2">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;