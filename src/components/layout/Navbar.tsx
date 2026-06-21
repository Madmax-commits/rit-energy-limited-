import Container from "./Container";
import Button from "../ui/Button";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container>
        <nav className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div>
            <Image
              src="/coloredlogo.png"
              alt="RIT ENERGY LIMITED"
              width={100}
              height={40}
            />
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#divisions">
                Divisions
              </a>
            </li>

            <li>
              <a href="#partnership">
                Partnerships
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>


          {/* CTA */}
          <div className="hidden md:block">
            <Button text="Work With Us" />
          </div>
        </nav>
      </Container>
    </header>
  );
}