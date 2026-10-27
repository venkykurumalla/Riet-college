import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Layers,
  Lightbulb,
  Cpu,
  Compass,
  CheckSquare,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SyllabusTopic, CourseUnit } from '../types';
import { progressService } from '../services/progressService';
import { getAllTopics } from '../data/aiToolsCourseData';

interface TopicPageProps {
  topic: SyllabusTopic;
  unit: CourseUnit;
  onSelectTopic: (topicId: string) => void;
  onSelectUnit: (unitId: number) => void;
  onBackToOverview: () => void;
}

export const TopicPage: React.FC<TopicPageProps> = ({
  topic,
  unit,
  onSelectTopic,
  onSelectUnit,
  onBackToOverview
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    progressService.markTopicAccessed(topic.id);
    const prog = progressService.getTopicProgress(topic.id);
    setIsCompleted(prog.completed || prog.status === 'completed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topic.id]);

  const handleToggleCompleted = () => {
    const nextState = progressService.toggleTopicCompleted(topic.id);
    setIsCompleted(nextState);

    if (nextState) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch {
        // Confetti optional fallback
      }
    }
  };

  // Previous and Next topic calculation
  const allTopics = getAllTopics();
  const currentIndex = allTopics.findIndex(t => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 5. BREADCRUMB: Syllabus → Unit X → Topic Y */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 py-2.5 px-4 bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-x-auto">
        <button
          onClick={onBackToOverview}
          className="font-bold text-slate-600 hover:text-blue-700 transition-colors shrink-0 cursor-pointer"
        >
          Syllabus Overview
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <button
          onClick={() => onSelectUnit(unit.id)}
          className="font-bold text-slate-600 hover:text-blue-700 transition-colors shrink-0 cursor-pointer"
        >
          {unit.number}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="font-bold text-blue-700 truncate shrink-0 max-w-[200px] sm:max-w-none">
          Topic {topic.topicNumber}: {topic.title}
        </span>
      </nav>

      {/* TOP TOPIC TITLE & COMPLETED HEADER */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span>{unit.number}</span>
              <span>•</span>
              <span>Topic {topic.topicNumber}</span>
              <span>•</span>
              <span>~{topic.estimatedMinutes} mins read</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display leading-tight">
              {topic.title}
            </h1>
          </div>

          {/* Mark as Completed Button */}
          <div className="shrink-0">
            <button
              onClick={handleToggleCompleted}
              className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xs ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? '✓ COMPLETED' : 'MARK AS COMPLETED'}</span>
            </button>
          </div>
        </div>

        {/* B. Official Syllabus Point Banner */}
        <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 space-y-1">
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-800 flex items-center">
            <FileText className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
            Official Syllabus Point
          </div>
          <p className="text-xs sm:text-sm font-semibold text-blue-950 italic leading-relaxed">
            "{topic.syllabusPoint}"
          </p>
        </div>
      </div>

      {/* MAIN TOPIC CONTENT SECTION */}
      <div className="space-y-8">
        
        {/* C. Overview & Beginner-Friendly Explanation */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Topic Explanation</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Overview & Core Explanation
          </h2>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line space-y-4">
            <p className="font-semibold text-slate-800 bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
              {topic.content.overview}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {topic.content.explanation}
            </p>
          </div>
        </div>

        {/* D. Key Concepts Cards */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Important Concepts</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Key Concepts to Remember
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {topic.content.keyConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 font-display">
                    {concept.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* E & F. Simple Real-World & Engineering Examples */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span>Examples</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              Simple Real-World Examples
            </h2>

            <div className="space-y-2.5">
              {topic.content.realWorldExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200/70 text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start space-x-3"
                >
                  <Sparkles className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{ex}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>Academic Engineering Application</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              First-Year B.Tech Engineering Examples
            </h2>

            <div className="space-y-2.5">
              {topic.content.engineeringExamples.map((engEx, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-blue-950 font-medium leading-relaxed flex items-start space-x-3"
                >
                  <Cpu className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{engEx}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* G. Practical Application */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Practical Application</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            {topic.content.practicalApplication.title}
          </h2>

          <div className="space-y-2.5 pt-2">
            {topic.content.practicalApplication.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900 text-slate-100 text-xs sm:text-sm leading-relaxed font-mono flex items-start space-x-3"
              >
                <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* H. Key Takeaways */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 text-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex items-center space-x-2 text-cyan-300 font-bold uppercase tracking-wider text-xs">
            <CheckSquare className="w-4 h-4 text-cyan-400" />
            <span>Key Takeaways</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold font-display">
            Summary for Exam & Lab Preparation
          </h2>

          <ul className="space-y-2.5 pt-2">
            {topic.content.keyTakeaways.map((takeaway, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM ACTION BAR: MARK COMPLETED & PREVIOUS / NEXT TOPIC */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Previous Topic */}
        <div>
          {prevTopic ? (
            <button
              onClick={() => onSelectTopic(prevTopic.id)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Topic</span>
            </button>
          ) : (
            <button
              onClick={onBackToOverview}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Syllabus Overview</span>
            </button>
          )}
        </div>

        {/* Center Completion Button */}
        <div>
          <button
            onClick={handleToggleCompleted}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>{isCompleted ? '✓ COMPLETED' : 'MARK AS COMPLETED'}</span>
          </button>
        </div>

        {/* Next Topic */}
        <div>
          {nextTopic && (
            <button
              onClick={() => onSelectTopic(nextTopic.id)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Next Topic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
