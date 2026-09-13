import { Camp } from '../types';

export const campsData: Camp[] = [
  {
    id: 'sharm-el-sheikh',
    title: {
      en: 'Sharm El-Sheikh Elite Training Camp',
      ar: 'معسكر شرم الشيخ التدريبي النخبوي',
    },
    location: {
      en: 'Sharm El-Sheikh, Egypt',
      ar: 'شرم الشيخ، جمهورية مصر العربية',
    },
    status: 'archived',
    dateRange: {
      en: 'Official Archive Case Study',
      ar: 'دراسة حالة وأرشيف معسكر رسمي',
    },
    description: {
      en: 'A defining milestone in player development. Bringing athletes together under one united BS identity from Cairo International Airport to a private coastal high-performance training base.',
      ar: 'محطة مفصلية في مسيرة تطوير لاعبي BS؛ حيث اجتمع الرياضيون بهوية واحدة متكاملة من مطار القاهرة الدولي إلى مقر إقامة وتدريب رياضي متخصص على ساحل البحر الأحمر.',
    },
    highlights: {
      en: [
        'Intensive gym strength & conditioning sessions at sunrise',
        'High-tempo stadium tactical drills and game simulation',
        'Evening mental performance workshops & game film breakdown',
        'Structured athletic nutrition and coastal ocean active recovery',
      ],
      ar: [
        'حصص تدريب بدني وقوة مكثفة في الصباح الباكر بصالة الحديد',
        'تمارين تكتيكية ومباريات محاكاة عالية السرعة على أرض الملعب',
        'ورش عمل مسائية في الإعداد الذهني وتحليل لقطات الفيديو',
        'وجبات غذائية محسوبة بدقة مع بروتوكولات استشفاء بحري نشط',
      ],
    },
    schedule: [
      {
        time: '07:00 - 08:30',
        activity: { en: 'Sunrise Gym Strength & Conditioning', ar: 'تدريب صالة الحديد والقوة الصباحية' },
        type: 'Physical',
      },
      {
        time: '09:00 - 10:00',
        activity: { en: 'Calculated Athletic Breakfast & Hydration', ar: 'إفطار رياضي محسوب السعرات والسوائل' },
        type: 'Nutrition',
      },
      {
        time: '11:00 - 12:30',
        activity: { en: 'Inner Game Profile & Tactical Video Session', ar: 'جلسة الإعداد الذهني وتحليل الفيديو' },
        type: 'Mental',
      },
      {
        time: '16:30 - 18:30',
        activity: { en: 'Stadium Tactical Mastery & Match Scrimmage', ar: 'التدريب التكتيكي بالملعب والمناورة الكروية' },
        type: 'Technical',
      },
      {
        time: '19:30 - 20:30',
        activity: { en: 'Contrast Recovery & Joint Decompression', ar: 'جلسات الاستشفاء واستعادة الحيوية' },
        type: 'Recovery',
      },
    ],
    gallery: [
      '/assets/camp-sharm-1.jpg',
      '/assets/camp-sharm-2.jpg',
      '/assets/camp-sharm-3.jpg',
      '/assets/camp-sharm-4.jpg',
      '/assets/training-area.jpg',
      '/assets/pitch-aerial.jpg',
    ],
  },
];
