"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data/experience";
import { useGsapScope } from "@/hooks/useGsapScope";
import { fadeUpOnScroll, fromOnScroll } from "@/lib/gsap/scroll-animations";

export function Experience() {
  const rootRef = useGsapScope<HTMLElement>((section) => {
    fadeUpOnScroll("[data-exp-heading]", section, {
      start: "top 82%",
      y: 32,
      duration: 0.85,
      ease: "power3.out",
    });
    fromOnScroll(
      "[data-exp-item]",
      {
        opacity: 0,
        x: -28,
        stagger: 0.12,
        duration: 0.78,
        ease: "power3.out",
      },
      section,
      { start: "top 78%" },
    );
  });

  return (
    <section
      ref={rootRef}
      id="experience"
      className="relative border-t border-white/[0.06] py-24 sm:py-28"
    >
      <Container className="relative">
        <div data-exp-heading>
          <SectionHeading
            eyebrow="Experience"
            title="A timeline of leadership & craft."
            description="From internships to Head of Production — the through-line is ownership, communication, and shipping."
          />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="pointer-events-none absolute left-[11px] top-2 bottom-4 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/35 to-transparent sm:left-[13px]"
            aria-hidden
          />

          <ul className="relative space-y-0">
            {experience.map((item, index) => (
              <li
                key={`${item.org}-${item.role}`}
                data-exp-item
                className="relative pb-12 pl-10 sm:pl-12 sm:pb-14"
              >
                <span
                  className={`absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 sm:h-4 sm:w-4 ${
                    item.current
                      ? "border-cyan-400 bg-[#0B0B0F] shadow-[0_0_16px_rgba(34,211,238,0.55)]"
                      : "border-zinc-600 bg-[#0B0B0F]"
                  }`}
                  aria-hidden
                >
                  {item.current ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  ) : null}
                </span>

                <div className="glass-panel rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/85">
                        {item.period}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-zinc-400">
                        {item.org}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600 sm:pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
                    {item.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
