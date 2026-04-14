"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillLucideIcon } from "@/components/ui/SkillLucideIcon";
import { services } from "@/lib/data/services";
import { useGsapScope } from "@/hooks/useGsapScope";
import { fadeUpOnScroll, fromOnScroll } from "@/lib/gsap/scroll-animations";

export function Services() {
  const rootRef = useGsapScope<HTMLElement>((section) => {
    fadeUpOnScroll("[data-services-heading]", section, {
      start: "top 80%",
      y: 32,
      duration: 0.85,
      ease: "power3.out",
    });
    fromOnScroll(
      "[data-service-card]",
      {
        opacity: 0,
        y: 48,
        scale: 0.97,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
      },
      section,
      { start: "top 74%" },
    );
  });

  return (
    <section
      id="services"
      className="relative border-t border-white/[0.06] py-24 sm:py-28"
      ref={rootRef}
    >
      <Container className="relative">
        <div data-services-heading>
          <SectionHeading
            eyebrow="Services"
            title="Engagement models that match how you work."
            description="Whether you need a full build, CMS rescue, or AI-enabled workflows — I embed with your team and own outcomes."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              data-service-card
              className="group/svc glass-panel relative overflow-hidden rounded-3xl p-7 transition duration-500 hover:border-violet-400/25 hover:shadow-[0_0_50px_-20px_rgba(167,139,250,0.35)] sm:p-8"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/25 to-violet-500/20 text-cyan-100 transition group-hover/svc:scale-105">
                <SkillLucideIcon id={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
