import Image from "next/image";

interface CauseHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function CauseHero({
  title,
  description,
  image,
}: CauseHeroProps) {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold">
            {title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}