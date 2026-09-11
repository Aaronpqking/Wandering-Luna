import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale, LocationSlug } from '@/lib/routes';
import { localizedPath, locationSlugs } from '@/lib/routes';
import { secondaryContent, type EditorialCopy, type PageIntro } from '@/lib/secondary-content';
import { imageAlt } from '@/lib/image-alt';

const actionClass = 'inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-7 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-night';

export function PageHero({ page }: { page: PageIntro }) {
  return <header className="bg-night px-5 pb-16 pt-36 text-ivory sm:px-8 sm:pb-20 sm:pt-44 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{page.eyebrow}</p>
      <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.04] tracking-[-0.04em] sm:text-7xl">{page.title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/80">{page.intro}</p>
    </div>
  </header>;
}

export function EditorialSection({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return <section id={id} className="mx-auto max-w-7xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
    <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.03em] text-forest sm:text-5xl">{title}</h2>
    <div className="mt-7">{children}</div>
  </section>;
}

export function ImageTextSection({ locale, copy, photo, children, caption, imagePosition = "object-center", preload = false }: { locale: Locale; copy: EditorialCopy; photo: keyof typeof imageAlt; children?: ReactNode; caption?: string; imagePosition?: string; preload?: boolean }) {
  return <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2 md:gap-16 lg:px-12">
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <Image src={`/photos/${photo}.webp`} alt={imageAlt[photo][locale]} fill quality={85} preload={preload} sizes="(min-width: 1280px) 560px, (min-width: 768px) 45vw, 100vw" className={`object-cover ${imagePosition}`} />
      </div>
      <figcaption className="mt-4 max-w-lg text-xs leading-5 text-charcoal/65">{caption ?? secondaryContent[locale].shared.photoCaption}</figcaption>
    </figure>
    <div>
      <h2 className="font-display text-4xl leading-tight tracking-[-0.03em] text-forest sm:text-5xl">{copy.title}</h2>
      <p className="mt-6 text-base leading-8 text-charcoal/75">{copy.body}</p>
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>;
}

export function ScheduleLink({ locale }: { locale: Locale }) {
  return <Link href={localizedPath(locale, 'schedule')} className={actionClass}>{secondaryContent[locale].shared.viewSchedule}</Link>;
}

export function CTASection({ locale, copy: customCopy, action }: { locale: Locale; copy?: EditorialCopy; action?: { label: string; href: string } }) {
  const copy = customCopy ?? secondaryContent[locale].shared.cta;
  return <section className="bg-soft-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
    <div className="mx-auto max-w-7xl items-center justify-between gap-10 md:flex">
      <div><h2 className="max-w-2xl font-display text-4xl leading-tight text-forest sm:text-5xl">{copy.title}</h2><p className="mt-5 max-w-xl leading-7 text-charcoal/75">{copy.body}</p></div>
      <div className="mt-8 shrink-0 md:mt-0">{action ? <Link href={action.href} className={actionClass}>{action.label}</Link> : <ScheduleLink locale={locale} />}</div>
    </div>
  </section>;
}

export function LocationLinks({ locale, exclude, compact = false }: { locale: Locale; exclude?: LocationSlug; compact?: boolean }) {
  const copy = secondaryContent[locale];
  return <ul className={compact ? 'grid gap-x-10 sm:grid-cols-2' : ''}>
    {locationSlugs.filter(slug => slug !== exclude).map(slug => <li key={slug} className="border-b border-forest/20">
      <Link href={localizedPath(locale, `locations/${slug}`)} className="group flex min-h-16 items-center justify-between gap-6 py-7">
        <div><h3 className="font-display text-3xl text-forest sm:text-4xl">{copy.places[slug].name}</h3>{!compact && <p className="mt-3 max-w-2xl text-base leading-7 text-charcoal/75">{copy.places[slug].summary}</p>}</div>
        <span className="shrink-0 text-xl text-forest transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
      </Link>
    </li>)}
  </ul>;
}
