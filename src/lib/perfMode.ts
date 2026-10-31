// Lite mode (see "lite mode" in design-system.css). The inline script in index.html already sets
// data-perf="lite" for touch phones and low-spec devices before first paint; this probe also catches
// devices that report good specs but cannot hold ~45 fps, and marks them as slow (shorter transitions).
export const isTouchDevice = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;

export function startFrameRateProbe() {
  const root = document.documentElement;
  if (root.dataset.slow !== undefined) return; // already known to be slow
  const run = () => {
    const dts: number[] = [];
    let last = performance.now();
    const loop = (t: number) => {
      dts.push(t - last);
      last = t;
      if (dts.length < 40) { requestAnimationFrame(loop); return; }
      const sorted = dts.slice(4).sort((a, b) => a - b); // ignore warm-up frames
      const median = sorted[Math.floor(sorted.length / 2)];
      if (median > 22) { // under ~45 fps
        root.dataset.perf = 'lite';
        root.dataset.slow = '';
      }
    };
    requestAnimationFrame(loop);
  };
  const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
  if (idle) idle(run); else window.setTimeout(run, 1500);
}
