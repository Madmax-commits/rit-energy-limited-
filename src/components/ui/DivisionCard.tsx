"use client";
import { useEffect, useState } from "react";
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
  const divisionImages = {
  gas: [
    "/images/divisions/gas.png",
    "/images/divisions/gas2.png",
  ],

  stack: [
    "/images/divisions/stack.png",
    "/images/divisions/stack2.png",
  ],

  experiences: [
    "/images/divisions/experiences.png",
    "/images/divisions/experiences2.png",
  ],

  "elabs": [
    "/images/divisions/e-labs.png",
  ],
};
const images =
  divisionImages[id as keyof typeof divisionImages] || [];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  if (images.length <= 1) return;

  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 3500);

  return () => clearInterval(interval);
}, [images]);
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
     {images.length > 0 && (
  <div className="mt-6 overflow-hidden rounded-2xl">
    <img
      src={images[currentImage]}
      alt={name}
      className="h-56 w-full object-cover transition-opacity duration-700"
    />
  </div>
)}

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