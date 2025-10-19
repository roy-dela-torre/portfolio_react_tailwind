import React from 'react';
import Image from 'next/image';
const Contact: React.FC = () => {
  return (
    <section id="contact" className="wrapper mx-auto ">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-cyan-400 font-mono mr-2 text-2xl">04.</span>
        Contact Me
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>

      <div className="flex flex-wrap gap-y-[50px]">
        {/* Left Column: Info */}
        <div className="w-full lg:w-5/12 lg:pe-10">
          <div className="flex flex-col items-center text-center h-full">
            <Image
              src="/assets/img/profile.png"
              alt="Roy De La Torre"
              width={200}
              height={200}
              className="w-100 h-100 rounded-full object-cover mb-6 border-4 border-slate-700 object-top"
            />
            <h3 className="text-2xl font-bold text-slate-100">Roy De La Torre</h3>
            <p className="text-cyan-400 mb-4">WordPress/Shopify Developer</p>
            <p className="text-slate-400 mb-4">
              I am available for freelance work. Connect with me via and call in to my account.
            </p>
            <div className="font-mono text-slate-300">
              Phone: 09533466561
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-7/12 lg:ps-10">
          {/* IMPORTANT: Replace YOUR_FORM_ID with your actual Formspree endpoint */}
          <form action="https://formspree.io/f/movkbjan" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-slate-400 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 p-3 text-slate-100 transition-colors duration-300 shadow-inner" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-slate-400 mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 p-3 text-slate-100 transition-colors duration-300 shadow-inner" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-400 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 p-3 text-slate-100 transition-colors duration-300 shadow-inner" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-slate-400 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" required className="w-full bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 p-3 text-slate-100 transition-colors duration-300 shadow-inner" />
            </div>
            <div>
              <label htmlFor="message" className="block text-slate-400 mb-2">Your Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 p-3 text-slate-100 transition-colors duration-300 shadow-inner"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-cyan-500/30 backdrop-blur-sm border border-cyan-400 text-cyan-300 font-semibold py-3 px-8 rounded-md hover:bg-cyan-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 disabled:bg-slate-600/50 disabled:border-slate-500 disabled:text-slate-400 disabled:cursor-not-allowed">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;