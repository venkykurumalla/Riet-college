import React from 'react';
import { BookOpen, Home, Search, Menu } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigateHome: () => void;
  onNavigateSyllabus: () => void;
  onOpenSearch?: () => void;
  onToggleMobileSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateSyllabus,
  onOpenSearch,
  onToggleMobileSidebar
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Mobile Sidebar Trigger + Logo & Title */}
          <div className="flex items-center space-x-3">
            {onToggleMobileSidebar && currentView !== 'home' && (
              <button
                onClick={onToggleMobileSidebar}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 lg:hidden cursor-pointer"
                title="Open Course Sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}

            <div
              onClick={onNavigateHome}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-1 bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-103 transition-transform">
                <img
                  src="/riet-logo.png"
                  alt="RIET College Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 font-display">
                    RIET CRT LMS SYSTEM
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-blue-700 tracking-wide hidden sm:block">
                  Campus Recruitment Training (CRT) & AI Tools LMS
                </p>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors flex items-center space-x-1.5 cursor-pointer"
                title="Search course"
              >
                <Search className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline">Search</span>
              </button>
            )}

            <button
              onClick={onNavigateHome}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentView === 'home'
                  ? 'text-blue-700 bg-blue-50/90 shadow-2xs'
                  : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>

            <button
              onClick={onNavigateSyllabus}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentView !== 'home'
                  ? 'text-white bg-blue-600 shadow-xs shadow-blue-500/20'
                  : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Syllabus</span>
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};
