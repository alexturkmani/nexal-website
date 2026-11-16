import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BrandMark, PlayButton, SiteFooter } from '../../components/MarketingUi';
import { seoPageMetadata } from '../../site-config';
import { articleNode, breadcrumbNode, faqEntities, graph, organizationNode, webPageNode, websiteNode } from '../../schema';
import JsonLd from '../../components/JsonLd';
import GuideCards from '../GuideCards';
import { guides, findGuide, guideDates, guideTopic } from '../content';
import { contextualLinks, type ContextualLink } from '../internal-links';
import AppFeatureCallout from '../AppFeatureCallout';

function LinkedParagraph({ text, link }: { text: string; link?: ContextualLink }) {
  if (!link) return <p>{text}</p>;
  return <p>{text.slice(0, link.start)}<Link href={link.href}>{link.anchor}</Link>{text.slice(link.end)}</p>;
}

export const dynamicParams = false;
export function generateStaticParams() { return guides.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = findGuide((await params).slug);
  if (!guide) return {};
  const metadata = seoPageMetadata(`/guides/${guide.slug}`, guide.metaTitle, guide.description);
  const dates = guideDates(guide);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: 'article', publishedTime: dates.published, modifiedTime: dates.modified, authors: ['Nexal'] } };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = findGuide((await params).slug);
  if (!guide) notFound();
  const dates = guideDates(guide);
  const path = `/guides/${guide.slug}`;
  const topic = guideTopic(guide);
  const links = contextualLinks(guide);
  const seeAlso = (guide.seeAlso ?? []).filter(item => findGuide(item.slug));
  // Mid-article callout sits after the middle section, before the second half of the guide.
  const midAfter = Math.ceil(guide.sections.length / 2) - 1;
  const faqs = guide.faqs.map(({ question, answer }) => ({ question, answer }));
  const schema = graph(
    organizationNode(),
    websiteNode(),
    webPageNode(path, guide.metaTitle, guide.description, {
      ...(faqs.length ? { '@type': 'FAQPage', mainEntity: faqEntities(faqs) } : {}),
      datePublished: dates.published,
      dateModified: dates.modified,
    }),
    articleNode(path, { headline: guide.title, description: guide.description, published: dates.published, modified: dates.modified, section: guide.category }),
    breadcrumbNode(path, [{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }, { name: guide.title, path }]),
  );
  return <main className="guides-page">
    <JsonLd data={schema} />
    <nav className="nav shell" aria-label="Main navigation"><Link href="/" className="brand" aria-label="Nexal home"><BrandMark /></Link><div className="nav-links"><Link href="/guides">All Guides</Link><Link href={guide.feature.href}>App Features</Link></div><PlayButton compact path={path} placement="nav" /></nav>
    <header className="guide-hero shell"><nav className="guide-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/guides">Guides</Link><span aria-hidden="true">/</span><span>{guide.category.toLowerCase()}</span></nav><span className="section-kicker">{guide.category}</span><h1>{guide.title}</h1><p>{guide.intro}</p><div className="guide-byline"><span>By Nexal</span><time dateTime={dates.published}>{new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${dates.published}T00:00:00Z`))}</time><span>{guide.readTime}</span></div></header>
    <div className="guide-entry-cta shell"><PlayButton path={path} placement="intro" /><p>Download on Android, create your free account and start tracking. AI planning is optional Premium.</p></div>
    <div className="guide-layout shell">
      <aside className="guide-sidebar"><nav aria-label="In this guide"><h2>In this guide</h2>{guide.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav><div className="guide-sidebar-offer"><strong>Start with free tracking.</strong><p>AI planning is optional Premium.</p><PlayButton path={path} placement="sidebar" /></div></aside>
      <article className="guide-article" aria-label={guide.title}>
        <div className="guide-takeaway"><span className="section-kicker">THE SHORT VERSION</span><p>{guide.takeaway}</p></div>
        {seeAlso.length > 0 && <nav className="guide-see-also" aria-label="Read next"><span className="section-kicker">READ NEXT</span><ul>{seeAlso.map(item => <li key={item.slug}><Link href={`/guides/${item.slug}`}>{item.label}</Link></li>)}</ul></nav>}
        {guide.sections.map((section, sectionIndex) => <Fragment key={section.id}><section id={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph, index) => <LinkedParagraph key={paragraph} text={paragraph} link={links.get(`${section.id}:${index}`)} />)}{section.example && <figure className="guide-example"><figcaption>{section.example.title}</figcaption><div className="guide-table-scroll" tabIndex={0} role="region" aria-label={section.example.title}><table><thead><tr>{section.example.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.example.rows.map(row => <tr key={row[0]}>{row.map((cell,index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div><p>{section.example.caption}</p></figure>}{section.bullets && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}</section>{sectionIndex === midAfter && <AppFeatureCallout placement="mid" topic={topic} slug={guide.slug} />}</Fragment>)}
        <AppFeatureCallout placement="end" topic={topic} slug={guide.slug} feature={guide.feature} />
        <section className="guide-faq"><h2>Frequently asked questions</h2>{guide.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
        <section className="guide-sources"><h2>Sources and editorial notes</h2><p>Prepared by Nexal for general education. This is product-team content, not an independent review or a clinically reviewed programme. Exercise and nutrition examples are illustrative, not personalised recommendations.</p><ul>{guide.sources.map(source => <li key={source.href}><a href={source.href}>{source.label}</a></li>)}</ul><p>App feature availability and subscription offers can change. Check the current Play listing and checkout before subscribing.</p></section>
      </article>
    </div>
    <section className="guide-related shell"><span className="section-kicker">KEEP LEARNING</span><h2>More practical guides</h2><GuideCards exclude={guide.slug} /></section>
    <SiteFooter path={path} />
  </main>;
}
