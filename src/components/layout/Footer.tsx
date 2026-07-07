import Container from "./Container";
import Image from "next/image";

const divisions = [
  { name: "RIT Gas Solutions", category: "Energy & LPG" },
  { name: "RIT-Stack", category: "Software & Automation" },
  { name: "RIT Experiences", category: "Events & Hospitality" },
  { name: "RIT e-LABs", category: "Brand Development" },
];

const companyLinks = ["Home", "About", "Divisions", "Partnerships", "Contact"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#071A3D] text-white pt-24">
      <Container>
        {/* Four Column Layout */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column One: Company Identity */}
          <div>
            <Image
              src="/coloredlogo.png"
              alt="RIT ENERGY LIMITED"
              width={120}
              height={50}
            />
            <p className="mt-5 text-white/70 leading-7">
              A diversified infrastructure, energy, digital systems, brand
              development, and professional experiences group delivering
              reliable solutions through specialized business divisions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60">
              <span className="px-3 py-1 bg-white/10 rounded-full">RC 673106</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">Established 2006</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">Nigeria</span>
            </div>
          </div>

          {/* Column Two: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-gold)]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-white/70">
              {companyLinks.map((link) => (
                <li
                  key={link}
                  className="hover:text-[var(--color-gold)] transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column Three: Division Directory */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-gold)]">
              Divisions
            </h3>
            <ul className="mt-5 space-y-4 text-white/70">
              {divisions.map((division) => (
                <li
                  key={division.name}
                  className="hover:text-[var(--color-gold)] transition-colors"
                >
                  <p className="font-semibold">{division.name}</p>
                  <p className="text-sm text-white/60">{division.category}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column Four: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-gold)]">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-white/70">
              <p>28 Talabi Street, Off Adeniyi Jones, Ikeja, Lagos State, Nigeria</p>
              <p>💬 +234 803 x27 xxxx</p>
              <p>☎️ +234 912 2x7 xxxx</p>
              <p>📩 ritenergylimited@mail.com</p>
              
            </div>
          </div>
        </div>

        {/* Corporate Strip */}
        <div className="mt-16 border-t border-white/20 pt-8 text-center text-white/70">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span>Energy</span>
            <span className="opacity-50">|</span>
            <span>Technology</span>
            <span className="opacity-50">|</span>
            <span>Experiences</span>
            <span className="opacity-50">|</span>
            <span>Brand Development</span>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-sm text-white/60 gap-3">
          <p>© 2026 RIT ENERGY LIMITED. All Rights Reserved.</p>
          <p className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Cookie Policy</span>
            <span>RC 673106</span>
            <span>Built by RIT-Stack</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6 text-white/70">
          <a href="#" className="hover:text-[var(--color-gold)]">LinkedIn</a>
          <a href="#" className="hover:text-[var(--color-gold)]">Facebook</a>
          <a href="#" className="hover:text-[var(--color-gold)]">Instagram</a>
          <a href="#" className="hover:text-[var(--color-gold)]">YouTube</a>
        </div>
      </Container>
    </footer>
  );
}
