import React, { useState } from 'react';
import { Header } from './components/Header';
import { MindMapCanvas } from './components/MindMapCanvas';
import { TreeView } from './components/TreeView';
import { RoadmapView } from './components/RoadmapView';
import { OperationsView } from './components/OperationsView';
import { ToolsAndStandardsView } from './components/ToolsAndStandardsView';
import { ChecklistView } from './components/ChecklistView';
import { NodeDetailDrawer } from './components/NodeDetailDrawer';
import { useProgressStore } from './hooks/useProgressStore';
import { PositionedNode } from './utils/mindMapLayout';
import { CORE_SKILLS, CoreSkill, IMPORTANCE_DEFINITIONS } from './data/skillTreeData';
import { Filter, Layers, CheckCircle2, BookOpen } from 'lucide-react';

export default function App() {
  const {
    skillRecords,
    checklistCompleted,
    bookmarkedSkills,
    lang,
    setLang,
    updateSkillStatus,
    updateSkillNotes,
    toggleBookmark,
    toggleChecklistItem,
    stats,
    resetAllProgress,
    exportProgressJson
  } = useProgressStore();

  const [activeView, setActiveView] = useState<'mindmap' | 'tree' | 'roadmap' | 'operations' | 'tools' | 'checklist'>('mindmap');
  const [searchQuery, setSearchQuery] = useState('');
  const [importanceFilter, setImportanceFilter] = useState('all');
  const [selectedNode, setSelectedNode] = useState<PositionedNode | null>(null);

  const handleSelectSkillFromTree = (coreSkill: CoreSkill) => {
    // Convert to a PositionedNode mock for drawer
    const node: PositionedNode = {
      id: coreSkill.id,
      parentId: null,
      code: coreSkill.code,
      titleEn: coreSkill.titleEn,
      titleAr: coreSkill.titleAr,
      type: 'core',
      importance: coreSkill.importance,
      learningHours: coreSkill.learningHours,
      masteryHours: coreSkill.masteryHours,
      totalFocusedHours: coreSkill.totalFocusedHours,
      whyItMattersEn: coreSkill.whyItMattersEn,
      whyItMattersAr: coreSkill.whyItMattersAr,
      children: [],
      rawCoreSkill: coreSkill,
      x: 0,
      y: 0,
      width: 260,
      height: 64,
      color: '#e11d48'
    };
    setSelectedNode(node);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500/30 selection:text-white">
      {/* Top Header */}
      <Header
        lang={lang}
        onToggleLang={() => setLang(lang === 'ar' ? 'en' : 'ar')}
        activeView={activeView}
        onSelectView={setActiveView}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        importanceFilter={importanceFilter}
        onFilterChange={setImportanceFilter}
        onExport={exportProgressJson}
        stats={stats}
      />

      {/* Filter Bar (Only shown on Mind Map and Tree view) */}
      {(activeView === 'mindmap' || activeView === 'tree') && (
        <div className="bg-slate-900/60 border-b border-slate-800/80 px-4 sm:px-6 py-2 flex items-center justify-between text-xs overflow-x-auto gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-slate-400 flex items-center gap-1 font-medium">
              <Filter className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'تصفية حسب الأهمية:' : 'Filter by Importance:'}</span>
            </span>
            <div className="flex items-center gap-1">
              {['all', 'A', 'B', 'C', 'D', 'E'].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setImportanceFilter(grade)}
                  className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold transition-colors ${
                    importanceFilter === grade
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {grade === 'all' ? (lang === 'ar' ? 'الكل' : 'All') : `Grade ${grade}`}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400 shrink-0 font-mono">
            <span>
              {lang === 'ar' ? 'المهارات الأساسية:' : 'Core Skills:'}{' '}
              <strong className="text-white">{stats.totalCoreCount}</strong>
            </span>
            <span>
              {lang === 'ar' ? 'تم إتقانها:' : 'Mastered:'}{' '}
              <strong className="text-emerald-400">{stats.masteredCores}</strong>
            </span>
            <span>
              {lang === 'ar' ? 'قيد التعلّم/الممارسة:' : 'In Progress:'}{' '}
              <strong className="text-amber-400">{stats.learningCores + stats.practicingCores}</strong>
            </span>
          </div>
        </div>
      )}

      {/* Main View Area */}
      <main className="flex-1 relative">
        {activeView === 'mindmap' && (
          <MindMapCanvas
            lang={lang}
            searchQuery={searchQuery}
            importanceFilter={importanceFilter}
            onSelectNode={(node) => setSelectedNode(node)}
            selectedNodeId={selectedNode?.id}
            skillRecords={skillRecords}
          />
        )}

        {activeView === 'tree' && (
          <TreeView
            lang={lang}
            searchQuery={searchQuery}
            importanceFilter={importanceFilter}
            onSelectSkill={handleSelectSkillFromTree}
            skillRecords={skillRecords}
            onUpdateStatus={updateSkillStatus}
          />
        )}

        {activeView === 'roadmap' && <RoadmapView lang={lang} />}

        {activeView === 'operations' && <OperationsView lang={lang} />}

        {activeView === 'tools' && <ToolsAndStandardsView lang={lang} />}

        {activeView === 'checklist' && (
          <ChecklistView
            lang={lang}
            checklistCompleted={checklistCompleted}
            onToggleItem={toggleChecklistItem}
            stats={stats}
          />
        )}
      </main>

      {/* Node Detail Drawer */}
      {selectedNode && (
        <NodeDetailDrawer
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          lang={lang}
          skillRecord={skillRecords[selectedNode.id]}
          isBookmarked={bookmarkedSkills.includes(selectedNode.id)}
          onUpdateStatus={updateSkillStatus}
          onUpdateNotes={updateSkillNotes}
          onToggleBookmark={toggleBookmark}
        />
      )}
    </div>
  );
}
