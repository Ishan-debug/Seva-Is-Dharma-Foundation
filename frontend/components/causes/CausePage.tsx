import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

import CauseHero from "./CauseHero";
import CauseMission from "./CauseMission";
import CauseActivities from "./CauseActivities";
import CauseStats from "./CauseStats";
import RelatedCauses from "./RelatedCauses";
import CauseCTA from "./CauseCTA";

interface Activity {
  emoji: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

interface CausePageProps {
  breadcrumbTitle: string;
  current: string;

  heroTitle: string;
  heroDescription: string;
  heroImage: string;

  missionTitle: string;
  missionDescription: string;

  activities: Activity[];

  stats: Stat[];
}

export default function CausePage({
  breadcrumbTitle,
  current,

  heroTitle,
  heroDescription,
  heroImage,

  missionTitle,
  missionDescription,

  activities,

  stats,
}: CausePageProps) {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Our Causes", href: "/causes" },
          { label: breadcrumbTitle },
        ]}
      />

      <CauseHero
        title={heroTitle}
        description={heroDescription}
        image={heroImage}
      />

      <CauseMission
        title={missionTitle}
        description={missionDescription}
      />

      <CauseActivities
        activities={activities}
      />

      <CauseStats
        stats={stats}
      />

      <RelatedCauses current={current} />

      <CauseCTA />

      <Footer />
    </main>
  );
}