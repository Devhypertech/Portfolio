"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  cmsExpertiseIntro,
  recentWorkCustomReact,
  recentWorkShopify,
  recentWorkSquarespace,
  recentWorkWordPress,
} from "@/lib/data/recent-work";
import { useGsapScope } from "@/hooks/useGsapScope";
import { fadeUpOnScroll, fromOnScroll } from "@/lib/gsap/scroll-animations";

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; url: string }[];
}) {
  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6">
      <h3 className="mb-4 border-b border-white/[0.08] pb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-0.5 rounded-lg py-1 text-sm text-zinc-300 transition hover:text-white"
            >
              <span className="font-medium text-zinc-100 group-hover:text-cyan-200">
                {item.label}
              </span>
              <span className="truncate font-mono text-[11px] text-zinc-600 group-hover:text-zinc-500">
                {item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RecentWork() {
  const rootRef = useGsapScope<HTMLElement>((section) => {
    fadeUpOnScroll("[data-recent-intro]", section, {
      start: "top 80%",
      y: 28,
      duration: 0.85,
      ease: "power3.out",
    });
    fromOnScroll(
      "[data-recent-column]",
      {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      },
      section,
      { start: "top 74%" },
    );
  });

  return (
    <section
      ref={rootRef}
      id="recent-work"
      className="relative border-t border-white/[0.06] py-24 sm:py-28"
    >
      <Container className="relative">
        <SectionHeading
          eyebrow="Recent work"
          title="Live builds across CMS & custom stacks."
          description="A curated set of shipped properties — WordPress, Shopify, Squarespace, and custom React / Next.js applications."
        />

        <p
          data-recent-intro
          className="mb-12 max-w-4xl text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          {cmsExpertiseIntro}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div data-recent-column>
            <LinkColumn title="WordPress websites" links={recentWorkWordPress} />
          </div>
          <div data-recent-column className="space-y-6">
            <LinkColumn title="Shopify stores" links={recentWorkShopify} />
            <LinkColumn
              title="Squarespace"
              links={recentWorkSquarespace}
            />
          </div>
          <div data-recent-column className="lg:col-span-2">
            <LinkColumn
              title="Custom React & Next.js websites"
              links={recentWorkCustomReact}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
