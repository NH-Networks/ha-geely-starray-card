# PowerShell builder for geely-starray-card.js
$volvoFile = "d:\Development\Geely\ha-card\temp-volvo\volvo-car-card.js"
$litLines = (Get-Content -Path $volvoFile -TotalCount 35) -join "`n"

$geelyCode = @'

// Geely Starray Card Icons
const GEELY_LOGO = {
  viewBox: "0 0 52 26",
  outline: [
    "M6 4h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM6 14h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"
  ],
  filled: [
    "M6 4h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM6 14h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"
  ]
};

const GEELY_LOCK = {
  viewBox: "0 0 24 24",
  outline: [
    "M17 9V7a5 5 0 0 0-10 0v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2zm-8-2a3 3 0 0 1 6 0v2H9V7zm10 13H5v-9h14v9zm-7-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
  ],
  filled: [
    "M17 9V7a5 5 0 0 0-10 0v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2zm-8-2a3 3 0 0 1 6 0v2H9V7zm3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  ]
};

const GEELY_LOCK_OPEN = {
  viewBox: "0 0 24 24",
  outline: [
    "M17 8V7a5 5 0 0 0-9.9-1H9.1A3 3 0 0 1 15 7v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2zm2 11H5v-9h14v9zm-7-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
  ],
  filled: [
    "M17 8V7a5 5 0 0 0-9.9-1H9.1A3 3 0 0 1 15 7v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2zm-5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  ]
};

const GEELY_FAN = {
  viewBox: "0 0 24 24",
  outline: [
    "M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.65-7.03c-.72.82-1.37 2.38-1.58 5.3-.03.45-.27.87-.62 1.1-.37.26-.89.31-1.32-.05C9.15 9.52 8.74 7.91 9 4.98c0-.41-.1-.71-.23-.91-.13-.21-.31-.36-.55-.45-.5-.2-1.23-.16-2.04.16C4.56 4.42 3 6.02 3 8c0 .82.18 1.65.97 2.35.83.72 2.38 1.36 5.3 1.58.45.03.87.27 1.1.61.26.37.31.89-.05 1.33-.81.98-2.42 1.4-5.35 1.13-.41 0-.71.1-.92.23-.2.13-.35.31-.45.55-.19.5-.15 1.23.17 2.04.64 1.63 2.24 3.18 4.22 3.18.82 0 1.65-.18 2.35-.97.72-.83 1.36-2.38 1.58-5.3.03-.45.27-.87.61-1.11.37-.25.89-.31 1.33.05.98.81 1.4 2.42 1.13 5.35 0 .41.1.71.23.92.13.2.31.35.55.45.5.19 1.23.15 2.04-.17 1.63-.64 3.18-2.24 3.18-4.22 0-.82-.18-1.65-.97-2.35-.83-.72-2.38-1.36-5.3-1.58-.45-.03-.87-.27-1.11-.61-.25-.37-.31-.89.05-1.33.81-.98 2.42-1.4 5.35-1.13.41 0 .71-.1.92-.23.2-.13.35-.31.45-.55.19-.5.15-1.23-.17-2.04C19.58 4.56 17.98 3 16 3c-.82 0-1.65.18-2.35.97z"
  ],
  filled: [
    "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1.65-6.03c-.72.82-1.37 2.38-1.58 5.3-.03.45-.27.87-.62 1.1-.37.26-.89.31-1.32-.05C9.15 9.52 8.74 7.91 9 4.98c0-.41-.1-.71-.23-.91-.13-.21-.31-.36-.55-.45-.5-.2-1.23-.16-2.04.16C4.56 4.42 3 6.02 3 8c0 .82.18 1.65.97 2.35.83.72 2.38 1.36 5.3 1.58.45.03.87.27 1.1.61.26.37.31.89-.05 1.33-.81.98-2.42 1.4-5.35 1.13-.41 0-.71.1-.92.23-.2.13-.35.31-.45.55-.19.5-.15 1.23.17 2.04.64 1.63 2.24 3.18 4.22 3.18.82 0 1.65-.18 2.35-.97.72-.83 1.36-2.38 1.58-5.3.03-.45.27-.87.61-1.11.37-.25.89-.31 1.33.05.98.81 1.4 2.42 1.13 5.35 0 .41.1.71.23.92.13.2.31.35.55.45.5.19 1.23.15 2.04-.17 1.63-.64 3.18-2.24 3.18-4.22 0-.82-.18-1.65-.97-2.35-.83-.72-2.38-1.36-5.3-1.58-.45-.03-.87-.27-1.11-.61-.25-.37-.31-.89.05-1.33.81-.98 2.42-1.4 5.35-1.13.41 0 .71-.1.92-.23.2-.13.35-.31.45-.55.19-.5.15-1.23-.17-2.04C19.58 4.56 17.98 3 16 3c-.82 0-1.65.18-2.35.97z"
  ]
};

const GEELY_BOLT = {
  viewBox: "0 0 24 24",
  outline: [
    "M13.85 1.06a1 1 0 0 1 .63 1.11l-1.29 7.33H17.5a1 1 0 0 1 .85 1.52l-7 11.5a1 1 0 0 1-1.84-.69l1.29-7.33H6.5a1 1 0 0 1-.85-1.52l7-11.5a1 1 0 0 1 1.2-.42zm-1.85 12.44l-1.5 8.5 7-11.5H12l1.5-8.5-7 11.5z"
  ],
  filled: [
    "M13.85 1.06a1 1 0 0 1 .63 1.11l-1.29 7.33H17.5a1 1 0 0 1 .85 1.52l-7 11.5a1 1 0 0 1-1.84-.69l1.29-7.33H6.5a1 1 0 0 1-.85-1.52l7-11.5a1 1 0 0 1 1.2-.42z"
  ]
};

const GEELY_GAS = {
  viewBox: "0 0 24 24",
  outline: [
    "M19 5h-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18h12v-7h1a2 2 0 0 0 2-2V7.5a2.5 2.5 0 0 0-2-2.45V5zm-5 15H6V4h8v16zm5-9h-1V7.5a.5.5 0 0 1 1 0V11zM8 6h4v4H8V6z"
  ],
  filled: [
    "M19 5h-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18h12v-7h1a2 2 0 0 0 2-2V7.5a2.5 2.5 0 0 0-2-2.45V5zm-5 15H6V4h8v16zm5-9h-1V7.5a.5.5 0 0 1 1 0V11zM8 6h4v4H8V6z"
  ]
};

const GEELY_DEFROST = {
  viewBox: "0 0 24 24",
  outline: [
    "M3 18h18a1 1 0 0 0 .96-1.27l-2-7A3 3 0 0 0 17.08 7.5H6.92a3 3 0 0 0-2.88 2.23l-2 7A1 1 0 0 0 3 18zm2.84-8.89A1 1 0 0 1 6.8 8.5h10.4a1 1 0 0 1 .96.73l1.83 6.41L4.01 15.64l1.83-6.53zM8 19v3h2v-3H8zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2z"
  ],
  filled: [
    "M3 18h18a1 1 0 0 0 .96-1.27l-2-7A3 3 0 0 0 17.08 7.5H6.92a3 3 0 0 0-2.88 2.23l-2 7A1 1 0 0 0 3 18zm5 1v3h2v-3H8zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2z"
  ]
};

const GEELY_TRUNK = {
  viewBox: "0 0 24 24",
  outline: [
    "M20.5 14.5l-3-7A2 2 0 0 0 15.65 6H8.35A2 2 0 0 0 6.5 7.5l-3 7A2 2 0 0 0 5.35 18H18.65a2 2 0 0 0 1.85-3.5zM8.35 8h7.3l2.14 5H6.21L8.35 8zM5.35 16l-.86-2h15l-.86 2H5.35zM12 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1z"
  ],
  filled: [
    "M20.5 14.5l-3-7A2 2 0 0 0 15.65 6H8.35A2 2 0 0 0 6.5 7.5l-3 7A2 2 0 0 0 5.35 18H18.65a2 2 0 0 0 1.85-3.5zM12 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1z"
  ]
};

const GEELY_FIND = {
  viewBox: "0 0 24 24",
  outline: [
    "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17zM7.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 1a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2z"
  ],
  filled: [
    "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM7.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 1a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2z"
  ]
};

// Default Dutch & English translations
const LABELS_NL = {
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
  battery: "Batterij"
};

const LABELS_EN = {
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
  battery: "Battery"
};

function getLabel(labels, key, locale = "nl") {
  if (labels && labels[key] !== undefined) return labels[key];
  const dict = locale === "en" ? LABELS_EN : LABELS_NL;
  return dict[key] ?? LABELS_NL[key] ?? "";
}

// Default Overlay for 2026 Geely Starray EM-i (White)
const DEFAULT_GEELY_OVERLAY = {
  cable_bottom: "30px",
  cable_width: "55%",
  pulse_left: "41%",
  pulse_top: "46%"
};

const MODEL_PRESETS = {
  "starray": DEFAULT_GEELY_OVERLAY,
  "starray-em-i": DEFAULT_GEELY_OVERLAY,
  "boyue-l": DEFAULT_GEELY_OVERLAY,
  "galaxy-l7": { cable_bottom: "32px", cable_width: "56%", pulse_left: "40%", pulse_top: "47%" },
  "ex5": { cable_bottom: "30px", cable_width: "54%", pulse_left: "38%", pulse_top: "48%" }
};

function resolveGeelyOverlay(model, override) {
  const preset = (model && MODEL_PRESETS[model.toLowerCase()]) || {};
  return { ...DEFAULT_GEELY_OVERLAY, ...preset, ...override };
}

// Helpers
function getHaState(hass, entityId) {
  if (!entityId || !hass || !hass.states) return undefined;
  return hass.states[entityId]?.state;
}

function getHaAttr(hass, entityId, attr) {
  if (!entityId || !hass || !hass.states) return undefined;
  return hass.states[entityId]?.attributes?.[attr];
}

function resolveHaImage(hass, value, attr) {
  if (!value) return undefined;
  if (hass && hass.states && hass.states[value] !== undefined) {
    return getHaAttr(hass, value, attr) || undefined;
  }
  return value;
}

function getHaNumState(hass, entityId) {
  const s = getHaState(hass, entityId);
  if (s === undefined) return undefined;
  const n = parseFloat(s);
  return Number.isNaN(n) ? undefined : n;
}

function getDistanceUnit(hass, entityId) {
  const u = getHaAttr(hass, entityId, "unit_of_measurement");
  if (u) return u;
  return hass?.config?.unit_system?.length === "mi" ? "mi" : "km";
}

function roundVal(n) {
  return Math.round(n ?? 0);
}

function isVehicleConnected(hass, entities) {
  const plugEntity = entities.charger_plug || entities.charging_connection_status;
  if (!plugEntity) return false;
  const val = (getHaState(hass, plugEntity) || "").toLowerCase();
  if (val === "on" || val === "true" || val === "connected" || val === "plugged_in" || val === "charging") {
    return true;
  }
  return (val.includes("connect") || val.includes("plug")) && !val.includes("disconnect") && !val.includes("unplug");
}

function isVehicleCharging(hass, entities) {
  const chargeStatusEntity = entities.charging_status;
  if (!chargeStatusEntity) return false;
  const val = (getHaState(hass, chargeStatusEntity) || "").toLowerCase();
  if (val === "charging" || val === "fast_charging" || val === "trickle") return true;
  return val.includes("charg") && !val.includes("not") && !val.includes("discharg");
}

function formatTimeLeft(hass, entities, labels) {
  const id = entities.charging_time_left || entities.time_to_full_charge;
  if (!id) return null;
  const raw = getHaState(hass, id);
  if (raw === undefined || raw === "" || raw === "unknown" || raw === "unavailable") return null;
  const n = Number(raw);
  let text;
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
  return `${text} ${getLabel(labels, "time_left")}`.trim();
}

// Main Geely Starray Card Component
class GeelyStarrayCardComponent extends ct {
  constructor() {
    super();
    this.actionsOpen = false;
    this.climateOn = false;
    this.defrostOn = false;
  }

  setConfig(config) {
    if (!config) {
      throw new Error("geely-starray-card: Invalid card configuration");
    }
    this.config = {
      name: "Geely Starray EM-i",
      show_actions: true,
      header: "classic",
      model: "starray-em-i",
      ...config,
      entities: config.entities || {},
    };
  }

  getCardSize() {
    return 3;
  }

  static getStubConfig() {
    return {
      type: "custom:geely-starray-card",
      name: "Geely Starray EM-i",
      model: "starray-em-i",
      header: "classic",
      entities: {
        battery: "sensor.geely_starray_battery_percentage",
        electric_range: "sensor.geely_starray_electric_range",
        fuel_range: "sensor.geely_starray_fuel_range",
        fuel_level: "sensor.geely_starray_fuel_level",
        charging_connection_status: "binary_sensor.geely_starray_charger_plug",
        charging_status: "sensor.geely_starray_charging_status",
        charging_time_left: "sensor.geely_starray_time_to_full_charge",
        lock: "lock.geely_starray_doors",
        location: "device_tracker.geely_starray_location",
        climate: "switch.geely_starray_ac",
        defrost: "switch.geely_starray_defrost",
        unlock_trunk: "button.geely_starray_unlock_trunk",
        find_car: "button.geely_starray_find_car",
      },
    };
  }

  get isDarkMode() {
    if (this.config.theme_mode === "dark") return true;
    if (this.config.theme_mode === "light") return false;
    return this.hass?.themes?.darkMode ?? true;
  }

  get appHeader() {
    return this.config.header === "app";
  }

  headerMain(kind, chargeState) {
    const e = this.config.entities;
    const dteBattery = getHaNumState(this.hass, e.electric_range || e.distance_to_empty_battery) ?? 0;
    const dteTank = getHaNumState(this.hass, e.fuel_range || e.distance_to_empty_tank) ?? 0;
    const battery = getHaNumState(this.hass, e.battery) ?? 0;
    const labels = this.config.labels;

    if (kind === "ice") {
      return {
        value: roundVal(dteTank),
        unit: getDistanceUnit(this.hass, e.fuel_range || e.distance_to_empty_tank),
        sublabel: getLabel(labels, "fuel"),
      };
    }

    if (this.appHeader || chargeState === "scheduled" || chargeState === "charging") {
      return {
        value: roundVal(battery),
        unit: "%",
        sublabel: getLabel(labels, "battery"),
      };
    }

    const total = roundVal(dteBattery + dteTank);
    return {
      value: total > 0 ? total : roundVal(battery),
      unit: total > 0 ? getDistanceUnit(this.hass, e.electric_range || e.distance_to_empty_battery) : "%",
      sublabel: total > 0 ? getLabel(labels, "total_range") : getLabel(labels, "battery"),
    };
  }

  headerSub1(kind, chargeState) {
    const e = this.config.entities;
    const dteBattery = getHaNumState(this.hass, e.electric_range || e.distance_to_empty_battery) ?? 0;
    const fuelAmount = getHaNumState(this.hass, e.fuel_amount || e.fuel_level);
    const tankCapacity = e.fuel_tank_capacity_l;
    const labels = this.config.labels;
    const batteryUnit = getDistanceUnit(this.hass, e.electric_range || e.distance_to_empty_battery);

    const fuelSub = () => {
      if (fuelAmount === undefined) return null;
      let pct = fuelAmount;
      if (tankCapacity && fuelAmount <= tankCapacity && tankCapacity > 0) {
        pct = (fuelAmount / tankCapacity) * 100;
      }
      return {
        icon: "gas",
        value: `${roundVal(pct)}%`,
        label: getLabel(labels, "fuel_level"),
      };
    };

    if (kind === "ice") return fuelSub();

    if (kind === "hybrid") {
      if (chargeState === "charging" && !this.appHeader) return fuelSub();
      return {
        icon: "lightning",
        value: `${roundVal(dteBattery)} ${batteryUnit}`,
        label: getLabel(labels, "electric"),
      };
    }

    if (chargeState === "scheduled" || this.appHeader) {
      return {
        icon: "lightning",
        value: `${roundVal(dteBattery)} ${batteryUnit}`,
        label: getLabel(labels, "electric"),
      };
    }
    return null;
  }

  headerSub2(kind, chargeState) {
    if (kind !== "hybrid" || (chargeState === "charging" && !this.appHeader)) return null;
    const tankEntity = this.config.entities.fuel_range || this.config.entities.distance_to_empty_tank;
    if (!tankEntity) return null;
    const dteTank = getHaNumState(this.hass, tankEntity) ?? 0;
    return `${roundVal(dteTank)} ${getDistanceUnit(this.hass, tankEntity)} ${getLabel(this.config.labels, "fuel")}`;
  }

  resolveCarImage(connected, isDark) {
    const img = this.config.images;
    if (connected) {
      const fromConf =
        (img && resolveHaImage(this.hass, img.charging || img.exterior_back, "exterior_back")) ||
        img?.fallback;
      if (fromConf) return fromConf;
      return isDark ? "/local/assets/starray-white-charging-dark.jpg" : "/local/assets/starray-white-charging-light.jpg";
    }

    const fromConf =
      (img && resolveHaImage(this.hass, img.parked || img.exterior_side_left, "exterior_side_left")) ||
      img?.fallback;
    if (fromConf) return fromConf;
    return isDark ? "/local/assets/starray-white-parked-dark.jpg" : "/local/assets/starray-white-parked-light.jpg";
  }

  render() {
    if (!this.hass || !this.config) return J``;

    const e = this.config.entities;
    const hasBattery = !!(e.battery || e.electric_range || e.distance_to_empty_battery);
    const hasFuel = !!(e.fuel_range || e.distance_to_empty_tank || e.fuel_amount || e.fuel_level);
    const kind = hasBattery && hasFuel ? "hybrid" : hasBattery ? "bev" : hasFuel ? "ice" : "hybrid";

    const connected = kind !== "ice" && isVehicleConnected(this.hass, e);
    const charging = kind !== "ice" && isVehicleCharging(this.hass, e);
    const chargeState = kind === "ice" ? "idle" : connected ? (charging ? "charging" : "scheduled") : "idle";

    const main = this.headerMain(kind, chargeState);
    const sub1 = this.headerSub1(kind, chargeState);
    const sub2 = this.headerSub2(kind, chargeState);

    const isLocked = getHaState(this.hass, e.lock) === "locked";
    const isHome = !e.location || getHaState(this.hass, e.location) === "home";
    let sKey = "";
    if (e.lock && isHome && !isLocked) sKey = "unlocked";
    else if (chargeState === "charging") sKey = "charging";
    else if (chargeState === "scheduled") sKey = "scheduled";
    else if (connected) sKey = "plugged_in";
    else if (isLocked) sKey = "locked";

    const statusText = sKey ? getLabel(this.config.labels, sKey) : "";
    const timeLeft = chargeState === "charging" ? formatTimeLeft(this.hass, e, this.config.labels) : null;
    const isDark = this.isDarkMode;
    const imgSrc = this.resolveCarImage(connected, isDark);
    const overlayClass = isDark ? "dark-theme" : "light-theme";

    return J`
      <ha-card>
        <div
          class="geely-card ${isDark ? "theme-dark" : "theme-light"} ${this.config.show_actions !== false ? "clickable" : ""}"
          @click=${this.openActions}
        >
          <!-- Background Car Render -->
          <div
            class="car-image"
            style="background-image: url('${imgSrc}');"
          ></div>

          <!-- Pulsing charging glow if charging -->
          ${charging ? this.renderPulse() : L}

          <!-- Cable overlay for custom vehicle renders -->
          ${connected && this.config.images?.exterior_back ? this.renderCable() : L}

          <!-- Header overlay -->
          <div class="header ${overlayClass}">
            <div class="brand-row">
              ${this.renderGeelyLogo()}
              <span class="vehicle-name">${this.config.name || "Geely Starray EM-i"}</span>
            </div>

            <!-- Primary Metric -->
            <div class="row main-row">
              <span class="main-value">
                ${main.value}<span class="main-unit"> ${main.unit}</span>
              </span>
            </div>

            <!-- Secondary Metrics -->
            <div class="sub-metrics">
              ${sub1
                ? J`
                    <div class="pill sub-pill">
                      ${sub1.icon === "lightning"
                        ? this.renderIcon(GEELY_BOLT, "icon-svg icon-electric", true)
                        : this.renderIcon(GEELY_GAS, "icon-svg icon-gas", true)}
                      <span class="sub-val">${sub1.value}</span>
                      <span class="sub-lbl">${sub1.label}</span>
                    </div>
                  `
                : L}
              ${sub2
                ? J`
                    <div class="pill sub-pill fuel-pill">
                      ${this.renderIcon(GEELY_GAS, "icon-svg icon-gas", true)}
                      <span class="sub-val">${sub2}</span>
                    </div>
                  `
                : L}
            </div>
          </div>

          <!-- Status Line: Bottom Left -->
          ${statusText
            ? J`
                <div class="status-badge ${sKey} ${overlayClass}">
                  <span class="status-dot ${charging ? "pulsing" : ""}"></span>
                  <span class="status-label">${statusText}</span>
                </div>
              `
            : L}

          <!-- Status Line: Bottom Right (Charging time left) -->
          ${timeLeft
            ? J`<div class="time-left-badge ${overlayClass}">${timeLeft}</div>`
            : L}

          <!-- Interactive Cockpit Controls Dialog -->
          ${this.actionsOpen ? this.renderActionsDialog(e, isDark) : L}
        </div>
      </ha-card>
    `;
  }

  renderGeelyLogo() {
    return J`
      <svg class="geely-badge" viewBox=${GEELY_LOGO.viewBox || "0 0 52 26"} fill="currentColor">
        ${GEELY_LOGO.filled.map(
          (d) => j`<path fill-rule="evenodd" clip-rule="evenodd" d=${d}></path>`
        )}
      </svg>
    `;
  }

  renderIcon(icon, className, filled = false) {
    return J`
      <svg class=${className} viewBox=${icon.viewBox || "0 0 24 24"} fill="currentColor">
        ${(filled ? icon.filled : icon.outline).map(
          (d) => j`<path fill-rule="evenodd" clip-rule="evenodd" d=${d}></path>`
        )}
      </svg>
    `;
  }

  renderPulse() {
    const overlay = resolveGeelyOverlay(this.config.model, this.config.overlay);
    return J`
      <div class="pulse-container" style="left: ${overlay.pulse_left}; top: ${overlay.pulse_top};">
        <span class="pulse" style="animation-delay: 0s"></span>
        <span class="pulse" style="animation-delay: 2s"></span>
        <span class="pulse" style="animation-delay: 4s"></span>
      </div>
    `;
  }

  renderCable() {
    const overlay = resolveGeelyOverlay(this.config.model, this.config.overlay);
    const src = this.config.images?.fallback || "/local/assets/geely-charge-cable.png";
    return J`
      <img
        class="cable"
        src=${src}
        style="bottom: ${overlay.cable_bottom}; width: ${overlay.cable_width};"
        alt="Charge Cable"
      />
    `;
  }

  openActions(ev) {
    if (this.config.show_actions === false) return;
    ev.stopPropagation();
    this.actionsOpen = true;
  }

  closeActions() {
    this.actionsOpen = false;
  }

  callLock(lock) {
    const entityId = this.config.entities.lock;
    if (!entityId) return;
    this.hass.callService("lock", lock ? "lock" : "unlock", { entity_id: entityId });
    this.closeActions();
  }

  toggleClimate() {
    const { climate, start_climatisation, stop_climatisation } = this.config.entities;
    if (climate) {
      if (climate.startsWith("switch.")) {
        this.hass.callService("switch", "toggle", { entity_id: climate });
      } else if (climate.startsWith("climate.")) {
        const cur = getHaState(this.hass, climate);
        this.hass.callService("climate", "set_hvac_mode", {
          entity_id: climate,
          hvac_mode: cur === "off" ? "heat_cool" : "off",
        });
      }
    } else if (start_climatisation || stop_climatisation) {
      const btn = this.climateOn ? stop_climatisation : start_climatisation;
      if (btn) this.hass.callService("button", "press", { entity_id: btn });
    }
    this.climateOn = !this.climateOn;
  }

  toggleDefrost() {
    const defrost = this.config.entities.defrost;
    if (defrost) {
      this.hass.callService("switch", "toggle", { entity_id: defrost });
      this.defrostOn = !this.defrostOn;
    }
  }

  triggerTrunk() {
    const trunk = this.config.entities.unlock_trunk;
    if (trunk) {
      if (trunk.startsWith("button.")) {
        this.hass.callService("button", "press", { entity_id: trunk });
      } else if (trunk.startsWith("cover.")) {
        this.hass.callService("cover", "toggle", { entity_id: trunk });
      }
    }
  }

  triggerFindCar() {
    const find = this.config.entities.find_car;
    if (find) {
      this.hass.callService("button", "press", { entity_id: find });
    }
  }

  renderActionsDialog(e, isDark) {
    const isLocked = getHaState(this.hass, e.lock) === "locked";
    const hasClimate = !!(e.climate || e.start_climatisation || e.stop_climatisation);
    const hasDefrost = !!e.defrost;
    const hasTrunk = !!e.unlock_trunk;
    const hasFind = !!e.find_car;
    const themeClass = isDark ? "dark" : "light";

    return J`
      <div
        class="actions-backdrop"
        @click=${(ev) => {
          ev.stopPropagation();
          this.closeActions();
        }}
      >
        <div class="actions-panel ${themeClass}" @click=${(ev) => ev.stopPropagation()}>
          <div class="actions-title">
            <span>${this.config.name || "Geely Starray"}</span>
            <button class="close-btn" @click=${() => this.closeActions()} aria-label="Sluiten">✕</button>
          </div>

          <div class="actions-grid">
            ${e.lock
              ? J`
                  <button
                    class="action-btn ${isLocked ? "active" : ""}"
                    @click=${() => this.callLock(!isLocked)}
                  >
                    ${this.renderIcon(isLocked ? GEELY_LOCK : GEELY_LOCK_OPEN, "action-svg", isLocked)}
                    <span>${isLocked ? getLabel(this.config.labels, "unlock") : getLabel(this.config.labels, "lock")}</span>
                  </button>
                `
              : L}

            ${hasClimate
              ? J`
                  <button
                    class="action-btn ${this.climateOn ? "active" : ""}"
                    @click=${() => this.toggleClimate()}
                  >
                    ${this.renderIcon(GEELY_FAN, "action-svg", this.climateOn)}
                    <span>${getLabel(this.config.labels, "climate")}</span>
                  </button>
                `
              : L}

            ${hasDefrost
              ? J`
                  <button
                    class="action-btn ${this.defrostOn ? "active" : ""}"
                    @click=${() => this.toggleDefrost()}
                  >
                    ${this.renderIcon(GEELY_DEFROST, "action-svg", this.defrostOn)}
                    <span>${getLabel(this.config.labels, "defrost")}</span>
                  </button>
                `
              : L}

            ${hasTrunk
              ? J`
                  <button class="action-btn" @click=${() => this.triggerTrunk()}>
                    ${this.renderIcon(GEELY_TRUNK, "action-svg")}
                    <span>${getLabel(this.config.labels, "trunk")}</span>
                  </button>
                `
              : L}

            ${hasFind
              ? J`
                  <button class="action-btn" @click=${() => this.triggerFindCar()}>
                    ${this.renderIcon(GEELY_FIND, "action-svg")}
                    <span>${getLabel(this.config.labels, "find_car")}</span>
                  </button>
                `
              : L}
          </div>
        </div>
      </div>
    `;
  }
}

GeelyStarrayCardComponent.styles = a`
  :host {
    --geely-cyan: #00e5ff;
    --geely-teal: #00d2c4;
    --geely-green: #00f5a0;
    --geely-dark-bg: #0b0f14;
    --geely-card-radius: 18px;
  }

  ha-card {
    overflow: hidden;
    border-radius: var(--geely-card-radius);
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Inter", sans-serif;
  }

  .geely-card {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    user-select: none;
  }

  .geely-card.clickable {
    cursor: pointer;
  }

  .car-image {
    position: absolute;
    inset: 0;
    z-index: 1;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .geely-card:hover .car-image {
    transform: scale(1.02);
  }

  .pulse-container {
    position: absolute;
    z-index: 2;
    pointer-events: none;
    width: 0;
    height: 0;
  }

  .pulse {
    position: absolute;
    left: -28px;
    top: -28px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 245, 160, 0.9) 0%,
      rgba(0, 229, 255, 0.6) 45%,
      rgba(0, 229, 255, 0) 75%
    );
    animation: geelyChargingPulse 4.5s ease-out infinite;
  }

  @keyframes geelyChargingPulse {
    0% {
      transform: scale(0.2);
      opacity: 0.95;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: scale(2.2);
      opacity: 0;
    }
  }

  .cable {
    position: absolute;
    left: 0;
    height: auto;
    object-fit: contain;
    pointer-events: none;
    z-index: 2;
  }

  .header {
    position: absolute;
    left: 18px;
    top: 18px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 6px;
    pointer-events: none;
  }

  .brand-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .geely-badge {
    width: 22px;
    height: 11px;
    color: var(--geely-cyan);
    filter: drop-shadow(0 0 6px rgba(0, 229, 255, 0.6));
  }

  .vehicle-name {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    opacity: 0.85;
  }

  .row {
    display: flex;
    align-items: baseline;
    white-space: nowrap;
  }

  .main-value {
    font-size: 52px;
    font-weight: 300;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .main-unit {
    font-size: 26px;
    font-weight: 300;
    letter-spacing: -0.02em;
    margin-left: 2px;
    opacity: 0.85;
  }

  .sub-metrics {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 2px;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(0, 0, 0, 0.35);
  }

  .icon-svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }

  .icon-electric {
    color: var(--geely-cyan);
    filter: drop-shadow(0 0 4px rgba(0, 229, 255, 0.8));
  }

  .icon-gas {
    color: #ffb74d;
  }

  .sub-val {
    font-weight: 600;
  }

  .sub-lbl {
    opacity: 0.75;
    font-weight: 400;
  }

  .status-badge {
    position: absolute;
    left: 18px;
    bottom: 18px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #aaa;
  }

  .status-badge.charging .status-dot,
  .status-badge.plugged_in .status-dot {
    background: var(--geely-green);
    box-shadow: 0 0 8px var(--geely-green);
  }

  .status-badge.locked .status-dot {
    background: var(--geely-cyan);
  }

  .status-badge.unlocked .status-dot {
    background: #ff7043;
  }

  .status-dot.pulsing {
    animation: dotPulse 1.8s infinite;
  }

  @keyframes dotPulse {
    0% { transform: scale(0.9); opacity: 0.7; }
    50% { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(0.9); opacity: 0.7; }
  }

  .time-left-badge {
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 3;
    font-size: 13px;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--geely-cyan);
  }

  .header.dark-theme,
  .status-badge.dark-theme {
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  }

  .header.light-theme,
  .status-badge.light-theme {
    color: #111827;
    text-shadow: 0 1px 8px rgba(255, 255, 255, 0.8);
  }

  .header.light-theme .pill {
    background: rgba(255, 255, 255, 0.65);
    border-color: rgba(0, 0, 0, 0.1);
    color: #111827;
  }

  .status-badge.light-theme,
  .time-left-badge.light-theme {
    background: rgba(255, 255, 255, 0.7);
    border-color: rgba(0, 0, 0, 0.1);
    color: #111827;
  }

  .actions-backdrop {
    position: absolute;
    inset: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.25s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .actions-panel {
    width: 88%;
    max-width: 320px;
    border-radius: 24px;
    padding: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideUp {
    from { transform: translateY(20px) scale(0.96); opacity: 0; }
    to { transform: translateY(0) scale(1); opacity: 1; }
  }

  .actions-panel.dark {
    background: rgba(20, 26, 34, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
  }

  .actions-panel.light {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #111827;
  }

  .actions-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .close-btn {
    background: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: inherit;
    opacity: 0.6;
    padding: 4px;
  }

  .close-btn:hover {
    opacity: 1;
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 12px 6px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.08);
    color: inherit;
  }

  .actions-panel.light .action-btn {
    background: rgba(0, 0, 0, 0.05);
  }

  .action-btn:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
  }

  .actions-panel.light .action-btn:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .action-btn.active {
    background: var(--geely-cyan);
    color: #0b0f14;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 229, 255, 0.4);
  }

  .action-svg {
    width: 24px;
    height: 24px;
  }
`;

t([ut({ attribute: !1 })], GeelyStarrayCardComponent.prototype, "hass", void 0);
t([ft()], GeelyStarrayCardComponent.prototype, "config", void 0);
t([ft()], GeelyStarrayCardComponent.prototype, "actionsOpen", void 0);
t([ft()], GeelyStarrayCardComponent.prototype, "climateOn", void 0);
t([ft()], GeelyStarrayCardComponent.prototype, "defrostOn", void 0);

if (!customElements.get("geely-starray-card")) {
  customElements.define("geely-starray-card", GeelyStarrayCardComponent);
}
if (!customElements.get("geely-car-card")) {
  customElements.define("geely-car-card", GeelyStarrayCardComponent);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "geely-starray-card",
  name: "Geely Starray Card",
  description: "A premium Lovelace card for the 2026 Geely Starray EM-i (White) Super Hybrid / PHEV / EV with charging & vehicle telemetry.",
  preview: true,
});
window.customCards.push({
  type: "geely-car-card",
  name: "Geely Car Card",
  description: "A Lovelace card for Geely vehicles (Starray EM-i, Boyue L, Galaxy L7, EX5).",
  preview: false,
});

export { GeelyStarrayCardComponent as GeelyStarrayCard };
'@

$fullContent = $litLines + "`n" + $geelyCode
Set-Content -Path "d:\Development\Geely\ha-card\geely-starray-card.js" -Value $fullContent -Encoding utf8
Copy-Item "d:\Development\Geely\ha-card\geely-starray-card.js" "d:\Development\Geely\ha-card\geely-car-card.js" -Force
Write-Host "Built geely-starray-card.js and geely-car-card.js successfully!"
