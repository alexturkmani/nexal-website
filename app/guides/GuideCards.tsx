import Link from 'next/link';
import { guides } from './content';
import './guides.css';

export default function GuideCards({ exclude }: { exclude?: string }) {
  return <div className="guide-cards">{guides.filter(guide => guide.slug !== exclude).map((guide, index) =>
    <Link className="guide-card" href={`/guides/${guide.slug}`} key={guide.slug}>
      <span className="guide-card-index" aria-hidden="true">0{index + 1}</span>
      <span className="section-kicker">{guide.category}</span>
      <h3>{guide.title}</h3><p>{guide.description}</p>
      <span className="guide-card-link">Read the guide <span aria-hidden="true">→</span></span>
    </Link>)}</div>;
}
