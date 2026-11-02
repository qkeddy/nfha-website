"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { site } from "@/lib/site";

const AMOUNTS = [50, 100, 250, 500, 1000];

/**
 * Donation "transaction form" UI. Payment processing is not connected yet;
 * when a provider (Stripe, Givebutter, Donorbox, etc.) is chosen, replace
 * `handleSubmit` with the provider's checkout.
 */
export function DonationForm() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number | "">(100);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="h-fit rounded-3xl bg-white p-6 shadow-xl shadow-brand-night/5 sm:p-10 lg:sticky lg:top-28">
      <h2 className="text-2xl font-bold text-brand-night">Make a gift</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <fieldset>
          <legend className="sr-only">Frequency</legend>
          <div className="grid grid-cols-2 rounded-full bg-sand p-1">
            {(["once", "monthly"] as const).map((f) => (
              <label
                key={f}
                className={`cursor-pointer rounded-full py-2.5 text-center font-bold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sun ${
                  frequency === f ? "bg-brand text-white" : "text-ink-soft"
                }`}
              >
                <input
                  type="radio"
                  name="frequency"
                  value={f}
                  checked={frequency === f}
                  onChange={() => setFrequency(f)}
                  className="sr-only"
                />
                {f === "once" ? "One time" : "Monthly"}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 text-sm font-bold">Amount</legend>
          <div className="grid grid-cols-3 gap-2">
            {AMOUNTS.map((a) => (
              <label
                key={a}
                className={`cursor-pointer rounded-xl border-2 py-3 text-center font-display text-lg font-bold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sun ${
                  amount === a
                    ? "border-brand bg-mist text-brand-deep"
                    : "border-sand-deep text-ink hover:border-brand/50"
                }`}
              >
                <input
                  type="radio"
                  name="amount"
                  value={a}
                  checked={amount === a}
                  onChange={() => setAmount(a)}
                  className="sr-only"
                />
                ${a.toLocaleString()}
              </label>
            ))}
            <label className="relative">
              <span className="sr-only">Other amount</span>
              <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 font-bold text-ink-soft">
                $
              </span>
              <input
                type="number"
                min={1}
                inputMode="numeric"
                placeholder="Other"
                value={AMOUNTS.includes(amount as number) ? "" : amount}
                onChange={(e) =>
                  setAmount(e.target.value ? Number(e.target.value) : "")
                }
                className="h-full w-full rounded-xl border-2 border-sand-deep pr-2 pl-7 font-display text-lg font-bold focus:border-brand focus:outline-none"
              />
            </label>
          </div>
        </fieldset>

        <div className="grid gap-3 sm:grid-cols-2">
          <input required name="name" autoComplete="name" placeholder="Full name" aria-label="Full name" className="rounded-xl border border-sand-deep px-4 py-3" />
          <input required name="email" type="email" autoComplete="email" placeholder="Email" aria-label="Email" className="rounded-xl border border-sand-deep px-4 py-3" />
        </div>

        <button
          type="submit"
          disabled={!amount}
          className="w-full rounded-full bg-teal py-4 text-lg font-bold tracking-wide text-white uppercase transition-colors hover:bg-teal-deep disabled:opacity-50"
        >
          Donate {amount ? `$${Number(amount).toLocaleString()}` : ""}
          {frequency === "monthly" ? " / month" : ""}
        </button>

        {submitted && (
          <p role="status" className="rounded-xl bg-sun/30 p-4 text-sm">
            Online giving is being set up. Thank you! In the meantime, please
            give by check or email{" "}
            <a className="font-bold underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        )}

        <p className="flex items-center justify-center gap-2 text-xs text-ink-soft">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          Every gift goes to the Workforce Housing Fund.
        </p>
      </form>
    </div>
  );
}
