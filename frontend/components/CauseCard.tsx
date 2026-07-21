type CauseCardProps = {
  emoji: string;
  title: string;
  description: string;
};

export default function CauseCard({
  emoji,
  title,
  description,
}: CauseCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-6 text-2xl font-bold text-orange-600">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <button className="mt-6 rounded-lg bg-orange-600 px-5 py-2 text-white transition hover:bg-orange-700">
        Learn More
      </button>
    </div>
  );
}