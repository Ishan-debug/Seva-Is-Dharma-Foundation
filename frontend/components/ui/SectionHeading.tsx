interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}