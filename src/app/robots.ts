import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.ready.hellogsm.kr';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/admin', '/applications', '/oauth/callback'],
  },
  sitemap: `${SITE_URL}/sitemap.xml`,
});

export default robots;
