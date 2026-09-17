// components/PageSchemas.tsx
import React from 'react';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;

export function ProductSchema() {
  const commonOfferDefaults = {
    validFrom: '2026-01-01',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'AU',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0.00',
        currency: 'AUD',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'AU',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/#product`,
    name: 'IPTV Australia Premium Subscription',
    sku: 'IPTV-AU-PREMIUM',
    category: 'Streaming Service',
    description: `IPTV Australia from ${CONSTANTS.BRAND_NAME}. Stream 30,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD. Setup is guided on WhatsApp, a free trial is available, and pricing is in AUD with no lock in contract.`,
    image: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#primaryimage`,
      url: `${SITE_URL}/img/structer.webp`,
      contentUrl: `${SITE_URL}/img/structer.webp`,
      width: { '@type': 'QuantitativeValue', value: 1200 },
      height: { '@type': 'QuantitativeValue', value: 630 },
      caption: 'IPTV Australia - 4K Ultra HD Streaming Service',
      representativeOfPage: true,
    },
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
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
        price: '55.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '1 Screen - 6 Months',
        price: '85.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '1 Screen - 12 Months',
        price: '119.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Screens - 3 Months',
        price: '95.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Screens - 6 Months',
        price: '139.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Screens - 12 Months',
        price: '199.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Screens - 3 Months',
        price: '129.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Screens - 6 Months',
        price: '179.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Screens - 12 Months',
        price: '269.00',
        priceCurrency: 'AUD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is IPTV and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `IPTV stands for Internet Protocol Television. Instead of a cable or satellite box, your channels and movies stream over your internet connection. With ${CONSTANTS.BRAND_NAME}, you can watch 30,000+ live channels and over 120,000 movies and TV shows in 4K on your Smart TV, Firestick, phone, or tablet.`,
        },
      },
      {
        '@type': 'Question',
        name: `What makes ${CONSTANTS.BRAND_NAME} the best IPTV provider in Australia?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${CONSTANTS.BRAND_NAME} is built for Aussie viewers with 30,000+ live channels covering the AFL, NRL, Cricket Australia, Super Rugby, and Formula 1, plus over 120,000 movies and TV shows on demand. Anti freeze servers run on dedicated capacity in Sydney and Melbourne for smooth playback during peak events.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Which devices are compatible with your Australia IPTV service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our service works on Samsung and LG Smart TVs, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac, plus MAG and Formuler set top boxes. If you are not sure about your device, message us on WhatsApp and we will check before you subscribe.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the setup and activation process work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Once you choose your plan and screen count, we chat on WhatsApp. Our team walks you through installing and configuring a player like IBO Player, then sends you the test content. You try everything on the free trial, and only upgrade to a paid subscription once you are happy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I request a free trial before I pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Message us on WhatsApp and we will set you up with a free 24 hour trial so you can test the 4K picture quality, check the channel lineup for the footy or cricket, and make sure everything runs smooth on your device and internet connection. No lock in and no pressure.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I install the IPTV player on my Smart TV or Firestick?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Smart TVs and Firestick, download a supported player like IBO Player, TiviMate, Smart IPTV, or IPTV Smarters from your app store, then enter the login details we send you on WhatsApp. If any step is unclear, our support team guides you through it directly in the chat.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept and what currency is used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All prices are in Australian dollars (AUD $) with no lock in contract. We accept Credit Card, PayPal, PayID, and Crypto through a secure encrypted checkout. You can pick a 3, 6, or 12 month plan and choose 1, 2, or 3 screens for your household.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is technical support available during my subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, right through your whole subscription. Message our team on WhatsApp any time for help with installation, setup, or anything else. That includes guidance on getting the most out of your player app and quick fixes if you ever notice buffering on your end.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}