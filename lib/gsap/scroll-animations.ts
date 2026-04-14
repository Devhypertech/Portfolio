import gsap from "gsap";
import { buildScrollTrigger } from "./scroll-trigger-options";

type FadeUpOptions = {
  /** ScrollTrigger start string, e.g. `"top 75%"` */
  start?: string;
  y?: number;
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number | gsap.StaggerVars;
};

/**
 * Fade + translateY in on first scroll into view.
 * Call only inside `gsap.context` (e.g. from `useGsapScope` callback).
 */
export function fadeUpOnScroll(
  targets: gsap.TweenTarget,
  trigger: Element,
  options: FadeUpOptions = {},
) {
  const {
    start = "top 78%",
    y = 28,
    duration = 0.8,
    ease = "power3.out",
    delay = 0,
    stagger,
  } = options;

  return gsap.from(targets, {
    opacity: 0,
    y,
    duration,
    ease,
    delay,
    stagger,
    scrollTrigger: buildScrollTrigger(trigger, start),
  });
}

type FromOnScrollOptions = {
  start?: string;
};

/**
 * Generic `gsap.from` + ScrollTrigger (fade-up, slide-in, 3D, etc.).
 * Prefer `fadeUpOnScroll` when you only need opacity + y.
 */
export function fromOnScroll(
  targets: gsap.TweenTarget,
  fromVars: gsap.TweenVars,
  trigger: Element,
  scroll?: FromOnScrollOptions,
) {
  return gsap.from(targets, {
    ...fromVars,
    scrollTrigger: buildScrollTrigger(trigger, scroll?.start),
  });
}
