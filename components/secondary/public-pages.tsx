import Link from 'next/link';
import { localizedPath, type Locale } from '@/lib/routes';
import { secondaryContent, type EditorialCopy, type PublicPageKey } from '@/lib/secondary-content';
import { optionalContactLinks, social } from '@/lib/site-config';
import { CTASection, EditorialSection, ImageTextSection, PageHero, ScheduleLink } from './editorial';

function InstagramLink({ locale }: { locale: Locale }) {
  return <a href={social.instagram.url} className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-7 py-4 text-center text-sm font-semibold text-ivory transition-colors hover:bg-night">{secondaryContent[locale].publicShared.instagramLabel}</a>;
}

function PracticePrinciples({ items }: { items: readonly EditorialCopy[] }) {
  return <ul className="grid gap-10 md:grid-cols-3">{items.map(item => <li key={item.title} className="border-t border-forest/20 pt-6">
    <h3 className="font-display text-3xl leading-tight text-forest">{item.title}</h3><p className="mt-5 leading-8 text-charcoal/75">{item.body}</p>
  </li>)}</ul>;
}

export function GatheringsPage({ locale }: { locale: Locale }) {
  const { gatherings: page, publicShared } = secondaryContent[locale];
  return <main>
    <PageHero page={page} />
    <ImageTextSection locale={locale} copy={page.introduction} preload photo="practice-gatherings" caption={publicShared.photoCaption} />
    <div className="bg-soft-white"><EditorialSection title={page.meaningTitle}><PracticePrinciples items={page.meaning} /></EditorialSection></div>
    <ImageTextSection locale={locale} copy={page.community} photo="gatherings-night-circle" caption={publicShared.photoCaption} />
    <div className="bg-soft-white"><EditorialSection title={page.upcoming.title}>
      <p className="max-w-2xl text-lg leading-8 text-charcoal/75">{page.upcoming.body}</p>
      <div className="mt-8 flex flex-wrap gap-4"><InstagramLink locale={locale} /><ScheduleLink locale={locale} /></div>
    </EditorialSection></div>
  </main>;
}

export function RetreatsPage({ locale }: { locale: Locale }) {
  const { retreats: page, publicShared } = secondaryContent[locale];
  return <main>
    <PageHero page={page} />
    <ImageTextSection locale={locale} copy={page.introduction} preload photo="practice-retreats" caption={publicShared.retreatCaption} imagePosition="object-[50%_65%]" />
    <EditorialSection title={page.philosophy.title}>
      <p className="max-w-3xl text-lg leading-8 text-charcoal/75">{page.philosophy.body}</p>
      <div className="mt-12 max-w-3xl border-t border-forest/20 pt-8"><h3 className="font-display text-3xl text-forest">{page.details.title}</h3><p className="mt-5 leading-8 text-charcoal/75">{page.details.body}</p></div>
    </EditorialSection>
    <CTASection locale={locale} copy={page.upcoming} action={{ label: publicShared.contactLabel, href: localizedPath(locale, 'contact') }} />
  </main>;
}

export function AboutPage({ locale }: { locale: Locale }) {
  const { about: page, publicShared, shared } = secondaryContent[locale];
  return <main>
    <PageHero page={page} />
    <ImageTextSection locale={locale} copy={page.introduction} preload photo="about-nicole" caption={publicShared.portraitCaption} />
    <div className="bg-soft-white"><EditorialSection title={page.approachTitle}><PracticePrinciples items={page.approach} /></EditorialSection></div>
    <EditorialSection title={page.place.title}>
      <p className="max-w-3xl text-lg leading-8 text-charcoal/75">{page.place.body}</p>
      <Link href={localizedPath(locale, 'locations')} className="mt-6 inline-flex min-h-11 items-center font-semibold text-forest underline underline-offset-4">{shared.exploreLocations}</Link>
    </EditorialSection>
    <CTASection locale={locale} />
  </main>;
}

export function ContactPage({ locale }: { locale: Locale }) {
  const { contact: page, publicShared } = secondaryContent[locale];
  const channels = optionalContactLinks();
  return <main>
    <PageHero page={page} />
    <EditorialSection title={page.reachOut.title}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <p className="max-w-2xl text-lg leading-8 text-charcoal/75">{page.reachOut.body}</p>
        <div className="border-l-2 border-gold pl-6"><p className="mb-5 break-words font-display text-3xl text-forest">{social.instagram.handle}</p><InstagramLink locale={locale} />
          {channels.length > 0 && <ul className="mt-8 space-y-3">{channels.map(channel => <li key={channel.kind}><a href={channel.href} className="inline-flex min-h-11 max-w-full items-center break-all text-forest underline underline-offset-4">{publicShared.channelLabels[channel.kind]}: {channel.label}</a></li>)}</ul>}
        </div>
      </div>
    </EditorialSection>
    <div className="bg-soft-white"><EditorialSection title={page.topicsTitle}>
      <ul className="divide-y divide-forest/20">{page.topics.map(topic => <li key={topic.path} className="grid gap-4 py-8 first:pt-0 md:grid-cols-[1fr_2fr] md:gap-12">
        <h3 className="font-display text-3xl leading-tight text-forest">{topic.title}</h3>
        <div><p className="max-w-2xl leading-8 text-charcoal/75">{topic.body}</p><Link href={localizedPath(locale, topic.path)} className="mt-3 inline-flex min-h-11 items-center font-semibold text-forest underline underline-offset-4">{topic.label}</Link></div>
      </li>)}</ul>
    </EditorialSection></div>
  </main>;
}

const publicPages = { gatherings: GatheringsPage, retreats: RetreatsPage, about: AboutPage, contact: ContactPage };
export function PublicPage({ locale, page }: { locale: Locale; page: PublicPageKey }) {
  const Page = publicPages[page];
  return <Page locale={locale} />;
}
