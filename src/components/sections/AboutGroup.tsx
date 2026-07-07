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
    <section id="about" className="py-32 lg:py-40 bg-white">
      <Container>
        {/* Executive Introduction */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Image (40% desktop, full width mobile) */}
          <div className="lg:col-span-5 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutImages[currentImage]}
              alt="Corporate Leadership and Vision"
              className="h-[400px] lg:h-[500px] w-full object-cover transition-opacity duration-700"
            />
          </div>

          {/* Text (60% desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)] font-semibold">
              About The Group
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--color-navy)]">
              1-COMPANY- DIVERSE SPECIALIZED DIVISIONS -1 SHARED VISION-
            </h2>
            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
              RIT ENERGY LIMITED is a diversified operations group built
              around specialized companies that deliver reliable energy,
              digital infrastructure, professional experiences, and strategic
              brand development. Each division operates independently while
              advancing a shared commitment to operational excellence,
              innovation, and sustainable growth.
            </p>
          </div>
        </div>

        {/* Corporate Philosophy Banner */}
        {/* Corporate Philosophy Banner */}
        <div className="mt-40 w-full bg-[var(--color-navy)] rounded-none py-20 text-center">
         <div className="mt-40 w-full bg-[var(--color-navy)] py-20 text-center">
           <h3 className="text-3xl md:text-4xl font-bold text-white">
             Our Philosophy
            </h3>
            <p className="mt-6 text-xl md:text-2xl text-white/80 leading-relaxed mx-auto">
             Building structured systems that improve how people, organizations,
             and industries operate.
            </p>
          </div>
        </div>


        {/* Core Principles */}
        <div className="mt-28 grid gap-10 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl p-10 bg-white shadow-md border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                {value.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-7">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Strategic Position Statement */}
        <div className="mt-32 text-center">
          <p className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] leading-snug  mx-auto">
            We believe the future belongs to organizations built on
            specialization collaboration, and long-term vision.
          </p>
        </div>
      </Container>
    </section>
  );
}
