import type { Locale, SiteContent } from '@/lib/content';
import { HomeHero } from '@/components/home/hero';
import { HomePractice } from '@/components/home/practice';
import { HomeSchedule } from '@/components/home/schedule';
import { HomeLocations } from '@/components/home/locations';
import { HomeAbout } from '@/components/home/about';
import { HomeGatherings } from '@/components/home/gatherings';
import { HomeRetreats } from '@/components/home/retreats';
import { HomeSocial } from '@/components/home/social';
import { HomeFinalCta } from '@/components/home/final-cta';
import { MobileBookBar } from '@/components/mobile-book-bar';

export function HomePage({ locale, copy }: { locale: Locale; copy: SiteContent }) {
  return (
    <>
      <HomeHero locale={locale} copy={copy} />
      <HomePractice locale={locale} copy={copy} />
      <HomeSchedule locale={locale} copy={copy} />
      <HomeLocations locale={locale} copy={copy} />
      <HomeAbout locale={locale} copy={copy} />
      <HomeGatherings locale={locale} copy={copy} />
      <HomeRetreats locale={locale} copy={copy} />
      <HomeSocial locale={locale} copy={copy} />
      <HomeFinalCta locale={locale} copy={copy} />
      <MobileBookBar locale={locale} copy={copy} />
    </>
  );
}
