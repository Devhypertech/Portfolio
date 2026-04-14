"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillLucideIcon } from "@/components/ui/SkillLucideIcon";
import { skillGroups } from "@/lib/data/skills";
import { useGsapScope } from "@/hooks/useGsapScope";
import { fadeUpOnScroll, fromOnScroll } from "@/lib/gsap/scroll-animations";

export function Skills() {
  const rootRef = useGsapScope<HTMLElement>((section) => {
    fadeUpOnScroll("[data-skills-heading]", section, {
      start: "top 80%",
      y: 36,
      duration: 0.85,
      ease: "power3.out",
    });
    fromOnScroll(
      "[data-skill-group]",
      {
        opacity: 0,
        y: 40,
        stagger: 0.14,
        duration: 0.8,
        ease: "power3.out",
      },
      section,
      { start: "top 76%" },
    );
    fromOnScroll(
      "[data-skill-pill]",
      {
        opacity: 0,
        y: 22,
        scale: 0.94,
        stagger: { each: 0.035, from: "start" },
        duration: 0.55,
        ease: "power2.out",
      },
      section,
      { start: "top 72%" },
    );
  });

  return (
    <section
      ref={rootRef}
      id="skills"
      className="relative border-t border-white/[0.06] py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <div data-skills-heading>
          <SectionHeading
            eyebrow="Core skills"
            title="Stack I ship with every week."
            description="From marketing sites to CRM dashboards — a toolkit tuned for speed, clarity, and long-term maintainability."
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              data-skill-group
              className="glass-panel rounded-3xl p-6 sm:p-8"
            >
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    data-skill-pill
                    className="group/skill flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition duration-500 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-glow-sm"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/15 text-cyan-200 transition group-hover/skill:scale-105">
                      <SkillLucideIcon
                        id={item.icon}
                        className="h-5 w-5 shrink-0"
                      />
                    </span>
                    <span className="text-sm font-medium text-zinc-200">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
