/**
 * Submits every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver and others share
 * submissions) and prints the top 25 commercial and guide URLs for manual Google Search
 * Console "Request indexing". Google does not use IndexNow.
 *
 * Usage:
 *   npm run seo:index                      # read the live sitemap, verify the key, submit
 *   npm run seo:index -- --dry-run         # read and print only; nothing is sent
 *   npm run seo:index -- --sitemap http://localhost:3100/sitemap.xml --dry-run
 *
 * IndexNow checks the key at https://www.nexalfitness.com/<key>.txt, so submit only after
 * the deployment that contains public/<key>.txt is live.
 */
import { indexNowKey, siteUrl } from '../app/site-config';

type Entry = { url: string; path: string; lastmod: string; priority: number };

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_URLS_PER_REQUEST = 10_000;
const TOP_N = 25;
/** Pages that never belong in a manual indexing queue. */
const LOW_VALUE = new Set(['/about', '/privacy']);

function argValue(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

const dryRun = process.argv.includes('--dry-run');
const sitemapUrl = argValue('--sitemap') ?? `${siteUrl}/sitemap.xml`;
const keyLocation = `${siteUrl}/${indexNowKey}.txt`;

function parseSitemap(xml: string): Entry[] {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, block]) => {
    const url = block.match(/<loc>(.*?)<\/loc>/)?.[1]?.trim() ?? '';
    return {
      url,
      path: url ? new URL(url).pathname : '',
      lastmod: block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.trim() ?? '',
      priority: Number(block.match(/<priority>(.*?)<\/priority>/)?.[1] ?? 0.5),
    };
  }).filter(entry => entry.url);
}

/** Highest priority first, then most recently modified, then shortest path. */
function manualQueue(entries: Entry[]): Entry[] {
  return entries
    .filter(entry => !LOW_VALUE.has(entry.path))
    .sort((a, b) => b.priority - a.priority || b.lastmod.localeCompare(a.lastmod) || a.path.length - b.path.length)
    .slice(0, TOP_N);
}

async function verifyKeyFile(): Promise<void> {
  const response = await fetch(keyLocation, { redirect: 'manual' });
  const body = response.ok ? (await response.text()).trim() : '';
  if (body !== indexNowKey) {
    throw new Error(`Key file not live at ${keyLocation} (HTTP ${response.status}). Deploy public/${indexNowKey}.txt first.`);
  }
}

const RESPONSE_MEANING: Record<number, string> = {
  200: 'accepted',
  202: 'accepted; key validation pending',
  400: 'bad request (invalid format)',
  403: 'key not valid (key file missing or wrong)',
  422: 'URLs do not belong to the host, or key mismatch',
  429: 'too many requests; try again later',
};

async function submit(urls: string[]): Promise<void> {
  const host = new URL(siteUrl).host;
  for (let start = 0; start < urls.length; start += MAX_URLS_PER_REQUEST) {
    const urlList = urls.slice(start, start + MAX_URLS_PER_REQUEST);
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key: indexNowKey, keyLocation, urlList }),
    });
    const meaning = RESPONSE_MEANING[response.status] ?? 'unexpected response';
    console.log(`IndexNow: HTTP ${response.status} (${meaning}) for ${urlList.length} URLs`);
    if (response.status >= 400) throw new Error(`IndexNow rejected the batch: ${await response.text()}`);
  }
}

async function main(): Promise<void> {
  const response = await fetch(sitemapUrl);
  if (!response.ok) throw new Error(`Could not read ${sitemapUrl} (HTTP ${response.status})`);
  const entries = parseSitemap(await response.text());
  if (entries.length === 0) throw new Error(`No <url> entries in ${sitemapUrl}`);
  const foreign = entries.filter(entry => !entry.url.startsWith(`${siteUrl}/`) && entry.url !== siteUrl);
  if (foreign.length) throw new Error(`Sitemap has URLs outside ${siteUrl}: ${foreign.slice(0, 3).map(entry => entry.url).join(', ')}`);

  console.log(`Read ${entries.length} URLs from ${sitemapUrl}`);
  if (dryRun) {
    console.log(`Dry run: nothing sent. A real run verifies ${keyLocation} and POSTs to ${INDEXNOW_ENDPOINT}.`);
  } else {
    await verifyKeyFile();
    await submit(entries.map(entry => entry.url));
  }

  console.log(`\nTop ${TOP_N} URLs for Google Search Console > URL inspection > Request indexing:`);
  manualQueue(entries).forEach((entry, index) => {
    console.log(`${String(index + 1).padStart(2)}. ${entry.url}  (priority ${entry.priority}, updated ${entry.lastmod || 'n/a'})`);
  });
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
