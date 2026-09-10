import { imageAlt } from '@/lib/image-alt';
import Link from 'next/link';
import Image from 'next/image';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/routes';

export function HomeHero({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-night" aria-label="Hero">
      <div className="absolute inset-0">
        <Image
          src="/photos/hero.webp"
          alt={imageAlt['hero'][locale]}
          fill
          quality={85}
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/25 to-night/40" />
      </div>
      <div className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{h.heroEyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.055em] text-ivory sm:text-6xl lg:text-7xl">
            {h.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ivory/80 sm:text-lg">
            {h.heroSupport}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-ivory/55">
            {h.heroDetail}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, 'schedule')}
              className="rounded-full bg-ivory px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-transform hover:-translate-y-0.5"
            >
              {h.heroCta}
            </Link>
            <Link
              href={localizedPath(locale, 'gatherings')}
              className="rounded-full border border-ivory/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory/10"
            >
              {h.heroCtaSecondary}
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-12 w-full max-w-7xl">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-ivory/35">
            {h.heroScroll}
          </p>
        </div>
      </div>
    </section>
  );
}
