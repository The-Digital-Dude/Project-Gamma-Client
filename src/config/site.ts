export const siteConfig = {
  name: "RentalEase",
  description: "Project Gamma Landing Page",
  url: process.env.SITE_URL || "https://www.rentalease.com.au", // Your actual domain
  ogImage: "https://gamma.example.com/og.jpg", // Update this with your actual OG image
  links: {
    twitter: "https://twitter.com/gamma",
    github: "https://github.com/gamma",
  },
} as const;

export type SiteConfig = typeof siteConfig;
