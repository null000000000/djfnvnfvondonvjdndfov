import { CORE_SKILLS, SPECIALIZATIONS, LIFECYCLE_PHASES, OPERATION_FAMILIES, CoreSkill } from '../data/skillTreeData';

export interface MindMapNode {
  id: string;
  parentId: string | null;
  code?: string;
  titleEn: string;
  titleAr: string;
  type: 'root' | 'cluster' | 'core' | 'subskill' | 'specialization' | 'lifecycle' | 'operation';
  importance?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  learningHours?: string;
  masteryHours?: string;
  totalFocusedHours?: string;
  whyItMattersEn?: string;
  whyItMattersAr?: string;
  subskillsCount?: number;
  children: MindMapNode[];
  rawCoreSkill?: CoreSkill;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  collapsed?: boolean;
}

export function buildMindMapTree(lang: 'ar' | 'en'): MindMapNode {
  // Group core skills into 6 primary branches
  const clusters = [
    {
      id: 'cluster-foundations',
      titleEn: 'Foundations & Math',
      titleAr: 'الأساسيات والرياضيات',
      color: '#3b82f6', // blue
      cores: ['CORE 01', 'CORE 02']
    },
    {
      id: 'cluster-ai-arch',
      titleEn: 'AI/ML & Architecture',
      titleAr: 'معمارية الذكاء الاصطناعي و LLMs',
      color: '#06b6d4', // cyan
      cores: ['CORE 03', 'CORE 04']
    },
    {
      id: 'cluster-engineering',
      titleEn: 'Engineering & Application Integration',
      titleAr: 'الهندسة والتكامل البرمجي والتوجيهات',
      color: '#10b981', // emerald
      cores: ['CORE 05', 'CORE 06', 'CORE 07']
    },
    {
      id: 'cluster-attacks',
      titleEn: 'Threat Modeling & Practical Attacks',
      titleAr: 'نمذجة التهديدات والاختراق العملي',
      color: '#ef4444', // red
      cores: ['CORE 08', 'CORE 09']
    },
    {
      id: 'cluster-rag-agents',
      titleEn: 'RAG, Retrieval & Agentic Security',
      titleAr: 'أمن أنظمة RAG والوكلاء الذاتيين و MCP',
      color: '#f59e0b', // amber
      cores: ['CORE 10', 'CORE 11']
    },
    {
      id: 'cluster-aml-privacy',
      titleEn: 'Adversarial ML & Model Privacy',
      titleAr: 'التعلم الآلي العدائي والخصوصية',
      color: '#8b5cf6', // purple
      cores: ['CORE 12', 'CORE 13']
    },
    {
      id: 'cluster-supply-multi',
      titleEn: 'Supply Chain, MLOps & Multimodal',
      titleAr: 'سلاسل الإمداد والوسائط المتعددة',
      color: '#ec4899', // pink
      cores: ['CORE 14', 'CORE 15']
    },
    {
      id: 'cluster-eval-safety',
      titleEn: 'Evaluation Science & AI Safety',
      titleAr: 'علم التقييم المؤتمت وسلامة النماذج',
      color: '#14b8a6', // teal
      cores: ['CORE 16', 'CORE 17']
    },
    {
      id: 'cluster-defense-ops',
      titleEn: 'Defense, Monitoring & Operations',
      titleAr: 'الدفاع والمراقبة والعمليات الاحترافية',
      color: '#6366f1', // indigo
      cores: ['CORE 18', 'CORE 19']
    },
    {
      id: 'cluster-specializations',
      titleEn: '14 Deep Specializations',
      titleAr: '14 تخصصاً دقيقاً ومتقدماً',
      color: '#64748b', // slate
      isSpecializationGroup: true
    }
  ];

  const rootNode: MindMapNode = {
    id: 'root-ai-red-team',
    parentId: null,
    titleEn: 'AI Red Team Skill Tree',
    titleAr: 'شجرة مهارات الـ AI Red Team',
    type: 'root',
    children: [],
    x: 0,
    y: 0,
    width: 280,
    height: 80,
    color: '#e11d48'
  };

  clusters.forEach((cluster) => {
    const clusterNode: MindMapNode = {
      id: cluster.id,
      parentId: 'root-ai-red-team',
      titleEn: cluster.titleEn,
      titleAr: cluster.titleAr,
      type: 'cluster',
      color: cluster.color,
      children: [],
      x: 0,
      y: 0,
      width: 250,
      height: 56
    };

    if (cluster.isSpecializationGroup) {
      // Add specializations
      SPECIALIZATIONS.forEach((spec) => {
        clusterNode.children.push({
          id: spec.id,
          parentId: cluster.id,
          titleEn: spec.titleEn,
          titleAr: spec.titleAr,
          type: 'specialization',
          importance: spec.importance,
          color: cluster.color,
          children: [],
          x: 0,
          y: 0,
          width: 240,
          height: 50
        });
      });
    } else if (cluster.cores) {
      cluster.cores.forEach((code) => {
        const core = CORE_SKILLS.find((c) => c.code === code);
        if (core) {
          const coreNode: MindMapNode = {
            id: core.id,
            parentId: cluster.id,
            code: core.code,
            titleEn: core.titleEn,
            titleAr: core.titleAr,
            type: 'core',
            importance: core.importance,
            learningHours: core.learningHours,
            masteryHours: core.masteryHours,
            totalFocusedHours: core.totalFocusedHours,
            whyItMattersEn: core.whyItMattersEn,
            whyItMattersAr: core.whyItMattersAr,
            subskillsCount: core.subskills.length,
            color: cluster.color,
            rawCoreSkill: core,
            children: [],
            x: 0,
            y: 0,
            width: 260,
            height: 64
          };

          // Add subskills
          core.subskills.forEach((sub) => {
            coreNode.children.push({
              id: sub.id,
              parentId: core.id,
              titleEn: sub.nameEn,
              titleAr: sub.nameAr,
              type: 'subskill',
              importance: sub.importance,
              color: cluster.color,
              children: [],
              x: 0,
              y: 0,
              width: 230,
              height: 40
            });
          });

          clusterNode.children.push(coreNode);
        }
      });
    }

    rootNode.children.push(clusterNode);
  });

  return rootNode;
}

