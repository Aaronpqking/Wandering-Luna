import '@/app/globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { contentByLocale } from '@/lib/content';
import { isLocale, locales } from '@/lib/routes';
import { fontVariables } from '@/lib/fonts';
import { SITE_URL } from '@/lib/site-config';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: 'Wandering Luna' };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = contentByLocale[locale];
  return (
    <html lang={locale}>
      <body className={fontVariables}>
        <SiteHeader locale={locale} copy={copy} />
        <div className="pb-16 md:pb-0">{children}</div>
        <SiteFooter locale={locale} copy={copy} />
      </body>
    </html>
  );
}
