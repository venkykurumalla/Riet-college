import React, { useEffect, useRef, useState } from 'react';

// Expand/collapse without animating height: the grid-template-rows 0fr -> 1fr trick, and the
// children are only mounted while open (or while the closing animation plays).
export const Collapsible: React.FC<{ open: boolean; children: React.ReactNode }> = ({ open, children }) => {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(open);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    window.clearTimeout(timer.current);
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(id);
    }
    setShown(false);
    timer.current = window.setTimeout(() => setMounted(false), 200);
    return () => window.clearTimeout(timer.current);
  }, [open]);

  if (!mounted) return null;
  return (
    <div
      className="grid transition-[grid-template-rows,opacity] duration-200 ease-out"
      style={{ gridTemplateRows: shown ? '1fr' : '0fr', opacity: shown ? 1 : 0 }}
    >
      <div className="overflow-hidden min-h-0">{children}</div>
    </div>
  );
};
