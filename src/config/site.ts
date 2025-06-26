export const siteConfig = {
  name: "Rentalease",
  description: "Project Gamma Landing Page",
  url: "https://gamma.example.com", // Update this with your actual domain
  ogImage: "https://gamma.example.com/og.jpg", // Update this with your actual OG image
  links: {
    twitter: "https://twitter.com/gamma",
    github: "https://github.com/gamma",
  },
} as const;

export type SiteConfig = typeof siteConfig;
