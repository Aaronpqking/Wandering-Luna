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
