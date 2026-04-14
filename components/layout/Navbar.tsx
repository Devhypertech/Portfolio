"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#workflows", label: "Workflows" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#recent-work", label: "Recent work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ease-out ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#0B0B0F]/85 py-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent py-3"
      }`}
    >
      <Container as="div" className="flex h-14 items-center justify-between sm:h-16">
        <a
          href="#home"
          className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-xs font-medium text-zinc-500 sm:inline sm:text-[13px]">
            {siteConfig.title.split("|")[0]?.trim()}
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-[#0B0B0F] shadow-glow-sm transition hover:opacity-95"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 origin-center bg-zinc-200 transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-zinc-200 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-5 origin-center bg-zinc-200 transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`border-t border-white/[0.06] bg-[#0B0B0F]/95 px-4 py-5 backdrop-blur-2xl transition ${
            open ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 py-3 text-sm font-semibold text-[#0B0B0F]"
              onClick={() => setOpen(false)}
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
