import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';
import { CRTYearId } from '../types/crtTypes';
import { crtProgressService } from '../services/crtProgressService';

interface CRTYearSelectorProps {
  selectedYear: CRTYearId;
  onSelectYear: (yearId: CRTYearId) => void;
}

const YEARS: { id: CRTYearId; label: string; sub: string }[] = [
  { id: 1, label: '1st Year', sub: 'Foundation' },
  { id: 2, label: '2nd Year', sub: 'Intermediate' },
  { id: 3, label: '3rd Year', sub: 'Advanced' },
  { id: 4, label: '4th Year', sub: 'Placement-Ready' }
];

const SPRING = { type: 'spring' as const, stiffness: 340, damping: 21, mass: 0.85 };

// Liquid-glass segmented control. One glass pill slides to the real measured tab
// (spring with a little overshoot) and stretches slightly mid-move.
export const CRTYearSelector: React.FC<CRTYearSelectorProps> = ({ selectedYear, onSelectYear }) => {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const move = useAnimationControls();
  const stretch = useAnimationControls();
  const placed = useRef(false);
  const [ready, setReady] = useState(false);
  const allProgress = crtProgressService.getAllYearsProgress();

  const rectFor = useCallback((y: number) => {
    const el = tabRefs.current[y];
    return el ? { x: el.offsetLeft, width: el.offsetWidth } : null;
  }, []);

  // Place (or glide) the pill whenever the selected year changes.
  useLayoutEffect(() => {
    const r = rectFor(selectedYear);
    if (!r) return;
    if (!placed.current || reduce) {
      move.set(r);
      placed.current = true;
      setReady(true);
      return;
    }
    move.start({ ...r, transition: { x: SPRING, width: SPRING } });
    stretch.start({ scaleX: [1, 1.1, 1], scaleY: [1, 0.93, 1], transition: { duration: 0.42, times: [0, 0.4, 1], ease: 'easeInOut' } });
  }, [selectedYear, reduce, move, stretch, rectFor]);

  // Re-measure when the track resizes (rotation, font load, narrower screens).
  useEffect(() => {
    const el = trackRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    let lastW = el.offsetWidth;
    const ro = new ResizeObserver(() => {
      if (el.offsetWidth === lastW) return; // only real size changes; never interrupt a glide
      lastW = el.offsetWidth;
      const r = rectFor(selectedYear);
      if (r) move.set(r);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [selectedYear, move, rectFor]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = YEARS.findIndex(y => y.id === selectedYear);
    let next = i;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % YEARS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + YEARS.length) % YEARS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = YEARS.length - 1;
    else return;
    e.preventDefault();
    onSelectYear(YEARS[next].id);
    tabRefs.current[YEARS[next].id]?.focus();
  };

  return (
    <div
      ref={trackRef}
      role="tablist"
      aria-label="Select year"
      onKeyDown={onKeyDown}
      className="year-tint glass relative flex items-center p-1 rounded-full max-w-full overflow-x-auto no-scrollbar"
    >
      {/* sliding glass pill */}
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={move}
        className="absolute top-1 bottom-1 left-0 pointer-events-none"
        style={{ opacity: ready ? 1 : 0, willChange: 'transform' }}
      >
        <motion.div
          animate={stretch}
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.78))',
            boxShadow:
              'inset 0 1px 0 #fff, 0 0 0 1.5px color-mix(in srgb, var(--year-b) 45%, transparent), 0 6px 18px -4px color-mix(in srgb, var(--year-b) 55%, transparent)'
          }}
        />
      </motion.div>

      {YEARS.map(y => {
        const selected = selectedYear === y.id;
        const prog = allProgress[y.id];
        return (
          <button
            key={y.id}
            ref={el => { tabRefs.current[y.id] = el; }}
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelectYear(y.id)}
            className={`relative z-10 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shrink-0 cursor-pointer select-none flex items-center gap-2 transition-colors duration-200 ${
              selected ? 'text-slate-950' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="text-left">
              <span className="block font-display font-bold text-xs sm:text-[13px] tracking-tight leading-tight">{y.label}</span>
              <span className={`hidden sm:block text-[10px] font-medium leading-none transition-colors duration-200 ${selected ? 'text-slate-600' : 'text-slate-400'}`}>
                {y.sub}
              </span>
            </span>
            {prog && prog.totalTopics > 0 && (
              <span
                className="hidden sm:inline text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full transition-colors duration-200"
                style={selected ? { background: 'color-mix(in srgb, var(--year-b) 16%, white)', color: '#1e293b' } : { background: 'rgba(100,116,139,0.12)', color: '#475569' }}
              >
                {prog.percentage}%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
