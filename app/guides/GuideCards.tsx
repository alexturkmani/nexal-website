import Link from 'next/link';
import { guides, guideTopic } from './content';
import './guides.css';

export default function GuideCards({ exclude, category, limit = 3 }: { exclude?: string; category?: string; limit?: number }) {
  const current = guides.find(guide => guide.slug === exclude);
  const candidates = guides.filter(guide => guide.slug !== exclude && (!category || guideTopic(guide) === category));
  if (current) {
    const topic = guideTopic(current);
    candidates.sort((a, b) => Number(guideTopic(b) === topic) - Number(guideTopic(a) === topic));
    // Rotate the recommendations so later guides also receive contextual inbound links.
    const start = Math.max(0, guides.filter(guide => guideTopic(guide) === topic).findIndex(guide => guide.slug === exclude));
    const related = candidates.filter(guide => guideTopic(guide) === topic);
    const rotated = [...related.slice(start), ...related.slice(0, start)];
    candidates.splice(0, candidates.length, ...rotated, ...candidates.filter(guide => guideTopic(guide) !== topic));
  }
  return <div className="guide-cards">{candidates.slice(0, limit).map((guide, index) =>
    <Link prefetch={false} className="guide-card" href={`/guides/${guide.slug}`} key={guide.slug}>
      <span className="guide-card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <span className="section-kicker">{guide.category}</span>
      <h3>{guide.title}</h3><p>{guide.description}</p>
      <span className="guide-card-link">Read the guide <span aria-hidden="true">→</span></span>
    </Link>)}</div>;
}
