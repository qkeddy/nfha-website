import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Home as HomeIcon, KeyRound, Users } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { HeroCarousel, type Slide } from "@/components/hero-carousel";
import { Newsletter } from "@/components/newsletter";
import { PartnerLogos, PeopleStrip, SectionHeading } from "@/components/sections";
import { communityRoles } from "@/lib/site";

/** Workforce Housing Fund carousel: five images, same headline on each. */
const slides: Slide[] = [
  {
    name: "Workforce",
    src: "/images/home/whf-paramedic.jpg",
    alt: "A paramedic caring for a patient in an ambulance",
    position: "65% center",
  },
  {
    name: "Workforce",
    src: "/images/home/whf-firefighters.jpg",
    alt: "Firefighters walking toward a blaze",
  },
  {
    name: "Workforce",
    src: "/images/home/whf-teacher.jpg",
    alt: "A teacher working with a student in a classroom",
  },
  {
    name: "Workforce",
    src: "/images/home/whf-farmer.jpg",
    alt: "A farmer holding a bunch of freshly pulled beets",
    position: "70% center",
  },
  {
    name: "Workforce",
    src: "/images/home/whf-caregiver.jpg",
    alt: "A caregiver handing medication to an older woman",
  },
];

const nfhaPhotos = [
  { src: "/images/home/couple-new-home.jpg", alt: "A couple embracing in their new home among moving boxes" },
  { src: "/images/home/habitat-volunteers.jpg", alt: "A family in Habitat for Humanity “Future Homeowner” shirts on a build site" },
  { src: "/images/home/family-adu.jpg", alt: "Three generations of a family walking to a backyard cottage" },
];

const needs = [
  "Critical shortage of homes / high home and construction costs",
  "Shortage affects the region’s ability to retain / attract workers",
  "Rentals unaffordable, especially for workforce",
  "Mission-critical service providers commute 45–90+ minutes each way, adding stress to their well-being and the environment",
  "Rapidly growing senior population",
  "Focus on wildlife & land preservation, overlooking our human endangered species",
];

const stats = [
  { value: "1988", label: "Serving the North Fork since" },
  { value: "40+", label: "Years of trusted service" },
  { value: "80–120%", label: "Of AMI: the missing middle the Fund serves" },
];

const pillars = [
  {
    icon: HomeIcon,
    title: "Affordable rentals",
    body: "We operate and maintain rental housing for low income North Fork residents.",
    color: "bg-sun",
  },
  {
    icon: KeyRound,
    title: "Rental assistance",
    body: "We manage the Section 8 / Housing Choice Voucher program so families can afford privately owned rentals.",
    color: "bg-sky",
  },
  {
    icon: Users,
    title: "Homebuyer counseling",
    body: "HUD-certified counseling helps local residents buy, stay and thrive in the community.",
    color: "bg-lime",
  },
];

