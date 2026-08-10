import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-white/80 transition-colors hover:text-green-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-green-300">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="mx-2 text-white/60">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}