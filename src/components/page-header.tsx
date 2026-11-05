import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const accents = {
  sky: "bg-sky text-white",
  teal: "bg-teal text-white",
  plum: "bg-plum text-white",
  coral: "bg-coral text-white",
  sun: "bg-sun text-ink",
  lime: "bg-lime text-ink",
} as const;

export type Accent = keyof typeof accents;

/**
 * The colour-block page header from the brand presentation: a brand-blue icon
 * tile beside a bright title tile, with an optional intro paragraph below.
 */
export function PageHeader({
  icon: Icon,
  title,
  eyebrow,
  accent = "sky",
  children,
}: {
  icon: LucideIcon;
  title: ReactNode;
  eyebrow?: string;
  accent?: Accent;
  children?: ReactNode;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="relative flex min-h-40 items-center justify-center bg-brand p-8 sm:min-h-64">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden="true"
            />
            <Icon
              className="relative h-30 w-30 text-white sm:h-42 sm:w-42"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </div>
          <div
            className={`flex flex-col justify-center p-8 sm:p-12 ${accents[accent]}`}
          >
            {eyebrow && (
              <p className="mb-3 text-base font-bold tracking-wider uppercase opacity-80">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl leading-[1.02] font-bold sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
        </div>
        {children && (
          <div className="mx-auto max-w-3xl py-12 text-lg leading-relaxed text-ink-soft sm:py-16 sm:text-xl [&_strong]:font-bold [&_strong]:text-ink">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
