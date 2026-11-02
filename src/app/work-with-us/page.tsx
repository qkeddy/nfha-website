import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Cog, HardHat, Landmark } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "We collaborate with organizations, municipalities, developers, builders, contractors and property owners to close the housing gap on the North Fork.",
};

const audiences = [
  {
    id: "organizations",
    icon: Building2,
    title: "Organizations",
    body: "Nonprofits, employers, foundations and businesses: sponsor the Workforce Housing Fund, co-host events, or help us reach the people who need us most.",
    color: "bg-sun",
  },
  {
    id: "municipalities",
    icon: Landmark,
    title: "Municipalities",
    body: "We partner with Federal, State and local agencies on policy, zoning and funding that make attainable housing possible.",
    color: "bg-sky",
  },
  {
    id: "builders",
    icon: HardHat,
    title: "Builders & property owners",
    body: "Developers, builders, contractors and owners: explore ADUs, multifamily parcels and permanently affordable ownership with us.",
    color: "bg-lime",
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      <PageHeader icon={Cog} title={<>Work With Us</>} accent="coral">
        <p>
          <strong>
            We collaborate with organizations, municipalities, developers,
            builders, contractors and property owners to create housing
            solutions that benefit all stakeholders across the North Fork.
          </strong>
        </p>
        <p className="mt-5">
          Be a change maker and help make an impact in our community. It takes a
          village to build a strong, inclusive, resilient and sustainable
          community.
        </p>
        <p className="mt-5">
          Contact us and let us know how we can work together to close the
          housing gap. We&apos;re open to new ideas that make sense and will make
          an impact.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Contact</ButtonLink>
        </div>
      </PageHeader>

      <section className="grid grid-cols-3 gap-1.5">
        {[
          { src: "/images/places/neighborhood.jpg", alt: "A family walking to a craftsman home" },
          { src: "/images/places/planning.jpg", alt: "A planner reviewing floor plans on a screen" },
          { src: "/images/places/renovation.jpg", alt: "A home interior under renovation" },
        ].map((img) => (
          <div key={img.src} className="relative aspect-square sm:aspect-[4/3]">
            <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover" />
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <article key={a.id} id={a.id} className="scroll-mt-28 rounded-3xl p-8 ring-1 ring-sand-deep">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.color}`}>
                <a.icon className="h-7 w-7 text-ink" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-brand-night">{a.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{a.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-sand p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-brand-night">Have an idea? Let&apos;s talk.</h2>
          <p className="mt-3 text-lg text-ink-soft">
            Email us at{" "}
            <a className="font-bold text-brand hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            or call {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
