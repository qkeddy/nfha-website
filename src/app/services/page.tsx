import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, HandCoins, Hammer, Home, KeyRound, Network, Sparkles, Users } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services, Programs & Initiatives",
  description:
    "Rental assistance, affordable rentals, homebuyer counseling, home rehabilitation and the Workforce Housing Fund from the North Fork Housing Alliance.",
};

const services = [
  {
    icon: KeyRound,
    title: "Housing Choice Vouchers (Section 8)",
    body: "We administer the Section 8 rental subsidy program, making it possible for low and moderate income families to afford living in privately owned rentals.",
  },
  {
    icon: Home,
    title: "Affordable rental housing",
    body: "We operate and maintain rental housing for low income North Fork residents, including senior housing.",
  },
  {
    icon: Users,
    title: "Homebuyer counseling",
    body: "HUD-certified housing counseling helps new homebuyers in the greater community understand their options and stay rooted locally.",
  },
  {
    icon: Hammer,
    title: "Home rehabilitation",
    body: "Our rehabilitation program helps eligible owners repair and improve private properties so they remain safe and livable.",
  },
];

const programs = [
  {
    icon: HandCoins,
    title: "Workforce Housing Fund",
    body: "Preserving and developing homes for households earning 80–120% of AMI.",
    href: "/the-fund",
  },
  {
    icon: Network,
    title: "Community partnerships",
    body: "Working alongside Federal, State and local agencies to provide and maintain local housing opportunities.",
    href: "/work-with-us",
  },
  {
    icon: ClipboardCheck,
    title: "Tenant support services",
    body: "Support services for tenants in need, connecting them with the right resources at the right time.",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader icon={Network} title={<>Services, Programs &amp; Initiatives</>} accent="teal">
        <p>
          From rental assistance to homebuyer counseling, the{" "}
          <strong>North Fork Housing Alliance</strong> connects the dots between
          the entire income spectrum of new homebuyers, tenants and landlords and
          local and state government.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Services" title="Help for every step of the housing journey" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`rounded-3xl p-8 sm:p-10 ${
                ["bg-sand", "bg-mist", "bg-mist", "bg-sand"][i]
              }`}
            >
              <s.icon className="h-9 w-9 text-brand" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-bold text-brand-night">{s.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        <div className="relative aspect-[4/3]">
          <Image src="/images/places/neighborhood.jpg" alt="A family walking to their home" fill sizes="33vw" className="object-cover" />
        </div>
        <div className="flex items-center bg-marigold p-10">
          <p className="font-display text-3xl leading-tight font-bold text-ink">
            Helping local residents remain in the community they love.
          </p>
        </div>
        <div className="relative aspect-[4/3]">
          <Image src="/images/places/renovation.jpg" alt="A home under renovation" fill sizes="33vw" className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Programs & initiatives" title="Building what comes next" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {programs.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group rounded-3xl p-8 ring-1 ring-sand-deep transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-night/10"
            >
              <p.icon className="h-9 w-9 text-teal" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-brand-night group-hover:text-brand">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.body}</p>
            </a>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <Sparkles className="h-8 w-8 text-sun" aria-hidden="true" />
            <h2 className="mt-3 text-3xl font-bold">Not sure where to start?</h2>
            <p className="mt-2 text-white/80">Call or email our Greenport office and we&apos;ll point you in the right direction.</p>
          </div>
          <ButtonLink href="/contact" variant="sun">Contact us</ButtonLink>
        </div>
      </section>
    </>
  );
}
