import React, { Suspense, lazy, startTransition, useState, useEffect, useRef } from 'react';
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
const loadSearch = () => import('./components/SearchPalette').then(m => ({ default: m.SearchPalette }));
const CRTSidebar = lazy(loadCRTSidebar);
const CRTOverviewPage = lazy(loadCRTOverview);
const CRTTopicView = lazy(loadCRTTopicView);
const CRTModuleQuiz = lazy(loadCRTQuiz);
const SearchPalette = lazy(loadSearch);

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
import { isCRTYearLoaded, loadCRTYear } from './data/crtCourseData';
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

  // Warm the CRT area in the background, in small steps well after first paint, so evaluating the
  // chunks never competes with the hero animation or the first interaction.
  useEffect(() => {
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    const steps = [
      () => { loadCRTSidebar(); loadCRTOverview(); },
      () => { loadCRTTopicView(); loadCRTQuiz(); },
      () => { loadCRTYear(1); },
      () => { loadSearch(); }
    ];
    let i = 0;
    let timer: number | undefined;
    const next = () => {
      if (i >= steps.length) return;
      const run = () => { steps[i++](); timer = window.setTimeout(next, 700); };
      if (idle) idle(run, { timeout: 4000 }); else run();
    };
    timer = window.setTimeout(next, 3000);
    return () => window.clearTimeout(timer);
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

  // One search palette for every entry point: header icon, sidebar field, Ctrl/Cmd+K and "/".
  // The last pointer position lets the panel grow out of the button that opened it.
  const lastPointer = useRef<{ x: number; y: number; t: number } | null>(null);
  const [searchOrigin, setSearchOrigin] = useState<{ x: number; y: number } | null>(null);
  const openSearch = () => {
    const p = lastPointer.current;
    setSearchOrigin(p && Date.now() - p.t < 600 ? { x: p.x, y: p.y } : null);
    setIsSearchOpen(true);
  };

  useEffect(() => {
    const onPointer = (e: PointerEvent) => { lastPointer.current = { x: e.clientX, y: e.clientY, t: Date.now() }; };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        lastPointer.current = null;
        setSearchOrigin(null);
        setIsSearchOpen(prev => !prev);
        return;
      }
      const el = e.target as HTMLElement | null;
      const typing = !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable);
      if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setSearchOrigin(null);
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('pointerdown', onPointer, { capture: true, passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointer, { capture: true });
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Every CRT view needs its year's data. Years load as separate chunks (prefetched on idle), so
  // this is normally synchronous; otherwise the move waits for the chunk, showing the skeleton
  // only if that takes longer than ~100 ms.
  const [pendingYear, setPendingYear] = useState(false);
  const withYear = (yearId: CRTYearId | undefined, go: () => void) => {
    if (!yearId || isCRTYearLoaded(yearId)) { go(); return; }
    const skeleton = window.setTimeout(() => setPendingYear(true), 100);
    loadCRTYear(yearId).then(() => {
      window.clearTimeout(skeleton);
      setPendingYear(false);
      go();
    });
  };

  // Moving between pages: reset scroll to the top in the same frame as the view change (no visible
  // jump) and let the new page fade/rise in with CSS (opacity + transform only).
  const navigate = (next: CurrentView, year?: CRTYearId) => {
    withYear(year, () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (year) setCrtSelectedYear(year);
      setView(next);
    });
  };

  const handleNavigateHome = () => navigate({ type: 'home' });
  const handleOpenSyllabusSelection = () => navigate({ type: 'selection' });

  // CRT Navigation Handlers
  const handleOpenCRT = (yearId: CRTYearId = crtSelectedYear) =>
    navigate({ type: 'crt-overview', yearId }, yearId);

  // Year tab. The pill, tint and tab state move first (direct DOM write + the selector's own
  // state), then the heavy swap of sidebar/content runs as a low-priority React transition so it
  // never blocks the animation. Old content fades out (150 ms) while the new year's data is ready.
  const handleCRTYearTab = (yearId: CRTYearId) => {
    if (yearId === tintYear) return;
    window.clearTimeout(yearTimer.current);
    const root = document.documentElement;
    root.dataset.year = String(yearId); // mesh cross-fade starts this frame
    setTintYear(yearId);
    const swap = () => withYear(yearId, () => {
      startTransition(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setCrtSelectedYear(yearId);
        setView({ type: 'crt-overview', yearId });
      });
      window.setTimeout(() => { delete root.dataset.yearPhase; }, 30);
    });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { swap(); return; }
    root.dataset.yearPhase = 'out';
    yearTimer.current = window.setTimeout(swap, 150);
  };

  useEffect(() => { setTintYear(crtSelectedYear); }, [crtSelectedYear]);

  // Once a year is showing, fetch its neighbours while the browser is idle.
  useEffect(() => {
    if (view.type !== 'crt-overview' && view.type !== 'crt-topic' && view.type !== 'crt-quiz') return;
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const warm = () => {
      [crtSelectedYear - 1, crtSelectedYear + 1].forEach(y => { if (y >= 1 && y <= 4) loadCRTYear(y as CRTYearId); });
    };
    const h = idle ? idle(warm) : window.setTimeout(warm, 800);
    return () => { if (!idle) window.clearTimeout(h); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crtSelectedYear, view.type]);

  const handleSelectCRTQuiz = (moduleId: string, categoryName: string, yearId?: CRTYearId) => {
    const targetYear = yearId || crtSelectedYear;
    navigate({ type: 'crt-quiz', moduleId, categoryName, yearId: targetYear }, targetYear);
  };

  const handleSelectCRTTopic = (topicId: string, yearId?: CRTYearId) => {
    const targetYear = yearId || crtSelectedYear;
    navigate({ type: 'crt-topic', topicId, yearId: targetYear }, targetYear);
  };

  // AI Tools Navigation Handlers
  const handleOpenAITools = () => navigate({ type: 'ai-overview' });
  const handleSelectAIUnit = (unitId: number) => navigate({ type: 'ai-unit', unitId });
  const handleSelectAITopic = (topicId: string) => navigate({ type: 'ai-topic', topicId });
  const handleSelectAIPracticals = (unitId: number) => navigate({ type: 'ai-practicals', unitId });
  const handleSelectAIResources = () => navigate({ type: 'ai-resources' });

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
    <div className="min-h-dvh flex flex-col text-slate-900 font-sans">
      <div className="mesh" aria-hidden="true">
        {[0, 1, 2, 3, 4].map(y => <div key={y} className="mesh-layer" data-y={y} />)}
      </div>
      
      {/* Header Navigation */}
      <Navbar
        currentView={view.type}
        onNavigateHome={handleNavigateHome}
        onNavigateSyllabus={handleOpenSyllabusSelection}
        onOpenSearch={openSearch}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
      />

      {/* Main Content Layout */}
      {isHome ? (
        /* HOMEPAGE VIEW (Clean, single CRT BOX button -> opens syllabus selection) */
        <main className="flex-1 page-in">
          <HomePage onOpenSyllabus={handleOpenSyllabusSelection} />
        </main>
      ) : isSelection ? (
        /* SYLLABUS SELECTION PAGE (Option 1: CRT SYLLABUS, Option 2: AI TOOLS & APPLICATIONS) */
        <main className="flex-1 page-in">
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
            onOpenSearch={openSearch}
            onNavigateSelection={handleOpenSyllabusSelection}
            isMobileOpen={isMobileSidebarOpen}
            onCloseMobile={() => setIsMobileSidebarOpen(false)}
          />
          </Suspense>

          {/* CRT Main Reading Area */}
          <main className="flex-1 min-w-0 pb-16">

            {/* Single year selector: sticky and visible on overview, chapter and quiz pages */}
            <div className="sticky top-[var(--header-h)] z-30 flex justify-center sm:justify-end px-3 sm:px-6 lg:px-8 py-2 pointer-events-none">
              <div className="pointer-events-auto max-w-full">
              <CRTYearSelector
                selectedYear={tintYear}
                onSelectYear={handleCRTYearTab}
              />
              </div>
            </div>

            <div key={crtSelectedYear} className="yr-swap yr-stage">
            <Suspense fallback={<PageSkeleton />}>
            {pendingYear && <PageSkeleton />}

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
            onOpenSearch={openSearch}
            isMobileOpen={isMobileSidebarOpen}
            onCloseMobile={() => setIsMobileSidebarOpen(false)}
          />

          {/* Main Reading Area */}
          <main key={view.type} className="flex-1 min-w-0 pb-16 page-in">
            
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
          <SearchPalette
            open={isSearchOpen}
            origin={searchOrigin}
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
