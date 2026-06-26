"use client";
import { useEffect, useState } from "react";
import Container from "../layout/Container";

const values = [
  {
    title: "Diversified Expertise",
    description:
      "Specialized divisions operating across energy, technology, brand development, and professional experiences.",
  },
  {
    title: "Operational Excellence",
    description:
      "Structured systems, professional execution, and long-term strategic thinking across every industry we serve.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Building scalable solutions, strategic partnerships, and businesses designed for lasting impact.",
  },
];

export default function AboutGroup() {
  const aboutImages = [
  "/images/about/group-vision.png",
  "/images/about/group-vision2.png",
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % aboutImages.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  return (
    <section
      id="about"
      className="py-32 lg:py-40 bg-white"
    >
      <Container>

        {/* Section Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-[var(--color-gold)]">
            About The Group
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--color-navy)]">
            One Company. Multi - Specialized Divisions.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            RIT ENERGY LIMITED is a diversified operations group
            structured around independent business divisions with
            specialized expertise. Through energy solutions, digital
            systems, strategic brand development, and professional
            experiences, we solve practical challenges across industries.
          </p>

        </div>
         <div className="mt-20 overflow-hidden rounded-3xl shadow-xl">
  <img
    src={aboutImages[currentImage]}
    alt="Group Vision"
    className="h-[450px] w-full object-cover transition-opacity duration-700"
  />
</div>

        {/* Company Philosophy Card */}
         <div
          className="
          rounded-3xl
          border
          border-gray-200
          bg-[var(--color-navy)]
          p-8
          lg:p-10
          shadow-sm
         "
        >
          <h3 className="text-2xl font-bold text-white">
            Our Philosophy
          </h3>

          <p className="mt-6 text-lg text-white/80 leading-8">
            Modern organizations require reliable systems,
            innovative solutions, and strategic execution.
            Our multi-division model allows each company
            within the RIT ecosystem to focus deeply on its
            industry while benefiting from a shared vision
            of excellence, innovation, and growth.
          </p>

        </div>


        {/* Core Values */}
        <div
          className="
          mt-20
          grid
          gap-10
          md:grid-cols-3
         "
        >

          {values.map((value) => (
            <div
              key={value.title}
              className="
                rounded-2xl
                p-8
                border
                border-gray-200
                bg-gray-50
              "
            >

              <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                {value.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {value.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}