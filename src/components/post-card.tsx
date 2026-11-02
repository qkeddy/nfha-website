import Image from "next/image";
import Link from "next/link";
import { formatDate, getCategory, type PostMeta } from "@/lib/blog";

export function CategoryPill({ slug }: { slug: string }) {
  const cat = getCategory(slug);
  if (!cat) return null;
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase ${cat.color}`}
    >
      {cat.label}
    </span>
  );
}

export function PostCard({
  post,
  featured = false,
}: {
  post: PostMeta;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-sand-deep transition-shadow hover:shadow-xl hover:shadow-brand-night/10 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-mist ${
          featured ? "lg:aspect-auto lg:w-3/5" : ""
        }`}
      >
        {post.image && (
          <Image
            src={post.image}
            alt={post.imageAlt ?? ""}
            fill
            sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>
      <div
        className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? "lg:justify-center lg:p-12" : ""}`}
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-ink-soft">
          <CategoryPill slug={post.category} />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3
          className={`mt-4 font-bold text-brand-night ${
            featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 group-hover:text-brand"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-ink-soft">{post.excerpt}</p>
        <p className="mt-auto pt-6 text-sm font-bold text-brand">
          Read more →{" "}
          <span className="font-normal text-ink-soft">
            {post.readingMinutes} min read
          </span>
        </p>
      </div>
    </article>
  );
}
