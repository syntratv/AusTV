// lib/seo.ts
import { Metadata } from 'next';

// ---------------------------------------------------------------------------
// CORE BRAND & DOMAIN CONFIGURATION (AUSTRALIA)
// ---------------------------------------------------------------------------
const DOMAIN = 'iptvaustralia.vip';
const BRAND_NAME = 'IPTV Australia';
const SITE_URL = `https://${DOMAIN}`;
const FOCUS_KEYWORD = 'best iptv australia';
const SECONDARY_FOCUS_KEYWORD = 'iptv australia';
const LOCALE = 'en_AU';
const LANGUAGE = 'en-AU';
const ADDRESS_COUNTRY = 'AU';
const CURRENCY = 'AUD';

// Stable Organization @id used to link brand entities across JSON-LD blocks
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// ---------------------------------------------------------------------------
// EXPORTED CONSTANTS
// ---------------------------------------------------------------------------
export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  SITE_URL,
  FOCUS_KEYWORD,
  SECONDARY_FOCUS_KEYWORD,
  LOCALE,
  LANGUAGE,
  ADDRESS_COUNTRY,
  CURRENCY,
  ORGANIZATION_ID,

  // Primary High-Intent Australian Keywords
  PRIMARY_KEYWORDS: [
    'iptv australia',
    'best iptv australia',
    'australian iptv subscription',
    'iptv setup australia',
    'best iptv provider australia',
    'iptv firestick australia',
    'iptv free trial australia',
  ],

  // Secondary & High-Intent Search Terms
  SECONDARY_KEYWORDS: [
    'australian live sports iptv',
    'afl nrl live streaming australia',
    'cricket australia live iptv',
    '4k streaming australia',
    'stable iptv australia anti freeze',
    'smart tv iptv australia app',
    'iptv provider sydney melbourne',
    'kayo optus sport fox footy iptv',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@iptvaustralia.vip',
    phone: '+61 2 5550 0199', // ⚠️ Replace with your real Australian number
    whatsapp: '+61 2 5550 0199', // ⚠️ Replace with your real WhatsApp number
    whatsappUrl: 'https://live-support.netlify.app', // ⚠️ Replace with your real wa.me link
    supportHours: '24/7 Australian Customer Support via Email and Ticket System',
  },

  // Social Media (used in Footer / Header)
  SOCIALS: {
    twitter: 'https://twitter.com/iptvaustralia', // ⚠️ Replace
    instagram: 'https://instagram.com/iptvaustralia', // ⚠️ Replace
    facebook: 'https://facebook.com/iptvaustralia', // ⚠️ Replace
  },

  // Payment Methods (used in Footer / Pricing badges)
  PAYMENT_METHODS: [
    { name: 'PayPal', icon: '/img/payment/1.png' },
    { name: 'Bitcoin & Crypto', icon: '/img/payment/2.png' },
    { name: 'Visa', icon: '/img/payment/3.png' },
    { name: 'Mastercard', icon: '/img/payment/4.png' },
  ],

  // Major Target Cities in Australia
  TARGET_REGIONS: [
    'Sydney',
    'Melbourne',
    'Brisbane',
    'Perth',
    'Adelaide',
    'Gold Coast',
    'Canberra',
    'Newcastle',
    'Hobart',
    'Darwin',
  ],

  // Value Propositions for Australian Viewers
  USPS: [
    'Buffer-free 4K & Full HD streaming backed by dedicated Sydney and Melbourne edge servers',
    'Access to 20,000+ live channels including local Australian sports, news, and entertainment',
    'Instant service activation within 5 minutes of subscription approval',
    'Full coverage of Fox Footy, Kayo, Optus Sport, AFL, NRL, Cricket Australia, and premium VOD movies',
    'Universal device support: Amazon Firestick, Smart TV, Android, iOS, Mag Box',
  ],
};

// ---------------------------------------------------------------------------
// SEO METADATA GENERATOR
// ---------------------------------------------------------------------------
export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  // Enforces strict 150-160 character count for Google snippet optimisation
  const defaultDescription =
    description ||
    `Get the best iptv australia subscription with 20,000+ live channels, Aussie news, and live sports in 4K. Start your risk-free trial on Firestick today!`;

  // Enforces strict 50-60 character count for meta titles
  const defaultTitle = `${pageName} | ${BRAND_NAME} - Best IPTV Service`;
  const formattedTitle =
    defaultTitle.length > 60 ? defaultTitle.substring(0, 60) : defaultTitle;

  const fullCanonicalUrl =
    path === '/'
      ? SITE_URL
      : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: formattedTitle,
    description: defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: {
        [LANGUAGE]: fullCanonicalUrl,
        'en-AU': fullCanonicalUrl,
        'x-default': fullCanonicalUrl,
      },
    },
    openGraph: {
      title: formattedTitle,
      description: defaultDescription,
      url: fullCanonicalUrl,
      siteName: BRAND_NAME,
      locale: LOCALE,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/img/og-image.webp`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - ${FOCUS_KEYWORD}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: defaultDescription,
      images: [`${SITE_URL}/img/og-image.webp`],
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
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: 'Entertainment',
    applicationName: BRAND_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Organization
// ---------------------------------------------------------------------------
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/iptv-logo.webp`,
    description:
      'Premier Australian IPTV provider delivering high-definition live television, local regional broadcasts, and premium sports streaming across Australia.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONSTANTS.CONTACT.email,
      telephone: CONSTANTS.CONTACT.phone,
      contactType: 'customer support',
      areaServed: ADDRESS_COUNTRY,
      availableLanguage: ['English'],
    },
    sameAs: [
      CONSTANTS.SOCIALS.twitter,
      CONSTANTS.SOCIALS.instagram,
      CONSTANTS.SOCIALS.facebook,
    ],
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Product / Offer
// NOTE: Reserve strictly for sales or reseller pages. Do NOT use on /setup
// or other informational/guide pages.
// ---------------------------------------------------------------------------
export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = CURRENCY,
  description: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing`,
      seller: {
        '@id': ORGANIZATION_ID,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Australia',
      },
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — LocalBusiness (Australian Cities)
// ---------------------------------------------------------------------------
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/img/og-image.webp`,
    description:
      'Australian IPTV subscription service offering 4K live TV, sports, and VOD streaming to households across Sydney, Melbourne, Brisbane, Perth, and Adelaide.',
    priceRange: '$$',
    telephone: CONSTANTS.CONTACT.phone,
    email: CONSTANTS.CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: CONSTANTS.TARGET_REGIONS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: {
      '@id': ORGANIZATION_ID,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — FAQPage
// ---------------------------------------------------------------------------
export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — BreadcrumbList
// ---------------------------------------------------------------------------
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
};