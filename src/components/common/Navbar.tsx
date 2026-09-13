import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X, ArrowUpRight, Shield, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { setIsAdminOpen } = useData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined, professional navigation items to prevent overcrowding
  const navLinks = [
    {
      href: '#pillars',
      label: isRTL ? 'الأركان الخمسة' : 'The 5 Pillars',
    },
    {
      href: '#programs',
      label: isRTL ? 'البرامج التدريبية' : 'Programs',
    },
    {
      href: '#facilities',
      label: isRTL ? 'المرافق والمنشآت' : 'Facilities',
    },
    {
      href: '#athletes',
      label: isRTL ? 'اللاعبون والنجوم' : 'Athletes',
    },
    {
      href: '#camps',
      label: isRTL ? 'المعسكرات' : 'Camps',
    },
    {
      href: '#coaches',
      label: isRTL ? 'الكادر الفني' : 'Coaches',
    },
    {
      href: '#projects',
      label: isRTL ? 'المشاريع والرؤية' : 'Projects',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? 'bg-pitch-950/95 backdrop-blur-2xl border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.85)] py-2.5 px-4 sm:px-6'
            : 'bg-pitch-950/80 backdrop-blur-xl border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.6)] py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-gradient-to-br from-pitch-900 to-black rounded-xl p-1.5 border border-bsgold-400/40 group-hover:border-bsgold-400 shadow-[0_0_12px_rgba(234,179,8,0.25)] transition-all">
              <img
                src="/assets/logo.png"
                alt="BS Football Hub"
                className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_8px_rgba(234,179,8,0.7)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black tracking-wider text-base sm:text-lg text-white leading-none whitespace-nowrap">
                  BS <span className="text-bsgold-400">FOOTBALL</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-bsgold-400 animate-pulse hidden sm:inline-block" />
              </div>
              <span className="text-[10px] tracking-widest text-slate-300 font-semibold uppercase mt-0.5 whitespace-nowrap font-mono">
                {isRTL ? 'منظومة الأداء المتكامل' : 'PERFORMANCE HUB'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on 1150px+) */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 2xl:px-3.5 py-1.5 text-xs 2xl:text-sm font-bold tracking-wide text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-3 shrink-0">
            <LanguageToggle />

            {/* Assessment CTA */}
            <a
              href="#assessment"
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-bsgold-400 via-bsgold-500 to-amber-500 hover:from-bsgold-300 hover:to-amber-400 text-black text-xs font-black tracking-wider uppercase rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.35)] hover:shadow-[0_0_25px_rgba(234,179,8,0.55)] transition-all duration-300 transform active:scale-95 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{t('nav.contact')}</span>
              <ArrowUpRight
                className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isRTL ? 'rotate-[-90deg]' : ''
                }`}
              />
            </a>

            {/* CMS Trigger */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-2.5 text-slate-400 hover:text-bsgold-400 bg-pitch-900/80 hover:bg-pitch-850 rounded-xl border border-white/5 transition-colors"
              title={t('nav.admin')}
              aria-label={t('nav.admin')}
            >
              <Shield className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-200 hover:text-white bg-pitch-900 rounded-xl border border-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 pt-4 border-t border-white/10 animate-fadeIn">
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-xs font-bold text-slate-200 hover:text-bsgold-400 hover:bg-white/5 rounded-xl border border-white/5 transition-all text-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
              <a
                href="#assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-bsgold-400 to-amber-500 text-black text-xs font-black tracking-wider uppercase rounded-xl shadow-lg"
              >
                <span>{t('nav.contact')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs text-slate-400 hover:text-white bg-pitch-900 rounded-xl border border-white/5"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>{t('nav.admin')}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
