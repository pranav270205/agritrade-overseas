'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const countries = [
  { name: 'UAE', region: 'Middle East', x: 62, y: 42, flag: '🇦🇪' },
  { name: 'Saudi Arabia', region: 'Middle East', x: 58, y: 40, flag: '🇸🇦' },
  { name: 'United Kingdom', region: 'Europe', x: 47, y: 25, flag: '🇬🇧' },
  { name: 'Germany', region: 'Europe', x: 50, y: 25, flag: '🇩🇪' },
  { name: 'United States', region: 'North America', x: 22, y: 32, flag: '🇺🇸' },
  { name: 'Canada', region: 'North America', x: 20, y: 24, flag: '🇨🇦' },
  { name: 'Australia', region: 'Oceania', x: 82, y: 68, flag: '🇦🇺' },
  { name: 'South Africa', region: 'Africa', x: 54, y: 68, flag: '🇿🇦' },
];

const regions = ['Middle East', 'Europe', 'North America', 'Africa', 'Oceania'];

export default function ExportMarketsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="section-subtitle">Our Reach</span>
          <h2 className="section-title mt-3 mb-4">
            Global <span className="text-primary">Export Markets</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Serving buyers across the Middle East, Europe, North America, Africa, and Asia
            with dependable export solutions.
          </p>
        </AnimatedSection>

        {/* Map + Countries */}
        <div className="relative mb-12">
          {/* Stylized World Map */}
          <AnimatedSection>
            <div className="relative bg-gradient-to-br from-section-alt to-cream rounded-2xl p-8 lg:p-12 overflow-hidden min-h-[400px]">
              {/* Map Background SVG - Simplified world outline */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-auto opacity-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* North America */}
                <path d="M150 100 C200 80, 300 90, 320 120 C340 150, 280 200, 250 220 C220 240, 180 230, 160 200 C140 170, 130 130, 150 100Z" fill="#0B5D2A" />
                {/* South America */}
                <path d="M250 280 C280 260, 320 270, 330 300 C340 340, 320 400, 290 420 C260 440, 240 410, 240 370 C240 340, 230 300, 250 280Z" fill="#0B5D2A" />
                {/* Europe */}
                <path d="M450 80 C480 70, 540 90, 550 110 C560 130, 540 160, 520 170 C500 180, 460 170, 450 150 C440 130, 430 100, 450 80Z" fill="#0B5D2A" />
                {/* Africa */}
                <path d="M480 200 C520 180, 570 200, 580 240 C590 280, 570 350, 540 380 C510 410, 480 390, 470 350 C460 310, 450 230, 480 200Z" fill="#0B5D2A" />
                {/* Asia */}
                <path d="M580 80 C650 60, 780 90, 820 130 C860 170, 830 220, 780 240 C730 260, 650 230, 620 200 C590 170, 550 110, 580 80Z" fill="#0B5D2A" />
                {/* Australia */}
                <path d="M780 320 C820 300, 870 320, 880 350 C890 380, 860 410, 830 410 C800 410, 770 390, 770 360 C770 340, 760 330, 780 320Z" fill="#0B5D2A" />
                {/* India marker */}
                <circle cx="660" cy="200" r="8" fill="#D4A017" />
                <circle cx="660" cy="200" r="16" fill="none" stroke="#D4A017" strokeWidth="2" opacity="0.5" />
              </svg>

              {/* Country Dots */}
              {countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  className="absolute group cursor-pointer"
                  style={{ left: `${country.x}%`, top: `${country.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="relative">
                    <div className="w-3 h-3 bg-gold rounded-full shadow-lg" />
                    <div className="absolute inset-0 w-3 h-3 bg-gold rounded-full animate-ping opacity-40" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <span className="mr-1">{country.flag}</span>
                      {country.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 -mt-1" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* India origin marker */}
              <motion.div
                className="absolute group"
                style={{ left: '66%', top: '40%' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-white" />
                  <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-30" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-primary text-white text-xs rounded-lg whitespace-nowrap font-semibold">
                    🇮🇳 India (Origin)
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45 -mt-1" />
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Country Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {countries.map((country, index) => (
            <AnimatedSection key={country.name} delay={index * 0.08}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-section-alt border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                <span className="text-2xl">{country.flag}</span>
                <div>
                  <p className="text-sm font-semibold text-dark-text group-hover:text-primary transition-colors">
                    {country.name}
                  </p>
                  <p className="text-xs text-gray-500">{country.region}</p>
                </div>
                <MapPin size={14} className="text-gray-400 ml-auto" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Region Tags */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mt-8">
          {regions.map((region) => (
            <span
              key={region}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {region}
            </span>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
