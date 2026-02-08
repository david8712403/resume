import Link from "next/link";
import type { ReactNode } from "react";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "primary" | "ghost";
  className?: string;
}

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80";

const variants = {
  primary:
    "bg-cyan-300 text-slate-900 shadow-[0_0_35px_-8px_rgba(34,211,238,0.9)] hover:bg-cyan-200",
  ghost:
    "border border-cyan-300/35 bg-slate-900/70 text-slate-100 hover:border-cyan-200/70 hover:bg-slate-800/80",
};

export function CtaLink({
  href,
  children,
  external = false,
  variant = "primary",
  className,
}: CtaLinkProps) {
  const mergedClassName = `${baseClassName} ${variants[variant]} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} className={mergedClassName} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={mergedClassName}>
      {children}
    </Link>
  );
}
