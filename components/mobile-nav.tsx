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
    [copy.navigation.schedule, 'schedule'], [copy.navigation.gatherings, 'gatherings'], [copy.navigation.retreats, 'retreats'], [copy.navigation.about, 'about'],
  ];
  return <div className="md:hidden"><button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? copy.navigation.close : copy.navigation.menu} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest/5">{open ? <X size={20} /> : <Menu size={20} />}</button>{open && <div className="absolute inset-x-4 top-20 z-20 rounded-2xl border border-forest/10 bg-ivory p-6 shadow-[0_20px_60px_rgba(47,74,52,0.14)]"><nav className="flex flex-col gap-1" aria-label="Mobile navigation">{links.map(([label, path]) => <Link key={path} href={localizedPath(locale, path)} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-lg text-forest transition-colors hover:bg-forest/5">{label}</Link>)}</nav><div className="mt-5 flex items-center justify-between border-t border-forest/10 pt-5"><LanguageSwitcher locale={locale} /><Link href={localizedPath(locale, 'schedule')} onClick={() => setOpen(false)} className="rounded-full bg-forest px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory">{copy.navigation.book}</Link></div></div>}</div>;
}
