import Link from 'next/link';
import Image from 'next/image';
import '../seo-landing.css';
import { appSchema, playStoreUrl } from '../site-config';

type Props = {
  slug: string; kicker: string; title: string; intro: string; sectionTitle: string;
  benefits: { title: string; text: string }[];
  sections: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export default function SeoLanding({ slug, kicker, title, intro, sectionTitle, benefits, sections, faqs }: Props) {
  return <main className="seo-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(appSchema)}} />
    <nav className="seo-nav shell"><Link href="/"><Image src="/nexal-horizontal.png" width={145} height={48} alt="Nexal home" priority /></Link><a className="seo-cta" href={playStoreUrl(`${slug}_nav`)}>Get Nexal on Google Play</a></nav>
    <header className="seo-hero shell"><span className="seo-kicker">{kicker}</span><h1>{title}</h1><p>{intro}</p><a className="seo-cta" href={playStoreUrl(`${slug}_hero`)}>Get Nexal on Google Play</a></header>
    <section className="seo-proof shell">{benefits.map((b,i)=><article key={b.title}><span className="seo-kicker">0{i+1}</span><h2>{b.title}</h2><p>{b.text}</p></article>)}</section>
    <section className="seo-copy"><div className="shell"><h2>{sectionTitle}</h2><div className="seo-copy-grid">{sections.map(s=><article key={s.title}><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
    <section className="seo-faq"><div className="shell"><h2>Questions, answered.</h2>{faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>
    <section className="seo-bottom"><h2>Build a routine you can follow.</h2><p>Start with free tracking and unlock AI planning with Premium.</p><a className="seo-cta" href={playStoreUrl(`${slug}_bottom`)}>Get Nexal on Google Play</a><div className="seo-links"><Link href="/ai-workout-planner">AI workout planner for Android</Link><Link href="/ai-meal-planner">AI meal planner</Link><Link href="/workout-meal-planner-app">Workout and meal planner app</Link><Link href="/calorie-macro-tracker">Calorie and macro tracker</Link></div></section>
  </main>;
}
