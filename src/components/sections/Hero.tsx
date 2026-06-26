
"use client";
import { useEffect, useState } from "react";
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-32 lg:py-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-100 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl"></div>

      <Container>
        <div className="relative z-10">
          {/* Hero Text */}
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)] font-semibold">
            RIT ENERGY LIMITED
          </p>

          <FadeIn>
            <h1 className="mt-6 max-w-5xl text-5xl md:text-7xl font-bold leading-tight text-[var(--color-navy)]">
              A Multi-Division Infrastructure,
              Energy, Technology & Experience Group
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="mt-8 max-w-3xl text-lg text-gray-600 leading-8">
              We operate specialized business divisions delivering
              energy solutions, digital systems, brand development,
              and professional experiences across industries.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16 flex flex-wrap gap-6">
              <Button text="Explore Our Divisions" />

              <Button 
                text="Partner With Us" 
                variant="secondary"
              />
            </div>
          </FadeIn>

          {/* Division Preview */}
          <div className="mt-20 grid gap-5 md:grid-cols-4">
            {[
              "RIT Gas Solutions",
              "RIT-Stack",
              "RIT Experiences",
              "RIT e-LABs",
            ].map((division) => (
              <div
                key={division}
                className="
                  rounded-2xl 
                  bg-white 
                  p-6 
                  shadow-lg
                  border 
                  border-gray-100
                "
              >
                <h3 className="font-semibold">
                  {division}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
