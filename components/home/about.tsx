import Link from 'next/link';
import Image from 'next/image';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/content';

export function HomeAbout({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-soft-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/about-nicole.webp"
            alt={locale === 'en' ? 'Nicole seated and smiling in a relaxed meditation pose in a bright coastal interior' : 'Nicole sentada y sonriendo en posici\u00f3n de meditaci\u00f3n en un interior costero luminoso'}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">{h.aboutEyebrow}</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.04em] text-forest sm:text-5xl">
            {h.aboutTitle}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-charcoal/70 sm:text-lg">
            {h.aboutBody}
          </p>
          <Link
            href={localizedPath(locale, 'about')}
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:text-clay"
          >
            {h.aboutCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
