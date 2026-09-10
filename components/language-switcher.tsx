'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { alternatePath, type Locale } from '@/lib/content';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const currentPath = pathname.split('/').slice(2).join('/');
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  return <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]" aria-label="Language selector"><span className="text-forest">{locale}</span><span className="text-forest/30">/</span><Link href={alternatePath(locale, currentPath)} className="text-forest/55 transition-colors hover:text-forest" onClick={() => window.localStorage.setItem('wandering-luna-locale', otherLocale)}>{otherLocale}</Link></div>;
}
