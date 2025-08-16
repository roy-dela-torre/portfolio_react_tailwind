import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <DisclaimerModal />
    </>
  );
}
