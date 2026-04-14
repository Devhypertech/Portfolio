"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { useGsapScope } from "@/hooks/useGsapScope";
import { fadeUpOnScroll } from "@/lib/gsap/scroll-animations";

const social = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Fiverr", href: siteConfig.social.fiverr },
] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  const rootRef = useGsapScope<HTMLElement>((section) => {
    fadeUpOnScroll("[data-contact-grid]", section, {
      start: "top 78%",
      y: 44,
      duration: 0.95,
      ease: "power3.out",
    });
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "website"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section
      ref={rootRef}
      id="contact"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-[#0B0B0F] via-[#0a0a10] to-[#08080c] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something sharp together."
          description="Share scope, timeline, and stack — I’ll respond with next steps, availability, and a clear engagement outline."
          align="center"
        />

        <div
          data-contact-grid
          className="mx-auto mt-4 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-panel space-y-5 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block space-y-2 text-sm">
                <span className="text-zinc-500">Name</span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-cyan-500/30 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:ring-2"
                />
              </label>
              <label className="block space-y-2 text-sm">
                <span className="text-zinc-500">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-cyan-500/30 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:ring-2"
                />
              </label>
            </div>
            <label className="block space-y-2 text-sm">
              <span className="text-zinc-500">Project details</span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Goals, stack, timeline, links…"
                className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-cyan-500/30 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:ring-2"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 py-3.5 text-sm font-semibold text-[#0B0B0F] shadow-glow-sm transition hover:brightness-110"
            >
              Send via email
            </button>
            {sent ? (
              <p className="text-center text-xs text-cyan-300/90">
                Your mail client should open — if not, email {siteConfig.email}{" "}
                directly.
              </p>
            ) : null}
          </form>

          <div className="flex flex-col justify-between gap-8">
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Direct
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block text-lg font-medium text-cyan-200 transition hover:text-cyan-100"
              >
                {siteConfig.email}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Prefer Fiverr for scoped gigs with milestones and reviews — link
                below.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Social
              </p>
              <ul className="mt-4 space-y-3">
                {social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between text-sm font-medium text-zinc-300 transition hover:text-white"
                    >
                      {link.label}
                      <span
                        className="translate-x-0 text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
