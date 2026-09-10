export function AcuityScheduler({ placeholder, ctaLabel, ctaHref }: { placeholder: string; ctaLabel: string; ctaHref: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-forest/10 bg-soft-white">
      <div className="flex flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:px-12 sm:py-28">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-forest/15 bg-ivory">
          <span className="font-display text-2xl text-forest/40">W</span>
        </div>
        <p className="max-w-md text-sm leading-6 text-charcoal/50">{placeholder}</p>
        <a
          href={ctaHref}
          className="rounded-full bg-forest px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-transform hover:-translate-y-0.5"
        >
          {ctaLabel}
        </a>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
}
