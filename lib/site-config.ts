export function resolveSiteOrigin(value: string | undefined, vercelEnv: string | undefined): string {
  const production = vercelEnv === 'production';
  const message = production
    ? 'Vercel Production requires NEXT_PUBLIC_SITE_URL to be an HTTPS origin without credentials, path, query or fragment, and not localhost or a loopback address.'
    : 'NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) origin without credentials, a path, query, or fragment.';
  if (production && !value?.trim()) throw new Error(message);
  let url: URL;
  try { url = new URL(value || 'http://localhost:3000'); }
  catch { throw new Error(message); }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error(message);
  const host = url.hostname.toLowerCase().replace(/\.$/, '');
  const loopback = host === 'localhost' || host.endsWith('.localhost') || /^127\./.test(host) || host === '[::1]' || host === '0.0.0.0' || /^\[::ffff:7f[0-9a-f]{2}:/.test(host);
  if (production && (url.protocol !== 'https:' || loopback)) throw new Error(message);
  return url.origin;
}

export const SITE_URL = resolveSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL, process.env.VERCEL_ENV);
export const social = {
  instagram: {
    handle: '@wandering_luna_',
    url: 'https://www.instagram.com/wandering_luna_/',
    featuredPostUrl: 'https://www.instagram.com/p/DX4RTARjoxj/',
  },
} as const;

export type ContactDetails = { email?: string; phone?: string; whatsapp?: string };
// BUSINESS_FACT_REQUIRED: add only confirmed contact channels. Phone and WhatsApp
// numbers must include their international country code. No default data is invented.
export const contactDetails: ContactDetails = {};

export function optionalContactLinks(details: ContactDetails = contactDetails) {
  const links: { kind: keyof ContactDetails; label: string; href: string }[] = [];
  const email = details.email?.trim();
  if (email) links.push({ kind: 'email', label: email, href: `mailto:${encodeURIComponent(email)}` });
  for (const kind of ['phone', 'whatsapp'] as const) {
    const label = details[kind]?.trim();
    const digits = label?.replace(/\D/g, '');
    if (label && digits) links.push({ kind, label, href: kind === 'phone' ? `tel:+${digits}` : `https://wa.me/${digits}` });
  }
  return links;
}
