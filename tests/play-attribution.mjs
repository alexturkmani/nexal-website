import assert from 'node:assert/strict';

// Every Google Play link on every sitemap page must carry campaign data in the
// URL-encoded `referrer` parameter, with utm_campaign naming the page it is on.
const base = (process.env.SEO_CHECK_URL || 'http://localhost:3100').replace(/\/$/, '');
const decode = value => value.replace(/&amp;/g, '&');
const landing = new Set(['workout-meal-planner-app', 'ai-workout-planner', 'ai-meal-planner', 'free-calorie-and-macro-tracker', 'free-workout-tracker-app']);
const expectedCampaign = path => {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (!clean) return 'home';
  if (clean === 'guides') return 'guides_hub';
  if (clean.startsWith('guides/')) return `guide_${clean.slice(7)}`;
  if (clean.startsWith('compare/')) return `compare_${clean.slice(8)}`;
  return landing.has(clean) ? `landing_${clean}` : `page_${clean}`;
};

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const campaigns = new Map();
let links = 0;
for (const path of paths) {
  const html = await (await fetch(`${base}${path}`)).text();
  const hrefs = [...html.matchAll(/href="(https:\/\/play\.google\.com\/store\/apps\/details[^"]*)"/g)].map(match => new URL(decode(match[1])));
  assert.ok(hrefs.length >= 2, `${path}: at least two Play links (got ${hrefs.length})`);
  const placements = new Set();
  for (const url of hrefs) {
    assert.equal(url.searchParams.get('id'), 'com.nexal.app', `${path}: package id`);
    assert.deepEqual([...url.searchParams.keys()].sort(), ['id', 'referrer'], `${path}: UTMs only inside referrer`);
    const raw = url.searchParams.get('referrer');
    assert.ok(encodeURIComponent(raw).length <= 512, `${path}: referrer within 512 characters`);
    const utm = new URLSearchParams(raw);
    assert.equal(utm.get('utm_source'), 'nexalfitness_web', `${path}: utm_source`);
    assert.equal(utm.get('utm_medium'), 'organic_seo', `${path}: utm_medium`);
    assert.equal(utm.get('utm_campaign'), expectedCampaign(path), `${path}: utm_campaign`);
    assert.match(utm.get('utm_content') || '', /^[a-z_]+$/, `${path}: utm_content placement`);
    placements.add(utm.get('utm_content'));
    links += 1;
  }
  assert.ok(placements.has('footer'), `${path}: footer link tagged`);
  campaigns.set(expectedCampaign(path), path);
}
assert.equal(campaigns.size, paths.length, 'Every page has its own campaign');
console.log(`PASS Play attribution: ${links} Play links across ${paths.length} pages, ${campaigns.size} distinct campaigns`);
