import { ButtonLink } from "@/components/button";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center">
      <LogoMark className="h-16 w-16 text-brand" />
      <h1 className="mt-6 text-5xl font-bold text-brand-night">This page has moved out.</h1>
      <p className="mt-4 text-lg text-ink-soft">
        We couldn&apos;t find what you were looking for. Let&apos;s get you home.
      </p>
      <ButtonLink href="/" className="mt-8">Back to home</ButtonLink>
    </section>
  );
}
