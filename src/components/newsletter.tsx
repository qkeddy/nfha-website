import { Mail } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Newsletter sign-up. Until an email platform (Mailchimp, Constant Contact,
 * etc.) is connected, submissions open a pre-addressed email to the office so
 * no sign-up is silently lost.
 */
export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-sky-soft">
      <Waves className="absolute inset-x-0 -bottom-2 h-24 w-full text-sky/40" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1.3fr] md:items-center lg:px-8">
        <div>
          <p className="mb-2 flex items-center gap-2 text-base font-bold tracking-wider text-brand-night uppercase">
            <Mail className="h-4 w-4" aria-hidden="true" /> Stay informed
          </p>
          <h2 className="text-3xl font-bold text-brand-night sm:text-4xl">
            News from the North Fork housing front
          </h2>
          <p className="mt-3 max-w-md text-brand-night/80">
            Stay informed about Community and Attainable Housing initiatives. We
            will not share your info with anyone.
          </p>
        </div>
        <form
          action={`mailto:${site.email}?subject=Newsletter%20sign-up`}
          method="post"
          encType="text/plain"
          className="grid gap-3 sm:grid-cols-2"
        >
          <label className="sr-only" htmlFor="nl-first">
            First name
          </label>
          <input
            id="nl-first"
            name="first_name"
            placeholder="First name"
            autoComplete="given-name"
            className="h-13 rounded-xl border-0 bg-white px-4 text-ink shadow-sm placeholder:text-ink-soft/70"
          />
          <label className="sr-only" htmlFor="nl-last">
            Last name
          </label>
          <input
            id="nl-last"
            name="last_name"
            placeholder="Last name"
            autoComplete="family-name"
            className="h-13 rounded-xl border-0 bg-white px-4 text-ink shadow-sm placeholder:text-ink-soft/70"
          />
          <label className="sr-only" htmlFor="nl-email">
            Email address
          </label>
          <input
            id="nl-email"
            name="email"
            type="email"
            required
            placeholder="Email address"
            autoComplete="email"
            className="h-13 rounded-xl border-0 bg-white px-4 text-ink shadow-sm placeholder:text-ink-soft/70 sm:col-span-2"
          />
          <button
            type="submit"
            className="h-13 rounded-xl bg-brand-night px-6 font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-deep sm:col-span-2"
          >
            Sign me up
          </button>
        </form>
      </div>
    </section>
  );
}

/** Soft layered swell, a nod to the Sound and the Peconic Bay. */
export function Waves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 64c120-26 240-26 360 0s240 26 360 0 240-26 360 0 240 26 360 0v56H0Z"
        opacity=".55"
      />
      <path
        fill="currentColor"
        d="M0 88c120-20 240-20 360 0s240 20 360 0 240-20 360 0 240 20 360 0v32H0Z"
      />
    </svg>
  );
}
