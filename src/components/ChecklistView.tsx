import React from 'react';
import { CHECKLIST_ITEMS, ChecklistItem } from '../data/skillTreeData';
import { CheckCircle2, ShieldAlert, Award, RotateCcw } from 'lucide-react';

interface ChecklistViewProps {
  lang: 'ar' | 'en';
  checklistCompleted: Record<string, boolean>;
  onToggleItem: (itemId: string) => void;
  stats: {
    totalChecklist: number;
    completedChecklist: number;
    checklistPercentage: number;
  };
}

export const ChecklistView: React.FC<ChecklistViewProps> = ({
  lang,
  checklistCompleted,
  onToggleItem,
  stats
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header and Progress Gauge Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-slate-800 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider mb-1">
              {lang === 'ar' ? 'قائمة التحقق الميدانية للكفاءة' : 'Competency Checklist'}
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {lang === 'ar' ? 'قائمة كفاءة مختبر اختراق الذكاء الاصطناعي' : 'AI Red Teamer Competency Checklist'}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              {lang === 'ar'
                ? 'حدد المهارة كـ "مكتملة" فقط عندما تستطيع إثباتها وتنفيذها بنجاح في سيناريو اختبار جديد غير مألوف مصرح به، وليس بمجرد قراءة النظرية.'
                : 'Mark a skill complete only when you can demonstrate it in an unfamiliar but authorized test scenario.'}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end shrink-0">
            <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
              {stats.checklistPercentage}%
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {stats.completedChecklist} / {stats.totalChecklist} {lang === 'ar' ? 'مكتمل' : 'verified'}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${stats.checklistPercentage}%` }}
          />
        </div>
      </div>

      {/* Checklist List */}
      <div className="space-y-3">
        {CHECKLIST_ITEMS.map((item, idx) => {
          const isDone = !!checklistCompleted[item.id];
          return (
            <div
              key={item.id}
              onClick={() => onToggleItem(item.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                isDone
                  ? 'bg-rose-950/20 border-rose-500/40 text-white'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <button
                type="button"
                className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                  isDone
                    ? 'bg-rose-600 border-rose-500 text-white shadow-sm'
                    : 'border-slate-700 bg-slate-950 hover:border-slate-500'
                }`}
              >
                {isDone && <CheckCircle2 className="w-4 h-4" />}
              </button>

              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-slate-400">
                    #{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium leading-relaxed font-sans">
                  {lang === 'ar' ? item.textAr : item.textEn}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                  {lang === 'ar' ? item.textEn : item.textAr}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
