import React from "react";
import Link from "next/link";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

const variants: Record<Variant, string> = {
  solid:
    "bg-accent-600 text-white shadow-glow hover:bg-accent-500 hover:-translate-y-0.5",
  outline:
    "border border-accent-500/50 text-accent-300 hover:border-accent-400 hover:bg-accent-500/10 hover:-translate-y-0.5",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

/**
 * Link-styled button. `external` opens in a new tab; otherwise renders a
 * Next.js <Link> for internal navigation.
 */
export default function Button({
  href,
  external,
  variant = "solid",
  className,
  children,
}: ButtonAsLink) {
  const classes = `${base} ${variants[variant]} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
