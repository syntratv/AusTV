// app/free-trial/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/free-trial`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Free IPTV Trial Australia | 24 Hour Test on WhatsApp`
);

const PAGE_DESCRIPTION = clampDescription(
  `Claim your free 24 hour IPTV trial in Australia. Test 30,000+ channels and 120,000+ movies in 4K on any device. Setup on WhatsApp, no card needed.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'free iptv trial australia',
    'iptv free trial',
    'free trial iptv australia',
    'iptv free test australia',
    'free iptv test',
    'australia iptv trial',
    '24 hour iptv trial',
    'iptv australia',
    'best iptv australia',
    'australia iptv subscription',
    'australia iptv service',
    'iptv setup australia',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-AU': PAGE_URL,
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Free IPTV Trial Australia - 24 hour test on WhatsApp`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'entertainment',
};

const FreeTrialSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} is a trusted Australia IPTV provider offering a free 24 hour trial so viewers can test the full channel lineup and 4K picture quality before subscribing.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['English'],
          areaServed: 'AU',
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Best IPTV Australia`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-AU',
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'en-AU',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Free Trial',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: 'How to claim your free IPTV trial in Australia',
        description: 'Step by step guide to claim a free 24 hour IPTV trial on WhatsApp and test on any device.',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'AUD',
          value: '0.00',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Message us on WhatsApp',
            text: 'Send us a quick message on WhatsApp saying you want the free 24 hour trial.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Tell us your device',
            text: 'Let us know if you are using a Firestick, Smart TV, Android box, Apple TV, or phone so we can send the right setup guide.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Install a player app',
            text: 'Install a compatible player like IBO Player Pro, TiviMate, or IPTV Smarters on your device.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Test your trial',
            text: 'Log in with the trial details we send and check the channels, movies, sport, and 4K picture quality on your own internet connection.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is the free IPTV trial really free in Australia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The trial is 100% free with no card required and no hidden charges. We want you to test the full service on your own device and internet before you decide if you want to subscribe.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does the free IPTV trial last?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The trial runs for 24 hours. That is enough time to check the channel lineup, test the sport channels during a live match, flick through the movie library, and make sure everything runs smooth on your setup.',
            },
          },
          {
            '@type': 'Question',
            name: 'What do I get in the free trial?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You get access to the full channel lineup during the trial, including all 30,000+ live channels, 120,000+ movies and TV shows, live sport from Fox Footy, Optus Sport, ESPN, and Main Event, plus international networks from the US, UK, Canada, Europe, and Asia.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a credit card for the trial?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The trial is completely free. We do not ask for card details up front. You only pay if you decide to upgrade to a paid subscription after the trial ends.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I test the trial on my Firestick or Smart TV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can test the trial on any device you already own, including Amazon Firestick, Samsung and LG Smart TVs, Android TV, Apple TV, iPhone, iPad, Windows PC, Mac, and MAG set top boxes.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast will I get my trial details?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most customers receive their trial details within a few minutes of messaging us on WhatsApp. Our team stays with you in the chat while you install the player and log in, until everything is running.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="free-trial-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <FreeTrialSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}