import Image from 'next/image';
import type { Locale, SiteContent } from '@/lib/content';
import { Instagram } from 'lucide-react';

export function HomeSocial({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-soft-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src="/social-group.webp"
            alt={locale === 'en' ? 'A group practicing yoga together on a beach deck at sunrise' : 'Un grupo practicando yoga juntos en una plataforma frente al mar al amanecer'}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">{h.socialEyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.04em] text-forest sm:text-5xl">
            {h.socialTitle}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-charcoal/65">
            {h.socialBody}
          </p>
          <a
            href="https://instagram.com/wanderingluna"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-forest/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:bg-forest hover:text-ivory"
          >
            <Instagram size={16} />
            {h.socialHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
