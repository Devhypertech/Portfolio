type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "mx-auto text-center [&>*]:mx-auto" : "";

  return (
    <div className={`mb-12 max-w-3xl space-y-4 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-400/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl md:leading-tight">
        <span className="text-gradient-premium">{title}</span>
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
