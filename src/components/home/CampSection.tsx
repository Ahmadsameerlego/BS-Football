import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Tent, MapPin, CheckCircle, Clock, Maximize2 } from 'lucide-react';

export const CampSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const { camps } = useData();
  const currentCamp = camps[0];
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section id="camps" className="py-24 bg-pitch-900/90 relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <Tent className="w-3.5 h-3.5 text-bsgold-400" />
            <span>{t('camps.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('camps.headline')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('camps.subheadline')}
          </p>
        </div>

        {/* Camp Highlight Box */}
        {currentCamp && (
          <div className="rounded-3xl bg-pitch-950 border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-bsgold-400 text-black">
                      {t('camps.archiveBadge')}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-bsgold-400" />
                      <span>{currentCamp.location[language]}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4">
                    {currentCamp.title[language]}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {currentCamp.description[language]}
                  </p>

                  <div className="p-4 rounded-xl bg-pitch-900 border border-white/5 mb-6">
                    <div className="text-xs font-bold text-bsgold-400 uppercase tracking-wider mb-2">
                      {isRTL ? 'ركائز المعسكر المغلق:' : 'Core Camp Pillars:'}
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      {t('camps.pillarsSummary')}
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {currentCamp.highlights[language].map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-bsgold-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    {currentCamp.dateRange[language]}
                  </span>
                  <a
                    href="#assessment"
                    className="px-5 py-2.5 rounded-xl bg-bsgold-400 hover:bg-bsgold-300 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    {isRTL ? 'طلب حجز معسكر' : 'Inquire for Camps'}
                  </a>
                </div>
              </div>

              {/* Right: Daily Schedule Breakdown */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-pitch-900 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-wider mb-4 pb-3 border-b border-white/10">
                  <Clock className="w-4 h-4 text-bsgold-400" />
                  <span>{isRTL ? 'الجدول اليومي النموذجي للمعسكر' : 'TYPICAL CAMP DAILY REGIME'}</span>
                </div>

                <div className="space-y-3">
                  {currentCamp.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-pitch-950/80 border border-white/5 flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="text-xs font-mono font-bold text-bsgold-400">{item.time}</div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                          {item.activity[language]}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-pitch-900 text-slate-400 border border-white/5 shrink-0">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Camp Photo Showcase Gallery */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="text-xs font-black tracking-widest text-slate-400 uppercase mb-4">
                {isRTL ? 'معرض صور وتوثيق المعسكر' : 'CAMP VISUAL SHOWCASE'}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {currentCamp.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setActivePhoto(img)}
                    className="relative h-28 sm:h-32 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-bsgold-400 transition-all"
                  >
                    <img
                      src={img}
                      alt={`Camp photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20">
            <img src={activePhoto} alt="Camp photo" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};
