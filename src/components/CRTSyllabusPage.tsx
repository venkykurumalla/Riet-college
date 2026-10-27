import React from 'react';
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  ArrowLeft,
  GraduationCap,
  Target,
  Table,
  FileCode,
  Bookmark,
  ExternalLink
} from 'lucide-react';
import {
  fontCourseInfo,
  COURSE_OBJECTIVES,
  COURSE_OUTCOMES,
  CO_PO_MAPPING,
  COURSE_UNITS,
  TEXTBOOKS,
  REFERENCE_BOOKS,
  WEB_RESOURCES
} from '../data/aiToolsCourseData';
import { progressService } from '../services/progressService';
import { CourseUnit } from '../types';

interface CRTSyllabusPageProps {
  onSelectUnit: (unitId: number) => void;
  onSelectTopic: (topicId: string) => void;
  onSelectPracticals: (unitId: number) => void;
  onSelectResources: () => void;
  onNavigateHome: () => void;
}

export const CRTSyllabusPage: React.FC<CRTSyllabusPageProps> = ({
  onSelectUnit,
  onSelectTopic,
  onSelectPracticals,
  onSelectResources,
  onNavigateHome
}) => {
  const overall = progressService.getOverallProgress();
  const allProgress = progressService.getAllProgress();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Back to Home Link */}
      <div>
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-blue-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main Course Header */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
              <img
                src="/riet-logo.png"
                alt="RIET College Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-1">
                <span>{fontCourseInfo.programme}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display">
                {fontCourseInfo.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                {fontCourseInfo.university} • L-T-P-C: {fontCourseInfo.ltpc} • Pre-requisites: {fontCourseInfo.prerequisites}
              </p>
            </div>
          </div>
        </div>

        {/* Overall Progress Indicator */}
        <div className="pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-slate-900 text-sm sm:text-base font-display">
                Overall Course Progress
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-blue-700">
              {overall.completedTopics} of {overall.totalTopics} topics completed ({overall.percentage}%)
            </div>
          </div>

          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
              style={{ width: `${overall.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2. COURSE OBJECTIVES SECTION */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
          <Target className="w-4 h-4 text-blue-600" />
          <span>Course Objectives</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
          Objectives of AI Tools and Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {COURSE_OBJECTIVES.map(obj => (
            <div
              key={obj.id}
              className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start space-x-3"
            >
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {obj.id}
              </span>
              <span>{obj.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. COURSE OUTCOMES (COs) */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <span>Course Outcomes (COs)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
          Expected Learning Outcomes
        </h2>
        <div className="space-y-3 pt-2">
          {COURSE_OUTCOMES.map(co => (
            <div
              key={co.id}
              className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-xl bg-blue-100 text-blue-800 font-extrabold text-xs">
                  {co.id}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                  {co.description}
                </span>
              </div>
              <span className="self-start sm:self-center px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold shrink-0">
                Bloom's: {co.bloomLevel}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CO-PO MAPPING TABLE */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
          <Table className="w-4 h-4 text-blue-600" />
          <span>CO-PO Mapping</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
          Course Outcome to Program Outcome Mapping Matrix
        </h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-center text-xs border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white font-bold">
                <th className="py-3 px-3 border-r border-blue-500">CO / PO</th>
                {['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9', 'PO10', 'PO11', 'PSO1', 'PSO2', 'PSO3'].map(po => (
                  <th key={po} className="py-3 px-2 border-r border-blue-500 min-w-[38px]">{po}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CO_PO_MAPPING.map((row, idx) => (
                <tr key={row.co} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="py-2.5 px-3 font-extrabold text-blue-900 border-r border-slate-200 border-b">{row.co}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po1}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po2}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po3}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po4}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po5}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po6}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po7}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po8}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po9}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po10}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-700">{row.po11}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-400">{row.pso1 || '-'}</td>
                  <td className="py-2.5 px-2 border-r border-slate-200 border-b font-bold text-slate-400">{row.pso2 || '-'}</td>
                  <td className="py-2.5 px-2 border-b font-bold text-slate-400">{row.pso3 || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
          <span className="text-slate-700 font-bold">Mapping Scale Note:</span>
          <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 font-bold">H = High</span>
          <span className="px-2 py-0.5 rounded-md bg-cyan-50 text-cyan-800 font-bold">M = Medium</span>
          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold">L = Low</span>
        </div>
      </div>

      {/* 6. UNITS LIST (MODULE CARDS) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-display">
              Course Modules (Units 1 – 5)
            </h2>
            <p className="text-xs text-slate-500">
              Click any unit or topic to open detailed interactive LMS learning material.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {COURSE_UNITS.map(unit => {
            const unitProg = overall.unitProgress[unit.id] || { total: unit.topics.length, completed: 0, percentage: 0 };

            return (
              <div
                key={unit.id}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-blue-400 transition-all space-y-6 group"
              >
                {/* Unit Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-extrabold text-xs">
                      {unit.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display group-hover:text-blue-700 transition-colors">
                      {unit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                      {unit.description}
                    </p>
                  </div>

                  {/* Unit Progress pill & Open Unit Button */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
                    <div className="text-xs font-bold text-slate-700">
                      Progress: <span className="text-blue-700 font-extrabold">{unitProg.percentage}%</span> ({unitProg.completed}/{unitProg.total})
                    </div>
                    <button
                      onClick={() => onSelectUnit(unit.id)}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center space-x-2 cursor-pointer"
                    >
                      <span>Open Unit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {unit.topics.map(topic => {
                    const prog = allProgress[topic.id];
                    const isCompleted = prog?.completed || prog?.status === 'completed';

                    return (
                      <div
                        key={topic.id}
                        onClick={() => onSelectTopic(topic.id)}
                        className="p-4 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-blue-300 transition-all cursor-pointer flex items-start justify-between space-x-3 group/topic shadow-2xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-[11px] font-bold text-slate-400">
                            <span>Topic {topic.topicNumber}</span>
                            <span>•</span>
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              ~{topic.estimatedMinutes} mins
                            </span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover/topic:text-blue-700 transition-colors font-display line-clamp-1">
                            {topic.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {topic.syllabusPoint}
                          </p>
                        </div>

                        <div className="shrink-0 pt-0.5">
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 group-hover/topic:text-blue-500" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Teacher Examples & Student Exercises Action Link */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <button
                    onClick={() => onSelectPracticals(unit.id)}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold border border-amber-200 transition-colors cursor-pointer"
                  >
                    <FileCode className="w-4 h-4 text-amber-600" />
                    <span>View {unit.number} Practical Examples & Student Exercises →</span>
                  </button>

                  <span className="text-slate-400 text-[11px] font-medium">
                    Contains Teacher Demos & Student Assignment Problems
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 7. RESOURCES OVERVIEW SECTION */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
              Course References
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Textbooks, Reference Books & Web Portals
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Official academic literature and web portals for the AI Tools and Applications course.
            </p>
          </div>
          <button
            onClick={onSelectResources}
            className="hidden sm:flex px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors items-center space-x-2 cursor-pointer"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="text-xs font-bold text-cyan-300">Textbooks (2)</div>
            <p className="text-xs text-slate-300 line-clamp-2">
              B. Marr (2024) - Generative AI in Practice; E. Mollick (2024) - Co-Intelligence.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="text-xs font-bold text-cyan-300">Reference Books (3)</div>
            <p className="text-xs text-slate-300 line-clamp-2">
              N. Selwyn (2022); R. Susskind (2022); S. Russell & P. Norvig (2021).
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="text-xs font-bold text-cyan-300">Web Resources (6)</div>
            <p className="text-xs text-slate-300 line-clamp-2">
              Google AI Essentials, OpenAI Docs, Anthropic, UNESCO, AICTE, MeitY DPDP Act 2023.
            </p>
          </div>
        </div>

        <div className="pt-2 sm:hidden">
          <button
            onClick={onSelectResources}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Open Learning Resources</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
