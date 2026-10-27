import React from 'react';
import { motion } from 'framer-motion';
import { CRTYearId } from '../types/crtTypes';
import { crtProgressService } from '../services/crtProgressService';

interface CRTYearSelectorProps {
  selectedYear: CRTYearId;
  onSelectYear: (yearId: CRTYearId) => void;
}

export const CRTYearSelector: React.FC<CRTYearSelectorProps> = ({
  selectedYear,
  onSelectYear
}) => {
  const years: { id: CRTYearId; label: string; sub: string }[] = [
    { id: 1, label: '1st Year', sub: 'Foundation' },
    { id: 2, label: '2nd Year', sub: 'Intermediate' },
    { id: 3, label: '3rd Year', sub: 'Advanced' },
    { id: 4, label: '4th Year', sub: 'Placement-Ready' }
  ];

  const allProgress = crtProgressService.getAllYearsProgress();

  return (
    <div className="w-full sm:w-auto">
      {/* Liquid Glass Apple-Style Segmented Control */}
      <div className="relative flex items-center p-1.5 bg-white/75 backdrop-blur-xl rounded-full border border-slate-200/90 shadow-lg shadow-blue-900/5 overflow-x-auto no-scrollbar">
        {years.map(y => {
          const isSelected = selectedYear === y.id;
          const prog = allProgress[y.id];

          return (
            <motion.button
              key={y.id}
              onClick={() => onSelectYear(y.id)}
              whileTap={{ scale: 0.96 }}
              className={`relative z-10 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs font-bold transition-colors duration-150 shrink-0 cursor-pointer flex items-center space-x-2 select-none ${
                isSelected ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {/* Animated Liquid Glass Sliding Pill */}
              {isSelected && (
                <motion.div
                  layoutId="activeYearPill"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md shadow-blue-600/30 -z-10"
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                />
              )}

              <div className="text-left">
                <span className="block font-display tracking-tight leading-tight">
                  {y.label}
                </span>
                <span
                  className={`hidden sm:block text-[10px] font-medium leading-none ${
                    isSelected ? 'text-blue-100/90' : 'text-slate-400'
                  }`}
                >
                  {y.sub}
                </span>
              </div>

              {prog && prog.totalTopics > 0 && (
                <span
                  className={`hidden sm:inline text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded-full transition-colors ${
                    isSelected
                      ? 'bg-white/20 text-white backdrop-blur-xs'
                      : 'bg-slate-100 text-slate-600 border border-slate-200/60'
                  }`}
                >
                  {prog.percentage}%
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
