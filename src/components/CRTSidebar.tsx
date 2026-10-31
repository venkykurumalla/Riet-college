import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Brain,
  Sparkles,
  Search,
  X,
  GraduationCap,
  ArrowLeft,
  ClipboardList,
  Star
} from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { CRTYearId } from '../types/crtTypes';
import { getCRTYearCurriculum } from '../data/crtCourseData';
import { crtProgressService } from '../services/crtProgressService';
import { getModuleId, hasQuiz, getBestScore } from '../data/quizData/index';

interface CRTSidebarProps {
  selectedYear: CRTYearId;
  activeTopicId?: string;
  activeQuizModuleId?: string;
  onSelectOverview: () => void;
  onSelectTopic: (topicId: string) => void;
  onSelectQuiz: (moduleId: string, categoryName: string) => void;
  onOpenSearch: () => void;
  onNavigateSelection: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const CRTSidebar: React.FC<CRTSidebarProps> = ({
  selectedYear,
  activeTopicId,
  activeQuizModuleId,
  onSelectOverview,
  onSelectTopic,
  onSelectQuiz,
  onOpenSearch,
  onNavigateSelection,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'Quantitative Aptitude': true,
    'Logical Reasoning': true,
    'Verbal Ability': true,
    'Data Interpretation': true,
    'Placement Strategy & Shortcuts': true
  });

  const yearData = getCRTYearCurriculum(selectedYear);
  const yearProgress = crtProgressService.getYearProgress(selectedYear);
  const allProgress = crtProgressService.getAllProgress();

  const toggleCategory = (catName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCategories(prev => ({ ...prev, [catName]: !prev[catName] }));
  };

