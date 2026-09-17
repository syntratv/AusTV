'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';

// ---------------------------------------------------------------------------
// IMAGE COUNTS
// ---------------------------------------------------------------------------
const MOVIES_COUNT = 16;
const SERIES_COUNT = 16;
const SPORTS_COUNT = 14;

// ---------------------------------------------------------------------------
// UNIQUE TITLES + UNIQUE ALTS (one per image, no duplicates)
// ---------------------------------------------------------------------------
const MOVIE_TITLES = [
  'Latest Action Blockbuster',
  'Top-Rated Drama Film',
  '4K Sci-Fi Cinema Release',
  'Award-Winning Thriller',
  'Family Adventure Movie',
  'Epic Fantasy Feature',
  'Bestselling Comedy Film',
  'Classic Cinema Remaster',
  'International Box Office Hit',
  'Superhero Movie Premiere',
  'Suspense Mystery Film',
  'Hollywood Romance Release',
  'Historical War Drama',
  'Animated Feature Film',
  'Crime Documentary Feature',
  'Independent Cinema Pick',
];

const MOVIE_ALTS = [
  'Latest action blockbuster streaming in 4K on IPTV Australia',
  'Award winning drama film available on demand for Aussie viewers',
  'Sci-fi cinema release playing in Ultra HD on Smart TV',
  'Suspense thriller film streaming on Firestick in Australia',
  'Family adventure movie ready to watch on IPTV tonight',
  'Epic fantasy feature showing in sharp 4K on your big screen',
  'Top rated comedy film streaming on the Aussie IPTV service',
  'Classic cinema remaster in Full HD on demand',
  'International box office hit streaming Down Under in 4K',
  'Superhero movie premiere on the IPTV Australia VOD library',
  'Mystery film streaming on demand across Sydney and Melbourne',
  'Hollywood romance release now showing on IPTV Australia',
  'Historical war drama streaming in 4K Ultra HD',
  'Animated feature film for the whole family on IPTV',
  'Crime documentary film playing on demand in Australia',
  'Independent cinema pick streaming on Aussie IPTV tonight',
];

const SERIES_TITLES = [
  'Trending Drama Series',
  'Binge-Worthy Crime Show',
  'Award-Winning TV Series',
  'Sci-Fi Streaming Series',
  'Comedy Sitcom Boxset',
  'Popular Fantasy Series',
  'Reality TV Show Collection',
  'Mystery Thriller Series',
  'Historical Period Drama',
  'Medical Drama Series',
  'Animated Series for Adults',
  'Romantic Drama Boxset',
  'Political Thriller Show',
  'Superhero TV Series',
  'Documentary Series Collection',
  'International Streaming Series',
];

const SERIES_ALTS = [
  'Trending drama series streaming in 4K on IPTV Australia',
  'Binge worthy crime show ready on the Aussie VOD library',
  'Award winning TV series playing on Firestick in 4K',
  'Sci-fi streaming series available on demand in Australia',
  'Comedy sitcom boxset ready to watch on Smart TV',
  'Popular fantasy series streaming in Ultra HD quality',
  'Reality TV show collection on the Aussie IPTV service',
  'Mystery thriller series playing on demand tonight',
  'Historical period drama streaming in Full HD',
  'Medical drama series on the IPTV Australia VOD library',
  'Animated series for adults streaming in crisp 4K',
  'Romantic drama boxset playing across Australia on IPTV',
  'Political thriller show streaming on demand in 4K',
  'Superhero TV series in crisp 4K on IPTV Australia',
  'Documentary series collection on the Aussie service',
  'International streaming series on the IPTV Australia library',
];

const SPORTS_TITLES = [
  'Live AFL Footy Match',
  'NRL Rugby Live Game',
  'Premier League Soccer Match',
  'UFC Pay-Per-View Event',
  'Formula 1 Race Broadcast',
  'Cricket International Match',
  'NBA Basketball Broadcast',
  'Tennis Grand Slam Match',
  'Super Rugby Live Broadcast',
  'Boxing Championship Fight',
  'Optus Sport Live Stream',
  'Golf PGA Tour Live',
  'A-League Football Match',
  'Main Event PPV Broadcast',
];

const SPORTS_ALTS = [
  'Live AFL footy match streaming in 4K on IPTV Australia',
  'NRL rugby league live game on the Aussie IPTV service',
  'Premier League soccer match streaming live on demand',
  'UFC pay per view event playing in 60FPS on IPTV',
  'Formula 1 race broadcast live on Aussie IPTV',
  'Cricket Australia international match streaming in 4K',
  'NBA basketball broadcast streaming live in Australia',
  'Tennis grand slam match playing on demand in Full HD',
  'Super Rugby live broadcast on IPTV Australia',
  'Boxing championship fight streaming live on the Aussie service',
  'Optus Sport live stream playing in 4K on IPTV',
  'Golf PGA tour live on the Australia IPTV service',
  'A-League football match streaming live across Australia',
  'Main Event PPV broadcast playing in 4K on IPTV',
];

