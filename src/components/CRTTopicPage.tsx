import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Layers,
  Lightbulb,
  Zap,
  AlertTriangle,
  Target,
  CheckSquare,
  Clock,
  HelpCircle,
  ChevronDown,
  FileText,
  Compass,
  BookmarkCheck,
  Award,
  GitCompare,
  Check,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { CRTTopic, CRTYearCurriculum } from '../types/crtTypes';
import { crtProgressService } from '../services/crtProgressService';
import { getCRTTopicsByYear } from '../data/crtCourseData';
import { loadTopicQuiz } from '../data/topicQuizzes';
import { TopicQuiz } from './TopicQuiz';
import { TopicQuizData, CRTReadingGuide } from '../types/crtTypes';
import { loadReadingGuide, hasReadingGuide } from '../data/reading';
import { renderReadingGuide } from './CRTReadingGuide';

interface CRTTopicPageProps {
  topic: CRTTopic;
  year: CRTYearCurriculum;
  categoryName: string;
  onSelectTopic: (topicId: string) => void;
  onBackToOverview: () => void;
}

export const CRTTopicPage: React.FC<CRTTopicPageProps> = ({
  topic,
  year,
  categoryName,
  onSelectTopic,
  onBackToOverview
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [topicQuiz, setTopicQuiz] = useState<TopicQuizData | undefined>(undefined);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const [quizNumber, setQuizNumber] = useState(18);
  const [guide, setGuide] = useState<CRTReadingGuide | undefined>(undefined);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [tocItems, setTocItems] = useState<{ id: string; label: string }[]>([]);

  // Build jump links from the numbered section cards; ids let the browser anchor to them.
  useEffect(() => {
    const root = sectionsRef.current;
    if (!root) return;
    const items: { id: string; label: string }[] = [];
    Array.from(root.children).forEach(el => {
      const m = el.querySelector('div.uppercase > span')?.textContent?.match(/^(\d+)\.\s*(.*)$/);
      if (!m) return;
      el.id = `sec-${m[1]}`;
      el.classList.add('scroll-mt-36', 'md:scroll-mt-48');
      items.push({ id: el.id, label: `${m[1]}. ${m[2].replace(/\s*\(.*$/, '')}` });
    });
    const lastNum = items.length ? Number(items[items.length - 1].id.replace('sec-', '')) : 0;
    setQuizNumber(lastNum + 1);
    if (topicQuiz && topicQuiz.topicId === topic.id) items.push({ id: 'topic-quiz', label: `${lastNum + 1}. Practice Quiz` });
    setTocItems(items);
  }, [topic.id, topicQuiz, guide]);

  const jumpTo = (id: string) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  const barRef = useRef<HTMLDivElement>(null);
  const jumpBarRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>('');

  // Reading progress bar + parallax: one passive scroll listener, batched in rAF. It only reads
  // scrollY (the document height is cached and refreshed by a ResizeObserver) and writes a transform,
  // so scrolling triggers no layout and no React state updates.
  useEffect(() => {
    const doc = document.documentElement;
    const lite = doc.dataset.perf === 'lite';
    let max = 1;
    let raf = 0;
    const measure = () => { max = Math.max(1, doc.scrollHeight - window.innerHeight); };
    const tick = () => {
      raf = 0;
      const y = window.scrollY;
      if (barRef.current) barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, y / max))})`;
      if (!lite) doc.style.setProperty('--parallax', String(Math.min(y, 700) * 0.12));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    measure();
    tick();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => { measure(); onScroll(); }) : null;
    ro?.observe(document.body);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      ro?.disconnect();
      cancelAnimationFrame(raf);
      doc.style.removeProperty('--parallax');
    };
  }, [topic.id]);

  // Which section is being read: one IntersectionObserver over the numbered sections (no scroll
  // handler, no layout reads). The top-most section inside the reading band wins.
  useEffect(() => {
    if (!('IntersectionObserver' in window) || tocItems.length === 0) return;
    const inBand = new Set<string>();
    const order = tocItems.map(i => i.id);
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) inBand.add(en.target.id); else inBand.delete(en.target.id); });
      const first = order.find(id => inBand.has(id));
      if (first) setActiveId(prev => (prev === first ? prev : first));
    }, { rootMargin: '-18% 0px -68% 0px' });
    tocItems.forEach(it => { const el = document.getElementById(it.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [tocItems]);

  // Keep the active chip in view inside the jump bar (horizontal scroll only).
  useEffect(() => {
    const bar = jumpBarRef.current;
    const chip = bar?.querySelector<HTMLElement>(`[data-chip="${activeId}"]`);
    if (bar && chip) bar.scrollTo({ left: chip.offsetLeft - bar.clientWidth / 3, behavior: 'smooth' });
  }, [activeId]);

  // Reveal each section once as it scrolls into view. Anything already on screen is left alone,
  // and print / reduced-motion CSS shows everything, so no content is ever hidden for good.
  useEffect(() => {
    const root = sectionsRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting || en.boundingClientRect.top < 0) { (en.target as HTMLElement).classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    // One shared observer. Cards already on screen are left alone; every other card is hidden
    // until it first scrolls into view, then unobserved. Re-runs (when the guide or quiz loads)
    // re-observe any card that is still waiting, so nothing stays hidden.
    Array.from(root.children).forEach(card => {
      const c = card as HTMLElement;
      if (c.classList.contains('is-in')) return;
      if (!c.classList.contains('reveal-ready')) {
        if (c.getBoundingClientRect().top < window.innerHeight) return;
        c.classList.add('reveal-ready');
      }
      io.observe(c);
    });
    return () => io.disconnect();
  }, [topic.id, guide, topicQuiz]);

  useEffect(() => {
    crtProgressService.markTopicAccessed(topic.id, topic.yearId);
    const prog = crtProgressService.getTopicProgress(topic.id, topic.yearId);
    setIsCompleted(prog.completed || prog.status === 'completed');
    window.scrollTo({ top: 0, behavior: 'instant' });
    setRevealedSolutions({});
    setTopicQuiz(undefined);
    setGuide(undefined);
    let cancelled = false;
    loadReadingGuide(topic.id).then(g => { if (!cancelled) setGuide(g); });
    loadTopicQuiz(topic.id).then(q => { if (!cancelled) setTopicQuiz(q); });
    return () => { cancelled = true; };
  }, [topic.id, topic.yearId]);

  const handleToggleCompleted = () => {
    const nextState = crtProgressService.toggleTopicCompleted(topic.id, topic.yearId);
    setIsCompleted(nextState);

    if (nextState) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.85 }
        });
      } catch {
        // Fallback
      }
    }
  };

  const toggleSolution = (questionId: string) => {
    setRevealedSolutions(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  // Calculate Previous and Next topics within the same year
  const yearTopics = getCRTTopicsByYear(topic.yearId);
  const currentIndex = yearTopics.findIndex(t => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? yearTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < yearTopics.length - 1 ? yearTopics[currentIndex + 1] : null;

  // Warm the next chapter's lazy data while the browser is idle, so "Next" feels instant.
  useEffect(() => {
    if (!nextTopic) return;
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const run = () => { loadTopicQuiz(nextTopic.id); loadReadingGuide(nextTopic.id); };
    const h = idle ? idle(run) : window.setTimeout(run, 800);
    return () => { if (!idle) window.clearTimeout(h); };
  }, [nextTopic?.id]);

  let sectionNo = 0;
  const num = () => ++sectionNo;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-w-0"
    >
      
      {/* 1. CLEAN BREADCRUMB NAVIGATION */}
      <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 py-3 px-4 sm:px-5 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs">
        <button
          onClick={onBackToOverview}
          className="font-bold text-slate-600 hover:text-blue-700 transition-colors cursor-pointer shrink-0"
        >
          CRT Syllabus
        </button>
        <span className="text-slate-300 font-bold">›</span>
        <button
          onClick={onBackToOverview}
          className="font-semibold text-slate-600 hover:text-blue-700 transition-colors cursor-pointer shrink-0"
        >
          {year.yearName}
        </button>
        <span className="text-slate-300 font-bold">›</span>
        <span className="font-semibold text-slate-600 shrink-0">
          {categoryName}
        </span>
        <span className="text-slate-300 font-bold">›</span>
        <span className="font-extrabold text-blue-700 shrink-0">
          {topic.title}
        </span>
      </nav>

      {/* Reading progress */}
      <div aria-hidden="true" className="fixed top-0 inset-x-0 h-[3px] z-[60] pointer-events-none">
        <div ref={barRef} className="h-full w-full origin-left" style={{ transform: 'scaleX(0)', background: 'linear-gradient(90deg, var(--year-a), var(--year-b))' }} />
      </div>

      {/* SYLLABUS PAGE HEADER */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div
          aria-hidden="true"
          className="glow-year absolute -top-28 -right-24 w-96 h-96 opacity-60 pointer-events-none"
          style={{ transform: 'translate3d(0, calc(var(--parallax, 0) * 1px), 0)' }}
        />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800">
                RIET CRT LMS
              </span>
              <span>•</span>
              <span>{year.yearName} • Placement Preparation</span>
              <span>•</span>
              <span className="flex items-center text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                ~{topic.estimatedMinutes} mins study
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display leading-tight tracking-tight break-words">
              {topic.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium pt-0.5 leading-relaxed">
              {topic.tagline}
            </p>
          </div>

          {/* Mark as Completed Button */}
          <div className="shrink-0 self-start md:self-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleToggleCompleted}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-xs ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{isCompleted ? '✓ COMPLETED' : 'MARK AS COMPLETED'}</span>
            </motion.button>
          </div>
        </div>

        {/* Difficulty & Placement Relevance Tag */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/90 border border-blue-200/90 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2 text-blue-800 font-extrabold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Placement Relevance & Recruiter Focus</span>
            </div>
            {topic.introduction.historicalRecruiterWeightage && (
              <span className="px-3 py-1 rounded-full bg-blue-200/80 text-blue-950 font-bold text-xs shrink-0">
                {topic.introduction.historicalRecruiterWeightage}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
            {topic.introduction.placementRelevance}
          </p>
        </div>
      </div>

      {/* JUMP LINKS: sticky glass bar from md up; the active chip follows the section being read */}
      {tocItems.length > 0 && (
        <nav
          ref={jumpBarRef}
          aria-label="Jump to section"
          className="glass glass-strong md:sticky md:top-[calc(var(--header-h)+var(--year-bar-h))] z-20 flex items-center gap-1.5 overflow-x-auto no-scrollbar rounded-full px-2 py-1.5"
        >
          {tocItems.map(it => {
            const on = it.id === activeId;
            return (
              <button
                key={it.id}
                data-chip={it.id}
                onClick={() => jumpTo(it.id)}
                aria-current={on ? 'true' : undefined}
                className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors duration-200 cursor-pointer ${
                  on ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                {it.label}
              </button>
            );
          })}
        </nav>
      )}

      {/* DETAILED TEXTBOOK CHAPTER SECTIONS */}
      <div ref={sectionsRef} className="crt-reading space-y-8">
        
        {/* 1. INTRODUCTION & WHY THE TOPIC MATTERS */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Introduction & Placement Significance</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Why This Topic is Essential for Engineering Placement
          </h2>
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3.5">
            <p className="leading-relaxed">{topic.introduction.overview}</p>
            {topic.introduction.realWorldContext && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong className="text-slate-900">Real-World & Corporate Context:</strong> {topic.introduction.realWorldContext}
              </div>
            )}
          </div>
        </div>

        {/* 2. LEARNING OBJECTIVES */}
        {topic.learningObjectives && topic.learningObjectives.length > 0 && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
              <Target className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{num()}. Learning Objectives</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              What You Will Master in This Chapter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {topic.learningObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-blue-950 font-medium flex items-start space-x-2.5"
                >
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. PREREQUISITE KNOWLEDGE */}
        {topic.prerequisiteKnowledge && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{num()}. Prerequisite Knowledge & Refresher</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              Baseline Mathematical & Logical Foundations
            </h2>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
              <div className="flex flex-wrap gap-2 pb-1">
                {topic.prerequisiteKnowledge.requiredTopics.map((req, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-md bg-slate-200 text-slate-800 font-bold text-xs">
                    Prerequisite: {req}
                  </span>
                ))}
              </div>
              <p>{topic.prerequisiteKnowledge.quickRefresher}</p>
            </div>
          </div>
        )}

        {/* READING GUIDE (lazy-loaded per chapter) */}
        {guide ? renderReadingGuide(guide, num) : hasReadingGuide(topic.id) && (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-4 min-h-[480px]" aria-hidden="true">
            <div className="skeleton h-4 w-40" />
            <div className="skeleton h-8 w-2/3" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-11/12" />
            <div className="skeleton h-4 w-4/5" />
            <div className="skeleton h-32 w-full" />
          </div>
        )}

        {/* 4 & 5. CORE CONCEPTS & DEFINITIONS */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <Layers className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Core Concepts, Models & Definitions</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Theoretical Principles & Intuitive Models
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {topic.conceptExplanation.theoreticalIntuition}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            {topic.conceptExplanation.coreDefinitions.map((def, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start space-x-3"
              >
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{def}</span>
              </div>
            ))}
          </div>

          {topic.conceptExplanation.visualOrMentalModel && (
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs sm:text-sm text-indigo-950 flex items-start space-x-3">
              <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5 text-indigo-900">Mental Visualization Anchor:</strong>
                <span className="leading-relaxed">{topic.conceptExplanation.visualOrMentalModel}</span>
              </div>
            </div>
          )}
        </div>

        {/* 6 & 7. IMPORTANT RULES, PROPERTIES & FORMULAS */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <Target className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Important Rules, Properties & Formula Sheet</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Mathematical Identities, Variable Breakdowns & Usage Conditions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {topic.importantRulesAndFormulas.map((f, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-cyan-300 block">{f.title}</span>
                  <div className="p-3 my-2 bg-slate-800 rounded-xl border border-slate-700 font-mono text-xs sm:text-sm font-bold text-cyan-200 overflow-x-auto">
                    {f.formula}
                  </div>
                  {f.variables && (
                    <div className="text-[11px] text-cyan-100 font-mono pb-1">
                      Variables: {f.variables}
                    </div>
                  )}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {f.description}
                  </p>
                </div>
                {f.simpleExample && (
                  <div className="text-[11px] text-slate-300 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <strong>Quick Application:</strong> {f.simpleExample}
                  </div>
                )}
                {f.whenToUse && (
                  <div className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">
                    When to use: {f.whenToUse}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 8. DETAILED EXPLANATION */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Comprehensive Chapter Narrative</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Deep-Dive Problem Solving Methodology
          </h2>

          <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
            {topic.detailedExplanation.mainNarrative.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {topic.detailedExplanation.deepDiveAspects && (
            <div className="space-y-3 pt-3">
              {topic.detailedExplanation.deepDiveAspects.map((aspect, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1"
                >
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 font-display">
                    {aspect.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {aspect.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 9. PROBLEM VARIATIONS */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <Compass className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Problem Types & Variations</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Placement Pattern Taxonomy
          </h2>

          <div className="space-y-3 pt-1">
            {topic.problemVariations.map((v, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 font-display">
                    {v.typeName}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 10. LARGE SOLVED EXAMPLES SECTION (8-15 EXAMPLES) */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
                <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{num()}. Comprehensive Solved Examples ({topic.solvedExamples.length} Fully Solved)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                Detailed Step-by-Step Problem Demonstrations
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-semibold self-start sm:self-auto">
              Progressive Difficulty from Foundation to Placement-Style
            </span>
          </div>

          <div className="space-y-6">
            {topic.solvedExamples.map((ex, exIdx) => (
              <div
                key={ex.id}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/90 border border-slate-200 space-y-4 shadow-2xs hover:border-blue-300 transition-colors"
              >
                {/* Example Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-xl bg-blue-600 text-white font-extrabold text-xs">
                      Example {exIdx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-display">
                      {ex.title}
                    </h3>
                  </div>

                  {ex.difficulty && (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-bold self-start sm:self-auto">
                      {ex.difficulty}
                    </span>
                  )}
                </div>

                {/* Problem Statement */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed shadow-2xs">
                  <span className="text-blue-700 font-extrabold block mb-1">Problem Question:</span>
                  {ex.question}
                </div>

                {/* Given Information and Core Concept */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 space-y-1">
                    <strong className="text-slate-700 font-bold block">Given Information:</strong>
                    <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                      {ex.givenInfo.map((g, gIdx) => (
                        <li key={gIdx}>{g}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 space-y-1">
                    <strong className="font-bold block">Concept / Formula Used:</strong>
                    <p>{ex.conceptOrFormula}</p>
                  </div>
                </div>

                {/* Step-by-Step Solution */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Detailed Derivation Steps:
                  </span>
                  {ex.steps.map(step => (
                    <div
                      key={step.stepNumber}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1.5 shadow-2xs"
                    >
                      <div className="flex items-center space-x-2 font-bold text-blue-800">
                        <span>Step {step.stepNumber}:</span>
                        <span>{step.title}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.explanation}</p>
                      {step.math && (
                        <div className="p-2 bg-slate-900 text-cyan-200 rounded-lg font-mono text-[11px] font-bold overflow-x-auto">
                          {step.math}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Final Answer & Why It Works */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5 text-xs sm:text-sm text-emerald-950">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-extrabold text-sm text-emerald-900">
                      Final Answer: {ex.finalAnswer}
                    </span>
                    <span className="px-2.5 py-0.5 bg-emerald-600 text-white rounded-md font-bold text-[10px] shrink-0 self-start sm:self-auto">
                      Step Verified
                    </span>
                  </div>
                  <p className="text-emerald-800 text-xs">
                    <strong>Why this method works:</strong> {ex.whyItWorks}
                  </p>
                  {ex.commonTrap && (
                    <p className="text-amber-900 font-semibold text-xs pt-1 border-t border-emerald-200/60">
                      ⚠️ <strong>Trap to avoid in this type:</strong> {ex.commonTrap}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 11. ALTERNATIVE METHODS COMPARISON */}
        {topic.alternativeMethods && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
              <GitCompare className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{num()}. Alternative Solving Approaches & Comparative Trade-Offs</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              {topic.alternativeMethods.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              {topic.alternativeMethods.methods.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="font-extrabold text-sm text-blue-900 block font-display">
                      {m.methodName}
                    </span>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      {m.steps.map((st, sIdx) => (
                        <li key={sIdx}>{st}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-200 space-y-1">
                    <p className="text-slate-700"><strong>Pros & Cons:</strong> {m.prosAndCons}</p>
                    <p className="text-blue-700 font-semibold"><strong>Best when:</strong> {m.whenToUse}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 12. FASTER / SHORTCUT METHODS */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <Zap className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Faster / Shortcut Methods</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            {topic.shortcutMethods.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 space-y-2 text-xs sm:text-sm">
              <span className="font-bold text-red-900 block">Traditional Method (Slow):</span>
              <p className="text-red-800 leading-relaxed">
                {topic.shortcutMethods.traditionalVsShortcut.traditionalMethod}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-900 block">Speed Shortcut (Fast):</span>
                {topic.shortcutMethods.traditionalVsShortcut.timeSavedPercent && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-bold text-[10px]">
                    Saves {topic.shortcutMethods.traditionalVsShortcut.timeSavedPercent} Time
                  </span>
                )}
              </div>
              <p className="text-emerald-800 leading-relaxed">
                {topic.shortcutMethods.traditionalVsShortcut.shortcutMethod}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
            <strong className="font-bold text-slate-800 block">Rules for Applying This Shortcut:</strong>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              {topic.shortcutMethods.rulesForApplication.map((r, rIdx) => (
                <li key={rIdx}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 13. COMMON MISTAKES & RECRUITER TRAPS */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-amber-600 font-bold uppercase tracking-wider text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{num()}. Common Mistakes & Recruiter Traps</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            High-Frequency Traps & Slip-Ups in Placement Assessments
          </h2>

          <div className="space-y-3 pt-2">
            {topic.commonMistakes.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1.5"
              >
                <div className="font-extrabold text-amber-900 flex items-center space-x-2">
                  <span>Trap #{idx + 1}:</span>
                  <span>{m.mistake}</span>
                </div>
                <p className="text-amber-800"><strong>Why it happens:</strong> {m.whyItHappens}</p>
                <p className="text-emerald-800 font-semibold"><strong>How to avoid:</strong> {m.howToAvoid}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 14. PLACEMENT & ASSESSMENT TIPS */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <Target className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Placement Strategy & Question Triage</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Time Allocation, Elimination Tactics & Recruiter Expectations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1 text-blue-950">
              <strong className="block font-bold">Target Time Allocation:</strong>
              <span className="text-base font-extrabold text-blue-800 font-mono">
                ~{topic.placementTips.timeAllocationSeconds} seconds per question
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-slate-700">
              <strong className="block font-bold text-slate-900">Question Selection Advice:</strong>
              <p>{topic.placementTips.questionSelectionAdvice}</p>
            </div>

            {topic.placementTips.eliminationTechnique && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-slate-700 sm:col-span-2">
                <strong className="block font-bold text-slate-900">Option Elimination Technique:</strong>
                <p>{topic.placementTips.eliminationTechnique}</p>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-1 text-indigo-950 sm:col-span-2">
              <strong className="block font-bold text-indigo-900">Recruiter Evaluation Insight:</strong>
              <p>{topic.placementTips.recruiterInsight}</p>
            </div>
          </div>
        </div>

        {/* 15. MIXED CHALLENGE SET */}
        {topic.mixedChallengeSet && topic.mixedChallengeSet.length > 0 && (
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-md space-y-5">
            <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider text-xs">
              <Flame className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{num()}. Mixed Challenge Problem Set</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-display">
                Cross-Concept Evaluation
              </h2>
              <p className="text-xs text-slate-300">
                Problems combining multiple rules where the required method must be identified by you.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {topic.mixedChallengeSet.map((cq, cqIdx) => {
                const isRevealed = revealedSolutions[cq.id];

                return (
                  <div
                    key={cq.id}
                    className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-extrabold text-xs text-cyan-300 uppercase tracking-wider">
                        Challenge #{cqIdx + 1}
                      </span>
                      <button
                        onClick={() => toggleSolution(cq.id)}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-200 transition-colors cursor-pointer flex items-center space-x-1"
                      >
                        <span>{isRevealed ? 'Hide Solution' : 'View Full Solution'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isRevealed ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-100 leading-relaxed">
                      {cq.question}
                    </p>

                    {cq.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                        {cq.options.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 font-medium text-slate-200"
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}

                    {isRevealed && (
                      <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/40 text-xs text-cyan-100 space-y-1.5 animate-in fade-in duration-150">
                        <div className="font-extrabold text-cyan-300 text-sm">
                          Answer: {cq.correctAnswer}
                        </div>
                        <div className="text-slate-300 leading-relaxed">
                          <strong>Solution:</strong> {cq.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 16. QUICK REVISION CHEAT-SHEET */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <BookmarkCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Quick Revision Cheat-Sheet</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            High-Yield Summary & Exam Day Reminders
          </h2>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
            <ul className="space-y-2 text-slate-700">
              {topic.quickRevision.summaryBullets.map((b, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {topic.quickRevision.quickFormulas && (
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <span className="font-extrabold text-slate-900 block text-xs uppercase tracking-wider">
                  Core Formulas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {topic.quickRevision.quickFormulas.map((f, idx) => (
                    <code
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 text-cyan-200 font-mono text-xs font-bold"
                    >
                      {f}
                    </code>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 17. KEY TAKEAWAYS */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex items-center space-x-2 text-cyan-300 font-bold uppercase tracking-wider text-xs">
            <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{num()}. Key Takeaways</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold font-display">
            Essential Chapter Summary
          </h2>

          <ul className="space-y-2.5 pt-2">
            {topic.keyTakeaways.map((takeaway, idx) => (
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

        {/* 18. SELF-CHECK REFLECTION */}
        {topic.selfCheckQuestions && topic.selfCheckQuestions.length > 0 && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-emerald-700 font-bold uppercase tracking-wider text-xs">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{num()}. Self-Check Diagnostic Checklist</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              Can You Confidently Solve These?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {topic.selfCheckQuestions.map((sc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-medium flex items-start space-x-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{sc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 19. SOURCES & REFERENCES */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs">
            <FileText className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{num()}. Sources & Verified References</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Curriculum Research & Auditable Basis
          </h2>

          <div className="space-y-3 pt-1">
            {topic.sourcesAndReferences.map((ref, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-slate-900 font-bold">{ref.sourceName}</strong>
                  <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 text-[10px] font-semibold uppercase">
                    {ref.sourceType}
                  </span>
                </div>
                <p className="text-slate-600">{ref.referenceNote}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 italic pt-1">
            *This comprehensive lesson is compiled from verified placement assessment standards, institutional curricula, and recognized textbooks.
          </p>
        </div>

      </div>

      {/* TOPIC-WISE QUIZ */}
      {topicQuiz && topicQuiz.topicId === topic.id && (
        <TopicQuiz topicId={topic.id} yearId={topic.yearId} quiz={topicQuiz} sectionNumber={quizNumber} />
      )}

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
              <span>Prev: {prevTopic.title.split('—')[0]}</span>
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

        {/* Center Completion Toggle */}
        <div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleToggleCompleted}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>{isCompleted ? '✓ COMPLETED' : 'MARK AS COMPLETED'}</span>
          </motion.button>
        </div>

        {/* Next Topic */}
        <div>
          {nextTopic && (
            <button
              onClick={() => onSelectTopic(nextTopic.id)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Next: {nextTopic.title.split('—')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </motion.div>
  );
};
