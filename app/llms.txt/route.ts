import { productLinks } from '../components/MarketingUi';
import { guides } from '../guides/content';
import { brand, productFacts, playStoreListingUrl } from '../product-facts';
import { siteUrl } from '../site-config';

// /llms.txt (https://llmstxt.org): a plain-text map of the site for AI answer engines.
// Built at deploy time from the same data as the pages, so it never drifts from them.
export const dynamic = 'force-static';

const pageSummaries: Record<string, string> = {
  '/workout-meal-planner-app': 'workout and meal planning, calorie and macro tracking and progress in one Android app',
  '/ai-workout-planner': 'AI-generated 6 or 8 week gym or home workout plans (Premium) with free workout logging',
  '/ai-meal-planner': 'AI daily meal plans built from calorie and macro targets (Premium)',
  '/free-calorie-and-macro-tracker': 'what calorie and macro logging includes for free, and what Premium adds',
  '/free-workout-tracker-app': 'free workout logging, history, weekly volume and streaks',
  '/compare/myfitnesspal-alternative': 'feature-by-feature comparison of Nexal and MyFitnessPal, with sources',
  '/compare/fitbod-alternative': 'feature-by-feature comparison of Nexal and Fitbod, with sources',
};

function body(): string {
  const link = (path: string, title: string, note?: string) => `- [${title}](${siteUrl}${path})${note ? `: ${note}` : ''}`;
  const features = productLinks.filter(item => !item.href.startsWith('/compare/'));
  const comparisons = productLinks.filter(item => item.href.startsWith('/compare/'));
  return [
    `# ${brand.name} (${brand.alternateName})`,
    '',
    `> ${brand.name} is an Android fitness app that combines free workout and calorie and macro logging with optional Premium AI workout and meal planning. It is published by Nexal; the Google Play listing is "${brand.playListingTitle}".`,
    '',
    '## Key facts',
    '',
    ...productFacts.map(fact => `- ${fact.label}: ${fact.value}`),
    `- Google Play: ${playStoreListingUrl}`,
    '- Support: support@nexal.app',
    '',
    '## Product pages',
    '',
    link('/', 'Home'),
    ...features.map(item => link(item.href, item.label, pageSummaries[item.href])),
    '',
    '## Comparisons',
    '',
    ...comparisons.map(item => link(item.href, item.label, pageSummaries[item.href])),
    '',
    '## Company',
    '',
    link('/about', 'About Nexal and our guides', 'who writes the guides, how they are prepared (Nexal product team with AI assistance) and their limits'),
    link('/privacy', 'Privacy policy'),
    '',
    '## Optional',
    '',
    link('/guides', 'All workout and nutrition guides'),
    ...guides.map(guide => link(`/guides/${guide.slug}`, guide.title)),
    '',
  ].join('\n');
}

export function GET(): Response {
  return new Response(body(), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
