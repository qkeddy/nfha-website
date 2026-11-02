import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Landmark, Mail } from "lucide-react";
import { DonationForm } from "./donation-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate to the Workforce Housing Fund",
  description:
    "Support the Workforce Housing Fund and help keep the teachers, first responders and essential workers of the North Fork living in the community they serve.",
};

export default function DonatePage() {
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-brand">
            <Heart className="h-4 w-4 text-coral" aria-hidden="true" /> Donate
          </p>
          <h1 className="mt-5 text-5xl leading-[0.98] font-bold text-brand-night sm:text-6xl">
            Help build stronger communities.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Your gift to the <strong className="text-ink">Workforce Housing Fund</strong>{" "}
            helps preserve and develop homes for the first responders,
            healthcare workers, teachers and service providers who are crucial
            to the vitality of the North Fork.
          </p>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/images/funds/next-gen.jpg"
              alt="A young couple embracing in their new home"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6">
              <Mail className="h-6 w-6 text-brand" aria-hidden="true" />
              <h2 className="mt-3 font-bold">Give by check</h2>
              <p className="mt-1 text-sm text-ink-soft">
                Payable to North Fork Housing Alliance, {site.address.street},{" "}
                {site.address.city}, {site.address.state} {site.address.zip}.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <Landmark className="h-6 w-6 text-brand" aria-hidden="true" />
              <h2 className="mt-3 font-bold">Sponsorships &amp; grants</h2>
              <p className="mt-1 text-sm text-ink-soft">
                Corporate, foundation and planned giving:{" "}
                <a className="font-bold text-brand hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </div>
        <DonationForm />
      </div>
    </section>
  );
}
