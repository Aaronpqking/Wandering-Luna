import type { Metadata } from 'next';
import type { Locale } from './content';

const siteUrl = 'https://wanderingluna.co';

export const metadataByLocale: Record<Locale, Metadata> = {
  en: { title: 'Yoga in Eastern Puerto Rico | Wandering Luna', description: 'Discover yoga, moon circles, retreats and intentional gatherings with Wandering Luna across Luquillo, Palmas del Mar, Río Grande and Eastern Puerto Rico.' },
  es: { title: 'Yoga en el Este de Puerto Rico | Wandering Luna', description: 'Descubre yoga, círculos de luna, retiros y encuentros con Wandering Luna en Luquillo, Palmas del Mar, Río Grande y el este de Puerto Rico.' },
};

export function localizedMetadata(locale: Locale, pathname = ''): Metadata {
  const alternateLocale: Locale = locale === 'en' ? 'es' : 'en';
  const path = pathname ? `/${pathname}` : '';
  const canonical = `${siteUrl}/${locale}${path}`;
  const routeMap: Record<string, string> = { schedule: 'horario', gatherings: 'encuentros', retreats: 'retiros', about: 'acerca', contact: 'contacto', locations: 'lugares', horario: 'schedule', encuentros: 'gatherings', retiros: 'retreats', acerca: 'about', contacto: 'contact', lugares: 'locations' };
  const alternatePath = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => routeMap[segment] ?? segment)
    .join('/');
  const alternate = `${siteUrl}/${alternateLocale}${alternatePath ? `/${alternatePath}` : ''}`;
  const meta = metadataByLocale[locale];
  const title = meta.title ?? '';
  const description = meta.description ?? '';
  return { ...meta, alternates: { canonical, languages: { en: locale === 'en' ? canonical : alternate, es: locale === 'es' ? canonical : alternate, 'x-default': `${siteUrl}/` } }, openGraph: { type: 'website', locale: locale === 'en' ? 'en_US' : 'es_PR', url: canonical, siteName: 'Wandering Luna', title, description }, twitter: { card: 'summary_large_image', title, description } };
}

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Wandering Luna', url: `${siteUrl}/${locale}`, description: metadataByLocale[locale].description }) }} />;
}
