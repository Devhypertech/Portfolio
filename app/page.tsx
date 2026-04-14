import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Workflows } from "@/components/sections/Workflows";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { RecentWork } from "@/components/sections/RecentWork";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#0B0B0F]">
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(167,139,250,0.08),transparent_45%)]"
          aria-hidden
        />
        <Hero />
        <About />
        <Skills />
        <Workflows />
        <Experience />
        <Projects />
        <RecentWork />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
