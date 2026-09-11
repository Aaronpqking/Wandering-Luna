import test from 'node:test';
import assert from 'node:assert/strict';
import { indexablePaths, isIndexablePath, locationSlugs, localizedPath, resolveRoute, alternatePath, supportedPaths } from '../lib/routes.ts';
import { secondaryContent, secondaryMetadata, visibleVenueDetails } from '../lib/secondary-content.ts';

const completed = ['schedule', 'gatherings', 'retreats', 'about', 'contact', 'locations', ...locationSlugs.map(slug => `locations/${slug}`)];
test('publication permits only completed semantic routes', () => {
  assert.deepEqual(indexablePaths, supportedPaths);
  assert.equal(indexablePaths.length * 2 + 1, 23);
  for (const path of ['gatherings', 'retreats', 'about', 'contact']) {
    assert.ok(resolveRoute('en', [path]));
    assert.equal(isIndexablePath(path), true);
  }
  for (const path of ['garbage', 'locations/fake', 'locations/luquillo/extra', 'horario', 'events/test', 'gatherings/future', 'retreats/future', 'about/extra', 'contact/extra']) assert.equal(isIndexablePath(path), false);
});
for (const locale of ['en','es']) {
  test(`${locale}: completed metadata is unique and authored`, () => {
    const pages = completed.map(path => secondaryMetadata(locale,path));
    assert.equal(new Set(pages.map(p=>p.title)).size,completed.length);
    assert.equal(new Set(pages.map(p=>p.description)).size,completed.length);
    for (const page of pages) { assert.ok(page.title.includes('Wandering Luna')); assert.ok(page.description.length > 80); }
    assert.equal(secondaryMetadata(locale,'locations/unknown'),undefined);
    assert.equal(JSON.stringify(secondaryContent[locale]).includes('BUSINESS_FACT_REQUIRED'),false);
    for (const slug of locationSlugs) assert.equal(secondaryContent[locale].places[slug].details,undefined);
  });
  for (const path of completed) test(`${locale}: published ${path} switches with query and hash intact`,()=> {
    const target=locale==='en'?'es':'en';
    const current=localizedPath(locale,path);
    assert.ok(resolveRoute(locale,current.split('/').slice(2)));
    assert.equal(alternatePath(locale,`${current}?from=locations#booking`),`${localizedPath(target,path)}?from=locations#booking`);
  });
}
test('optional operational details never produce empty fields',()=>{
  assert.deepEqual(visibleVenueDetails(),[]);
  assert.deepEqual(visibleVenueDetails({venue:'',parking:'   '}),[]);
  assert.deepEqual(visibleVenueDetails({venue:'Confirmed venue',parking:''}),[['venue','Confirmed venue']]);
});
