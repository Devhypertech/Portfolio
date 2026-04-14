import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#08080c] py-12">
      <Container className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm font-medium text-zinc-300">{siteConfig.name}</p>
        <p className="max-w-md text-xs leading-relaxed text-zinc-600">
          © {year} · Crafted with Next.js 14, Tailwind CSS, and GSAP.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
          <a
            href={siteConfig.social.linkedin}
            className="transition hover:text-cyan-300"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.fiverr}
            className="transition hover:text-cyan-300"
            rel="noreferrer"
            target="_blank"
          >
            Fiverr
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition hover:text-cyan-300"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
