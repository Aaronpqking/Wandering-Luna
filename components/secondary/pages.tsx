import { AcuityEmbed } from '@/components/acuity-embed';
import { schedulerUrl, bookingCopy } from '@/lib/acuity';
import Link from 'next/link';
import { AcuityScheduler } from '@/components/acuity-scheduler';
import { secondaryContent, visibleVenueDetails } from '@/lib/secondary-content';
import { localizedPath, type Locale, type LocationSlug } from '@/lib/routes';
import { social } from '@/lib/site-config';
import { CTASection, EditorialSection, ImageTextSection, LocationLinks, PageHero, ScheduleLink } from './editorial';

export function SchedulePage({ locale }: { locale: Locale }) {
  const { schedule: page, shared } = secondaryContent[locale];
  return <main>
    <PageHero page={page} />
    <ImageTextSection locale={locale} copy={page.introduction} photo="practice-yoga">
      <a href="#booking" className="inline-flex min-h-11 items-center text-sm font-semibold text-forest underline underline-offset-4">{schedulerUrl ? bookingCopy[locale].status : shared.bookingStatus}</a>
    </ImageTextSection>
    <section id="booking" className="mx-auto max-w-7xl scroll-mt-8 px-5 sm:px-8 lg:px-12">
      <>{schedulerUrl ? <AcuityEmbed url={schedulerUrl} locale={locale} /> : <AcuityScheduler title={page.booking.title} placeholder={page.booking.body} ctaLabel={shared.instagram} ctaHref={social.instagram.url} />}</>
    </section>
    <EditorialSection title={shared.locationShortcuts}><LocationLinks locale={locale} compact /></EditorialSection>
    <div className="bg-soft-white"><EditorialSection title={schedulerUrl ? bookingCopy[locale].stepsTitle : page.stepsTitle}>
      <p className="max-w-2xl leading-7 text-charcoal/75">{page.stepsIntro}</p>
      <ol className="mt-10 grid gap-10 md:grid-cols-3">{page.steps.map((step, index) => <li key={step.title} className="border-t border-forest/20 pt-6">
        <span className="font-display text-2xl text-clay" aria-hidden="true">0{index + 1}</span>
        <h3 className="mt-4 font-display text-3xl text-forest">{step.title}</h3><p className="mt-4 leading-7 text-charcoal/75">{schedulerUrl && index === 1 ? bookingCopy[locale].reserve : step.body}</p>
      </li>)}</ol>
    </EditorialSection></div>
  </main>;
}

export function LocationsPage({ locale }: { locale: Locale }) {
  const { locations: page } = secondaryContent[locale];
  return <main>
    <PageHero page={page} />
    <ImageTextSection locale={locale} copy={{ title: page.sectionTitle, body: page.sectionIntro }} photo="social-group"><ScheduleLink locale={locale} /></ImageTextSection>
    <EditorialSection title={secondaryContent[locale].shared.allLocations}><LocationLinks locale={locale} /></EditorialSection>
    <CTASection locale={locale} />
  </main>;
}

export function LocationPage({ locale, slug }: { locale: Locale; slug: LocationSlug }) {
  const { places, shared } = secondaryContent[locale];
  const page = places[slug];
  const details = visibleVenueDetails(page.details);
  return <main>
    <PageHero page={page} />
    <ImageTextSection locale={locale} copy={page.practice} photo="practice-gatherings"><ScheduleLink locale={locale} /></ImageTextSection>
    <div className="bg-soft-white"><EditorialSection title={shared.expectations.title}>
      <p className="max-w-3xl text-lg leading-8 text-charcoal/75">{shared.expectations.body}</p>
      {details.length > 0 && <dl className="mt-10 grid gap-8 sm:grid-cols-2">{details.map(([key, value]) => <div key={key}><dt className="font-semibold text-forest">{shared.detailLabels[key]}</dt><dd className="mt-2 leading-7 text-charcoal/75">{value}</dd></div>)}</dl>}
    </EditorialSection></div>
    <EditorialSection title={shared.relatedLocations}>
      <LocationLinks locale={locale} exclude={slug} compact />
      <Link href={localizedPath(locale, 'locations')} className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-forest underline underline-offset-4">{shared.allLocations}</Link>
    </EditorialSection>
    <CTASection locale={locale} />
  </main>;
}
