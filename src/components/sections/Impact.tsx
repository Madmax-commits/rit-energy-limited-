import Container from "../layout/Container";
import { impacts } from "@/data/impact";

export default function Impact() {
  return (
    <section className="py-32 lg:py-40 bg-[var(--color-navy)] text-white">
      <Container>
        
        {/* Header */}
        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-sm text-[var(--color-gold)] font-semibold">
            Group Impact
          </p>

         

          

        </div>


        {/* Impact Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {impacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  bg-white/10
                  border
                  border-white/20
                  rounded-3xl
                  p-8
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-white/15
                "
              >

                <div
                  className={`
                    w-14 
                    h-14 
                    rounded-xl 
                    ${item.bgColor}
                    flex 
                    items-center 
                    justify-center
                  `}
                >
                  <Icon
                    size={28}
                    className={item.color}
                  />
                </div>


                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>


                <p className="mt-4 text-white/75 leading-7">
                  {item.description}
                </p>


                <p className="mt-6 text-[var(--color-gold)] font-medium">
                  Powered by {item.division}
                </p>

              </div>
            );
          })}

        </div>


        {/* Group Model */}
        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold">
            The Group Operating Model
          </h3>


          <div className="mt-10 space-y-4 text-lg">

            <p>RIT ENERGY LIMITED</p>

            <p className="text-[var(--color-gold)]">
              ↓
            </p>

            <p>Four Specialized Divisions</p>

            <p className="text-[var(--color-gold)]">
              ↓
            </p>

            <p>Multiple Industries Served</p>

            <p className="text-[var(--color-gold)]">
              ↓
            </p>

            <p>Long-Term Value Creation</p>

          </div>

        </div>

      </Container>
    </section>
  );
}