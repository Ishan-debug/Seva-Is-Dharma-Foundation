import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

import CauseHero from "@/components/causes/CauseHero";
import CauseMission from "@/components/causes/CauseMission";
import CauseActivities from "@/components/causes/CauseActivities";
import CauseCTA from "@/components/causes/CauseCTA";
import CauseStats from "@/components/causes/CauseStats";
import RelatedCauses from "@/components/causes/RelatedCauses";


export default function AnimalWelfarePage() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Our Causes", href: "/causes" },
          { label: "Animal Welfare" },
        ]}
      />

      <CauseHero
        title="Animal Welfare"
        description="Every animal deserves love, protection, and compassionate care. Together we can make a difference."
        image="/images/causes/animal-hero.jpg"
      />

      <CauseMission
        title="Our Mission"
        description="At Seva Is Dharma Foundation, we believe every living being deserves compassion, protection, and dignity. Our mission is to rescue, rehabilitate, and care for abandoned, injured, and homeless animals while promoting kindness and responsible animal welfare in society."
      />

      <CauseActivities
        activities={[
          {
            emoji: "🐾",
            title: "Animal Rescue",
            description:
              "Rescuing injured, abandoned, and homeless animals in need of immediate care.",
          },
          {
            emoji: "🏥",
            title: "Medical Care",
            description:
              "Providing veterinary treatment, vaccinations, and rehabilitation.",
          },
          {
            emoji: "🍖",
            title: "Feeding Programs",
            description:
              "Regular feeding drives for stray and rescued animals.",
          },
          {
            emoji: "🏡",
            title: "Shelter & Rehabilitation",
            description:
              "Creating safe shelters where rescued animals can recover and thrive.",
          },
        ]}
      />
      <CauseStats
  stats={[
    {
      number: "Coming Soon",
      label: "Animals Rescued",
    },
    {
      number: "Coming Soon",
      label: "Animals Fed",
    },
    {
      number: "Coming Soon",
      label: "Medical Treatments",
    },
    {
      number: "Coming Soon",
      label: "Volunteers",
    },
  ]}
/>
      <RelatedCauses current="/causes/animal-welfare" />
      <CauseCTA />

      <Footer />
    </main>
  );
}