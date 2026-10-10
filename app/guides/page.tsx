import Link from 'next/link';
import { BrandMark, PlayButton, SiteFooter } from '../components/MarketingUi';
import { seoPageMetadata } from '../site-config';
import GuideCards from './GuideCards';
import { guides, guideTopic } from './content';

export const metadata = seoPageMetadata('/guides', 'Workout & Macro Tracking Guides for Android', 'Practical workout planning, calorie and macro tracking guides. Learn with worked examples and explore free tracking in Nexal for Android.');

export default function GuidesPage() {
  const categories = ['CHOOSING AN APP', 'WORKOUT PLANNING', 'NUTRITION TRACKING'];
  const anchor = (category: string) => category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return <main className="guides-page">
    <nav className="nav shell" aria-label="Main navigation"><Link href="/" className="brand" aria-label="Nexal home"><BrandMark /></Link><div className="nav-links"><Link href="/ai-workout-planner">AI Workouts</Link><Link href="/calorie-macro-tracker">Macro Tracking</Link></div><PlayButton compact placement="guides_nav" /></nav>
    <header className="guide-hub-hero shell"><span className="section-kicker">LEARN. PLAN. TRACK.</span><h1>Build a routine.<br /><em>Understand the details.</em></h1><p>Practical guides to organising workouts, logging meals and choosing tools that fit your life. Clear examples, honest feature boundaries and no promises of overnight results.</p><PlayButton placement="guides_hero" /></header>
    <div className="guide-hub-list shell"><nav className="guide-topics" aria-label="Guide topics">{categories.map(category => <a key={category} href={`#${anchor(category)}`}>{category.toLowerCase()} <span>{guides.filter(guide => guideTopic(guide) === category).length}</span></a>)}</nav>{categories.map(category => <section className="guide-category" id={anchor(category)} key={category}><span className="section-kicker">PRACTICAL FITNESS GUIDES</span><h2>{category.toLowerCase()}</h2><GuideCards category={category} limit={guides.length} /></section>)}<p className="guide-note">Published by Nexal. General educational information, not individual medical, nutrition or exercise advice.</p></div>
    <SiteFooter />
  </main>;
}
