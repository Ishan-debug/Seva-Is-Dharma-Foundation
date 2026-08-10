interface CauseActivitiesProps {
  title?: string;
  activities: {
    emoji: string;
    title: string;
    description: string;
  }[];
}

export default function CauseActivities({
  title = "Our Activities",
  activities,
}: CauseActivitiesProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            {title}
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{activity.emoji}</div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {activity.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}