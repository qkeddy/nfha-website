"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { mainNav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-deep/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-mist text-brand-deep"
                      : "text-ink-soft hover:bg-sand hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className="hidden items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-bold tracking-wide text-ink uppercase transition-colors hover:bg-marigold sm:inline-flex"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            Donate
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-sand lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-white lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="px-4 py-6"
            onClick={(e) => {
              // Close the menu when any link inside it is followed.
              if ((e.target as HTMLElement).closest("a")) setOpen(false);
            }}
          >
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3.5 font-display text-2xl font-bold ${
                      isActive(item.href)
                        ? "bg-mist text-brand-deep"
                        : "text-ink hover:bg-sand"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/donate"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-sun px-6 py-4 text-base font-bold tracking-wide text-ink uppercase"
            >
              <Heart className="h-5 w-5" aria-hidden="true" />
              Donate to the Fund
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
