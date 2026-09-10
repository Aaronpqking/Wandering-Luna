import test from 'node:test';
import assert from 'node:assert/strict';
import { indexablePaths, isIndexablePath, locationSlugs, localizedPath, resolveRoute, alternatePath } from '../lib/routes.ts';
import { secondaryContent, secondaryMetadata, visibleVenueDetails } from '../lib/secondary-content.ts';

const completed = ['schedule', 'locations', ...locationSlugs.map(slug => `locations/${slug}`)];
test('publication permits only completed semantic routes', () => {
  assert.deepEqual(indexablePaths, ['', ...completed]);
  for (const path of ['gatherings', 'retreats', 'about', 'contact']) {
    assert.ok(resolveRoute('en', [path]));
    assert.equal(isIndexablePath(path), false);
  }
  for (const path of ['garbage', 'locations/fake', 'locations/luquillo/extra', 'horario', 'events/test']) assert.equal(isIndexablePath(path), false);
});
for (const locale of ['en','es']) {
  test(`${locale}: completed metadata is unique and authored`, () => {
    const pages = completed.map(path => secondaryMetadata(locale,path));
    assert.equal(new Set(pages.map(p=>p.title)).size,6);
    assert.equal(new Set(pages.map(p=>p.description)).size,6);
    for (const page of pages) { assert.ok(page.title.includes('Wandering Luna')); assert.ok(page.description.length > 80); }
    assert.equal(secondaryMetadata(locale,'gatherings'),undefined);
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
