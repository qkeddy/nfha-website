import type { MetadataRoute } from "next";
import { categories, getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/the-fund", "/services", "/resources", "/work-with-us", "/donate", "/contact", "/blog"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...categories.map((c) => ({ url: `${site.url}/blog/category/${c.slug}` })),
    ...getAllPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
