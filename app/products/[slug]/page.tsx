import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Package, Send } from 'lucide-react';
import { products, getProductBySlug, getAllProductSlugs } from '@/lib/products';
import AnimatedSection from '@/components/AnimatedSection';

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return { title: product.metaTitle, description: product.metaDescription };
}

export default async function ProductDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-[#063d1a]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <AnimatedSection>
            <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-semibold mb-3 tracking-wider uppercase">{product.category}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{product.name}</h1>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Product Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl sticky top-28">
                <Image src={product.image} alt={product.name} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-2xl font-bold text-dark-text mb-4" style={{ fontFamily: 'var(--font-heading)' }}>About {product.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{product.fullDescription}</p>

              <h3 className="text-lg font-bold text-dark-text mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Key Features</h3>
              <div className="space-y-3 mb-8">
                {product.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-dark-text mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Packaging Options</h3>
              <div className="space-y-3 mb-8">
                {product.packagingOptions.map((option, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Package size={18} className="text-gold mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700">{option}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary group">
                  Send Inquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-gold group">
                  Request a Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="section-title">Other <span className="text-primary">Products</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rp, i) => (
              <AnimatedSection key={rp.slug} delay={i * 0.1}>
                <Link href={`/products/${rp.slug}`} className="premium-card overflow-hidden group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={rp.image} alt={rp.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-dark-text group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{rp.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{rp.shortDescription}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
