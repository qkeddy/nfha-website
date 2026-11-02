import Link from "next/link";
import { LogoMark } from "./logo";
import { mainNav, site } from "@/lib/site";
import { SocialIcon } from "./social-icon";

export function Footer() {
  return (
    <footer className="bg-sand text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <LogoMark className="h-14 w-14 text-ink" />
            <p className="font-display text-lg leading-[1.05] font-bold">
              <span className="block text-ink-soft">North Fork</span>
              <span className="block">Housing</span>
              <span className="block text-ink-soft">Alliance</span>
            </p>
          </div>
          <p className="mt-5 max-w-sm text-ink-soft">
            Since 1988, a steady and trusted presence on the North Fork. We are
            Building Stronger Communities.
          </p>
          <ul className="mt-6 flex gap-2">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white transition-colors hover:bg-brand"
                >
                  <SocialIcon name={s.label} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold tracking-wider text-ink-soft uppercase">
            Visit &amp; contact
          </h2>
          <address className="mt-4 space-y-1 not-italic">
            <p className="font-semibold">{site.name}</p>
            <p>{site.address.street}</p>
            <p>
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p className="pt-2">
              <a className="hover:text-brand" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-brand" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-base font-bold tracking-wider text-ink-soft uppercase">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {[...mainNav, { label: "Donate", href: "/donate" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-deep">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-ink-soft sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © <CopyrightYear /> {site.name}. A nonprofit organization.
          </p>
          <p>Greenport · Southold · Mattituck · Riverhead · Orient</p>
        </div>
      </div>
    </footer>
  );
}

/** Cached so the year can be prerendered; refreshes with each deploy. */
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}
