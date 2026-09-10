import Link from 'next/link';
import Image from 'next/image';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/routes';
import { SectionHeader } from '@/components/section-header';

export function HomePractice({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={h.practiceEyebrow} title={h.practiceTitle} />
        <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/65">{h.practiceIntro}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {copy.practices.map((p, i) => (
            <Link
              key={p.slug}
              href={localizedPath(locale, p.slug)}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  quality={85}
                  sizes="(min-width: 1376px) 411px, (min-width: 1024px) calc((100vw - 144px) / 3), (min-width: 768px) calc((100vw - 112px) / 3), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
                  0{i + 1} &mdash; {p.label}
                </p>
                <p className="mt-2 font-display text-2xl leading-tight tracking-[-0.03em] text-ivory">
                  {p.sublabel}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
