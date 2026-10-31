import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WORDS = ['Learn', 'Practice', 'Apply', 'Verify'];

// "Learn • Practice • Apply • Verify • Use AI Responsibly" as a designed element:
// four action words reveal one by one, then the closing line lands last.
export const HeroTagline: React.FC = () => {
  const reduce = useReducedMotion();
  const step = reduce ? 0 : 0.11;
  const rise = reduce ? { opacity: 0 } : { opacity: 0, y: 14 };

  return (
    <div className="space-y-3" aria-label="Learn, Practice, Apply, Verify, Use AI Responsibly">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-display text-xl sm:text-2xl font-semibold text-slate-800" aria-hidden="true">
        {WORDS.map((w, i) => (
          <React.Fragment key={w}>
            <motion.span
              initial={rise}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.25 + i * step, ease: [0.22, 1, 0.36, 1] }}
              className="grad-text"
            >
              {w}
            </motion.span>
            {i < WORDS.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                transition={{ delay: 0.3 + i * step }}
                className="text-slate-400"
              >
                •
              </motion.span>
            )}
          </React.Fragment>
        ))}
      </div>
      <motion.p
        aria-hidden="true"
        initial={rise}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + WORDS.length * step + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900"
      >
        Use AI{' '}
        <span className="relative inline-block">
          <span className="grad-text">Responsibly</span>
          <motion.span
            initial={{ scaleX: reduce ? 1 : 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + WORDS.length * step + 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full origin-left"
            style={{ background: 'var(--accent-gradient)' }}
          />
        </span>
      </motion.p>
    </div>
  );
};
