type DivisionCardProps = {
  icon: string;
  name: string;
  category: string;
  description: string;
  color: string;
};

export default function DivisionCard({
  icon,
  name,
  category,
  description,
  color,
}: DivisionCardProps) {
  return (
    <div
      className={`
        ${color}
        rounded-3xl
        p-8
        border
        border-gray-200
        transition
        hover:-translate-y-2
        hover:shadow-xl
      `}
    >
      <div className="text-4xl">
        {icon}
      </div>

      <p className="mt-5 text-sm font-semibold uppercase text-gray-500">
        {category}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-[var(--color-navy)]">
        {name}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

      <button
        className="
          mt-8
          font-semibold
          text-[var(--color-navy)]
        "
      >
        Explore Division →
      </button>
    </div>
  );
}