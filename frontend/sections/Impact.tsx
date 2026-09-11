import {
  Heart,
  Leaf,
  PawPrint,
  Users,
} from "lucide-react";

const impacts = [
  {
    title: "People",
    description:
      "Supporting people with food, compassion, dignity, and meaningful community service.",
    icon: Users,
  },
  {
    title: "Animals",
    description:
      "Promoting kindness and practical support for animals in need.",
    icon: PawPrint,
  },
  {
    title: "Nature",
    description:
      "Planting trees and encouraging responsible environmental action.",
    icon: Leaf,
  },
  {
    title: "Community",
    description:
      "Creating opportunities for people to participate in selfless service.",
    icon: Heart,
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="bg-gray-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Our Impact
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Small Acts. Meaningful Change.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            Our goal is simple: turn compassion into action that creates
            positive change for people, animals, and the environment.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-800 bg-gray-900 p-7 transition hover:-translate-y-1 hover:border-orange-500"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-gray-800 bg-gray-900 p-7 text-center sm:p-9">
          <p className="text-xl font-bold sm:text-2xl">
            “Helping is Bhakti.”
          </p>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            सेवा परमो धर्मः
          </p>
        </div>
      </div>
    </section>
  );
}