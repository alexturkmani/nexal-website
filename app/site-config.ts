import type { Metadata } from 'next';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nexalfitness.com').replace(/\/$/, '');

export const playStoreBaseUrl = 'https://play.google.com/store/apps/details?id=com.nexal.app';

/** Pages that count as commercial landing pages for attribution. */
const landingPages = new Set(['workout-meal-planner-app', 'ai-workout-planner', 'ai-meal-planner', 'free-calorie-and-macro-tracker', 'free-workout-tracker-app']);

/**
 * utm_campaign for a page path. Play Console reports only utm_source and
 * utm_campaign, so the campaign must say which page sent the visitor:
 * home, landing_<slug>, compare_<slug>, guides_hub, guide_<slug> or page_<slug>.
 */
export function playCampaign(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (!clean) return 'home';
  if (clean === 'guides') return 'guides_hub';
  if (clean.startsWith('guides/')) return `guide_${clean.slice('guides/'.length)}`;
  if (clean.startsWith('compare/')) return `compare_${clean.slice('compare/'.length)}`;
  if (landingPages.has(clean)) return `landing_${clean}`;
  return `page_${clean.replace(/\//g, '_')}`;
}

/**
 * Google Play link with campaign data in the URL-encoded `referrer` parameter,
 * the format Play Console attributes to "UTM-tagged" traffic. utm_content
 * (button position) and utm_medium reach the app via the Install Referrer API
 * but are not shown in Play Console.
 */
export function playStoreUrl({ path, placement }: { path: string; placement: string }): string {
  const referrer = new URLSearchParams({
    utm_source: 'nexalfitness_web',
    utm_medium: 'organic_seo',
    utm_campaign: playCampaign(path),
    utm_content: placement,
  });
  return `${playStoreBaseUrl}&referrer=${encodeURIComponent(referrer.toString())}`;
}

export function seoPageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Nexal`,
      description,
      url: path,
      siteName: 'Nexal',
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Nexal Android fitness app with workout, meal and progress screens' }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | Nexal`, description, images: ['/og.png'] },
  };
}
