import { useState, useEffect } from 'react';
import { ProgressState, CORE_SKILLS, CHECKLIST_ITEMS } from '../data/skillTreeData';

export interface UserSkillRecord {
  status: ProgressState;
  notes: string;
  evidenceUrl?: string;
  lastUpdated?: string;
}

export function useProgressStore() {
  const [skillRecords, setSkillRecords] = useState<Record<string, UserSkillRecord>>(() => {
    try {
      const saved = localStorage.getItem('ai_red_team_skills_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [checklistCompleted, setChecklistCompleted] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ai_red_team_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedSkills, setBookmarkedSkills] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ai_red_team_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lang, setLang] = useState<'ar' | 'en'>(() => {
    try {
      const saved = localStorage.getItem('ai_red_team_lang');
      return saved === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ai_red_team_skills_progress', JSON.stringify(skillRecords));
    } catch (e) {
      console.error(e);
    }
  }, [skillRecords]);

  useEffect(() => {
    try {
      localStorage.setItem('ai_red_team_checklist', JSON.stringify(checklistCompleted));
    } catch (e) {
      console.error(e);
    }
  }, [checklistCompleted]);

  useEffect(() => {
    try {
      localStorage.setItem('ai_red_team_bookmarks', JSON.stringify(bookmarkedSkills));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedSkills]);

  useEffect(() => {
    try {
      localStorage.setItem('ai_red_team_lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    } catch (e) {
      console.error(e);
    }
  }, [lang]);

  const updateSkillStatus = (skillId: string, status: ProgressState) => {
    setSkillRecords((prev) => ({
      ...prev,
      [skillId]: {
        ...(prev[skillId] || { notes: '' }),
        status,
        lastUpdated: new Date().toISOString()
      }
    }));
  };

  const updateSkillNotes = (skillId: string, notes: string) => {
    setSkillRecords((prev) => ({
      ...prev,
      [skillId]: {
        ...(prev[skillId] || { status: 'not_started' }),
        notes,
        lastUpdated: new Date().toISOString()
      }
    }));
  };

  const toggleBookmark = (skillId: string) => {
    setBookmarkedSkills((prev) =>
      prev.includes(skillId) ? prev.filter((id) => id !== skillId) : [...prev, skillId]
    );
  };

  const toggleChecklistItem = (itemId: string) => {
    setChecklistCompleted((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Progress stats
  const totalCoreCount = CORE_SKILLS.length;
  let masteredCores = 0;
  let practicingCores = 0;
  let learningCores = 0;

  CORE_SKILLS.forEach((c) => {
    const rec = skillRecords[c.id];
    if (rec?.status === 'mastered') masteredCores++;
    else if (rec?.status === 'practicing') practicingCores++;
    else if (rec?.status === 'learning') learningCores++;
  });

  const totalChecklist = CHECKLIST_ITEMS.length;
  const completedChecklist = CHECKLIST_ITEMS.filter((item) => checklistCompleted[item.id]).length;
  const checklistPercentage = Math.round((completedChecklist / totalChecklist) * 100);

  const resetAllProgress = () => {
    if (window.confirm(lang === 'ar' ? 'هل أنت متأكد من رغبتك في إعادة ضبط كل التقدم والملاحظات؟' : 'Are you sure you want to reset all progress and notes?')) {
      setSkillRecords({});
      setChecklistCompleted({});
      setBookmarkedSkills([]);
    }
  };

  const exportProgressJson = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      skillRecords,
      checklistCompleted,
      bookmarkedSkills
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-red-team-skill-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return {
    skillRecords,
    checklistCompleted,
    bookmarkedSkills,
    lang,
    setLang,
    updateSkillStatus,
    updateSkillNotes,
    toggleBookmark,
    toggleChecklistItem,
    stats: {
      totalCoreCount,
      masteredCores,
      practicingCores,
      learningCores,
      totalChecklist,
      completedChecklist,
      checklistPercentage
    },
    resetAllProgress,
    exportProgressJson
  };
}
