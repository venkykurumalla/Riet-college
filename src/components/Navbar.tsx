import React, { useEffect, useState } from 'react';
import { BookOpen, Home, Search, Menu } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigateHome: () => void;
  onNavigateSyllabus: () => void;
  onOpenSearch?: () => void;
  onToggleMobileSidebar?: () => void;
}

const COLLEGE = 'Rajamahendri Institute of Engineering & Technology';

const Logo: React.FC<{ size: string }> = ({ size }) => (
  <img
    src="/riet-logo.png"
    alt="RIET logo"
    width={48}
    height={48}
    decoding="async"
    className={`${size} object-contain shrink-0 rounded-xl bg-white`}
  />
);

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateSyllabus,
  onOpenSearch,
  onToggleMobileSidebar
}) => {
  const isHome = currentView === 'home';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // HOME: only the college identity, in a floating glass capsule that condenses on scroll.
  if (isHome) {
    return (
      <header style={{ viewTransitionName: 'site-header', paddingRight: 'var(--sbw, 0px)' }} className="fixed top-3 inset-x-3 sm:inset-x-6 z-40 flex justify-center pointer-events-none">
        <button
          onClick={onNavigateHome}
          title={COLLEGE}
          className={`float-header glass pointer-events-auto flex items-center gap-3 rounded-full cursor-pointer ${
            scrolled ? 'py-1.5 pl-2 pr-5 scale-[0.96] shadow-lg' : 'py-2.5 pl-3 pr-6'
          }`}
        >
          <Logo size={scrolled ? 'w-8 h-8' : 'w-10 h-10 sm:w-11 sm:h-11'} />
          <span className="font-display font-bold tracking-tight text-slate-900 text-sm sm:text-base leading-tight text-left">
            <span className="sm:hidden">RIET</span>
            <span className="hidden sm:inline">{COLLEGE}</span>
          </span>
        </button>
      </header>
    );
  }

  // SYLLABUS AREA: compact glass bar with a clear way back.
  return (
    <header style={{ viewTransitionName: 'site-header' }} className="sticky top-0 z-40 w-full glass border-x-0 border-t-0 rounded-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {onToggleMobileSidebar && (
              <button
                onClick={onToggleMobileSidebar}
                aria-label="Open course menu"
                className="p-2 rounded-xl glass text-slate-700 lg:hidden cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <button onClick={onNavigateHome} className="flex items-center gap-2.5 min-w-0 cursor-pointer text-left" title="RIET home">
              <Logo size="w-9 h-9 sm:w-11 sm:h-11" />
              <span className="min-w-0 leading-tight">
                <span className="block font-display font-bold tracking-tight text-slate-900 text-sm sm:text-base truncate">
                  <span className="lg:hidden">RIET</span>
                  <span className="hidden lg:inline">{COLLEGE}</span>
                </span>
              </span>
            </button>
          </div>

          <nav className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search course"
                className="p-2.5 rounded-xl glass text-slate-700 hover:text-indigo-700 transition-colors duration-150 cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-indigo-700 hover:bg-white/60 transition-colors duration-150 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={onNavigateSyllabus}
              aria-label="Syllabus selection"
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                currentView === 'selection'
                  ? 'bg-slate-900 text-white'
                  : 'glass text-slate-800 hover:text-indigo-700'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Syllabus</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
