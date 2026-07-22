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
  },
  {
    icon: HeartHandshake,
    title: "Food Distribution",
    description:
      "Providing nutritious meals to poor, homeless, and needy people across communities.",
  },
  {
    icon: Trees,
    title: "Tree Plantation",
    description:
      "Planting trees and creating greener spaces to build a healthier future.",
  },
  {
    icon: Leaf,
    title: "Environment Protection",
    description:
      "Organizing clean-up drives, awareness campaigns, and sustainable initiatives.",
  },
];

export default function Causes() {
  return (
    <section
      id="programs"
      className="bg-gradient-to-b from-orange-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Causes
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
              Every small act of kindness creates a ripple of hope. Together,
              we serve humanity, animals, and nature with compassion.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {causes.map((cause, index) => {
            const Icon = cause.icon;

            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="group h-full rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-orange-600 group-hover:text-white">
                    <Icon size={34} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                    {cause.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {cause.description}
                  </p>

                  <button className="mt-8 font-semibold text-orange-600 transition-all duration-300 hover:translate-x-2 hover:text-orange-700">
                    Learn More →
                  </button>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}