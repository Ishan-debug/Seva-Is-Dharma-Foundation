import Footer from "@/components/Footer";
import CauseHero from "@/components/causes/CauseHero";
import CauseMission from "@/components/causes/CauseMission";
import CauseActivities from "@/components/causes/CauseActivities";
import CauseCTA from "@/components/causes/CauseCTA";

export default function FoodDistributionPage() {
  return (
    <main>
      <CauseHero
        title="Food Distribution"
        description="No one should sleep hungry. We provide nutritious meals and essential food supplies to underprivileged families, children, and elderly people, ensuring dignity and hope through every meal served."
        image="/images/causes/food-hero.jpg"
      />

      <CauseMission
        title="Our Mission"
        description="Hunger is one of the greatest challenges faced by vulnerable communities. Our mission is to distribute healthy meals, organize food drives, and support families in need through community participation and compassion."
      />

      <CauseActivities
        activities={[
          {
            emoji: "🍛",
            title: "Community Food Drives",
            description:
              "Organizing regular food distribution drives for people in need.",
          },
          {
            emoji: "👨‍👩‍👧",
            title: "Family Support",
            description:
              "Providing ration kits and nutritious meals to underprivileged families.",
          },
          {
            emoji: "🎒",
            title: "School Meal Support",
            description:
              "Helping children receive healthy meals to support education and growth.",
          },
          {
            emoji: "🧓",
            title: "Elderly Care",
            description:
              "Ensuring elderly citizens receive nutritious food with dignity and respect.",
          },
        ]}
      />

      <CauseCTA />

      <Footer />
    </main>
  );
}