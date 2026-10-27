import React from 'react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateSyllabus: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateSyllabus
}) => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/riet-logo.png"
            alt="RIET Logo"
            className="w-9 h-9 object-contain"
          />
          <div>
            <div className="font-extrabold text-sm text-slate-900 font-display">
              RIET CRT LMS SYSTEM
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              AI Tools and Applications • B.Tech CSE(DS) – R26 • JNTUK Kakinada
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-xs font-semibold text-slate-600">
          <button
            onClick={onNavigateHome}
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={onNavigateSyllabus}
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            Open Syllabus
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-400 font-medium">
          © Rajamahendri Institute of Engineering & Technology
        </div>

      </div>
    </footer>
  );
};
