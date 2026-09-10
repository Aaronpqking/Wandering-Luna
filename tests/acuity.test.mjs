import test from 'node:test';
import assert from 'node:assert/strict';
import { parseSchedulerUrl, bookingCopy } from '../lib/acuity.ts';

test('absent and malformed scheduler configuration safely disables integration', () => {
  for (const value of [undefined, '', ' ', 'broken', 'http://example.as.me', 'https://evil.test', 'https://example.as.me.evil.test', 'https://user:pass@example.as.me', 'https://example.as.me/admin', 'https://example.as.me?token=private', 'https://example.as.me?email=person', 'https://acuityscheduling.com/schedule.php', 'https://example.as.me?owner=1&owner=2', 'https://embed.acuityscheduling.com/']) assert.equal(parseSchedulerUrl(value), null);
});
test('public general scheduler links are preserved without invented parameters', () => {
  for (const value of ['https://example.as.me/', 'https://example.acuityscheduling.com/', 'https://acuityscheduling.com/schedule.php?owner=123']) assert.equal(parseSchedulerUrl(value), value);
});
test('booking context provides both website languages without translating the iframe', () => {
  for (const locale of ['en', 'es']) for (const value of Object.values(bookingCopy[locale])) assert.ok(value.length > 0);
  assert.notEqual(bookingCopy.en.title, bookingCopy.es.title);
});
