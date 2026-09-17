'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CONSTANTS } from '@/lib/seo';
import AustraliaFlag from '../components/AustraliaFlag';
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Medal,
  Trophy,
  MessageCircle,
  Tv,
  Film,
  Globe,
  Smartphone,
  KeyRound,
  ChevronDown,
  CreditCard,
  Clock,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const WHATSAPP_BASE = CONSTANTS.CONTACT.whatsappUrl;

// ---------------------------------------------------------------------------
// FAQ ACCORDION ITEM
// ---------------------------------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#f2ebeb] border-4 ${
        isOpen ? 'border-[#00843D]' : 'border-[#00843D]/20'
      } rounded-2xl p-6 hover:border-[#00843D]/60 transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#00843D]' : 'text-[#0a0a0c] group-hover:text-[#00843D]'
          } flex items-center gap-3`}
        >
          <span
            className={`${
              isOpen ? 'text-[#00843D]' : 'text-[#0a0a0c]/30'
            } font-black text-2xl`}
          >
            Q.
          </span>
          {q}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#00843D]'
              : 'text-[#0a0a0c]/30 group-hover:text-[#00843D]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#0a0a0c]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#00843D] ml-2 py-2">
          {a}
        </p>
      </div>
    </button>
  );
}

export default function FreeTrialPage() {
  const openWhatsApp = (message: string) => {
    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">

      {/* HERO — Home page style, focused on free trial */}
      <section className="relative px-6 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#08080A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="Free IPTV trial Australia with 30,000+ channels in 4K ultra HD quality"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.22]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080A]/20 via-[#08080A]/10 to-[#08080A]/20" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#00843D]/20 border border-[#00843D]/40 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FAFAFA] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              Free 24 Hour Trial Available
              <AustraliaFlag className="w-7 h-7 rounded-[2px] shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-none break-words">
            FREE IPTV TRIAL <br />
            <span className="text-[#FFCD00]">IN AUSTRALIA</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FAFAFA]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Test everything before you pay a cent. Get a free 24 hour IPTV trial with 30,000+ live channels, 120,000+ movies and TV shows, and the full sport lineup on any device. Our team sets you up on WhatsApp, helps you install a player, and stays on hand until you are watching on your own telly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <button
              onClick={() =>
                openWhatsApp(
                  `G'day! I'd like to claim the free 24 hour IPTV trial.`
                )
              }
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#00843D] text-[#FAFAFA] font-black text-sm hover:bg-[#006A31] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#00843D]/30 border border-[#FFCD00] cursor-pointer"
            >
              Claim Free Trial Now
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#1A1A1E]/80 text-[#f2ebeb] border border-[#FAFAFA]/20 font-black text-sm hover:bg-[#FAFAFA]/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFCD00] shrink-0" /> View Paid Plans
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FAFAFA] font-bold uppercase tracking-widest bg-[#FAFAFA]/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#FAFAFA]/10 shadow-2xl">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFCD00]" /> No Card Required
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFCD00]" /> Instant On WhatsApp
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFCD00]" /> Full Channel Access
            </span>
          </div>
        </FadeIn>
      </section>

      {/* WHAT YOU GET IN THE TRIAL */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00843D_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/10 border border-[#00843D]/25 px-4 py-2 rounded-full mb-6">
              <PlayCircle className="w-4 h-4 text-[#00843D]" />
              <span className="text-[#00843D] font-black text-xs uppercase tracking-widest">
                What You Get In The Trial
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              FULL ACCESS, <span className="text-[#00843D]">NO LIMITS</span>
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              The free trial gives you the complete service. Nothing is hidden or locked. Here is what you can test in the 24 hour window.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '30,000+ Channels',
                desc: 'Nine, Seven, ABC, SBS, Network 10, Fox8, plus every international network the full subscription includes.',
              },
              {
                icon: Film,
                title: '120,000+ Movies',
                desc: 'The complete on demand library. Cinema releases, complete boxsets, and international titles.',
              },
              {
                icon: Trophy,
                title: 'Live Sport',
                desc: 'Fox Footy, Optus Sport, ESPN, Main Event PPV, and every AFL, NRL, Cricket Australia, and Formula 1 match.',
              },
              {
                icon: Globe,
                title: 'International TV',
                desc: 'US, UK, Canada, Europe, India, Pakistan, China, and the Middle East, all organised by country.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-white text-[#0A0A0C] rounded-3xl p-6 md:p-7 border-2 border-[#00843D]/20 hover:border-[#00843D] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,132,61,0.2)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00843D] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFCD00]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#0A0A0C]/75 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* HOW TO CLAIM — 3 STEPS */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00843D]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00843D]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/20 border border-[#00843D]/40 px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                Claim In 3 Easy Steps
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              HOW TO START YOUR <span className="text-[#FFCD00]">FREE TRIAL</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              No forms to fill in. No card details to enter. Just message us on WhatsApp and our team handles the rest.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                icon: MessageCircle,
                title: 'Message On WhatsApp',
                desc: 'Send us a quick message saying you want the free 24 hour trial. That is the only thing you need to do to start.',
                bullets: [
                  'No card details asked',
                  'No signup form',
                  'Reply within minutes',
                ],
              },
              {
                number: '02',
                icon: Smartphone,
                title: 'Install A Player',
                desc: 'We send a short guide for your device. Install IBO Player Pro, TiviMate, or IPTV Smarters, then paste the trial details we send.',
                bullets: [
                  'Works on Firestick, Smart TV, phone',
                  'We help pick the right app',
                  'Install takes about 5 minutes',
                ],
              },
              {
                number: '03',
                icon: KeyRound,
                title: 'Log In And Test',
                desc: 'Enter the trial code on your player and the whole channel list loads automatically. Check the channels, movies, sport, and 4K picture.',
                bullets: [
                  'Full access for 24 hours',
                  'Test on your own internet',
                  'Upgrade only if you love it',
                ],
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="group relative bg-[#f2ebeb] text-[#0A0A0C] rounded-[2rem] p-6 md:p-8 border-4 border-[#00843D] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,132,61,0.25)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#00843D] flex items-center justify-center shadow-lg border border-[#FFCD00]">
                      <Icon className="w-8 h-8 text-[#FFCD00]" />
                    </div>
                    <span className="text-5xl font-black text-[#00843D]/20 tracking-tighter">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#0A0A0C]/75 text-sm font-medium leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <ul className="space-y-2.5">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2.5 text-xs font-bold text-[#0A0A0C]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          <FadeIn className="text-center mt-14">
            <button
              onClick={() =>
                openWhatsApp(
                  `G'day! I'd like to claim the free 24 hour IPTV trial.`
                )
              }
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#00843D] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFCD00] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Start My Free Trial
            </button>
          </FadeIn>
        </div>
      </section>

      {/* WHY TEST FIRST */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00843D_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/10 border border-[#00843D]/25 px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-[#00843D]" />
              <span className="text-[#00843D] font-black text-xs uppercase tracking-widest">
                Why Test First
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              TRY BEFORE YOU <span className="text-[#00843D]">COMMIT</span>
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              Not every IPTV service works the same on every internet connection and every device. The trial lets you check for yourself, on your own setup, before you spend a cent.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Check Your Speed',
                desc: 'See how the streams perform on your actual internet connection, not on a demo video.',
              },
              {
                icon: Tv,
                title: 'Test Your Device',
                desc: 'Confirm the service works on your Firestick, Smart TV, or phone with the exact setup you use at home.',
              },
              {
                icon: Trophy,
                title: 'Catch Live Sport',
                desc: 'If there is a match on during your 24 hour window, watch it live and see how the stream holds up during peak traffic.',
              },
              {
                icon: CreditCard,
                title: 'No Payment Upfront',
                desc: 'Zero cost, zero card details. Upgrade to a paid plan only when you are completely happy.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-white text-[#0A0A0C] rounded-3xl p-6 md:p-7 border-2 border-[#00843D]/20 hover:border-[#00843D] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,132,61,0.2)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00843D] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFCD00]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#0A0A0C]/75 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00843D]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/20 border border-[#00843D]/40 px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                Free Trial FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
              QUESTIONS ABOUT THE <span className="text-[#FFCD00]">FREE TRIAL</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know before you claim your 24 hour test.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Is the free IPTV trial really free in Australia?',
                a: 'Yes. The trial is 100% free with no card required and no hidden charges. We want you to test the full service on your own device and internet before you decide if you want to subscribe.',
              },
              {
                q: 'How long does the free IPTV trial last?',
                a: 'The trial runs for 24 hours. That is enough time to check the channel lineup, test the sport channels during a live match, flick through the movie library, and make sure everything runs smooth on your setup.',
              },
              {
                q: 'What do I get in the free trial?',
                a: 'You get access to the full channel lineup during the trial, including all 30,000+ live channels, 120,000+ movies and TV shows, live sport from Fox Footy, Optus Sport, ESPN, and Main Event, plus international networks from the US, UK, Canada, Europe, and Asia.',
              },
              {
                q: 'Do I need a credit card for the trial?',
                a: 'No. The trial is completely free. We do not ask for card details up front. You only pay if you decide to upgrade to a paid subscription after the trial ends.',
              },
              {
                q: 'Can I test the trial on my Firestick or Smart TV?',
                a: 'Yes. You can test the trial on any device you already own, including Amazon Firestick, Samsung and LG Smart TVs, Android TV, Apple TV, iPhone, iPad, Windows PC, Mac, and MAG set top boxes.',
              },
              {
                q: 'How fast will I get my trial details?',
                a: 'Most customers receive their trial details within a few minutes of messaging us on WhatsApp. Our team stays with you in the chat while you install the player and log in, until everything is running.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f2ebeb] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#00843D_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#00843D]/20 bg-[#f2ebeb] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00843D]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFCD00]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#00843D] via-[#FFCD00] to-[#00843D]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00843D]/30 bg-[#00843D]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#00843D]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#00843D] flex items-center gap-1.5">
                  Free IPTV Trial Australia 🇦🇺
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#1A1A1E] leading-[1.05] mb-6">
                READY TO TEST IT <br />
                <span className="text-[#00843D]">FOR FREE?</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#1A1A1E]/80">
                Message us on WhatsApp and we will set you up with the free 24 hour trial in minutes. Test the full service on your own telly, and upgrade only when you are happy. No lock in, no card details, no pressure.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <button
                  onClick={() =>
                    openWhatsApp(
                      `G'day! I'd like to claim the free 24 hour IPTV trial.`
                    )
                  }
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#00843D] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#006A31] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#00843D]/25 border border-[#FFCD00] cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" /> Claim Free Trial
                </button>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00843D]/30 bg-[#FAFAFA] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1A1A1E] hover:bg-[#00843D]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  View Paid Plans
                  <ArrowRight className="h-4 w-4 text-[#00843D] shrink-0" />
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#00843D] uppercase tracking-wider">
                No Card Required • Instant Setup • WhatsApp Support
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}