import { ChargeState, GeelyCardEntities, GeelyCardLabels, HomeAssistant, StatusKey, VehicleKind } from "./types";
import { label } from "./labels";

export function getState(hass: HomeAssistant, entityId?: string): string | undefined {
  if (!entityId) return undefined;
  return hass.states[entityId]?.state;
}

export function getAttr(hass: HomeAssistant, entityId: string | undefined, attr: string): any {
  if (!entityId) return undefined;
  return hass.states[entityId]?.attributes?.[attr];
}

/**
 * Resolves an image value: either an entity ID whose attribute holds a URL,
 * or a direct URL / local path (e.g. `/local/assets/starray-white-parked-dark.jpg`).
 */
export function resolveImage(hass: HomeAssistant, value: string | undefined, attr: string): string | undefined {
  if (!value) return undefined;
  if (hass.states[value] !== undefined) {
    return getAttr(hass, value, attr) || undefined;
  }
  return value;
}

export function numState(hass: HomeAssistant, entityId?: string): number | undefined {
  const s = getState(hass, entityId);
  if (s === undefined || s === null) return undefined;
  const str = String(s).trim().toLowerCase();
  if (str === "unavailable" || str === "unknown" || str === "") return undefined;
  const cleaned = str.replace(",", ".");
  const match = cleaned.match(/-?\d+(\.\d+)?/);
  if (!match) return undefined;
  const n = parseFloat(match[0]);
  return Number.isNaN(n) ? undefined : n;
}

/**
 * Distance unit: the entity's own unit (km or mi), else the HA unit system, else km.
 */
export function distanceUnit(hass: HomeAssistant, entityId?: string): string {
  const fromEntity = getAttr(hass, entityId, "unit_of_measurement");
  if (fromEntity) return fromEntity;
  return hass.config?.unit_system?.length === "mi" ? "mi" : "km";
}

export function round(n: number | undefined): number {
  return Math.round(n ?? 0);
}

/**
 * Vehicle kind is derived from which entities are configured.
 * Geely Starray EM-i has both battery and fuel (super hybrid).
 */
export function deriveVehicleKind(entities: GeelyCardEntities): VehicleKind {
  const hasBattery = !!(entities.battery || entities.distance_to_empty_battery || entities.electric_range);
  const hasFuel = !!(entities.distance_to_empty_tank || entities.fuel_range || entities.fuel_amount || entities.fuel_level);
  if (hasBattery && hasFuel) return "hybrid";
  if (hasBattery) return "bev";
  if (hasFuel) return "ice";
  return "hybrid"; // Default to hybrid for Geely Starray EM-i
}

function isHome(hass: HomeAssistant, entities: GeelyCardEntities): boolean {
  if (!entities.location) return true;
  return getState(hass, entities.location) === "home";
}

export function isConnected(hass: HomeAssistant, entities: GeelyCardEntities): boolean {
  const plugEntity = entities.charger_plug || entities.charging_connection_status;
  if (!plugEntity) return false;
  const val = (getState(hass, plugEntity) || "").toLowerCase().trim();
  if (val === "on" || val === "true" || val === "connected" || val === "plugged_in" || val === "charging") {
    return true;
  }
  return (val.includes("connect") || val.includes("plug")) && !val.includes("disconnect") && !val.includes("unplug");
}

export function isCharging(hass: HomeAssistant, entities: GeelyCardEntities): boolean {
  const chargeStatusEntity = entities.charging_status;
  if (!chargeStatusEntity) return false;
  const val = (getState(hass, chargeStatusEntity) || "").toLowerCase().trim();
  if (val === "charging" || val === "fast_charging" || val === "trickle" || val === "on" || val === "true") return true;
  return val.includes("charg") && !val.includes("not") && !val.includes("discharg");
}

export function deriveChargeState(
  hass: HomeAssistant,
  entities: GeelyCardEntities,
  kind: VehicleKind
): ChargeState {
  if (kind === "ice") return "idle";
  if (!isConnected(hass, entities)) return "idle";
  return isCharging(hass, entities) ? "charging" : "scheduled";
}

export function statusKey(
  hass: HomeAssistant,
  entities: GeelyCardEntities,
  chargeState: ChargeState,
  kind: VehicleKind
): StatusKey {
  const isLocked = getState(hass, entities.lock) === "locked";
  const battery = numState(hass, entities.battery) ?? 0;
  const isFullyCharged = battery >= 100;

  if (entities.lock && isHome(hass, entities) && !isLocked) return "unlocked";
  if (kind === "ice") {
    return isLocked ? "locked" : "";
  }

  if (chargeState === "scheduled") {
    return isFullyCharged && isLocked ? "locked" : "scheduled";
  }
  if (chargeState === "charging") return "charging";
  if (isConnected(hass, entities)) return "plugged_in";
  if (isLocked) return "locked";
  return "";
}

/** Formats charging time left, e.g. "1 u 17 min resterend" or "35 min left" */
export function formatChargingTimeLeft(
  hass: HomeAssistant,
  entities: GeelyCardEntities,
  labels?: GeelyCardLabels
): string | null {
  const id = entities.charging_time_left || entities.time_to_full_charge;
  if (!id) return null;
  const raw = getState(hass, id);
  if (raw === undefined || raw === "" || raw === "unknown" || raw === "unavailable") return null;

  const n = Number(raw);
  let text: string;
  if (Number.isFinite(n)) {
    const unit = hass.states[id]?.attributes?.unit_of_measurement;
    const minutes = Math.round(unit === "h" ? n * 60 : unit === "s" ? n / 60 : n);
    if (minutes <= 0) return null;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    text = h > 0 ? `${h} u ${m} min` : `${m} min`;
  } else {
    text = raw;
  }
  return `${text} ${label(labels, "time_left")}`.trim();
}
