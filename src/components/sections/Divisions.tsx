import { divisionIcons } from "@/icons/divisionIcons";
import Container from "../layout/Container";
import DivisionCard from "../ui/DivisionCard";
import { divisions } from "@/data/divisions";
import Stagger from "@/animations/Stagger";
import FadeCard from "@/animations/FadeCard";

export default function Divisions() {
  return (
    <section id="divisions" className="py-32 lg:py-40">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Our Divisions
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--color-navy)]">
            Specialized Companies. Unified Vision.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Each RIT division operates with independent expertise,
            dedicated services, and a clear customer focus while
            contributing to a shared mission of building reliable
            solutions across industries.
          </p>
        </div>

        <Stagger>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {divisions.map((division) => (
              <FadeCard key={division.id}>
                <DivisionCard
                  id={division.id}
                  name={division.name}
                  category={division.category}
                  description={division.description}
                  color={division.color}
                />
              </FadeCard>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}