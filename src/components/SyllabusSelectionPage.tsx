import React from 'react';
import { BookOpen, Sparkles, ArrowRight, ArrowLeft, Brain, Cpu, ShieldCheck, Target, Award, CheckCircle2 } from 'lucide-react';
import { fontCourseInfo } from '../data/aiToolsCourseData';
import { crtProgressService } from '../services/crtProgressService';
import { progressService } from '../services/progressService';

interface SyllabusSelectionPageProps {
  onSelectCRT: () => void;
  onSelectAITools: () => void;
  onNavigateHome: () => void;
}

export const SyllabusSelectionPage: React.FC<SyllabusSelectionPageProps> = ({
  onSelectCRT,
  onSelectAITools,
  onNavigateHome
}) => {
  const crtProgress = crtProgressService.getOverallCRTProgress();
  const aiProgress = progressService.getOverallProgress();

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 flex flex-col justify-center items-center">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto space-y-10">
        
        {/* Navigation Breadcrumb / Back Button */}
        <div>
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header Title Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>RIET Academic & Placement Learning Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            CRT LMS
          </h1>
          <p className="text-sm sm:text-base font-bold text-slate-500 tracking-wide uppercase">
            Select Your Syllabus
          </p>
        </div>

        {/* 2 SYLLABUS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
          
          {/* OPTION 1: CRT SYLLABUS */}
          <div className="relative group rounded-3xl bg-white border-2 border-slate-200 hover:border-blue-500 p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:shadow-blue-600/15 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
                  <Brain className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-extrabold uppercase tracking-wider">
                  4-Year Career Training
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display group-hover:text-blue-700 transition-colors">
                  CRT SYLLABUS
                </h2>
                <p className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wide">
                  Aptitude • Reasoning • Placement Preparation
                </p>
              </div>

              {/* Description & Topics Preview */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comprehensive 4-Year Campus Recruitment Training curriculum covering Quantitative Aptitude, Logical Reasoning, Verbal Ability, Data Interpretation, Speed Shortcuts, and Recruiter Assessment Patterns.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1st Year Foundation to 4th Year Placement-Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>TCS NQT, CoCubes, AMCAT, SHL & Tech Assessment Blueprints</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Step-by-Step Solved Examples & Topic-Wise Quizzes</span>
                </div>
              </div>

              {/* Progress if any */}
              {crtProgress.completedTopics > 0 && (
                <div className="p-3 bg-blue-50/70 rounded-2xl border border-blue-200 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between font-bold">
                    <span>CRT Completion</span>
                    <span className="text-blue-700">{crtProgress.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-blue-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${crtProgress.percentage}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Button: [ OPEN CRT ] */}
            <button
              onClick={onSelectCRT}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center justify-center space-x-2 cursor-pointer group/btn"
            >
              <span>OPEN CRT</span>
              <ArrowRight className="w-4 h-4 text-cyan-200 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* OPTION 2: AI TOOLS & APPLICATIONS */}
          <div className="relative group rounded-3xl bg-white border-2 border-slate-200 hover:border-indigo-500 p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:shadow-indigo-600/15 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex items-center justify-center shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
                  <Cpu className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[11px] font-extrabold uppercase tracking-wider">
                  Academic Course
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display group-hover:text-indigo-700 transition-colors">
                  AI TOOLS & APPLICATIONS
                </h2>
                <p className="text-xs sm:text-sm font-bold text-indigo-600 uppercase tracking-wide">
                  B.Tech CSE(DS) – R26 • Units 1–5
                </p>
              </div>

              {/* Description & Topics Preview */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Official institutional LMS for AI Tools and Applications. Covers prompt engineering, code synthesis, document processing, ethics, DPDP Act 2023, practical exercises, and lab experiments.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>5 Complete Academic Modules & JNTU-aligned Syllabus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive Teacher Examples & Student Lab Exercises</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>CO-PO Mapping, Bloom's Taxonomy & Textbooks</span>
                </div>
              </div>

              {/* Progress if any */}
              {aiProgress.completedTopics > 0 && (
                <div className="p-3 bg-indigo-50/70 rounded-2xl border border-indigo-200 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between font-bold">
                    <span>Course Completion</span>
                    <span className="text-indigo-700">{aiProgress.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-indigo-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${aiProgress.percentage}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Button: [ OPEN LMS ] */}
            <button
              onClick={onSelectAITools}
              className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all flex items-center justify-center space-x-2 cursor-pointer group/btn"
            >
              <span>OPEN LMS</span>
              <ArrowRight className="w-4 h-4 text-indigo-200 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Minimal Footer Note */}
        <div className="text-center text-xs text-slate-400 font-medium">
          Rajamahendri Institute of Engineering & Technology • Integrated LMS Portal
        </div>

      </div>
    </div>
  );
};
