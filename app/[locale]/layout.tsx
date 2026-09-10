import { notFound } from 'next/navigation';
import { contentByLocale, isLocale, type Locale } from '@/lib/content';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function generateStaticParams() { return [{ locale: 'en' }, { locale: 'es' }]; }

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const copy = contentByLocale[locale];
  return (
    <>
      <SiteHeader locale={locale} copy={copy} />
      <div className="pb-16 md:pb-0">{children}</div>
      <SiteFooter locale={locale} copy={copy} />
    </>
  );
}
