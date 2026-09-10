import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveSiteOrigin } from '../lib/site-config.ts';

test('local builds retain localhost fallback without requiring production configuration', () => {
  assert.equal(resolveSiteOrigin(undefined, undefined), 'http://localhost:3000');
  assert.equal(resolveSiteOrigin('', 'development'), 'http://localhost:3000');
  assert.equal(resolveSiteOrigin('http://localhost:4000', undefined), 'http://localhost:4000');
});
test('Vercel production rejects absent, insecure and loopback canonical origins', () => {
  for (const value of [undefined, '', ' ', 'broken', 'http://example.test', 'https://localhost', 'https://localhost.', 'https://x.localhost', 'https://127.0.0.1', 'https://127.1', 'https://2130706433', 'https://[::1]', 'https://[::ffff:127.0.0.1]', 'https://0.0.0.0']) {
    assert.throws(() => resolveSiteOrigin(value, 'production'), /Vercel Production requires NEXT_PUBLIC_SITE_URL/, String(value));
  }
});
test('origin structure validation remains enforced in all environments', () => {
  for (const env of [undefined, 'preview', 'production']) for (const url of ['ftp://example.test', 'https://user:pass@example.test', 'https://example.test/path', 'https://example.test?x=1', 'https://example.test/#fragment']) assert.throws(() => resolveSiteOrigin(url, env), /NEXT_PUBLIC_SITE_URL/);
});
test('production and preview can share the confirmed production origin', () => {
  for (const env of ['production', 'preview']) assert.equal(resolveSiteOrigin('https://wandering-luna.vercel.app/', env), 'https://wandering-luna.vercel.app');
  assert.equal(resolveSiteOrigin('https://future.example.test', 'production'), 'https://future.example.test');
});
