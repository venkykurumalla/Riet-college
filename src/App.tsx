import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { SyllabusSelectionPage } from './components/SyllabusSelectionPage';
import { CRTSyllabusPage } from './components/CRTSyllabusPage';
import { TopicPage } from './components/TopicPage';
import { PracticalAndExercisesSection } from './components/PracticalAndExercisesSection';
import { ResourcesPage } from './components/ResourcesPage';
import { LMSSidebar } from './components/LMSSidebar';
import { CRTYearSelector } from './components/CRTYearSelector';

// The CRT area (year data + 206 chapters) is a separate chunk: Home and Syllabus Selection
// load fast, and the chunk is fetched in the background once the browser is idle.
const loadCRTSidebar = () => import('./components/CRTSidebar').then(m => ({ default: m.CRTSidebar }));
const loadCRTOverview = () => import('./components/CRTOverviewPage').then(m => ({ default: m.CRTOverviewPage }));
const loadCRTTopicView = () => import('./components/CRTTopicView').then(m => ({ default: m.CRTTopicView }));
const loadCRTQuiz = () => import('./components/CRTModuleQuiz').then(m => ({ default: m.CRTModuleQuiz }));
const loadSearch = () => import('./components/SearchModal').then(m => ({ default: m.SearchModal }));
const CRTSidebar = lazy(loadCRTSidebar);
const CRTOverviewPage = lazy(loadCRTOverview);
const CRTTopicView = lazy(loadCRTTopicView);
const CRTModuleQuiz = lazy(loadCRTQuiz);
const SearchModal = lazy(loadSearch);

const PageSkeleton: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6" aria-hidden="true">
    <div className="skeleton h-10 w-2/3" />
    <div className="skeleton h-56 w-full" />
    <div className="skeleton h-40 w-full" />
  </div>
);
import { Footer } from './components/Footer';
import { getTopicById, COURSE_UNITS } from './data/aiToolsCourseData';
import { progressService } from './services/progressService';
import { crtProgressService } from './services/crtProgressService';
import { CRTYearId } from './types/crtTypes';
import { ErrorBoundary } from './components/ErrorBoundary';

export type CurrentView =
  | { type: 'home' }
  | { type: 'selection' }
  // AI Tools Course LMS branch
  | { type: 'ai-overview' }
  | { type: 'ai-unit'; unitId: number }
  | { type: 'ai-topic'; topicId: string }
  | { type: 'ai-practicals'; unitId: number }
  | { type: 'ai-resources' }
  // CRT Preparation LMS branch
  | { type: 'crt-overview'; yearId: CRTYearId }
  | { type: 'crt-topic'; topicId: string; yearId: CRTYearId }
  | { type: 'crt-quiz'; moduleId: string; categoryName: string; yearId: CRTYearId };

