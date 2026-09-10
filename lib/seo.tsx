import type { Metadata } from 'next';
import { localizedPath, resolveRoute, type Locale } from './routes';
import { SITE_URL, social } from './site-config';

export const metadataByLocale: Record<Locale, Metadata> = {
  en: { title: 'Yoga in Eastern Puerto Rico | Wandering Luna', description: 'Discover yoga, moon circles, retreats and intentional gatherings with Wandering Luna across Luquillo, Palmas del Mar, Río Grande and Eastern Puerto Rico.' },
  es: { title: 'Yoga en el Este de Puerto Rico | Wandering Luna', description: 'Descubre yoga, círculos de luna, retiros y encuentros con Wandering Luna en Luquillo, Palmas del Mar, Río Grande y el este de Puerto Rico.' },
};

export function localizedMetadata(locale: Locale, pathname = ''): Metadata {
  if (!resolveRoute(locale, pathname.split('/').filter(Boolean))) return {};
  const canonical = `${SITE_URL}${localizedPath(locale, pathname)}`;
  const meta = metadataByLocale[locale];
  const title = meta.title ?? '';
  const description = meta.description ?? '';
  return {
    ...meta,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}${localizedPath('en', pathname)}`,
        es: `${SITE_URL}${localizedPath('es', pathname)}`,
        'x-default': `${SITE_URL}/`,
      },
    },
    openGraph: { type: 'website', locale: locale === 'en' ? 'en_US' : 'es_PR', url: canonical, siteName: 'Wandering Luna', title, description },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const data = {
    '@context': 'https://schema.org', '@type': 'Organization', name: 'Wandering Luna',
    url: `${SITE_URL}${localizedPath(locale)}`, description: metadataByLocale[locale].description,
    sameAs: [social.instagram.url],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
