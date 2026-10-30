import React from 'react';
import {
  TOOLS_MAP,
  REFERENCES_LIST,
  PROFESSIONAL_BOUNDARY_TEXT,
  ToolItem,
  ReferenceItem
} from '../data/skillTreeData';
import {
  Wrench,
  BookOpen,
  ShieldCheck,
  ExternalLink,
  Lock,
  FileCheck
} from 'lucide-react';

interface ToolsAndStandardsViewProps {
  lang: 'ar' | 'en';
}

export const ToolsAndStandardsView: React.FC<ToolsAndStandardsViewProps> = ({ lang }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* PROFESSIONAL BOUNDARY NOTICE (CRITICAL ETHICS) */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/60 via-slate-900 to-rose-950/60 border border-rose-500/40 shadow-xl space-y-3">
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-rose-400" />
          <h3 className="text-base font-bold text-white tracking-tight">
            {lang === 'ar' ? 'الحدود المهنية والأخلاقية للاختبار (Professional Boundary)' : 'Professional & Ethical Boundary'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed font-sans">
          {lang === 'ar' ? PROFESSIONAL_BOUNDARY_TEXT.ar : PROFESSIONAL_BOUNDARY_TEXT.en}
        </p>
      </div>

      {/* SECTION 6: TOOLS MAP */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Wrench className="w-5 h-5 text-rose-400" />
            <span>{lang === 'ar' ? 'خريطة الأدوات وأطر العمل الرسمية (Tooling Map)' : 'Official Tooling Map & Frameworks'}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar'
              ? 'الأدوات تساعد في تنفيذ وقياس الفحص، لكنها لا تغني أبداً عن الفهم المعماري والتحقق اليدوي البشري.'
              : 'Tools help execute and measure tests. They do not replace architectural understanding or manual human validation.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS_MAP.map((tool) => (
            <div
              key={tool.id}
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {tool.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-rose-400">
                    {tool.skillAreas}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight">
                  {tool.name}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mt-2 bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                  {lang === 'ar' ? tool.purposeAr : tool.purposeEn}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {lang === 'ar' ? 'التوثيق الرسمي' : 'Official Docs'}
                </span>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>{lang === 'ar' ? 'زيارة الموقع' : 'Open Link'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 10: REFERENCE FRAMEWORKS */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-400" />
            <span>{lang === 'ar' ? 'المعايير المرجعية وأطر العمل العالمية' : 'Reference Frameworks & Reading'}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar'
              ? 'الأدلة والمعايير الصادرة عن NIST و OWASP ومايكروسوفت ومعهد سلامة الذكاء الاصطناعي البريطاني.'
              : 'Official publications from NIST, OWASP, Microsoft, UK AISI, and international standards bodies.'}
          </p>
        </div>

        <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl bg-slate-900/80 overflow-hidden">
          {REFERENCES_LIST.map((ref) => (
            <div
              key={ref.number}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold w-5 h-5 rounded bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    {ref.number}
                  </span>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {ref.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 ps-7">
                  {lang === 'ar' ? ref.descriptionAr : ref.descriptionEn}
                </p>
              </div>

              <div className="ps-7 sm:ps-0 shrink-0">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <span>{lang === 'ar' ? 'عرض المصدر' : 'View Source'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
