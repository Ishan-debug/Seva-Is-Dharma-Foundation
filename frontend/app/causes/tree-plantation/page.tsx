import Footer from "@/components/Footer";
import CauseHero from "@/components/causes/CauseHero";
import CauseMission from "@/components/causes/CauseMission";
import CauseActivities from "@/components/causes/CauseActivities";
import CauseCTA from "@/components/causes/CauseCTA";

export default function TreePlantationPage() {
  return (
    <main>
      <CauseHero
        title="Tree Plantation"
        description="Trees are the lungs of our planet. Through plantation drives and environmental stewardship, we strive to create a greener, healthier, and more sustainable future for generations to come."
        image="/images/causes/tree-hero.jpg"
      />

      <CauseMission
        title="Our Mission"
        description="Our mission is to combat climate change by planting trees, restoring degraded land, and inspiring communities to protect forests and embrace sustainable living."
      />

      <CauseActivities
        activities={[
          {
            emoji: "🌱",
            title: "Plantation Drives",
            description:
              "Organizing tree plantation campaigns in schools, villages, parks, and public spaces.",
          },
          {
            emoji: "🏫",
            title: "School Programs",
            description:
              "Educating students about environmental conservation through hands-on plantation activities.",
          },
          {
            emoji: "🌳",
            title: "Forest Restoration",
            description:
              "Supporting reforestation efforts to restore ecosystems and biodiversity.",
          },
          {
            emoji: "💧",
            title: "Tree Care",
            description:
              "Ensuring planted trees are watered, protected, and maintained for healthy growth.",
          },
        ]}
      />

      <CauseCTA />

      <Footer />
    </main>
  );
}