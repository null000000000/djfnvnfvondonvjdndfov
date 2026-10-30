import React, { useState } from 'react';
import {
  LIFECYCLE_PHASES,
  OPERATION_FAMILIES,
  CAPSTONE_STEPS,
  IMPORTANCE_DEFINITIONS
} from '../data/skillTreeData';
import {
  Activity,
  ShieldAlert,
  FolderGit2,
  CheckCircle2,
  ArrowRight,
  Flame,
  Search,
  Filter
} from 'lucide-react';

interface OperationsViewProps {
  lang: 'ar' | 'en';
}

export const OperationsView: React.FC<OperationsViewProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'lifecycle' | 'families' | 'capstone'>('lifecycle');
  const [filterFamily, setFilterFamily] = useState<string>('all');

  const filteredFamilies = OPERATION_FAMILIES.filter((f) => {
    if (filterFamily === 'all') return true;
    return f.importance === filterFamily;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header and Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Activity className="w-5 h-5 text-rose-500" />
            <span>{lang === 'ar' ? 'عمليات الفريق الأحمر ودورة الاختبار الميداني' : 'Red Team Operations & Operational Lifecycle'}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar'
              ? 'كيف يتصرف مختبر اختراق الذكاء الاصطناعي في المهام الواقعية: دورة الحياة، عائلات العمليات، ومشروع التخرج العملي.'
              : 'What an AI Red Teamer does in real engagements: 10-phase lifecycle, 17 operation families, and full capstone lab.'}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('lifecycle')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'lifecycle'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === 'ar' ? 'دورة العمليات (10 مراحل)' : 'Operational Lifecycle (10 Phases)'}
          </button>
          <button
            onClick={() => setActiveTab('families')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'families'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === 'ar' ? 'عائلات العمليات (17 عائلة)' : 'Operation Families (17)'}
          </button>
          <button
            onClick={() => setActiveTab('capstone')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'capstone'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang === 'ar' ? 'مشروع التخرج الشامل (Capstone)' : 'Capstone Lab'}
          </button>
        </div>
      </div>

      {/* TAB 1: OPERATIONAL LIFECYCLE (10 PHASES) */}
      {activeTab === 'lifecycle' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-rose-400">
              {lang === 'ar' ? 'منهجية OWASP GenAI Red Teaming v1.0 (أكتوبر 2026):' : 'OWASP GenAI Red Teaming Manual v1.0 Reference:'}
            </span>{' '}
            {lang === 'ar'
              ? 'تعتمد هذه المراحل العشر توليفة عملية تجمع بين التخطيط والاستطلاع، ورسم مساحة الهجوم، ونمذجة التهديدات، والاختبار العدائي، والتحقق الآمن من الأثر، واختبار البقاء عبر الجلسات، وتقييم الدفاعات، والتوثيق، واختبارات الانتكاس.'
              : 'Synthesizes planning, reconnaissance, attack-surface mapping, exploitation, persistence, impact assessment, reporting, and continuous remediation validation.'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LIFECYCLE_PHASES.map((p) => (
              <div
                key={p.number}
                className="p-5 rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      Step {p.number.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Phase {p.number} / 10
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {lang === 'ar' ? p.titleAr : p.titleEn}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {lang === 'ar' ? p.titleEn : p.titleAr}
                  </div>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                  {lang === 'ar' ? p.descriptionAr : p.descriptionEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: MAIN OPERATION FAMILIES (17 FAMILIES) */}
      {activeTab === 'families' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs text-slate-400">
              {lang === 'ar' ? 'تصنيف نطاق الفحص والاختبار' : 'Scope and Assessment Families'}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-slate-400 me-2">{lang === 'ar' ? 'تصفية:' : 'Filter:'}</span>
              {['all', 'A', 'B', 'C'].map((g) => (
                <button
                  key={g}
                  onClick={() => setFilterFamily(g)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-colors ${
                    filterFamily === g
                      ? 'bg-rose-600 text-white border-rose-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {g === 'all' ? (lang === 'ar' ? 'الكل' : 'All') : `Grade ${g}`}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl bg-slate-900/80 overflow-hidden">
            {filteredFamilies.map((fam, idx) => {
              const imp = IMPORTANCE_DEFINITIONS[fam.importance];
              return (
                <div
                  key={fam.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-1 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400 w-5 shrink-0">
                        {idx + 1}.
                      </span>
                      <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                        {lang === 'ar' ? fam.nameAr : fam.nameEn}
                      </h4>
                    </div>
                    <div className="text-xs text-slate-400 ps-7">
                      <span className="text-slate-400 me-1">
                        {lang === 'ar' ? 'ما يتم تقييمه وفحصه:' : 'What is assessed:'}
                      </span>
                      <span className="text-slate-300">
                        {lang === 'ar' ? fam.assessedAr : fam.assessedEn}
                      </span>
                    </div>
                  </div>

                  <div className="ps-7 sm:ps-0 shrink-0">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded border inline-block ${imp.badgeBg}`}
                      title={lang === 'ar' ? imp.descAr : imp.descEn}
                    >
                      Importance {fam.importance} ({lang === 'ar' ? imp.labelAr : imp.labelEn})
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: CAPSTONE PROJECT (FULL LAB ENGAGEMENT) */}
      {activeTab === 'capstone' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-rose-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                {lang === 'ar' ? 'مختبر مشروع التخرج: محاكاة حملة اختراق كاملة' : 'Capstone Project: Full AI Red Team Engagement'}
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'لبناء خبرة واقعية كاملة، قم بتجهيز بيئة اختبار تحتوي على: تطبيق ويب مدعوم بنموذج LLM، نقطة استدعاء مصرح بها، قاعدة معرفة اصطناعية ومسار RAG، قاعدة بيانات متجهية، وكيل ذكي بأدوات منخفضة الخطورة، نظام هويات وأدوار وهمي، وسجلات لتتبع النتائج.'
                : 'Build an authorized lab containing: LLM-backed web app, authorized model endpoint, synthetic knowledge base and RAG pipeline, vector DB, simple agent with test tools, mock identity system, and telemetry logging.'}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              {lang === 'ar' ? 'خطوات تنفيذ الحملة الـ 12:' : '12 Sequential Assessment Steps:'}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CAPSTONE_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 hover:border-slate-700 transition-colors"
                >
                  <span className="text-xs font-mono font-bold w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">
                      {lang === 'ar' ? s.titleAr : s.titleEn}
                    </h5>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {lang === 'ar' ? s.titleEn : s.titleAr}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs text-rose-200">
            <strong>{lang === 'ar' ? 'شرط اكتمال مشروع التخرج:' : 'Completion Invariant:'}</strong>{' '}
            {lang === 'ar'
              ? 'يُعتبر مشروع التخرج مكتملاً فقط عند تقديم أدلة قابلة للتكرار بدقة، وشرح واضح للأثر الواقعي، وتوضيح القيود، والتوصية بإجراءات المعالجة، وإجراء فحص لاحق (Retest) للتحقق من صمود الحلول.'
              : 'A capstone is complete only when it includes reproducible evidence, clear impact, limitations, remediation, and retest results.'}
          </div>
        </div>
      )}
    </div>
  );
};
