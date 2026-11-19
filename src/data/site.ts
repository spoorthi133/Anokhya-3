/**
 * Single source of truth for event-wide facts (dates, venue, socials).
 * Edit here — every page reads from this file.
 */
export const site = {
  name: "Anokhya 3.0",
  tagline: "Where tech meets the unforeseen",
  shortDescription:
    "A technical fest by the Department of Artificial Intelligence & Machine Learning at Dayananda Sagar College of Engineering, featuring 6 events open to individual and group participation.",
  date: {
    display: "Saturday, 28 November 2026",
    iso: "2026-11-28",
  },
  venue: {
    name: "DSCE Campus",
    full: "Dayananda Sagar College of Engineering, Kumaraswamy Layout, Bengaluru",
  },
  organizer: {
    department: "Department of Artificial Intelligence & Machine Learning",
    college: "Dayananda Sagar College of Engineering",
    aegis: "DSCE Innovation Council",
  },
  prizePool: "₹21,000",
  expectedFootfall: "150+",
  url: "https://anokhya.site",
  instagram: "https://instagram.com/_anokhya",
  instagramHandle: "@_anokhya",
  linkedIn: "https://www.linkedin.com/company/aimldeptdsce/posts/?feedView=all",
  linkedInLabel: "AIML Dept. DSCE",
} as const;
