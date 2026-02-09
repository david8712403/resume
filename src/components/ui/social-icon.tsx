import type { ComponentProps } from "react";

interface SocialIconProps extends ComponentProps<"svg"> {
  kind: "github" | "linkedin" | "email";
}

export function SocialIcon({ kind, className, ...props }: SocialIconProps) {
  if (kind === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className={className}
        {...props}
      >
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8.6 2.2 1.6.9 1.7 2.9 1.2 3.6.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.1 0c2.3-1.6 3.3-1.2 3.3-1.2.7 1.6.3 2.8.2 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.5-5.5 5.9.4.4.8 1 .8 2.1v3.1c0 .4.2.7.8.6A12 12 0 0 0 12 .5" />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className={className}
        {...props}
      >
        <path d="M20.4 20.5h-3.6v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9V9h3.5v1.6h.1A3.8 3.8 0 0 1 16 8.7c3.7 0 4.4 2.4 4.4 5.6v6.2ZM5 7.4A2.1 2.1 0 1 1 5 3a2.1 2.1 0 0 1 0 4.3Zm1.8 13.1H3.2V9h3.6v11.5ZM22 0H2C.9 0 0 .8 0 1.9v20.2C0 23.2.9 24 2 24h20c1.1 0 2-.8 2-1.9V1.9C24 .8 23.1 0 22 0Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
