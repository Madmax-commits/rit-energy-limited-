"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../layout/Container";
import { impacts } from "@/data/impact";
import FadeIn from "@/animations/FadeIn";

export default function Impact() {
  const divisionsImages = [
    "/images/divisions/experiences.png",
    "/images/divisions/gas2.png",
    "/images/divisions/stack.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % divisionsImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="impact" className="py-40 lg:py-48 bg-[#F8FAFC]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Column (Left) */}
          <div className="lg:col-span-5 relative">
            <FadeIn>
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src={divisionsImages[currentImage]}
                  alt="Group Impact Visual"
                  fill
                  className="object-cover rounded-3xl shadow-xl transition-transform duration-700 ease-in-out"
                  priority
                />
              </div>
            </FadeIn>
          </div>

          {/* Text Column (Right) */}
          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--color-gold)]">
              Group Impact
            </p>

            <FadeIn>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[var(--color-navy)]">
                Creating Value Across People, Businesses, and Communities.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
                Every division within RIT ENERGY LIMITED exists to solve
                practical challenges. From reliable energy and digital
                transformation to memorable experiences and strategic brand
                development, our work is designed to strengthen operations,
                unlock opportunities, and create sustainable growth.
              </p>
            </FadeIn>

            {/* Featured Statement Panel */}
            <FadeIn delay={0.2}>
              <div className="mt-12 rounded-3xl bg-[var(--color-navy)] p-10 text-center shadow-lg">
                <p className="text-2xl md:text-3xl font-semibold text-white leading-snug max-w-2xl mx-auto">
                  We build solutions that improve how industries, organizations,
                  and communities operate.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Impact Pillars */}
        <FadeIn delay={0.3}>
          <div className="mt-28 grid gap-10 md:grid-cols-2">
            {impacts.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-10 shadow-md border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center`}
                  >
                    <Icon size={28} className={item.color} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--color-navy)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Ecosystem Diagram */}
        <FadeIn delay={0.4}>
          <div className="mt-28 text-center">
            <h3 className="text-2xl font-bold text-[var(--color-navy)]">
              The Impact Ecosystem
            </h3>
            <div className="mt-10 space-y-4 text-lg text-gray-700">
              <p>RIT ENERGY LIMITED</p>
              <p className="text-[var(--color-gold)]">↓</p>
              <p>Energy • Technology • Experiences • Brand Growth</p>
              <p className="text-[var(--color-gold)]">↓</p>
              <p>Shared Impact</p>
            </div>
          </div>
        </FadeIn>

        
      </Container>
    </section>
  );
}

