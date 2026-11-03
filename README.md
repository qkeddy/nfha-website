# North Fork Housing Alliance — NorthForkHousing.org

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

## Deploying

- **Vercel project:** `nfha-website` in the `quin-eddys-projects` account, connected to this GitHub repo.
- **Production:** https://nfha-website.vercel.app (deploys automatically from `main`).
- **Workflow:** make changes on a branch → push → open a PR → Vercel builds a preview → review → squash-merge to `main`.
- **Preview URLs are behind Vercel login.** Copy the link from Vercel's comment on the PR rather than guessing it: Vercel shortens addresses over 63 characters (e.g. `…-git-fix-typography-and-b3e621-…`).
- **Vercel CLI caveat:** the CLI on Quin's machine is logged into the Nexadata team, not `quin-eddys-projects`. Deploy through Git, or run `vercel login` with the NFHA account before any `vercel` CLI work.

## Project status (as of 2026-11-03)

**Done:** all sitemap pages built from Brent Robertson's PDF (`NFHA Website Development_1.0.pdf`), blog with categories, domain references switched to `northforkhousing.org`, mobile and laptop menu fixes, larger section labels.

**Domain:** `nfha.org` is taken (Niagara Falls Housing Authority), so the site uses the alternate, **NorthForkHousing.org**. It isn't registered yet; it can be bought through Vercel or Google. When it's registered, add it under Vercel → Project → Settings → Domains. Email (`hello@`, `tanya@`, etc.) will come from Google Workspace.

**Proposed stack (sent to Brent):** Vercel hosting, HubSpot CRM, Google Workspace email. Brent was leaning toward Squarespace; waiting on his decision.

### Next up

- **Donations + receipts.** Plan: Stripe (installed from the Vercel Marketplace) → Stripe Checkout from the donate form → Stripe webhook to an API route that (1) upserts the donor and logs the gift in HubSpot and (2) sends a donation acknowledgment email (from HubSpot if the plan supports automated email, otherwise from a Marketplace email service). Turn off Stripe's own receipts once ours are live. Optional later: January year-end giving summaries. **Needs from NFHA:** a Stripe account in NFHA's name (EIN and bank details), a HubSpot private-app token (as a Vercel env var), confirmed 501(c)(3) status and EIN, and receipt wording approved by their accountant (IRS acknowledgment rules apply to gifts of $250+). Until then, `src/app/donate/donation-form.tsx` shows a "being set up" message.
- **Contact and newsletter forms** currently open a pre-addressed email (`mailto:`). Connect them to HubSpot forms or contacts.

### Open questions for Brent / NFHA

- **"Since 1988" vs "40+ years"** both come from the PDF but don't agree (38 years). They appear together in the home-page stats row.
- **Social accounts:** the PDF lists Facebook, Instagram, TikTok and LinkedIn, but gives no URLs; the footer icons link to the generic home pages. Quin isn't sure about keeping TikTok. Edit `site.social` in `src/lib/site.ts`.
- **Higher-resolution photos:** the images in `public/images/` were extracted from the PDF at roughly 460–950px wide. Brent said he'd send cropped JPGs and a Word doc of the copy.
- **Placeholder copy:** "Advisor profiles are coming soon" (About), "Call ahead to confirm office hours" (Contact), "Presentations and downloadable guides will be posted here" (Resources). Sponsors, more staff and advisor bios are still to come. The Services page copy was written from the About page because the PDF only had lorem ipsum there.
- **Sample blog posts:** the five posts in `content/blog/` were written from the PDF's content; replace or edit them.
- **Unverified resource links:** 211 Long Island, NY State of Health and NY HEAP didn't respond to automated checks (they probably block bots); click them to confirm.
- **Deadline:** Tanya Palmore presents at CAST ("Housing Crisis: Proven Solutions") on Nov 9; the homepage may serve as a landing page for it.
