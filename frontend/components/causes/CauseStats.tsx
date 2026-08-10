interface CauseStatsProps {
  stats: {
    number: string;
    label: string;
  }[];
}

export default function CauseStats({ stats }: CauseStatsProps) {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-green-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Our Impact
          </h2>

          <p className="mt-4 text-lg text-orange-100">
            Every act of kindness creates a lasting impact.
          </p>
        </div>

        <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
            >
              <h3 className="text-5xl font-bold">
                {stat.number}
              </h3>

              <p className="mt-3 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}