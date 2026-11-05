import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Compass, HeartHandshake, House, Mail } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { LogoMark } from "@/components/logo";
import { SectionHeading } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 1988, the Greenport-based North Fork Housing Alliance has preserved and built affordable housing and stood beside the North Fork's most vulnerable residents.",
};

const board = [
  { name: "Paul Davis, Jr.", role: "President", note: "Retired School Teacher" },
  { name: "Edward Reale", role: "Vice-President", note: "Attorney" },
  { name: "Brittany Conrad", role: "Secretary", note: "Banker (Branch Manager)" },
  { name: "Stephanie Spooner", role: "Treasurer", note: "Retired Banker (Loan Officer)" },
  { name: "Doug Morris", role: "Member", note: "Community Business Owner" },
  { name: "Frances Ortiz", role: "Member", note: "Retired Community Worker" },
  { name: "Vernetta Taylor", role: "Member", note: "Community Worker" },
];

const properties = [
  {
    name: "The Cottages at Mattituck",
    body: "Permanently affordable, income-restricted homeownership with resale caps that keep homes attainable for future moderate-income buyers.",
  },
  {
    name: "Senior housing",
    body: "Safe, decent and affordable homes that let older residents age in the community they helped build.",
  },
  {
    name: "Affordable rentals",
    body: "Rental housing operated and maintained by NFHA for low income North Fork residents.",
  },
];

type Person = {
  name: string;
  role: string;
  org?: string;
  bio: React.ReactNode[];
};

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-brand underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

const staff: Person[] = [
  {
    name: "Tanya Palmore",
    role: "Executive Director",
    bio: [
      "Tanya has been the Executive Director of the North Fork Housing Alliance since 1996, responsible for the overall operation. She is a HUD Certified Housing Counselor, holds a Master of Science Degree in Tax Accounting and a Bachelor of Science Degree in Accounting, and currently serves on the Town of Southold Community Housing Advisory Board. She is a Board Member and Vice-President of Riverhead Housing Development Corporation, and the Board Chairperson of the Supervisory Committee for Suffolk Credit Union.",
      "Throughout her tenure she has developed a longstanding commitment to community service, housing advocacy, and improving the quality of life for those in need. Her years of experience reflect a deep understanding of the importance of housing stability and its impact on individuals, families, and the broader community – believing that safe and affordable housing is more than a basic necessity – it is the foundation for dignity, independence, and opportunity.",
    ],
  },
  {
    name: "Marilyn Sierra",
    role: "Housing Program Manager",
    bio: [
      "Marilyn is a HUD Certified Housing Counselor, responsible for Client Services and Housing Assistance, overseeing inquiries from housing program applicants, tenants, landlords, and community members.",
      "She represents the agency and participates in community meetings, collaborates on housing-related initiatives, and assists clients in navigating housing resources, benefits, and community-based services and supports outreach efforts that increase awareness of available housing programs. Marilyn also provides general and specific housing counseling and crisis intervention for homeowners including coordinating the rehabilitation program.",
    ],
  },
  {
    name: "Sylvia Smith",
    role: "Section 8 Program Manager",
    bio: [
      "Sylvia is the Section 8 Housing Choice Voucher Program Manager, responsible for the overall administration, management, and oversight of the Housing Choice Voucher Program – providing guidance and supervision to program staff while working closely with the Executive Director, HUD, landlords, participants, and community partners to promote effective program administration and housing stability.",
      "She monitors program operations to ensure consistency, accuracy, accountability, and timely processing of program activities, and reviews HUD notices, regulatory updates, and program guidance and implements changes as necessary.",
    ],
  },
];

const fundLeaders: Person[] = [
  {
    name: "Katy Stokes",
    role: "Workforce Housing Fund Development Coordinator",
    bio: [
      "Katy is a Community Leader & Housing Advocate, Southold Peconic Civic Association Director, contributing journalist to the East End Beacon, Suffolk Times, Riverhead News Review, North Fork Sun and other media outlets, and Lawyer. She is a dynamic, proactive Southold resident engaged in all aspects of community – thoughtful and sensitive to the needs of stakeholders across the spectrum. She actively contributes to Southold Town government – providing insights and a caring point of view to help everyone in the community thrive.",
    ],
  },
  {
    name: "Patricia Kirkpatrick",
    role: "Workforce Housing Fund Development Coordinator",
    bio: [
      "Pat is a multi-faceted Community & Housing Advocate who brings deep and broad experience to solving our affordable housing crisis – with previous 30 years experience as a General Contractor in Fairfield County, CT and Westchester, NY, focused on remodeling houses for resale while maintaining affordability, as well as 5 years working in Affordable Housing in Greenwich, CT and 3 years and counting, currently working on zoning issues in Southold Town with ZUAC. She brings a unique, holistic perspective to do what makes sense for all stakeholders that will benefit the community.",
    ],
  },
];

