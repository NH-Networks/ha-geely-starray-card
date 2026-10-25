export interface HomeAssistant {
  states: {
    [entityId: string]: {
      state: string;
      attributes: Record<string, any>;
    };
  };
  config?: {
    unit_system?: { length?: string };
  };
  themes?: {
    darkMode: boolean;
  };
  callService(domain: string, service: string, serviceData?: Record<string, unknown>): Promise<unknown>;
}

export interface GeelyCardEntities {
  battery?: string;
  distance_to_empty_battery?: string;
  electric_range?: string;
  distance_to_empty_tank?: string;
  fuel_range?: string;
  fuel_amount?: string;
  fuel_level?: string;
  fuel_tank_capacity_l?: number;
  charging_connection_status?: string;
  charger_plug?: string;
  charging_status?: string;
  charging_time_left?: string;
  time_to_full_charge?: string;
  lock?: string;
  location?: string;
  start_climatisation?: string;
  stop_climatisation?: string;
  climate?: string;
  defrost?: string;
  unlock_trunk?: string;
  find_car?: string;
  odometer?: string;
}

export interface GeelyCardImages {
  exterior_side_left?: string;
  exterior_back?: string;
  parked?: string;
  charging?: string;
  fallback?: string;
}

export interface GeelyCardOverlay {
  cable_bottom?: string;
  cable_width?: string;
  pulse_left?: string;
  pulse_top?: string;
}

export interface GeelyCardLabels {
  unlocked?: string;
  locked?: string;
  scheduled?: string;
  charging?: string;
  plugged_in?: string;
  lock?: string;
  unlock?: string;
  climate?: string;
  defrost?: string;
  trunk?: string;
  find_car?: string;
  electric?: string;
  fuel?: string;
  fuel_level?: string;
  time_left?: string;
  total_range?: string;
  battery?: string;
}

export interface GeelyCardConfig {
  type: string;
  name?: string;
  entities: GeelyCardEntities;
  images?: GeelyCardImages;
  labels?: GeelyCardLabels;
  /** Show the interactive control dialog when card is tapped. Defaults to true. */
  show_actions?: boolean;
  /** Selects a built-in cable/pulse overlay preset tuned for this model, e.g. "starray", "starray-em-i". */
  model?: string;
  /** Overrides individual overlay values — takes precedence over the `model` preset. */
  overlay?: GeelyCardOverlay;
  /**
   * "classic" (default): total range headline + fuel/electric breakdown.
   * "app": battery-first headline like the Geely mobile app.
   * "hybrid": dual battery % and fuel % metrics.
   */
  header?: "classic" | "app" | "hybrid";
  /** Force dark or light mode, or "auto" to follow Home Assistant theme. */
  theme_mode?: "auto" | "dark" | "light";
  /** Built-in vehicle photo/render preset. */
  image_preset?: "press_front" | "press_rear" | "plaza" | "studio_dark" | "studio_light" | "cockpit";
  /** Card aspect ratio, e.g. "1/1" (default), "16/10", "16/9", "4/3". */
  aspect_ratio?: string;
  /** Compact mode for Shelly Wall Display X2i and small displays. Defaults to false. */
  compact?: boolean;
}

export type ChargeState = "idle" | "scheduled" | "charging";
export type VehicleKind = "hybrid" | "bev" | "ice" | "unknown";
export type StatusKey = "unlocked" | "locked" | "scheduled" | "charging" | "plugged_in" | "";
