import { GeelyCardLabels } from "./types";

export const DEFAULT_LABELS_NL: Required<GeelyCardLabels> = {
  unlocked: "Ontgrendeld",
  locked: "Vergrendeld",
  scheduled: "Gepland",
  charging: "Opladen",
  plugged_in: "Aangesloten",
  lock: "Vergrendel",
  unlock: "Ontgrendel",
  climate: "Klimaat",
  defrost: "Ontdooien",
  trunk: "Kofferbak",
  find_car: "Lichten & Claxon",
  electric: "elektrisch",
  fuel: "brandstof",
  fuel_level: "Brandstof",
  time_left: "resterend",
  total_range: "Totaal bereik",
  battery: "Batterij",
};

export const DEFAULT_LABELS_EN: Required<GeelyCardLabels> = {
  unlocked: "Unlocked",
  locked: "Locked",
  scheduled: "Scheduled",
  charging: "Charging",
  plugged_in: "Plugged in",
  lock: "Lock",
  unlock: "Unlock",
  climate: "Climate",
  defrost: "Defrost",
  trunk: "Trunk",
  find_car: "Find Car",
  electric: "electric",
  fuel: "fuel",
  fuel_level: "Fuel",
  time_left: "left",
  total_range: "Total range",
  battery: "Battery",
};

/**
 * Resolves a label: first checks user config override, then falls back to Dutch default
 * (or English if configured).
 */
export function label(
  labels: GeelyCardLabels | undefined,
  key: keyof GeelyCardLabels,
  locale: "nl" | "en" = "nl"
): string {
  if (labels?.[key] !== undefined) {
    return labels[key]!;
  }
  const defaultSet = locale === "en" ? DEFAULT_LABELS_EN : DEFAULT_LABELS_NL;
  return defaultSet[key] ?? DEFAULT_LABELS_NL[key] ?? "";
}
