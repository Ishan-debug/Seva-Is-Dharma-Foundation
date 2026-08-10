import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Contact from "@/components/contact/Contact";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
      </main>

      <Footer />
      <Contact />
    </>
  );
}