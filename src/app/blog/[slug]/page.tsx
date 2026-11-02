import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CategoryPill, PostCard } from "@/components/post-card";
import { ButtonLink } from "@/components/button";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

// Every post/category is prerendered at build time via generateStaticParams.
export const instant = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:pt-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-deep"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All stories
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-soft">
            <CategoryPill slug={post.category} />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold text-brand-night sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-ink-soft">{post.excerpt}</p>
          <p className="mt-6 text-sm font-semibold">By {post.author}</p>
        </header>

        {post.image && (
          <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-mist">
              <Image
                src={post.image}
                alt={post.imageAlt ?? ""}
                fill
                priority
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div
          className="prose-nfha mx-auto max-w-3xl px-4 py-14 sm:px-6"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-bold">
            Support the Workforce <span className="text-sky">Housing Fund</span>
          </p>
          <ButtonLink href="/donate" variant="sun" arrow={false}>
            Donate
          </ButtonLink>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-night">More from the Alliance</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
