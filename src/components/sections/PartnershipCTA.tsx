import Container from "../layout/Container";
import Button from "../ui/Button";
import { divisionIcons } from "@/icons/divisionIcons";

const partners = [
  {
    id: "business",
    title: "Businesses",
    description:
      "Helping organizations improve operations through reliable energy, technology, and strategic support.",
  },
  {
    id: "ngo",
    title: "NGOs",
    description:
      "Collaborating on social impact projects that drive sustainable community development.",
  },
  {
    id: "government",
    title: "Government",
    description:
      "Supporting infrastructure, energy, and technology initiatives for public sector growth.",
  },
  {
    id: "investors",
    title: "Investors",
    description:
      "Creating long-term value through scalable ventures and sustainable growth strategies.",
  },
  {
    id: "institutions",
    title: "Institutions",
    description:
      "Partnering with schools, hospitals, and organizations to strengthen operations.",
  },
  {
    id: "communities",
    title: "Communities",
    description:
      "Delivering solutions that improve everyday life and create lasting impact.",
  },
];

const process = [
  { stage: "Discovery", text: "Understanding needs and opportunities." },
  { stage: "Strategy", text: "Designing structured, scalable solutions." },
  { stage: "Implementation", text: "Executing with precision and professionalism." },
  { stage: "Long-Term Support", text: "Ensuring sustainable growth and reliability." },
];

export default function PartnershipCTA() {
  return (
    <section id="partnership" className="py-40 lg:py-48 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--color-gold)]">
            Partnership & Growth
          </p>
          
        </div>

        {/* Hero Banner */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/images/about/rit ads2.png"
            alt="Corporate Collaboration"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/70 flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Building Long-Term Partnerships
            </h3>
            <p className="mt-4 text-xl md:text-2xl text-white/80">
              Together We Create Sustainable Growth
            </p>
            <Button text="Become a Partner" />
          </div>
        </div>

        {/* Who We Partner With */}
        <div className="mt-28 grid gap-10 md:grid-cols-2">
          {partners.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl bg-white p-8 shadow-md border border-gray-200 hover:-translate-y-2 hover:shadow-lg transition-transform duration-300"
            >
              <h4 className="text-xl font-semibold text-[var(--color-navy)]">
                {p.title}
              </h4>
              <p className="mt-4 text-gray-600 leading-7">{p.description}</p>
            </div>
          ))}
        </div>

        {/* How We Create Value */}
        <div className="mt-28">
          <h3 className="text-2xl font-bold text-[var(--color-navy)] text-center">
            How We Create Value
          </h3>
          <div className="mt-12 flex flex-col md:flex-row md:justify-center md:gap-16 space-y-12 md:space-y-0">
            {process.map((step, idx) => (
              <div key={idx} className="text-center max-w-xs">
                <div className="text-lg font-semibold text-[var(--color-navy)]">
                  {step.stage}
                </div>
                <p className="mt-3 text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Promise */}
        <div className="mt-28 bg-[var(--color-navy)] rounded-3xl p-16 text-center shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Every partnership is built on trust, professionalism, reliability,
            and a commitment to delivering measurable value.
          </h3>
        </div>

        {/* Call-to-Action */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
            Ready to Build Something Bigger?
          </h3>
          

        
        </div>
      </Container>
    </section>
  );
}
