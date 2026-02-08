interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
