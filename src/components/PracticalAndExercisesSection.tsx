import React from 'react';
import { FileCode, GraduationCap, CheckCircle2, Table, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { CourseUnit } from '../types';

interface PracticalAndExercisesSectionProps {
  unit: CourseUnit;
  onSelectUnit: (unitId: number) => void;
  onSelectTopic: (topicId: string) => void;
  onBackToOverview: () => void;
}

export const PracticalAndExercisesSection: React.FC<PracticalAndExercisesSectionProps> = ({
  unit,
  onSelectUnit,
  onSelectTopic,
  onBackToOverview
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back to Unit Button */}
      <div>
        <button
          onClick={() => onSelectUnit(unit.id)}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-blue-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {unit.number} Overview</span>
        </button>
      </div>

      {/* Main Header */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
          <FileCode className="w-3.5 h-3.5 text-amber-600" />
          <span>{unit.number} Practicals & Exercises</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display">
          Teacher Demos & Student Assignment Problems
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          {unit.title} — Classroom practical demonstrations and student lab exercises.
        </p>
      </div>

      {/* UNIT 1 EXCLUSIVE: WIDELY USED AI TOOLS COMPARISON TABLE */}
      {unit.aiToolsTable && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <Table className="w-4 h-4 text-blue-600" />
            <span>AI Tool Comparison</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Widely Used AI Tools by Application Category
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="py-3.5 px-4 border-r border-slate-800 w-1/4">Category</th>
                  <th className="py-3.5 px-4 border-r border-slate-800 w-1/3">Example Tools</th>
                  <th className="py-3.5 px-4">Typical Applications</th>
                </tr>
              </thead>
              <tbody>
                {unit.aiToolsTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}>
                    <td className="py-3 px-4 font-extrabold text-slate-900 border-r border-slate-200 border-b">
                      {row.category}
                      {row.isOptional && (
                        <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                          OPTIONAL
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 border-r border-slate-200 border-b">
                      <div className="flex flex-wrap gap-1.5">
                        {row.exampleTools.map(tool => (
                          <span key={tool} className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 font-bold text-xs border border-blue-100">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b">
                      <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-700">
                        {row.typicalApplications.map((app, aIdx) => (
                          <li key={aIdx}>{app}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TEACHER PRACTICAL EXAMPLES */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <span>Classroom Demonstrations</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Teacher Practical Examples ({unit.teacherExamples.length})
        </h2>

        <div className="space-y-6">
          {unit.teacherExamples.map(ex => (
            <div
              key={ex.id}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {ex.number}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 font-display">
                  {ex.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {ex.description}
              </p>

              {/* Step-by-Step Procedure */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Teacher Walkthrough Steps:
                </div>
                <div className="space-y-2">
                  {ex.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start space-x-2.5 shadow-2xs"
                    >
                      <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {ex.teachingNote && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 font-semibold flex items-start space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Pedagogical Note:</strong> {ex.teachingNote}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* STUDENT EXERCISE PROBLEMS */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
          <FileCode className="w-4 h-4 text-blue-600" />
          <span>Student Assignments</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Student Exercise Problems ({unit.studentExercises.length})
        </h2>

        <div className="space-y-6">
          {unit.studentExercises.map(stuEx => (
            <div
              key={stuEx.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 hover:border-blue-400 shadow-2xs transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  {stuEx.number}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 font-display">
                  {stuEx.title}
                </h3>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Problem Statement:
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  {stuEx.problemStatement}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-950 font-medium">
                  <strong>Required Deliverable:</strong> {stuEx.deliverable}
                </div>
                {stuEx.guidance && (
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
                    <strong>Guidance Note:</strong> {stuEx.guidance}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="pt-4 flex justify-between">
        <button
          onClick={() => onSelectUnit(unit.id)}
          className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all flex items-center space-x-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {unit.number} Overview</span>
        </button>

        <button
          onClick={() => onSelectTopic(unit.topics[0].id)}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center space-x-2 cursor-pointer"
        >
          <span>Start {unit.number} Topic 1</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
