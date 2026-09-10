import Link from 'next/link';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/content';

export function HomeFinalCta({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-forest px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{h.finalEyebrow}</p>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.04em] text-ivory sm:text-5xl lg:text-6xl">
          {h.finalTitle}
        </h2>
        <p className="mt-6 text-base leading-7 text-ivory/70 sm:text-lg">
          {h.finalBody}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href={localizedPath(locale, 'schedule')}
            className="rounded-full bg-ivory px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-transform hover:-translate-y-0.5"
          >
            {h.finalCta}
          </Link>
          <Link
            href={localizedPath(locale, 'contact')}
            className="rounded-full border border-ivory/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory/10"
          >
            {h.finalCtaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
