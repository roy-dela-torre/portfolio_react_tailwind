import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Roy De La Torre</title>
        <meta name="description" content="The page you are looking for does not exist." />
        {/* It's important to tell search engines not to index your 404 page */}
        <meta name="robots" content="noindex" />
      </Head>
      <div className="bg-[#000000] flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-9xl font-bold text-cyan-400 mb-4">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-100 mb-8">
            Oops! Page Not Found.
          </h2>
          <p className="text-lg max-w-xl text-slate-400 mb-8">
            It looks like the page you were trying to reach doesn't exist or has been moved.
          </p>
          <Link href="/" legacyBehavior>
            <a className="w-full sm:w-auto text-center inline-block bg-cyan-500/30 backdrop-blur-sm border border-cyan-400 text-cyan-300 font-semibold py-3 px-8 rounded-md hover:bg-cyan-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
              Go Back to Homepage
            </a>
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
