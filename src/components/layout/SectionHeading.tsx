export function SectionHeading({
  tag,
  title,
  subtitle,
  centered = false,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div
      data-reveal
      className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full hairline bg-surface/70 px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary backdrop-blur-sm ${centered ? "mx-auto" : ""}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
        {tag}
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
