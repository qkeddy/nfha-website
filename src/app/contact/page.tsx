import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Newsletter } from "@/components/newsletter";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Visit the North Fork Housing Alliance at ${site.address.street}, ${site.address.city}, NY, call ${site.phone} or email ${site.email}.`,
};

const inputClass =
  "w-full rounded-xl border border-sand-deep bg-white px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none";

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
  );
  return (
    <>
      <PageHeader icon={MapPin} title={<>Contact Us</>} accent="plum" />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8 lg:py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-night">{site.name}</h2>
            <ul className="mt-6 space-y-5 text-lg">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <a href={site.phoneHref} className="hover:text-brand">{site.phone}</a>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a>
              </li>
              <li className="flex gap-4 text-ink-soft">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                Call ahead to confirm office hours.
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-sand-deep">
            <iframe
              title="Map to the North Fork Housing Alliance office in Greenport"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-3xl bg-sand p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-brand-night">Send us a message</h2>
          <p className="mt-2 text-ink-soft">
            Questions about rental assistance, the Workforce Housing Fund, or
            partnering with us? We&apos;d love to hear from you.
          </p>
          {/* Opens the visitor's email app until a form backend is connected. */}
          <form
            action={`mailto:${site.email}?subject=Website%20inquiry`}
            method="post"
            encType="text/plain"
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="c-name" className="mb-1.5 block text-sm font-bold">Name</label>
              <input id="c-name" name="name" required autoComplete="name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-email" className="mb-1.5 block text-sm font-bold">Email</label>
              <input id="c-email" name="email" type="email" required autoComplete="email" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-topic" className="mb-1.5 block text-sm font-bold">I&apos;m reaching out about</label>
              <select id="c-topic" name="topic" className={inputClass} defaultValue="General question">
                <option>General question</option>
                <option>Rental assistance / Section 8</option>
                <option>Homebuyer counseling</option>
                <option>Workforce Housing Fund</option>
                <option>Partnering or sponsorship</option>
                <option>Media inquiry</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-message" className="mb-1.5 block text-sm font-bold">Message</label>
              <textarea id="c-message" name="message" rows={6} required className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-teal px-8 py-3.5 font-bold tracking-wide text-white uppercase transition-colors hover:bg-teal-deep"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