function DonateNow() {
  return (
    <Link
      href="/donate"
      className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 font-bold tracking-wide text-white uppercase transition-colors hover:bg-teal-deep"
    >
      <Heart className="h-5 w-5" aria-hidden="true" /> Donate now
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      {/* NFHA hero */}
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative isolate min-h-[440px] overflow-hidden rounded-3xl bg-brand-night sm:min-h-[560px]">
          <Image
            src="/images/home/hero-keys.jpg"
            alt="A smiling couple holding up the keys to their new home"
            fill
            priority
            sizes="(min-width: 1280px) 1248px, 100vw"
            className="object-cover"
            style={{ objectPosition: "60% 30%" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-brand-night/80 via-brand-night/20 to-transparent"
            aria-hidden="true"
          />
          <h1 className="absolute inset-x-0 bottom-0 max-w-4xl p-6 font-display text-4xl leading-[0.98] font-bold text-white sm:p-10 sm:text-6xl xl:text-7xl">
            40+ Years Building a Stronger North Fork Community.
          </h1>
        </div>
      </section>

      {/* NFHA intro */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="max-w-4xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          The <strong className="text-ink">North Fork Housing Alliance</strong>{" "}
          is a 40+ year old mission-driven nonprofit organization focused on
          helping low to middle income people in our community navigate the
          housing market – connecting the dots between properties, tenants,
          landlords, new homebuyers, property owners, developers and local and
          state government. We are{" "}
          <strong className="text-ink">Building a Stronger North Fork Community.</strong>
        </p>
        <div className="mt-10 grid grid-cols-3 gap-1.5 sm:gap-3">
          {nfhaPhotos.map((p) => (
            <div key={p.src} className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1280px) 410px, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          <strong className="text-ink">
            We are the heart of the North Fork housing ecosystem
          </strong>{" "}
          – providing a range of comprehensive, community-based solutions,
          services, information and resources to make things happen to make
          sure everyone has a place to live while building a thriving community
          that makes an economic impact in our region.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/the-fund">The Workforce Housing Fund</ButtonLink>
          <ButtonLink href="/about" variant="outline" arrow={false}>
            About us
          </ButtonLink>
        </div>
      </section>

      {/* Workforce Housing Fund carousel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroCarousel slides={slides} className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]" />
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          The <strong className="text-ink">Workforce Housing Fund</strong>,
          powered by the{" "}
          <strong className="text-ink">North Fork Housing Alliance</strong>, is
          a comprehensive housing solution that squarely addresses our Missing
          Middle labor shortage and attainable housing crisis. These first
          responders and key healthcare and service providers are crucial to
          community vitality, sustainability and quality of life.
        </p>
      </section>

      <PeopleStrip className="mt-14" />

      {/* Communities run on people */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="max-w-4xl text-3xl leading-tight font-bold text-brand sm:text-5xl">
          Communities run on people and the services and well-being they
          provide.
        </h2>
        <p className="mt-6 max-w-5xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          {communityRoles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="text-teal"> • </span>}
              {role}
            </span>
          ))}
          <strong className="mt-1 block text-ink">Workforce Housing Fund</strong>
        </p>
        <div className="mt-8">
          <DonateNow />
        </div>
      </section>

      {/* Situation & need */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-sun/40 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-brand-night sm:text-4xl">Situation &amp; Need</h2>
          <p className="mt-4 max-w-4xl text-lg font-bold text-ink sm:text-xl">
            The North Fork is in the midst of a multi-decade housing crisis
            coupled with labor shortages:
          </p>
          <ul className="mt-4 max-w-4xl list-disc space-y-1.5 pl-6 text-lg text-ink marker:text-brand-night">
            {needs.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            { src: "/images/home/schoolhouse.jpg", alt: "A red schoolhouse-style building with a white cupola" },
            { src: "/images/home/classroom.jpg", alt: "A teacher working with young students at a table" },
          ].map((p) => (
            <div key={p.src} className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          Every industry, our environment, ecosystem and economy is impacted by
          housing. A vibrant, diverse, thriving and sustainable community relies
          on people. Our present and our future.{" "}
          <strong className="text-ink">
            Support the Workforce Housing Fund to Build a Stronger North Fork
            Community.
          </strong>
        </p>
        <div className="mt-8">
          <DonateNow />
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <dl className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col border-t-4 border-brand pt-5">
              <dt className="order-2 mt-2 text-ink-soft">{s.label}</dt>
              <dd className="font-display text-5xl font-bold text-brand-night">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* What we do */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we do" title="A steady presence, home by home">
            From Housing Choice Voucher administration to senior housing to the
            Cottages at Mattituck, our record of service is the foundation for
            what comes next.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl bg-white p-8">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${p.color}`}
                >
                  <p.icon className="h-7 w-7 text-ink" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-brand-night">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-10 inline-flex items-center gap-2 font-bold text-brand hover:text-brand-deep"
          >
            Explore services, programs &amp; initiatives
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Community landmarks */}
      <section className="grid gap-1.5 sm:grid-cols-2">
        {[
          { src: "/images/home/southold-town-hall.jpg", alt: "Southold Town Hall" },
          { src: "/images/home/brick-building.jpg", alt: "A historic brick building with an American flag" },
        ].map((p) => (
          <div key={p.src} className="relative aspect-[3/2]">
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      {/* Partners */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-base font-bold tracking-wider text-ink-soft uppercase">
            Strategic partners
          </h2>
          <div className="mt-8">
            <PartnerLogos />
          </div>
          <h2 className="mt-14 text-center text-base font-bold tracking-wider text-ink-soft uppercase">
            Sponsors
          </h2>
          <p className="mt-4 text-center text-ink-soft">
            Interested in sponsoring the Workforce Housing Fund?{" "}
            <Link href="/work-with-us" className="font-bold text-brand underline-offset-4 hover:underline">
              Let&apos;s talk.
            </Link>
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
