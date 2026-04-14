/**
 * Defaults tuned for portfolio sections: fire once, refresh on resize.
 * Use with gsap.from / timelines via `scrollTrigger: buildScrollTrigger(...)`.
 */
export function buildScrollTrigger(trigger: Element, start: string = "top 78%") {
  return {
    trigger,
    start,
    once: true as const,
    invalidateOnRefresh: true,
  };
}
