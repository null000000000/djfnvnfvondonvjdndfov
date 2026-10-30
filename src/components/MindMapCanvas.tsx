import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import {
  MindMapNode,
  PositionedNode,
  buildMindMapTree,
  layoutMindMap
} from '../utils/mindMapLayout';
import { CORE_SKILLS, CoreSkill, IMPORTANCE_DEFINITIONS, ProgressState } from '../data/skillTreeData';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface MindMapCanvasProps {
  lang: 'ar' | 'en';
  searchQuery: string;
  importanceFilter: string;
  onSelectNode: (node: PositionedNode) => void;
  selectedNodeId?: string | null;
  skillRecords: Record<string, { status: ProgressState; notes: string }>;
}

export const MindMapCanvas: React.FC<MindMapCanvasProps> = ({
  lang,
  searchQuery,
  importanceFilter,
  onSelectNode,
  selectedNodeId,
  skillRecords
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Viewport transform
  const [transform, setTransform] = useState<{ x: number; y: number; k: number }>({
    x: 0,
    y: 0,
    k: 0.85
  });

  // Dragging state
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Node collapsed state: default subskills collapsed to keep map clean, clusters expanded
  const [collapsedMap, setCollapsedMap] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    // Initially collapse subskills under cores so initial view is clean and readable
    CORE_SKILLS.forEach((c) => {
      initial[c.id] = true;
    });
    return initial;
  });

  // Build tree
  const treeRoot = useMemo(() => buildMindMapTree(lang), [lang]);

  // Layout tree
  const { nodes, links } = useMemo(() => {
    return layoutMindMap(treeRoot, collapsedMap, lang === 'ar');
  }, [treeRoot, collapsedMap, lang]);

  // Center canvas on initial mount or resize
  const centerCanvas = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTransform({
      x: rect.width / 2,
      y: rect.height / 2,
      k: 0.8
    });
  }, []);

  useEffect(() => {
    centerCanvas();
  }, [centerCanvas]);

  // Zoom handlers
  const handleZoom = (factor: number) => {
    setTransform((prev) => {
      const newK = Math.min(Math.max(prev.k * factor, 0.2), 2.5);
      return { ...prev, k: newK };
    });
  };

  const handleResetZoom = () => {
    centerCanvas();
  };

  // Expand all / Collapse all
  const handleExpandAll = () => {
    setCollapsedMap({});
  };

  const handleCollapseAll = () => {
    const next: Record<string, boolean> = {};
    treeRoot.children.forEach((cluster) => {
      next[cluster.id] = true;
    });
    setCollapsedMap(next);
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTransform((prev) => {
      const newK = Math.min(Math.max(prev.k * zoomFactor, 0.2), 2.5);
      const newX = mouseX - (mouseX - prev.x) * (newK / prev.k);
      const newY = mouseY - (mouseY - prev.y) * (newK / prev.k);
      return { x: newX, y: newY, k: newK };
    });
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag on canvas background, not on interactive buttons
    if ((e.target as HTMLElement).closest('.interactive-control')) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX - transform.x, y: e.clientY - transform.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    setTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    }));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Toggle node collapsed
  const toggleCollapse = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsedMap((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  // Search matching
  const isMatch = (node: PositionedNode) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      node.titleEn.toLowerCase().includes(q) ||
      node.titleAr.toLowerCase().includes(q) ||
      (node.code && node.code.toLowerCase().includes(q)) ||
      (node.whyItMattersEn && node.whyItMattersEn.toLowerCase().includes(q)) ||
      (node.whyItMattersAr && node.whyItMattersAr.toLowerCase().includes(q))
    );
  };

  // Importance filter matching
  const matchesImportance = (node: PositionedNode) => {
    if (!importanceFilter || importanceFilter === 'all') return true;
    if (!node.importance) return true;
    return node.importance === importanceFilter;
  };

  // Calculate curve path
  const getCurvePath = (source: PositionedNode, target: PositionedNode) => {
    const isTargetOnRight = target.x > source.x;
    const startX = isTargetOnRight ? source.x + source.width : source.x;
    const startY = source.y + source.height / 2;
    const endX = isTargetOnRight ? target.x : target.x + target.width;
    const endY = target.y + target.height / 2;

    const dx = Math.abs(endX - startX) * 0.55;
    const cp1x = isTargetOnRight ? startX + dx : startX - dx;
    const cp2x = isTargetOnRight ? endX - dx : endX + dx;

    return `M ${startX} ${startY} C ${cp1x} ${startY}, ${cp2x} ${endY}, ${endX} ${endY}`;
  };

  // Minimap bounding box
  const minX = Math.min(...nodes.map((n) => n.x)) - 100;
  const maxX = Math.max(...nodes.map((n) => n.x + n.width)) + 100;
  const minY = Math.min(...nodes.map((n) => n.y)) - 100;
  const maxY = Math.max(...nodes.map((n) => n.y + n.height)) + 100;
  const worldWidth = maxX - minX || 1000;
  const worldHeight = maxY - minY || 800;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-4rem)] overflow-hidden bg-slate-950 select-none cursor-grab active:cursor-grabbing"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background Subtle Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <pattern id="grid-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#475569" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dots)" />
      </svg>

      {/* Floating Canvas Toolbar */}
      <div className="absolute top-4 start-4 z-20 flex items-center gap-1.5 p-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl shadow-xl">
        <button
          onClick={() => handleZoom(1.2)}
          title={lang === 'ar' ? 'تكبير (Zoom In)' : 'Zoom In'}
          className="interactive-control p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(0.8)}
          title={lang === 'ar' ? 'تصغير (Zoom Out)' : 'Zoom Out'}
          className="interactive-control p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetZoom}
          title={lang === 'ar' ? 'إعادة ضبط العرض' : 'Reset View'}
          className="interactive-control p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <div className="w-[1px] h-5 bg-slate-800 my-auto" />
        <button
          onClick={handleExpandAll}
          title={lang === 'ar' ? 'توسيع جميع الفروع' : 'Expand All Branches'}
          className="interactive-control px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
        >
          {lang === 'ar' ? 'توسيع الكل' : 'Expand All'}
        </button>
        <button
          onClick={handleCollapseAll}
          title={lang === 'ar' ? 'طي الفروع' : 'Collapse Branches'}
          className="interactive-control px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
        >
          {lang === 'ar' ? 'طي الكل' : 'Collapse'}
        </button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute bottom-4 start-4 z-20 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-lg text-xs font-mono text-slate-400">
        {Math.round(transform.k * 100)}%
      </div>

      {/* Interactive Minimap */}
      <div className="absolute bottom-4 end-4 z-20 w-44 h-32 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-2 hidden sm:block shadow-2xl overflow-hidden">
        <div className="text-[10px] text-slate-400 font-medium mb-1 flex items-center justify-between">
          <span>{lang === 'ar' ? 'الخريطة المصغرة' : 'Minimap'}</span>
          <span className="font-mono text-slate-500">{nodes.length} nodes</span>
        </div>
        <svg viewBox={`${minX} ${minY} ${worldWidth} ${worldHeight}`} className="w-full h-24 bg-slate-950/60 rounded">
          {links.map((link, idx) => (
            <path
              key={`mini-link-${idx}`}
              d={getCurvePath(link.source, link.target)}
              fill="none"
              stroke={link.color}
              strokeWidth={worldWidth / 300}
              opacity={0.3}
            />
          ))}
          {nodes.map((node) => (
            <rect
              key={`mini-node-${node.id}`}
              x={node.x}
              y={node.y}
              width={node.width}
              height={node.height}
              fill={node.type === 'root' ? '#e11d48' : node.color}
              rx={4}
              opacity={node.type === 'subskill' ? 0.4 : 0.9}
            />
          ))}
        </svg>
      </div>

      {/* World Canvas (Zoomed & Panned) */}
      <div
        className="absolute top-0 left-0 w-0 h-0"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`,
          transformOrigin: '0 0'
        }}
      >
        {/* SVG Connectors Links */}
        <svg
          className="overflow-visible pointer-events-none absolute"
          style={{ width: 1, height: 1 }}
        >
          {links.map((link, idx) => {
            const isHighlighted = isMatch(link.target) && matchesImportance(link.target);
            return (
              <path
                key={`link-${idx}`}
                d={getCurvePath(link.source, link.target)}
                fill="none"
                stroke={link.color}
                strokeWidth={link.source.type === 'root' ? 3 : 2}
                strokeOpacity={isHighlighted ? 0.65 : 0.15}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Nodes Layer */}
        {nodes.map((node) => {
          const isSelected = selectedNodeId === node.id;
          const matched = isMatch(node);
          const matchedImp = matchesImportance(node);
          const isFaded = !matched || !matchedImp;
          const hasChildren = node.children && node.children.length > 0;
          const isCollapsed = collapsedMap[node.id];

          // Status record if core or subskill
          const skillStatus = skillRecords[node.id]?.status;

          return (
            <div
              key={node.id}
              onClick={() => onSelectNode(node)}
              className={`absolute group cursor-pointer transition-all duration-200 ${
                isFaded ? 'opacity-25' : 'opacity-100'
              }`}
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                width: `${node.width}px`,
                height: `${node.height}px`
              }}
            >
              {/* ROOT NODE */}
              {node.type === 'root' && (
                <div
                  className={`w-full h-full rounded-2xl p-4 bg-gradient-to-r from-rose-950/90 via-slate-900 to-rose-950/90 border-2 border-rose-500/80 shadow-2xl shadow-rose-950/50 flex items-center justify-between transition-all ${
                    isSelected ? 'ring-4 ring-rose-400' : 'hover:border-rose-400'
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-mono tracking-wider uppercase text-rose-400 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'خريطة الكفاءات 2026' : 'Competency Map 2026'}</span>
                    </div>
                    <h1 className="text-base font-bold text-white tracking-tight mt-0.5">
                      {lang === 'ar' ? node.titleAr : node.titleEn}
                    </h1>
                  </div>
                  <div className="p-2 rounded-xl bg-rose-500/20 text-rose-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>
              )}

              {/* CLUSTER NODE */}
              {node.type === 'cluster' && (
                <div
                  className={`w-full h-full rounded-xl px-3.5 py-2.5 bg-slate-900/90 backdrop-blur-md border transition-all flex items-center justify-between shadow-lg ${
                    isSelected
                      ? 'border-white ring-2 ring-white/20'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                  style={{
                    borderInlineStartColor: node.color,
                    borderInlineStartWidth: '4px'
                  }}
                >
                  <div className="overflow-hidden">
                    <h3 className="text-xs font-semibold text-slate-100 truncate">
                      {lang === 'ar' ? node.titleAr : node.titleEn}
                    </h3>
                    <span className="text-[10px] text-slate-400">
                      {node.children.length} {lang === 'ar' ? 'مهارات رئيسية' : 'skills'}
                    </span>
                  </div>

                  {hasChildren && (
                    <button
                      onClick={(e) => toggleCollapse(node.id, e)}
                      title={isCollapsed ? 'Expand' : 'Collapse'}
                      className="interactive-control ms-2 p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                    >
                      {isCollapsed ? (
                        <span className="text-xs font-mono font-bold text-slate-400">+{node.children.length}</span>
                      ) : (
                        <span className="text-xs font-mono font-bold text-slate-400">−</span>
                      )}
                    </button>
                  )}
                </div>
              )}

              {/* CORE SKILL NODE */}
              {node.type === 'core' && (
                <div
                  className={`w-full h-full rounded-xl p-2.5 bg-slate-900/95 backdrop-blur-md border transition-all flex flex-col justify-between shadow-md ${
                    isSelected
                      ? 'border-rose-500 ring-2 ring-rose-500/20 shadow-rose-950/40'
                      : 'border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {node.code}
                    </span>

                    <div className="flex items-center gap-1">
                      {node.importance && (
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                            IMPORTANCE_DEFINITIONS[node.importance].badgeBg
                          }`}
                        >
                          Grade {node.importance}
                        </span>
                      )}

                      {skillStatus && skillStatus !== 'not_started' && (
                        <div
                          className={`w-2 h-2 rounded-full ${
                            skillStatus === 'mastered'
                              ? 'bg-emerald-400'
                              : skillStatus === 'practicing'
                              ? 'bg-amber-400'
                              : 'bg-sky-400'
                          }`}
                          title={`Status: ${skillStatus}`}
                        />
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-medium text-slate-200 line-clamp-1 mt-0.5">
                    {lang === 'ar' ? node.titleAr : node.titleEn}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                    <span className="font-mono tabular-nums text-slate-500">
                      {node.totalFocusedHours || node.learningHours}
                    </span>

                    {hasChildren && (
                      <button
                        onClick={(e) => toggleCollapse(node.id, e)}
                        className="interactive-control flex items-center gap-0.5 text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded hover:bg-slate-800 transition-colors"
                      >
                        <span className="font-mono font-medium">
                          {isCollapsed ? `+${node.children.length}` : '−'}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* SUBSKILL NODE */}
              {node.type === 'subskill' && (
                <div
                  className={`w-full h-full rounded-lg px-2.5 py-1.5 bg-slate-900/80 border transition-all flex items-center justify-between text-[11px] shadow-sm ${
                    isSelected
                      ? 'border-rose-400 text-white'
                      : 'border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="truncate pe-1">
                    {lang === 'ar' ? node.titleAr : node.titleEn}
                  </span>
                  {node.importance && (
                    <span
                      className={`text-[9px] font-mono px-1 rounded shrink-0 ${
                        IMPORTANCE_DEFINITIONS[node.importance].badgeBg
                      }`}
                    >
                      {node.importance}
                    </span>
                  )}
                </div>
              )}

              {/* SPECIALIZATION NODE */}
              {node.type === 'specialization' && (
                <div
                  className={`w-full h-full rounded-lg px-3 py-2 bg-slate-900/90 border border-slate-800 transition-all flex items-center justify-between text-xs shadow-sm ${
                    isSelected
                      ? 'border-indigo-400 text-white'
                      : 'hover:border-slate-700 text-slate-200'
                  }`}
                >
                  <span className="truncate pe-2">
                    {lang === 'ar' ? node.titleAr : node.titleEn}
                  </span>
                  {node.importance && (
                    <span className="text-[10px] font-mono px-1 rounded bg-slate-800 text-slate-400">
                      {node.importance}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
