export const site = {
  name: "North Fork Housing Alliance",
  shortName: "NFHA",
  tagline: "Building Stronger Communities",
  description:
    "A 40+ year old, mission-driven nonprofit helping low to middle income people on the North Fork of Long Island find, keep and afford a place to call home.",
  url: "https://northforkhousing.org",
  address: {
    street: "116 South Street",
    city: "Greenport",
    state: "NY",
    zip: "11944",
  },
  phone: "(631) 477-1070",
  phoneHref: "tel:+16314771070",
  email: "hello@northforkhousing.org",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "TikTok", href: "https://www.tiktok.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "The Fund", href: "/the-fund" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "News", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const partners = [
  {
    name: "New York State",
    src: "/images/partners/new-york-state.png",
    width: 295,
    height: 185,
  },
  {
    name: "Town of Southold",
    src: "/images/partners/town-of-southold.png",
    width: 205,
    height: 205,
  },
  {
    name: "North Fork Authentic",
    src: "/images/partners/north-fork-authentic.png",
    width: 205,
    height: 205,
  },
  {
    name: "True North Realty Associates",
    src: "/images/partners/true-north.jpg",
    width: 234,
    height: 234,
  },
];

/** The people the Workforce Housing Fund is for — from the homepage copy. */
export const communityRoles = [
  "first responders",
  "firefighters",
  "healthcare workers",
  "teachers and counselors",
  "municipal employees",
  "journalists and librarians",
  "shopkeepers, cashiers and clerks",
  "chefs and wait staff",
  "farmers",
  "oyster growers",
  "fishermen",
  "baymen",
  "food producers",
  "bakers",
  "carpenters",
  "electricians and plumbers",
  "artists and musicians",
  "next generation thinkers, innovators and doers",
  "our children, grandchildren and neighbors",
];
