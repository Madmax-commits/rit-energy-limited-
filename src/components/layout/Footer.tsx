import Container from "./Container";

const divisions = [
  "RIT Gas Solutions",
  "RIT-Stack",
  "RIT Experiences",
  "RIT e-LABs",
];

const companyLinks = [
  "About",
  "Divisions",
  "Partnership",
  "Contact",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--color-navy)] text-white pt-20"
    >
      <Container>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-bold">
              RIT ENERGY LIMITED
            </h2>

            <p className="mt-5 text-white/70 leading-7">
              A multi-division operations company delivering energy,
              technology, brand development, and experience solutions
              through specialized business divisions.
            </p>
          </div>


          {/* Divisions */}
          <div>
            <h3 className="text-lg font-semibold">
              Our Divisions
            </h3>

            <ul className="mt-5 space-y-3 text-white/70">

              {divisions.map((division) => (
                <li key={division}>
                  {division}
                </li>
              ))}

            </ul>
          </div>


          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-white/70">

              {companyLinks.map((link) => (
                <li key={link}>
                  {link}
                </li>
              ))}

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-white/70">

              <p>
                28 Talabi Street,
                Off Adeniyi Jones,
                Ikeja, Lagos State,
                Nigeria
              </p>

              <p>
                +234 803 527 6560
              </p>

              <p>
                +234 912 287 2833
              </p>

              <p>
                info@ritenergy.com
              </p>

            </div>

          </div>

        </div>


        {/* Bottom Bar */}
        <div
          className="
            mt-16
            py-6
            border-t
            border-white/20
            text-sm
            text-white/60
            flex
            flex-col
            md:flex-row
            justify-between
            gap-3
          "
        >

          <p>
            © 2026 RIT ENERGY LIMITED. All rights reserved.
          </p>

          <p>
            RC 673106 | Nigeria
          </p>

        </div>

      </Container>
    </footer>
  );
}