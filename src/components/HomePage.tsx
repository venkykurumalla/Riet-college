import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { progressService } from '../services/progressService';
import { fontCourseInfo } from '../data/aiToolsCourseData';

interface HomePageProps {
  onOpenSyllabus: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSyllabus }) => {
  const progress = progressService.getOverallProgress();

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-3xl mx-auto text-center space-y-8">
        
        {/* Official College Badge & Logo */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2.5 border border-slate-200/90 shadow-xl shadow-blue-900/5 ring-4 ring-blue-50 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/riet-logo.png"
              alt="Rajamahendri Institute of Engineering & Technology"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Rajamahendri Institute of Engineering & Technology</span>
          </div>
        </div>

        {/* Course Titles & Official Quote */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            RIET CRT LMS SYSTEM
          </h1>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-700 font-display">
              {fontCourseInfo.title}
            </p>
            {/* CLEAN MANDATED HERO SUBTITLE: BTech CSE • JNTUK */}
            <p className="text-sm sm:text-base font-bold text-slate-600 tracking-wide">
              BTech CSE • JNTUK
            </p>
          </div>

          {/* EXACT MANDATED QUOTE */}
          <div className="pt-1">
            <p className="inline-block px-5 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-slate-700 text-sm sm:text-base font-bold italic shadow-xs">
              "Learn • Practice • Apply • Verify • Use AI Responsibly"
            </p>
          </div>
        </div>

        {/* SINGLE MAJOR ENTRY POINT: CRT BOX */}
        <div className="pt-2 max-w-lg mx-auto">
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            {/* Soft Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 rounded-3xl blur-md opacity-25 group-hover:opacity-45 transition duration-300 pointer-events-none" />

            <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 p-8 sm:p-10 shadow-xl shadow-blue-900/5 text-center space-y-6">
              
              {/* Header inside CRT Box */}
              <div className="space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center mx-auto shadow-xs group-hover:scale-105 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                  CRT BOX
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Access full learning modules for Units 1–5, practical teacher examples, student exercises, and resources.
                </p>
              </div>

              {/* Progress Summary Pill if Student Has Progress */}
              {progress.completedTopics > 0 && (
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 max-w-xs mx-auto text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-slate-800">
                    <span>Course Completion</span>
                    <span className="text-blue-700 font-extrabold">{progress.percentage}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress.percentage}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {progress.completedTopics} of {progress.totalTopics} syllabus topics completed
                  </div>
                </div>
              )}

              {/* THE PRIMARY ACTION BUTTON: OPEN SYLLABUS → */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenSyllabus}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base tracking-wide shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all flex items-center justify-center space-x-3 mx-auto cursor-pointer group/btn"
              >
                <span>OPEN SYLLABUS</span>
                <ArrowRight className="w-5 h-5 text-cyan-200 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
              </motion.button>

            </div>
          </motion.div>
        </div>

        {/* Minimal Academic Footer Note */}
        <div className="text-xs text-slate-400 font-medium pt-2">
          Official BTech CSE LMS Learning Portal • Rajamahendri Institute of Engineering & Technology
        </div>

      </div>
    </div>
  );
};
