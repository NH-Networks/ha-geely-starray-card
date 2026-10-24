import { LitElement, html, svg, css, unsafeCSS, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, GeelyCardConfig, GeelyCardEntities, VehicleKind, ChargeState } from "./types";
import {
  getState,
  numState,
  resolveImage,
  round,
  distanceUnit,
  deriveVehicleKind,
  deriveChargeState,
  isConnected,
  isCharging,
  statusKey,
  formatChargingTimeLeft,
} from "./state";
import { DEFAULT_ASSETS, CABLE_IMAGE_PNG } from "./assets";
import {
  GeelyIcon,
  GEELY_LOGO_ICON,
  BOLT_ICON,
  LOCK_ICON,
  LOCK_OPEN_ICON,
  FAN_ICON,
  GAS_ICON,
  DEFROST_ICON,
  TRUNK_ICON,
  FIND_CAR_ICON,
} from "./icons";
import { label } from "./labels";
import { resolveOverlay } from "./overlays";

interface HeaderMain {
  value: number;
  unit: string;
  sublabel?: string;
}

type SubIcon = "lightning" | "gas";

interface HeaderSub {
  icon: SubIcon;
  value: string;
  label: string;
}

@customElement("geely-starray-card")
export class GeelyStarrayCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: GeelyCardConfig;
  @state() private actionsOpen = false;
  @state() private climateOn = false;
  @state() private defrostOn = false;

  public setConfig(config: GeelyCardConfig): void {
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

  public getCardSize(): number {
    return 3;
  }

  public static async getConfigElement(): Promise<HTMLElement> {
    return document.createElement("geely-starray-card-editor");
  }

  public static getStubConfig(): GeelyCardConfig {
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

  private get isDarkMode(): boolean {
    if (this.config.theme_mode === "dark") return true;
    if (this.config.theme_mode === "light") return false;
    return this.hass?.themes?.darkMode ?? true;
  }

  private get appHeader(): boolean {
    return this.config.header === "app";
  }

  private headerMain(kind: VehicleKind, chargeState: ChargeState): HeaderMain {
    const e = this.config.entities;
    const dteBattery = numState(this.hass, e.electric_range || e.distance_to_empty_battery) ?? 0;
    const dteTank = numState(this.hass, e.fuel_range || e.distance_to_empty_tank) ?? 0;
    const battery = numState(this.hass, e.battery) ?? 0;
    const labels = this.config.labels;

    if (kind === "ice") {
      return {
        value: round(dteTank),
        unit: distanceUnit(this.hass, e.fuel_range || e.distance_to_empty_tank),
        sublabel: label(labels, "fuel"),
      };
    }

    if (this.appHeader) {
      return {
        value: round(battery),
        unit: "%",
        sublabel: label(labels, "battery"),
      };
    }

    if (chargeState === "scheduled" || chargeState === "charging") {
      return {
        value: round(battery),
        unit: "%",
        sublabel: label(labels, "battery"),
      };
    }

    // Default: Total combined hybrid range
    const total = round(dteBattery + dteTank);
    return {
      value: total > 0 ? total : round(battery),
      unit: total > 0 ? distanceUnit(this.hass, e.electric_range || e.distance_to_empty_battery) : "%",
      sublabel: total > 0 ? label(labels, "total_range") : label(labels, "battery"),
    };
  }

  private headerSub1(kind: VehicleKind, chargeState: ChargeState): HeaderSub | null {
    const e = this.config.entities;
    const dteBattery = numState(this.hass, e.electric_range || e.distance_to_empty_battery) ?? 0;
    const fuelAmount = numState(this.hass, e.fuel_amount || e.fuel_level);
    const tankCapacity = e.fuel_tank_capacity_l;
    const labels = this.config.labels;
    const batteryUnit = distanceUnit(this.hass, e.electric_range || e.distance_to_empty_battery);

    const fuelSub = (): HeaderSub | null => {
      if (fuelAmount === undefined) return null;
      let pct = fuelAmount;
      if (tankCapacity && fuelAmount <= tankCapacity && tankCapacity > 0) {
        pct = (fuelAmount / tankCapacity) * 100;
      }
      return {
        icon: "gas",
        value: `${round(pct)}%`,
        label: label(labels, "fuel_level"),
      };
    };

    if (kind === "ice") return fuelSub();

    if (kind === "hybrid") {
      if (chargeState === "charging" && !this.appHeader) return fuelSub();
      return {
        icon: "lightning",
        value: `${round(dteBattery)} ${batteryUnit}`,
        label: label(labels, "electric"),
      };
    }

    if (chargeState === "scheduled" || this.appHeader) {
      return {
        icon: "lightning",
        value: `${round(dteBattery)} ${batteryUnit}`,
        label: label(labels, "electric"),
      };
    }
    return null;
  }

  private headerSub2(kind: VehicleKind, chargeState: ChargeState): string | null {
    if (kind !== "hybrid" || (chargeState === "charging" && !this.appHeader)) return null;
    const tankEntity = this.config.entities.fuel_range || this.config.entities.distance_to_empty_tank;
    if (!tankEntity) return null;
    const dteTank = numState(this.hass, tankEntity) ?? 0;
    return `${round(dteTank)} ${distanceUnit(this.hass, tankEntity)} ${label(this.config.labels, "fuel")}`;
  }

  private resolveCarImage(connected: boolean, isDark: boolean): string {
    const img = this.config.images;
    if (connected) {
      const fromConf =
        (img && resolveImage(this.hass, img.charging || img.exterior_back, "exterior_back")) ||
        img?.fallback;
      if (fromConf) return fromConf;
      return isDark ? DEFAULT_ASSETS.chargingDark : DEFAULT_ASSETS.chargingLight;
    }

    const fromConf =
      (img && resolveImage(this.hass, img.parked || img.exterior_side_left, "exterior_side_left")) ||
      img?.fallback;
    if (fromConf) return fromConf;

    switch (this.config.image_preset) {
      case "press_front":
        return DEFAULT_ASSETS.pressFront;
      case "press_rear":
        return DEFAULT_ASSETS.pressRear;
      case "plaza":
        return DEFAULT_ASSETS.plaza;
      case "cockpit":
        return DEFAULT_ASSETS.cockpit;
      case "studio_light":
        return DEFAULT_ASSETS.parkedLight;
      case "studio_dark":
        return DEFAULT_ASSETS.parkedDark;
      default:
        return isDark ? DEFAULT_ASSETS.parkedDark : DEFAULT_ASSETS.parkedLight;
    }
  }

  protected render(): TemplateResult {
    if (!this.hass || !this.config) return html``;

    const e = this.config.entities;
    const kind = deriveVehicleKind(e);
    const chargeState = deriveChargeState(this.hass, e, kind);
    const connected = kind !== "ice" && isConnected(this.hass, e);
    const charging = kind !== "ice" && isCharging(this.hass, e);
    const main = this.headerMain(kind, chargeState);
    const sub1 = this.headerSub1(kind, chargeState);
    const sub2 = this.headerSub2(kind, chargeState);
    const sKey = statusKey(this.hass, e, chargeState, kind);
    const statusText = sKey ? label(this.config.labels, sKey) : "";
    const timeLeft = chargeState === "charging" ? formatChargingTimeLeft(this.hass, e, this.config.labels) : null;
    const isDark = this.isDarkMode;
    const imgSrc = this.resolveCarImage(connected, isDark);
    const overlayClass = isDark ? "dark-theme" : "light-theme";

    return html`
      <ha-card>
        <div
          class="geely-card ${isDark ? "theme-dark" : "theme-light"} ${this.config.show_actions !== false ? "clickable" : ""}"
          style="--geely-aspect-ratio: ${this.config.aspect_ratio || "1 / 1"};"
          @click=${this.openActions}
        >
          <!-- Background Car Render -->
          <div
            class="car-image"
            style="background-image: url('${imgSrc}');"
          ></div>

          <!-- Pulsing charging glow if currently charging -->
          ${charging ? this.renderPulse() : nothing}

          <!-- Cable overlay for custom vehicle renders -->
          ${connected && this.config.images?.exterior_back ? this.renderCable() : nothing}

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
                ? html`
                    <div class="pill sub-pill">
                      ${sub1.icon === "lightning"
                        ? this.renderIcon(BOLT_ICON, "icon-svg icon-electric", true)
                        : this.renderIcon(GAS_ICON, "icon-svg icon-gas", true)}
                      <span class="sub-val">${sub1.value}</span>
                      <span class="sub-lbl">${sub1.label}</span>
                    </div>
                  `
                : nothing}
              ${sub2
                ? html`
                    <div class="pill sub-pill fuel-pill">
                      ${this.renderIcon(GAS_ICON, "icon-svg icon-gas", true)}
                      <span class="sub-val">${sub2}</span>
                    </div>
                  `
                : nothing}
            </div>
          </div>

          <!-- Status Line: Bottom Left -->
          ${statusText
            ? html`
                <div class="status-badge ${sKey} ${overlayClass}">
                  <span class="status-dot ${charging ? "pulsing" : ""}"></span>
                  <span class="status-label">${statusText}</span>
                </div>
              `
            : nothing}

          <!-- Status Line: Bottom Right (Charging time left) -->
          ${timeLeft
            ? html`<div class="time-left-badge ${overlayClass}">${timeLeft}</div>`
            : nothing}

          <!-- Interactive Cockpit Controls Dialog -->
          ${this.actionsOpen ? this.renderActionsDialog(e, isDark) : nothing}
        </div>
      </ha-card>
    `;
  }

  private renderGeelyLogo(): TemplateResult {
    return html`
      <svg class="geely-badge" viewBox=${GEELY_LOGO_ICON.viewBox || "0 0 52 26"} fill="currentColor">
        ${GEELY_LOGO_ICON.filled.map(
          (d) => svg`<path fill-rule="evenodd" clip-rule="evenodd" d=${d}></path>`
        )}
      </svg>
    `;
  }

  private renderIcon(icon: GeelyIcon, className: string, filled = false): TemplateResult {
    return html`
      <svg class=${className} viewBox=${icon.viewBox || "0 0 24 24"} fill="currentColor">
        ${(filled ? icon.filled : icon.outline).map(
          (d) => svg`<path fill-rule="evenodd" clip-rule="evenodd" d=${d}></path>`
        )}
      </svg>
    `;
  }

  private renderPulse(): TemplateResult {
    const overlay = resolveOverlay(this.config.model, this.config.overlay);
    return html`
      <div class="pulse-container" style="left: ${overlay.pulse_left}; top: ${overlay.pulse_top};">
        <span class="pulse" style="animation-delay: 0s"></span>
        <span class="pulse" style="animation-delay: 2s"></span>
        <span class="pulse" style="animation-delay: 4s"></span>
      </div>
    `;
  }

  private renderCable(): TemplateResult {
    const overlay = resolveOverlay(this.config.model, this.config.overlay);
    const src = this.config.images?.fallback || CABLE_IMAGE_PNG;
    return html`
      <img
        class="cable"
        src=${src}
        style="bottom: ${overlay.cable_bottom}; width: ${overlay.cable_width};"
        alt="Charge Cable"
      />
    `;
  }

  private openActions(ev: Event): void {
    if (this.config.show_actions === false) return;
    ev.stopPropagation();
    this.actionsOpen = true;
  }

  private closeActions(): void {
    this.actionsOpen = false;
  }

  private callLock(lock: boolean): void {
    const entityId = this.config.entities.lock;
    if (!entityId) return;
    this.hass.callService("lock", lock ? "lock" : "unlock", { entity_id: entityId });
    this.closeActions();
  }

  private toggleClimate(): void {
    const { climate, start_climatisation, stop_climatisation } = this.config.entities;
    if (climate) {
      const isSwitch = climate.startsWith("switch.");
      const isClimate = climate.startsWith("climate.");
      if (isSwitch) {
        this.hass.callService("switch", "toggle", { entity_id: climate });
      } else if (isClimate) {
        const cur = getState(this.hass, climate);
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

  private toggleDefrost(): void {
    const defrost = this.config.entities.defrost;
    if (defrost) {
      this.hass.callService("switch", "toggle", { entity_id: defrost });
      this.defrostOn = !this.defrostOn;
    }
  }

  private triggerTrunk(): void {
    const trunk = this.config.entities.unlock_trunk;
    if (trunk) {
      if (trunk.startsWith("button.")) {
        this.hass.callService("button", "press", { entity_id: trunk });
      } else if (trunk.startsWith("cover.")) {
        this.hass.callService("cover", "toggle", { entity_id: trunk });
      }
    }
  }

  private triggerFindCar(): void {
    const find = this.config.entities.find_car;
    if (find) {
      this.hass.callService("button", "press", { entity_id: find });
    }
  }

  private renderActionsDialog(e: GeelyCardEntities, isDark: boolean): TemplateResult {
    const isLocked = getState(this.hass, e.lock) === "locked";
    const hasClimate = !!(e.climate || e.start_climatisation || e.stop_climatisation);
    const hasDefrost = !!e.defrost;
    const hasTrunk = !!e.unlock_trunk;
    const hasFind = !!e.find_car;
    const themeClass = isDark ? "dark" : "light";

    return html`
      <div
        class="actions-backdrop"
        @click=${(ev: Event) => {
          ev.stopPropagation();
          this.closeActions();
        }}
      >
        <div class="actions-panel ${themeClass}" @click=${(ev: Event) => ev.stopPropagation()}>
          <div class="actions-title">
            <span>${this.config.name || "Geely Starray"}</span>
            <button class="close-btn" @click=${() => this.closeActions()} aria-label="Sluiten">✕</button>
          </div>

          <div class="actions-grid">
            ${e.lock
              ? html`
                  <button
                    class="action-btn ${isLocked ? "active" : ""}"
                    @click=${() => this.callLock(!isLocked)}
                  >
                    ${this.renderIcon(isLocked ? LOCK_ICON : LOCK_OPEN_ICON, "action-svg", isLocked)}
                    <span>${isLocked ? label(this.config.labels, "unlock") : label(this.config.labels, "lock")}</span>
                  </button>
                `
              : nothing}

            ${hasClimate
              ? html`
                  <button
                    class="action-btn ${this.climateOn ? "active" : ""}"
                    @click=${() => this.toggleClimate()}
                  >
                    ${this.renderIcon(FAN_ICON, "action-svg", this.climateOn)}
                    <span>${label(this.config.labels, "climate")}</span>
                  </button>
                `
              : nothing}

            ${hasDefrost
              ? html`
                  <button
                    class="action-btn ${this.defrostOn ? "active" : ""}"
                    @click=${() => this.toggleDefrost()}
                  >
                    ${this.renderIcon(DEFROST_ICON, "action-svg", this.defrostOn)}
                    <span>${label(this.config.labels, "defrost")}</span>
                  </button>
                `
              : nothing}

            ${hasTrunk
              ? html`
                  <button class="action-btn" @click=${() => this.triggerTrunk()}>
                    ${this.renderIcon(TRUNK_ICON, "action-svg")}
                    <span>${label(this.config.labels, "trunk")}</span>
                  </button>
                `
              : nothing}

            ${hasFind
              ? html`
                  <button class="action-btn" @click=${() => this.triggerFindCar()}>
                    ${this.renderIcon(FIND_CAR_ICON, "action-svg")}
                    <span>${label(this.config.labels, "find_car")}</span>
                  </button>
                `
              : nothing}
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
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
      aspect-ratio: var(--geely-aspect-ratio, 1 / 1);
      overflow: hidden;
      user-select: none;
    }

    .geely-card.clickable {
      cursor: pointer;
    }

    /* Car background container */
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

    /* Charging pulse glow */
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

    /* Header styling */
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

    /* Bottom status badges */
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
      0% {
        transform: scale(0.9);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.3);
        opacity: 1;
      }
      100% {
        transform: scale(0.9);
        opacity: 0.7;
      }
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

    /* Themes */
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

    /* Modal Cockpit Action Sheet */
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
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
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
      from {
        transform: translateY(20px) scale(0.96);
        opacity: 0;
      }
      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
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
}

export class GeelyStarrayCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: GeelyCardConfig;

  public setConfig(config: GeelyCardConfig): void {
    this._config = { ...config, entities: { ...config.entities } };
  }

  private _valueChanged(key: string, value: any, isEntity = false): void {
    if (!this._config) return;
    const newConfig = { ...this._config };
    if (isEntity) {
      newConfig.entities = { ...newConfig.entities, [key]: value };
    } else {
      (newConfig as any)[key] = value;
    }
    this._config = newConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;
    const e = this._config.entities || {};

    return html`
      <div class="card-config">
        <div class="form-row">
          <label>Naam / Model</label>
          <input
            type="text"
            .value=${this._config.name || "Geely Starray EM-i"}
            @change=${(ev: any) => this._valueChanged("name", ev.target.value)}
          />
        </div>

        <div class="form-row">
          <label>Header Weergave</label>
          <select
            .value=${this._config.header || "classic"}
            @change=${(ev: any) => this._valueChanged("header", ev.target.value)}
          >
            <option value="classic">Klassiek (Totaal Bereik + Opsplitsing)</option>
            <option value="app">Geely App Stijl (Batterij % Prominent)</option>
            <option value="hybrid">Hybride Focus</option>
          </select>
        </div>

        <div class="form-row">
          <label>Thema Modus</label>
          <select
            .value=${this._config.theme_mode || "auto"}
            @change=${(ev: any) => this._valueChanged("theme_mode", ev.target.value)}
          >
            <option value="auto">Automatisch (Volg Home Assistant)</option>
            <option value="dark">Donker (Dark Mode)</option>
            <option value="light">Licht (Light Mode)</option>
          </select>
        </div>

        <div class="form-row">
          <label>Voertuig Afbeelding (Preset)</label>
          <select
            .value=${this._config.image_preset || "studio_dark"}
            @change=${(ev: any) => this._valueChanged("image_preset", ev.target.value)}
          >
            <option value="studio_dark">Studio Render Donker (Geely Starray EM-i)</option>
            <option value="studio_light">Studio Render Licht (Geely Starray EM-i)</option>
            <option value="press_front">Europese Persfoto Voorkant 3/4 (Origineel)</option>
            <option value="press_rear">Europese Persfoto Achterkant 3/4 (Origineel)</option>
            <option value="plaza">Europese Introductie Warschau Plaza</option>
            <option value="cockpit">Cockpit & 15.4" Scherm Interieur</option>
          </select>
        </div>

        <div class="form-row">
          <label>Beeldverhouding (Aspect Ratio)</label>
          <select
            .value=${this._config.aspect_ratio || "1 / 1"}
            @change=${(ev: any) => this._valueChanged("aspect_ratio", ev.target.value)}
          >
            <option value="1 / 1">1:1 Vierkant (Standaard Dashboard)</option>
            <option value="16 / 10">16:10 Breedbeeld (Optimaal voor Persfoto)</option>
            <option value="16 / 9">16:9 Cinematic</option>
            <option value="4 / 3">4:3 Klassiek</option>
          </select>
        </div>

        <div class="section-title">Sensoren & Telemetrie</div>

        <div class="form-row">
          <label>Batterij Percentage (%)</label>
          <input
            type="text"
            placeholder="sensor.geely_battery_level"
            .value=${e.battery || ""}
            @change=${(ev: any) => this._valueChanged("battery", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Elektrisch Bereik (km)</label>
          <input
            type="text"
            placeholder="sensor.geely_electric_range"
            .value=${e.electric_range || ""}
            @change=${(ev: any) => this._valueChanged("electric_range", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Brandstof Bereik (km)</label>
          <input
            type="text"
            placeholder="sensor.geely_fuel_range"
            .value=${e.fuel_range || ""}
            @change=${(ev: any) => this._valueChanged("fuel_range", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Brandstof Niveau (%)</label>
          <input
            type="text"
            placeholder="sensor.geely_fuel_level"
            .value=${e.fuel_level || ""}
            @change=${(ev: any) => this._valueChanged("fuel_level", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Laadkabel Aangesloten Sensor</label>
          <input
            type="text"
            placeholder="binary_sensor.geely_charger_plug"
            .value=${e.charging_connection_status || e.charger_plug || ""}
            @change=${(ev: any) => this._valueChanged("charging_connection_status", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Laadstatus Sensor</label>
          <input
            type="text"
            placeholder="sensor.geely_charging_status"
            .value=${e.charging_status || ""}
            @change=${(ev: any) => this._valueChanged("charging_status", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Laadtijd Resterend Sensor</label>
          <input
            type="text"
            placeholder="sensor.geely_time_to_full_charge"
            .value=${e.charging_time_left || ""}
            @change=${(ev: any) => this._valueChanged("charging_time_left", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Vergrendeling / Deurslot (Lock)</label>
          <input
            type="text"
            placeholder="lock.geely_doors"
            .value=${e.lock || ""}
            @change=${(ev: any) => this._valueChanged("lock", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Locatie / Device Tracker</label>
          <input
            type="text"
            placeholder="device_tracker.geely_location"
            .value=${e.location || ""}
            @change=${(ev: any) => this._valueChanged("location", ev.target.value, true)}
          />
        </div>

        <div class="section-title">Bediening & Cockpit</div>

        <div class="form-row">
          <label>Klimaatregeling (Airco / Verwarming)</label>
          <input
            type="text"
            placeholder="switch.geely_ac of climate.geely_climate"
            .value=${e.climate || ""}
            @change=${(ev: any) => this._valueChanged("climate", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Voorruit Ontdooien (Defrost)</label>
          <input
            type="text"
            placeholder="switch.geely_defrost"
            .value=${e.defrost || ""}
            @change=${(ev: any) => this._valueChanged("defrost", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Kofferbak Ontgrendelen</label>
          <input
            type="text"
            placeholder="button.geely_unlock_trunk"
            .value=${e.unlock_trunk || ""}
            @change=${(ev: any) => this._valueChanged("unlock_trunk", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Voertuig Zoeken (Claxon / Knipperlicht)</label>
          <input
            type="text"
            placeholder="button.geely_find_car"
            .value=${e.find_car || ""}
            @change=${(ev: any) => this._valueChanged("find_car", ev.target.value, true)}
          />
        </div>
      </div>
    `;
  }

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px 0;
      font-family: inherit;
    }
    .section-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-color, #00e5ff);
      margin-top: 10px;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .form-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    label {
      font-size: 12px;
      font-weight: 500;
      opacity: 0.85;
    }
    input, select {
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: rgba(0, 0, 0, 0.25);
      color: inherit;
      font-size: 13px;
    }
    input:focus, select:focus {
      outline: none;
      border-color: var(--primary-color, #00e5ff);
    }
  `;
}

// Register custom elements for maximum compatibility
if (!customElements.get("geely-starray-card")) {
  customElements.define("geely-starray-card", GeelyStarrayCard);
}
if (!customElements.get("geely-car-card")) {
  customElements.define("geely-car-card", GeelyStarrayCard);
}
if (!customElements.get("geely-starray-card-editor")) {
  customElements.define("geely-starray-card-editor", GeelyStarrayCardEditor);
}

declare global {
  interface HTMLElementTagNameMap {
    "geely-starray-card": GeelyStarrayCard;
    "geely-car-card": GeelyStarrayCard;
  }
  interface Window {
    customCards?: { type: string; name: string; description: string; preview?: boolean }[];
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "geely-starray-card",
  name: "Geely Starray Card",
  description: "A premium Lovelace card for the 2026 Geely Starray EM-i (Super Hybrid / PHEV / EV) with charging and vehicle status.",
  preview: true,
});
window.customCards.push({
  type: "geely-car-card",
  name: "Geely Car Card",
  description: "A Lovelace card for Geely vehicles (Starray EM-i, Boyue L, Galaxy L7, EX5).",
  preview: false,
});
