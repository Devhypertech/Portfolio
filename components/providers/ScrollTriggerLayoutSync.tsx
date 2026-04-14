"use client";

import { useEffect } from "react";
import { refreshScrollTriggers } from "@/lib/gsap/register-plugins";

function debounce(fn: () => void, ms: number) {
  let id: ReturnType<typeof setTimeout> | undefined;
  return () => {
    if (id) clearTimeout(id);
    id = setTimeout(fn, ms);
  };
}

/**
 * Keeps ScrollTrigger positions correct after resize, webfonts, and hydration.
 * Mount once near the root (e.g. in `layout.tsx` body).
 */
export function ScrollTriggerLayoutSync() {
  useEffect(() => {
    const run = () => refreshScrollTriggers();
    const debounced = debounce(run, 200);

    run();
    window.addEventListener("resize", debounced, { passive: true });

    const fonts = document.fonts;
    void fonts?.ready?.then(run);

    return () => {
      window.removeEventListener("resize", debounced);
    };
  }, []);

  return null;
}
