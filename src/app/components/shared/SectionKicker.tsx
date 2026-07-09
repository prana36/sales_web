import type { ReactNode } from "react";

interface SectionKickerProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export default function SectionKicker({
  children,
  className = "",
  variant = "light",
}: SectionKickerProps) {
  const variantClass =
    variant === "dark"
      ? "bg-brand-gold text-brand-navy-950 shadow-sm shadow-brand-gold/30"
      : "border border-sky-100 bg-sky-50 text-sky-700";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${variantClass} ${className}`}
    >
      {variant !== "dark" ? (
        <span className="size-1.5 rounded-full bg-brand-gold" />
      ) : null}
      {children}
    </span>
  );
}