  const content = (
    <div className="flex flex-col h-full glass rounded-none border-y-0 border-l-0 w-72 shrink-0 select-none overflow-hidden">
      
      {/* Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold shadow-xs">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 font-display leading-tight">
              RIET CRT LMS
            </h2>
            <p className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">
              {yearData.yearName} • Placement Prep
            </p>
          </div>
        </div>

        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="p-1.5 text-slate-400 hover:text-slate-600 lg:hidden cursor-pointer rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Button */}
      <div className="p-3 border-b border-slate-100">
        <button
          onClick={() => {
            onOpenSearch();
            onCloseMobile?.();
          }}
          className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-700 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer border border-slate-200/80"
        >
          <span className="flex items-center space-x-2">
            <Search className="w-3.5 h-3.5 text-blue-600" />
            <span>Search CRT topics...</span>
          </span>
          <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded-md font-mono text-slate-400">
            Ctrl+K
          </kbd>
        </button>
      </div>

      {/* Selected Year Progress Meter */}
      <div key={`prog-${selectedYear}`} className="yr-swap yr-rise p-4 bg-white/40 border-b border-slate-100">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
          <span className="flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{yearData.yearName} Progress</span>
          </span>
          <span className="text-blue-700 font-extrabold">{yearProgress.percentage}%</span>
        </div>
        <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: yearProgress.percentage / 100 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left', background: 'linear-gradient(90deg, var(--year-a), var(--year-b))' }}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="text-[11px] text-slate-500 mt-1 font-medium">
          {yearProgress.completedTopics} of {yearProgress.totalTopics} topics completed
        </div>
      </div>

      {/* Scrollable Topics Section */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 no-scrollbar">
        
        {/* Overview Tab Link */}
        <button
          onClick={() => {
            onSelectOverview();
            onCloseMobile?.();
          }}
          className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
            !activeTopicId
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-700 hover:bg-white/60'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>{yearData.yearName} Syllabus Overview</span>
        </button>

        {/* Categories & Topics Accordion */}
        <div key={`cats-${selectedYear}`} className="yr-swap yr-rise space-y-3">
          <LayoutGroup id={`sb-${selectedYear}`}>
          {yearData.categories.map(cat => {
            const isExpanded = expandedCategories[cat.category] !== false;

            return (
              <div key={cat.category} className="space-y-1">
                {/* Category Header */}
                <div
                  onClick={e => toggleCategory(cat.category, e)}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-extrabold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <div className="flex items-center space-x-1.5 truncate">
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                    <span className="truncate">{cat.category}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0">
                    ({cat.topics.length})
                  </span>
                </div>

                {/* Sub Topics List */}
                <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                  <div className="pl-3 space-y-0.5 border-l-2 border-slate-100 ml-2 py-0.5">
                    {cat.topics.map(topic => {
                      const prog = allProgress[topic.id];
                      const isCompleted = prog?.completed || prog?.status === 'completed';
                      const isTopicActive = activeTopicId === topic.id;

                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            onSelectTopic(topic.id);
                            onCloseMobile?.();
                          }}
                          className={`relative w-full text-left px-2.5 py-2 rounded-lg text-[11px] font-semibold transition-colors duration-150 flex items-center justify-between group cursor-pointer ${
                            isTopicActive
                              ? 'text-slate-950 font-bold'
                              : 'text-slate-600 hover:bg-white/60 hover:text-slate-900'
                          }`}
                        >
                          {isTopicActive && (
                            <motion.span
                              layoutId="sbActive"
                              aria-hidden="true"
                              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                              className="absolute inset-0 rounded-lg -z-0"
                              style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.7))',
                                boxShadow: 'inset 0 1px 0 #fff, 0 0 0 1px color-mix(in srgb, var(--year-b) 40%, transparent), 0 4px 12px -4px color-mix(in srgb, var(--year-b) 45%, transparent)'
                              }}
                            />
                          )}
                          <span className="relative truncate pr-2">
                            {topic.topicNumber}. {topic.title.split('—')[0]}
                          </span>

                          <span className="relative shrink-0 flex items-center gap-1.5">
                            {prog?.quizBest !== undefined && (
                              <span className={`text-[9px] font-extrabold ${isTopicActive ? 'text-amber-200' : 'text-amber-600'}`}>
                                ★{prog.quizBest}/{prog.quizTotal}
                              </span>
                            )}
                            {isCompleted ? (
                              <CheckCircle2 className={`w-3.5 h-3.5 ${isTopicActive ? 'text-cyan-200' : 'text-emerald-600'}`} />
                            ) : (
                              <Circle className={`w-3 h-3 ${isTopicActive ? 'text-blue-200' : 'text-slate-300'}`} />
                            )}
                          </span>
                        </button>
                      );
                    })}

                    {/* Quiz Entry Point — last item of every module */}
                    {(() => {
                      const modId = getModuleId(selectedYear, cat.category);
                      if (!modId || !hasQuiz(modId)) return null;
                      const isQuizActive = activeQuizModuleId === modId;
                      const best = getBestScore(modId);
                      return (
                        <button
                          onClick={() => {
                            onSelectQuiz(modId, cat.category);
                            onCloseMobile?.();
                          }}
                          className={`w-full text-left px-2.5 py-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-between cursor-pointer mt-1 ${
                            isQuizActive
                              ? 'bg-indigo-600 text-white shadow-2xs'
                              : 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60'
                          }`}
                        >
                          <span className="flex items-center gap-1.5 truncate pr-1">
                            <ClipboardList className="w-3 h-3 shrink-0" />
                            <span>{cat.category.split(' ')[0]} Quiz</span>
                          </span>
                          {best !== null ? (
                            <span className={`shrink-0 flex items-center gap-0.5 text-[10px] font-extrabold ${
                              isQuizActive ? 'text-indigo-200' : 'text-amber-600'
                            }`}>
                              <Star className="w-2.5 h-2.5" />
                              {best}/5
                            </span>
                          ) : (
                            <span className={`shrink-0 text-[9px] font-bold uppercase tracking-wider ${
                              isQuizActive ? 'text-indigo-200' : 'text-indigo-500'
                            }`}>
                              New
                            </span>
                          )}
                        </button>
                      );
                    })()}
                  </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            );
          })}
          </LayoutGroup>
        </div>

        {/* Switch Syllabus Link */}
        <div className="pt-3 border-t border-slate-100">
          <button
            onClick={() => {
              onNavigateSelection();
              onCloseMobile?.();
            }}
            className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center space-x-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Switch Syllabus Hub</span>
          </button>
        </div>

      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block h-[calc(100vh-64px)] sm:h-[calc(100vh-80px)] sticky top-16 sm:top-20 shadow-xs shrink-0">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/50"
            onClick={onCloseMobile}
          />
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-72 max-w-[80vw] h-full shadow-2xl"
          >
            {content}
          </motion.div>
        </div>
      )}
    </>
  );
};
