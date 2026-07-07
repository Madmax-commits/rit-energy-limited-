import { DivisionId } from "@/types/divisions";
import { Flame, Cpu, CalendarDays, Lightbulb } from "lucide-react";

export const divisionIcons: Record<DivisionId, React.ElementType> = {
  gas: Flame,
  stack: Cpu,
  experiences: CalendarDays,
  elabs: Lightbulb,
};
