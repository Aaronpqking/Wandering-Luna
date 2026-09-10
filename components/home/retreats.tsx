import Link from 'next/link';
import Image from 'next/image';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/content';

export function HomeRetreats({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/7]">
          <Image
            src="/practice-retreats.webp"
            alt={locale === 'en' ? 'An earthen retreat room with clay walls and a window overlooking tropical greenery' : 'Una habitaci\u00f3n de retiro de tierra con paredes de arcilla y ventana a la vegetaci\u00f3n tropical'}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-night/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{h.retreatsEyebrow}</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.04em] text-ivory sm:text-5xl lg:text-6xl">
              {h.retreatsTitle}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-ivory/75 sm:text-lg">
              {h.retreatsBody}
            </p>
            <Link
              href={localizedPath(locale, 'retreats')}
              className="mt-8 inline-flex rounded-full border border-ivory/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory hover:text-forest"
            >
              {h.retreatsCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
