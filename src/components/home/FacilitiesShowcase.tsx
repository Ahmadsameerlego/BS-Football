import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Maximize2 } from 'lucide-react';

export const FacilitiesShowcase: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const facilities = [
    {
      id: 'turf-gym',
      title: t('facilities.f1Title'),
      desc: t('facilities.f1Desc'),
      image: '/assets/training-area.jpg',
      tag: isRTL ? 'صالة الأداء الوظيفي' : 'FUNCTIONAL DECK',
      specs: isRTL
        ? ['سيور الجري المنحنية', 'دراجات الهواء', 'أجهزة التجديف', 'مسارات الزلاجات']
        : ['Curved Slat Treadmills', 'Air Ergometers', 'Plyo Boxes', 'Weighted Sled Tracks'],
    },
    {
      id: 'championship-pitch',
      title: t('facilities.f2Title'),
      desc: t('facilities.f2Desc'),
      image: '/assets/pitch-aerial.jpg',
      tag: isRTL ? 'الملعب القانوني المضاء' : 'TACTICAL STADIUM PITCH',
      specs: isRTL
        ? ['أرضية احترافية معتمدة', 'إضاءة ليلية عالية الشدة', 'تخطيط تكتيكي مصغر وكامل', 'مساحات تدريب فردية وجماعية']
        : ['FIFA-grade Synthetic Turf', 'Stadium Night Illumination', 'Micro & Macro Grids', 'High-Speed Scrimmage'],
    },
    {
      id: 'performance-hub',
      title: t('facilities.f3Title'),
      desc: t('facilities.f3Desc'),
      image: '/assets/hub-building.jpg',
      tag: isRTL ? 'مقر الأداء والتحليل' : 'CLUBHOUSE & RECOVERY',
      specs: isRTL
        ? ['قاعة التحليل التكتيكي بالفيديو', 'عيادة التغذية المخصصة', 'ورش العمل الذهنية', 'جلسات الاستشفاء والاسترخاء']
        : ['Video Breakdown Theater', 'Sports Nutrition Clinic', 'Mindset Workshop Studio', 'Athlete Lounge'],
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-pitch-900 relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('facilities.eyebrow')}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            {t('facilities.headline')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('facilities.subheadline')}
          </p>
        </div>

        {/* 3 Facility Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="rounded-3xl bg-pitch-950 border border-white/10 overflow-hidden shadow-2xl flex flex-col group hover:border-bsgold-400/50 transition-all duration-500"
            >
              {/* Image Section */}
              <div
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer"
                onClick={() => setActiveImage(fac.image)}
              >
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 text-bsgold-400 border border-bsgold-400/40 backdrop-blur-md">
                    {fac.tag}
                  </span>
                </div>
                <button
                  className="absolute bottom-4 right-4 p-2 rounded-xl bg-black/70 text-white hover:text-bsgold-400 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Enlarge image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Text Description & Specs */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight mb-3">
                    {fac.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {fac.desc}
                  </p>
                </div>

                {/* Specs pills */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {isRTL ? 'المواصفات والتجهيزات:' : 'Equipment & Features:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {fac.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-pitch-900 border border-white/5 text-slate-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full-res view */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20">
            <img
              src={activeImage}
              alt="Enlarged Facility View"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
