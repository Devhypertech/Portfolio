"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workflowTools } from "@/lib/data/workflows";
import { useGsapScope } from "@/hooks/useGsapScope";
import { fadeUpOnScroll, fromOnScroll } from "@/lib/gsap/scroll-animations";

export function Workflows() {
  const rootRef = useGsapScope<HTMLElement>((section) => {
    fadeUpOnScroll("[data-workflows-heading]", section, {
      start: "top 80%",
      y: 32,
      duration: 0.85,
      ease: "power3.out",
    });
    fromOnScroll(
      "[data-workflow-card]",
      {
        opacity: 0,
        y: 36,
        scale: 0.97,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
      },
      section,
      { start: "top 76%" },
    );
  });

  return (
    <section
      ref={rootRef}
      id="workflows"
      className="relative border-t border-white/[0.06] py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <div data-workflows-heading>
          <SectionHeading
            eyebrow="Delivery"
            title="Workflows implementation."
            description="Structured execution with industry-standard tooling — boards for scope, trackers for velocity, and channels that keep stakeholders aligned."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {workflowTools.map(({ name, description, Icon }) => (
            <article
              key={name}
              data-workflow-card
              className="glass-panel group flex flex-col rounded-2xl p-5 transition duration-500 hover:border-cyan-400/25 hover:shadow-glow-sm sm:p-6"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/15 text-cyan-200 transition group-hover:scale-105">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="text-base font-semibold text-white">{name}</h3>
              {description ? (
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                  {description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
