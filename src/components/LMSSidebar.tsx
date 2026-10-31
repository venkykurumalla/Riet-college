import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Bookmark,
  FileCode,
  GraduationCap,
  Sparkles,
  Search,
  X
} from 'lucide-react';
import { COURSE_UNITS } from '../data/aiToolsCourseData';
import { progressService } from '../services/progressService';

interface LMSSidebarProps {
  currentView: string;
  activeTopicId?: string;
  activeUnitId?: number;
  onSelectOverview: () => void;
  onSelectUnit: (unitId: number) => void;
  onSelectTopic: (topicId: string) => void;
  onSelectPracticals: (unitId: number) => void;
  onSelectResources: () => void;
  onOpenSearch: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const LMSSidebar: React.FC<LMSSidebarProps> = ({
  currentView,
  activeTopicId,
  activeUnitId,
  onSelectOverview,
  onSelectUnit,
  onSelectTopic,
  onSelectPracticals,
  onSelectResources,
  onOpenSearch,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const [expandedUnits, setExpandedUnits] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true
  });

  const overall = progressService.getOverallProgress();
  const allProgress = progressService.getAllProgress();

  const toggleUnit = (unitId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  const content = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200 w-72 shrink-0 select-none">
      
      {/* Sidebar Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 font-display leading-tight">
              RIET CRT LMS
            </h2>
            <p className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">
              AI Tools & Applications
            </p>
          </div>
        </div>

        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="p-1.5 text-slate-400 hover:text-slate-600 md:hidden cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Course Search Button */}
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
            <span>Search syllabus...</span>
          </span>
          <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded-md font-mono text-slate-400">
            Ctrl+K
          </kbd>
        </button>
      </div>

      {/* Progress Bar Summary */}
      <div className="p-4 bg-slate-50/80 border-b border-slate-100">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
          <span className="flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Course Progress</span>
          </span>
          <span className="text-blue-700">{overall.percentage}%</span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${overall.percentage}%` }}
          />
        </div>
        <div className="text-[11px] text-slate-500 mt-1 font-medium">
          {overall.completedTopics} of {overall.totalTopics} topics completed
        </div>
      </div>

      {/* Nav Items Scrollable */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        
        {/* Course Core Section */}
        <div className="space-y-1">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3 mb-1">
            Course Foundation
          </div>
          <button
            onClick={() => {
              onSelectOverview();
              onCloseMobile?.();
            }}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
              currentView === 'overview'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>Syllabus & Objectives</span>
            </span>
          </button>
        </div>

        {/* Units Navigation */}
        <div className="space-y-3">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3">
            Course Units (5)
          </div>

          {COURSE_UNITS.map(unit => {
            const unitProg = overall.unitProgress[unit.id] || { total: unit.topics.length, completed: 0, percentage: 0 };
            const isExpanded = expandedUnits[unit.id];
            const isUnitActive = activeUnitId === unit.id && currentView === 'unit';

            return (
              <div key={unit.id} className="space-y-1">
                {/* Unit Header */}
                <div
                  onClick={() => {
                    onSelectUnit(unit.id);
                    onCloseMobile?.();
                  }}
                  className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isUnitActive
                      ? 'bg-blue-50 text-blue-800 border border-blue-200'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate">
                    <button
                      onClick={e => toggleUnit(unit.id, e)}
                      className="p-0.5 hover:bg-slate-200/80 rounded-md transition-colors cursor-pointer text-slate-400 hover:text-slate-700"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <span className="truncate">{unit.number}: {unit.title}</span>
                  </div>

                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 shrink-0 ml-1">
                    {unitProg.completed}/{unitProg.total}
                  </span>
                </div>

                {/* Sub Topics List */}
                {isExpanded && (
                  <div className="pl-4 space-y-0.5 border-l-2 border-slate-100 ml-3 py-1">
                    {unit.topics.map(topic => {
                      const prog = allProgress[topic.id];
                      const isCompleted = prog?.completed || prog?.status === 'completed';
                      const isTopicActive = activeTopicId === topic.id && currentView === 'topic';

                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            onSelectTopic(topic.id);
                            onCloseMobile?.();
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center justify-between group cursor-pointer ${
                            isTopicActive
                              ? 'bg-blue-600 text-white shadow-2xs font-bold'
                              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <span className="truncate pr-2">
                            {topic.topicNumber}. {topic.title}
                          </span>

                          <span className="shrink-0">
                            {isCompleted ? (
                              <CheckCircle2 className={`w-3.5 h-3.5 ${isTopicActive ? 'text-cyan-200' : 'text-emerald-600'}`} />
                            ) : (
                              <Circle className={`w-3 h-3 ${isTopicActive ? 'text-blue-200' : 'text-slate-300'}`} />
                            )}
                          </span>
                        </button>
                      );
                    })}

                    {/* Teacher Examples & Student Exercises Tab */}
                    <button
                      onClick={() => {
                        onSelectPracticals(unit.id);
                        onCloseMobile?.();
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                        currentView === 'practicals' && activeUnitId === unit.id
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'text-amber-700 hover:bg-amber-50'
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5 text-amber-600" />
                      <span>Practicals & Exercises</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Resources Section */}
        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={() => {
              onSelectResources();
              onCloseMobile?.();
            }}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
              currentView === 'resources'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Learning Resources & Books</span>
          </button>
        </div>

      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block h-[calc(100vh-64px)] sticky top-16 shadow-xs">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/50"
            onClick={onCloseMobile}
          />
          <div className="relative z-10 w-72 max-w-[80vw] h-full shadow-2xl animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
