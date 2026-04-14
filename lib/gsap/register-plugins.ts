import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Registers ScrollTrigger once. Safe to call multiple times; no-ops on server.
 * `limitCallbacks` reduces work during fast scroll (ScrollTrigger perf knob).
 */
export function registerGsapPlugins() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
  registered = true;
}

/** Call after layout/font/load changes so trigger positions stay accurate. */
export function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  ScrollTrigger.refresh();
}
