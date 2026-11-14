import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';

// Internal-linking architecture for /guides, checked against a running build:
// contextual body links, topic-matched callouts, related-guide coverage and
// hub category placement (no orphan guides).
const base = (process.env.SEO_CHECK_URL || 'http://localhost:3100').replace(/\/$/, '');

const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const contentModule = { exports: {} }; cache.set(file, contentModule.exports);
  const js = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const require = specifier => specifier.startsWith('.') ? load(resolve(dirname(file), `${specifier}.ts`)) : createRequire(file)(specifier);
  vm.runInNewContext(`(function(require,module,exports){${js}\n})`, {}, { filename: file })(require, contentModule, contentModule.exports);
  return contentModule.exports;
}
const { guides, guideTopic } = load(fileURLToPath(new URL('../app/guides/content.ts', import.meta.url)));
const { contextualLinks } = load(fileURLToPath(new URL('../app/guides/internal-links.ts', import.meta.url)));

const expectedCallout = {
  'WORKOUT PLANNING': ['/ai-workout-planner', '/free-workout-tracker-app'],
  'NUTRITION TRACKING': ['/free-calorie-and-macro-tracker', '/ai-meal-planner'],
  'CHOOSING AN APP': ['/workout-meal-planner-app', '/compare/myfitnesspal-alternative'],
};
const commercial = new Set(Object.values(expectedCallout).flat());
const decode = value => value.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
const hrefs = html => [...html.matchAll(/href="([^"]+)"/g)].map(match => decode(match[1]));
const fetchHtml = async path => { const response = await fetch(`${base}${path}`); assert.equal(response.status, 200, path); return response.text(); };

const topicOf = new Map(guides.map(guide => [guide.slug, guideTopic(guide)]));
const siblingInbound = new Map(guides.map(guide => [guide.slug, new Set()]));
const anchorsByTarget = new Map();

for (const guide of guides) {
  const path = `/guides/${guide.slug}`;
  const html = await fetchHtml(path);
  const topic = topicOf.get(guide.slug);
  const article = html.match(/<article class="guide-article"[^>]*>(.*?)<\/article>/s)?.[1];
  assert.ok(article, `${path}: article`);

  // 1. Contextual links: rendered inside article paragraphs (callouts excluded), 1 to 3, matching the rules.
  const body = article.replace(/<aside class="guide-callout".*?<\/aside>/s, '').replace(/<section class="guide-product".*?<\/section>/s, '');
  const rendered = [...body.matchAll(/<section id="[^"]+"><h2>.*?<\/section>/gs)]
    .flatMap(([section]) => [...section.matchAll(/<p>(.*?)<\/p>/gs)])
    .flatMap(([, paragraph]) => [...paragraph.matchAll(/<a href="([^"]+)">(.*?)<\/a>/g)].map(([, href, anchor]) => ({ href: decode(href), anchor: decode(anchor) })));
  const expected = [...contextualLinks(guide).values()];
  assert.ok(rendered.length >= 1 && rendered.length <= 3, `${path}: 1 to 3 contextual links (got ${rendered.length})`);
  assert.deepEqual(rendered.map(link => link.href).sort(), expected.map(link => link.href).sort(), `${path}: rendered links match rules`);
  for (const link of rendered) {
    assert.ok(commercial.has(link.href), `${path}: contextual link targets a commercial page (${link.href})`);
    // Multi-word anchors, or a competitor's name pointing at that competitor's comparison page.
    const brandAnchor = /^myfitnesspal$/i.test(link.anchor) && link.href === '/compare/myfitnesspal-alternative';
    assert.ok(brandAnchor || link.anchor.split(/\s+/).length >= 2, `${path}: descriptive anchor "${link.anchor}"`);
    if (!anchorsByTarget.has(link.href)) anchorsByTarget.set(link.href, new Map());
    const counts = anchorsByTarget.get(link.href);
    counts.set(link.anchor.toLowerCase(), (counts.get(link.anchor.toLowerCase()) || 0) + 1);
  }
  assert.equal(new Set(rendered.map(link => link.href)).size, rendered.length, `${path}: no repeated contextual target`);

  // 2. Callouts: exactly one mid-article and one closing, both matched to the topic.
  const mid = [...article.matchAll(/<aside class="guide-callout"[^>]*data-callout="mid"[^>]*>(.*?)<\/aside>/gs)];
  const end = [...article.matchAll(/<section class="guide-product"[^>]*data-callout="end"[^>]*>(.*?)<\/section>/gs)];
  assert.equal(mid.length, 1, `${path}: one mid-article callout`);
  assert.equal(end.length, 1, `${path}: one closing callout`);
  for (const href of expectedCallout[topic]) {
    assert.ok(hrefs(mid[0][1]).includes(href), `${path}: mid callout links ${href}`);
    assert.ok(hrefs(end[0][1]).includes(href), `${path}: closing callout links ${href}`);
  }
  const midPosition = article.indexOf('data-callout="mid"');
  const sectionStarts = [...article.matchAll(/<section id="/g)].map(match => match.index);
  assert.ok(sectionStarts.some(start => start < midPosition) && sectionStarts.some(start => start > midPosition), `${path}: callout sits between sections`);

  // 3. Related guides grid: record sibling links (same topic) for the inbound check below.
  const related = html.match(/<section class="guide-related[^"]*"[^>]*>(.*?)<\/section>/s)?.[1] || '';
  for (const href of hrefs(related).filter(href => href.startsWith('/guides/'))) {
    const slug = href.slice('/guides/'.length);
    assert.ok(topicOf.has(slug), `${path}: related link resolves (${href})`);
    if (slug !== guide.slug && topicOf.get(slug) === topic) siblingInbound.get(slug).add(guide.slug);
  }
}

for (const [slug, from] of siblingInbound) assert.ok(from.size >= 2, `/guides/${slug}: linked from at least 2 sibling guides (got ${from.size})`);

// Anchor variety: no single anchor text may carry more than 60% of a target's links.
for (const [href, counts] of anchorsByTarget) {
  const total = [...counts.values()].reduce((sum, count) => sum + count, 0);
  const top = Math.max(...counts.values());
  if (total >= 5) assert.ok(top / total <= 0.6, `${href}: anchor text varied (top anchor ${top}/${total})`);
  console.log(`PASS ${href}: ${total} contextual links, ${counts.size} distinct anchors`);
}

// 4. Hub: every guide is linked from its own topic section (the target of the topic filter).
const hub = await fetchHtml('/guides');
const sectionId = topic => topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
for (const topic of Object.keys(expectedCallout)) {
  assert.ok(hub.includes(`href="#${sectionId(topic)}"`), `/guides: filter for ${topic}`);
  const section = hub.match(new RegExp(`<section class="guide-category" id="${sectionId(topic)}">(.*?)</section>`, 's'))?.[1];
  assert.ok(section, `/guides: ${topic} section`);
  const linked = new Set(hrefs(section));
  for (const guide of guides.filter(candidate => topicOf.get(candidate.slug) === topic)) assert.ok(linked.has(`/guides/${guide.slug}`), `/guides: ${guide.slug} listed under ${topic}`);
}

const minSiblings = Math.min(...[...siblingInbound.values()].map(set => set.size));
console.log(`PASS internal links: ${guides.length} guides with 1 to 3 contextual links, topic callouts mid and end, every guide in its hub section and linked from at least ${minSiblings} sibling guides`);
