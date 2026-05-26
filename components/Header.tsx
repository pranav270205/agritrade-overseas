'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navLinks } from '@/lib/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.png"
                  alt="AGRITRADE OVERSEAS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1
                  className={`text-lg font-bold leading-tight transition-colors duration-300 ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  AGRITRADE
                </h1>
                <p
                  className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-gold' : 'text-gold-light'
                  }`}
                >
                  OVERSEAS
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? isScrolled
                          ? 'text-primary'
                          : 'text-gold'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary hover:bg-primary/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
                    : 'bg-gold text-dark-text hover:bg-gold-light shadow-md hover:shadow-lg'
                }`}
              >
                Request a Quote
                <ChevronRight size={16} />
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-primary hover:bg-primary/10'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/images/logo.png"
                        alt="AGRITRADE OVERSEAS"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">AGRITRADE</p>
                      <p className="text-xs text-gold font-medium tracking-wider">OVERSEAS</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between px-6 py-3.5 text-sm font-medium transition-all ${
                            isActive
                              ? 'text-primary bg-primary/5 border-r-3 border-primary'
                              : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                          <ChevronRight
                            size={16}
                            className={isActive ? 'text-primary' : 'text-gray-400'}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <div className="p-5 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request a Quote
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
