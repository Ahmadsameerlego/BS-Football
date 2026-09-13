import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Globe2, ArrowUpRight, Flag } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const { projects } = useData();

  return (
    <section id="projects" className="py-24 bg-pitch-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5 text-bsgold-400" />
            <span>{t('projects.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('projects.headline')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('projects.subheadline')}
          </p>
        </div>

        {/* 2 Strategic Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-pitch-900/90 border border-white/10 hover:border-bsgold-400/50 overflow-hidden shadow-2xl p-8 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-bsgold-400/10 text-bsgold-400 border border-bsgold-400/30">
                    {proj.tag[language]}
                  </span>
                  <Flag className="w-4 h-4 text-bsgold-400" />
                </div>

                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-4 group-hover:text-bsgold-300 transition-colors">
                  {proj.title[language]}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-pitch-950/80 border border-white/5">
                    <div className="text-[11px] font-bold text-bsgold-400 uppercase tracking-wider mb-1">
                      {isRTL ? 'السياق الاستراتيجي:' : 'Context & Vision:'}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {proj.context[language]}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-pitch-950/80 border border-white/5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {isRTL ? 'التحدي الفني:' : 'The Challenge:'}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {proj.challenge[language]}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-pitch-950/80 border border-white/5">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                      {isRTL ? 'منهجية وتأثير BS:' : 'BS Approach & Outcome:'}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {proj.outcome[language]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">
                  {isRTL ? 'شراكات وتطوير نوعي' : 'High-Impact Performance Initiative'}
                </span>
                <a
                  href="#assessment"
                  className="inline-flex items-center gap-1.5 font-bold text-bsgold-400 hover:text-bsgold-300 transition-colors uppercase tracking-wider"
                >
                  <span>{isRTL ? 'تواصل للشراكات' : 'Inquire for Partnerships'}</span>
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
