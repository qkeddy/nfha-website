import type { Metadata } from "next";
import Image from "next/image";
import { Building, Heart, Home, KeyRound, Landmark, Users } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { PeopleStrip, SectionHeading, fundStrip } from "@/components/sections";

export const metadata: Metadata = {
  title: "The Workforce Housing Fund",
  description:
    "A dedicated fund of the North Fork Housing Alliance for the preservation and development of housing for households earning 80% to 120% of Area Median Income.",
};

const heroPhotos = [
  { src: "/images/fund/server.jpg", alt: "A smiling restaurant server holding a tablet" },
  { src: "/images/fund/teacher.jpg", alt: "A teacher helping a student with schoolwork" },
  { src: "/images/fund/firefighter.jpg", alt: "A firefighter in a red helmet, seen from behind" },
  { src: "/images/fund/parent-child.jpg", alt: "A father lifting his toddler in a grocery aisle" },
];

const workPhotos = [
  { src: "/images/fund/work-truck.jpg", alt: "A contractor’s work truck with ladders parked outside a house" },
  { src: "/images/fund/renovation.jpg", alt: "A two-story house under renovation with work tables out front" },
  { src: "/images/fund/electrician.jpg", alt: "An electrician in a hard hat wiring a panel" },
];

const renderings = [
  { src: "/images/fund/rendering-colonial.jpg", alt: "Rendering of a white colonial-style multifamily house with black shutters" },
  { src: "/images/fund/rendering-aerial.jpg", alt: "Aerial rendering of three homes around a landscaped courtyard" },
  { src: "/images/fund/rendering-adu.jpg", alt: "Rendering of a small white accessory dwelling unit" },
  { src: "/images/fund/rendering-duplex.jpg", alt: "Rendering of a modern farmhouse-style duplex with two garages" },
];

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
        <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-3xl md:grid-cols-3">
          <div className="col-span-2 flex flex-col justify-end bg-brand p-8 sm:p-12">
            <p className="text-lg font-bold tracking-wider text-sun uppercase sm:text-xl">
              Powered by the North Fork Housing Alliance
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] font-bold sm:text-8xl">
              <span className="block text-white">Workforce</span>
              <span className="block text-sky">Housing</span>
              <span className="block text-sky">Fund</span>
            </h1>
          </div>
          {heroPhotos.map((p, i) => (
            <div key={p.src} className="relative aspect-square">
              <Image src={p.src} alt={p.alt} fill priority={i === 0} sizes="(min-width: 1280px) 410px, (min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* What it is */}
      <section id="what-it-is" className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <SectionHeading eyebrow="What it is" title="A dedicated fund for the missing middle" />
          <ButtonLink href="/donate" variant="sun" arrow={false} className="mt-8">
            Donate
          </ButtonLink>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            The <strong className="text-ink">Workforce Housing Fund</strong> is
            established as a dedicated fund of the North Fork Housing
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

      <PeopleStrip photos={fundStrip} />

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

      <section className="grid grid-cols-3 gap-1.5">
        {workPhotos.map((p) => (
          <div key={p.src} className="relative aspect-square">
            <Image src={p.src} alt={p.alt} fill sizes="33vw" className="object-cover" />
          </div>
        ))}
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <SectionHeading eyebrow="Intended outcomes" title="More homes. Stronger roots.">
            Through the acquisition of homes, property and the construction of
            ADUs, single and multi-family homes the Fund aims to increase the
            local supply of attainable rental housing, retain workers that
            support the local community, make productive and efficient use of
            residential property, and provide stable, energy-efficient quality
            housing to middle-income families and individuals who are being
            priced out of the area.
          </SectionHeading>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src="/images/fund/rendering-picket-gate.jpg"
              alt="Rendering of a garden path through a white picket gate into a neighborhood of cottage homes"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
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

      {/* Community housing solutions */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title="Community Housing solutions">
          Renderings courtesy True North Realty Associates.
        </SectionHeading>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {renderings.map((r) => (
            <div key={r.src} className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image src={r.src} alt={r.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
