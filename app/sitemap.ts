import type { MetadataRoute } from 'next';
import { siteUrl } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/ai-workout-planner`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/ai-meal-planner`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/workout-meal-planner-app`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/calorie-macro-tracker`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
