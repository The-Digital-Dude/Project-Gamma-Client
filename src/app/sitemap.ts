import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Static routes that we know exist
const STATIC_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/our-technology',
  '/documentation',
  '/support',
  '/privacy-policy',
  '/app-privacy-policy',
  '/terms-of-service',
  '/book-now',
  '/blog',
  '/[services]/compliance-services',
  '/[services]/electrical-safety',
  '/[services]/gas-safety',
  '/[services]/property-care-services',
  '/[services]/smoke-alarm',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url.replace(/\/$/, ''); // Remove trailing slash
  
  // Generate static routes
  const staticRoutes = STATIC_ROUTES.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(route) as any,
    priority: getPriority(route),
  }));

  // TODO: Add dynamic blog posts fetching here
  // const blogPosts = await fetchBlogPosts(); // You would implement this
  // const blogRoutes = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }));

  // Combine all routes
  return [
    ...staticRoutes,
    // ...blogRoutes, // Uncomment when blog posts fetching is implemented
  ];
}

function getChangeFrequency(path: string): string {
  if (path === '/' || path === '/about' || path === '/contact') {
    return 'weekly';
  } else if (path.startsWith('/[services]/') || path.startsWith('/services/')) {
    return 'weekly';
  } else if (path.startsWith('/blog/')) {
    return 'weekly';
  } else if (path.includes('privacy') || path.includes('terms')) {
    return 'monthly';
  }
  return 'daily';
}

function getPriority(path: string): number {
  if (path === '/') {
    return 1.0;
  } else if (path === '/about' || path === '/contact') {
    return 0.9;
  } else if (path.startsWith('/[services]/')) {
    return 0.8;
  } else if (path.startsWith('/blog/')) {
    return 0.7;
  } else if (path.includes('privacy') || path.includes('terms')) {
    return 0.3;
  }
  return 0.5;
}