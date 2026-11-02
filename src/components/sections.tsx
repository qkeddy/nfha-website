import Image from "next/image";
import { partners } from "@/lib/site";

export const peopleStrip = [
  { src: "/images/people/police-officer.jpg", alt: "A smiling police officer" },
  { src: "/images/people/teacher.jpg", alt: "A teacher helping a student" },
  { src: "/images/people/firefighter.jpg", alt: "A firefighter in a red helmet" },
  {
    src: "/images/people/parent-child.jpg",
    alt: "A father lifting his toddler in a grocery aisle",
  },
  {
    src: "/images/people/paramedic.jpg",
    alt: "A paramedic caring for a patient",
  },
  {
    src: "/images/people/shopkeeper.jpg",
    alt: "A restaurant worker holding a tablet",
  },
];

/** The row of community portraits used across the brand presentation. */
export function PeopleStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-1.5 sm:grid-cols-6 ${className}`}>
      {peopleStrip.map((p) => (
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
    <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
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