const advisors: Person[] = [
  {
    name: "Michael Daly",
    role: "Senior Advisor & Housing Advocate",
    org: "True North Realty Associates",
    bio: [
      "Michael Daly is Senior Advisor at True North Realty Associates, focused on human infrastructure on the East End through his consulting, community engagement and delivery services.",
      "True North connects knowledge, people, organizations, institutions, businesses and resources to facilitate integrated housing and community-development solutions.",
      <>
        Michael played a role in the campaign to pass the Peconic Bay Region
        Community Housing Fund Public Referendum in 2022, estimated to raise
        over $650M for Community Housing Initiatives on the East End of Long
        Island, NY.{" "}
        <ExtLink href="https://www.truenorth.associates">www.truenorth.associates</ExtLink>
      </>,
    ],
  },
  {
    name: "Brent Robertson",
    role: "Founder & President",
    org: "Brand Robertson / North Fork Authentic",
    bio: [
      <>
        Brent Robertson, principal of Brand Robertson – a New York and
        Greenport-based multidisciplinary consultancy, is a brand development
        and marketing communications expert and entrepreneur with 30+ years
        experience building, transforming and growing purpose-driven brands and
        organizations to thrive.{" "}
        <ExtLink href="https://www.brandrobertson.com">www.brandrobertson.com</ExtLink>
      </>,
      <>
        Identifying the need, Brent conceived, advocated for and was awarded a
        New York State EDC grant in 2017 to build and grow North Fork Authentic,
        the regional umbrella brand of the North Fork of Long Island. NFA
        empowers the community to thrive through connection, collaboration,
        innovation, education and promotion – focused on economic
        sustainability for the region.{" "}
        <ExtLink href="https://www.northforkauthentic.com">www.northforkauthentic.com</ExtLink>
      </>,
      "Brent is an active 10 year member of the Southold EDC, is on the Board of the North Fork Promotional Council, and collaborates with other regional community organizations and housing initiatives.",
    ],
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function PersonCard({
  person,
  tile = "bg-brand text-white",
  className = "",
}: {
  person: Person;
  tile?: string;
  className?: string;
}) {
  return (
    <article className={`rounded-3xl bg-white p-8 sm:p-10 ${className}`}>
      <div className="flex items-center gap-5">
        <div
          className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl font-display text-2xl font-bold ${tile}`}
          aria-hidden="true"
        >
          {initials(person.name)}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-night">{person.name}</h3>
          <p className="font-semibold text-brand">{person.role}</p>
          {person.org ? (
            <p className="text-sm font-semibold text-ink-soft">{person.org}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
        {person.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <p className="text-base font-bold tracking-wider text-brand uppercase">
          About us
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl leading-[1.05] font-bold text-brand-night sm:text-6xl">
          A steady and trusted presence on the North Fork since 1988.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          The Greenport-based nonprofit{" "}
          <strong className="text-ink">North Fork Housing Alliance</strong>{" "}
          (NFHA) has preserved and built affordable housing, administered rental
          and buying assistance, and stood beside the community&apos;s most
          vulnerable residents. That long record of service, from Housing Choice
          Voucher administration to senior housing to the Cottages at Mattituck,
          is the foundation the Workforce Housing Fund seeks to build on.
        </p>
      </section>

      {/* Mission / Purpose / Values colour blocks */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2 overflow-hidden rounded-3xl md:grid-cols-3">
          <div className="flex aspect-[4/3] items-center justify-center bg-brand md:aspect-auto">
            <LogoMark className="h-42 w-42 text-white" />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/people/family-home.jpg"
              alt="A young family sitting beneath a cardboard roof"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/people/new-home.jpg"
              alt="A couple embracing in their new home"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="bg-sun p-8 lg:p-10">
            <h2 className="text-base font-bold tracking-wider uppercase">Mission</h2>
            <p className="mt-3 font-display text-xl leading-snug font-semibold">
              Develop and maintain affordable housing for local families,
              provide support services for tenants in need, and partner with
              Federal, State and local agencies to provide and maintain local
              housing opportunities.
            </p>
          </div>
          <div className="bg-sky p-8 lg:p-10">
            <h2 className="text-base font-bold tracking-wider uppercase">Purpose</h2>
            <p className="mt-3 font-display text-xl leading-snug font-semibold">
              Provide safe, decent and affordable housing to low and moderate
              income individuals and families on the North Fork of Long Island.
            </p>
          </div>
          <div className="bg-lime p-8 lg:p-10">
            <h2 className="text-base font-bold tracking-wider uppercase">
              Ethos &amp; values
            </h2>
            <p className="mt-3 font-display text-xl leading-snug font-semibold">
              <strong>Equity:</strong> promoting fairness and reducing barriers
              to housing.
            </p>
            <p className="mt-3 font-display text-xl leading-snug font-semibold">
              <strong>Respect:</strong> treating all people fairly and honestly.
            </p>
          </div>
        </div>
      </section>

      {/* What we do / why */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading eyebrow="What we do" title="Housing help across the income spectrum" />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            The North Fork Housing Alliance operates and maintains rental
            housing for low income North Fork residents, manages the Section 8
            rental subsidy program (making it possible for low and moderate
            income families to afford living in privately owned rentals),
            operates a program that rehabilitates private properties for
            eligible owners, and provides general housing counseling to new
            homebuyers so local residents can remain in the community in
            respectable housing.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-3xl sm:grid-cols-2">
          <div className="flex min-h-56 items-center justify-center bg-brand p-10">
            <HeartHandshake className="h-36 w-36 text-white" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <blockquote className="flex items-center bg-sun p-8">
            <p className="font-display text-xl leading-snug font-bold text-ink sm:text-2xl">
              &ldquo;Community housing embodies the belief that housing is a
              fundamental human right, strengthening neighborhoods, fostering
              belonging, and helping people thrive.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our team" title="Experienced, collaborative professionals">
            The North Fork Housing Alliance is an integrated team of highly
            experienced, collaborative professionals with diverse, complementary
            skills.
          </SectionHeading>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <PersonCard person={staff[0]} />
            <aside className="flex flex-col justify-between rounded-3xl bg-brand-night p-8 text-white sm:p-10">
              <div>
                <Mail className="h-8 w-8 text-sun" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-bold">Reach our staff</h3>
                <p className="mt-3 text-white/75">
                  Our office in Greenport is here to help with rental
                  assistance, housing counseling and more.
                </p>
              </div>
              <div className="mt-8 space-y-1 font-semibold">
                <p>
                  <a href={site.phoneHref} className="hover:text-sun">{site.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`} className="hover:text-sun">{site.email}</a>
                </p>
              </div>
            </aside>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {staff.slice(1).map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>

          <div id="fund-leadership" className="mt-20 scroll-mt-28">
            <SectionHeading eyebrow="Workforce Housing Fund" title="Expert leadership">
              The Fund is managed by Katy Stokes and Patricia Kirkpatrick who,
              as Workforce Housing Fund Development Coordinators have the
              authority to represent the NFHA in soliciting funds and
              negotiating the purchase of real property as well as dealing with
              government officials. They report directly to the North Fork
              Housing Alliance Executive Director.
            </SectionHeading>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {fundLeaders.map((p) => (
                <PersonCard key={p.name} person={p} tile="bg-sky text-white" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section id="board" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl sm:grid-cols-[2fr_3fr]">
          <div className="flex min-h-48 items-center justify-center bg-brand p-10">
            <Compass className="h-36 w-36 text-white" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className="flex items-center bg-sky p-8 sm:p-12">
            <h2 className="text-4xl leading-[1.05] font-bold text-white sm:text-5xl">
              Leadership with Vision &amp; Purpose
            </h2>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink-soft">
          The North Fork Housing Alliance is guided by a board of experienced
          professional community members providing complementary insights and
          expertise to make the greatest housing and support services impact for
          all North Fork stakeholders.
        </p>
        <h3 className="mt-12 text-base font-bold tracking-wider text-ink-soft uppercase">
          Board of directors
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {board.map((m) => (
            <li key={m.name} className="rounded-2xl p-6 ring-1 ring-sand-deep">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mist font-display font-bold text-brand">
                {initials(m.name)}
              </div>
              <p className="mt-4 font-display text-lg font-bold text-brand-night">{m.name}</p>
              <p className="text-sm font-bold text-brand">{m.role}</p>
              <p className="mt-1 text-sm text-ink-soft">{m.note}</p>
            </li>
          ))}
        </ul>

        <div id="advisors" className="mt-20 scroll-mt-28">
          <SectionHeading eyebrow="Advisors & support" title="Expertise behind the work">
            Our Advisors bring years of expertise in real estate, finance,
            planning, community and economic development and communications –
            providing insights, understanding, know-how and support services.
          </SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {advisors.map((p) => (
              <PersonCard
                key={p.name}
                person={p}
                tile="bg-mist text-brand"
                className="ring-1 ring-sand-deep"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Managed properties */}
      <section id="properties" className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Managed properties" title="Homes we build, preserve and care for" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {properties.map((p, i) => (
              <div key={p.name} className="rounded-3xl bg-white p-8">
                {i === 0 ? (
                  <House className="h-9 w-9 text-brand" aria-hidden="true" />
                ) : (
                  <Building2 className="h-9 w-9 text-brand" aria-hidden="true" />
                )}
                <h3 className="mt-5 text-xl font-bold text-brand-night">{p.name}</h3>
                <p className="mt-2 text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl bg-brand p-8 text-white sm:p-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-4xl leading-[0.95] font-bold sm:text-5xl">
              Workforce <span className="text-sky">Housing Fund</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Building on four decades of service to house the teachers, first
              responders and essential workers our community depends on.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/the-fund" variant="light">Learn more</ButtonLink>
            <ButtonLink href="/donate" variant="sun" arrow={false}>Donate</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
