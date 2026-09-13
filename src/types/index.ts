export type Language = 'en' | 'ar';

export interface Coach {
  id: string;
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  specialty: { en: string; ar: string };
  bio: { en: string; ar: string };
  credentials: string[];
  image: string;
  featured?: boolean;
}

export interface Athlete {
  id: string;
  name: { en: string; ar: string };
  position: { en: string; ar: string };
  club: { en: string; ar: string };
  highlight: { en: string; ar: string };
  story: { en: string; ar: string };
  image: string;
  tag: { en: string; ar: string };
}

export interface Program {
  id: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  targetAudience: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
  pillarsInvolved: string[];
  ageRange: string;
  badge?: { en: string; ar: string };
}

export interface Camp {
  id: string;
  title: { en: string; ar: string };
  location: { en: string; ar: string };
  status: 'upcoming' | 'archived' | 'active';
  dateRange: { en: string; ar: string };
  description: { en: string; ar: string };
  highlights: { en: string[]; ar: string[] };
  schedule: {
    time: string;
    activity: { en: string; ar: string };
    type: string;
  }[];
  gallery: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: { en: string; ar: string };
  context: { en: string; ar: string };
  challenge: { en: string; ar: string };
  approach: { en: string; ar: string };
  outcome: { en: string; ar: string };
  tag: { en: string; ar: string };
  image: string;
}

export interface BookingSubmission {
  id: string;
  createdAt: string;
  playerName: string;
  age: string;
  position: string;
  currentLevel: string;
  goal: string;
  program: string;
  phone: string;
  email: string;
  preferredTime?: string;
  notes?: string;
  status: 'new' | 'contacted' | 'scheduled' | 'archived';
}
