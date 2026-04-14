"use client";

import Image from "next/image";
import profilePhoto from "@/app/profile.webp";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { useGsapScope } from "@/hooks/useGsapScope";
import { fadeUpOnScroll, fromOnScroll } from "@/lib/gsap/scroll-animations";

const highlights = [
  {
    title: "Agile leadership",
    body: "Strong experience leading agile workflows, production calendars, and cross-functional delivery from discovery to launch.",
  },
  {
    title: "Client communication",
    body: "I translate technical decisions for non-technical stakeholders, run discovery calls, and align scope, architecture, and timelines.",
  },
  {
    title: "Performance & UX",
    body: "Obsessed with fast loads, clear UI hierarchy, and maintainable codebases — whether on React, WordPress, or Shopify.",
  },
];

export function About() {
  const rootRef = useGsapScope<HTMLElement>((section) => {
    fadeUpOnScroll("[data-about-heading]", section, {
      start: "top 78%",
      y: 40,
      duration: 0.85,
      ease: "power3.out",
    });
    fromOnScroll(
      "[data-about-image]",
      {
        opacity: 0,
        x: -36,
        scale: 0.96,
        duration: 0.95,
        ease: "power3.out",
      },
      section,
      { start: "top 76%" },
    );
    fromOnScroll(
      "[data-about-copy]",
      {
        opacity: 0,
        x: 36,
        duration: 0.9,
        ease: "power3.out",
      },
      section,
      { start: "top 74%" },
    );
    fadeUpOnScroll("[data-about-card]", section, {
      start: "top 72%",
      y: 44,
      stagger: 0.14,
      duration: 0.8,
      ease: "power3.out",
    });
  });

  return (
    <section
      ref={rootRef}
      id="about"
      className="relative border-t border-white/[0.06] py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-section-fade"
        aria-hidden
      />
      <Container className="relative">
        <div data-about-heading>
          <SectionHeading
            eyebrow="About"
            title="Production-minded engineering."
            description="Nearly five years shipping web products for startups, agencies, and North American clients — with clarity, velocity, and craft."
          />
        </div>

        <div className="mb-16 grid items-start gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
          <div data-about-image className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/25 to-violet-500/20 opacity-80 blur-2xl" />
            <div className="glass-panel relative overflow-hidden rounded-3xl p-1.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src={profilePhoto}
                  alt={`${siteConfig.name} — about`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div data-about-copy className="space-y-6 text-base leading-relaxed text-zinc-400 md:text-lg">
            <p className="text-zinc-200">
              I&apos;m <span className="text-white">{siteConfig.name}</span>, a{" "}
              <span className="text-cyan-200/90">{siteConfig.title}</span> with
              nearly five years of professional experience across web development,
              full-stack delivery, and digital product leadership.
            </p>
            <p>
              Today I lead production at{" "}
              <span className="font-medium text-white">{siteConfig.company}</span>
              , partnering with US and Canadian teams to ship scalable,
              high-performance web applications. I also freelance on{" "}
              <span className="font-medium text-cyan-300/90">Fiverr</span> as a
              Level One seller with a 5-star rating and{" "}
              <span className="text-white">100+ successful projects</span> for
              clients worldwide.
            </p>
            <p>
              Beyond code, I run client meetings, explain technical trade-offs to
              stakeholders, and define architecture, workflows, and delivery
              timelines so projects finish on time — without surprises.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              data-about-card
              className="glass-panel group rounded-2xl p-6 transition duration-500 hover:border-cyan-500/25 hover:shadow-glow-sm"
            >
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 transition group-hover:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
