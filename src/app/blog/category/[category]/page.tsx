import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/blog-index";
import { categories, getAllPosts, getCategory } from "@/lib/blog";

// Every post/category is prerendered at build time via generateStaticParams.
export const instant = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const cat = getCategory((await params).category);
  return cat ? { title: `${cat.label} | News`, description: cat.description } : {};
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  return (
    <BlogIndex
      posts={getAllPosts().filter((p) => p.category === cat.slug)}
      active={cat.slug}
      title={cat.label}
      intro={cat.description}
    />
  );
}
