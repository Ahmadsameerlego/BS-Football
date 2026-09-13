import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-1 p-1 bg-pitch-800/80 border border-white/10 rounded-full backdrop-blur-md ${className}`}>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
          language === 'en'
            ? 'bg-gradient-to-r from-bsgold-400 to-bsgold-500 text-black shadow-md font-bold'
            : 'text-slate-400 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        <Globe className="w-3 h-3" />
        <span>EN</span>
      </button>

      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 font-arabic ${
          language === 'ar'
            ? 'bg-gradient-to-r from-bsgold-400 to-bsgold-500 text-black shadow-md font-bold'
            : 'text-slate-400 hover:text-white'
        }`}
        aria-label="التبديل إلى العربية"
      >
        <span>عربي</span>
      </button>
    </div>
  );
};
