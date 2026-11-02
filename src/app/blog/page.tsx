import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "News & Perspectives",
  description:
    "News, activities, perspectives and Workforce Housing Fund updates from the North Fork Housing Alliance.",
};

export default function BlogPage() {
  return (
    <BlogIndex
      posts={getAllPosts()}
      title="News & Perspectives"
      intro="News updates, activities, perspectives and progress on the Workforce Housing Fund, from our office in Greenport to your inbox."
    />
  );
}
