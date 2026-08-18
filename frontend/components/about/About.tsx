import Link from "next/link";
import { Heart, HandHeart, Trees, PawPrint } from "lucide-react";
import FadeIn from "../FadeIn";

const features = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every life deserves love, care, and respect.",
    bg: "bg-orange-50",
    color: "text-orange-600",
  },
  {
    icon: PawPrint,
    title: "Animal Care",
    description: "Protecting and caring for helpless animals.",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    icon: Trees,
    title: "Environment",
    description: "Building a greener and healthier tomorrow.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: HandHeart,
    title: "Service",
    description: "Selfless service is the highest form of devotion.",
    bg: "bg-red-50",
    color: "text-red-600",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <FadeIn>
          <div className="min-w-0">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              ABOUT US
            </span>

            <h2 className="mt-6 break-words text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Seva Is Dharma Foundation
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              We believe that true worship is serving those who cannot ask for
              help. Our foundation works for the welfare of animals, feeding
              the hungry, protecting the environment, and creating a cleaner,
              greener future.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Guided by the principle
              <span className="font-semibold text-orange-600">
                {" "}“सेवा परमो धर्मः”
              </span>
              , we inspire people to transform compassion into action through
              volunteering and community service.
            </p>

            {/* Join Our Mission */}
            <Link
              href="/#volunteer"
              className="mt-8 inline-flex max-w-full items-center justify-center rounded-xl bg-orange-600 px-6 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-2xl sm:px-8"
            >
              Join Our Mission
            </Link>
          </div>
        </FadeIn>

        {/* RIGHT SIDE */}
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.15}>
                <div
                  className={`group min-w-0 overflow-hidden rounded-3xl border border-gray-100 ${feature.bg} p-6 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl sm:p-7 lg:p-8`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-5 inline-flex rounded-full bg-white p-3 ${feature.color} shadow transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="break-words text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 break-words text-base leading-7 text-gray-600 sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}