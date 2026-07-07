import { DivisionId } from "@/types/divisions";

export const divisions: {
  id: DivisionId;
  name: string;
  category: string;
  description: string;
  color: string;
  capabilities: string[];
}[] = [
  {
    id: "gas",
    name: "RIT Gas Solutions",
    category: "Energy & LPG",
    description:
      "Safe, reliable, and intelligent LPG solutions for homes, institutions, and commercial operations.",
    color: "bg-orange-50",
    capabilities: ["LPG Supply", "Commercial Contracts", "Residential Delivery"],
  },
  {
    id: "stack",
    name: "RIT-Stack",
    category: "Technology",
    description:
      "Custom software, automation systems, and digital infrastructure that help organizations operate efficiently.",
    color: "bg-blue-50",
    capabilities: ["Software", "Automation", "Digital Infrastructure"],
  },
  {
    id: "experiences",
    name: "RIT Experiences",
    category: "Events & Hospitality",
    description:
      "Professional event planning, coordination, hospitality, and memorable experiences.",
    color: "bg-purple-50",
    capabilities: ["Events", "Catering", "Hospitality"],
  },
  {
    id: "elabs",
    name: "RIT e-LABs",
    category: "Brand Development",
    description:
      "Transforming individuals and organizations into structured, visible, and opportunity-ready brands.",
    color: "bg-green-50",
    capabilities: ["Branding", "Positioning", "Growth Strategy"],
  },
];
