import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Target, Activity, Brain, Utensils, RefreshCw, Zap, Shield, Sparkles } from 'lucide-react';

export const CompletePlayerSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<string>('technical');

  const nodes = [
    {
      id: 'technical',
      label: isRTL ? 'التطوير الفني' : 'TECHNICAL',
      desc: isRTL ? 'إتقان اللمسة وسرعة القرار تحت الضغط' : 'Precision touch & high-speed decision making',
      icon: Target,
      color: 'border-amber-400 text-amber-400 bg-amber-950/40',
      activeColor: 'bg-amber-500 text-black',
      angle: '0 deg',
    },
    {
      id: 'physical',
      label: isRTL ? 'المحرك البدني' : 'PHYSICAL',
      desc: isRTL ? 'القوة الانفجارية، السرعة، والتحمل' : 'Explosive power, sprint speed & durability',
      icon: Activity,
      color: 'border-emerald-400 text-emerald-400 bg-emerald-950/40',
      activeColor: 'bg-emerald-500 text-black',
      angle: '72 deg',
    },
    {
      id: 'mental',
      label: isRTL ? 'الصلابة الذهنية' : 'MENTAL',
      desc: isRTL ? 'الثبات الانفعالي، ملف اللعبة الداخلية والتركيز' : 'Clutch resilience, inner profile & match focus',
      icon: Brain,
      color: 'border-cyan-400 text-cyan-400 bg-cyan-950/40',
      activeColor: 'bg-cyan-500 text-black',
      angle: '144 deg',
    },
    {
      id: 'nutrition',
      label: isRTL ? 'التغذية الرياضية' : 'NUTRITION',
      desc: isRTL ? 'طاقة محسوبة مخصصة للمركز الرياضي' : 'Targeted metabolic energy & match fueling',
      icon: Utensils,
      color: 'border-rose-400 text-rose-400 bg-rose-950/40',
      activeColor: 'bg-rose-500 text-black',
      angle: '216 deg',
    },
    {
      id: 'recovery',
      label: isRTL ? 'الاستشفاء النشط' : 'RECOVERY',
      desc: isRTL ? 'النوم العميق، تجديد الأنسجة وإدارة الحمل' : 'Tissue regeneration, sleep & load balance',
      icon: RefreshCw,
      color: 'border-purple-400 text-purple-400 bg-purple-950/40',
      activeColor: 'bg-purple-500 text-black',
      angle: '288 deg',
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section className="py-24 bg-gradient-to-b from-pitch-950 via-pitch-900 to-pitch-950 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bsgold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('completePlayer.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('completePlayer.headline')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('completePlayer.subheadline')}
          </p>
        </div>

        {/* Central Dynamic Athlete Synergy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Visual Network (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-pitch-950 border border-white/10 shadow-2xl relative">
            {/* Center Core: The Athlete */}
            <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-pitch-850 via-pitch-900 to-black border-2 border-bsgold-400 shadow-2xl shadow-bsgold-500/20 p-4 text-center group cursor-pointer">
              <div className="w-10 h-10 mb-1 flex items-center justify-center">
                <img
                  src="/assets/logo.png"
                  alt="BS Logo"
                  className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                />
              </div>
              <span className="text-[10px] font-mono text-bsgold-400 tracking-widest uppercase">
                THE CORE
              </span>
              <span className="font-display font-black text-xs sm:text-sm text-white uppercase leading-tight">
                {t('completePlayer.centralAthlete')}
              </span>
              <div className="absolute -inset-2 rounded-full border border-bsgold-400/20 animate-ping opacity-25 pointer-events-none" />
            </div>

            {/* Surrounding 5 Pillar Nodes */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 z-20">
              {nodes.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`flex flex-col items-start p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 ${
                      isSelected
                        ? 'border-bsgold-400 bg-pitch-900 shadow-lg shadow-bsgold-500/15 scale-105'
                        : 'border-white/10 bg-pitch-900/60 hover:border-white/20 hover:bg-pitch-850'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div className={`p-1.5 rounded-lg border ${node.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 font-bold">
                        {isSelected ? 'ACTIVE' : 'SELECT'}
                      </span>
                    </div>
                    <span className="font-display font-black text-xs text-white uppercase tracking-wider mb-1">
                      {node.label}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      {node.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Connection Insight Box (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-8 rounded-3xl bg-pitch-900/90 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-3">
                <Zap className="w-4 h-4" />
                <span>{t('completePlayer.connectText')}</span>
              </div>

              <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-4">
                {activeNodeData.label} ↔ {isRTL ? 'المنظومة الكاملة' : 'THE COMPLETE ECOSYSTEM'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                <p>
                  {isRTL
                    ? `في منظومة BS، لا يتم تدريب ركن "${activeNodeData.label}" بشكل منفصل. بل يرتبط في كل حصة تدريبية بالأركان الأخرى؛ ليتعلم اللاعب كيف يترجم التكنيك إلى سرعة بدنية وقرار ذهني حاسم.`
                    : `Within the BS methodology, ${activeNodeData.label} is never trained in isolation. It is continuously cross-referenced with cognitive focus, physical load limits, and metabolic readiness.`}
                </p>
                <div className="p-4 rounded-xl bg-pitch-950/80 border border-white/5">
                  <div className="font-bold text-white mb-1">
                    {isRTL ? 'الأثر التنافسي المباشر:' : 'Direct Matchday Impact:'}
                  </div>
                  <div className="text-slate-400">
                    {isRTL
                      ? 'ثبات الأداء الفني والبدني حتى الدقيقة الأخيرة من المباريات الرسمية مع تقليل احتمالية الإصابات بنسبة تتجاوز ٦٠٪.'
                      : 'Sustaining high-intensity technical accuracy in the final 15 minutes of competitive fixtures while drastically reducing soft-tissue injury risk.'}
                  </div>
                </div>
              </div>

              <a
                href="#assessment"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-bsgold-400 hover:bg-bsgold-300 text-black text-xs font-black tracking-wider uppercase rounded-xl transition-colors shadow-lg"
              >
                <span>{isRTL ? 'ابدأ تقييمك الرياضي الآن' : 'Start Full Athlete Assessment'}</span>
                <Shield className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
