import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { contentByLocale } from '@/lib/content';
import { isLocale, localizedPath, resolveRoute, supportedPaths } from '@/lib/routes';
import { localizedMetadata, OrganizationJsonLd } from '@/lib/seo';
import { PlaceholderPage } from '@/components/placeholder-page';
import { SchedulePage, LocationsPage, LocationPage } from '@/components/secondary/pages';
import type { LocationSlug } from '@/lib/routes';
import { HomePage } from '@/components/home/home-page';

type Params = { locale: string; segments?: string[] };

// Only confirmed routes are generated. Runtime validation rejects every other URL.
export function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!isLocale(locale)) return [];
  return supportedPaths.map((path) => ({ segments: localizedPath(locale, path).split('/').slice(2) }));
}

async function validatedRoute(params: Promise<Params>) {
  const { locale, segments = [] } = await params;
  if (!isLocale(locale)) notFound();
  const key = resolveRoute(locale, segments);
  if (!key) notFound();
  return { locale, segments, key };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, segments } = await validatedRoute(params);
  return localizedMetadata(locale, segments.join('/'));
}

export default async function LocalizedPage({ params }: { params: Promise<Params> }) {
  const { locale, key, segments } = await validatedRoute(params);
  const copy = contentByLocale[locale];
  return (
    <>
      <OrganizationJsonLd locale={locale} />
      {key === 'home' ? <HomePage locale={locale} copy={copy} />
        : key === 'schedule' ? <SchedulePage locale={locale} />
        : key === 'locations' ? <LocationsPage locale={locale} />
        : key === 'location' ? <LocationPage locale={locale} slug={segments[1] as LocationSlug} />
        : <PlaceholderPage locale={locale} copy={copy} page={copy.pages[key]} />}
    </>
  );
}
