import Navbar from "@/components/Navbar";
import Volunteer from "@/components/Volunteer";
import Footer from "@/components/Footer";

export default function VolunteerPage() {
  return (
    <>
      <Navbar />

      <main>
        <Volunteer />
      </main>

      <Footer />
    </>
  );
}