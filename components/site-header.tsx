import Link from 'next/link';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/routes';
import { LanguageSwitcher } from './language-switcher';
import { MobileNav } from './mobile-nav';

export function SiteHeader({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const links = [[copy.navigation.schedule, 'schedule'], [copy.navigation.gatherings, 'gatherings'], [copy.navigation.retreats, 'retreats'], [copy.navigation.locations, 'locations'], [copy.navigation.about, 'about']];
  return <header className="absolute inset-x-0 top-0 z-10"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12"><Link href={localizedPath(locale)} className="font-display text-2xl tracking-[-0.04em] text-ivory" aria-label="Wandering Luna home">Wandering Luna<span className="text-gold">.</span></Link><nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">{links.map(([label, path]) => <Link key={path} href={localizedPath(locale, path)} className="text-sm text-ivory/80 transition-colors hover:text-ivory">{label}</Link>)}<LanguageSwitcher locale={locale} light /><Link href={localizedPath(locale, 'schedule')} className="rounded-full border border-ivory/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory hover:text-forest">{copy.navigation.book}</Link></nav><MobileNav locale={locale} copy={copy} /></div></header>;
}
