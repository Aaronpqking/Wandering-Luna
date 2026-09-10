import { imageAlt } from '@/lib/image-alt';
import Image from 'next/image';
import { social } from '@/lib/site-config';
import type { Locale, SiteContent } from '@/lib/content';
import { Instagram } from 'lucide-react';

export function HomeSocial({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-soft-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src="/photos/social-group.webp"
            alt={imageAlt['social-group'][locale]}
            fill
            quality={85}
            sizes="(min-width: 1376px) 688px, (min-width: 1024px) calc((100vw - 160px) * 1.3 / 2.3), (min-width: 768px) calc((100vw - 128px) * 1.3 / 2.3), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            className="object-cover object-[50%_75%]"
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
            href={social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-forest/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:bg-forest hover:text-ivory"
          >
            <Instagram size={16} />
            {social.instagram.handle}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-xl">
        <iframe
          src={`${social.instagram.featuredPostUrl}embed/`}
          title={h.socialPostTitle}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          className="h-[640px] w-full rounded-2xl border border-forest/10 bg-white"
        />
        <a
          href={social.instagram.featuredPostUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center text-sm text-forest underline underline-offset-4"
        >
          {h.socialPostLink}
        </a>
      </div>
    </section>
  );
}
