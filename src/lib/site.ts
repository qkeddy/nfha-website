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
  { label: "Workforce Fund", href: "/the-fund" },
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
    name: "Village of Greenport",
    src: "/images/partners/village-of-greenport.jpg",
    width: 288,
    height: 278,
  },
  {
    name: "Habitat for Humanity",
    src: "/images/partners/habitat-for-humanity.jpg",
    width: 408,
    height: 158,
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
    width: 600,
    height: 670,
  },
];

/** The people the Workforce Housing Fund is for — from the 11-19-26 homepage copy. */
export const communityRoles = [
  "First Responders",
  "Firefighters",
  "Healthcare Workers",
  "Teachers and Counselors",
  "Municipal Employees",
  "Journalists and Librarians",
  "Shopkeepers, Cashiers and Clerks",
  "Chefs and Waitstaff",
  "Farmers",
  "Oyster Growers",
  "Fishermen",
  "Baymen",
  "Food Producers",
  "Bakers",
  "Carpenters",
  "Electricians and Plumbers",
  "Artists and Musicians",
  "Next Generation Thinkers, Innovators and Doers",
  "Our Children, Grandchildren and Neighbors",
  "even our Elected Officials",
];
