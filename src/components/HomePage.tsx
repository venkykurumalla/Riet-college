import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { progressService } from '../services/progressService';
import { fontCourseInfo } from '../data/aiToolsCourseData';
import { LiquidGlassButton } from './LiquidGlassButton';
import { HeroTagline } from './HeroTagline';

interface HomePageProps {
  onOpenSyllabus: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSyllabus }) => {
  const progress = progressService.getOverallProgress();

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div aria-hidden="true" className="absolute inset-x-0 bottom-10 h-72 pointer-events-none">
        <div className="absolute left-[18%] bottom-0 w-72 h-72 rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="absolute right-[18%] bottom-8 w-72 h-72 rounded-full bg-violet-400/35 blur-3xl" />
      </div>

      <div className="relative w-full max-w-3xl mx-auto text-center space-y-8">
        
        {/* Official College Badge & Logo */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="glass w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] p-3"
          >
            <img
              src="/riet-logo.png"
              alt="Rajamahendri Institute of Engineering & Technology"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="glass inline-flex items-center px-4 py-1.5 rounded-full text-slate-700 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
            <span>Rajamahendri Institute of Engineering & Technology</span>
          </div>
        </div>

        {/* Course Titles & Official Quote */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.05]">
            RIET CRT LMS SYSTEM
          </h1>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold grad-text font-display">
              {fontCourseInfo.title}
            </p>
            {/* CLEAN MANDATED HERO SUBTITLE: BTech CSE • JNTUK */}
            <p className="text-sm sm:text-base font-semibold text-slate-600 tracking-[0.12em]">
              BTech CSE • JNTUK
            </p>
          </div>

          <div className="pt-4">
            <HeroTagline />
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
            <div className="glass relative rounded-[32px] p-8 sm:p-10 text-center space-y-6">
              
              {/* Header inside CRT Box */}
              <div className="space-y-2">
                <div className="w-14 h-14 rounded-2xl glass text-indigo-600 flex items-center justify-center mx-auto">
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
              <LiquidGlassButton onClick={onOpenSyllabus}>
                <span>OPEN SYLLABUS</span>
                <ArrowRight className="w-5 h-5 text-indigo-600" />
              </LiquidGlassButton>

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
