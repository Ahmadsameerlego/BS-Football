import { Coach } from '../types';

export const coachesData: Coach[] = [
  {
    id: 'bassem-soliman',
    name: {
      en: 'Coach Bassem Soliman',
      ar: 'كابتن باسم سليمان',
    },
    role: {
      en: 'Founder & Technical Director',
      ar: 'المؤسس والمدير الفني',
    },
    specialty: {
      en: 'Technical Mastery, Position Biomechanics & Game Transfer',
      ar: 'الإتقان الفني، بيوميكانيكا الحركة والتحول لواقع المباريات',
    },
    bio: {
      en: 'Pioneer of the 5-pillar integrated development methodology in the Middle East. Coach Bassem specializes in sharpening elite players’ technical execution, speed of thought, and position-specific instinct under match stress.',
      ar: 'رائد منهجية التطوير الكروي المتكامل عبر الأركان الخمسة في المنطقة. متخصص في صقل المهارات الفنية الدقيقة للاعبين، وسرعة اتخاذ القرار، والتمركز التكتيكي تحت ضغط المباريات العالي.',
    },
    credentials: [
      'Founder of BS Football Hub',
      'UEFA / International Coaching Standards',
      'Trainer of Pro League Players & Ballon d’Or Champions',
      'Specialist in 1-on-1 Pro Player Diagnostic Sessions'
    ],
    image: '/assets/coach-bassem.jpg',
    featured: true,
  },
  {
    id: 'mostafa-soliman',
    name: {
      en: 'Coach Mostafa Soliman',
      ar: 'كابتن مصطفى سليمان',
    },
    role: {
      en: 'Conditioning & High-Performance Fitness Coach',
      ar: 'مدرب الأحمال البدنية والأداء العالي',
    },
    specialty: {
      en: 'Power Output, COD Agility & Muscular Durability',
      ar: 'القوة الانفجارية، الرشاقة وتغيير الاتجاهات، والتحمل العضلي',
    },
    bio: {
      en: 'Utilizes modern sports science testing to evaluate athletic baselines, sprint kinetics, and injury prevention regimes calibrated for the demands of the modern 90+ minute game.',
      ar: 'يطبق أحدث الاختبارات العلمية لقياس المؤشرات البدنية الحركية، ميكانيكا السرعة، وبرامج الوقاية من الإصابات المجهزة لمتطلبات رتم المباريات السريعة.',
    },
    credentials: [
      'Certified Sports Science & Conditioning Specialist',
      'Modern High-Intensity Kinetic Assessment Expert',
      'Developer of BS Muscular Durability Protocols'
    ],
    image: '/assets/coach-mostafa.jpg',
    featured: false,
  },
  {
    id: 'ahmed-araby',
    name: {
      en: 'Ahmed Al-Araby',
      ar: 'أحمد العربي',
    },
    role: {
      en: 'Goalkeeper Specialist Coach',
      ar: 'مدرب حراس المرمى التخصصي',
    },
    specialty: {
      en: 'Reflex Acceleration, Box Aerial Domination & Distribution',
      ar: 'سرعة ردة الفعل، السيطرة على الكرات العرضية، وبناء اللعب',
    },
    bio: {
      en: 'Dedicated to developing modern goalkeepers with feline reflexes, vocal defensive leadership, and precise distribution as the first playmaker of the team.',
      ar: 'متخصص في تطوير حراس المرمى العصريين بردود أفعال استثنائية، توجيه دفاعي قيادي، وبناء الهجمات بدقة عالية كأول صانع ألعاب في الفريق.',
    },
    credentials: [
      'Certified Pro Goalkeeper Specialist',
      'Expert in Modern Footwork & Angles of Coverage',
      'High-Speed Ball Machine Reaction Training'
    ],
    image: '/assets/coach-araby.jpg',
    featured: false,
  },
  {
    id: 'mahmoud-kholy',
    name: {
      en: 'Dr. Mahmoud El-Kholy',
      ar: 'د. محمود الخولي',
    },
    role: {
      en: 'Mental Performance Coach & Sports Psychologist',
      ar: 'أخصائي الإعداد والأداء الذهني الرياضي',
    },
    specialty: {
      en: 'Inner Game Profiling, Match Anxiety Neutralization & Flow State',
      ar: 'بناء ملف اللعبة الداخلية، التغلب على قلق المباريات، والتركيز العالي',
    },
    bio: {
      en: 'Spearheads the Athlete Mental Methodology. Helps footballers discover personality traits, dissolve self-limiting beliefs, and unlock unshakeable game-day focus.',
      ar: 'يقود منهجية التطوير الذهني للرياضيين في BS. يساعد اللاعبين على اكتشاف شخصيتهم وتخطي الحواجز النفسية لتحقيق أقصى درجات الثبات الانفعالي داخل الملعب.',
    },
    credentials: [
      'Doctorate / Specialist in Sports Psychology',
      'Architect of the BS Inner Game Profile System',
      'Consultant to Professional & Youth Athletes'
    ],
    image: '/assets/coach-kholy.jpg',
    featured: false,
  },
  {
    id: 'hassan-hamed',
    name: {
      en: 'Dr. Hassan Hamed',
      ar: 'د. حسن حامد',
    },
    role: {
      en: 'Mental Resilience & Team Dynamics Coach',
      ar: 'أخصائي الصلابة الذهنية وتناغم الفرق',
    },
    specialty: {
      en: 'Team Mental Training (TMT), Clutch Execution & Group Harmony',
      ar: 'التدريب الذهني الجماعي (TMT)، الحسم تحت الضغط، وروح الفريق',
    },
    bio: {
      en: 'Specializes in transforming individual mental grit into collective squad cohesion, helping players communicate effectively and maintain unbreakable resolve in high-stakes fixtures.',
      ar: 'خبير في تحويل الصلابة الذهنية الفردية إلى تناغم جماعي للتشكيلة بالكامل، وتطوير التواصل الفعال والثبات الذهني في المباريات الحاسمة.',
    },
    credentials: [
      'Specialist in Team Psychological Cohesion (TMT)',
      'High-Performance Mindset Coach',
      'Tactical Stress Inoculation Facilitator'
    ],
    image: '/assets/coach-hassan.jpg',
    featured: false,
  },
];
