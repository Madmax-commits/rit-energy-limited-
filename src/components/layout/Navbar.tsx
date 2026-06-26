"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container>
        <nav className="h-20 flex items-center justify-between">
          
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
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
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
             <nav className="flex flex-col px-6 py-6 space-y-5">

              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[var(--color-navy)] transition"
              >
                About
              </a>

              <a
               href="#divisions"
               onClick={() => setIsOpen(false)}
               className="text-gray-700 hover:text-[var(--color-navy)] transition"
              >
               Divisions
              </a>

              <a
               href="#impact"
               onClick={() => setIsOpen(false)}
               className="text-gray-700 hover:text-[var(--color-navy)] transition"
              >
               Impact
              </a>

              <a
               href="#partnership"
               onClick={() => setIsOpen(false)}
               className="text-gray-700 hover:text-[var(--color-navy)] transition"
              >
               Partnership
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[var(--color-navy)] transition"
              >
               Contact
              </a>

              <div className="pt-4">
               <Button text="Work With Us" />
              </div>

            </nav>
         </div>
       )}

          {/* CTA */}
          <div className="hidden md:block">
            <Button text="Work With Us" />
          </div>
        </nav>
      </Container>
    </header>
  );
}
