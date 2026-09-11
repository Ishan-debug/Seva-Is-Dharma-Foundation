import Link from "next/link";
import {
  Leaf,
  PawPrint,
  Soup,
  Trees,
} from "lucide-react";

const programs = [
  {
    title: "Animal Welfare",
    description:
      "Promoting compassion and practical support for animals through feeding, care, and responsible community participation.",
    icon: PawPrint,
    href: "/causes/animal-welfare",
  },
  {
    title: "Food Distribution",
    description:
      "Helping people facing food insecurity through community food distribution and service initiatives.",
    icon: Soup,
    href: "/causes/food-distribution",
  },
  {
    title: "Tree Plantation",
    description:
      "Encouraging tree plantation and long-term care for trees to support healthier communities.",
    icon: Trees,
    href: "/causes/tree-plantation",
  },
  {
    title: "Environment Protection",
    description:
      "Supporting responsible environmental habits and local actions that help protect nature.",
    icon: Leaf,
    href: "/causes/environment",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Programs
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Where We Put Seva Into Action
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Our four primary focus areas connect compassion with practical
            action in the community.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <Link
                key={program.title}
                href={program.href}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {program.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-orange-600">
                  Explore Program →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}