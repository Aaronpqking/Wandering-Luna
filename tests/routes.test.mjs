import assert from 'node:assert/strict';
import test from 'node:test';
import { alternatePath, localizedPath, resolveRoute } from '../lib/routes.ts';

// Expected pairs are deliberately independent of the implementation's route map.
const pairs = [
  ['/en', '/es'],
  ['/en/schedule', '/es/horario'],
  ['/en/gatherings', '/es/encuentros'],
  ['/en/retreats', '/es/retiros'],
  ['/en/about', '/es/acerca'],
  ['/en/contact', '/es/contacto'],
  ['/en/locations', '/es/lugares'],
  ...['luquillo', 'palmas-del-mar', 'rio-grande', 'naguabo'].map((slug) => [`/en/locations/${slug}`, `/es/lugares/${slug}`]),
];

for (const [en, es] of pairs) {
  test(`${en} ↔ ${es}`, () => {
    assert.equal(alternatePath('en', en), es);
    assert.equal(alternatePath('es', es), en);
    assert.equal(alternatePath('en', en.slice(4)), es);
    assert.equal(alternatePath('es', es.slice(4)), en);
    assert.equal(localizedPath('es', es), es);
    assert.equal(localizedPath('en', en), en);
    assert.ok(resolveRoute('en', en.split('/').slice(2)));
    assert.ok(resolveRoute('es', es.split('/').slice(2)));
  });
}

test('query, fragment, and untranslated detail slugs survive conversion', () => {
  assert.equal(alternatePath('en', '/en/schedule?view=week#classes'), '/es/horario?view=week#classes');
  assert.equal(localizedPath('es', 'locations/schedule'), '/es/lugares/schedule');
});

for (const path of [
  '/en/garbage', '/es/cualquier-cosa', '/en/locations/not-a-location', '/es/lugares/no-existe',
  '/en/events/test', '/es/eventos/test', '/en/gatherings/test', '/es/encuentros/test',
  '/en/retreats/test', '/es/retiros/test', '/en/schedule/extra', '/es/horario/extra',
  '/en/locations/luquillo/extra', '/es/lugares/luquillo/extra',
  '/en/horario', '/es/schedule', '/en/lugares', '/es/locations',
]) {
  test(`${path} is not a supported route`, () => {
    const [, locale, ...segments] = path.split('/');
    assert.equal(resolveRoute(locale, segments), null);
  });
}
