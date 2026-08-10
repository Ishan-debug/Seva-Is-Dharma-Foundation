import Footer from "@/components/Footer";
import CauseHero from "@/components/causes/CauseHero";
import CauseMission from "@/components/causes/CauseMission";
import CauseActivities from "@/components/causes/CauseActivities";
import CauseCTA from "@/components/causes/CauseCTA";

export default function EnvironmentPage() {
  return (
    <main>
      <CauseHero
        title="Environment Protection"
        description="Protecting the environment is protecting our future. Together, we can create cleaner cities, healthier ecosystems, and a sustainable planet for generations to come."
        image="/images/causes/environment-hero.jpg"
      />

      <CauseMission
        title="Our Mission"
        description="Our mission is to preserve and restore the environment through awareness campaigns, cleanliness drives, waste management initiatives, and sustainable living practices. Every small action contributes to a healthier Earth."
      />

      <CauseActivities
        activities={[
          {
            emoji: "♻️",
            title: "Waste Management",
            description:
              "Promoting recycling, proper waste segregation, and responsible disposal practices.",
          },
          {
            emoji: "🧹",
            title: "Cleanliness Drives",
            description:
              "Organizing community clean-up events in parks, rivers, villages, and public spaces.",
          },
          {
            emoji: "🌍",
            title: "Environmental Awareness",
            description:
              "Educating communities about climate change, pollution, and environmental conservation.",
          },
          {
            emoji: "🌿",
            title: "Sustainable Living",
            description:
              "Encouraging eco-friendly habits that help protect natural resources for future generations.",
          },
        ]}
      />

      <CauseCTA />

      <Footer />
    </main>
  );
}