import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Contact from '../components/Contact';

const GitHubCalendarSection = dynamic(() => import('../components/GitHubCalendarSection'), { ssr: false });

export default function Home() {
    return (
        <>
            <Head>
                <title>Roy De La Torre | Expert WordPress, Shopify & Frontend Developer</title>
                <meta name="description" content="Experienced web developer specializing in custom WordPress and Shopify themes. Let's build user-friendly and accessible digital experiences together." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="WordPress Developer, Shopify Developer, Frontend Developer, Roy De La Torre, Web Developer Philippines, Custom Themes, Web Applications, Full Stack Developer, Chuseikokoro, Ory Chusie Kokoro" />
                <meta name="author" content="Roy De La Torre" />
                <meta property="og:title" content="Roy De La Torre | Expert WordPress, Shopify & Frontend Developer" />
                <meta property="og:description" content="Experienced web developer specializing in custom WordPress and Shopify themes. Let's build user-friendly and accessible digital experiences together." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://chuseikokoro.com/" />
                <meta property="og:image" content="https://chuseikokoro.com/assets/img/profile.png" />
                <meta property="og:image:alt" content="Roy De La Torre - Web Developer" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Roy De La Torre | Expert WordPress, Shopify & Frontend Developer" />
                <meta name="twitter:description" content="Experienced web developer specializing in custom WordPress and Shopify themes. Let's build user-friendly and accessible digital experiences together." />
                <meta name="twitter:image" content="https://chuseikokoro.com/assets/img/profile.png" />
                <meta name="robots" content="index, follow" />
                <meta name="google-site-verification" content="TdXwXXNQuSXWCQYOaYztUeBEdr7HPVdEp2EIdMMoEuA" />
                <link rel="canonical" href="https://chuseikokoro.com/" />
                <link rel="icon" href="/assets/img/favicon.png" />
                <link rel="preload" as="image" href="/assets/img/profile.png" />

                {/* 2. ALL SCRIPT TAGS HAVE BEEN MOVED OUT OF <Head> */}
            </Head>

            {/* Schema.org structured data */}
            <Script
                id="schema-org-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Roy De La Torre",
                        "url": "https://chuseikokoro.com",
                        "jobTitle": "WordPress & Shopify Developer",
                        "description": "Experienced web developer specializing in custom WordPress and Shopify themes.",
                        "knowsAbout": [
                            "WordPress Development",
                            "Shopify Development",
                            "Frontend Development",
                            "Web Development",
                            "Custom Theme Development",
                            "E-commerce Solutions"
                        ],
                        "sameAs": [
                            "https://github.com/roy-dela-torre"
                        ],
                        "offers": {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Web Development Services",
                                "serviceType": [
                                    "WordPress Development",
                                    "Shopify Development",
                                    "Custom Theme Development",
                                    "E-commerce Solutions"
                                ]
                            }
                        }
                    })
                }}
            />
            <Script
                id="schema-org-organization"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Chuseikokoro",
                        "url": "https://chuseikokoro.com/",
                        "logo": "https://chuseikokoro.com/assets/img/favicon.png"
                    })
                }}
            />

            {/* 3. ADD YOUR SCRIPT TAGS HERE, USING THE <Script> COMPONENT */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-3P74E73EKG"
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-3P74E73EKG');
                `}
            </Script>

            <div className="bg-[#060010]">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <PricingSection />
                    <Projects />
                    <GitHubCalendarSection />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}