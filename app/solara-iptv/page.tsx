'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#00843D] border-t-transparent" />
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const MovieSlider = dynamic(() => import('../components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#121214] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const GlobalServerMap = dynamic(() => import('../components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#121214] rounded-3xl animate-pulse max-w-7xl mx-auto" />,
});

// ---------------------------------------------------------------------------
// SOLARA FAQ ACCORDION ITEM
// ---------------------------------------------------------------------------
function SolaraFAQItem({ q, a }: { q: string; a: string }) {
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

export default function SolaraIPTVPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">

      {/* HERO */}
      <section className="relative px-15 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#08080A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="Solara IPTV Australia service streaming in 4K ultra HD quality"
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
              Trusted Solara IPTV Provider
              <AustraliaFlag className="w-7 h-7 rounded-[2px] shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-none break-words">
            SOLARA IPTV <br />
            <span className="text-[#FFCD00]">AUSTRALIA</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FAFAFA]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            G&apos;day and welcome. Get Solara IPTV in Australia with 30,000+ live channels and over 120,000 movies and TV shows in crisp 4K. Our Solara IPTV service includes guided setup on WhatsApp, a free 24 hour trial to test on your own telly first, and AUD pricing with no lock in contract.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#00843D] text-[#FAFAFA] font-black text-sm hover:bg-[#006A31] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#00843D]/30 border border-[#FFCD00]"
            >
              Get Solara IPTV Now
            </Link>
            <Link
              href="/free-trial"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#1A1A1E]/80 text-[#f2ebeb] border border-[#FAFAFA]/20 font-black text-sm hover:bg-[#FAFAFA]/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFCD00] shrink-0" /> Claim Free Trial
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FAFAFA] font-bold uppercase tracking-widest bg-[#FAFAFA]/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#FAFAFA]/10 shadow-2xl">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFCD00]" /> Ultra HD Stream Quality
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFCD00]" /> High Uptime Network
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFCD00]" /> Anti Freeze Server Technology
            </span>
          </div>
        </FadeIn>
      </section>

      {/* PARTNER SLIDER */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* SOFA / LIVING ROOM SECTION */}
      <section className="w-full bg-[#0a0a0c] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#00843D]/20 border border-[#00843D]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCD00]">
            Solara IPTV Home Cinema 🇦🇺
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            BRING SOLARA IPTV TO YOUR <span className="text-[#FFCD00]">LIVING ROOM</span>
          </h2>
        </div>

        <div className="w-full bg-black/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="Solara IPTV Australia service playing on a Smart TV in a living room"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-slate-300 font-medium">
            There is nothing quite like watching your favourite team or a new release on the big screen. The Solara IPTV servers keep the picture sharp and the sound in sync, so you can relax on the couch without worrying about buffering or drops in quality.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/pricing"
              className="bg-[#00843D] border border-[#FFCD00] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#006A31] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#00843D]/30"
            >
              Activate Solara IPTV Today
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS SOLARA IPTV — INFO CARDS + PARAGRAPHS */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00843D_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/10 border border-[#00843D]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#00843D]" />
              <span className="text-[#00843D] font-black text-xs uppercase tracking-widest">
                What Is Solara IPTV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              EVERYTHING YOU NEED TO KNOW ABOUT <span className="text-[#00843D]">SOLARA IPTV</span>
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              Solara IPTV is a streaming service that delivers live television channels, movies, and TV shows over your internet connection. Here is what you get with Solara IPTV in Australia.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Tv,
                title: '30,000+ Live Channels',
                desc: 'All Australian networks plus thousands of international channels from the US, UK, Canada, Europe, India, Pakistan, China, and the Middle East.',
              },
              {
                icon: Film,
                title: '120,000+ Movies & TV Shows',
                desc: 'Complete boxsets and the latest cinema releases. Fresh titles land every day in the Solara IPTV on demand library.',
              },
              {
                icon: Trophy,
                title: 'Live Sport & PPV',
                desc: 'AFL, NRL, Cricket Australia, Super Rugby, Formula 1, and every Main Event pay per view included at no extra cost.',
              },
              {
                icon: Globe,
                title: 'Guided WhatsApp Setup',
                desc: 'Our team walks you through the whole install on WhatsApp, step by step, until you are watching Solara IPTV on your own device.',
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


          <FadeIn className="text-center mt-14">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00843D] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFCD00]/40"
              >
                View Solara IPTV Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/support"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A0A0C] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#00843D]"
              >
                <MessageCircle className="w-5 h-5" />
                Ask On WhatsApp
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRICING SECTION */}
      <div className="min-h-[600px] bg-[#0a0a0c]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* MOVIE SLIDER SECTION */}
      <section id="channels" className="pt-24 bg-[#0a0a0c] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-white/5">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              SOLARA IPTV CHANNELS &amp; MOVIE LIBRARY
            </h2>
            <p className="text-slate-300 font-medium text-lg">
              Explore thousands of live television channels plus 120,000+ movies and TV shows in the Solara IPTV on demand library. Fresh titles land every day.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#121214] rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* GLOBAL SERVER MAP */}
      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* SOLARA CUSTOM FAQ SECTION */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00843D]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/20 border border-[#00843D]/40 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                Solara IPTV Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
              FREQUENTLY ASKED ABOUT <span className="text-[#FFCD00]">SOLARA IPTV</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The most common questions our team gets about Solara IPTV in Australia.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'What is Solara IPTV?',
                a: 'Solara IPTV is a premium streaming service that delivers live television channels, movies, and TV shows over your internet connection. In Australia, our Solara IPTV service offers 30,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD, with guided WhatsApp setup and AUD pricing.',
              },
              {
                q: 'How much does Solara IPTV cost in Australia?',
                a: 'Solara IPTV plans start at AUD $55 for 3 months on 1 screen. The 12 month VIP plan costs AUD $119 and saves up to 50%. Multi screen plans are available for 2 or 3 devices at home.',
              },
              {
                q: 'Is there a free trial for Solara IPTV?',
                a: 'Yes. Message us on WhatsApp and we will set you up with a free 24 hour Solara IPTV trial. Test the 4K picture, check the channel lineup, and make sure everything runs smooth on your device before you upgrade to a paid plan.',
              },
              {
                q: 'Which devices work with Solara IPTV?',
                a: 'Solara IPTV works on Amazon Firestick, Samsung and LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac, and MAG or Formuler set top boxes. Our team helps you install and configure a player like IBO Player Pro on WhatsApp.',
              },
              {
                q: 'Do I need a VPN to use Solara IPTV in Australia?',
                a: 'No VPN is required. Our Solara IPTV servers are optimised for Australian ISPs to deliver smooth, buffer free streaming on your home connection.',
              },
              {
                q: 'How fast is Solara IPTV setup?',
                a: 'Most customers are streaming within 10 minutes. You choose your plan, message us on WhatsApp, and our team walks you through the install step by step until everything is working.',
              },
              {
                q: 'Can I use Solara IPTV on multiple TVs at once?',
                a: 'Yes. Pick the 2 screen or 3 screen plan during checkout and multiple household members can watch different things at the same time without any interruption.',
              },
              {
                q: 'What channels does Solara IPTV include?',
                a: 'Solara IPTV includes all major Australian networks (Nine, Seven, ABC, SBS, Network 10, Fox8), live sport channels (Fox Footy, Optus Sport, ESPN, Main Event PPV), plus thousands of international channels from the US, UK, Canada, Europe, India, Pakistan, China, and the Middle East.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <SolaraFAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f2ebeb] w-full">

          {/* PARAGRAPHS */}
          <FadeIn className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border-4 border-[#00843D] shadow-2xl space-y-5">
              <h3 className="text-2xl md:text-3xl font-black text-[#0A0A0C] uppercase tracking-tight mb-4">
                WHY SOLARA IPTV IS THE SMART CHOICE IN AUSTRALIA
              </h3>

              <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
                Traditional Australian pay television has become more expensive every year while offering fewer channels at higher prices. Households across Sydney, Melbourne, Brisbane, Perth, and Adelaide are switching to Solara IPTV because it delivers the same content for a fraction of the monthly cost, with no lock in contract and no need for extra boxes or hardware.
              </p>

              <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
                Solara IPTV runs on a modern streaming infrastructure that was built for Australian conditions. Our servers sit in Sydney and Melbourne edge data centres with dedicated bandwidth, so channel changes happen instantly and streams stay smooth during the highest traffic moments like the AFL grand final, State of Origin, and the Boxing Day Test.
              </p>

              <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
                Setup is one of the things customers mention the most in reviews. You do not need to be tech savvy. You pick a plan, message our team on WhatsApp, and we walk you through installing a player like IBO Player Pro on your Firestick, Smart TV, or phone. Once you are up and running, you get a free 24 hour trial to test the picture quality, check the sport lineup, and make sure everything works perfectly on your internet connection before you upgrade.
              </p>

              <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
                The Solara IPTV channel lineup covers everything an Aussie household could ask for. You get Nine, Seven, ABC, SBS, Network 10, and Fox8 alongside live sport from Fox Footy, Optus Sport, ESPN, and Main Event. Movies and complete TV boxsets land in the on demand library every day from HBO, Netflix, Disney, Paramount, and Apple. International channels from the US, UK, Canada, Europe, India, Pakistan, China, and the Middle East are organised into easy to browse groups, so you can find anything in seconds.
              </p>

              <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
                Pricing is in Australian dollars and there is no lock in contract. You pick the number of screens you need at home, choose between a 3, 6, or 12 month plan, and you can cancel or change at any time. That is the Solara IPTV difference. No hidden fees, no long term commitments, and no pressure to commit before you know the service is right for you.
              </p>
            </div>
          </FadeIn>

<br /><br />

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
                  Australia Solara IPTV Service 🇦🇺
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#1A1A1E] leading-[1.05] mb-6">
                GET SOLARA IPTV <br />
                <span className="text-[#00843D]">TODAY</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#1A1A1E]/80">
                Pick your Solara IPTV plan, message us on WhatsApp, and we will get you set up on your own device. Test everything on the free trial first, then upgrade to a paid subscription only when you are happy. No lock in. No worries.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#00843D] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#006A31] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#00843D]/25 border border-[#FFCD00]"
                >
                  Choose Your Solara Plan
                </Link>
                <Link
                  href="/free-trial"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00843D]/30 bg-[#FAFAFA] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1A1A1E] hover:bg-[#00843D]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <PlayCircle className="h-4 w-4 text-[#00843D] shrink-0" /> Free 24h Trial
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#00843D] uppercase tracking-wider">
                Free Trial First • WhatsApp Guided Setup • No Lock In Contract
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
    
  );
}