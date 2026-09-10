import Link from 'next/link';
import { social } from '@/lib/site-config';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/routes';

export function SiteFooter({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  return <footer className="bg-night px-5 py-12 text-ivory sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16"><div><p className="font-display text-3xl tracking-[-0.04em]">Wandering Luna<span className="text-gold">.</span></p><p className="mt-4 max-w-xs text-sm leading-6 text-ivory/65">{copy.footer.note}</p></div><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{copy.footer.links}</p><nav className="mt-4 flex flex-col gap-3 text-sm text-ivory/70">{[[copy.navigation.schedule, 'schedule'], [copy.navigation.gatherings, 'gatherings'], [copy.navigation.retreats, 'retreats'], [copy.navigation.about, 'about']].map(([label, path]) => <Link key={path} href={localizedPath(locale, path)} className="transition-colors hover:text-ivory">{label}</Link>)}</nav></div><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{copy.footer.follow}</p><p className="mt-4 text-sm leading-6 text-ivory/70"><a href={social.instagram.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ivory">{social.instagram.handle}</a></p></div></div><div className="mx-auto mt-12 max-w-7xl border-t border-ivory/10 pt-5 text-xs text-ivory/45">{copy.footer.rights}</div></footer>;
}
