import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Target, Activity, Brain, Utensils, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<'technical' | 'physical' | 'mental' | 'nutrition' | 'recovery'>('technical');

  const pillarsList = [
    {
      id: 'technical',
      label: t('pillars.tabs.technical'),
      icon: Target,
      number: '01',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      data: t('pillars.technical'),
      bgImg: '/assets/training-area.jpg',
    },
    {
      id: 'physical',
      label: t('pillars.tabs.physical'),
      icon: Activity,
      number: '02',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      data: t('pillars.physical'),
      bgImg: '/assets/training-area.jpg',
    },
    {
      id: 'mental',
      label: t('pillars.tabs.mental'),
      icon: Brain,
      number: '03',
      badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      data: t('pillars.mental'),
      bgImg: '/assets/hub-building.jpg',
    },
    {
      id: 'nutrition',
      label: t('pillars.tabs.nutrition'),
      icon: Utensils,
      number: '04',
      badgeColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      data: t('pillars.nutrition'),
      bgImg: '/assets/hub-building.jpg',
    },
    {
      id: 'recovery',
      label: t('pillars.tabs.recovery'),
      icon: RefreshCw,
      number: '05',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      data: t('pillars.recovery'),
      bgImg: '/assets/pitch-aerial.jpg',
    },
  ];

  const currentPillar = pillarsList.find((p) => p.id === activeTab) || pillarsList[0];

  return (
    <section id="pillars" className="py-24 bg-pitch-950 relative overflow-hidden">
      {/* Subtle pitch line graphic */}
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <span>{t('pillars.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('pillars.headline')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('pillars.subheadline')}
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 sm:gap-3 scrollbar-none">
          {pillarsList.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id as any)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl font-display font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-pitch-800 to-pitch-850 text-white border-bsgold-400 shadow-lg shadow-bsgold-500/10 scale-105'
                    : 'bg-pitch-900/80 text-slate-400 border-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                <span className={`font-mono text-xs ${isActive ? 'text-bsgold-400' : 'text-slate-500'}`}>
                  {pillar.number}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-bsgold-400' : 'text-slate-400'}`} />
                <span>{pillar.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card / Deep Dive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-10 rounded-3xl bg-pitch-900/90 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-bsgold-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left / Main Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentPillar.badgeColor}`}>
                  {currentPillar.data.badge}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {currentPillar.data.subtitle}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-snug mb-5">
                {currentPillar.data.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {currentPillar.data.desc}
              </p>

              {/* High-impact bullet highlights */}
              <div className="space-y-3 mb-8">
                {currentPillar.data.highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-pitch-950/60 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-bsgold-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                {isRTL ? 'إشراف مباشر من كادر الأداء الرياضي' : 'Direct supervision by dedicated specialist coaches'}
              </div>
              <a
                href="#assessment"
                className="inline-flex items-center gap-2 text-xs font-bold text-bsgold-400 hover:text-bsgold-300 transition-colors uppercase tracking-wider"
              >
                <span>{isRTL ? 'احجز تقييم لهذا الركن' : 'Request Assessment For This Pillar'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-full border border-white/10 group">
            <img
              src={currentPillar.bgImg}
              alt={currentPillar.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-pitch-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-pitch-950/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-bsgold-400 uppercase mb-1">
                <currentPillar.icon className="w-3.5 h-3.5" />
                <span>BS Performance Lab</span>
              </div>
              <div className="text-xs text-slate-300">
                {isRTL ? 'منظومة دقيقة تعتمد على المقاييس والتحليل المستمر' : 'Precision development calibrated with longitudinal data'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
