"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Divisions", href: "#divisions" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, i) => {
        if (section instanceof HTMLElement) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(navLinks[i].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="h-[84px] flex items-center justify-between">
          {/* Logo */}
          
          

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 text-[15px] font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative transition-colors duration-200 ${
                    activeSection === link.href
                      ? "text-[var(--color-navy)]"
                      : "text-gray-700"
                  } hover:text-[var(--color-navy)]`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--color-gold)] transition-all duration-200 ${
                      activeSection === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button text="Work With Us" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--color-navy)]"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Panel */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col px-8 py-10 space-y-6 animate-slideDown">
          <button
            className="self-end text-[var(--color-navy)]"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-[var(--color-navy)] transition"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-6">
            <Button text="Work With Us" />
          </div>
        </div>
      )}
    </header>
  );
}
