import React from 'react';
import {
  Brain,
  Globe,
  Download,
  Search,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  lang: 'ar' | 'en';
  onToggleLang: () => void;
  activeView: 'mindmap' | 'tree' | 'roadmap' | 'operations' | 'tools' | 'checklist';
  onSelectView: (view: 'mindmap' | 'tree' | 'roadmap' | 'operations' | 'tools' | 'checklist') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  importanceFilter: string;
  onFilterChange: (f: string) => void;
  onExport: () => void;
  stats: {
    masteredCores: number;
    totalCoreCount: number;
  };
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  activeView,
  onSelectView,
  searchQuery,
  onSearchChange,
  importanceFilter,
  onFilterChange,
  onExport,
  stats
}) => {
  const navItems: { key: 'mindmap' | 'tree' | 'roadmap' | 'operations' | 'tools' | 'checklist'; labelAr: string; labelEn: string }[] = [
    { key: 'mindmap', labelAr: 'الخريطة الذهنية', labelEn: 'Mind Map' },
    { key: 'tree', labelAr: 'شجرة المهارات', labelEn: 'Skill Matrix' },
    { key: 'roadmap', labelAr: 'المسار الزمني', labelEn: 'Roadmap' },
    { key: 'operations', labelAr: 'دورة العمليات', labelEn: 'Operations' },
    { key: 'tools', labelAr: 'الأدوات والمراجع', labelEn: 'Tools & Specs' },
    { key: 'checklist', labelAr: 'قائمة التحقق', labelEn: 'Checklist' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <Brain className="w-4 h-4" />
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectView('mindmap');
            }}
            className="text-base font-bold tracking-tight text-white whitespace-nowrap hover:text-rose-400 transition-colors"
          >
            {lang === 'ar' ? 'شجرة مهارات الـ AI Red Team' : 'AI Red Team Skill Tree'}
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-400">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onSelectView(item.key)}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                activeView === item.key
                  ? 'text-white font-semibold'
                  : 'hover:text-slate-200'
              }`}
            >
              {lang === 'ar' ? item.labelAr : item.labelEn}
              {activeView === item.key && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-rose-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick Search Input */}
          <div className="relative hidden md:block w-48 lg:w-56">
            <Search className="absolute start-3 top-2.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={lang === 'ar' ? 'بحث في المهارات...' : 'Search skills...'}
              className="w-full h-8 ps-8 pe-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-rose-500 font-sans"
            />
          </div>

          {/* Language Switch */}
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1.5 h-8 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            title={lang === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
          >
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          {/* Export Button */}
          <button
            onClick={onExport}
            className="p-1.5 h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center shrink-0"
            title={lang === 'ar' ? 'تصدير التقدم (JSON)' : 'Export Progress JSON'}
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center overflow-x-auto border-t border-slate-800/80 px-4 py-2 gap-2 text-xs no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelectView(item.key)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeView === item.key
                ? 'bg-rose-600 text-white font-semibold'
                : 'text-slate-400 bg-slate-900/60 hover:text-slate-200'
            }`}
          >
            {lang === 'ar' ? item.labelAr : item.labelEn}
          </button>
        ))}
      </div>
    </header>
  );
};
