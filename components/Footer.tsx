import React from 'react';
import { GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="wrapper mx-auto px-6 py-10 text-center text-slate-400">
      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://www.facebook.com/chusiekokoro" className="hover:text-cyan-400 transition-colors" aria-label="Roy De La Torre's Facebook Profile"><FacebookIcon className="w-6 h-6" /></a>
        <a href="https://www.instagram.com/kaitto1425/" className="hover:text-cyan-400 transition-colors" aria-label="Roy De La Torre's Instagram Profile"><InstagramIcon className="w-6 h-6" /></a>
        <a href="https://www.linkedin.com/in/roy-dela-torre-6518b11b9/" className="hover:text-cyan-400 transition-colors" aria-label="Roy De La Torre's LinkedIn Profile"><LinkedInIcon className="w-6 h-6" /></a>
        <a href="https://github.com/roy-dela-torre" className="hover:text-cyan-400 transition-colors" aria-label="Roy De La Torre's GitHub Profile"><GithubIcon className="w-6 h-6" /></a>
      </div>
      <p className="text-sm font-mono">@ {new Date().getFullYear()} Roy De La Torre. Built with React & Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;