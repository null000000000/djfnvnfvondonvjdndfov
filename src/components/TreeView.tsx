import React, { useState } from 'react';
import {
  CORE_SKILLS,
  SPECIALIZATIONS,
  CoreSkill,
  IMPORTANCE_DEFINITIONS,
  ProgressState
} from '../data/skillTreeData';
import {
  ChevronDown,
  ChevronRight,
  Clock,
  Layers,
  Award,
  Search,
  Filter,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface TreeViewProps {
  lang: 'ar' | 'en';
  searchQuery: string;
  importanceFilter: string;
  onSelectSkill: (coreSkill: CoreSkill) => void;
  skillRecords: Record<string, { status: ProgressState; notes: string }>;
  onUpdateStatus: (skillId: string, status: ProgressState) => void;
}

export const TreeView: React.FC<TreeViewProps> = ({
  lang,
  searchQuery,
  importanceFilter,
  onSelectSkill,
  skillRecords,
  onUpdateStatus
}) => {
  const [expandedCores, setExpandedCores] = useState<Record<string, boolean>>(() => {
    // Expand first 3 by default
    return {
      'core-01': true,
      'core-08': true,
      'core-09': true
    };
  });

  const [activeTab, setActiveTab] = useState<'cores' | 'specializations'>('cores');

  const toggleCore = (id: string) => {
    setExpandedCores((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    CORE_SKILLS.forEach((c) => {
      all[c.id] = true;
    });
    setExpandedCores(all);
  };

  const collapseAll = () => {
    setExpandedCores({});
  };

  const filteredCores = CORE_SKILLS.filter((core) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      core.titleEn.toLowerCase().includes(q) ||
      core.titleAr.toLowerCase().includes(q) ||
      core.code.toLowerCase().includes(q) ||
      core.whyItMattersEn.toLowerCase().includes(q) ||
      core.whyItMattersAr.toLowerCase().includes(q) ||
      core.subskills.some(
        (s) => s.nameEn.toLowerCase().includes(q) || s.nameAr.toLowerCase().includes(q)
      );

    const matchesImp =
      importanceFilter === 'all' ||
      core.importance === importanceFilter ||
      core.subskills.some((s) => s.importance === importanceFilter);

    return matchesSearch && matchesImp;
  });

  const filteredSpecs = SPECIALIZATIONS.filter((spec) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      spec.titleEn.toLowerCase().includes(q) ||
      spec.titleAr.toLowerCase().includes(q) ||
      spec.subskillsEn.toLowerCase().includes(q) ||
      spec.subskillsAr.toLowerCase().includes(q);

    const matchesImp = importanceFilter === 'all' || spec.importance === importanceFilter;

    return matchesSearch && matchesImp;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>{lang === 'ar' ? 'شجرة المهارات الهرمية والمصفوفة الكاملة' : 'Hierarchical Skill Tree & Matrix'}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar'
              ? 'تصفح كل المهارات الـ 19 الأساسية والمهارات الفرعية الـ 200+ مع تصنيف الأهمية وساعات التعلّم والإتقان.'
              : 'Browse all 19 core competencies and 200+ detailed subskills with importance grades and hourly estimates.'}
          </p>
        </div>

        {/* Tab Selector & Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveTab('cores')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'cores'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'ar' ? '19 المهارات الأساسية' : '19 Core Skills'}
            </button>
            <button
              onClick={() => setActiveTab('specializations')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'specializations'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'ar' ? '14 التخصصات المتقدمة' : '14 Specializations'}
            </button>
          </div>

          {activeTab === 'cores' && (
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={expandAll}
                className="px-2.5 py-1 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded border border-slate-800 transition-colors"
              >
                {lang === 'ar' ? 'توسيع الكل' : 'Expand All'}
              </button>
              <button
                onClick={collapseAll}
                className="px-2.5 py-1 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded border border-slate-800 transition-colors"
              >
                {lang === 'ar' ? 'طي الكل' : 'Collapse All'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CORE SKILLS LIST */}
      {activeTab === 'cores' && (
        <div className="space-y-4">
          {filteredCores.length === 0 ? (
            <div className="p-12 text-center text-slate-500 border border-slate-800 rounded-2xl bg-slate-950">
              {lang === 'ar' ? 'لا توجد مهارات مطابقة لمعايير البحث' : 'No skills match your search/filter criteria'}
            </div>
          ) : (
            filteredCores.map((core) => {
              const isExpanded = !!expandedCores[core.id];
              const imp = IMPORTANCE_DEFINITIONS[core.importance];
              const status = skillRecords[core.id]?.status || 'not_started';

              return (
                <div
                  key={core.id}
                  className="rounded-2xl border border-slate-800/90 bg-slate-900/70 overflow-hidden transition-all hover:border-slate-700 shadow-sm"
                >
                  {/* Core Skill Header Row */}
                  <div
                    onClick={() => toggleCore(core.id)}
                    className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors select-none"
                  >
                    <div className="flex items-center gap-3.5 overflow-hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCore(core.id);
                        }}
                        className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 shrink-0"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                        )}
                      </button>

                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-rose-400 border border-slate-700 shrink-0">
                        {core.code}
                      </span>

                      <div className="truncate">
                        <div className="text-sm sm:text-base font-semibold text-white tracking-tight truncate">
                          {lang === 'ar' ? core.titleAr : core.titleEn}
                        </div>
                        <div className="text-xs text-slate-400 truncate">
                          {lang === 'ar' ? core.titleEn : core.titleAr}
                          <span className="mx-2 text-slate-600">·</span>
                          <span className="text-slate-400">
                            {lang === 'ar' ? core.clusterAr : core.clusterEn}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Badges & Hours */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden md:flex flex-col text-end font-mono text-xs">
                        <span className="text-slate-300 tabular-nums font-semibold">
                          {core.totalFocusedHours}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {lang === 'ar' ? 'ساعات مركزة' : 'focused hours'}
                        </span>
                      </div>

                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded border ${imp.badgeBg}`}
                      >
                        Grade {core.importance}
                      </span>

                      {/* Status quick select */}
                      <select
                        value={status}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => onUpdateStatus(core.id, e.target.value as ProgressState)}
                        className="hidden sm:block text-xs bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-slate-300 focus:outline-none focus:ring-1 focus:ring-rose-500"
                      >
                        <option value="not_started">{lang === 'ar' ? 'لم أبدأ' : 'Not Started'}</option>
                        <option value="learning">{lang === 'ar' ? 'قيد التعلّم' : 'Learning'}</option>
                        <option value="practicing">{lang === 'ar' ? 'قيد الممارسة' : 'Practicing'}</option>
                        <option value="mastered">{lang === 'ar' ? 'متقن' : 'Mastered'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Expanded Subskills and Details */}
                  {isExpanded && (
                    <div className="border-t border-slate-800/80 bg-slate-950/60 p-4 sm:p-6 space-y-4">
                      {/* Why it Matters Box */}
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <strong className="text-rose-400 block mb-1">
                          {lang === 'ar' ? 'أهمية المهارة في العمل الميداني:' : 'Why It Matters:'}
                        </strong>
                        {lang === 'ar' ? core.whyItMattersAr : core.whyItMattersEn}
                      </div>

                      {/* Subskills Grid */}
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                          <span>
                            {lang === 'ar'
                              ? `المهارات الفرعية (${core.subskills.length})`
                              : `Subskills Breakdown (${core.subskills.length})`}
                          </span>
                          <span className="text-[11px] text-slate-400 font-normal">
                            {lang === 'ar'
                              ? 'ساعات التعلّم الأولي: ' + core.learningHours + ' | ساعات الإتقان: ' + core.masteryHours
                              : 'Learning: ' + core.learningHours + ' | Mastery: ' + core.masteryHours}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {core.subskills.map((sub, sIdx) => {
                            const subImp = IMPORTANCE_DEFINITIONS[sub.importance];
                            return (
                              <div
                                key={sub.id}
                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-2 hover:border-slate-700 transition-colors"
                              >
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <span className="text-[10px] font-mono text-slate-400 w-4 shrink-0">
                                    {sIdx + 1}
                                  </span>
                                  <div className="truncate">
                                    <div className="text-xs text-slate-200 font-medium truncate">
                                      {lang === 'ar' ? sub.nameAr : sub.nameEn}
                                    </div>
                                    <div className="text-[10px] text-slate-400 truncate">
                                      {lang === 'ar' ? sub.nameEn : sub.nameAr}
                                    </div>
                                  </div>
                                </div>

                                <span
                                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border shrink-0 ${subImp.badgeBg}`}
                                >
                                  {sub.importance}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Action trigger to inspect */}
                      <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                        <div className="flex flex-wrap gap-1.5">
                          {core.tools.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => onSelectSkill(core)}
                          className="px-3 py-1.5 text-xs font-semibold text-rose-400 hover:text-white hover:bg-rose-500/10 rounded-lg transition-colors border border-rose-500/20"
                        >
                          {lang === 'ar' ? 'عرض التفاصيل الكاملة والملاحظات ←' : 'View Full Details & Notes →'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* SPECIALIZATIONS LIST */}
      {activeTab === 'specializations' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSpecs.map((spec) => {
            const imp = IMPORTANCE_DEFINITIONS[spec.importance];
            return (
              <div
                key={spec.id}
                className="p-5 rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-slate-700 transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {lang === 'ar' ? spec.titleAr : spec.titleEn}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {lang === 'ar' ? spec.titleEn : spec.titleAr}
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border shrink-0 ${imp.badgeBg}`}>
                    Grade {spec.importance}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                  <span className="text-slate-400 block mb-1">
                    {lang === 'ar' ? 'المهارات والموضوعات النموذجية:' : 'Example Subskills & Topics:'}
                  </span>
                  {lang === 'ar' ? spec.subskillsAr : spec.subskillsEn}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
