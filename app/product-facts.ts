import { premiumPlans } from './schema';
import { playStoreBaseUrl } from './site-config';

/**
 * Single source of truth for short, quotable product facts. Used by the
 * "Nexal at a glance" block on commercial pages and by /llms.txt, so search
 * snippets and AI answers read the same statements. Every line here must be
 * true of the shipped Android app; update it when the app changes.
 */

const [monthly, yearly] = premiumPlans;

/** When the facts below were last checked against the shipped Android app. */
export const factsChecked = '2026-11-20';

export const brand = { name: 'Nexal', alternateName: 'Nexal Fitness', playListingTitle: 'Nexal: AI Workout Meal Planner' };

export type Fact = { label: string; value: string };

export const productFacts: Fact[] = [
  { label: 'What it is', value: 'An Android app for workout logging, calorie and macro tracking, and AI workout and meal planning in one place.' },
  { label: 'Price', value: `Free to download. Nexal Premium is US$${monthly.price} a month or US$${yearly.price} a year; Google Play shows the local price before you subscribe.` },
  { label: 'Free trial', value: 'Premium has a 14-day free trial for eligible new subscribers, managed and cancelled in Google Play.' },
  { label: 'Free features', value: 'Workout logging with sets, reps and weight, custom workouts, rest timer, workout history, manual calorie, protein, carb and fat logging, water, weight, streaks and a fasting timer. No ads.' },
  { label: 'Premium features', value: 'AI workout plans of 6 or 8 weeks for gym or home (3 to 7 training days), AI daily meal plans built from your calorie and macro targets that avoid listed allergies, AI macro estimates and a barcode scanner.' },
  { label: 'Platform', value: 'Android phones through Google Play. Not available on iPhone.' },
  { label: 'Not included', value: 'No searchable food database, no smartwatch app or Health Connect sync, and no custom gram targets (targets are calculated from your profile).' },
];

export const playStoreListingUrl = playStoreBaseUrl;
