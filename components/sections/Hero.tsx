"use client";

import Image from "next/image";
import gsap from "gsap";
import profilePhoto from "@/app/profile.webp";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { useGsapScope } from "@/hooks/useGsapScope";

/** Character-stagger “typing” reveal — kept short for DOM size. */
const HERO_TAGLINE =
  "Head of Production at Hypertech Verse · 5★ Fiverr · 100+ global deliveries.";

export function Hero() {
  const rootRef = useGsapScope<HTMLElement>((root) => {
    const q = gsap.utils.selector(root);

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(q("[data-hero-mesh] > *"), {
      opacity: 0,
      scale: 0.88,
      duration: 1.25,
      stagger: 0.1,
      ease: "power2.out",
    })
      .from(
        q("[data-hero-photo-wrap]"),
        { opacity: 0, scale: 0.94, y: 32, duration: 1, ease: "power3.out" },
        "-=0.85",
      )
      .from(
        q("[data-hero-line]"),
        {
          yPercent: 108,
          opacity: 0,
          skewY: 2.5,
          stagger: 0.11,
          duration: 0.95,
        },
        "-=0.65",
      )
      .from(
        q("[data-type-char]"),
        {
          opacity: 0,
          y: 8,
          stagger: 0.011,
          duration: 0.035,
          ease: "none",
        },
        "-=0.45",
      )
      .from(
        q("[data-hero-cta] > *"),
        {
          y: 24,
          opacity: 0,
          stagger: 0.1,
          duration: 0.68,
          ease: "power3.out",
        },
        "-=0.25",
      );

    gsap.to(q("[data-hero-photo-inner]"), {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: 1.15,
        invalidateOnRefresh: true,
      },
    });

    gsap.to(q("[data-hero-mesh]"), {
      rotate: 4,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: 2.2,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36 lg:pb-40 lg:pt-40"
    >
      <div
        data-hero-mesh
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[min(92vw,540px)] w-[min(92vw,540px)] animate-mesh-shift rounded-full bg-cyan-500/22 blur-[110px]" />
        <div className="absolute -right-1/4 top-[18%] h-[min(72vw,440px)] w-[min(72vw,440px)] animate-mesh-shift rounded-full bg-violet-500/18 blur-[100px] [animation-delay:-8s]" />
        <div className="absolute bottom-[-10%] left-[25%] h-72 w-72 rounded-full bg-cyan-400/8 blur-[80px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div>
            <p className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 to-violet-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100/95 sm:text-[11px]">
              Production leadership · Full-stack delivery
            </p>

            <div className="max-w-2xl overflow-hidden">
              <h1 className="text-[2rem] font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                <span className="block overflow-hidden pb-1.5">
                  <span data-hero-line className="block">
                    {siteConfig.name}
                  </span>
                </span>
                <span className="block overflow-hidden pb-1.5">
                  <span
                    data-hero-line
                    className="block bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
                  >
                    {siteConfig.title}
                  </span>
                </span>
                <span className="block overflow-hidden pb-1.5">
                  <span data-hero-line className="block text-gradient-premium">
                    {siteConfig.tagline}
                  </span>
                </span>
              </h1>
            </div>

            <p className="mt-8 max-w-xl font-light leading-relaxed text-zinc-400 sm:text-lg">
              {HERO_TAGLINE.split("").map((char, i) => (
                <span key={i} data-type-char className="inline-block opacity-0">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>

            <div
              data-hero-cta
              className="mt-11 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-violet-500 px-8 py-3 text-sm font-semibold text-[#0B0B0F] shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)] transition hover:brightness-110"
              >
                Hire me
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-3 text-sm font-medium text-zinc-100 backdrop-blur-md transition hover:border-cyan-400/35 hover:bg-white/[0.07]"
              >
                View projects
              </a>
            </div>
          </div>

          <div
            data-hero-photo-wrap
            className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
          >
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-cyan-500/40 via-transparent to-violet-500/35 opacity-90 blur-3xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.85rem] border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-[2px] shadow-card">
              <div className="rounded-[1.75rem] bg-[#0B0B0F]/80 p-1 sm:p-1.5">
                <div
                  data-hero-photo-inner
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:aspect-[3/4]"
                >
                  <Image
                    src={profilePhoto}
                    alt={`${siteConfig.name} — portrait`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