export const App: React.FC = () => {
  const [view, setView] = useState<CurrentView>({ type: 'home' });
  const [crtSelectedYear, setCrtSelectedYear] = useState<CRTYearId>(1);
  const [tintYear, setTintYear] = useState<CRTYearId>(1); // follows the click at once; content swaps a beat later
  const yearTimer = useRef<number | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchUsed, setSearchUsed] = useState(false); // mount the lazy search modal on first open
  useEffect(() => { if (isSearchOpen) setSearchUsed(true); }, [isSearchOpen]);

  // Fetch the CRT chunk in the background once idle so opening the syllabus feels instant.
  useEffect(() => {
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const warm = () => { loadCRTSidebar(); loadCRTOverview(); loadCRTTopicView(); loadCRTQuiz(); };
    const h = idle ? idle(warm) : window.setTimeout(warm, 1500);
    return () => { if (!idle) window.clearTimeout(h); };
  }, []);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [, setTick] = useState(0);

  // Subscribe to progress changes so updates reflect immediately
  useEffect(() => {
    const unsubAI = progressService.subscribe(() => setTick(t => t + 1));
    const unsubCRT = crtProgressService.subscribe(() => setTick(t => t + 1));
    return () => {
      unsubAI();
      unsubCRT();
    };
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigateHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'home' });
  };

  const handleOpenSyllabusSelection = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'selection' });
  };

  // CRT Navigation Handlers
  const handleOpenCRT = (yearId: CRTYearId = crtSelectedYear) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setCrtSelectedYear(yearId);
    setView({ type: 'crt-overview', yearId });
  };

  const handleSelectCRTYear = (yearId: CRTYearId) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setCrtSelectedYear(yearId);
    setView({ type: 'crt-overview', yearId });
  };

  // Year tab: one choreographed change. The tint and pill start moving immediately, the
  // old content fades out (150 ms), then the new year mounts and staggers in.
  const handleCRTYearTab = (yearId: CRTYearId) => {
    if (yearId === tintYear) return;
    setTintYear(yearId);
    window.clearTimeout(yearTimer.current);
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleSelectCRTYear(yearId);
      return;
    }
    root.dataset.yearPhase = 'out';
    yearTimer.current = window.setTimeout(() => {
      handleSelectCRTYear(yearId);
      window.setTimeout(() => { delete root.dataset.yearPhase; }, 30);
    }, 150);
  };

  useEffect(() => { setTintYear(crtSelectedYear); }, [crtSelectedYear]);

  const handleSelectCRTQuiz = (moduleId: string, categoryName: string, yearId?: CRTYearId) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const targetYear = yearId || crtSelectedYear;
    setCrtSelectedYear(targetYear);
    setView({ type: 'crt-quiz', moduleId, categoryName, yearId: targetYear });
  };

  const handleSelectCRTTopic = (topicId: string, yearId?: CRTYearId) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const targetYear = yearId || crtSelectedYear;
    setCrtSelectedYear(targetYear);
    setView({ type: 'crt-topic', topicId, yearId: targetYear });
  };

  // AI Tools Navigation Handlers
  const handleOpenAITools = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'ai-overview' });
  };

  const handleSelectAIUnit = (unitId: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'ai-unit', unitId });
  };

  const handleSelectAITopic = (topicId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'ai-topic', topicId });
  };

  const handleSelectAIPracticals = (unitId: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'ai-practicals', unitId });
  };

  const handleSelectAIResources = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'ai-resources' });
  };

  // Year tint is exposed on <html> so the mesh background, glass and pill all blend together.
  useEffect(() => {
    const root = document.documentElement;
    const inCRT = view.type === 'crt-overview' || view.type === 'crt-topic' || view.type === 'crt-quiz';
    if (inCRT) root.dataset.year = String(tintYear);
    else delete root.dataset.year;
  }, [view.type, tintYear]);

  // Helper flags for Layout
  const isHome = view.type === 'home';
  const isSelection = view.type === 'selection';
  const isCRTLMS = view.type === 'crt-overview' || view.type === 'crt-topic' || view.type === 'crt-quiz';
  const isAIToolsLMS =
    view.type === 'ai-overview' ||
    view.type === 'ai-unit' ||
    view.type === 'ai-topic' ||
    view.type === 'ai-practicals' ||
    view.type === 'ai-resources';

  // AI Tools Sidebar active IDs
  let activeAITopicId: string | undefined;
  let activeAIUnitId: number | undefined;

  if (view.type === 'ai-topic') {
    activeAITopicId = view.topicId;
    const item = getTopicById(view.topicId);
    if (item) activeAIUnitId = item.unit.id;
  } else if (view.type === 'ai-unit') {
    activeAIUnitId = view.unitId;
  } else if (view.type === 'ai-practicals') {
    activeAIUnitId = view.unitId;
  }

  return (
    <div className="min-h-screen flex flex-col text-slate-900 font-sans">
      
      {/* Header Navigation */}
      <Navbar
        currentView={view.type}
        onNavigateHome={handleNavigateHome}
        onNavigateSyllabus={handleOpenSyllabusSelection}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
      />

      {/* Main Content Layout */}
      {isHome ? (
        /* HOMEPAGE VIEW (Clean, single CRT BOX button -> opens syllabus selection) */
        <main className="flex-1">
          <HomePage onOpenSyllabus={handleOpenSyllabusSelection} />
        </main>
      ) : isSelection ? (
        /* SYLLABUS SELECTION PAGE (Option 1: CRT SYLLABUS, Option 2: AI TOOLS & APPLICATIONS) */
        <main className="flex-1">
          <SyllabusSelectionPage
            onSelectCRT={() => handleOpenCRT(1)}
            onSelectAITools={handleOpenAITools}
            onNavigateHome={handleNavigateHome}
          />
        </main>
      ) : isCRTLMS ? (
        /* DEDICATED CRT LMS LAYOUT */
        <div className="flex-1 max-w-7xl w-full mx-auto flex">
          <ErrorBoundary>
          
          {/* CRT Sidebar */}
          <Suspense fallback={<aside className="hidden lg:block w-72 shrink-0" aria-hidden="true"><div className="skeleton m-3 h-[70vh]" /></aside>}>
          <CRTSidebar
            selectedYear={crtSelectedYear}
            activeTopicId={view.type === 'crt-topic' ? view.topicId : undefined}
            activeQuizModuleId={view.type === 'crt-quiz' ? view.moduleId : undefined}
            onSelectOverview={() => handleOpenCRT(crtSelectedYear)}
            onSelectTopic={topicId => handleSelectCRTTopic(topicId, crtSelectedYear)}
            onSelectQuiz={(moduleId, categoryName) => handleSelectCRTQuiz(moduleId, categoryName, crtSelectedYear)}
            onOpenSearch={() => setIsSearchOpen(true)}
            onNavigateSelection={handleOpenSyllabusSelection}
            isMobileOpen={isMobileSidebarOpen}
            onCloseMobile={() => setIsMobileSidebarOpen(false)}
          />
          </Suspense>

          {/* CRT Main Reading Area */}
          <main className="flex-1 min-w-0 pb-16">

            {/* Single year selector: sticky and visible on overview, chapter and quiz pages */}
            <div className="sticky top-16 sm:top-20 z-30 flex justify-center sm:justify-end px-3 sm:px-6 lg:px-8 py-2 pointer-events-none">
              <div className="pointer-events-auto max-w-full" style={{ viewTransitionName: 'year-bar' }}>
              <CRTYearSelector
                selectedYear={tintYear}
                onSelectYear={handleCRTYearTab}
              />
              </div>
            </div>

            <div key={crtSelectedYear} className="yr-swap yr-stage">
            <Suspense fallback={<PageSkeleton />}>

            {/* VIEW: CRT YEAR SYLLABUS OVERVIEW */}
            {view.type === 'crt-overview' && (
              <CRTOverviewPage
                selectedYear={view.yearId}
                onSelectYear={handleCRTYearTab}
                onSelectTopic={topicId => handleSelectCRTTopic(topicId, view.yearId)}
                onNavigateBackToSelection={handleOpenSyllabusSelection}
              />
            )}

            {/* VIEW: CRT MODULE QUIZ */}
            {view.type === 'crt-quiz' && (
              <CRTModuleQuiz
                yearId={view.yearId}
                categoryName={view.categoryName}
                moduleId={view.moduleId}
                onBack={() => handleOpenCRT(view.yearId)}
              />
            )}

            {/* VIEW: CRT TOPIC LMS CHAPTER PAGE */}
            {view.type === 'crt-topic' && (
              <CRTTopicView
                topicId={view.topicId}
                yearId={view.yearId}
                onSelectTopic={topicId => handleSelectCRTTopic(topicId, view.yearId)}
                onBackToOverview={() => handleOpenCRT(view.yearId)}
              />
            )}
            </Suspense>

            </div>
          </main>
          </ErrorBoundary>
        </div>
      ) : (
        /* EXISTING AI TOOLS & APPLICATIONS LMS LAYOUT (100% INTACT) */
        <div className="flex-1 max-w-7xl w-full mx-auto flex">
          
          {/* Desktop Sidebar & Mobile Drawer */}
          <LMSSidebar
            currentView={
              view.type === 'ai-overview'
                ? 'overview'
                : view.type === 'ai-unit'
                ? 'unit'
                : view.type === 'ai-topic'
                ? 'topic'
                : view.type === 'ai-practicals'
                ? 'practicals'
                : 'resources'
            }
            activeTopicId={activeAITopicId}
            activeUnitId={activeAIUnitId}
            onSelectOverview={handleOpenAITools}
            onSelectUnit={handleSelectAIUnit}
            onSelectTopic={handleSelectAITopic}
            onSelectPracticals={handleSelectAIPracticals}
            onSelectResources={handleSelectAIResources}
            onOpenSearch={() => setIsSearchOpen(true)}
            isMobileOpen={isMobileSidebarOpen}
            onCloseMobile={() => setIsMobileSidebarOpen(false)}
          />

          {/* Main Reading Area */}
          <main className="flex-1 min-w-0 pb-16">
            
            {/* VIEW: COURSE OVERVIEW / SYLLABUS */}
            {(view.type === 'ai-overview' || view.type === 'ai-unit') && (
              <CRTSyllabusPage
                onSelectUnit={handleSelectAIUnit}
                onSelectTopic={handleSelectAITopic}
                onSelectPracticals={handleSelectAIPracticals}
                onSelectResources={handleSelectAIResources}
                onNavigateHome={handleOpenSyllabusSelection}
              />
            )}

            {/* VIEW: TOPIC LMS PAGE */}
            {view.type === 'ai-topic' && (() => {
              const item = getTopicById(view.topicId);
              if (!item) {
                return (
                  <div className="text-center py-20 space-y-4">
                    <p className="text-slate-600 font-semibold">Topic not found.</p>
                    <button
                      onClick={handleOpenAITools}
                      className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs"
                    >
                      Back to Syllabus Overview
                    </button>
                  </div>
                );
              }
              return (
                <TopicPage
                  topic={item.topic}
                  unit={item.unit}
                  onSelectTopic={handleSelectAITopic}
                  onSelectUnit={handleSelectAIUnit}
                  onBackToOverview={handleOpenAITools}
                />
              );
            })()}

            {/* VIEW: PRACTICALS & EXERCISES */}
            {view.type === 'ai-practicals' && (() => {
              const unit = COURSE_UNITS.find(u => u.id === view.unitId) || COURSE_UNITS[0];
              return (
                <PracticalAndExercisesSection
                  unit={unit}
                  onSelectUnit={handleSelectAIUnit}
                  onSelectTopic={handleSelectAITopic}
                  onBackToOverview={handleOpenAITools}
                />
              );
            })()}

            {/* VIEW: RESOURCES & BOOKS */}
            {view.type === 'ai-resources' && (
              <ResourcesPage onBackToOverview={handleOpenAITools} />
            )}

          </main>
        </div>
      )}

      {/* Footer */}
      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateSyllabus={handleOpenSyllabusSelection}
      />

      {/* Universal Search Modal (Ctrl+K) */}
      {searchUsed && (
        <Suspense fallback={null}>
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectAITopic={handleSelectAITopic}
            onSelectCRTTopic={handleSelectCRTTopic}
          />
        </Suspense>
      )}

    </div>
  );
};

export default App;
