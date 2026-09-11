import Link from "next/link";

const galleryItems = [
  {
    icon: "🐾",
    title: "Animal Welfare",
    description:
      "Supporting animals with food, care, kindness, and responsible community action.",
  },
  {
    icon: "🍛",
    title: "Food Distribution",
    description:
      "Serving food and supporting people who need a helping hand.",
  },
  {
    icon: "🌳",
    title: "Tree Plantation",
    description:
      "Planting and nurturing trees for healthier communities and a greener future.",
  },
  {
    icon: "🌍",
    title: "Environment Protection",
    description:
      "Encouraging responsible habits that help protect our surroundings.",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Gallery
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Seva in Action
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Real service creates real memories. This space will showcase our
            activities, volunteers, and community work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-green-50">
                <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}