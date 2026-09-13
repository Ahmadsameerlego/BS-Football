import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Check, ArrowUpRight, Flame } from 'lucide-react';

export const ProgramsSection: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const { programs } = useData();

  return (
    <section id="programs" className="py-24 bg-pitch-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-bsgold-400" />
            <span>{t('programs.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('programs.headline')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('programs.subheadline')}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="p-8 rounded-3xl bg-pitch-900/90 border border-white/10 hover:border-bsgold-400/50 shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Details */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  {prog.badge && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-bsgold-400/10 text-bsgold-400 border border-bsgold-400/30">
                      {prog.badge[language]}
                    </span>
                  )}
                  <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-lg bg-pitch-950 border border-white/5">
                    {prog.ageRange}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-2 group-hover:text-bsgold-300 transition-colors">
                  {prog.title[language]}
                </h3>

                <p className="text-xs font-bold text-bsgold-400 uppercase tracking-wide mb-4">
                  {prog.tagline[language]}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {prog.targetAudience[language]}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 mb-8">
                  {prog.features[language].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-bsgold-400/20 text-bsgold-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-slate-300 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {prog.pillarsInvolved.map((pillar, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-pitch-950 text-slate-400 border border-white/5"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>

                <a
                  href="#assessment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-bsgold-400 hover:bg-bsgold-300 text-black text-xs font-black tracking-wider uppercase rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-md"
                >
                  <span>{t('programs.cta')}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
