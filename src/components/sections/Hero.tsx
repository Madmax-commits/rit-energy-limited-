"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";
import FadeIn from "@/animations/FadeIn";

export default function Hero() {
  const heroImages = [
    "/images/hero/corporate-bulding.png",
    "/images/hero/energy-network.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-100 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl"></div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)] font-semibold">
              RIT ENERGY LIMITED
            </p>

            <FadeIn>
              <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-bold leading-tight text-[var(--color-navy)]">
                Building Reliable Energy, Digital Infrastructure, and Strategic Growth Across Industries.
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-8">
                We operate specialized companies delivering energy solutions, software systems, professional experiences, and brand development—helping organizations and communities grow with confidence.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-6">
                <Button text="Explore Our Divisions" />
                <Button text="Partner With Us" variant="secondary" />
              </div>
            </FadeIn>

            {/* Trust Strip */}
            <FadeIn delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-6 text-[var(--color-navy)] font-medium">
                {[
                  "Energy Solutions",
                  "Technology Systems",
                  "Professional Experiences",
                  "Strategic Brand Development",
                ].map((item, idx) => (
                  <div key={item} className="flex items-center gap-3">
                    <span>{item}</span>
                    {idx < 3 && (
                      <span className="h-4 w-px bg-gray-300"></span>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.4}>
              <div className="relative w-full h-[500px] lg:h-[600px]">
                <Image
                  src={heroImages[currentImage]}
                  alt="Premium Corporate Hero Image"
                  fill
                  className="object-cover rounded-3xl shadow-xl transition-transform duration-700 ease-in-out"
                  style={{ transform: "scale(1)" }}
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
