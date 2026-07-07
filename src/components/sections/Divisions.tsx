import { divisionIcons } from "@/icons/divisionIcons";
import Container from "../layout/Container";
import DivisionCard from "../ui/DivisionCard";
import { divisions } from "@/data/divisions";
import Stagger from "@/animations/Stagger";
import FadeCard from "@/animations/FadeCard";

export default function Divisions() {
  return (
    <section id="divisions" className="py-40 lg:py-48 bg-white">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]  text-[var(--color-gold)]">
            Our Divisions
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--color-navy)]">
            -4- Specialized Companies - One Unified Vision.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed mx-auto">
            Every RIT division operates with independent expertise, dedicated
            leadership, and a clear industry focus while contributing to a
            shared mission of delivering reliable solutions that create
            long-term value.
          </p>
        </div>

        {/* Division Cards */}
        <Stagger>
          <div className="mt-20 grid gap-10 md:grid-cols-2">
            {divisions.map((division) => (
              <FadeCard key={division.id}>
                <DivisionCard
                  id={division.id}
                  name={division.name}
                  category={division.category}
                  description={division.description}
                  color={division.color}
                  
                  capabilities={division.capabilities} // chips for quick scanning
                  cta="Discover More →"
                  
                />
                
              </FadeCard>
            ))}
          </div>
        </Stagger>

        {/* Group Positioning Panel */}
        <div className="mt-32 bg-[#071A3D] rounded-3xl p-16 text-center shadow-lg">
          <h3 className=" text-3xl md:text-4xl font-bold text-[var(--color-gold)] leading-snug  mx-auto">
            A business model focused on essential human and organizational needs,
            with an ecosystem built around reliability
            innovation, growth, and meaningful experiences..
           
          </h3>
        </div>
      </Container>
    </section>
  );
}
