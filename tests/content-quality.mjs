import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';

// Evaluate this repository's typed content modules without adding a runtime dependency.
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const contentModule = { exports: {} }; cache.set(file, contentModule.exports);
  const js = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const require = specifier => specifier.startsWith('.')
    ? load(resolve(dirname(file), `${specifier}.ts`))
    : createRequire(file)(specifier);
  vm.runInNewContext(`(function(require,module,exports){${js}\n})`, {}, { filename: file })(require, contentModule, contentModule.exports);
  return contentModule.exports;
}
const { guides, guideDates } = load(fileURLToPath(new URL('../app/guides/content.ts', import.meta.url)));
const slugs = new Set();
const titles = new Set();
const descriptions = new Set();
const paragraphs = new Map();
for (const guide of guides) {
  assert.ok(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(guide.slug), `${guide.slug}: clean URL`);
  assert.ok(!slugs.has(guide.slug), `${guide.slug}: unique slug`); slugs.add(guide.slug);
  assert.ok(!titles.has(guide.metaTitle), `${guide.slug}: unique title`); titles.add(guide.metaTitle);
  assert.ok(!descriptions.has(guide.description), `${guide.slug}: unique description`); descriptions.add(guide.description);
  assert.ok(`${guide.metaTitle} | Nexal`.length < 60, `${guide.slug}: title length`);
  assert.ok(guide.description.length < 155, `${guide.slug}: description length`);
  assert.ok(!JSON.stringify(guide).includes('—'), `${guide.slug}: no em dash`);
  assert.ok(guide.sections.length >= 4, `${guide.slug}: substantive sections`);
  const ids = new Set();
  for (const section of guide.sections) {
    assert.ok(!ids.has(section.id), `${guide.slug}: unique anchor`); ids.add(section.id);
    for (const paragraph of section.paragraphs) {
      if (paragraph.length > 150) {
        assert.ok(!paragraphs.has(paragraph), `${guide.slug}: paragraph reused from ${paragraphs.get(paragraph)}`);
        paragraphs.set(paragraph, guide.slug);
      }
    }
  }
  const text = [guide.intro, guide.takeaway, ...guide.sections.flatMap(section => [section.title, ...section.paragraphs, ...(section.bullets || []), section.example ? JSON.stringify(section.example) : ''])].join(' ');
  const words = text.trim().split(/\s+/).length;
  if (guide.publishedAt === '2026-10-11') assert.ok(words >= 400, `${guide.slug}: substantive content (${words} words)`);
  const dates = guideDates(guide);
  assert.ok(dates.modified >= dates.published, `${guide.slug}: truthful date sequence`);
  assert.ok(guide.feature.href.startsWith('/') && guide.faqs.length >= 2 && guide.sources.length, `${guide.slug}: feature, FAQ and sources`);
  console.log(`PASS content ${guide.slug}: ${words} words`);
}
const added = guides.filter(guide => guide.publishedAt === '2026-10-11').length;
if (process.env.EXPECT_NEW_GUIDES) assert.equal(added, Number(process.env.EXPECT_NEW_GUIDES), 'Requested new guide count');
console.log(`PASS ${guides.length} guides; ${added} new. Automated checks supplement, not replace, editorial review.`);
