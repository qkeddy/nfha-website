import Link from "next/link";

/** The NFHA nested-house mark, redrawn as SVG from the brand presentation. */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <path d="M3 45.5V17L24 3.5 45 17v28.5H3Z" />
      <path d="M10 45.5V20.5L24 11.5l14 9v25" />
      <path d="M17 45.5V24.5l7-4.5 7 4.5v21" />
    </svg>
  );
}

export function Logo({
  tone = "color",
  className = "",
}: {
  tone?: "color" | "light" | "muted";
  className?: string;
}) {
  const mark =
    tone === "light" ? "text-white" : tone === "muted" ? "text-ink" : "text-ink";
  const accent =
    tone === "light"
      ? "text-sky"
      : tone === "muted"
        ? "text-ink-soft"
        : "text-brand";
  const middle = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center gap-3 whitespace-nowrap ${className}`}
      aria-label="North Fork Housing Alliance, home"
    >
      <LogoMark className={`h-11 w-11 shrink-0 ${mark}`} />
      <span className="font-display text-[15px] leading-[1.02] font-bold tracking-tight">
        <span className={`block ${accent}`}>North Fork</span>
        <span className={`block ${middle}`}>Housing</span>
        <span className={`block ${accent}`}>Alliance</span>
      </span>
    </Link>
  );
}
