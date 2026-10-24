import { GeelyCardOverlay } from "./types";

/**
 * Built-in default overlay values tuned specifically for the 2026 Geely Starray EM-i (White).
 * The charge port sits on the rear quarter panel above the left rear wheel arch in rear 3/4 view.
 */
export const DEFAULT_OVERLAY: Required<GeelyCardOverlay> = {
  cable_bottom: "30px",
  cable_width: "55%",
  pulse_left: "41%",
  pulse_top: "46%",
};

/**
 * Built-in per-model presets, keyed by lowercase model name.
 */
export const MODEL_OVERLAYS: Record<string, GeelyCardOverlay> = {
  "starray": {
    cable_bottom: "30px",
    cable_width: "55%",
    pulse_left: "41%",
    pulse_top: "46%",
  },
  "starray-em-i": {
    cable_bottom: "30px",
    cable_width: "55%",
    pulse_left: "41%",
    pulse_top: "46%",
  },
  "boyue-l": {
    cable_bottom: "30px",
    cable_width: "55%",
    pulse_left: "41%",
    pulse_top: "46%",
  },
  "galaxy-l7": {
    cable_bottom: "32px",
    cable_width: "56%",
    pulse_left: "40%",
    pulse_top: "47%",
  },
  "galaxy-starship-7": {
    cable_bottom: "30px",
    cable_width: "55%",
    pulse_left: "41%",
    pulse_top: "46%",
  },
  "ex5": {
    cable_bottom: "30px",
    cable_width: "54%",
    pulse_left: "38%",
    pulse_top: "48%",
  },
};

export function resolveOverlay(
  model: string | undefined,
  override: GeelyCardOverlay | undefined
): Required<GeelyCardOverlay> {
  const preset = (model && MODEL_OVERLAYS[model.toLowerCase()]) || {};
  return { ...DEFAULT_OVERLAY, ...preset, ...override };
}
