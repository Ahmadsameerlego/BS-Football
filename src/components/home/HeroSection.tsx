import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Play, Pause, Activity, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 'bassem-pitch',
      image: '/assets/bassem-coach.jpg',
      badge: isRTL ? 'إشراف مباشر من المؤسس' : 'DIRECT FOUNDER MENTORSHIP',
      titleMain: isRTL ? 'صناعة وتطوير' : 'BUILD THE COMPLETE',
      titleAccent: isRTL ? 'اللاعب المتكامل.' : 'FOOTBALLER.',
      description: isRTL
        ? 'مهارة فنية دقيقة. قوة وبنية بدنية استثنائية. صلابة ذهنية لا تلين. تغذية علاجية مخصصة. استشفاء متقدم. منظومة احترافية متكاملة تبنى كلياً حول اللاعب.'
        : 'Technical ability. Physical power. Mental resilience. Targeted nutrition. Active recovery. One integrated performance ecosystem built specifically around the modern player.',
      tag: isRTL ? 'التدريب التكتيكي والفردي' : 'Tactical Mastery & 1-on-1',
      statKey: isRTL ? 'كابتن باسم سليمان' : 'Coach Bassem Soliman',
      statVal: isRTL ? 'المدير الفني' : 'Technical Director',
    },
    {
      id: 'benzema-stars',
      image: '/assets/athlete-benzema.jpg',
      badge: isRTL ? 'ثقة كبار النجوم العالميين' : 'TRUSTED BY WORLD-CLASS ICONS',
      titleMain: isRTL ? 'إعداد خاص' : 'PREPARATION FOR',
      titleAccent: isRTL ? 'لأبطال العالم والمحترفين.' : 'BALLON D’OR WINNERS.',
      description: isRTL
        ? 'جلسات تدريبية وإعداد فني وبدني خاص لنخبة لاعبي دوري المحترفين والنجوم العالميين مثل كريم بنزيما وبشار عربي وصبا توفيق.'
        : 'High-performance private preparation trusted by Ballon d’Or champions, Saudi Pro League strikers, and national team pioneers.',
      tag: isRTL ? 'نخبة اللاعبين المحترفين' : 'Pro League & Global Elite',
      statKey: isRTL ? 'كريم بنزيما' : 'Karim Benzema',
      statVal: isRTL ? 'إعداد خاص' : 'Private Performance Prep',
    },
    {
      id: 'pitch-aerial',
      image: '/assets/pitch-aerial.jpg',
      badge: isRTL ? 'بنية تحتية بمعايير دولية' : 'WORLD-CLASS INFRASTRUCTURE',
      titleMain: isRTL ? 'ملاعب مضاءة' : 'NIGHT-LIT STADIUM',
      titleAccent: isRTL ? 'للمحاكاة التكتيكية.' : 'TACTICAL ARENAS.',
      description: isRTL
        ? 'ملعب قانوني مضاء بأحدث أنظمة الإضاءة الليلية لتدريب السرعة العالية والمباريات التكتيكية المصغرة والمحاكاة الواقعية.'
        : 'Full-scale championship synthetic pitch with stadium floodlights for game-realistic tactical simulations and high-tempo scrimmage.',
      tag: isRTL ? 'محاكاة واقع المباريات' : 'Matchday Realistic Simulation',
      statKey: isRTL ? 'ملاعب معتمدة' : 'Championship Standard',
      statVal: isRTL ? 'إضاءة ليلية كاملة' : 'Full Stadium Illumination',
    },
    {
      id: 'training-area',
      image: '/assets/training-area.jpg',
      badge: isRTL ? 'مختبر الأداء الحركي' : 'THE KINETIC PERFORMANCE LAB',
      titleMain: isRTL ? 'المحرك البدني' : 'SPORTS SCIENCE MEETS',
      titleAccent: isRTL ? 'وعلوم الرياضة الحديثة.' : 'ATHLETIC INSTINCT.',
      description: isRTL
        ? 'صالة الأداء الوظيفي المفتوحة على العشب: سيور الجري المنحنية، أجهزة التجديف، دراجات الهواء، ومنصات القفز لتطوير التحمل والسرعة.'
        : 'Dedicated multi-functional performance deck featuring curved treadmills, air bikes, rowing ergometers, plyo platforms, and weighted sled tracks.',
      tag: isRTL ? 'التحمل العضلي والسرعة' : 'Muscular Durability & Power',
      statKey: isRTL ? 'صالة الأداء الوظيفي' : 'Functional Turf Deck',
      statVal: isRTL ? 'أجهزة قياس متطورة' : 'Biomechanical Testing',
    },
    {
      id: 'camp-sharm',
      image: '/assets/camp-sharm-1.jpg',
      badge: isRTL ? 'معسكرات الأداء المكثفة' : 'IMMERSIVE PERFORMANCE CAMPS',
      titleMain: isRTL ? 'تدريب. منافسة.' : 'TRAIN. COMPETE.',
      titleAccent: isRTL ? 'استشفاء وتطوير.' : 'RECOVER. DEVELOP.',
      description: isRTL
        ? 'معسكرات تدريبية مغلقة ومعايشة كاملة تصقل الانضباط التنافسي والجاهزية البدنية والتكتيكية في بيئات رياضية ساحلية متكاملة.'
        : 'Intensive residential camps designed to transform athletic discipline, match fitness, team bonding, and tactical IQ.',
      tag: isRTL ? 'معسكر شرم الشيخ النخبوي' : 'Sharm El-Sheikh Camps',
      statKey: isRTL ? 'معايشة احترافية' : 'Residential Immersion',
      statVal: isRTL ? 'أيام تدريبية مكثفة' : 'Holistic Daily Regime',
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalSlides, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (timerRef.current) clearInterval(timerRef.current);
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 6000);
    }
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-pitch-950 select-none">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.titleAccent}
            className={`w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.2] transform transition-transform duration-[8000ms] ${
              idx === currentSlide ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Layered cinematic vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-pitch-950/75 to-pitch-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-pitch-950/90 via-pitch-950/50 to-pitch-950/85" />
          <div className="absolute inset-0 bg-subtle-grid opacity-25" />
        </div>
      ))}

      {/* Atmospheric radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-bsgold-500/15 rounded-full blur-[160px] pointer-events-none z-1" />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Main Typography Column (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-bsgold-400/40 backdrop-blur-md mb-5 shadow-[0_0_15px_rgba(234,179,8,0.25)]">
              <Zap className="w-3.5 h-3.5 text-bsgold-400 fill-bsgold-400" />
              <span className="text-[11px] sm:text-xs font-black tracking-widest text-bsgold-300 uppercase font-mono">
                {activeSlide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black tracking-tight text-3xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.1] text-white uppercase mb-5 drop-shadow-md">
              <span className="block">{activeSlide.titleMain}</span>
              <span className="block bg-gradient-to-r from-white via-bsgold-300 to-amber-400 bg-clip-text text-transparent">
                {activeSlide.titleAccent}
              </span>
            </h1>

            {/* Narrative text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-xl mb-8 drop-shadow text-balance">
              {activeSlide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-gradient-to-r from-bsgold-400 via-bsgold-500 to-amber-500 hover:from-bsgold-300 hover:to-amber-400 text-black text-xs sm:text-sm font-black tracking-wider uppercase rounded-xl shadow-[0_0_25px_rgba(234,179,8,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>{t('hero.ctaPrimary')}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </a>

              <a
                href="#pillars"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/60 hover:bg-black/80 text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl border border-white/20 hover:border-bsgold-400/60 backdrop-blur-xl transition-all duration-300"
              >
                <span>{t('hero.ctaSecondary')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Telemetry HUD & Slide Controller (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Telemetry Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-pitch-950/90 border border-bsgold-400/35 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-bsgold-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    {isRTL ? 'مؤشرات الأداء الحي' : 'LIVE ATHLETE TELEMETRY'}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {isRTL ? 'نشط' : 'ACTIVE'}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-xl bg-pitch-900/90 border border-white/5 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-300 font-medium">
                    {isRTL ? 'سرعة اتخاذ القرار باللمسة الأولى' : 'Decision Velocity (1st Touch)'}
                  </span>
                  <span className="text-xs font-mono font-bold text-bsgold-400 shrink-0">0.28s</span>
                </div>

                <div className="p-2.5 rounded-xl bg-pitch-900/90 border border-white/5 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-300 font-medium">
                    {isRTL ? 'معدل المسح البصري التكتيكي' : 'Scanning Frequency (360°)'}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">+42%</span>
                </div>

                <div className="p-2.5 rounded-xl bg-pitch-900/90 border border-white/5 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-300 font-medium">
                    {isRTL ? 'القوة الانفجارية الحركية' : 'Peak Kinetic Power Output'}
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-400 shrink-0">940 Watts</span>
                </div>

                <div className="p-2.5 rounded-xl bg-pitch-900/90 border border-white/5 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-300 font-medium">
                    {isRTL ? 'مؤشر الثبات والانسياب الذهني' : 'Inner Game Flow Index'}
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-300 shrink-0">98 / 100</span>
                </div>
              </div>

              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">{activeSlide.statKey}</span>
                <span className="font-bold text-bsgold-400">{activeSlide.statVal}</span>
              </div>
            </div>

            {/* Slider Navigation Bar */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-pitch-950/80 border border-white/10 backdrop-blur-xl flex items-center justify-between gap-3">
              {/* Slide Indicators */}
              <div className="flex items-center gap-1.5 flex-1">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? 'w-7 sm:w-8 bg-bsgold-400 shadow-[0_0_8px_rgba(234,179,8,0.6)]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Play / Pause Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 sm:p-2 rounded-lg bg-pitch-900 hover:bg-pitch-850 text-slate-300 hover:text-white border border-white/5 transition-colors"
                aria-label={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-bsgold-400" />}
              </button>

              {/* Prev / Next Chevrons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={prevSlide}
                  className="p-1.5 sm:p-2 rounded-lg bg-pitch-900 hover:bg-pitch-850 text-slate-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1.5 sm:p-2 rounded-lg bg-pitch-900 hover:bg-pitch-850 text-slate-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Credibility / Key Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 pt-4">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 p-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
          <div className="p-3 text-center rounded-xl bg-pitch-900/60 border border-white/5">
            <div className="font-display font-black text-xl sm:text-2xl text-bsgold-400">
              {t('hero.stat1Number')}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium uppercase mt-0.5">
              {t('hero.stat1Label')}
            </div>
          </div>

          <div className="p-3 text-center rounded-xl bg-pitch-900/60 border border-white/5">
            <div className="font-display font-black text-xl sm:text-2xl text-white">
              {t('hero.stat2Number')}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium uppercase mt-0.5">
              {t('hero.stat2Label')}
            </div>
          </div>

          <div className="p-3 text-center rounded-xl bg-pitch-900/60 border border-white/5">
            <div className="font-display font-black text-xl sm:text-2xl text-bsgold-400">
              {t('hero.stat3Number')}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium uppercase mt-0.5">
              {t('hero.stat3Label')}
            </div>
          </div>

          <div className="p-3 text-center rounded-xl bg-pitch-900/60 border border-white/5">
            <div className="font-display font-black text-xl sm:text-2xl text-white">
              {t('hero.stat4Number')}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium uppercase mt-0.5">
              {t('hero.stat4Label')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
