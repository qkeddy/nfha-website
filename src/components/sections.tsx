import Image from "next/image";
import { partners } from "@/lib/site";

type Photo = { src: string; alt: string };

/** Homepage strip (Strip 1 in the 11-19-26 assets). */
export const homeStrip: Photo[] = [
  { src: "/images/people/strip/librarian-child.jpg", alt: "A librarian helping a child find a book" },
  { src: "/images/people/strip/firefighter-helmet.jpg", alt: "A firefighter in a red helmet, seen from behind" },
  { src: "/images/people/strip/farmer-leeks.jpg", alt: "A young farmer holding freshly picked leeks" },
  { src: "/images/people/strip/barista.jpg", alt: "A barista pouring latte art" },
  { src: "/images/people/strip/librarian.jpg", alt: "A smiling librarian holding books" },
  { src: "/images/people/strip/plumber.jpg", alt: "A plumber repairing pipes under a sink" },
];

/** Workforce Housing Fund strip (Strip 2 in the 11-19-26 assets). */
export const fundStrip: Photo[] = [
  { src: "/images/people/strip/grocery-clerk.jpg", alt: "A smiling grocery clerk in an apron" },
  { src: "/images/people/strip/firefighter.jpg", alt: "A firefighter in turnout gear in front of flames" },
  { src: "/images/people/strip/market-vendor.jpg", alt: "A farm stand vendor holding a tomato" },
  { src: "/images/people/strip/nurse.jpg", alt: "A nurse helping an older patient with a cane" },
  { src: "/images/people/strip/chef.jpg", alt: "A chef cooking over a flaming pan" },
  { src: "/images/people/strip/police-officer.jpg", alt: "A police officer working at a desk" },
];

/** The row of community portraits used across the brand presentation. */
export function PeopleStrip({
  photos = homeStrip,
  className = "",
}: {
  photos?: Photo[];
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-3 gap-1.5 sm:grid-cols-6 ${className}`}>
      {photos.map((p) => (
        <div key={p.src} className="relative aspect-square overflow-hidden">
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(min-width: 640px) 16vw, 33vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export function PartnerLogos() {
  return (
    <ul className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {partners.map((p) => (
        <li
          key={p.name}
          className="flex h-32 items-center justify-center rounded-2xl bg-white p-4 ring-1 ring-sand-deep"
        >
          <Image
            src={p.src}
            alt={p.name}
            width={p.width}
            height={p.height}
            className="max-h-24 w-auto object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-base font-bold tracking-wider text-brand uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight font-bold text-brand-night sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && (
        <div className="mt-4 text-lg leading-relaxed text-ink-soft">{children}</div>
      )}
    </div>
  );
}
