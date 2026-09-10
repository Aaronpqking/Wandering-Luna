'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import { alternatePath, type Locale } from '@/lib/routes';

function subscribeLocation(listener: () => void) {
  window.addEventListener('popstate', listener);
  window.addEventListener('hashchange', listener);
  return () => {
    window.removeEventListener('popstate', listener);
    window.removeEventListener('hashchange', listener);
  };
}
const locationSuffix = () => window.location.search + window.location.hash;
const serverSuffix = () => '';

export function LanguageSwitcher({ locale, light = false }: { locale: Locale; light?: boolean }) {
  const pathname = usePathname();
  const suffix = useSyncExternalStore(subscribeLocation, locationSuffix, serverSuffix);
  const currentPath = pathname.split('/').slice(2).join('/');
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  return <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]" aria-label={locale === 'en' ? 'Language selector' : 'Selector de idioma'}>
    <span className={light ? 'text-ivory' : 'text-forest'}>{locale}</span>
    <span className={light ? 'text-ivory/65' : 'text-forest/30'}>/</span>
    <Link href={alternatePath(locale, currentPath + suffix)} hrefLang={otherLocale} lang={otherLocale} className={light ? 'text-ivory/80 transition-colors hover:text-ivory' : 'text-forest/75 transition-colors hover:text-forest'}>{otherLocale}</Link>
  </div>;
}
