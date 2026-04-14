"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";
import { useGsapScope } from "@/hooks/useGsapScope";
import { fadeUpOnScroll, fromOnScroll } from "@/lib/gsap/scroll-animations";

export function Projects() {
  const rootRef = useGsapScope<HTMLElement>((section) => {
    fadeUpOnScroll("[data-projects-heading]", section, {
      start: "top 80%",
      y: 32,
      duration: 0.85,
      ease: "power3.out",
    });
    fromOnScroll(
      "[data-project-card]",
      {
        opacity: 0,
        y: 56,
        rotateX: -5,
        transformOrigin: "top center",
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      },
      section,
      { start: "top 74%" },
    );
  });

  return (
    <section
      id="projects"
      className="relative border-t border-white/[0.06] py-24 sm:py-28"
      ref={rootRef}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-950/5 via-transparent to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <div data-projects-heading>
          <SectionHeading
            eyebrow="Projects"
            title="Selected engagements & builds."
            description="Case-style snapshots — each engagement pairs modern frontends with pragmatic backends and measurable business outcomes."
          />
        </div>

        <div
          className="grid gap-6 sm:grid-cols-2"
          style={{ perspective: "1400px" }}
        >
          {projects.map((project) => (
            <div key={project.title} data-project-card>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
