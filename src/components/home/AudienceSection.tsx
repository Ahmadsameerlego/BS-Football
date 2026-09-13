import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Users, UserCheck, Flame, Trophy, ArrowUpRight } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const cards = [
    {
      key: 'young',
      icon: Users,
      data: t('audiences.young'),
      tag: isRTL ? 'تأسيس مبكر' : 'Early Foundation',
      borderAccent: 'hover:border-amber-400/60',
    },
    {
      key: 'developing',
      icon: Flame,
      data: t('audiences.developing'),
      tag: isRTL ? 'فئات سنية' : 'Competitive Youth',
      borderAccent: 'hover:border-emerald-400/60',
    },
    {
      key: 'advanced',
      icon: Trophy,
      data: t('audiences.advanced'),
      tag: isRTL ? 'محترفون ومتقدمون' : 'Pro & Elite Tier',
      borderAccent: 'hover:border-cyan-400/60',
    },
    {
      key: 'teams',
      icon: UserCheck,
      data: t('audiences.teams'),
      tag: isRTL ? 'أندية وفرق' : 'Full Team Squads',
      borderAccent: 'hover:border-purple-400/60',
    },
  ];

  return (
    <section className="py-24 bg-pitch-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <span>{t('audiences.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('audiences.headline')}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className={`p-6 sm:p-7 rounded-2xl bg-pitch-900/80 border border-white/10 ${card.borderAccent} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-pitch-950 border border-white/10 group-hover:border-bsgold-400/40 text-bsgold-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                      {card.data.age}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg text-white uppercase tracking-tight mb-3 group-hover:text-bsgold-300 transition-colors">
                    {card.data.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {card.data.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 font-mono">
                    {card.tag}
                  </span>
                  <a
                    href="#assessment"
                    className="p-1.5 rounded-lg bg-pitch-950 text-slate-400 group-hover:text-bsgold-400 group-hover:bg-bsgold-400/10 transition-colors"
                    aria-label={`Inquire about ${card.data.title}`}
                  >
                    <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
