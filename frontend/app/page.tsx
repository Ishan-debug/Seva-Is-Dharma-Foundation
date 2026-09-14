import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FreedomFighters from "@/components/FreedomFighters";
import About from "@/components/about/About";
import Causes from "@/components/Causes";
import Impact from "@/components/Impact";
import MissionVision from "@/components/about/MissionVision";
import Gallery from "@/components/Gallery";
import Volunteer from "@/components/Volunteer";
import Donation from "@/components/Donation";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Remembering Our Freedom Fighters */}
        <FreedomFighters />

        {/* About Foundation */}
        <About />

        {/* Our Causes */}
        <Causes />

        {/* Our Impact */}
        <Impact />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Gallery */}
        <Gallery />

        {/* Volunteer */}
        <Volunteer />

        {/* Donation */}
        <Donation />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}