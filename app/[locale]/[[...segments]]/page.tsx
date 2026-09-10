import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { contentByLocale, isLocale, type Locale } from '@/lib/content';
import { localizedMetadata, OrganizationJsonLd } from '@/lib/seo';
import { PlaceholderPage } from '@/components/placeholder-page';
import { HomePage } from '@/components/home/home-page';

type Params = { locale: string; segments?: string[] };

function pageKey(locale: Locale, segments: string[]): keyof typeof contentByLocale[Locale]['pages'] | null {
  const first = segments[0];
  if (!first) return null;
  if (first === 'locations' || first === 'lugares') return segments.length > 1 ? 'location' : 'locations';
  if (first === 'events' || first === 'eventos') return 'event';
  if (first === 'retreats' || first === 'retiros') return segments.length > 1 ? 'retreat' : 'retreats';
  const translated = locale === 'es'
    ? ({ horario: 'schedule', encuentros: 'gatherings', retiros: 'retreats', acerca: 'about', contacto: 'contact' } as Record<string, string>)[first]
    : first;
  return ['schedule', 'gatherings', 'retreats', 'about', 'contact'].includes(translated)
    ? translated as keyof typeof contentByLocale[Locale]['pages']
    : null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  return localizedMetadata(locale, (params.segments ?? []).join('/'));
}

export default function LocalizedPage({ params }: { params: Params }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const copy = contentByLocale[locale];
  const segments = params.segments ?? [];

  if (segments.length === 0) {
    return (
      <>
        <OrganizationJsonLd locale={locale} />
        <HomePage locale={locale} copy={copy} />
      </>
    );
  }

  const key = pageKey(locale, segments);
  const page = key
    ? copy.pages[key]
    : { eyebrow: copy.home.heroEyebrow, title: copy.home.heroTitle, body: copy.home.heroSupport };
  return (
    <>
      <OrganizationJsonLd locale={locale} />
      <PlaceholderPage locale={locale} copy={copy} page={page} />
    </>
  );
}
