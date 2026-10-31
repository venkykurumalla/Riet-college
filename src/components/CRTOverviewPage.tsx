import React, { useState } from 'react';
import {
  Brain,
  Sparkles,
  ArrowLeft,
  Clock,
  CheckCircle2,
  Circle,
  ChevronRight,
  Info,
  Layers,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CRTYearId, CRTTopic } from '../types/crtTypes';
import { getCRTYearCurriculum } from '../data/crtCourseData';
import { crtProgressService } from '../services/crtProgressService';
import { CRTSourcesModal } from './CRTSourcesModal';

interface CRTOverviewPageProps {
  selectedYear: CRTYearId;
  onSelectYear: (yearId: CRTYearId) => void;
  onSelectTopic: (topicId: string) => void;
  onNavigateBackToSelection: () => void;
}

export const CRTOverviewPage: React.FC<CRTOverviewPageProps> = ({
  selectedYear,
  onSelectYear,
  onSelectTopic,
  onNavigateBackToSelection
}) => {
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const yearData = getCRTYearCurriculum(selectedYear);
  const yearProgress = crtProgressService.getYearProgress(selectedYear);
  const allYearsProgress = crtProgressService.getAllYearsProgress();
  const allProgress = crtProgressService.getAllProgress();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 min-w-0">
      
      <div>
        <button
          onClick={onNavigateBackToSelection}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-blue-700 transition-colors cursor-pointer self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Syllabus Selection</span>
        </button>
      </div>

      {/* Year content: one short fade when the year changes */}
      <div className="space-y-8">
          {/* Main CRT Banner Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-2 border border-blue-500 shadow-md flex items-center justify-center shrink-0">
                  <Brain className="w-9 h-9" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
                    <span>{yearData.yearName} • {yearData.levelTitle.split('—')[0]}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
                    RIET CRT Placement Preparation — {yearData.yearName}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-3xl">
                    {yearData.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Year Progress Meter */}
            <div className="pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-slate-900 text-sm sm:text-base font-display">
                    {yearData.yearName} CRT Progress
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-blue-700">
                  {yearProgress.completedTopics} of {yearProgress.totalTopics} topics completed ({yearProgress.percentage}%)
                </div>
              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: yearProgress.percentage / 100 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: 'left', background: 'linear-gradient(90deg, var(--year-a), var(--year-b))' }}
                  className="h-full w-full rounded-full"
                />
              </div>
            </div>

            {/* MANDATORY RESEARCH & CURRICULUM DISCLAIMER NOTE */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200/90 flex items-start space-x-3 text-xs text-blue-950">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-1.5 leading-relaxed">
                <p className="font-medium">
                  <strong>RIET CRT Recommended Learning Path:</strong> This year-wise learning path is organized from research across placement assessments, institutional training curricula and established aptitude-learning resources. Recruiter-specific requirements and exam patterns may vary.
                </p>
                <div>
                  <button
                    onClick={() => setIsSourcesOpen(true)}
                    className="inline-flex items-center space-x-1.5 text-blue-700 hover:text-blue-900 font-extrabold underline cursor-pointer"
                  >
                    <span>View Auditable Research Sources & Assessment References (18 Sources) →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ALL 4 YEARS PROGRESS AT A GLANCE CARD */}
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  Career Readiness Benchmark
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold font-display">
                  4-Year CRT Progressive Mastery
                </h2>
              </div>
              <span className="text-xs text-slate-400">
                Click any year card to switch active curriculum view.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
              {([1, 2, 3, 4] as CRTYearId[]).map(yId => {
                const p = allYearsProgress[yId];
                const isCurrent = selectedYear === yId;
                const labels: Record<CRTYearId, { name: string; focus: string }> = {
                  1: { name: '1st Year', focus: 'Foundation Math & Logic' },
                  2: { name: '2nd Year', focus: 'Intermediate Aptitude' },
                  3: { name: '3rd Year', focus: 'Advanced Placement' },
                  4: { name: '4th Year', focus: 'Placement-Ready / Speed' }
                };

                return (
                  <motion.div
                    key={yId}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectYear(yId)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                      isCurrent
                        ? 'bg-blue-950/90 border-cyan-400 shadow-md ring-2 ring-cyan-400/40'
                        : 'bg-slate-800/70 border-slate-700/80 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm font-display">{labels[yId].name}</span>
                      <span className="text-xs font-mono font-bold text-cyan-300">{p.percentage}%</span>
                    </div>

                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: p.percentage / 100 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: 'left' }}
                        className="h-full w-full bg-cyan-400 rounded-full"
                      />
                    </div>

                    <div className="text-[11px] text-slate-400 flex justify-between">
                      <span>{labels[yId].focus}</span>
                      <span>{p.completedTopics}/{p.totalTopics}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CATEGORIES & TOPIC CHAPTERS LIST */}
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                {yearData.yearName} Curriculum Modules
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Click any topic below to open its complete interactive LMS study chapter.
              </p>
            </div>

            <div className="space-y-6">
              {yearData.categories.map((cat, catIdx) => (
                <div
                  key={cat.category}
                  className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="w-7 h-7 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                          {catIdx + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                          {cat.category}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold shrink-0 self-start sm:self-auto">
                      {cat.topics.length} Chapters
                    </span>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.topics.map(topic => {
                      const prog = allProgress[topic.id];
                      const isCompleted = prog?.completed || prog?.status === 'completed';
                      const isInProgress = prog?.status === 'in-progress';

                      return (
                        <motion.div
                          key={topic.id}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => onSelectTopic(topic.id)}
                          className="contain-card p-5 sm:p-6 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-blue-400 transition-colors duration-150 cursor-pointer flex flex-col justify-between space-y-3.5 group shadow-2xs hover:shadow-md"
                        >
                          <div className="space-y-2">
                            {/* Topic Header metadata */}
                            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                              <div className="flex items-center space-x-2">
                                <span className="text-blue-700 font-extrabold">Chapter {topic.topicNumber}</span>
                                <span>•</span>
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  ~{topic.estimatedMinutes} mins
                                </span>
                              </div>

                              <span className="flex items-center gap-1.5">
                              {prog?.quizBest !== undefined && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800">
                                  Quiz {prog.quizBest}/{prog.quizTotal}
                                </span>
                              )}
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  isCompleted
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : isInProgress
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-slate-200 text-slate-700'
                                }`}
                              >
                                {isCompleted ? '✓ Completed' : isInProgress ? 'In Progress' : 'Not Started'}
                              </span>
                              </span>
                            </div>

                            {/* Title & Tagline */}
                            <h4 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors font-display leading-snug">
                              {topic.title}
                            </h4>

                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
                              {topic.tagline}
                            </p>
                          </div>

                          {/* Action Footer */}
                          <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-700">
                            <span className="text-[11px] text-slate-500 font-medium">
                              {topic.solvedExamples.length} Examples
                            </span>
                            <span className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                              <span>Open Chapter</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>

      {/* Sources and References Modal */}
      <CRTSourcesModal
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
      />

    </div>
  );
};
