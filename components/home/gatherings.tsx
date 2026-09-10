import Link from 'next/link';
import Image from 'next/image';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/content';

export function HomeGatherings({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-night px-5 py-20 text-ivory sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{h.gatheringsEyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.04em] text-ivory sm:text-5xl">
            {h.gatheringsTitle}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-ivory/70 sm:text-lg">
            {h.gatheringsBody}
          </p>
          <Link
            href={localizedPath(locale, 'gatherings')}
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-ivory"
          >
            {h.gatheringsCta}
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/practice-gatherings.webp"
              alt={locale === 'en' ? 'A large brass gong on the sand at the beach at golden hour' : 'Un gran gong de bronce sobre la arena de la playa al atardecer'}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/gatherings-night-circle.webp"
              alt={locale === 'en' ? 'A nighttime beach bonfire circle with people seated together under the moon' : 'Un c\u00edrculo de fogata nocturna en la playa con personas sentadas bajo la luna'}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/gatherings-candle.webp"
              alt={locale === 'en' ? 'A single lit candle on natural stone in moonlight' : 'Una vela encendida sobre piedra natural a la luz de la luna'}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
