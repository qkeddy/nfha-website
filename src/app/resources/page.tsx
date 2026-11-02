import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Search } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "Resources & Helpful Tools",
  description:
    "Housing, support and community services organizations, related links, and helpful information for North Fork residents.",
};

const groups = [
  {
    title: "Renting & rental assistance",
    links: [
      { label: "HUD: Housing Choice Voucher program", href: "https://www.hud.gov/topics/housing_choice_voucher_program_section_8" },
      { label: "NYS Homes and Community Renewal", href: "https://hcr.ny.gov/" },
      { label: "HUD: Tenant rights & resources", href: "https://www.hud.gov/topics/rental_assistance" },
    ],
  },
  {
    title: "Buying a home",
    links: [
      { label: "HUD: Find a housing counselor", href: "https://www.hud.gov/findacounselor" },
      { label: "SONYMA mortgage programs", href: "https://hcr.ny.gov/sonyma" },
      { label: "CFPB: Buying a house", href: "https://www.consumerfinance.gov/owning-a-home/" },
    ],
  },
  {
    title: "Local government",
    links: [
      { label: "Town of Southold", href: "https://www.southoldtownny.gov/" },
      { label: "Town of Riverhead", href: "https://www.townofriverheadny.gov/" },
      { label: "Village of Greenport", href: "https://www.villageofgreenport.org/" },
      { label: "Suffolk County", href: "https://www.suffolkcountyny.gov/" },
    ],
  },
  {
    title: "Support & community services",
    links: [
      { label: "211 Long Island: help line", href: "https://www.211longisland.org/" },
      { label: "NY State of Health", href: "https://nystateofhealth.ny.gov/" },
      { label: "NY HEAP energy assistance", href: "https://otda.ny.gov/programs/heap/" },
    ],
  },
];

const topics = [
  { title: "What is Area Median Income (AMI)?", href: "/blog/who-is-the-missing-middle" },
  { title: "How ADUs can double the homes on a parcel", href: "/blog/how-the-fund-works" },
  { title: "Ways to support attainable housing", href: "/blog/ways-to-get-involved" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader icon={Search} title={<>Resources &amp; Helpful Tools</>} accent="plum">
        <p>
          <strong>
            Find housing, support and community services organizations and
            related links,
          </strong>{" "}
          as well as helpful information and presentations below.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Links" title="Housing-related organizations" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="rounded-3xl bg-sand p-8">
              <h3 className="text-xl font-bold text-brand-night">{g.title}</h3>
              <ul className="mt-4 divide-y divide-sand-deep">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-3 font-semibold text-ink hover:text-brand"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft group-hover:text-brand" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Topics & content" title="Learn the basics" />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {topics.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="flex h-full items-start gap-4 rounded-2xl bg-white p-6 font-display text-lg font-bold text-brand-night transition-colors hover:text-brand"
                >
                  <BookOpen className="mt-1 h-5 w-5 shrink-0 text-plum" aria-hidden="true" />
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-ink-soft">
            Presentations and downloadable guides will be posted here.
            Looking for something specific?{" "}
            <Link href="/contact" className="font-bold text-brand hover:underline">
              Ask our team.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
