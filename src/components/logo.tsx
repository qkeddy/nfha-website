import Link from "next/link";
import {
  ALLIANCE_PATH,
  HOUSING_PATH,
  LOGO_VIEWBOX,
  MARK_PATH,
  MARK_VIEWBOX,
  NORTH_PATH,
} from "./logo-paths";

/** NFHA spiral-house mark (from NFHA LogoType_4c.pdf). Inherits text colour. */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={MARK_PATH} />
    </svg>
  );
}

/** Brand logotype colours, sampled from the supplied logo files. */
const TONES = {
  // NFHA LogoType_4c
  color: { mark: "#181312", accent: "#3871c1", middle: "#181312" },
  // NFHA LogoType_grays
  gray: { mark: "#181312", accent: "#6e6f76", middle: "#181312" },
  light: { mark: "#ffffff", accent: "#6cc3f0", middle: "#ffffff" },
} as const;

/** The full logotype (mark + "North Fork Housing Alliance") as one SVG. */
export function LogoType({
  tone = "color",
  className = "h-11 w-auto",
}: {
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const c = TONES[tone];
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      role="img"
      aria-label="North Fork Housing Alliance"
    >
      <path d={MARK_PATH} fill={c.mark} />
      <path d={NORTH_PATH} fill={c.accent} />
      <path d={HOUSING_PATH} fill={c.middle} />
      <path d={ALLIANCE_PATH} fill={c.accent} />
    </svg>
  );
}

export function Logo({
  tone = "color",
  className = "",
  logoClassName = "h-11 w-auto",
}: {
  tone?: keyof typeof TONES;
  className?: string;
  logoClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="North Fork Housing Alliance, home"
    >
      <LogoType tone={tone} className={logoClassName} />
    </Link>
  );
}
