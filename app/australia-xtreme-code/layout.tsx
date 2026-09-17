// app/australia-xtreme-code/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/australia-xtreme-code`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Australia Xtreme Code | Xtream Codes IPTV Login 2026`
);

const PAGE_DESCRIPTION = clampDescription(
  `Get Australia Xtreme Code login details on WhatsApp. Xtream Codes API for 30,000+ channels and 120,000+ movies in 4K. Free trial, AUD pricing, no lock in.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'australia xtreme code',
    'xtreme code australia',
    'xtream codes australia',
    'xtream code iptv australia',
    'australia iptv xtream codes',
    'xtream codes api australia',
    'iptv xtream code login',
    'australia xtream player',
    'iptv australia',
    'best iptv australia',
    'australia iptv subscription',
    'australia iptv service',
    'iptv setup australia',
    '4k streaming australia',
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
        alt: `Australia Xtreme Code - Xtream Codes IPTV login for Australian viewers`,
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

const AustraliaXtremeCodeSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

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
        description: `${BRAND} is a trusted Australia IPTV provider with 30,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD. Australia Xtreme Code login details are delivered on WhatsApp with guided setup.`,
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
        about: { '@id': `${PAGE_URL}/#product` },
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
            name: 'Australia Xtreme Code',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'Australia Xtreme Code IPTV Subscription',
        sku: 'AU-XTREME-CODE',
        category: 'Streaming Service',
        description: `Australia Xtreme Code IPTV from ${BRAND}. Get your Xtream Codes API login details on WhatsApp with 30,000+ live channels and 120,000+ movies in 4K Ultra HD. Free trial available, AUD pricing with no lock in.`,
        image: `${SITE_URL}/img/structer.webp`,
        brand: { '@type': 'Brand', name: BRAND },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1255',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Screen - 3 Months',
            priceCurrency: 'AUD',
            price: '55.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Australia Xtreme Code 3 month plan on 1 device with 30,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 6 Months',
            priceCurrency: 'AUD',
            price: '85.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Australia Xtreme Code 6 month plan on 1 device with 30,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 12 Months',
            priceCurrency: 'AUD',
            price: '119.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Australia Xtreme Code 12 month plan on 1 device with 30,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 6 Months',
            priceCurrency: 'AUD',
            price: '139.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Australia Xtreme Code 6 month plan on 2 devices with 30,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 12 Months',
            priceCurrency: 'AUD',
            price: '199.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Australia Xtreme Code 12 month plan on 2 devices with 30,000+ live channels.',
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 12 Months',
            priceCurrency: 'AUD',
            price: '269.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/pricing`,
            description: 'Australia Xtreme Code 12 month plan on 3 devices with 30,000+ live channels.',
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: 'How to set up Australia Xtreme Code on your device',
        description: 'Step by step guide to enter your Australia Xtreme Code login details and start streaming on any device.',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'AUD',
          value: '55.00',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Pick your plan',
            text: 'Choose how many screens you need at home and pick a 3, 6, or 12 month plan in Australian dollars.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Get your Australia Xtreme Code on WhatsApp',
            text: 'Message us on WhatsApp and we send your Xtream Codes API details: server URL, username, and password.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Install a compatible player app',
            text: 'Install IBO Player Pro, TiviMate, IPTV Smarters, or XCIPTV on your Firestick, Smart TV, or phone.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Enter your Xtreme Code login',
            text: 'Open the player, choose Xtream Codes API, and paste your server URL, username, and password. Your channel list loads automatically.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Australia Xtreme Code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Australia Xtreme Code refers to the Xtream Codes API login details you use to connect an IPTV player to our Australian streaming service. Your username, password, and server URL are sent on WhatsApp after you subscribe. Once entered into a compatible player like IBO Player Pro, TiviMate, or IPTV Smarters, the full 30,000+ channel lineup loads automatically.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I get my Australia Xtreme Code login details?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pick your plan, message us on WhatsApp, and our team sends your Xtream Codes API details in the chat. You also get step by step help installing the player app and loading your channel list.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which IPTV players support Xtreme Code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most modern IPTV players support the Xtream Codes API format. The most popular ones for Australian viewers are IBO Player Pro, TiviMate, IPTV Smarters Pro, and XCIPTV. Our team helps you choose the right one for your device.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need technical skills to set up Australia Xtreme Code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Setup takes about 10 minutes with our help. You install the player app, copy the details we send on WhatsApp, paste them into the login fields, and your channel list loads automatically.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Xtreme Code and M3U?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both are ways to connect an IPTV player to the same streaming service. Xtream Codes is a login method that uses a server URL, username, and password. M3U is a single playlist file link. Xtreme Code tends to load faster and supports more advanced features like catch up and EPG.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a free trial for Australia Xtreme Code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Message us on WhatsApp and we will send you a free 24 hour trial Xtreme Code. Test the 4K picture, check the sport lineup, and make sure everything runs smooth on your internet before you commit to a paid plan.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="australia-xtreme-code-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function AustraliaXtremeCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <AustraliaXtremeCodeSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}