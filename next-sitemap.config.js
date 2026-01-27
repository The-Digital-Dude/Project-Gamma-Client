/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.rentalease.com.au',
  generateRobotsTxt: true,
  exclude: [
    '/crm/*',
    '/subscription-cancelled',
    '/subscription-success',
    '/admin/*',
    '/api/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/crm/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://www.rentalease.com.au'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Default priority and changefreq
    const transformed = {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Customize priority for important pages
    if (path === '/' || path === '/about' || path === '/contact') {
      transformed.priority = 1.0;
      transformed.changefreq = 'weekly';
    } else if (path.startsWith('/services/') || path.startsWith('/[services]/')) {
      transformed.priority = 0.9;
      transformed.changefreq = 'weekly';
    } else if (path.startsWith('/blog/')) {
      transformed.priority = 0.8;
      transformed.changefreq = 'weekly';
    } else if (path.includes('privacy') || path.includes('terms')) {
      transformed.priority = 0.3;
      transformed.changefreq = 'monthly';
    }

    return transformed;
  },
};