import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare, Shield, Clock } from 'lucide-react';

export const AssessmentBookingSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { addSubmission } = useData();

  const [formData, setFormData] = useState({
    playerName: '',
    age: '',
    position: 'Midfielder',
    currentLevel: 'Academy / School Competitive',
    goal: 'Complete 5-Pillar Holistic Evolution',
    program: '1-on-1 Private Session with Coach Bassem',
    phone: '',
    email: '',
    preferredTime: '6:00 PM – 7:00 PM',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await addSubmission(formData);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const timeSlots = [
    '4:00 PM – 5:00 PM',
    '5:00 PM – 6:00 PM',
    '6:00 PM – 7:00 PM',
    '7:00 PM – 8:00 PM',
    '8:00 PM – 9:00 PM',
    '9:00 PM – 10:00 PM',
  ];

  return (
    <section id="assessment" className="py-24 bg-pitch-900/90 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-bsgold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Hub Values */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-bsgold-400/30 text-xs font-black tracking-widest text-bsgold-400 uppercase mb-4">
                <span>{t('booking.eyebrow')}</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight mb-6">
                {t('booking.headline')}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {t('booking.subheadline')}
              </p>

              {/* Direct Contacts Card */}
              <div className="p-6 rounded-2xl bg-pitch-950 border border-white/10 space-y-4 mb-8">
                <div className="text-xs font-black text-bsgold-400 uppercase tracking-widest pb-2 border-b border-white/10">
                  {t('booking.directContactTitle')}
                </div>

                <a
                  href="https://wa.me/966563067676"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-bsgold-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span>{t('booking.directPhone')} (WhatsApp / Call)</span>
                </a>

                <a
                  href="tel:+966596134150"
                  className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-bsgold-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{t('booking.mentalPhone')}</span>
                </a>

                <a
                  href="mailto:Bassemsoliman1998@gmail.com"
                  className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-bsgold-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-amber-500/20 text-bsgold-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{t('booking.email')}</span>
                </a>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 pt-2">
                  <div className="p-2 rounded-lg bg-white/5 text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{t('booking.location')}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-pitch-950/60 border border-white/5 text-xs text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-bsgold-400 shrink-0" />
              <span>
                {isRTL
                  ? 'جميع البيانات المسجلة تخضع لخصوصية تامة ولتقييم كادر الأداء الفني فقط.'
                  : 'All player performance profiles are strictly confidential and reviewed only by BS staff.'}
              </span>
            </div>
          </div>

          {/* Right Column: Multi-Step Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-pitch-950 border border-bsgold-400/30 shadow-2xl relative">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-bsgold-400/20 border border-bsgold-400 text-bsgold-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-3">
                    {t('booking.form.successTitle')}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-8">
                    {t('booking.form.successMsg')}
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        playerName: '',
                        age: '',
                        position: 'Midfielder',
                        currentLevel: 'Academy / School Competitive',
                        goal: 'Complete 5-Pillar Holistic Evolution',
                        program: '1-on-1 Private Session with Coach Bassem',
                        phone: '',
                        email: '',
                        preferredTime: '6:00 PM – 7:00 PM',
                        notes: '',
                      });
                    }}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    {isRTL ? 'تقديم طلب لاعب آخر' : 'Submit Another Athlete Dossier'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Player Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        {t('booking.form.playerName')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.playerName}
                        onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
                        placeholder={isRTL ? 'مثال: يوسف المطيري' : 'e.g. Youssef Al-Mutairi'}
                        className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                      />
                    </div>

                    {/* Player Age */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        {t('booking.form.playerAge')} *
                      </label>
                      <input
                        type="number"
                        min="5"
                        max="45"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder={isRTL ? 'مثال: 16' : 'e.g. 16'}
                        className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Position */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        {t('booking.form.position')} *
                      </label>
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                      >
                        <option value="Forward / Striker">{t('booking.form.positions.striker')}</option>
                        <option value="Winger (L/R)">{t('booking.form.positions.winger')}</option>
                        <option value="Central Midfielder">{t('booking.form.positions.midfielder')}</option>
                        <option value="Defender">{t('booking.form.positions.defender')}</option>
                        <option value="Goalkeeper">{t('booking.form.positions.goalkeeper')}</option>
                      </select>
                    </div>

                    {/* Current Level */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        {t('booking.form.currentLevel')} *
                      </label>
                      <select
                        value={formData.currentLevel}
                        onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                      >
                        <option value="Grassroots (Ages 5-10)">{t('booking.form.levels.grassroots')}</option>
                        <option value="Academy / Competitive">{t('booking.form.levels.academy')}</option>
                        <option value="Club Youth / Semi-Pro">{t('booking.form.levels.semiPro')}</option>
                        <option value="Professional">{t('booking.form.levels.pro')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Goal */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      {t('booking.form.goal')} *
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                    >
                      <option value="Complete 5-Pillar Holistic Evolution">{t('booking.form.goals.complete')}</option>
                      <option value="Position-Specific Technical Mastery">{t('booking.form.goals.technical')}</option>
                      <option value="Strength, Speed & Conditioning Engine">{t('booking.form.goals.physical')}</option>
                      <option value="Mindset, Focus & In-Game Confidence">{t('booking.form.goals.mental')}</option>
                      <option value="Metabolic Nutrition & Lifestyle Architecture">{t('booking.form.goals.nutrition')}</option>
                      <option value="Injury Prevention & Fast Recovery">{t('booking.form.goals.recovery')}</option>
                    </select>
                  </div>

                  {/* Preferred Program Format */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      {t('booking.form.program')} *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                    >
                      <option value="1-on-1 Private Session with Coach Bassem">{t('booking.form.formats.private')}</option>
                      <option value="Position-Specific Elite Group">{t('booking.form.formats.cohort')}</option>
                      <option value="Residential Training Camp">{t('booking.form.formats.camp')}</option>
                      <option value="Club / Squad Full Assessment">{t('booking.form.formats.team')}</option>
                    </select>
                  </div>

                  {/* Preferred Time Window */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-bsgold-400" />
                      <span>{t('booking.form.timeSlot')}</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setFormData({ ...formData, preferredTime: slot })}
                          className={`py-2 px-2.5 rounded-lg text-xs font-mono transition-all border ${
                            formData.preferredTime === slot
                              ? 'bg-bsgold-400 text-black font-bold border-bsgold-400'
                              : 'bg-pitch-900 text-slate-300 border-white/5 hover:border-white/20'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        {t('booking.form.phone')} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        {t('booking.form.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="athlete@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      {t('booking.form.notes')}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={isRTL ? 'أي تفاصيل عن تاريخ اللاعب، الإصابات السابقة، أو متطلبات خاصة...' : 'Any previous injuries, club background, or specific requirements...'}
                      className="w-full px-4 py-3 rounded-xl bg-pitch-900 border border-white/10 text-white text-sm focus:outline-none focus:border-bsgold-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-bsgold-400 via-bsgold-500 to-amber-500 hover:from-bsgold-300 hover:to-amber-400 text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-bsgold-500/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{t('booking.form.submitting')}</span>
                    ) : (
                      <>
                        <span>{t('booking.form.submit')}</span>
                        <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
