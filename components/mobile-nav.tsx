'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/routes';
import { LanguageSwitcher } from './language-switcher';

export function MobileNav({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const [open, setOpen] = useState(false);
  const links = [
    [copy.navigation.schedule, 'schedule'], [copy.navigation.gatherings, 'gatherings'], [copy.navigation.retreats, 'retreats'], [copy.navigation.about, 'about'], [copy.navigation.locations, 'locations'], [copy.navigation.contact, 'contact'],
  ];
  return <div className="lg:hidden" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}><button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`mobile-navigation-${locale}`} aria-label={open ? copy.navigation.close : copy.navigation.menu} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-colors hover:bg-ivory/10">{open ? <X size={20} /> : <Menu size={20} />}</button>{open && <div id={`mobile-navigation-${locale}`} className="absolute inset-x-4 top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto z-20 rounded-2xl border border-forest/10 bg-ivory p-6 shadow-[0_20px_60px_rgba(47,74,52,0.14)]"><nav className="flex flex-col gap-1" aria-label="Mobile navigation">{links.map(([label, path]) => <Link key={path} href={localizedPath(locale, path)} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-lg text-forest transition-colors hover:bg-forest/5">{label}</Link>)}</nav><div className="mt-5 flex items-center justify-between border-t border-forest/10 pt-5"><LanguageSwitcher locale={locale} /><Link href={localizedPath(locale, 'schedule')} onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center rounded-full bg-forest px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory">{copy.navigation.book}</Link></div></div>}</div>;
}
