import React from 'react';
import {
  ROADMAP_PHASES,
  COMPETENCY_LEVELS,
  RoadmapPhase,
  CompetencyLevel
} from '../data/skillTreeData';
import {
  Milestone,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target
} from 'lucide-react';

interface RoadmapViewProps {
  lang: 'ar' | 'en';
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ lang }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Introduction Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-slate-800 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>{lang === 'ar' ? 'خارطة طريق التعلّم والإتقان الميداني' : 'Learning & Mastery Roadmap'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'ar'
              ? 'من أساسيات الأمن السيبراني إلى قيادة عمليات الفريق الأحمر للذكاء الاصطناعي'
              : 'From Cybersecurity Foundations to Leading AI Red Team Engagements'}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'خطة مرحلية متسلسلة مبنية لمختبر الاختراق؛ فالخبرة السيبرانية السابقة تختصر مرحلة الجسر (Phase 0) لكنها لا تغني عن فهم أسس تعلم الآلة وهندسة النماذج.'
              : 'A sequenced phase-by-phase journey. Existing cybersecurity skills reduce Phase 0 time, but do not replace AI/ML architectural foundations.'}
          </p>
        </div>
      </div>

      {/* ROADMAP TIMELINE: PHASES 0 to 6 */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Milestone className="w-5 h-5 text-rose-400" />
            <span>{lang === 'ar' ? 'المراحل الزمنية المنهجية (7 مراحل)' : 'Systematic Phases (7 Phases)'}</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            {lang === 'ar' ? 'مدة متوقعة: 11 - 22 شهراً' : 'Estimated 11 - 22 Months'}
          </span>
        </div>

        <div className="relative border-s-2 border-slate-800 ms-4 sm:ms-8 ps-6 sm:ps-8 space-y-8">
          {ROADMAP_PHASES.map((phase) => (
            <div key={phase.phase} className="relative group">
              {/* Bullet Node on Line */}
              <div className="absolute -start-[33px] sm:-start-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-rose-500 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-md group-hover:scale-110 transition-transform">
                {phase.phase}
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 space-y-4 hover:border-slate-700 transition-all shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-xs font-mono text-rose-400 font-semibold block mb-0.5">
                      {lang === 'ar' ? `المرحلة ${phase.phase}` : `Phase ${phase.phase}`}
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {lang === 'ar' ? phase.nameAr : phase.nameEn}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-sky-400 border border-slate-700 font-semibold">
                      {phase.duration}
                    </span>
                  </div>
                </div>

                {/* Skills Included Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-400 me-1">
                    {lang === 'ar' ? 'المهارات المشمولة:' : 'Skills:'}
                  </span>
                  {phase.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Tasks List */}
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    {lang === 'ar' ? 'المهام ومحاور التطبيق:' : 'Actionable Milestones:'}
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(lang === 'ar' ? phase.tasksAr : phase.tasksEn).map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exit Criteria Box */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <Target className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                      {lang === 'ar' ? 'معيار التخرج واجتياز المرحلة (Exit Criteria):' : 'Phase Exit Criteria:'}
                    </span>
                    <p className="text-xs text-slate-200 mt-0.5 font-medium leading-relaxed">
                      {lang === 'ar' ? phase.exitCriteriaAr : phase.exitCriteriaEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: ESTIMATED TIME TO COMPETENCY */}
      <div className="space-y-6 pt-6 border-t border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <span>{lang === 'ar' ? 'مستويات الكفاءة والوقت المقدر للوصول إليها' : 'Estimated Time to Competency'}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar'
              ? 'التقديرات أدناه تفترض ممارسة مركزة مستمرة. بمعدل 15 ساعة أسبوعياً، يحتاج الوصول لمستوى مختبر مستقل حوالي 14–22 شهراً.'
              : 'Estimates assume consistent focused practice. At 15 focused hours/week, 900–1,400h is roughly 14–22 months.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPETENCY_LEVELS.map((level, idx) => (
            <div
              key={level.levelEn}
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between hover:border-slate-700 transition-all space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Level {idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                    {level.effortHours}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight">
                  {lang === 'ar' ? level.levelAr : level.levelEn}
                </h4>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {lang === 'ar' ? level.levelEn : level.levelAr}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <span className="text-slate-400 block mb-1 font-semibold text-[11px]">
                  {lang === 'ar' ? 'ما يستطيع الشخص فعله:' : 'What they can do:'}
                </span>
                {lang === 'ar' ? level.capabilitiesAr : level.capabilitiesEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
