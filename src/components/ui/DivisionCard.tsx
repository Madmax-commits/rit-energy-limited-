"use client";
import { useEffect, useState } from "react";
import { divisionIcons } from "@/icons/divisionIcons";

type DivisionCardProps = {
  id: keyof typeof divisionIcons;
  name: string;
  category: string;
  description: string;
  color: string;
  capabilities?: string[];
  cta?: string;
};

export default function DivisionCard({
  id,
  name,
  category,
  description,
  color,
  capabilities = [],
  cta = "Discover More →",
}: DivisionCardProps) {
  const Icon = divisionIcons[id];

  const divisionImages = {
    gas: ["/images/divisions/gas.png", "/images/divisions/gas2.png"],
    stack: ["/images/divisions/stack.png", "/images/divisions/stack2.png"],
    experiences: [
      "/images/divisions/experiences.png",
      "/images/divisions/experiences2.png",
    ],
    elabs: ["/images/divisions/e-labs.png"],
  };

  const images = divisionImages[id as keyof typeof divisionImages] || [];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      3500
    );
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className={`
        group
        rounded-2xl
        overflow-hidden
        shadow-md
        border border-gray-200
        bg-white
        transition-transform duration-300
        hover:-translate-y-2 hover:shadow-xl
      `}
    >
      {/* Image */}
      {images.length > 0 && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={images[currentImage]}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-md mb-6">
          <Icon className="text-[var(--color-navy)]" size={28} />
        </div>

        {/* Category */}
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
          {category}
        </p>

        {/* Division Name */}
        <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-7 mb-6 line-clamp-3">
          {description}
        </p>

        {/* Capabilities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
            >
              {cap}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="
            inline-flex items-center text-[var(--color-navy)] font-semibold
            transition-transform duration-300 group-hover:translate-x-1
          "
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
