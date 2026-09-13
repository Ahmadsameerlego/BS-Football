import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Users, CheckCircle2 } from 'lucide-react';

export const CoachesSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const { coaches } = useData();

  return (
    <section id="coaches" className="py-24 bg-pitch-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-bsgold-400" />
            <span>{t('coaches.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('coaches.headline')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('coaches.subheadline')}
          </p>
        </div>

        {/* Featured Founder Coach Card (Coach Bassem Soliman) */}
        {coaches.filter((c) => c.featured).map((coach) => (
          <div
            key={coach.id}
            className="mb-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-pitch-900 via-pitch-900 to-pitch-850 border-2 border-bsgold-400/60 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={coach.image}
                alt={coach.name[language]}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-bsgold-400 text-black shadow-lg">
                  {isRTL ? 'المؤسس والمدير الفني' : 'Founder & Technical Director'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-bsgold-400 uppercase tracking-widest mb-1">
                  {coach.role[language]}
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-3">
                  {coach.name[language]}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mb-6">
                  {coach.specialty[language]}
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {coach.bio[language]}
                </p>

                {/* Credentials list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {coach.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-pitch-950 border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bsgold-400 shrink-0" />
                      <span className="text-xs text-slate-300 font-medium">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {isRTL ? 'متاح لجلسات التشخيص الفردي 1-on-1' : 'Available for 1-on-1 Pro Diagnostic Sessions'}
                </span>
                <a
                  href="#assessment"
                  className="px-5 py-2.5 rounded-xl bg-bsgold-400 hover:bg-bsgold-300 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  {isRTL ? 'حجز جلسة خاصة' : 'Book Private Session'}
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Other Specialist Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.filter((c) => !c.featured).map((coach) => (
            <div
              key={coach.id}
              className="rounded-2xl bg-pitch-900/80 border border-white/10 hover:border-bsgold-400/40 p-6 flex flex-col justify-between group transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-pitch-950 border border-white/5">
                  <img
                    src={coach.image}
                    alt={coach.name[language]}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-transparent to-transparent" />
                </div>

                <div className="text-[11px] font-bold text-bsgold-400 uppercase tracking-wider mb-1">
                  {coach.role[language]}
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase tracking-tight mb-2">
                  {coach.name[language]}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {coach.specialty[language]}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {coach.bio[language]}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                {isRTL ? 'طاقم أداء معتمد' : 'Certified Staff Specialist'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
