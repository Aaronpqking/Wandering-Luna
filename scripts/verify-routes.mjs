import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import { SITE_URL } from '../lib/site-config.ts';

const sameUrl = (actual, expected) => actual && new URL(actual).href === new URL(expected).href;
const server = process.env.TEST_BASE_URL || 'http://localhost:3000';
const pairs = [
  ['/en', '/es'], ['/en/schedule', '/es/horario'],
  ['/en/gatherings', '/es/encuentros'], ['/en/retreats', '/es/retiros'],
  ['/en/about', '/es/acerca'], ['/en/contact', '/es/contacto'], ['/en/locations', '/es/lugares'],
  ...['luquillo', 'palmas-del-mar', 'rio-grande', 'naguabo'].map((slug) => [`/en/locations/${slug}`, `/es/lugares/${slug}`]),
];
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map(([raw]) =>
  Object.fromEntries([...raw.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key.toLowerCase(), value.replaceAll('&amp;', '&')])));

async function get(path, userAgent = 'Mozilla/5.0') {
  const response = await fetch(`${server}${path}`, { redirect: 'manual', headers: { 'user-agent': userAgent }, signal: AbortSignal.timeout(30000) });
  return { response, html: await response.text() };
}

for (const language of ['en', 'es']) {
  const response = await fetch(server, { redirect: 'manual', headers: { 'accept-language': language }, signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `neutral root for ${language}`);
  const html = await response.text();
  for (const locale of ['en', 'es']) assert.ok(tags(html, 'a').some((tag) => tag.href === `/${locale}`));
  assert.ok(tags(html, 'link').some((tag) => tag.rel === 'canonical' && sameUrl(tag.href, `${SITE_URL}/`)));
}
console.log('PASS / — neutral entry for both browser languages');

for (const pair of pairs) {
  for (const [index, path] of pair.entries()) {
    const locale = index === 0 ? 'en' : 'es';
    const { response, html } = await get(path);
    assert.equal(response.status, 200, path);
    assert.equal(tags(html, 'html')[0]?.lang, locale, `${path} document language`);
    const links = tags(html, 'link');
    assert.ok(links.some((tag) => tag.rel === 'canonical' && tag.href === `${SITE_URL}${path}`), `${path} canonical`);
    for (const [hreflang, target] of [['en', pair[0]], ['es', pair[1]], ['x-default', '/']]) {
      assert.ok(links.some((tag) => tag.rel === 'alternate' && tag.hreflang === hreflang && sameUrl(tag.href, `${SITE_URL}${target}`)), `${path} ${hreflang} alternate`);
    }
    assert.ok(tags(html, 'a').some((tag) => tag.hreflang === (index === 0 ? 'es' : 'en') && tag.href === pair[1 - index]), `${path} language switch`);
    const meta = tags(html, 'meta');
    assert.ok(meta.some((tag) => tag.property === 'og:url' && tag.content === `${SITE_URL}${path}`));
    assert.ok(meta.some((tag) => tag.name === 'twitter:card' && tag.content === 'summary_large_image'));
    const data = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1] || '{}');
    assert.equal(data['@type'], 'Organization');
    assert.equal(data.url, `${SITE_URL}/${locale}`);
    assert.deepEqual(data.sameAs, ['https://www.instagram.com/wandering_luna_/']);
    assert.ok(!html.includes('BUSINESS_FACT_REQUIRED'), `${path} internal marker hidden`);
    if (path === `/${locale}`) {
      const images = tags(html, 'img');
      assert.equal(images.length, 10, 'original image assignments preserved');
      const hero = images.find((tag) => tag.src.includes('hero.webp'));
      assert.ok(hero?.srcset.includes('/_next/image?'));
      assert.notEqual(hero.loading, 'lazy');
      assert.ok(links.some((tag) => tag.rel === 'preload' && tag.as === 'image' && tag.imagesrcset?.includes('hero.webp')));
      for (const img of images.filter((tag) => tag !== hero)) assert.equal(img.loading, 'lazy');
    }
    console.log(`PASS ${path} — 200, lang, switch, canonical, reciprocal hreflang, OG/Twitter, JSON-LD`);
  }
}

for (const path of [
  '/en/garbage', '/es/cualquier-cosa', '/en/locations/not-a-location', '/es/lugares/no-existe',
  '/en/events/test', '/es/eventos/test', '/en/gatherings/test', '/es/encuentros/test',
  '/en/retreats/test', '/es/retiros/test', '/en/schedule/extra', '/es/horario/extra',
  '/en/locations/luquillo/extra', '/es/lugares/luquillo/extra',
  '/en/horario', '/es/schedule', '/en/lugares', '/es/locations', '/fr', '/garbage',
]) {
  // Verify real HTTP status for regular requests and crawlers, not just a 404 heading.
  for (const agent of ['Mozilla/5.0', 'Googlebot']) {
    const { response, html } = await get(path, agent);
    assert.equal(response.status, 404, `${path} (${agent})`);
    assert.ok(!tags(html, 'link').some((tag) => tag.rel === 'canonical'), `${path} has no canonical`);
    assert.ok(!html.includes('application/ld+json'), `${path} has no Organization data`);
  }
  console.log(`PASS ${path} — HTTP 404 for browser and crawler`);
}

const { response: sitemapResponse, html: sitemap } = await get('/sitemap.xml');
assert.equal(sitemapResponse.status, 200);
const entries = [...sitemap.matchAll(/<url>(.*?)<\/url>/gs)].map(([, xml]) => xml);
assert.equal(entries.length, pairs.length * 2);
for (const pair of pairs) {
  for (const path of pair) {
    const entry = entries.find((xml) => xml.includes(`<loc>${SITE_URL}${path}</loc>`));
    assert.ok(entry, `${path} sitemap entry`);
    for (const [locale, target] of [['en', pair[0]], ['es', pair[1]], ['x-default', '/']]) {
      assert.ok(entry.includes(`hreflang="${locale}" href="${SITE_URL}${target}"`), `${path} sitemap ${locale} alternate`);
    }
  }
}
const { html: robots } = await get('/robots.txt');
assert.ok(robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`));
console.log('PASS sitemap.xml / robots.txt — all route pairs and reciprocal alternates');

for (const name of ['hero', 'about-nicole', 'practice-yoga', 'practice-gatherings', 'practice-retreats', 'gatherings-night-circle', 'gatherings-candle', 'social-group']) {
  const response = await fetch(`${server}/_next/image?url=%2Fphotos%2F${name}.webp&w=640&q=85`, { headers: { accept: 'image/webp' }, signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${name} optimization`);
  assert.match(response.headers.get('content-type'), /^image\/webp/);
  const bytes = (await response.arrayBuffer()).byteLength;
  const original = (await stat(new URL(`../public/photos/${name}.webp`, import.meta.url))).size;
  assert.ok(bytes < original, `${name} optimized size`);
  console.log(`PASS image ${name} — ${original} → ${bytes} bytes at 640px, quality 85`);
}
console.log('PASS routing / SEO / image delivery validation');
