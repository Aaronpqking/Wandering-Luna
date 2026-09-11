// BUSINESS_FACT_REQUIRED: confirm the owned production origin before deployment.
const configuredUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
if (!['http:', 'https:'].includes(configuredUrl.protocol) || configuredUrl.username || configuredUrl.password || configuredUrl.pathname !== '/' || configuredUrl.search || configuredUrl.hash) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) origin without credentials, a path, query, or fragment.');
}

export const SITE_URL = configuredUrl.origin;
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
