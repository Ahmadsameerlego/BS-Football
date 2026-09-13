import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { X, Shield, Trash2, Download, Phone, Mail, Clock } from 'lucide-react';

export const AdminModal: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { isAdminOpen, setIsAdminOpen, submissions, updateSubmissionStatus, deleteSubmission } = useData();
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'scheduled'>('all');

  if (!isAdminOpen) return null;

  const filtered = submissions.filter((s) => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(submissions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `bs_athlete_leads_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-xl">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-pitch-950 border border-bsgold-400/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-pitch-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-bsgold-400 text-black">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-white uppercase tracking-tight">
                {t('admin.title')}
              </h2>
              <p className="text-xs text-slate-400">
                {isRTL ? 'إدارة بيانات واستفسارات الرياضيين' : 'Athlete Assessment & Hub Management Console'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportJSON}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pitch-800 text-xs text-slate-200 hover:text-white border border-white/10"
              title="Export Leads"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isRTL ? 'تصدير البيانات' : 'Export Data'}</span>
            </button>

            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="p-4 bg-pitch-900 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            {(['all', 'new', 'contacted', 'scheduled'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === st
                    ? 'bg-bsgold-400 text-black shadow'
                    : 'bg-pitch-950 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {st} ({submissions.filter((s) => st === 'all' || s.status === st).length})
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Total Dossiers: {submissions.length}
          </div>
        </div>

        {/* Submissions List Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-500 text-sm">
              {t('admin.noBookings')}
            </div>
          ) : (
            filtered.map((sub) => (
              <div
                key={sub.id}
                className="p-5 rounded-2xl bg-pitch-900/90 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-black text-lg text-white uppercase">
                      {sub.playerName}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-pitch-950 text-bsgold-400 border border-white/5">
                      Age {sub.age} • {sub.position}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        sub.status === 'new'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : sub.status === 'contacted'
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {sub.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 font-medium">
                    <span className="text-bsgold-400">{sub.program}</span> — {sub.goal}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                    <a
                      href={`https://wa.me/${sub.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-emerald-400 hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{sub.phone}</span>
                    </a>
                    <a
                      href={`mailto:${sub.email}`}
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Mail className="w-3 h-3" />
                      <span>{sub.email}</span>
                    </a>
                    {sub.preferredTime && (
                      <span className="flex items-center gap-1 text-slate-300">
                        <Clock className="w-3 h-3 text-bsgold-400" />
                        <span>{sub.preferredTime}</span>
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-slate-500">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {sub.notes && (
                    <div className="p-2.5 rounded-lg bg-pitch-950 text-xs text-slate-400 mt-2 border border-white/5">
                      <span className="font-bold text-slate-300">Notes:</span> {sub.notes}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <select
                    value={sub.status}
                    onChange={(e) => updateSubmissionStatus(sub.id, e.target.value as any)}
                    className="px-3 py-1.5 rounded-lg bg-pitch-950 border border-white/10 text-xs text-white focus:border-bsgold-400 focus:outline-none"
                  >
                    <option value="new">Mark New</option>
                    <option value="contacted">Mark Contacted</option>
                    <option value="scheduled">Mark Scheduled</option>
                    <option value="archived">Archive</option>
                  </select>

                  <button
                    onClick={() => deleteSubmission(sub.id)}
                    className="p-2 text-slate-500 hover:text-red-400 bg-pitch-950 rounded-lg border border-white/5 hover:border-red-500/30"
                    title="Delete record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-pitch-900/80 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>BS Football Hub Administration</span>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase"
          >
            {t('admin.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
