import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * Blog posts live as Markdown files in /content/blog. To publish a new post,
 * add a file like `2026-11-15-my-post.md` with the frontmatter shown in the
 * README and push to GitHub — Vercel rebuilds the site automatically.
 */
const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export const categories = [
  {
    slug: "news",
    label: "News",
    description: "Announcements and updates from the Alliance.",
    color: "bg-brand text-white",
  },
  {
    slug: "activities",
    label: "Activities",
    description: "Events, workshops and ways to get involved.",
    color: "bg-teal text-white",
  },
  {
    slug: "perspectives",
    label: "Perspectives",
    description: "Ideas and voices on attainable housing.",
    color: "bg-plum text-white",
  },
  {
    slug: "updates",
    label: "Fund Updates",
    description: "Progress reports on the Workforce Housing Fund.",
    color: "bg-sun text-ink",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: CategorySlug;
  author: string;
  image?: string;
  imageAlt?: string;
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

function slugFromFile(file: string) {
  return file.replace(/\.mdx?$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function readFile(file: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  const category = categories.some((c) => c.slug === data.category)
    ? (data.category as CategorySlug)
    : "news";
  return {
    slug: data.slug ?? slugFromFile(file),
    title: data.title,
    date: new Date(data.date).toISOString(),
    excerpt: data.excerpt ?? "",
    category,
    author: data.author ?? "North Fork Housing Alliance",
    image: data.image,
    imageAlt: data.imageAlt ?? "",
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(readFile)
    .filter((p) => p.title && p.date)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
