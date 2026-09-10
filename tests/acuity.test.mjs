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

test('official embed forms and reviewed public selectors are preserved', () => {
  for (const url of [
    'https://app.acuityscheduling.com/schedule.php?owner=123&ref=embedded_csp',
    'https://example.as.me/?ref=embedded_csp',
    'https://example.as.me/my-class',
    'https://example.as.me/?appointmentType=class',
    'https://app.acuityscheduling.com/schedule.php?owner=123&appointmentType=class&ref=embedded_csp',
    'https://example.as.me/?appointmentType=123&calendarID=456',
  ]) assert.equal(parseSchedulerUrl(url), url);
});
test('prefill, form answers, coupons, arbitrary values and duplicated parameters are rejected', () => {
  for (const query of ['firstName=Jane', 'lastName=Doe', 'email=a%40example.test', 'phone=123', 'field%3A1=answer', 'field%3A1%5B%5D=answer', 'certificate=code', 'coupon=code', 'ref=anything', 'ref=embedded_csp&ref=embedded_csp', 'owner=1&owner=2', 'appointmentType=category%3Aprivate', 'appointmentType=class&email=a', 'calendarID=no', 'arbitrary=yes', '__proto__=value']) assert.equal(parseSchedulerUrl('https://example.as.me/?'+query), null, query);
  for(const url of ['https://app.acuityscheduling.com/', 'https://secure.acuityscheduling.com/', 'https://app.acuityscheduling.com.evil.test/schedule.php?owner=123', 'https://example.as.me:8443/', 'https://example.as.me/nested/path', 'https://example.as.me/my%20class']) assert.equal(parseSchedulerUrl(url), null, url);
});
