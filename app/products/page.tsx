import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Send } from 'lucide-react';
import { products } from '@/lib/products';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore our premium range of Indian agricultural products for export.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-[#063d1a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-4 tracking-wider uppercase">Our Products</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Premium <span className="text-gold-gradient">Agricultural Products</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Discover our carefully curated range of export-quality agricultural products sourced from India&apos;s finest growing regions.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={product.slug} delay={index * 0.08}>
                <div className="premium-card overflow-hidden group h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">{product.category}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-dark-text mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{product.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{product.shortDescription}</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <Link href={`/products/${product.slug}`} className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">View Details <ArrowRight size={14} /></Link>
                      <Link href="/contact" className="flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dark transition-colors ml-auto"><Send size={14} /> Inquiry</Link>
                    </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Need a Custom Product?</h2>
            <p className="text-white/80 mb-8">Contact us with your specific requirements and we&apos;ll source it for you.</p>
            <Link href="/contact" className="btn-gold group">Request a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
