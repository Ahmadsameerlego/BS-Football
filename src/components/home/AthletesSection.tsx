import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Trophy, Star } from 'lucide-react';
import { Athlete } from '../../types';

export const AthletesSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const { athletes } = useData();
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  return (
    <section id="athletes" className="py-24 bg-pitch-900/90 relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <Trophy className="w-3.5 h-3.5 text-bsgold-400" />
            <span>{t('athletes.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('athletes.headline')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('athletes.subheadline')}
          </p>
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete) => (
            <div
              key={athlete.id}
              onClick={() => setSelectedAthlete(athlete)}
              className="rounded-3xl bg-pitch-950 border border-white/10 hover:border-bsgold-400/50 overflow-hidden shadow-2xl transition-all duration-500 flex flex-col group cursor-pointer hover:-translate-y-1.5"
            >
              {/* Athlete Portrait */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-pitch-900">
                <img
                  src={athlete.image}
                  alt={athlete.name[language]}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-pitch-950/20 to-transparent" />

                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 text-bsgold-400 border border-bsgold-400/40 backdrop-blur-md">
                    {athlete.tag[language]}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[11px] font-bold text-bsgold-400 uppercase tracking-widest mb-0.5">
                    {athlete.position[language]}
                  </div>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                    {athlete.name[language]}
                  </h3>
                  <div className="text-xs text-slate-300 font-medium">
                    {athlete.club[language]}
                  </div>
                </div>
              </div>

              {/* Highlight and Narrative Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-pitch-900/90 border border-white/5 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-bsgold-300">
                      <Star className="w-3.5 h-3.5 fill-bsgold-400 text-bsgold-400" />
                      <span>{athlete.highlight[language]}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {athlete.story[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">{isRTL ? 'إعداد وتطوير BS' : 'BS Performance Prepared'}</span>
                  <span className="text-bsgold-400 font-bold group-hover:underline">
                    {isRTL ? 'عرض التفاصيل' : 'View Profile →'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Profile Dialog */}
      {selectedAthlete && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedAthlete(null)}
        >
          <div
            className="relative max-w-xl w-full rounded-3xl bg-pitch-950 border border-bsgold-400/40 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-bsgold-400 shrink-0">
                <img
                  src={selectedAthlete.image}
                  alt={selectedAthlete.name[language]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-bsgold-400/20 text-bsgold-400 border border-bsgold-400/40">
                  {selectedAthlete.tag[language]}
                </span>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mt-1">
                  {selectedAthlete.name[language]}
                </h3>
                <p className="text-xs text-slate-300">{selectedAthlete.position[language]} • {selectedAthlete.club[language]}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-pitch-900 border border-white/5 mb-6">
              <div className="text-xs font-bold text-bsgold-400 mb-1">{isRTL ? 'الإنجاز / العلامة البارزة:' : 'Key Highlight:'}</div>
              <div className="text-sm font-semibold text-white">{selectedAthlete.highlight[language]}</div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedAthlete.story[language]}
            </p>

            <button
              onClick={() => setSelectedAthlete(null)}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              {isRTL ? 'إغلاق الملف' : 'Close Dossier'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
