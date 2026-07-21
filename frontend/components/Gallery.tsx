import Image from "next/image";

const images = [
  {
    src: "/images/gallery/animal1.jpg",
    alt: "Animal Welfare",
  },
  {
    src: "/images/gallery/animal2.jpg",
    alt: "Animal Rescue",
  },
  {
    src: "/images/gallery/food1.jpg",
    alt: "Food Distribution",
  },
  {
    src: "/images/gallery/food2.jpg",
    alt: "Community Service",
  },
  {
    src: "/images/gallery/tree1.jpg",
    alt: "Tree Plantation",
  },
  {
    src: "/images/gallery/environment1.jpg",
    alt: "Environment Protection",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            GALLERY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Moments of Service
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every picture tells a story of compassion, kindness, and hope.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

              <div className="absolute bottom-0 w-full p-6 text-white">
                <h3 className="text-xl font-bold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}