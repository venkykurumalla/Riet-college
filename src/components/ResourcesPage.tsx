import React from 'react';
import { Bookmark, ExternalLink, BookOpen, GraduationCap, ArrowLeft, ShieldCheck } from 'lucide-react';
import { TEXTBOOKS, REFERENCE_BOOKS, WEB_RESOURCES } from '../data/aiToolsCourseData';

interface ResourcesPageProps {
  onBackToOverview: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onBackToOverview }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Back Button */}
      <div>
        <button
          onClick={onBackToOverview}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-blue-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Syllabus Overview</span>
        </button>
      </div>

      {/* Main Header */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Bookmark className="w-3.5 h-3.5 text-blue-600" />
          <span>Academic Literature & Web Links</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display">
          Learning Resources & Reference Books
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Official prescribed textbooks, reference literature, and external web portals for AI Tools and Applications.
        </p>
      </div>

      {/* 1. TEXTBOOKS SECTION */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>Prescribed Text Books</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
          Text Books ({TEXTBOOKS.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TEXTBOOKS.map((tb, idx) => (
            <div
              key={tb.id}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3 hover:border-blue-400 transition-colors shadow-2xs"
            >
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-700">
                <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <span>{tb.publisher} ({tb.year})</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 font-display leading-snug">
                {tb.title}
              </h3>
              <p className="text-xs font-semibold text-slate-600">
                Author(s): {tb.authors}
              </p>
              {tb.description && (
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  {tb.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. REFERENCE BOOKS SECTION */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <span>Supplementary Literature</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
          Reference Books ({REFERENCE_BOOKS.length})
        </h2>

        <div className="space-y-4">
          {REFERENCE_BOOKS.map((rb, idx) => (
            <div
              key={rb.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 hover:border-blue-300 shadow-2xs transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-500">
                  <span className="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>{rb.publisher} • {rb.year}</span>
                </div>
                {rb.edition && (
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-bold">
                    {rb.edition}
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                {rb.title}
              </h3>
              <p className="text-xs font-semibold text-slate-600">
                Authors: {rb.authors}
              </p>
              {rb.description && (
                <p className="text-xs text-slate-500 leading-relaxed">
                  {rb.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. WEB RESOURCES SECTION */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
          <ExternalLink className="w-4 h-4 text-blue-600" />
          <span>Official Web Portals</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
          Web Resources ({WEB_RESOURCES.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WEB_RESOURCES.map(wr => (
            <a
              key={wr.id}
              href={wr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-blue-400 transition-all group flex flex-col justify-between space-y-3 cursor-pointer shadow-2xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">
                    {wr.badgeText}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors font-display">
                  {wr.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {wr.description}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-mono font-bold text-blue-600 group-hover:underline truncate">
                {wr.url}
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};
