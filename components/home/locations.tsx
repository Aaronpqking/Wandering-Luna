import Link from 'next/link';
import Image from 'next/image';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/content';
import { SectionHeader } from '@/components/section-header';
import { ArrowRight } from 'lucide-react';

export function HomeLocations({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={h.locationsEyebrow} title={h.locationsTitle} />
        <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/65">{h.locationsIntro}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.locations.map((loc, i) => (
            <Link
              key={loc.slug}
              href={localizedPath(locale, `locations/${loc.slug}`)}
              className="group flex flex-col justify-between rounded-2xl border border-forest/10 bg-soft-white p-6 transition-all hover:border-forest/25 hover:shadow-[0_12px_40px_rgba(47,74,52,0.08)]"
            >
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-clay">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-forest">
                  {loc.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/55">{loc.blurb}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest/70 transition-colors group-hover:text-forest">
                {locale === 'en' ? 'Explore' : 'Explorar'}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
