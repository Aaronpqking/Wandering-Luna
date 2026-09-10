import type { Locale, SiteContent } from '@/lib/content';
import { localizedPath } from '@/lib/routes';
import { SectionHeader } from '@/components/section-header';
import { AcuityScheduler } from '@/components/acuity-scheduler';

export function HomeSchedule({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  const h = copy.home;
  return (
    <section className="bg-soft-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={h.scheduleEyebrow} title={h.scheduleTitle} />
        <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/65">{h.scheduleIntro}</p>
        <div className="mt-12">
          <AcuityScheduler
            placeholder={h.schedulePlaceholder}
            ctaLabel={h.scheduleCta}
            ctaHref={localizedPath(locale, 'schedule')}
          />
        </div>
        <p className="mt-6 text-sm text-charcoal/45">{h.athNote}</p>
      </div>
    </section>
  );
}
