'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { ProductSchema, FAQSchema } from './components/PageSchemas';
import { blogPosts } from '@/lib/blog';
import AustraliaFlag from './components/AustraliaFlag';
import { 
  PlayCircle,
  UserCheck,
  BookOpen,
  Star, 
  ShieldCheck, 
  Zap, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  MonitorSmartphone, 
  Tv2, 
  Cpu, 
  ArrowRight, 
  Lock, 
  ThumbsUp, 
  Trophy, 
  Medal, 
  LifeBuoy,
  Settings,
  Check,
  Smartphone,
  BarChart
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

// Lazy loaded components keep the page fast and improve Core Web Vitals
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#00843D] border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#121214] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#121214] rounded-3xl animate-pulse max-w-7xl mx-auto" />,
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#00843D] border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">
      <ProductSchema />
      <FAQSchema />

      {/* Hero Section */}
      <section className="relative px-15 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#08080A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="IPTV Australia service streaming in 4K ultra HD quality"
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
              Trusted Australia IPTV Provider
              <AustraliaFlag className="w-7 h-7 rounded-[2px] shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-none break-words">
            IPTV AUSTRALIA <br />
            <span className="text-[#FFCD00]">STREAMING SERVICE</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FAFAFA]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Stream 30,000+ live channels plus a huge library of movies and TV shows in crisp 4K on any device. Our Australia IPTV service includes step by step setup, live WhatsApp support, a free trial to test on your own telly first, and AUD pricing with no lock in contract.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link 
              href="/pricing" 
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#00843D] text-[#FAFAFA] font-black text-sm hover:bg-[#006A31] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#00843D]/30 border border-[#FFCD00]"
            >
              Get Subscription Now
            </Link>
            <Link 
              href="/free-trial" 
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#1A1A1E]/80 text-[#f2ebeb] border border-[#FAFAFA]/20 font-black text-sm hover:bg-[#FAFAFA]/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFCD00] shrink-0" /> Claim Free Trial
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FAFAFA] font-bold uppercase tracking-widest bg-[#FAFAFA]/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#FAFAFA]/10 shadow-2xl">
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#FFCD00]" /> Ultra HD Stream Quality</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#FFCD00]" /> High Uptime Network</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFCD00]" /> Anti Freeze Server Technology</span>
          </div>
        </FadeIn>
      </section>

      {/* Partner Slider Section */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* 3 Step Setup Section */}
      <section className="py-28 bg-[#f2ebeb] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00843D_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-[#00843D]/10 border border-[#00843D]/25 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00843D] animate-pulse" />
                <span className="text-[#00843D] font-black text-xs uppercase tracking-widest">
                  IPTV Setup Australia
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1A1E] tracking-tight uppercase leading-[1.05]">
                START STREAMING IN <br className="hidden sm:block" />
                <span className="text-[#00843D] relative inline-block mt-1">
                  3 SIMPLE STEPS
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFCD00]/50 to-transparent rounded-full" />
                </span>
              </h2>
              
              <p className="text-[#1A1A1E]/80 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                No worries, we keep it simple. Pick your plan, message us on WhatsApp, and our team walks you through the whole setup on your own device. You get a free trial to test everything before you pay a cent.
              </p>
            </div>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Step 1 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#00843D] shadow-[0_15px_35px_rgba(0,132,61,0.2)] hover:border-[#FFCD00] hover:shadow-[0_25px_50px_rgba(0,132,61,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#00843D] text-[#f2ebeb] shadow-lg shadow-[#00843D]/40 border border-[#FFCD00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8 text-[#FFCD00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFCD00] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#00843D]">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFCD00] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#00843D]">
                  Step One
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFCD00] transition-colors">
                  Select A Plan
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Choose the Australia IPTV subscription that suits your household. Pick how many devices you want to run at once, either 1, 2, or 3, and choose a 3, 6, or 12 month period. Everything is billed in Aussie dollars.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> 1, 2, or 3 Device Options</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> 3, 6, or 12 Month Periods</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Billed In AUD ($) With No Lock In</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#00843D]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFCD00] transition-colors">
                  Simple Selection
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#00843D] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFCD00] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 2 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#00843D] shadow-[0_15px_35px_rgba(0,132,61,0.2)] hover:border-[#FFCD00] hover:shadow-[0_25px_50px_rgba(0,132,61,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#00843D] text-[#f2ebeb] shadow-lg shadow-[#00843D]/40 border border-[#FFCD00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-[#FFCD00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFCD00] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#00843D]">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFCD00] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#00843D]">
                  Step Two
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFCD00] transition-colors">
                  Setup On WhatsApp
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Once you have picked your plan, we chat on WhatsApp. Our team walks you through the installation on your Firestick, Smart TV, or phone. We help you install and configure a player like IBO Player, which is one of our top picks for fast, secure playback. You will also receive your test content right there in the chat.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Guided Setup Over WhatsApp</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Help Installing IBO Player Or Your App</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Test Content Sent To You Directly</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#00843D]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFCD00] transition-colors">
                  Friendly Team Support
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#00843D] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFCD00] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 3 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#00843D] shadow-[0_15px_35px_rgba(0,132,61,0.2)] hover:border-[#FFCD00] hover:shadow-[0_25px_50px_rgba(0,132,61,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#00843D] text-[#f2ebeb] shadow-lg shadow-[#00843D]/40 border border-[#FFCD00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#FFCD00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFCD00] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#00843D]">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFCD00] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#00843D]">
                  Step Three
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFCD00] transition-colors">
                  Test Then Upgrade
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Fire up your free trial and have a proper look. Check the footy, flick through the movie catalog, and make sure it runs smooth on your device. If you are happy, upgrade to a paid subscription and we stay on hand the whole way through in case anything comes up.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Free Trial To Test Everything</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Upgrade Only When You Are Happy</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Support For Your Whole Subscription</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#00843D]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFCD00] transition-colors">
                  Ready To Watch
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#00843D] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFCD00] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Living Room Section */}
      <section className="w-full bg-[#0a0a0c] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#00843D]/20 border border-[#00843D]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCD00]">
            Home Cinema Experience 🇦🇺
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            BRING HIGH DEFINITION TO YOUR <span className="text-[#FFCD00]">LIVING ROOM</span>
          </h2>
        </div>

        <div className="w-full bg-black/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="IPTV Australia service playing on a Smart TV in a living room"
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
            There is nothing quite like watching your favourite team or a new release on the big screen. Our servers keep the picture sharp and the sound in sync, so you can relax on the couch without worrying about buffering or drops in quality.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link 
              href="/pricing" 
              className="bg-[#00843D] border border-[#FFCD00] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#006A31] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#00843D]/30"
            >
              Activate Subscription Today
            </Link>
          </div>
        </div>
      </section>

      {/* Media Grid Section */}
      <section id="channels" className="pt-24 bg-[#0a0a0c] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-white/5">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              WIDE RANGE OF LOCAL & INTERNATIONAL CHANNELS
            </h2>
            <p className="text-slate-300 font-medium text-lg">
              You get thousands of live television channels plus a growing library of movies and series on demand. Fresh titles land all the time, so there is always something new to watch.
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

      {/* Pricing Section */}
      <div className="min-h-[600px] bg-[#0a0a0c]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center">
        <ShareButtons />
      </section>

      {/* Trust Badges */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00843D]/10 border border-[#00843D]/20 flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-[#00843D]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Secure Payment Options</div>
                <p className="text-slate-600 font-medium text-xs mt-1">Your checkout is encrypted, and you can pay with Credit Card, PayPal, PayID, or Crypto</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00843D]/10 border border-[#00843D]/20 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-7 h-7 text-[#00843D]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Free Trial Before You Pay</div>
                <p className="text-slate-600 font-medium text-xs mt-1">Test the service on your own device first and only upgrade once you are happy with it</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00843D]/10 border border-[#00843D]/20 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-7 h-7 text-[#00843D]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">WhatsApp Guided Setup</div>
                <p className="text-slate-600 font-medium text-xs mt-1">Our team walks you through the whole installation on WhatsApp, from start to finish</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00843D]/10 border border-[#00843D]/20 flex items-center justify-center shrink-0">
                <Medal className="w-7 h-7 text-[#00843D]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Optimised Server Network</div>
                <p className="text-slate-600 font-medium text-xs mt-1">We run dedicated streaming capacity so that latency stays low even during peak viewing hours</p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-24 bg-[#00843D] relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              {CONSTANTS.BRAND_NAME} PERFORMANCE METRICS
            </h3>
            <p className="text-[#FFCD00] text-base font-bold mt-4 uppercase tracking-wider">
              Serving happy viewers right across Sydney, Melbourne, Brisbane, Perth, and Adelaide.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#00843D] mb-2">
                <AnimatedCounter value={25} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Active Subscribers</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#00843D] mb-2">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Live Channels</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#00843D] mb-2">
                <AnimatedCounter value={60} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">On Demand Titles</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#00843D] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Server Uptime</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      <section className="w-full bg-[#FFCD00] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <TargetCountries />
        </div>
      </section>

      {/* Global Server Map */}
      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Benefits Section */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden border-t border-[#0A0A0C]/5">
        <div className="absolute inset-0 bg-[radial-gradient(#00843D_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/10 border border-[#00843D]/25 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00843D] animate-pulse" />
              <span className="text-[#00843D] font-black text-xs uppercase tracking-widest">
                Reliable Australia IPTV Service 🇦🇺
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0C] mb-6 uppercase tracking-tight leading-none">
              WHY THIS IS THE <span className="text-[#00843D]">BEST IPTV AUSTRALIA</span> HAS TO OFFER
            </h2>
            <p className="text-[#0A0A0C]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Aussies who are fed up paying too much for traditional television are switching across to our platform. Here is what makes this the best IPTV provider setup in the country.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4" />
                  </svg>
                ), 
                title: "Extensive On Demand Vault", 
                desc: "You get instant access to a massive vault of movies, complete box sets, and multiple audio or subtitle tracks. Our library updates all the time, so there is always a fresh title to chuck on." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ), 
                title: "Anti Freeze Server Infrastructure", 
                desc: "We do everything we can to cut down on dropouts during big live broadcasts. Our servers spread the load across many nodes, which keeps your stream smooth even when thousands of other Aussies are watching the same event." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ), 
                title: "Optimised Australian Routing", 
                desc: "Your connection travels through the fastest available path to our servers. That means low latency, quick channel changes, and steady video quality no matter where you live in Australia." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ), 
                title: "AFL, NRL & Cricket Coverage", 
                desc: "Follow the AFL, NRL, Cricket Australia summer series, Super Rugby, and Formula 1 with a frame rate that keeps the action looking clean. No more blurry moments when the game heats up." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ), 
                title: "7 Day Electronic Program Guide", 
                desc: "An Electronic Program Guide is a built in TV schedule that shows what is playing now and what is up next. You get a full week of listings and catch up options for shows you may have missed." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ), 
                title: "Multi Device Connections", 
                desc: "One account can be used on more than one device inside your home. That covers Amazon Firestick, Android TV, Smart TVs, tablets, and phones, so everyone in the household can watch what they want." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 border-2 border-[#00843D] shadow-xl hover:border-[#FFCD00] hover:shadow-[0_20px_45px_rgba(0,132,61,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#00843D] border border-[#FFCD00] flex items-center justify-center mb-6 shadow-lg shadow-[#00843D]/30">
                    {item.iconSvg}
                  </div>
                  <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[#FAFAFA]/90 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#00843D]/40 flex items-center justify-between text-xs font-bold text-[#FFCD00]">
                  <span className="uppercase tracking-wider">Key Feature</span>
                  <span className="w-2 h-2 rounded-full bg-[#00843D]" />
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-24 bg-[#f2ebeb] relative border-t border-[#0A0A0C]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/10 border border-[#00843D]/25 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00843D] animate-pulse" />
              <span className="text-[#00843D] font-black text-xs uppercase tracking-widest">
                30,000+ Live Channels
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0C] mb-6 uppercase tracking-tight leading-none">
              EXPLORE OUR <span className="text-[#00843D]">CHANNEL CATEGORIES</span>
            </h2>
            <p className="text-[#0A0A0C]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              This Australia IPTV service brings you live sports channels, free to air national networks, high definition movie feeds, and broadcasts from around the world, all in the one spot.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                cat: "Live Sports Networks", 
                channels: "Watch the AFL, NRL, cricket, Super Rugby, racing, and major fight nights with motion that stays clean and sharp.", 
                iconSvg: (
                  <svg className="w-6 h-6 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              { 
                cat: "Free To Air Television", 
                channels: "Full live coverage of national public networks, local news feeds, and daytime television channels you already know.", 
                iconSvg: (
                  <svg className="w-6 h-6 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                cat: "Movies & On Demand", 
                channels: "Thousands of cinema releases, streaming originals, and complete television box sets that are refreshed every day.", 
                iconSvg: (
                  <svg className="w-6 h-6 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                )
              },
              { 
                cat: "Kids & Family Programming", 
                channels: "Family friendly shows, cartoons, and educational series that parents can trust for younger viewers.", 
                iconSvg: (
                  <svg className="w-6 h-6 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                cat: "US & UK Broadcasters", 
                channels: "Live broadcasts from major American and British networks covering news, drama, and entertainment around the clock.", 
                iconSvg: (
                  <svg className="w-6 h-6 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              { 
                cat: "Global Television", 
                channels: "International networks from Europe, Asia, the Middle East, and the Americas so you can stay close to home.", 
                iconSvg: (
                  <svg className="w-6 h-6 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                )
              },
              { 
                cat: "Documentary & Nature", 
                channels: "Educational content about science, history, wildlife, and geography for viewers who love to learn.", 
                iconSvg: (
                  <svg className="w-6 h-6 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              { 
                cat: "Combat Sports & Events", 
                channels: "Mixed martial arts, professional boxing, wrestling, and pay per view matchups all in one dedicated category.", 
                iconSvg: (
                  <svg className="w-6 h-6 text-[#FFCD00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0A0A0C] text-[#f2ebeb] rounded-3xl p-6 border-2 border-[#00843D] shadow-lg hover:border-[#FFCD00] hover:shadow-[0_15px_30px_rgba(0,132,61,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00843D] flex items-center justify-center shrink-0 border border-[#FFCD00] shadow-md">
                      {item.iconSvg}
                    </div>
                    <h3 className="font-black text-[#f2ebeb] text-base uppercase tracking-wider">{item.cat}</h3>
                  </div>
                  <p className="text-[#FAFAFA]/90 font-semibold text-xs leading-relaxed">{item.channels}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#00843D]/30 flex items-center justify-between text-[10px] font-extrabold uppercase text-[#FFCD00] tracking-widest">
                  <span>HD & 4K Quality</span>
                  <span>On Air</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="bg-[#0a0a0c] py-24 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00843D]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00843D]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Block 1: 4K Quality */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#121214] border-2 border-[#00843D]/40 p-3 shadow-2xl transition-all duration-500 hover:border-[#FFCD00]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt="4K streaming Australia service playing in high definition on a Smart TV"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                <div className="absolute left-4 top-4 rounded-full bg-[#0a0a0c]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#f2ebeb] border border-[#00843D]/50 shadow-md">
                  4K Ultra HD Quality
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#0a0a0c]/95 backdrop-blur-md border border-[#00843D]/40 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00843D] text-[#f2ebeb] shrink-0 shadow-lg shadow-[#00843D]/40 border border-[#FFCD00]">
                      <PlayCircle className="h-6 w-6 text-[#FFCD00]" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#f2ebeb]">Ultra Clear Streams</p>
                      <p className="text-xs font-medium text-[#FAFAFA]/90 mt-0.5">
                        Enjoy sharp picture quality and smooth movement on any supported display.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeIn className="order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#00843D]/15 border border-[#00843D]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCD00]">
                <span className="w-2 h-2 rounded-full bg-[#00843D] animate-pulse" />
                High Definition Playback 🇦🇺
              </span>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f2ebeb] leading-[1.1] mb-6">
                EXPERIENCE UNMATCHED <br />
                <span className="text-[#FFCD00] relative inline-block mt-1">
                  4K VIDEO CLARITY
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#00843D]/60 rounded-full" />
                </span>
              </h3>
              
              <p className="text-base leading-relaxed text-[#FAFAFA]/90 font-medium space-y-4">
                When you connect to our servers, you tap into a network built for stability. We route your traffic through high bandwidth nodes, which cuts down on buffering and keeps 4K, Full HD, and standard definition streams looking their best.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#FAFAFA]/80 font-medium">
                Whether you are catching up on local news, browsing the movie catalog, or following a live sporting event, our server optimisations support continuous playback on Amazon Firestick, Smart TVs, Android TV, and Apple TV devices.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti Freeze Protection Engine', 
                  'Wide Channel Selection in 4K & FHD', 
                  '60,000+ On Demand Titles Available', 
                  'Compatible with Firestick, TV & Mobile'
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#121214] text-[#f2ebeb] border border-[#00843D]/30 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#FFCD00] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#00843D] text-[#FFCD00] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8">
                <Link 
                  href="/pricing" 
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#00843D] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#006A31] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg shadow-[#00843D]/30 border border-[#FFCD00]"
                >
                  Get Instant Access Now
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Block 2: Live Sports */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#00843D]/15 border border-[#00843D]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCD00]">
                <span className="w-2 h-2 rounded-full bg-[#00843D] animate-pulse" />
                Match Day & Pay Per View
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f2ebeb] leading-[1.1] mb-6">
                NEVER MISS A SINGLE <br />
                <span className="text-[#FFCD00] relative inline-block mt-1">
                  MATCH OR EVENT
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#00843D]/60 rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#FAFAFA]/90 font-medium">
                Sports fans need smooth feeds and fast response times. Choosing a trusted Australia IPTV provider means you can watch the AFL, NRL, Cricket Australia summer series, Super Rugby, Formula 1, and fight night pay per view matchups without any fuss.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#FAFAFA]/80 font-medium">
                Our streaming infrastructure handles heavy traffic on grand final day and State of Origin night. You get fast paced action at 60 frames per second, which is the frame rate that keeps the play looking natural on screen.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Full AFL, NRL & Super Rugby Coverage', 
                  'Fight Night Events & Pay Per Views', 
                  'Low Latency High Frame Rate Feeds', 
                  'Dedicated Sports & Racing Channels'
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#121214] text-[#f2ebeb] border border-[#00843D]/30 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#FFCD00] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#00843D] text-[#FFCD00] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8">
                <Link 
                  href="#channels" 
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#121214] border-2 border-[#00843D] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#00843D] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg"
                >
                  Explore Sports Coverage
                </Link>
              </div>
            </FadeIn>

            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#121214] border-2 border-[#00843D]/40 p-3 lg:order-2 shadow-2xl transition-all duration-500 hover:border-[#FFCD00]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt="Match day coverage streaming on an Australia IPTV subscription"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#0a0a0c]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#f2ebeb] border border-[#00843D]/50 shadow-md">
                  Match Day Broadcasts
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#0a0a0c]/95 backdrop-blur-md border border-[#00843D]/40 p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00843D] text-[#FFCD00] shadow-lg shadow-[#00843D]/40 border border-[#FFCD00]">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#f2ebeb]">Sports Pass</p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#FFCD00]">
                        Match Day & Sports Feeds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative overflow-hidden bg-[#00843D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0A0A0C]/30 px-4 py-2 rounded-full border border-[#FFCD00]/40 mb-6">
              <BarChart className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#f2ebeb] font-extrabold text-xs uppercase tracking-wider">Service Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-6 uppercase tracking-tight">
              IPTV AUSTRALIA VS TRADITIONAL CABLE TV
            </h2>
            <p className="text-[#FAFAFA]/90 text-lg max-w-3xl mx-auto font-medium">
              Here is a side by side look at why so many Aussies are moving to the best IPTV service. You get more channels, more flexibility, and a much lower monthly bill.
            </p>
          </FadeIn>

          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-3xl border border-[#FFCD00]/30 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-[#00843D]/60 bg-[#18181B]">
                  <h3 className="text-lg font-black uppercase text-[#f2ebeb]">Feature Comparison</h3>
                </div>
                <div className="p-6 border-b border-r border-[#00843D]/60 bg-[#006A31]">
                  <h3 className="text-lg font-black uppercase text-[#FFCD00]">Our Australia IPTV Service</h3>
                </div>
                <div className="p-6 border-b border-[#00843D]/60 bg-[#121214]">
                  <h3 className="text-lg font-black uppercase text-[#FAFAFA]/70">Traditional Cable TV</h3>
                </div>
                
                {[
                  { feature: "Monthly Cost", us: "From ~$15 AUD / month", cable: "$80 to $140 AUD per month" },
                  { feature: "Contract Terms", us: "No Lock In Contract", cable: "12 to 24 Month Contracts" },
                  { feature: "Live Channels", us: "30,000+ Channels", cable: "60 to 100 Channels" },
                  { feature: "On Demand Movies", us: "60,000+ Titles", cable: "Limited On Demand Selection" },
                  { feature: "Ultra HD Quality", us: "Standard Inclusion", cable: "Extra HD Hardware Fees", usIcon: true },
                  { feature: "Multiple Screens", us: "Multi Device Support", cable: "Additional Box Rental Fees", usIcon: true },
                  { feature: "Sports Events", us: "Included in Package", cable: "Extra Sports Package Fees", usIcon: true },
                  { feature: "International Feeds", us: "Global Networks Included", cable: "Restricted Add-on Options" }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-b border-[#00843D]/30 ${idx % 2 === 0 ? 'bg-[#18181B]' : 'bg-[#27272A]'}`}>
                      <span className="text-[#f2ebeb] font-bold text-sm">{row.feature}</span>
                    </div>

                    <div className={`p-6 border-r border-b border-[#00843D]/30 ${idx % 2 === 0 ? 'bg-[#006A31]' : 'bg-[#005226]'}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#FFCD00]" />
                          <span className="text-[#f2ebeb] font-extrabold text-sm">{row.us}</span>
                        </div>
                      ) : (
                        <span className="text-[#FFCD00] font-black text-sm">{row.us}</span>
                      )}
                    </div>

                    <div className={`p-6 border-b border-[#00843D]/30 ${idx % 2 === 0 ? 'bg-[#121214]' : 'bg-[#1A1A1E]'}`}>
                      <span className="text-[#FAFAFA]/70 text-sm font-medium">{row.cable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {[
              { feature: "Monthly Cost", us: "From ~$15 AUD/mo", cable: "$80 to $140 AUD/mo" },
              { feature: "Contract Terms", us: "No Contract", cable: "12 to 24 Months" },
              { feature: "Live Channels", us: "30,000+ Channels", cable: "60 to 100 Channels" },
              { feature: "On Demand Titles", us: "60,000+ Titles", cable: "Limited Selection" },
              { feature: "4K Streaming", us: "Included Standard", cable: "Extra Hardware Fee" },
              { feature: "Multi Screen", us: "Multi Device", cable: "Fee per box" },
              { feature: "Sports Events", us: "Included", cable: "Extra Monthly Fees" },
              { feature: "International Feeds", us: "Global Networks", cable: "Extra Add-ons" }
            ].map((row, idx) => (
              <div key={idx} className="bg-[#18181B] text-[#f2ebeb] rounded-3xl border border-[#FFCD00]/30 p-5 shadow-lg">
                <div className="text-center mb-3">
                  <span className="text-[#FFCD00] text-xs font-black uppercase tracking-wider">{row.feature}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="text-left bg-[#006A31] p-3 rounded-2xl flex-1 border border-[#00843D]">
                    <div className="text-[#FFCD00] font-black text-sm">{row.us}</div>
                    <div className="text-[#FAFAFA]/90 text-[10px] font-bold uppercase">Our IPTV Service</div>
                  </div>
                  <div className="text-right bg-[#121214] p-3 rounded-2xl flex-1 border border-white/10">
                    <div className="text-[#FAFAFA]/60 line-through text-sm">{row.cable}</div>
                    <div className="text-[#FAFAFA]/50 text-[10px] font-bold uppercase">Cable TV</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 bg-[#f2ebeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/10 px-4 py-2 rounded-full border border-[#00843D]/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#00843D]" />
              <span className="text-[#00843D] font-extrabold text-xs uppercase tracking-wider">Verified Subscriber Feedback</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1E] mb-6 uppercase tracking-tight">
              TRUSTED BY OVER <span className="text-[#00843D]">15,000+ AUSSIE VIEWERS 🇦🇺</span>
            </h2>
            <p className="text-[#1A1A1E]/80 text-lg font-medium max-w-2xl mx-auto">
              Read what real subscribers across Sydney, Melbourne, Brisbane, Perth, and Adelaide say about this Australia IPTV service.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Liam T.", 
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                text: "I spent months looking for an Australia IPTV subscription that would not freeze during weekend sports on my Firestick. This one finally delivered. Setup on WhatsApp was easy and the picture is sharp.", 
                role: "Melbourne, VIC" 
              },
              { 
                name: "Sarah M.", 
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
                text: "Cancelled my old cable package last month and switched over. The team walked me through setup on WhatsApp in about five minutes, and I tested everything on the free trial before paying. No worries at all.", 
                role: "Sydney, NSW" 
              },
              { 
                name: "Jason P.", 
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
                text: "There is a great mix of live sports networks, local free to air channels, and movie titles. IBO Player runs smooth on my Android box. This is easily the best IPTV Australia option I have tried so far.", 
                role: "Brisbane, QLD" 
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#FAFAFA] text-[#1A1A1E] rounded-3xl p-8 border border-[#00843D]/20 shadow-xl transition-all hover:-translate-y-2 hover:border-[#00843D] hover:shadow-2xl duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        width={48}
                        height={48} 
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-[#00843D] shadow-md shrink-0" 
                      />
                      <div>
                        <div className="font-black text-[#1A1A1E] text-base uppercase tracking-tight flex items-center gap-1.5">
                          {testimonial.name}
                          <UserCheck className="w-4 h-4 text-[#00843D]" />
                        </div>
                        <div className="text-[#00843D] text-xs font-bold uppercase tracking-wider">{testimonial.role}</div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFCD00] text-[#FFCD00]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#1A1A1E]/80 font-medium text-base leading-relaxed italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div className="border-t border-[#00843D]/15 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-[#00843D] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00843D]" /> Verified Subscriber
                  </span>
                  <span className="text-[11px] font-bold text-[#1A1A1E]/50 uppercase">Australia 🇦🇺</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Supported Devices Section */}
      <section className="py-24 bg-[#08080A] w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00843D]/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00843d0a_1px,transparent_1px),linear-gradient(to_bottom,#00843d0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00843D]/20 px-4 py-2 rounded-full border border-[#00843D]/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00843D] animate-pulse" />
              <span className="text-[#FFCD00] font-extrabold text-xs uppercase tracking-widest">Universal Hardware Support</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-6 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              COMPATIBLE WITH ALL POPULAR HARDWARE PLATFORMS
            </h2>
            
            <p className="text-[#FAFAFA]/80 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Setup is a breeze no matter what gear you already own. Our team helps you install a player like IBO Player on WhatsApp, and our servers support standard M3U links and Xtream Code APIs across Android, iOS, Smart TVs, and desktop. M3U is a playlist file format and Xtream Code is a login method, so you do not need to be a techo to get going.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { 
                tag: "Amazon Firestick & Fire TV", 
                desc: "Fire OS, Fire TV Cube, and 4K Sticks", 
                detail: "IBO Player and other popular media apps run great here for quick channel switching and smooth navigation.",
                icon: Zap, 
                code: "01" 
              },
              { 
                tag: "Smart TVs (Samsung & LG)", 
                desc: "Samsung Tizen OS and LG webOS Systems", 
                detail: "Install a player app straight from the TV app store and start watching without any extra boxes.",
                icon: Tv2, 
                code: "02" 
              },
              { 
                tag: "Android TV & Streaming Boxes", 
                desc: "Nvidia Shield, Google TV, and Android Boxes", 
                detail: "Full hardware decoding support for steady frame rates during live sports broadcasts.",
                icon: Cpu, 
                code: "03" 
              },
              { 
                tag: "Apple TV, iPhone & iPad", 
                desc: "tvOS and iOS Operating Platforms", 
                detail: "Smooth performance across iOS player apps with support for cloud synced settings.",
                icon: Smartphone, 
                code: "04" 
              },
              { 
                tag: "Windows PCs & Mac Computers", 
                desc: "Windows 10 and 11, macOS, and Linux", 
                detail: "Stream directly through desktop media players or a web browser interface.",
                icon: MonitorSmartphone, 
                code: "05" 
              },
              { 
                tag: "MAG & Dedicated Boxes", 
                desc: "Portal Media Players and Set Top Devices", 
                detail: "Native MAC address integration with full Electronic Program Guide functionality.",
                icon: ShieldCheck, 
                code: "06" 
              },
            ].map((device) => {
              const Icon = device.icon;
              return (
                <div 
                  key={device.tag} 
                  className="group relative bg-[#f2ebeb] text-[#1A1A1E] border border-[#00843D]/30 rounded-3xl p-7 flex flex-col justify-between gap-5 hover:border-[#00843D] hover:shadow-[0_12px_35px_rgba(0,132,61,0.25)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00843D] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#00843D] border border-[#FFCD00] flex items-center justify-center shrink-0 group-hover:bg-[#006A31] group-hover:scale-105 transition-all duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-[#FFCD00] transition-all duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-[#1A1A1E] uppercase tracking-wide leading-tight">
                          {device.tag}
                        </h3>
                        <p className="text-xs font-bold text-[#00843D] mt-0.5">
                          {device.desc}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-[#0A0A0C] bg-[#FFCD00] border border-[#00843D] px-2.5 py-1 rounded-xl shrink-0">
                      {device.code}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#1A1A1E]/75 leading-relaxed pt-2 border-t border-[#1A1A1E]/10">
                    {device.detail}
                  </p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Blog Section */}
      <section className="py-24 bg-[#f2ebeb] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00843D_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00843D]/10 px-4 py-2 rounded-full border border-[#00843D]/20 mb-6">
                <BookOpen className="w-4 h-4 text-[#00843D]" />
                <span className="text-[#00843D] font-extrabold text-xs uppercase tracking-widest">Guides &amp; Insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1E] mb-4 uppercase tracking-tight">
                LATEST SETUP <span className="text-[#00843D]">GUIDES &amp; NEWS</span>
              </h2>
              <p className="text-[#1A1A1E]/70 text-lg font-medium max-w-2xl leading-relaxed">
                Learn how to get the most out of your subscription with our step by step setup guides, troubleshooting tips, and advice for speeding up your home network.
              </p>
            </div>
            
            <div className="flex shrink-0">
              <Link 
                href="/blog" 
                className="whitespace-nowrap px-7 py-4 rounded-2xl bg-[#00843D] text-[#FAFAFA] font-black hover:bg-[#006A31] transition-all duration-300 flex items-center gap-3 group shrink-0 shadow-xl border border-[#FFCD00] hover:shadow-[0_10px_25px_rgba(0,132,61,0.3)]"
              >
                <span className="uppercase text-xs tracking-wider">Explore All Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#FFCD00]" />
              </Link>
            </div>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-[#FAFAFA] text-[#1A1A1E] rounded-3xl p-4 border-2 border-[#00843D]/15 shadow-md hover:border-[#00843D] hover:shadow-[0_20px_40px_rgba(0,132,61,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative">
                    
                    <div>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1A1A1E]">
                        <Image 
                          src={post.image} 
                          alt={`${post.title} IPTV Australia setup guide`} 
                          width={800} 
                          height={450} 
                          loading="lazy" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                          sizes="(max-width: 768px) 100vw, 33vw" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00843D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#00843D] text-[#FAFAFA] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-md border border-[#FFCD00]">
                            {post.author || "Setup Guide"}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-1 bg-[#1A1A1E]/80 backdrop-blur-md text-[#f2ebeb] text-[10px] font-extrabold uppercase tracking-wider rounded-lg border border-[#f2ebeb]/20">
                            5 Min Read
                          </span>
                        </div>
                      </div>

                      <div className="p-4 pt-6">
                        <h3 className="text-lg font-black text-[#1A1A1E] mb-2.5 group-hover:text-[#00843D] transition-colors tracking-tight line-clamp-2 uppercase leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[#1A1A1E]/70 text-xs font-semibold line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-3 border-t border-[#00843D]/10 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-xs font-black text-[#00843D] uppercase tracking-wider group-hover:text-[#006A31] transition-colors">
                        Read Article
                      </span>
                      
                      <div className="w-9 h-9 rounded-xl bg-[#00843D]/10 border border-[#00843D]/30 flex items-center justify-center text-[#00843D] group-hover:bg-[#00843D] group-hover:text-[#FAFAFA] group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Final CTA Section */}
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
                  Australia IPTV Service 🇦🇺
                </span>
              </div>
              
              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#1A1A1E] leading-[1.05] mb-6">
                UPGRADE YOUR ENTERTAINMENT <br />
                <span className="text-[#00843D]">EXPERIENCE TODAY</span>
              </h2>
              
              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#1A1A1E]/80">
                Pick your plan, message us on WhatsApp, and we will get you set up on your own device. Test everything on the free trial first, then upgrade to a paid subscription only when you are happy. No lock in. No worries.
              </p>
              
              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Channels'],
                  ['Ultra HD', 'Stream Quality'],
                  ['99.99%', 'Server Uptime'],
                  ['24/7', 'Technical Support'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl sm:rounded-3xl border border-[#00843D]/20 bg-[#FAFAFA] p-4 shadow-sm hover:border-[#00843D] transition-colors">
                    <div className="text-2xl sm:text-3xl font-black text-[#00843D]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#1A1A1E]/70">{label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link 
                  href="/pricing" 
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#00843D] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#006A31] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#00843D]/25 border border-[#FFCD00]"
                >
                  Choose Your Plan
                </Link>
                <Link 
                  href="/firestick-setup" 
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00843D]/30 bg-[#FAFAFA] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1A1A1E] hover:bg-[#00843D]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <Settings className="h-4 w-4 text-[#00843D] shrink-0" /> Firestick Setup Guide
                </Link>
              </div>
              
              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#00843D] uppercase tracking-wider">
                Free Trial First • WhatsApp Guided Setup • Ongoing Support
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}