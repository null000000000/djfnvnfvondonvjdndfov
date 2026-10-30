import React, { useState, useEffect } from 'react';
import { PositionedNode } from '../utils/mindMapLayout';
import {
  CORE_SKILLS,
  CoreSkill,
  IMPORTANCE_DEFINITIONS,
  EFFORT_DEFINITIONS,
  ProgressState
} from '../data/skillTreeData';
import {
  X,
  Bookmark,
  CheckCircle2,
  Clock,
  Award,
  Layers,
  Terminal,
  FileText,
  AlertCircle,
  ExternalLink,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface NodeDetailDrawerProps {
  node: PositionedNode | null;
  onClose: () => void;
  lang: 'ar' | 'en';
  skillRecord?: { status: ProgressState; notes: string };
  isBookmarked: boolean;
  onUpdateStatus: (skillId: string, status: ProgressState) => void;
  onUpdateNotes: (skillId: string, notes: string) => void;
  onToggleBookmark: (skillId: string) => void;
}

export const NodeDetailDrawer: React.FC<NodeDetailDrawerProps> = ({
  node,
  onClose,
  lang,
  skillRecord,
  isBookmarked,
  onUpdateStatus,
  onUpdateNotes,
  onToggleBookmark
}) => {
  if (!node) return null;

  // Find underlying CoreSkill if applicable
  const coreSkill: CoreSkill | undefined = node.rawCoreSkill || CORE_SKILLS.find(
    (c) => c.id === node.id || c.code === node.code
  );

  const [notesText, setNotesText] = useState(skillRecord?.notes || '');

  useEffect(() => {
    setNotesText(skillRecord?.notes || '');
  }, [node.id, skillRecord?.notes]);

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNotesText(val);
    onUpdateNotes(node.id, val);
  };

  const currentStatus: ProgressState = skillRecord?.status || 'not_started';

  const importanceInfo = node.importance ? IMPORTANCE_DEFINITIONS[node.importance] : null;

  return (
    <div className="fixed inset-y-0 end-0 z-50 w-full max-w-xl bg-slate-900 border-s border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-200">
      {/* Header */}
      <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {node.code && (
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                {node.code}
              </span>
            )}
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {node.type}
            </span>
            {importanceInfo && (
              <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${importanceInfo.badgeBg}`}>
                {lang === 'ar' ? `أهمية: ${importanceInfo.labelAr}` : `Importance: ${importanceInfo.labelEn}`}
              </span>
            )}
          </div>

          <h2 className="text-xl font-bold text-white tracking-tight leading-snug">
            {lang === 'ar' ? node.titleAr : node.titleEn}
          </h2>

          <div className="text-sm text-slate-400 mt-1 font-sans">
            {lang === 'ar' ? node.titleEn : node.titleAr}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => onToggleBookmark(node.id)}
            title={lang === 'ar' ? 'حفظ في المفضلة' : 'Bookmark Skill'}
            className={`p-2 rounded-lg border transition-colors ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Progress Tracker Bar */}
        {(node.type === 'core' || node.type === 'subskill') && (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <label className="text-xs font-semibold text-slate-300 block mb-2.5">
              {lang === 'ar' ? 'مستوى تقدمك في هذه المهارة' : 'Your Progress Status'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: 'not_started', labelAr: 'لم أبدأ', labelEn: 'Not Started', color: 'slate' },
                { key: 'learning', labelAr: 'قيد التعلّم', labelEn: 'Learning', color: 'sky' },
                { key: 'practicing', labelAr: 'قيد الممارسة', labelEn: 'Practicing', color: 'amber' },
                { key: 'mastered', labelAr: 'متقن ومستقل', labelEn: 'Mastered', color: 'emerald' }
              ].map((st) => {
                const isActive = currentStatus === st.key;
                return (
                  <button
                    key={st.key}
                    onClick={() => onUpdateStatus(node.id, st.key as ProgressState)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all ${
                      isActive
                        ? 'bg-slate-800 text-white border-rose-500 shadow-sm font-semibold'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800/60'
                    }`}
                  >
                    {lang === 'ar' ? st.labelAr : st.labelEn}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Time and Effort Hours Box (if Core) */}
        {coreSkill && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{lang === 'ar' ? 'ساعات التعلّم الأولي' : 'Learning Hours'}</span>
              </div>
              <div className="text-base font-bold text-white font-mono tabular-nums">
                {coreSkill.learningHours}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {lang === 'ar' ? `المجهود: درجة ${coreSkill.learningEffort}` : `Effort: Grade ${coreSkill.learningEffort}`}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'ساعات الإتقان الإضافية' : 'Mastery Hours'}</span>
              </div>
              <div className="text-base font-bold text-white font-mono tabular-nums">
                {coreSkill.masteryHours}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {lang === 'ar' ? `المجهود: درجة ${coreSkill.masteryEffort}` : `Effort: Grade ${coreSkill.masteryEffort}`}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-rose-400" />
                <span>{lang === 'ar' ? 'إجمالي التركيز المقدر' : 'Total Focused'}</span>
              </div>
              <div className="text-base font-bold text-white font-mono tabular-nums">
                {coreSkill.totalFocusedHours}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {lang === 'ar' ? 'ساعات مركزة للمشاريع' : 'Focused project hours'}
              </div>
            </div>
          </div>
        )}

        {/* Why it Matters Section */}
        {(node.whyItMattersEn || coreSkill?.whyItMattersEn) && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>{lang === 'ar' ? 'لماذا تهم هذه المهارة لمختبر الاختراق؟' : 'Why It Matters'}</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 leading-relaxed font-sans">
              {lang === 'ar'
                ? node.whyItMattersAr || coreSkill?.whyItMattersAr
                : node.whyItMattersEn || coreSkill?.whyItMattersEn}
            </div>
            {/* Overlap notice */}
            <p className="text-[11px] text-slate-400 leading-normal">
              {lang === 'ar'
                ? '💡 ملاحظة هامة: الساعات تتداخل بين المهارات في سيناريوهات ومختبرات RAG والوكلاء العملية، فلا تجمع الساعات كما لو كانت منعزلة.'
                : '💡 Note: The hours overlap across realistic labs and projects; do not add every row as if isolated.'}
            </p>
          </div>
        )}

        {/* Subskills List if Core Skill */}
        {coreSkill && coreSkill.subskills.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>{lang === 'ar' ? 'المهارات الفرعية التفصيلية' : 'Detailed Subskills'}</span>
              </h4>
              <span className="text-xs font-mono text-slate-400">
                {coreSkill.subskills.length} {lang === 'ar' ? 'مهارة' : 'items'}
              </span>
            </div>

            <div className="divide-y divide-slate-800/80 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
              {coreSkill.subskills.map((sub, idx) => {
                const subImportance = IMPORTANCE_DEFINITIONS[sub.importance];
                return (
                  <div
                    key={sub.id}
                    className="p-3 flex items-center justify-between gap-3 hover:bg-slate-900/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <span className="text-[10px] font-mono text-slate-400 w-5 shrink-0">
                        {idx + 1}.
                      </span>
                      <div className="truncate">
                        <div className="text-xs font-medium text-slate-200 truncate">
                          {lang === 'ar' ? sub.nameAr : sub.nameEn}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {lang === 'ar' ? sub.nameEn : sub.nameAr}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${subImportance.badgeBg}`}
                      title={lang === 'ar' ? subImportance.labelAr : subImportance.labelEn}
                    >
                      {sub.importance}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tools and Frameworks */}
        {coreSkill && coreSkill.tools && coreSkill.tools.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ar' ? 'الأدوات والمنصات ذات الصلة' : 'Related Tools & Frameworks'}</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {coreSkill.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Personal Notes & Lab Evidence */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'ملاحظاتك الشخصية وروابط المختبرات' : 'Personal Notes & Lab Evidence'}</span>
          </h4>
          <textarea
            value={notesText}
            onChange={handleNotesChange}
            placeholder={
              lang === 'ar'
                ? 'سجل ملاحظاتك هنا، روابط مستودعات GitHub، المختبرات التي أنهيتها، أو نتائج فحصك...'
                : 'Write your notes, test lab evidence, GitHub repos, or specific findings here...'
            }
            rows={4}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-rose-500 font-sans"
          />
          <div className="text-[10px] text-slate-400">
            {lang === 'ar' ? 'يتم الحفظ تلقائياً في المتصفح' : 'Auto-saved locally in browser'}
          </div>
        </div>
      </div>
    </div>
  );
};
