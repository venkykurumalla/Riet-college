import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface LiquidGlassButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

// iOS-style glass button: the sheen follows the pointer (set straight on the element,
// no React state), with a springy press. On touch the sheen follows the finger.
export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({ onClick, children, className = '' }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const raf = useRef(0);

  const track = (e: React.PointerEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${clientX - r.left}px`);
      el.style.setProperty('--my', `${clientY - r.top}px`);
    });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onPointerMove={track}
      onPointerDown={track}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.955 }}
      transition={{ type: 'spring', stiffness: 520, damping: 26, mass: 0.7 }}
      className={`liquid-btn ${className}`}
    >
      {children}
    </motion.button>
  );
};
