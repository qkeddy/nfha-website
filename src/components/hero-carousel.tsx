"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";

export type Slide = {
  src: string;
  alt: string;
  /** First word of the fund name, e.g. "Workforce". */
  name: string;
  position?: string;
};

const INTERVAL = 6000;
const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/** Rotating hero (5 slides max, per the brand presentation). */
export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const items = slides.slice(0, 5);
  const [index, setIndex] = useState(0);
  // null = the visitor hasn't chosen; fall back to their reduced-motion setting.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );
  const paused = userPaused ?? reducedMotion;
  const setPaused = (fn: (p: boolean) => boolean) => setUserPaused(fn(paused));

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      INTERVAL,
    );
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  const current = items[index];

  return (
    <div
      className="relative isolate h-full min-h-[440px] overflow-hidden rounded-3xl bg-brand-night sm:min-h-[540px]"
      aria-roledescription="carousel"
      aria-label="Housing funds"
    >
      {items.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: slide.position ?? "center" }}
          aria-hidden={i !== index}
        />
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-night/85 via-brand-night/25 to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
        <p
          key={current.name}
          className="animate-fade-in font-display text-5xl leading-[0.92] font-bold sm:text-7xl"
          aria-live="polite"
        >
          <span className="block text-white">{current.name}</span>
          <span className="block text-sky">Housing</span>
          <span className="block text-sky">Fund</span>
        </p>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/30"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          >
            {paused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </button>
          <div className="flex gap-2">
            {items.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${slide.name} Housing Fund`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-sun" : "w-2 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
