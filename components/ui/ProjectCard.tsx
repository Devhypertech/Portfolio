import type { Project } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-card backdrop-blur-xl transition duration-500 ease-out will-change-transform hover:-translate-y-1.5 hover:border-cyan-400/25 hover:bg-white/[0.05] hover:shadow-[0_32px_80px_-40px_rgba(34,211,238,0.35)] sm:p-7">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/15 to-transparent opacity-0 blur-3xl transition duration-700 group-hover/card:opacity-100"
        aria-hidden
      />
      <div className="relative mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400 transition group-hover/card:border-cyan-500/20 group-hover/card:text-cyan-100/90"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="relative text-xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-zinc-500 transition group-hover/card:text-zinc-400 sm:text-[15px]">
        {project.description}
      </p>
      <div className="relative mt-8">
        {project.href ? (
          <a
            href={project.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:gap-3 hover:text-cyan-200"
          >
            Discuss similar build
            <span aria-hidden>→</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
