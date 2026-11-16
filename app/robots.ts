import type { MetadataRoute } from 'next';
import { siteUrl } from './site-config';

// Search and answer-engine crawlers named explicitly. A crawler that matches a named
// group ignores the "*" group, so every group repeats the same rules.
const namedCrawlers = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'PerplexityBot'];
const rules = { allow: '/', disallow: ['/api/'] };

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [...namedCrawlers.map(userAgent => ({ userAgent, ...rules })), { userAgent: '*', ...rules }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
