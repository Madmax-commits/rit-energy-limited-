import Container from "../layout/Container";
import Button from "../ui/Button";

const partnerships = [
  "Government & public sector projects",
  "Corporate supply and service contracts",
  "Technology implementation partnerships",
  "NGO and social impact collaborations",
];

export default function PartnershipCTA() {
  return (
    <section
      id="partnership"
      className="py-24 bg-white"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--color-gold)]">
              Partnership & Growth
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[var(--color-navy)]">
              Building Long-Term Strategic Relationships
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              RIT ENERGY LIMITED collaborates with organizations,
              institutions, and stakeholders who require reliable
              execution, specialized expertise, and scalable solutions
              across multiple industries.
            </p>

            <div className="mt-10">
              <Button text="Start a Partnership Discussion" />
            </div>

          </div>


          {/* Right Content */}
          <div className="rounded-3xl bg-gray-50 p-8 border border-gray-200">

            <h3 className="text-2xl font-bold text-[var(--color-navy)]">
              We Partner With
            </h3>

            <div className="mt-8 space-y-5">

              {partnerships.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="text-[var(--color-gold)] text-xl">
                    ●
                  </div>

                  <p className="text-gray-700 leading-7">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}