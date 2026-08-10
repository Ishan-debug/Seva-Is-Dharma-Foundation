interface CauseMissionProps {
  title: string;
  description: string;
}

export default function CauseMission({
  title,
  description,
}: CauseMissionProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            {title}
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-600"></div>
        </div>

        <p className="mx-auto max-w-4xl text-center text-lg leading-9 text-gray-700">
          {description}
        </p>
      </div>
    </section>
  );
}