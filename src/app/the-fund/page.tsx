import type { Metadata } from "next";
import Image from "next/image";
import { Building, Heart, Home, KeyRound, Landmark, Users } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { PeopleStrip, SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "The Workforce Housing Fund",
  description:
    "A dedicated fund of the North Fork Housing Alliance for the preservation and development of housing for households earning 80% to 120% of Area Median Income.",
};

const mechanisms = [
  {
    icon: Home,
    title: "Purchase existing homes & add an ADU",
    body: "Purchase existing homes within Southold Town and, where zoning allows, add an accessory dwelling unit, creating two distinct rentals from a single parcel: the primary residence and the new ADU. This effectively doubles the households served per property while making efficient use of existing land and infrastructure.",
    color: "bg-sun",
  },
  {
    icon: Building,
    title: "Multifamily rentals on one parcel",
    body: "Pursue acquisitions and partnerships that allow for multiple rentals on one parcel of land.",
    color: "bg-sky",
  },
  {
    icon: KeyRound,
    title: "Permanently affordable home ownership",
    body: "Pursue acquisitions and partnerships that result in individually owned, income-restricted homes with strict caps on resale prices, equity increases and property alterations, keeping homes permanently affordable for future moderate-income buyers (similar to the Cottages at Mattituck).",
    color: "bg-lime",
  },
];

export default function FundPage() {
  return (
    <>
      {/* Hero collage */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-2 overflow-hidden rounded-3xl md:grid-cols-3 md:grid-rows-2">
          <div className="flex flex-col justify-end bg-brand p-8 sm:p-12 md:col-span-2">
            <p className="text-lg font-bold tracking-wider text-sun uppercase sm:text-xl">
              Powered by the North Fork Housing Alliance
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] font-bold sm:text-8xl">
              <span className="block text-white">Workforce</span>
              <span className="block text-sky">Housing</span>
              <span className="block text-sky">Fund</span>
            </h1>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image src="/images/people/shopkeeper.jpg" alt="A restaurant worker holding a tablet" fill priority sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/images/people/teacher.jpg" alt="A teacher with a student" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/images/people/firefighter.jpg" alt="A firefighter from behind" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/images/people/parent-child.jpg" alt="A father lifting his child" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* What it is */}
      <section id="what-it-is" className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <SectionHeading eyebrow="What it is" title="A dedicated fund for the missing middle" />
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            The <strong className="text-ink">Workforce Housing Fund</strong> (the
            Fund) is established as a dedicated fund of the North Fork Housing
            Alliance for the preservation and development of affordable housing
            units serving support personnel and other essential members of the
            local workforce.
          </p>
          <p>
            The Fund is specifically designed to address the housing needs of
            families and individuals whose household income falls between{" "}
            <strong className="text-ink">eighty percent (80%) and one hundred twenty percent (120%)</strong>{" "}
            of the Area Median Income (AMI), a &ldquo;middle-income&rdquo; or
            &ldquo;workforce&rdquo; bracket that is frequently underserved by
            traditional affordable housing programs.
          </p>
        </div>
      </section>

      {/* AMI band visual */}
      <section aria-labelledby="ami-heading" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-sand p-8 sm:p-12">
          <h2 id="ami-heading" className="font-display text-2xl font-bold text-brand-night">
            Who the Fund serves
          </h2>
          <div className="mt-8">
            <div className="relative h-14 overflow-hidden rounded-full bg-white">
              <div className="absolute inset-y-0 left-0 w-[40%] bg-sand-deep" />
              <div className="absolute inset-y-0 left-[40%] w-[20%] bg-brand" />
              <div className="absolute inset-y-0 left-[60%] right-0 bg-sky-soft/60" />
              <span className="absolute inset-y-0 left-[40%] flex w-[20%] items-center justify-center text-sm font-bold text-white sm:text-base">
                80–120%
              </span>
            </div>
            <div className="mt-3 grid grid-cols-[40%_20%_40%] text-xs text-ink-soft sm:text-sm">
              <span>Traditional affordable programs</span>
              <span className="text-center font-bold text-brand">Workforce Fund</span>
              <span className="text-right">Market rate</span>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-ink-soft">
            Households in the workforce bracket often earn too much for
            traditional assistance yet too little to afford local rents and
            home prices. These first responders and key healthcare and service
            providers are crucial to community vitality, sustainability and
            quality of life.
          </p>
        </div>
      </section>

      {/* Why we started it */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why we started it" title="Communities run on people">
          Every industry, our environment, ecosystem and economy is impacted by
          housing. A vibrant, diverse, thriving and sustainable community relies
          on people: the missing middle, our present and future. The Fund
          squarely addresses our Missing Middle labor shortage and attainable
          housing crisis.
        </SectionHeading>
      </section>

      <PeopleStrip />

      {/* How it works */}
      <section id="how-it-works" className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="Program mechanisms">
            The Fund operates through a multi-pronged development model designed
            to expand the supply of housing affordable to middle-income
            households (tenants earning 80% to 120% of AMI).
          </SectionHeading>
          <ol className="mt-12 grid gap-5 lg:grid-cols-3">
            {mechanisms.map((m, i) => (
              <li key={m.title} className="flex flex-col rounded-3xl bg-white p-8">
                <div className="flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${m.color}`}>
                    <m.icon className="h-7 w-7 text-ink" aria-hidden="true" />
                  </div>
                  <span className="font-display text-5xl font-bold text-sand-deep">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-brand-night">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes + renderings */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <SectionHeading eyebrow="Intended outcomes" title="More homes. Stronger roots.">
            Through the acquisition of homes and the construction of ADUs, the
            Fund aims to increase the local supply of attainable rental housing,
            retain workers that support the local community, make productive and
            efficient use of residential property, and provide stable, quality
            housing to middle-income families and individuals who are being
            priced out of the area.
          </SectionHeading>
          <figure>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/images/places/cottages-aerial.jpg" alt="Aerial rendering of cottage homes around a landscaped green" fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/images/places/cottages-street.jpg" alt="Rendering of a tree-lined street of cottage homes at sunset" fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
              </div>
            </div>
            <figcaption className="mt-3 text-sm text-ink-soft">
              Examples of Community Housing solutions. Renderings courtesy True
              North Realty Associates.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Funding sources + how to help */}
      <section id="help" className="bg-brand-night text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-base font-bold tracking-wider text-sun uppercase">Funding sources</p>
            <h2 className="mt-3 text-4xl font-bold">Capitalized by community</h2>
            <p className="mt-4 text-lg text-white/75">
              The Fund will be capitalized through fundraising drawing upon both
              private and public sources.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
                <Users className="h-7 w-7 text-sky" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">Private</h3>
                <p className="mt-1 text-white/75">
                  Donations, grants, corporate sponsorships and community-based
                  fundraising initiatives.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
                <Landmark className="h-7 w-7 text-sky" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">Public</h3>
                <p className="mt-1 text-white/75">
                  Municipal funds, county and state housing grants, federal
                  program allocations and other governmental funding for
                  affordable and workforce housing.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-sun p-8 text-ink sm:p-12">
            <Heart className="h-10 w-10" aria-hidden="true" />
            <h2 className="mt-5 text-4xl font-bold">How you can help</h2>
            <p className="mt-4 text-lg">
              Your gift helps keep the people who keep the North Fork running
              living here. Give, sponsor, or partner with us on a project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/donate" variant="brand" arrow={false}>Donate</ButtonLink>
              <ButtonLink href="/work-with-us" variant="outline">Partner with us</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
