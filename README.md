# North Fork Housing Alliance — nfha.org

Website for the North Fork Housing Alliance (Greenport, NY), built with Next.js 16 (App Router), Tailwind CSS v4, and deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Site map

| Route | Page |
| --- | --- |
| `/` | Home (rotating hero, Workforce Housing Fund, partners, newsletter) |
| `/about` | About, mission/purpose/values, team, board, advisors, managed properties |
| `/the-fund` | Workforce Housing Fund: what it is, why, how it works, how to help |
| `/services` | Services, programs & initiatives |
| `/resources` | Housing links, topics & content |
| `/work-with-us` | Organizations, municipalities, builders |
| `/donate` | Donation landing page (payment provider not yet connected) |
| `/contact` | Address, staff contact, message form, map |
| `/blog` | News & Perspectives (+ `/blog/category/{news,activities,perspectives,updates}`) |

## Writing a blog post

Add a Markdown file to `content/blog/`, named `YYYY-MM-DD-short-slug.md`:

```md
---
title: "Post title"
date: 2026-11-15
category: news          # news | activities | perspectives | updates
excerpt: "One or two sentences shown on cards and in search results."
image: /images/places/neighborhood.jpg   # optional, put new images in public/images
imageAlt: Describe the image
author: North Fork Housing Alliance
---

Body text in **Markdown**. Use `## Headings`, lists, links and > quotes.
```

Commit and push to `main`; Vercel rebuilds and publishes automatically. The URL is `/blog/short-slug`.

## Editing content

- Contact details, nav, social links, partners: `src/lib/site.ts`
- Brand colours and fonts: `src/app/globals.css` (`@theme` block)
- Images: `public/images/` (extracted from the brand presentation; swap in higher-resolution originals with the same filenames)

## To do before launch

- Connect a donation provider on `/donate` (`src/app/donate/donation-form.tsx`)
- Connect the contact and newsletter forms to a service (currently open a pre-addressed email)
- Add real social media URLs in `src/lib/site.ts`
- Replace sample blog posts, add sponsor logos, advisor and staff profiles
