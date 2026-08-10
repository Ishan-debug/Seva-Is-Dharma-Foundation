import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Cause {
  title: string;
  description: string;
  href: string;
  emoji: string;
}

interface RelatedCausesProps {
  current: string;
}

const causes: Cause[] = [
  {
    title: "Animal Welfare",
    description: "Rescuing, treating, and protecting animals in need.",
    href: "/causes/animal-welfare",
    emoji: "🐾",
  },
  {
    title: "Food Distribution",
    description: "Providing nutritious meals to underprivileged communities.",
    href: "/causes/food-distribution",
    emoji: "🍛",
  },
  {
    title: "Tree Plantation",
    description: "Planting trees for a greener and healthier future.",
    href: "/causes/tree-plantation",
    emoji: "🌳",
  },
  {
    title: "Environment Protection",
    description: "Keeping our planet clean through awareness and action.",
    href: "/causes/environment",
    emoji: "🌍",
  },
];

export default function RelatedCauses({
  current,
}: RelatedCausesProps) {
  const filtered = causes.filter(
    (cause) => cause.href !== current
  );

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore More Causes
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Discover other initiatives of Seva Is Dharma Foundation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {filtered.map((cause) => (
            <Link
              key={cause.href}
              href={cause.href}
              className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">
                {cause.emoji}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {cause.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {cause.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold text-orange-500 transition group-hover:gap-4">
                Learn More
                <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}