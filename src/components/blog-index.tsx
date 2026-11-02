import Link from "next/link";
import { Newspaper } from "lucide-react";
import { Newsletter } from "./newsletter";
import { PageHeader } from "./page-header";
import { PostCard } from "./post-card";
import { categories, type PostMeta } from "@/lib/blog";

/** Shared layout for /blog and /blog/category/[category]. */
export function BlogIndex({
  posts,
  active,
  title,
  intro,
}: {
  posts: PostMeta[];
  active?: string;
  title: React.ReactNode;
  intro: React.ReactNode;
}) {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHeader
        icon={Newspaper}
        title={title}
        accent="sun"
        // On category pages the title is the category, so name the section above it.
        eyebrow={active ? "News & Perspectives" : undefined}
      >
        <p>{intro}</p>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <nav aria-label="Blog categories" className="-mx-4 overflow-x-auto px-4">
          <ul className="flex gap-2 pb-2">
            <li>
              <FilterLink href="/blog" active={!active}>
                All
              </FilterLink>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <FilterLink href={`/blog/category/${c.slug}`} active={active === c.slug}>
                  {c.label}
                </FilterLink>
              </li>
            ))}
          </ul>
        </nav>

        {posts.length === 0 ? (
          <p className="mt-12 rounded-3xl bg-sand p-10 text-center text-lg text-ink-soft">
            No stories here yet. Check back soon.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3">
              <PostCard post={featured} featured />
            </div>
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </section>
      <Newsletter />
    </>
  );
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`inline-block rounded-full px-5 py-2.5 text-sm font-bold whitespace-nowrap transition-colors ${
        active
          ? "bg-brand-night text-white"
          : "bg-sand text-ink-soft hover:bg-sand-deep hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}
