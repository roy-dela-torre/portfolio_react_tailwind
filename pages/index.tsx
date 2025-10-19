import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Head>
                <title>Roy De La Torre | Expert WordPress, Shopify & Frontend Developer</title>
                <meta name="description" content="Experienced web developer specializing in custom WordPress and Shopify themes. Let's build user-friendly and accessible digital experiences together." />
                <meta name="keywords" content="WordPress Developer, Shopify Developer, Frontend Developer, Roy De La Torre, Web Developer, Custom Themes, Web Applications" />
                <meta name="author" content="Roy De La Torre" />
                <meta property="og:title" content="Roy De La Torre | Expert WordPress, Shopify & Frontend Developer" />
                <meta property="og:description" content="Experienced web developer specializing in custom WordPress and Shopify themes. Let's build user-friendly and accessible digital experiences together." />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
            </Head>
            <div className="bg-[#000000]">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}
