"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/data/experience";
import { registerGsapPlugins } from "@/lib/gsap/register-plugins";
import { prefersReducedMotion } from "@/lib/motion-preference";

const ACCENTS = [
  {
    accent: "from-cyan-600/35 via-emerald-500/15 to-transparent",
    glow: "shadow-[inset_0_0_80px_rgba(34,211,238,0.12)]",
  },
  {
    accent: "from-violet-600/35 via-fuchsia-500/15 to-transparent",
    glow: "shadow-[inset_0_0_80px_rgba(167,139,250,0.12)]",
  },
  {
    accent: "from-sky-600/30 via-cyan-500/12 to-transparent",
    glow: "shadow-[inset_0_0_80px_rgba(56,189,248,0.1)]",
  },
  {
    accent: "from-amber-600/25 via-orange-500/12 to-transparent",
    glow: "shadow-[inset_0_0_80px_rgba(251,191,36,0.08)]",
  },
  {
    accent: "from-emerald-600/30 via-teal-500/12 to-transparent",
    glow: "shadow-[inset_0_0_80px_rgba(52,211,153,0.1)]",
  },
  {
    accent: "from-rose-600/25 via-violet-500/15 to-transparent",
    glow: "shadow-[inset_0_0_80px_rgba(244,63,94,0.08)]",
  },
  {
    accent: "from-indigo-600/30 via-cyan-500/10 to-transparent",
    glow: "shadow-[inset_0_0_80px_rgba(99,102,241,0.1)]",
  },
] as const;

/** Exactly one panel per experience row (7 boxes). */
const PANEL_COUNT = 7;

export function InfiniteLoopedPanels() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const panels = useMemo(() => {
    const slice = experience.slice(0, PANEL_COUNT);
    return slice.map((exp, i) => ({
      ...exp,
      ...ACCENTS[i % ACCENTS.length],
    }));
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    registerGsapPlugins();
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getMaxX = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getMaxX(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () =>
            `+=${Math.max(getMaxX(), window.innerHeight * 2, panels.length * 240)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.85,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, section);

    return () => ctx.revert();
  }, [panels.length]);

  return (
    <section
      ref={sectionRef}
      id="infinite-panels"
      className="relative bg-[#060609]"
      aria-label="Experience — horizontal scroll"
    >
      <div className="relative w-full overflow-hidden border-y border-white/[0.06] motion-reduce:overflow-x-auto motion-reduce:snap-x motion-reduce:snap-mandatory">
        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        >
          {panels.map((panel) => (
            <div
              key={`${panel.org}-${panel.role}`}
              className={`relative flex h-[min(72vh,620px)] w-[88vw] shrink-0 flex-col justify-end border-r border-white/[0.05] motion-reduce:snap-center sm:w-[52vw] md:w-[42vw] lg:w-[34vw] ${panel.glow}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${panel.accent}`}
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_15%,rgba(255,255,255,0.12),transparent_50%)]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#060609] via-[#060609]/65 to-transparent"
                aria-hidden
              />

              <div className="relative z-10 flex flex-1 flex-col justify-end p-6 sm:p-8 lg:p-10">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90 sm:text-[11px]">
                    {panel.period}
                  </p>
                  {panel.current ? (
                    <span className="rounded-full border border-cyan-500/35 bg-cyan-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cyan-200/95">
                      Current
                    </span>
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
                  {panel.role}
                </h3>
                <p className="mt-2 text-sm font-medium text-zinc-300 sm:text-base">
                  {panel.org}
                </p>
                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-zinc-500 sm:line-clamp-5 sm:text-[15px]">
                  {panel.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
