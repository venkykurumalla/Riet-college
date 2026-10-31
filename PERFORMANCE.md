# Mobile performance notes (Round 5)

Tool: `scripts/perf/mobile-profile.mjs` (Playwright + system Chrome, 390x844, touch, DPR 2, CPU throttled).
Run it against a production build: `npm run build && npx vite preview --port 4173`, then
`node scripts/perf/mobile-profile.mjs <label> <cpuRate>`. It needs `playwright` installed (it is not a project dependency).
Numbers are per year switch (average of 8 switches 1->2->3->4->1->3->2->4->1) unless noted.

## Baseline (before Round 5 changes)

| CPU | pill starts | script / style / layout | main-thread task | longest task | dropped frames | chapter open (script+style+layout) | scroll dropped frames | INP | CLS |
|---|---|---|---|---|---|---|---|---|---|
| 4x | 66 ms | 63 / 369 / 19 ms | 577 ms | 65 ms | 10 (max frame 100 ms) | 336 ms | 9 | 96 ms | 0 |
| 6x | 126 ms | 88 / 383 / 25 ms | 642 ms | 100 ms | 10 (max frame 333 ms) | 532 ms | 13 | 104 ms | 0 |

- First view payload (encoded, incl. idle prefetch of the CRT chunk): 983 KB total, 871 KB JS, 18 KB CSS, 79 KB fonts.
- DOM nodes: year page 1186, chapter page 1110.
- Lighthouse mobile (home): performance 94, accessibility 100, best-practices 100, LCP 2.7 s, TBT 170 ms, FCP 0.9 s.

## Cause found

Style recalculation was the biggest cost of a year switch (about 370 ms of a 577 ms task at 4x). It came from the
`html { transition: --year-a, --year-b }` rule (registered colour properties inherited by every element, so each animation
frame re-resolved styles for the whole document). Experiment: injecting `html { transition: none }` dropped style time from
369 ms to 68 ms, the task from 577 ms to 228 ms and dropped frames from 10 to 2. Disabling `backdrop-filter` alone changed
nothing on the main thread (its cost is on the GPU, which this harness cannot see), so glass is still reduced on phones.
