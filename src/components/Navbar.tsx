"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ShinyText from "@/animation/ShinyText/ShinyText";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-900'
    }`}>
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold">
            Chusie Kokoro
          </Link>
          
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <div className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-gray-900 lg:block lg:static lg:w-auto lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 p-4 lg:p-0">
              <li>
                <Link 
                  href="#home" 
                  className="block py-2 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShinyText text="Home" disabled={false} speed={3} className="custom-class" />
                </Link>
              </li>
              <li>
                <Link 
                  href="#featured" 
                  className="block py-2 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShinyText text="Featured" disabled={false} speed={3} className="custom-class" />
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="block py-2 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShinyText text="Projects" disabled={false} speed={3} className="custom-class" />
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact_us" 
                  className="block py-2 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShinyText text="Contact Us" disabled={false} speed={3} className="custom-class" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
