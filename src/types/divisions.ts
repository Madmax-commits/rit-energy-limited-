export const DIVISION_IDS = ["gas", "stack", "experiences", "elabs"] as const;

export type DivisionId = typeof DIVISION_IDS[number];