import { divisionIcons } from "@/icons/divisionIcons";

type DivisionCardProps = {
  id: keyof typeof divisionIcons;
  name: string;
  category: string;
  description: string;
  color: string;
};

export default function DivisionCard({
  id,
  name,
  category,
  description,
  color,
}: DivisionCardProps) {

  const Icon = divisionIcons[id];

  return (
    <div
      className={`
        ${color}
        rounded-3xl
        p-8
        border
        border-gray-200
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      `}
    >

      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-md">

        <Icon
          className="text-[var(--color-navy)]"
          size={28}
        />

      </div>


      <p className="mt-6 text-sm font-semibold uppercase text-gray-500">
        {category}
      </p>


      <h3 className="mt-3 text-2xl font-bold text-[var(--color-navy)]">
        {name}
      </h3>


      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>


      <button className="mt-8 font-semibold text-[var(--color-navy)]">
        Explore Division →
      </button>

    </div>
  );
}