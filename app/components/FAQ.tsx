'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export const faqs = [
  {
    q: 'What is IPTV and how does it work?',
    a: `IPTV stands for Internet Protocol Television. Instead of a cable or satellite box, your channels and movies stream over your internet connection. With ${CONSTANTS.BRAND_NAME}, you can watch 30,000+ live channels and over 120,000 movies and TV shows in 4K on your Smart TV, Firestick, phone, or tablet. Setup takes minutes and our team helps you the whole way on WhatsApp.`,
  },
  {
    q: `What makes ${CONSTANTS.BRAND_NAME} the best IPTV provider in Australia?`,
    a: `${CONSTANTS.BRAND_NAME} is built for Aussie viewers. You get 30,000+ live channels covering the AFL, NRL, Cricket Australia, Super Rugby, and Formula 1, plus over 120,000 movies and TV shows on demand. We run anti freeze servers with dedicated capacity in Sydney and Melbourne, so your stream stays smooth even during grand final day or a packed pay per view night.`,
  },
  {
    q: 'Which devices are compatible with your Australia IPTV service?',
    a: 'Almost anything you already own. That includes Samsung and LG Smart TVs, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac, plus MAG and Formuler set top boxes. If you are not sure about your device, message us on WhatsApp and we will check it for you before you subscribe.',
  },
  {
    q: 'How does the setup and activation process work?',
    a: 'Once you choose your plan and the number of screens you want, we chat on WhatsApp. Our team walks you through installing and configuring a player like IBO Player, then sends you the test content to try. You test everything on the free trial first, and only upgrade to a paid subscription once you are happy. Activation is quick and you are never left figuring it out on your own.',
  },
  {
    q: 'Can I request a free trial before I pay?',
    a: 'Yes, and we recommend it. Message us on WhatsApp and we will set you up with a free 24 hour trial so you can test the 4K picture quality, check the channel lineup for the footy or cricket, and make sure everything runs smooth on your own device and internet connection. No lock in and no pressure.',
  },
  {
    q: 'How do I install the IPTV player on my Smart TV or Firestick?',
    a: 'For Smart TVs and Firestick, download a supported player like IBO Player, TiviMate, Smart IPTV, or IPTV Smarters from your app store. Then enter the login details we send you on WhatsApp. If any step is unclear, our support team will guide you through it directly in the chat, step by step until you are watching. We stay on hand throughout your entire subscription in case anything comes up.',
  },
  {
    q: 'What payment methods do you accept and what currency is used?',
    a: 'All prices are in Australian dollars (AUD $) and there is no lock in contract. We accept Credit Card, PayPal, PayID, and Crypto through a secure encrypted checkout. You can pick a 3, 6, or 12 month plan and choose 1, 2, or 3 screens depending on your household.',
  },
  {
    q: 'Do you offer support during my subscription?',
    a: 'Yes, right through your whole subscription. You can message our team on WhatsApp any time for help with installation, setup, or anything else that comes up. That includes guidance on getting the most out of your player app and quick fixes if you ever notice buffering on your end.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#09090B] relative overflow-hidden"
      aria-label={`Frequently Asked Questions about ${CONSTANTS.BRAND_NAME}`}
    >
      {/* Ambient Green & Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00843D]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FFCD00]/10 blur-[100px] rounded-full pointer-events-none" />

      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#00843D]/20 border border-[#00843D]/60 px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#00843D]/10">
          <Sparkles className="w-4 h-4 text-[#FFCD00]" />
          <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
            Australia IPTV Help Center
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none">
          FREQUENTLY ASKED <span className="text-[#FFCD00]">QUESTIONS</span>
        </h2>
        <p className="text-zinc-300 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our{' '}
          <strong className="text-white font-bold">{CONSTANTS.BRAND_NAME}</strong>{' '}
          Australia IPTV subscriptions, the WhatsApp setup process, free trial, and the channel lineup.
        </p>
      </FadeIn>

      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeInItem key={i}>
              <div
                className={`relative rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#141417] border-[#00843D] shadow-xl shadow-[#00843D]/15'
                    : 'bg-[#101013] hover:bg-[#16161a] border-white/10 hover:border-[#FFCD00]/40'
                }`}
              >
                {/* Accent Left Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${
                    isOpen ? 'bg-[#FFCD00]' : 'bg-transparent'
                  }`}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 transition-all duration-300 focus:outline-none rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="flex items-center gap-4 pr-2">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#00843D] text-[#FFCD00]'
                          : 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                        isOpen ? 'text-[#FFCD00]' : 'text-white'
                      }`}
                    >
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#FFCD00] text-[#09090B] rotate-180'
                        : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer Area */}
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6'
                      : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-300 font-normal leading-relaxed pl-16 sm:pl-20 pr-6 sm:pr-8 text-sm sm:text-base border-t border-white/5 pt-4 mt-1">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </section>
  );
}