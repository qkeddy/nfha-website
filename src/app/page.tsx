import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Home as HomeIcon, KeyRound, Users } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { HeroCarousel, type Slide } from "@/components/hero-carousel";
import { Newsletter, Waves } from "@/components/newsletter";
import { PartnerLogos, PeopleStrip, SectionHeading } from "@/components/sections";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/blog";
import { communityRoles } from "@/lib/site";

const slides: Slide[] = [
  {
    name: "Workforce",
    src: "/images/people/police-officer.jpg",
    alt: "A smiling police officer talking with a resident",
    position: "70% 30%",
  },
  {
    name: "Emergency",
    src: "/images/funds/emergency.jpg",
    alt: "Firefighters walking toward a blaze",
  },
  {
    name: "Healthcare",
    src: "/images/funds/healthcare.jpg",
    alt: "A caregiver handing medication to an older woman",
  },
  {
    name: "Vital",
    src: "/images/funds/vital.jpg",
    alt: "A paramedic caring for a patient in an ambulance",
    position: "65% center",
  },
  {
    name: "Our Future",
    src: "/images/funds/our-future.jpg",
    alt: "A teacher working with a student in a classroom",
  },
];

const funds = [
  { name: "Next Gen", src: "/images/funds/next-gen.jpg", alt: "A young couple embracing in their new home" },
  { name: "Services", src: "/images/funds/services.jpg", alt: "A smiling librarian holding books" },
  { name: "Healthcare", src: "/images/funds/healthcare.jpg", alt: "A caregiver with an older woman" },
  { name: "Emergency", src: "/images/funds/emergency.jpg", alt: "Firefighters at work" },
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

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Intro + rotating hero */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.25fr] lg:items-stretch lg:gap-12 lg:px-8 lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-brand">
              <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
              Greenport, NY · Since 1988
            </p>
            <h1 className="text-5xl leading-[0.98] font-bold text-brand-night sm:text-6xl xl:text-7xl">
              Building Stronger{" "}
              <span className="text-brand">Communities.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              The <strong className="text-ink">North Fork Housing Alliance</strong>{" "}
              is a 40+ year old purpose and mission driven nonprofit helping low
              to middle income people in our community navigate the housing
              market, connecting the dots between new homebuyers, tenants and
              landlords and local and state government.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/the-fund">The Workforce Housing Fund</ButtonLink>
              <ButtonLink href="/about" variant="outline" arrow={false}>
                About us
              </ButtonLink>
            </div>
          </div>
          <HeroCarousel slides={slides} />
        </div>
      </section>

      {/* Fund intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-5xl leading-[0.95] font-bold sm:text-6xl">
              <span className="block text-brand">Workforce</span>
              <span className="block text-sky">Housing</span>
              <span className="block text-sky">Fund</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              The <strong className="text-ink">Workforce Housing Fund</strong>,
              powered by the North Fork Housing Alliance, is a comprehensive
              housing solution that squarely addresses our Missing Middle labor
              shortage and attainable housing crisis. These first responders
              and key healthcare and service providers are crucial to community
              vitality, sustainability and quality of life.
            </p>
            <div className="mt-8">
              <ButtonLink href="/the-fund">Learn more</ButtonLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {funds.map((f) => (
              <div
                key={f.name}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-night/80 via-brand-night/10 to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute bottom-3 left-4 font-display text-xl leading-none font-bold sm:text-2xl">
                  <span className="block text-white">{f.name}</span>
                  <span className="block text-sky">Housing Fund</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PeopleStrip />

      {/* Communities run on people */}
      <section className="relative overflow-hidden bg-brand-night text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-base font-bold tracking-wider text-sun uppercase">
            The missing middle
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl leading-tight font-bold sm:text-5xl">
            Communities run on people and the services and wellbeing they
            provide.
          </h2>
          <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Who the Fund supports">
            {communityRoles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 sm:text-base"
              >
                {role}
              </li>
            ))}
            <li className="rounded-full bg-sun px-4 py-2 text-sm font-bold text-ink sm:text-base">
              even our elected officials
            </li>
          </ul>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <p className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Every industry, our environment, ecosystem and economy is impacted
              by housing. A vibrant, diverse, thriving and sustainable community
              relies on people. The missing middle. Our present and future.
            </p>
            <div className="lg:text-right">
              <p className="mb-4 font-display text-xl font-bold">
                Support The Workforce Housing Fund to Build Stronger
                Communities.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 font-bold tracking-wide text-white uppercase transition-colors hover:bg-teal-deep"
              >
                <Heart className="h-5 w-5" aria-hidden="true" /> Donate now
              </Link>
            </div>
          </div>
        </div>
        <Waves className="h-16 w-full text-white" />
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

      {/* Latest news */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="News & perspectives" title="From the Alliance" />
            <ButtonLink href="/blog" variant="outline" arrow>
              All stories
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Partners */}
      <section className="border-t border-sand-deep bg-white">
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
