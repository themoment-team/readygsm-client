import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/shared/lib';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/admin', '/applications', '/oauth/callback'],
  },
  sitemap: `${SITE_URL}/sitemap.xml`,
});

export default robots;
