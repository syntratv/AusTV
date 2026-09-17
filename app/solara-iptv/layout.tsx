// app/solara-iptv/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/solara-iptv`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Solara IPTV Australia | 30,000+ Channels in 4K UHD`
);

const PAGE_DESCRIPTION = clampDescription(
  `Get Solara IPTV in Australia. Stream 30,000+ channels and 120,000+ movies in 4K UHD. Free trial first, WhatsApp setup, AUD pricing with no lock in.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'solara iptv',
    'solara iptv australia',
    'solara iptv subscription',
    'solara iptv service',
    'solara iptv provider',
    'best solara iptv',
    'solara iptv review',
    'solara iptv price',
    'iptv australia',
    'best iptv australia',
    'australia iptv subscription',
    'australia iptv service',
    '4k streaming australia',
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
        alt: `Solara IPTV Australia - 30,000+ live channels in 4K Ultra HD`,
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

const SolaraPageSchema = () => {
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
        description: `${BRAND} is a trusted Australia IPTV provider with 30,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD.`,
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
          { '@type': 'ListItem', position: 2, name: 'Solara IPTV', item: PAGE_URL },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'Solara IPTV Australia Subscription',
        sku: 'SOLARA-IPTV-AU',
        category: 'Streaming Service',
        description: `Solara IPTV in Australia from ${BRAND}. Stream 30,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD. Guided WhatsApp setup, free trial available, AUD pricing with no lock in contract.`,
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
            description: 'Solara IPTV 3 month plan on 1 device with 30,000+ live channels.',
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
            description: 'Solara IPTV 6 month plan on 1 device with 30,000+ live channels.',
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
            description: 'Solara IPTV 12 month plan on 1 device with 30,000+ live channels.',
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
            description: 'Solara IPTV 6 month plan on 2 devices with 30,000+ live channels.',
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
            description: 'Solara IPTV 12 month plan on 2 devices with 30,000+ live channels.',
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
            description: 'Solara IPTV 12 month plan on 3 devices with 30,000+ live channels.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Solara IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Solara IPTV is a premium streaming service that delivers live television channels, movies, and TV shows over your internet connection. In Australia, our Solara IPTV service offers 30,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD, with guided WhatsApp setup and AUD pricing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does Solara IPTV cost in Australia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Solara IPTV plans start at AUD $55 for 3 months on 1 screen. The 12 month VIP plan costs AUD $119 and saves up to 50%. Multi screen plans are available for 2 or 3 devices at home.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a free trial for Solara IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Message us on WhatsApp and we will set you up with a free 24 hour Solara IPTV trial. Test the 4K picture, check the channel lineup, and make sure everything runs smooth on your device before you upgrade to a paid plan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which devices work with Solara IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Solara IPTV works on Amazon Firestick, Samsung and LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac, and MAG or Formuler set top boxes. Our team helps you install and configure a player like IBO Player Pro on WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a VPN to use Solara IPTV in Australia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No VPN is required. Our Solara IPTV servers are optimised for Australian ISPs to deliver smooth, buffer free streaming on your home connection.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast is Solara IPTV setup?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most customers are streaming within 10 minutes. You choose your plan, message us on WhatsApp, and our team walks you through the install step by step until everything is working.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="solara-iptv-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function SolaraIPTVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <SolaraPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}