export interface PositionedNode extends MindMapNode {
  side?: 'left' | 'right';
}

/**
 * Two-sided horizontal layout algorithm:
 * Distributes main clusters between Right and Left of the root.
 * Right side: Core 01 - Core 10 (Foundations, Architecture, Engineering, Attacks, RAG)
 * Left side: Core 11 - Core 19 & Specializations
 */
export function layoutMindMap(
  root: MindMapNode,
  collapsedMap: Record<string, boolean>,
  isRtl: boolean = true
): { nodes: PositionedNode[]; links: { source: PositionedNode; target: PositionedNode; color: string }[] } {
  const nodes: PositionedNode[] = [];
  const links: { source: PositionedNode; target: PositionedNode; color: string }[] = [];

  // Root position at 0, 0
  const rootNode: PositionedNode = {
    ...root,
    x: 0,
    y: 0,
    side: 'right'
  };
  nodes.push(rootNode);

  const totalClusters = root.children.length;
  // Split clusters roughly half and half
  const rightClusters = root.children.slice(0, Math.ceil(totalClusters / 2));
  const leftClusters = root.children.slice(Math.ceil(totalClusters / 2));

  function calculateSubtreeHeight(node: MindMapNode): number {
    const isCollapsed = collapsedMap[node.id];
    if (isCollapsed || node.children.length === 0) {
      return node.height + 24;
    }
    const childrenHeight = node.children.reduce((acc, child) => acc + calculateSubtreeHeight(child), 0);
    return Math.max(node.height + 24, childrenHeight);
  }

  function layoutBranch(
    branchNodes: MindMapNode[],
    side: 'left' | 'right',
    startX: number
  ) {
    const totalHeight = branchNodes.reduce((acc, c) => acc + calculateSubtreeHeight(c), 0);
    let currentY = -totalHeight / 2;

    branchNodes.forEach((cluster) => {
      const clusterSubtreeHeight = calculateSubtreeHeight(cluster);
      const clusterX = side === 'right' ? startX : -startX - cluster.width;
      const clusterY = currentY + clusterSubtreeHeight / 2 - cluster.height / 2;

      const placedCluster: PositionedNode = {
        ...cluster,
        x: clusterX,
        y: clusterY,
        side
      };
      nodes.push(placedCluster);
      links.push({ source: rootNode, target: placedCluster, color: cluster.color });

      // If not collapsed, layout its children (Core skills or Specializations)
      if (!collapsedMap[cluster.id]) {
        const childStartX = side === 'right' ? clusterX + cluster.width + 120 : clusterX - 120;
        const totalChildHeight = cluster.children.reduce((acc, c) => acc + calculateSubtreeHeight(c), 0);
        let childCurrentY = clusterY + cluster.height / 2 - totalChildHeight / 2;

        cluster.children.forEach((child) => {
          const childHeight = calculateSubtreeHeight(child);
          const childNodeX = side === 'right' ? childStartX : childStartX - child.width;
          const childNodeY = childCurrentY + childHeight / 2 - child.height / 2;

          const placedChild: PositionedNode = {
            ...child,
            x: childNodeX,
            y: childNodeY,
            side
          };
          nodes.push(placedChild);
          links.push({ source: placedCluster, target: placedChild, color: cluster.color });

          // If child has children (e.g. subskills) and is not collapsed
          if (!collapsedMap[child.id] && child.children.length > 0) {
            const subStartX = side === 'right' ? childNodeX + child.width + 80 : childNodeX - 80;
            const totalSubHeight = child.children.reduce((acc, s) => acc + (s.height + 12), 0);
            let subCurrentY = childNodeY + child.height / 2 - totalSubHeight / 2;

            child.children.forEach((sub) => {
              const subNodeX = side === 'right' ? subStartX : subStartX - sub.width;
              const subNodeY = subCurrentY;

              const placedSub: PositionedNode = {
                ...sub,
                x: subNodeX,
                y: subNodeY,
                side
              };
              nodes.push(placedSub);
              links.push({ source: placedChild, target: placedSub, color: cluster.color });

              subCurrentY += sub.height + 12;
            });
          }

          childCurrentY += childHeight;
        });
      }

      currentY += clusterSubtreeHeight;
    });
  }

  // Layout right side clusters (distance 220px from center)
  layoutBranch(rightClusters, 'right', 200);
  // Layout left side clusters
  layoutBranch(leftClusters, 'left', 200);

  return { nodes, links };
}
