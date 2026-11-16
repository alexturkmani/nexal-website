import Link from 'next/link';
import { PlayButton } from '../components/MarketingUi';
import type { Topic } from './internal-links';

/**
 * Commercial callout for guides, matched to the guide's topic. The mid-article
 * version is a quiet text card with no app-store button; the end version
 * carries the guide's own feature line plus the Play CTA.
 */

type Offer = { kicker: string; heading: string; text: string; links: { href: string; label: string }[] };

export const calloutOffers: Record<Topic, Offer> = {
  'WORKOUT PLANNING': {
    kicker: 'NEXAL AI WORKOUT PLANNER',
    heading: 'Want the week planned for you?',
    text: 'Nexal Premium builds a six or eight week gym or home plan around your goal, experience and training days. Logging workouts stays free.',
    links: [
      { href: '/ai-workout-planner', label: 'See how the AI workout planner works' },
      { href: '/free-workout-tracker-app', label: 'Start with the free workout tracker' },
    ],
  },
  'NUTRITION TRACKING': {
    kicker: 'NEXAL MEALS AND MACROS',
    heading: 'Log it free, or plan it with AI.',
    text: 'Calorie, protein, carb and fat logging is free with no ads. Premium adds AI meal plans built around your targets, plus barcode scanning.',
    links: [
      { href: '/free-calorie-and-macro-tracker', label: 'Explore the free macro tracker' },
      { href: '/ai-meal-planner', label: 'See the AI meal planner' },
    ],
  },
  'CHOOSING AN APP': {
    kicker: 'NEXAL, ALL IN ONE',
    heading: 'Workouts and meals in one app.',
    text: 'Nexal keeps training, nutrition and progress in one Android app. Core tracking is free; AI workout and meal plans are optional Premium.',
    links: [
      { href: '/workout-meal-planner-app', label: 'See the workout and meal planner' },
      { href: '/compare/myfitnesspal-alternative', label: 'Compare Nexal with MyFitnessPal' },
    ],
  },
};

type Props =
  | { placement: 'mid'; topic: Topic; slug: string }
  | { placement: 'end'; topic: Topic; slug: string; feature: { href: string; label: string; text: string } };

export default function AppFeatureCallout(props: Props) {
  const offer = calloutOffers[props.topic];
  if (props.placement === 'mid') {
    return <aside className="guide-callout" aria-label={offer.kicker.toLowerCase()} data-callout="mid">
      <span className="section-kicker">{offer.kicker}</span>
      <strong className="guide-callout-heading">{offer.heading}</strong>
      <p>{offer.text}</p>
      <div className="guide-callout-links">{offer.links.map(link => <Link key={link.href} href={link.href}>{link.label} <span aria-hidden="true">→</span></Link>)}</div>
    </aside>;
  }
  // The end callout keeps the guide-specific feature line, so each article closes on its own next step.
  const links = [{ href: props.feature.href, label: props.feature.label }, ...offer.links.filter(link => link.href !== props.feature.href)];
  return <section className="guide-product" aria-labelledby={`${props.slug}-callout`} data-callout="end">
    <span className="section-kicker light">{offer.kicker}</span>
    <h2 id={`${props.slug}-callout`}>{props.feature.text}</h2>
    <p className="guide-product-text">{offer.text}</p>
    <div className="guide-callout-links">{links.map(link => <Link key={link.href} href={link.href}>{link.label} <span aria-hidden="true">→</span></Link>)}</div>
    <PlayButton path={`/guides/${props.slug}`} placement="article" />
    <p className="guide-product-note">Free core tracking. Premium AI tools. Local prices and eligible trial offers are shown in Google Play.</p>
  </section>;
}
