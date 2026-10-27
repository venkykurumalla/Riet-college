import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Sparkles, ChevronRight, Brain, Cpu } from 'lucide-react';
import { COURSE_UNITS, getAllTopics } from '../data/aiToolsCourseData';
import { getAllCRTTopics, getCRTTopicById } from '../data/crtCourseData';
import { SyllabusTopic, CourseUnit } from '../types';
import { CRTTopic, CRTYearId } from '../types/crtTypes';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAITopic: (topicId: string) => void;
  onSelectCRTTopic: (topicId: string, yearId: CRTYearId) => void;
}

type SearchItem =
  | {
      type: 'ai-tools';
      topic: SyllabusTopic;
      unit: CourseUnit;
      matchType: string;
      matchedText: string;
    }
  | {
      type: 'crt';
      topic: CRTTopic;
      yearName: string;
      category: string;
      matchType: string;
      matchedText: string;
    };

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectAITopic,
  onSelectCRTTopic
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results: SearchItem[] = [];
  const q = query.trim().toLowerCase();

  if (q.length > 0) {
    // 1. Search AI Tools Topics
    const allAITopics = getAllTopics();
    allAITopics.forEach(topic => {
      const unit = COURSE_UNITS.find(u => u.id === topic.unitId)!;

      if (topic.title.toLowerCase().includes(q)) {
        results.push({
          type: 'ai-tools',
          topic,
          unit,
          matchType: 'Title',
          matchedText: topic.title
        });
      } else if (topic.syllabusPoint.toLowerCase().includes(q)) {
        results.push({
          type: 'ai-tools',
          topic,
          unit,
          matchType: 'Syllabus',
          matchedText: topic.syllabusPoint
        });
      } else {
        const conceptMatch = topic.content.keyConcepts.find(
          c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
        );
        if (conceptMatch) {
          results.push({
            type: 'ai-tools',
            topic,
            unit,
            matchType: 'Concept',
            matchedText: conceptMatch.title
          });
        }
      }
    });

    // 2. Search CRT Syllabus Topics
    const allCRTTopics = getAllCRTTopics();
    allCRTTopics.forEach(topic => {
      const item = getCRTTopicById(topic.id);
      const yearName = item ? item.year.yearName : `${topic.yearId}th Year`;
      const category = item ? item.category : topic.category;

      if (topic.title.toLowerCase().includes(q)) {
        results.push({
          type: 'crt',
          topic,
          yearName,
          category,
          matchType: 'Title',
          matchedText: topic.title
        });
      } else if (topic.tagline.toLowerCase().includes(q)) {
        results.push({
          type: 'crt',
          topic,
          yearName,
          category,
          matchType: 'Tagline',
          matchedText: topic.tagline
        });
      } else if (topic.introduction.overview.toLowerCase().includes(q)) {
        results.push({
          type: 'crt',
          topic,
          yearName,
          category,
          matchType: 'Overview',
          matchedText: topic.introduction.overview.slice(0, 100) + '...'
        });
      }
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center space-x-3 bg-slate-50">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search across CRT Aptitude & AI Tools (e.g. 'Percentages', 'Seating', 'TCS NQT', 'LLM')..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {q.length === 0 ? (
            <div className="text-center py-10 space-y-3 text-slate-400">
              <Sparkles className="w-8 h-8 text-blue-400 mx-auto" />
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Search across all 4 years of CRT Placement Training and AI Tools coursework.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs">
                {['Percentages', 'HCF & LCM', 'Seating Arrangement', 'Para Jumbles', 'Speed Math', 'TCS NQT', 'prompt engineering'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold transition-colors cursor-pointer"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 space-y-2 text-slate-500">
              <p className="font-bold text-slate-700">No matching topics found for "{query}"</p>
              <p className="text-xs text-slate-400">Try searching for terms like "Number System", "Profit", "Relative Speed", or "Grammar".</p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Found {results.length} matching topics
              </div>
              {results.map((item, idx) => {
                if (item.type === 'crt') {
                  return (
                    <button
                      key={`crt-${item.topic.id}-${idx}`}
                      onClick={() => {
                        onSelectCRTTopic(item.topic.id, item.topic.yearId);
                        onClose();
                      }}
                      className="w-full text-left p-4 rounded-2xl bg-white hover:bg-blue-50/80 border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white font-extrabold text-[10px] flex items-center space-x-1">
                            <Brain className="w-3 h-3" />
                            <span>CRT {item.yearName}</span>
                          </span>
                          <span className="text-slate-500 font-semibold">{item.category}</span>
                          <span className="text-slate-300">•</span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold">
                            Matched: {item.matchType}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display">
                          {item.topic.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {item.matchedText}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                    </button>
                  );
                }

                return (
                  <button
                    key={`ai-${item.topic.id}-${idx}`}
                    onClick={() => {
                      onSelectAITopic(item.topic.id);
                      onClose();
                    }}
                    className="w-full text-left p-4 rounded-2xl bg-white hover:bg-indigo-50/80 border border-slate-200 hover:border-indigo-300 transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-extrabold text-[10px] flex items-center space-x-1">
                          <Cpu className="w-3 h-3" />
                          <span>AI Tools</span>
                        </span>
                        <span className="font-bold text-indigo-700">{item.unit.number}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500">Topic {item.topic.topicNumber}</span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold">
                          Matched: {item.matchType}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors font-display">
                        {item.topic.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {item.matchedText}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
