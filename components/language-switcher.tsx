'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { alternatePath, type Locale } from '@/lib/routes';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const currentPath = pathname.split('/').slice(2).join('/');
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  return <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]" aria-label={locale === 'en' ? 'Language selector' : 'Selector de idioma'}><span className="text-forest">{locale}</span><span className="text-forest/30">/</span><Link href={alternatePath(locale, currentPath)} hrefLang={otherLocale} lang={otherLocale} className="text-forest/55 transition-colors hover:text-forest">{otherLocale}</Link></div>;
}
