import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="philosophy" className="py-24 bg-pitch-900/90 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bsgold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy & Quote */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('philosophy.eyebrow')}</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight mb-8">
              {t('philosophy.headline')}
            </h2>

            {/* Editorial Quote Box */}
            <div className="p-6 rounded-2xl bg-pitch-950/80 border-l-4 border-bsgold-400 border-t border-r border-b border-white/10 mb-8 relative">
              <Quote className="w-8 h-8 text-bsgold-400/30 mb-2" />
              <p className="font-display text-lg sm:text-xl font-bold text-slate-100 italic leading-snug">
                "{t('philosophy.quote')}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-bsgold-400/40">
                  <img
                    src="/assets/coach-bassem.jpg"
                    alt="Coach Bassem Soliman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{t('philosophy.quoteAuthor')}</div>
                  <div className="text-[11px] text-bsgold-400">{t('philosophy.quoteRole')}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t('philosophy.description1')}</p>
              <p className="font-medium text-white">{t('philosophy.description2')}</p>
            </div>
          </div>

          {/* Right Column: Visual Breakdown of The Solution */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-pitch-950 border border-white/10 shadow-2xl overflow-hidden">
              <div className="text-xs font-black tracking-widest text-slate-400 uppercase mb-4">
                {isRTL ? 'النهج التقليدي مقابل منظومة BS' : 'TRADITIONAL SILOS VS. THE BS INTEGRATED HUB'}
              </div>

              {/* The Old Fragmented Way */}
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>{isRTL ? 'الواقع المجزأ المعتاد في الأكاديميات' : 'THE FRAGMENTED MODEL'}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isRTL
                    ? 'مدرب فني يعمل بمفرده، وأخصائي نفسي منعزل، ومدرب لياقة بتمارين عامة، دون أي تواصل أو خطة موحدة.'
                    : 'Technical coach operates alone, mental coach is disconnected, gym trainer uses generic fitness routines. Zero alignment.'}
                </p>
              </div>

              {/* The BS Integrated Method */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-pitch-900 to-pitch-850 border border-bsgold-400/40 glow-subtle">
                <div className="flex items-center gap-2 text-xs font-black text-bsgold-400 mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isRTL ? 'منظومة BS المتكاملة' : 'THE BS INTEGRATED ECOSYSTEM'}</span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-300 font-semibold">{isRTL ? '١. الإتقان الفني' : '01. Technical Mastery'}</span>
                    <span className="text-bsgold-400 text-[11px] font-mono">Position & Pressure</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-300 font-semibold">{isRTL ? '٢. المحرك البدني' : '02. Kinetic Engine'}</span>
                    <span className="text-bsgold-400 text-[11px] font-mono">Durability & Speed</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-300 font-semibold">{isRTL ? '٣. الصلابة الذهنية' : '03. Mental Resilience'}</span>
                    <span className="text-bsgold-400 text-[11px] font-mono">Inner Game & Flow</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-300 font-semibold">{isRTL ? '٤. التغذية الرياضية' : '04. Targeted Fuel'}</span>
                    <span className="text-bsgold-400 text-[11px] font-mono">Metabolic Precision</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-300 font-semibold">{isRTL ? '٥. الاستشفاء النشط' : '05. Active Recovery'}</span>
                    <span className="text-bsgold-400 text-[11px] font-mono">Regeneration 24/7</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <span className="text-[11px] font-bold text-bsgold-300">
                    {isRTL ? 'كل ركن يرفع كفاءة الركن الآخر' : 'Every pillar amplifies the other continuously.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
