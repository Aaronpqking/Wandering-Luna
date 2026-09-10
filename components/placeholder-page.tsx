import Link from 'next/link';
import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/routes';

export function PlaceholderPage({ locale, copy, page }: { locale: Locale; copy: SiteContent; page: { eyebrow: string; title: string; body: string } }) {
  return (
    <main className="min-h-[70vh] bg-ivory">
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(183,154,94,0.22),transparent_28%),linear-gradient(120deg,#112A45_0%,#2F4A34_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{page.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.055em] text-ivory sm:text-7xl">{page.title}</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-ivory/75 sm:text-lg">{page.body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={localizedPath(locale, 'schedule')} className="rounded-full bg-ivory px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-transform hover:-translate-y-0.5">{copy.home.heroCta}</Link>
            <Link href={localizedPath(locale, 'gatherings')} className="rounded-full border border-ivory/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory/10">{copy.home.heroCtaSecondary}</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-forest/10 bg-soft-white p-6 text-sm text-charcoal/60 sm:p-8">{copy.home.comingSoon}</div>
      </section>
    </main>
  );
}
