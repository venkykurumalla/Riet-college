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

## After (end of Round 5)

Same harness, same flows, production build.

### 4x CPU throttle

| Metric | Before | After |
|---|---|---|
| Pill starts moving after tap | 66 ms | 58 ms |
| Year switch: script | 63 ms | 51 ms |
| Year switch: style recalculation | 369 ms | 34 ms |
| Year switch: layout | 19 ms | 12 ms |
| Year switch: total main-thread task | 577 ms | 173 ms |
| Year switch: long tasks (>50 ms) per switch | 1 | 0 |
| Year switch: longest task | 65 ms | 0 ms |
| Year switch: dropped frames per switch | 10 | 0 |
| Year switch: worst frame | 100 ms | 33 ms |
| Chapter open: script+style+layout | 336 ms | 113 ms |
| Chapter open: dropped frames | 5 | 1 |
| Chapter scroll (5880 px): dropped frames | 9 | 3 |
| Chapter scroll: longest task | 0 ms | 80 ms |
| Quiz paging: dropped frames | 0 | 0 |
| INP (worst interaction) | 96 ms | 64 ms |
| CLS | 0 | 0 |

### 6x CPU throttle

| Metric | Before | After |
|---|---|---|
| Pill starts moving after tap | 126 ms | 70 ms |
| Year switch: script | 88 ms | 74 ms |
| Year switch: style recalculation | 383 ms | 46 ms |
| Year switch: layout | 25 ms | 16 ms |
| Year switch: total main-thread task | 642 ms | 235 ms |
| Year switch: long tasks (>50 ms) per switch | 4 | 0 |
| Year switch: longest task | 100 ms | 0 ms |
| Year switch: dropped frames per switch | 10 | 2 |
| Year switch: worst frame | 333 ms | 50 ms |
| Chapter open: script+style+layout | 532 ms | 176 ms |
| Chapter open: dropped frames | 5 | 2 |
| Chapter scroll (5880 px): dropped frames | 13 | 2 |
| Chapter scroll: longest task | 0 ms | 105 ms |
| Quiz paging: dropped frames | 0 | 0 |
| INP (worst interaction) | 104 ms | 96 ms |
| CLS | 0 | 0 |

### Payload and page weight

| Metric | Before | After |
|---|---|---|
| First view transferred (incl. idle warm-up window) | 983 KB | 291 KB |
| JS on first view | 871 KB | 168 KB |
| DOM nodes, year page | 1186 | 900 |
| DOM nodes, chapter page | 1110 | 823 |
| Lighthouse mobile (home): performance / accessibility / best-practices | 94 / 100 / 100 | 96 / 100 / 100 |
| Lighthouse TBT / LCP / CLS | 170 ms / 2.7 s / 0 | 0 ms / 2.7 s / 0 |

## What changed (and why)

1. **Tint without custom-property transitions.** The year tint is a cross-fade of fixed mesh layers (opacity only). This removed ~340 ms of style recalculation per switch.
2. **Optimistic pill and low-priority swap.** The selector keeps its own tab state, `<html data-year>` is written directly, and the sidebar/content swap runs in `startTransition` after a 150 ms fade-out.
3. **Per-year data chunks** (`src/data/yearBundles/year{1..4}.ts`), loaded on demand; year 1 and the current year's neighbours are warmed when idle, in small steps after 3 s so they never compete with first paint.
4. **Lite surfaces on phones and slow devices** (`html[data-perf="lite"]`, set by an inline script and a frame-rate probe): real `backdrop-filter` stays only on the header, year bar and home capsule (12 px); other glass is a semi-opaque gradient fill with the same highlight. No pointer-tracking sheen or parallax on touch; blurred divs became radial gradients.
5. **One sidebar copy.** The desktop column or the drawer is mounted, never both; the drawer uses transform only, modules start collapsed on phones, and expand/collapse uses the grid-rows trick with children mounted only while open.
6. **Scroll.** One IntersectionObserver for reveals and one for the active section, no per-frame layout reads, no React state in scroll handlers; `content-visibility: auto` on chapter sections and overview cards.
7. **Smaller things.** Debounced localStorage writes (flushed on page hide), memoised progress, instant scroll resets (CSS `scroll-behavior: smooth` was turning `scrollTo(0)` into a slow scroll), 44 px touch targets, safe-area insets, `dvh`, preloaded Latin fonts with metric-matched fallbacks, WebP logo, immutable caching headers (`vercel.json`).

Known limits: one 80-100 ms task remains while scrolling a chapter at 4-6x (a large section rendering as it enters view); the pill follows a tap, not a finger drag.
