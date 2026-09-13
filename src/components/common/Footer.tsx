import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Zap, Shield, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { setIsAdminOpen } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pitch-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Founder Cred */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-black rounded-xl p-1 border border-white/10">
                  <img
                    src="/assets/logo.png"
                    alt="BS Logo"
                    className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black tracking-wider text-xl text-white">
                    BS <span className="text-bsgold-400">FOOTBALL</span>
                  </span>
                  <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase">
                    Performance Hub
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 max-w-sm">
                {t('footer.brandTag')}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pitch-900 border border-white/5 text-xs text-bsgold-300 font-bold">
                <Zap className="w-3.5 h-3.5 text-bsgold-400 fill-bsgold-400" />
                <span>{t('footer.founder')}</span>
              </div>
            </div>

            <div className="mt-8 text-xs text-slate-500">
              Jeddah • Riyadh • Cairo
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#philosophy" className="hover:text-bsgold-400 transition-colors">
                  {t('nav.philosophy')}
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-bsgold-400 transition-colors">
                  {t('nav.pillars')}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-bsgold-400 transition-colors">
                  {t('nav.programs')}
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-bsgold-400 transition-colors">
                  {t('nav.facilities')}
                </a>
              </li>
              <li>
                <a href="#athletes" className="hover:text-bsgold-400 transition-colors">
                  {t('nav.athletes')}
                </a>
              </li>
              <li>
                <a href="#camps" className="hover:text-bsgold-400 transition-colors">
                  {t('nav.camps')}
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-bsgold-400 transition-colors">
                  {t('nav.coaches')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-display font-black text-xs text-white uppercase tracking-widest mb-4">
                {t('booking.directContactTitle')}
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-bsgold-400 shrink-0" />
                  <a href="tel:+966563067676" className="text-slate-200 hover:text-white">
                    +966 56 306 7676
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-bsgold-400 shrink-0" />
                  <a href="mailto:Bassemsoliman1998@gmail.com" className="text-slate-200 hover:text-white">
                    Bassemsoliman1998@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-bsgold-400 shrink-0" />
                  <span className="text-slate-300">
                    {t('booking.location')}
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setIsAdminOpen(true)}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-bsgold-400 transition-colors"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>{t('footer.adminAccess')}</span>
              </button>

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-pitch-900 hover:bg-bsgold-400 hover:text-black text-slate-300 transition-all border border-white/5"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {t('footer.rights')}
          </div>
          <div>
            {t('footer.legal')}
          </div>
        </div>
      </div>
    </footer>
  );
};
