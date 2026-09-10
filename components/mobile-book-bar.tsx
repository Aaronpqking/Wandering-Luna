import Link from 'next/link';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/content';

export function MobileBookBar({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-forest/10 bg-ivory/95 backdrop-blur-sm md:hidden">
      <div className="flex items-center justify-between px-5 py-3">
        <Link
          href={localizedPath(locale)}
          className="font-display text-lg tracking-[-0.03em] text-forest"
        >
          Wandering Luna<span className="text-gold">.</span>
        </Link>
        <Link
          href={localizedPath(locale, 'schedule')}
          className="rounded-full bg-forest px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory"
        >
          {copy.navigation.book}
        </Link>
      </div>
    </div>
  );
}
