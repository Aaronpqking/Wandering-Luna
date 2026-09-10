import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { renderToStaticMarkup } from 'react-dom/server';
import { bookingCopy } from '../lib/acuity.ts';
import * as acuity from '../lib/acuity.ts';
import { social } from '../lib/site-config.ts';

const require = createRequire(import.meta.url);
// Render the actual component at each hook state using existing TypeScript/React.
// No browser, network, test framework dependency or copied rendering logic.
function render(status, locale) {
  const exports = {};
  const source = ts.transpileModule(readFileSync(new URL('../components/acuity-embed.tsx', import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  runInNewContext(source, { exports, require: name => {
    if (name === 'react') return { useState: () => [status, () => {}], useEffect: () => {} };
    if (name === 'next/script') return { default: () => null };
    if (name === '@/lib/acuity') return acuity;
    if (name === '@/lib/site-config') return { social };
    return require(name);
  }});
  return renderToStaticMarkup(exports.AcuityEmbed({url:'https://example.as.me/',locale}));
}
for (const locale of ['en','es']) {
  test(`${locale}: loaded embed never displays unavailable or loading message`, () => {
    const html=render('loaded',locale);
    assert.ok(!html.includes(bookingCopy[locale].unavailable));
    assert.ok(!html.includes(bookingCopy[locale].loading));
    assert.ok(html.includes(bookingCopy[locale].direct));
  });
  test(`${locale}: loading and recovery states remain distinct`, () => {
    assert.ok(render('loading',locale).includes(bookingCopy[locale].loading));
    assert.ok(render('unavailable',locale).includes(bookingCopy[locale].unavailable));
  });
  test(`${locale}: iframe delegates payment only and preserves direct recovery`, () => {
    const html=render('loaded',locale);
    assert.match(html, /<iframe[^>]*allow="payment"/);
    assert.ok(html.includes('title="'+bookingCopy[locale].frameTitle+'"'));
    assert.match(html, /<a href="https:\/\/example.as.me\/"/);
    assert.ok(!html.includes('sandbox='));
  });
}
