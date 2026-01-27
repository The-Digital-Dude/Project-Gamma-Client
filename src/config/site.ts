export const siteConfig = {
  name: "RentalEase",
  description: "RentalEase - Complete rental compliance and property management solutions for Victorian landlords and property managers. Automated compliance checks, licensed tradie network, and CRM automation.",
  url: process.env.SITE_URL || "https://www.rentalease.com.au", // Your actual domain
  ogImage: "/og-image.jpg", // Default Open Graph image
  links: {
    twitter: "https://twitter.com/gamma",
    github: "https://github.com/gamma",
  },
} as const;

export type SiteConfig = typeof siteConfig;
