import { Program } from '../types';

export const programsData: Program[] = [
  {
    id: 'private-1on1',
    title: {
      en: '1-on-1 Private Mastery',
      ar: 'التطوير الفردي الخاص (1-on-1)',
    },
    tagline: {
      en: 'Direct Diagnostic Mentorship with Coach Bassem Soliman',
      ar: 'إشراف مباشر وتشخيص فني دقيق مع الكابتن باسم سليمان',
    },
    targetAudience: {
      en: 'Ambitious Youth, Academy Talents, and Pro Players seeking elite precision',
      ar: 'المواهب الطموحة ولاعبو الأكاديميات والمحترفون الساعون للكمال الفني',
    },
    ageRange: 'Ages 7 to Pro',
    pillarsInvolved: ['Technical', 'Mental', 'Physical', 'Nutrition'],
    features: {
      en: [
        'Detailed video diagnostic analysis and mechanical correction',
        'Biomechanical ball control & shooting kinetics under pressure',
        'Customized weekly load and performance tracking',
        '1-on-1 Sports Psychology & Inner Game Profiling',
      ],
      ar: [
        'تحليل فيديو تشخيصي مفصل وتصحيح الحركات البيوميكانيكية',
        'ميكانيكا التحكم بالكرة والتسديد المتقن تحت الضغط العالي',
        'متابعة أسبوعية مخصصة للأحمال ومعدلات التطور',
        'جلسات فردية مع أخصائي الإعداد الذهني وبناء الثقة',
      ],
    },
    badge: {
      en: 'High-Demand / Limited Capacity',
      ar: 'طلب نخبوي / مقاعد محدودة',
    },
  },
  {
    id: 'position-cohorts',
    title: {
      en: 'Position-Specific Elite Cohorts',
      ar: 'المجموعات التخصصية بحسب المراكز',
    },
    tagline: {
      en: 'Micro-Group Development by Tactical Pitch Role',
      ar: 'تدريب مكثف في مجموعات نوعية صغيرة بحسب المركز في الملعب',
    },
    targetAudience: {
      en: 'Competitive players categorized into Strikers, Midfielders, Defenders, and Goalkeepers',
      ar: 'اللاعبون التنافسيون مقسمون لمجموعات (مهاجمين، وسط، مدافعين، حراس مرمى)',
    },
    ageRange: 'Ages 10 to 21',
    pillarsInvolved: ['Technical', 'Physical', 'Mental'],
    features: {
      en: [
        'Strikers: Box movement, first-time finishing, header mechanics & deceptive runs',
        'Midfielders: 360° scanning, half-turn transitions, line-breaking distribution',
        'Defenders: 1v1 defensive posture, aerial clearances, depth containment',
        'Goalkeepers: Explosive diving kinetics, reaction balls, cross interception',
      ],
      ar: [
        'المهاجمون: التحرك داخل الصندوق، الإنهاء من اللمسة الأولى، والتمويه الذكي',
        'خط الوسط: المسح الميداني ٣٦٠ درجة، الاستلام في وضعية نصف الدوران، والتمرير الطولي',
        'المدافعون: التمركز في الصراعات الثنائية، التغطية العكسية، وتأمين العمق',
        'حراس المرمى: القفز والانقضاض الانفجاري، الكرات العرضية، والكرات العكسية',
      ],
    },
    badge: {
      en: 'Core BS Signature',
      ar: 'البرنامج الأكثر طلباً',
    },
  },
  {
    id: 'team-performance',
    title: {
      en: 'Team & Club Performance Acceleration',
      ar: 'تطوير وتجهيز أداء الفرق والأندية',
    },
    tagline: {
      en: 'Full-Squad Synchronization Across All 5 Pillars',
      ar: 'مزامنة وتطوير التشكيلة الكاملة عبر الأركان الخمسة بالتوازي',
    },
    targetAudience: {
      en: 'School varsity teams, club squads, academies, and competitive tournament rosters',
      ar: 'فرق المدارس، تشكيلات الأندية، الأكاديميات، وفرق البطولات الرسمية',
    },
    ageRange: 'All Squad Categories',
    pillarsInvolved: ['Technical', 'Physical', 'Mental', 'Nutrition', 'Recovery'],
    features: {
      en: [
        'Unified tactical playing model and synchronized high-press structures',
        'Team Mental Training (TMT) workshops for locker room unity and matchday resilience',
        'Group baseline conditioning and injury mitigation screening',
        'Nutritional protocols tailored to match schedules and travel recovery',
      ],
      ar: [
        'بناء أسلوب لعب تكتيكي موحد والضغط الجماعي المنظم',
        'ورش عمل التدريب الذهني الجماعي (TMT) لتلاحم غرفة الملابس والثبات تحت الضغط',
        'تقييم لياقي بدني شامل للتشكيلة وبرامج وقاية من الإصابات الجماعية',
        'جداول تغذية واستشفاء مجهزة لجدول مباريات الدوري والسفر',
      ],
    },
    badge: {
      en: 'Full Squad Integration',
      ar: 'جاهزية كاملة للفرق',
    },
  },
  {
    id: 'youth-grassroots',
    title: {
      en: 'Grassroots Foundation Academy',
      ar: 'تأسيس البراعم والمواهب الصاعدة',
    },
    tagline: {
      en: 'Starting from Age 5 — The Lowest Entry Window in the Market',
      ar: 'يبدأ من عمر ٥ سنوات — البداية المبكرة الأقوى في المنطقة',
    },
    targetAudience: {
      en: 'Young football enthusiasts building foundational motor skills and passion',
      ar: 'الأطفال والمواهب الواعدة لبناء التوافق الحركي والشغف الكروي المبكر',
    },
    ageRange: 'Ages 5 to 10',
    pillarsInvolved: ['Technical', 'Physical', 'Mental'],
    features: {
      en: [
        'Bilateral coordination, balance, agility, and foot-eye neuromuscular mapping',
        'Joyful, repetitive ball contact with all surfaces of both feet',
        'Building sportsmanship, discipline, focus, and social confidence',
        'Smooth transition into competitive youth academy tiers',
      ],
      ar: [
        'التوافق العضلي العصبي، التوازن، الرشاقة، والتناسق الحركي البصري',
        'اللمس المتكرر للكرة بجميع أسطح القدمين في بيئة محفزة وممتعة',
        'غرس الانضباط والتركيز والشخصية الإيجابية والشغف باللعبة',
        'تهيئة وانتقال سلس لمرحلة الفئات السنية التنافسية',
      ],
    },
    badge: {
      en: 'Starting Age 5+',
      ar: 'من عمر ٥ سنوات',
    },
  },
];
