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
      : "bg-brand-navy text-white shadow-sm shadow-brand-navy/20";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${variantClass} ${className}`}
    >
      {children}
    </span>
  );
}
