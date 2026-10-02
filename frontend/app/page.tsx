import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FreedomFighters from "@/components/FreedomFighters";
import About from "@/components/about/About";
import Causes from "@/components/Causes";
import Impact from "@/components/Impact";
import MissionVision from "@/components/about/MissionVision";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FreedomFighters />
        <About />
        <Causes />
        <Impact />
        <MissionVision />
        <Gallery />
      </main>

      <Footer />
    </>
  );
}