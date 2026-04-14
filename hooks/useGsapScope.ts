"use client";

import { useLayoutEffect, useRef, type DependencyList, type RefObject } from "react";
import gsap from "gsap";
import { registerGsapPlugins } from "@/lib/gsap/register-plugins";
import { prefersReducedMotion } from "@/lib/motion-preference";

type ScopeSetup<T extends HTMLElement> = (scope: T) => void;

/**
 * Runs GSAP code inside `gsap.context` scoped to a root element — kills tweens
 * and ScrollTriggers on unmount (App Router navigation-safe).
 *
 * - Client-only: no-ops on server; skips when `prefers-reduced-motion: reduce`.
 * - Pass `deps` when animations depend on props/data so timelines rebuild.
 *
 * The setup callback is kept in a ref so you do not need `useCallback` unless
 * you rely on `deps` to re-run the effect.
 */
export function useGsapScope<T extends HTMLElement = HTMLElement>(
  setup: ScopeSetup<T>,
  deps: DependencyList = [],
): RefObject<T> {
  const rootRef = useRef<T>(null);
  const setupRef = useRef(setup);
  setupRef.current = setup;

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    registerGsapPlugins();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      setupRef.current(root);
    }, root);

    return () => ctx.revert();
    // setup is read via setupRef; list explicit deps only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}
