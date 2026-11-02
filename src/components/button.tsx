import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "teal" | "brand" | "light" | "outline" | "sun";

const styles: Record<Variant, string> = {
  teal: "bg-teal text-white hover:bg-teal-deep",
  brand: "bg-brand text-white hover:bg-brand-deep",
  sun: "bg-sun text-ink hover:bg-marigold",
  light: "bg-white text-brand-night hover:bg-sand",
  outline:
    "border-2 border-current text-brand-night hover:bg-brand-night hover:text-white hover:border-brand-night",
};

export function ButtonLink({
  href,
  children,
  variant = "teal",
  arrow = true,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
} & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase transition-colors ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
