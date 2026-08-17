import Link from "next/link";
import {
  HeartHandshake,
  PawPrint,
  Trees,
  Leaf,
} from "lucide-react";
import FadeIn from "./FadeIn";

const causes = [
  {
    icon: PawPrint,
    title: "Animal Welfare",
    description:
      "Rescuing, feeding, treating, and protecting stray and injured animals with compassion.",
    href: "/causes/animal-welfare",
  },
  {
    icon: HeartHandshake,
    title: "Food Distribution",
    description:
      "Providing nutritious meals to poor, homeless, and needy people across communities.",
    href: "/causes/food-distribution",
  },
  {
    icon: Trees,
    title: "Tree Plantation",
    description:
      "Planting trees and creating greener spaces to build a healthier future.",
    href: "/causes/tree-plantation",
  },
  {
    icon: Leaf,
    title: "Environment Protection",
    description:
      "Organizing clean-up drives, awareness campaigns, and sustainable initiatives.",
    href: "/causes/environment",
  },
];

export default function Causes() {
  return (
    <section
      id="causes"
      className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Causes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg">
              Every small act of kindness creates a ripple of hope. Together,
              we serve humanity, animals, and nature with compassion.
            </p>
          </div>
        </FadeIn>

        {/* Cause Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {causes.map((cause, index) => {
            const Icon = cause.icon;

            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="group flex h-full flex-col rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl sm:p-7 lg:p-8">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-orange-600 group-hover:text-white sm:h-16 sm:w-16">
                    <Icon
                      size={30}
                      className="sm:h-[34px] sm:w-[34px]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-gray-900 sm:mt-6 sm:text-2xl">
                    {cause.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                    {cause.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={cause.href}
                    className="mt-auto pt-6 text-sm font-semibold text-orange-600 transition-all duration-300 hover:translate-x-1 hover:text-orange-700 sm:pt-8 sm:text-base"
                  >
                    Learn More →
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}