import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Export Markets',
  description: 'AGRITRADE OVERSEAS serves buyers across the Middle East, Europe, North America, Africa, and Asia with dependable export solutions.',
};

const countries = [
  { name: 'UAE', region: 'Middle East', flag: '🇦🇪', desc: 'Key market for Indian spices, groundnuts, and grains' },
  { name: 'Saudi Arabia', region: 'Middle East', flag: '🇸🇦', desc: 'Growing demand for premium Indian agricultural commodities' },
  { name: 'United Kingdom', region: 'Europe', flag: '🇬🇧', desc: 'Established market for Indian spices and specialty products' },
  { name: 'Germany', region: 'Europe', flag: '🇩🇪', desc: 'Major European hub for agricultural imports' },
  { name: 'United States', region: 'North America', flag: '🇺🇸', desc: 'Significant market for Indian spices and organic products' },
  { name: 'Canada', region: 'North America', flag: '🇨🇦', desc: 'Growing market for Indian pulses and spices' },
  { name: 'Australia', region: 'Oceania', flag: '🇦🇺', desc: 'Emerging market for Indian agricultural products' },
  { name: 'South Africa', region: 'Africa', flag: '🇿🇦', desc: 'Key African market for Indian grains and spices' },
];

const regions = [
  { name: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain'], color: 'bg-amber-50 border-amber-200' },
  { name: 'Europe', countries: ['United Kingdom', 'Germany', 'Netherlands', 'France', 'Spain'], color: 'bg-blue-50 border-blue-200' },
  { name: 'North America', countries: ['United States', 'Canada', 'Mexico'], color: 'bg-green-50 border-green-200' },
  { name: 'Africa', countries: ['South Africa', 'Kenya', 'Nigeria', 'Tanzania'], color: 'bg-orange-50 border-orange-200' },
];

export default function ExportMarketsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-[#063d1a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-4 tracking-wider uppercase">Our Reach</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Global <span className="text-gold-gradient">Export Markets</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Serving buyers across the Middle East, Europe, North America, Africa, and Asia with dependable export solutions.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* World Map Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-subtitle">Where We Export</span>
            <h2 className="section-title mt-3 mb-4">Connecting India to the <span className="text-primary">World</span></h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative bg-gradient-to-br from-section-alt to-cream rounded-2xl p-8 lg:p-12 overflow-hidden min-h-[350px] mb-12">
              <svg viewBox="0 0 1000 500" className="w-full h-auto opacity-10" fill="none">
                <path d="M150 100 C200 80, 300 90, 320 120 C340 150, 280 200, 250 220 C220 240, 180 230, 160 200 C140 170, 130 130, 150 100Z" fill="#0B5D2A" />
                <path d="M250 280 C280 260, 320 270, 330 300 C340 340, 320 400, 290 420 C260 440, 240 410, 240 370 C240 340, 230 300, 250 280Z" fill="#0B5D2A" />
                <path d="M450 80 C480 70, 540 90, 550 110 C560 130, 540 160, 520 170 C500 180, 460 170, 450 150 C440 130, 430 100, 450 80Z" fill="#0B5D2A" />
                <path d="M480 200 C520 180, 570 200, 580 240 C590 280, 570 350, 540 380 C510 410, 480 390, 470 350 C460 310, 450 230, 480 200Z" fill="#0B5D2A" />
                <path d="M580 80 C650 60, 780 90, 820 130 C860 170, 830 220, 780 240 C730 260, 650 230, 620 200 C590 170, 550 110, 580 80Z" fill="#0B5D2A" />
                <path d="M780 320 C820 300, 870 320, 880 350 C890 380, 860 410, 830 410 C800 410, 770 390, 770 360 C770 340, 760 330, 780 320Z" fill="#0B5D2A" />
                <circle cx="660" cy="200" r="8" fill="#D4A017" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-3" />
                  <p className="text-lg font-bold text-dark-text" style={{ fontFamily: 'var(--font-heading)' }}>Exporting from India to 20+ Countries</p>
                  <p className="text-sm text-gray-500">Across 5 continents</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Country Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {countries.map((country, i) => (
              <AnimatedSection key={country.name} delay={i * 0.08}>
                <div className="premium-card p-5 h-full group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div>
                      <h3 className="font-bold text-dark-text group-hover:text-primary transition-colors">{country.name}</h3>
                      <p className="text-xs text-gray-500">{country.region}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{country.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-subtitle">Regional Coverage</span>
            <h2 className="section-title mt-3">Markets by <span className="text-primary">Region</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, i) => (
              <AnimatedSection key={region.name} delay={i * 0.1}>
                <div className={`rounded-2xl p-6 border-2 ${region.color} h-full`}>
                  <h3 className="text-lg font-bold text-dark-text mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{region.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((c) => (
                      <span key={c} className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">{c}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Export to Your Country</h2>
            <p className="text-white/80 mb-8">We are ready to serve buyers from any part of the world. Contact us to discuss export possibilities to your market.</p>
            <Link href="/contact" className="btn-gold group">Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
