import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      name: "Divine King",
      description: "Discover the leading Chemical Company in the Philippines for Organic Chemicals and Modern Pest Control Equipment in Divine King. Click here to see our offerings!",
      image: "/portfolio/divineking.jpg",
      url: "https://divineking.com/",
    },
    {
      name: "firstfilbio",
      description: "Discover top-quality veterinary pharmaceutical products and diagnostic services for poultry and swine at First Fil-Bio. Click here!",
      image: "/portfolio/firstfilbio.jpg",
      url: "https://firstfilbio.com/",
    },
    {
      name: "Actuate builder",
      description: "ACTUATE Builders Inc. or \"ABI\" is a one-stop shop Design and Build Firm providing Architectural Design and Construction Services throughout the Philippines, and is also a \"PropTech\" Property Technology Provider.",
      image: "/portfolio/actuate_builder.jpg",
      url: "https://abi-ph.com/",
    },
    {
      name: "Bonavita",
      description: "Bonavita Philippines aims to improve people's way of life and give people the opportunity to do good work as well. Interested?",
      image: "/portfolio/bonavita.jpg",
      url: "https://bonavita.ph/",
    },
    {
      name: "TCT",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptates quam veritatis nostrum nesciunt dolor minima alias, illo qui recusandae.",
      image: "/portfolio/tcg.jpg",
      url: "https://tcg.ph/",
    },
    {
      name: "PDAX",
      description: "Buy, sell, and trade the world's top cryptocurrencies at competitive market rates.",
      image: "/portfolio/pdax.jpg",
      url: "https://pdax.ph/",
    },
    {
      name: "Ocfireworks",
      description: "Buy wholesale fireworks online At Overstock Central Fireworks: America's Fireworks Superstore. Free shipping and financing available. Come shop at our retail store in Mishawaka, Indiana!",
      image: "/portfolio/ocfireworks.jpg",
      url: "https://ocfireworks.innovnational.com/",
    },
    {
      name: "Mosaic Solution",
      description: "Find the top POS supplier in the Philippines for your business needs. Get reliable, efficient, and affordable point-of-sale solutions today!",
      image: "/portfolio/mosaic.jpg",
      url: "https://www.mosaic-solutions.com/",
    },
    {
      name: "Flasked",
      description: "Quench your thirst with Flasked's wide selection of alcoholic and non-alcoholic beverages with the best prices and instant delivery.",
      image: "/portfolio/flasked.jpg",
      url: "https://www.flasked.ph/",
    },
    {
      name: "Chevrolet Cars, Crossovers and SUVs Philippines",
      description: "Welcome to the The Covenant Car Company, Inc., the exclusive importer and distributor of Chevrolet vehicles and parts in the Philippines!",
      image: "/portfolio/chevrolet.jpg",
      url: "https://chevrolet.com.ph/",
    },
    {
      name: "Shang Summit | Luxury Condo in Quezon City",
      description: "Shang Summit: luxury living in South Triangle, Quezon City with soaring panoramic views, exquisite interiors, and world-class amenities.",
      image: "/portfolio/shang-summit.jpg",
      url: "https://shangsummit.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-lg font-medium">Visit my portfolio and keep your feedback</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">My Portfolio</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-white transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