// ---------------------------------------------------------------------------
// DATA ARRAYS
// ---------------------------------------------------------------------------
const movies = Array.from({ length: MOVIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/iptv-australia-movies-${number}`,
    alt: MOVIE_ALTS[i],
  };
});

const series = Array.from({ length: SERIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/iptv-australia-serie-${number}`,
    alt: SERIES_ALTS[i],
  };
});

const sports = Array.from({ length: SPORTS_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/iptv-australia-sports-${number}`,
    alt: SPORTS_ALTS[i],
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// ---------------------------------------------------------------------------
// INFINITE SLIDER
// ---------------------------------------------------------------------------
const InfiniteSlider = ({
  items,
  direction = 'left',
  speed = 50,
  category,
  fadeBgColor = '#FFCD00',
  cardBorderColor = 'rgba(0,132,61,0.3)',
}: {
  items: any[];
  direction?: 'left' | 'right';
  speed?: number;
  category: string;
  fadeBgColor?: string;
  cardBorderColor?: string;
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;

  return (
    <div className="relative w-full overflow-hidden py-3" aria-hidden="true">
      {/* Side Fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${fadeBgColor}, transparent)` }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${fadeBgColor}, transparent)` }}
      />

      <motion.div
        className="flex w-max gap-4 md:gap-6 px-4"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
      >
        {infiniteItems.map((item, idx) => {
          const key = `${item.id}-${idx}`;
          const isFirstHalf = idx < items.length;
          const isPriority = isFirstHalf && idx < 6;

          const isDuplicate = idx >= items.length;
          const altText = isDuplicate ? '' : item.alt;

          return (
            <button
              key={key}
              onClick={scrollToPricing}
              tabIndex={idx >= items.length ? -1 : 0}
              aria-hidden="true"
              className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-52 block cursor-pointer group text-left bg-transparent border-none p-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#09090B] border shadow-lg group-hover:shadow-2xl transition-all duration-300"
                style={{ borderColor: cardBorderColor }}
              >
                {!failedImages[key] ? (
                  <Image
                    src={`${item.imagePath}.webp`}
                    alt={altText}
                    width={208}
                    height={312}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    priority={isPriority}
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 208px"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [key]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#09090B] p-3 text-center">
                    <span className="text-[#FFCD00] text-xs font-black uppercase tracking-widest">
                      {category}
                    </span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN SECTION
// ---------------------------------------------------------------------------
export default function MovieSlider() {
  return (
    <section className="w-full" aria-label="Australia IPTV media catalog overview">
      {/* ROW 1: Movies (Yellow Background) */}
      <div className="w-full py-12 sm:py-16 bg-[#FFCD00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#00843D] text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
              4K Cinema
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#09090B] uppercase tracking-tight">
              Latest Blockbuster Releases
            </h2>
          </div>
          <p className="text-[#09090B]/80 text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Part of our 120,000+ movies and TV shows library. Stream the newest cinema hits in crystal clear Ultra HD, ready to watch on any device you own.
          </p>
        </div>
        <InfiniteSlider
          items={movies}
          direction="left"
          speed={45}
          category="Movie"
          fadeBgColor="#FFCD00"
          cardBorderColor="rgba(0,132,61,0.4)"
        />
      </div>

      {/* ROW 2: Series (Green Background) */}
      <div className="w-full py-12 sm:py-16 bg-[#00843D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#FFCD00] text-[#09090B] text-xs font-black uppercase tracking-wider">
              VOD Series
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight">
              Trending TV Shows &amp; Series
            </h2>
          </div>
          <p className="text-[#FFFFFF]/90 text-sm mt-2 font-medium hidden md:block max-w-2xl">
            Binge complete boxsets from leading global networks. Fresh titles land every day across our Australia IPTV service.
          </p>
        </div>
        <InfiniteSlider
          items={series}
          direction="right"
          speed={40}
          category="Series"
          fadeBgColor="#00843D"
          cardBorderColor="rgba(255,205,0,0.5)"
        />
      </div>

      {/* ROW 3: Sports (Yellow Background) */}
      <div className="w-full py-12 sm:py-16 bg-[#FFCD00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#00843D] text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
              Live Sports
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#09090B] uppercase tracking-tight">
              Live Sports &amp; PPV Events 🇦🇺
            </h2>
          </div>
          <p className="text-[#09090B]/80 text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Catch every match live, including AFL, NRL, Cricket Australia, Super Rugby, Formula 1, Optus Sport, and Main Event PPV fight nights.
          </p>
        </div>
        <InfiniteSlider
          items={sports}
          direction="left"
          speed={50}
          category="Sports"
          fadeBgColor="#FFCD00"
          cardBorderColor="rgba(0,132,61,0.4)"
        />
      </div>
    </section>
  );
}