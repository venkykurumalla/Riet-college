import React, { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import { Brain, Building2, ChevronRight, Cpu, History, Loader2, Search, SearchX, TrendingUp, X } from 'lucide-react';
import { COURSE_UNITS, getAllTopics } from '../data/aiToolsCourseData';
import { getAllCRTTopics, getCRTTopicById } from '../data/crtCourseData';
import { crtProgressService } from '../services/crtProgressService';
import { CRTYearId } from '../types/crtTypes';
import { SearchDoc, SearchHit, search } from '../lib/searchIndex';

interface SearchPaletteProps {
  open: boolean;
  onClose: () => void;
  onSelectAITopic: (topicId: string) => void;
  onSelectCRTTopic: (topicId: string, yearId: CRTYearId) => void;
  origin?: { x: number; y: number } | null; // where the opener sat, for the grow-from-button feel
}

interface DocInfo {
  kind: 'crt' | 'ai';
  topicId: string;
  yearId?: CRTYearId;
  badges: string[];
  minutes: number;
}

const POPULAR = ['Percentages', 'HCF & LCM', 'Seating Arrangement', 'Para Jumbles', 'Speed Math'];
const COMPANIES = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Capgemini', 'AMCAT'];
const AI_TOPICS = ['Prompt Engineering', 'LLM', 'AI Ethics', 'Data Analysis', 'Coding Assistants'];

type Row =
  | { key: string; type: 'hit'; hit: SearchHit<DocInfo>; group: string }
  | { key: string; type: 'chip'; label: string; icon: React.ReactNode; run: () => void };

let cachedDocs: SearchDoc<DocInfo>[] | null = null;

// Built once (first open) from the same data the chapters use. Key terms are the words
// before the colon in each chapter's core definitions.
const buildDocs = (): SearchDoc<DocInfo>[] => {
  if (cachedDocs) return cachedDocs;
  const docs: SearchDoc<DocInfo>[] = [];
  getAllCRTTopics().forEach(t => {
    const item = getCRTTopicById(t.id);
    const yearName = item ? item.year.yearName : `${t.yearId} Year`;
    const module = item ? item.category : t.category;
    const keyTerms = (t.conceptExplanation?.coreDefinitions ?? [])
      .map(d => d.split(':')[0].trim())
      .filter(k => k.length > 1 && k.length < 48);
    docs.push({
      id: t.id,
      title: t.title,
      fields: [
        { text: module, weight: 1.2, fuzzy: true },
        { text: yearName, weight: 0.9, fuzzy: false },
        { text: keyTerms.join(' . '), weight: 1.4, fuzzy: true },
        { text: t.tagline ?? '', weight: 0.8, fuzzy: true },
        { text: t.introduction?.overview ?? '', weight: 0.4, fuzzy: false }
      ],
      payload: { kind: 'crt', topicId: t.id, yearId: t.yearId, badges: [yearName, module], minutes: t.estimatedMinutes }
    });
  });
  getAllTopics().forEach(t => {
    const unit = COURSE_UNITS.find(u => u.id === t.unitId);
    docs.push({
      id: `ai-${t.id}`,
      title: t.title,
      fields: [
        { text: unit?.title ?? '', weight: 1.1, fuzzy: true },
        { text: t.syllabusPoint, weight: 0.9, fuzzy: true },
        { text: t.content.keyConcepts.map(c => c.title).join(' . '), weight: 1.3, fuzzy: true },
        { text: t.content.keyConcepts.map(c => c.description).join(' '), weight: 0.35, fuzzy: false }
      ],
      payload: { kind: 'ai', topicId: t.id, badges: ['AI Tools', unit ? unit.number : ''], minutes: t.estimatedMinutes }
    });
  });
  cachedDocs = docs;
  return docs;
};

const Highlight: React.FC<{ text: string; ranges: [number, number][] }> = ({ text, ranges }) => {
  if (!ranges.length) return <>{text}</>;
  const out: React.ReactNode[] = [];
  let at = 0;
  ranges.forEach(([s, e], i) => {
    if (s > at) out.push(text.slice(at, s));
    out.push(<mark key={i} className="hl">{text.slice(s, e)}</mark>);
    at = e;
  });
  if (at < text.length) out.push(text.slice(at));
  return <>{out}</>;
};

export const SearchPalette: React.FC<SearchPaletteProps> = ({ open, onClose, onSelectAITopic, onSelectCRTTopic, origin }) => {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState('');
  const deferred = useDeferredValue(query);
  const [active, setActive] = useState(0);
  const [busy, setBusy] = useState(false);
  const [listH, setListH] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listInner = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const busyTimer = useRef<number | undefined>(undefined);
  const [originStyle, setOriginStyle] = useState<string | undefined>(undefined);

  const docs = useMemo(() => (open ? buildDocs() : []), [open]);

  // Suggestions are only shown when they really produce a result.
  const valid = useCallback(
    (labels: string[]) => labels.filter(l => search(docs, l, 1).length > 0),
    [docs]
  );
  const suggestions = useMemo(
    () => (open ? { popular: valid(POPULAR), companies: valid(COMPANIES).slice(0, 5), ai: valid(AI_TOPICS) } : { popular: [], companies: [], ai: [] }),
    [open, valid]
  );

  const recent = useMemo(() => {
    if (!open) return [];
    const progress = crtProgressService.getAllProgress();
    return Object.entries(progress)
      .filter(([, p]) => p.lastAccessed)
      .sort((a, b) => b[1].lastAccessed.localeCompare(a[1].lastAccessed))
      .slice(0, 4)
      .map(([id]) => docs.find(d => d.id === id))
      .filter((d): d is SearchDoc<DocInfo> => !!d);
  }, [open, docs]);

  const q = deferred.trim();
  const hits = useMemo(() => (q ? search(docs, q, 30) : []), [docs, q]);

  const choose = useCallback((info: DocInfo) => {
    onClose();
    // Let the panel leave first so the page transition does not capture it.
    window.setTimeout(() => {
      if (info.kind === 'crt' && info.yearId) onSelectCRTTopic(info.topicId, info.yearId);
      else onSelectAITopic(info.topicId);
    }, reduce ? 0 : 150);
  }, [onClose, onSelectAITopic, onSelectCRTTopic, reduce]);

  const rows: Row[] = useMemo(() => {
    const chip = (label: string, icon: React.ReactNode): Row => ({ key: `chip-${label}`, type: 'chip', label, icon, run: () => { setQuery(label); inputRef.current?.focus(); } });
    if (!q) {
      return [
        ...recent.map<Row>(d => ({ key: `recent-${d.id}`, type: 'hit', hit: { doc: d, score: 0, ranges: [] }, group: 'Recently opened' })),
        ...suggestions.popular.map(l => chip(l, <TrendingUp className="w-3.5 h-3.5" />)),
        ...suggestions.companies.map(l => chip(l, <Building2 className="w-3.5 h-3.5" />)),
        ...suggestions.ai.map(l => chip(l, <Cpu className="w-3.5 h-3.5" />))
      ];
    }
    if (hits.length === 0) {
      return suggestions.popular.slice(0, 4).map(l => chip(l, <TrendingUp className="w-3.5 h-3.5" />));
    }
    const crt = hits.filter(h => h.doc.payload.kind === 'crt').slice(0, 20);
    const ai = hits.filter(h => h.doc.payload.kind === 'ai').slice(0, 10);
    const crtFirst = (crt[0]?.score ?? 0) >= (ai[0]?.score ?? 0);
    const toRows = (arr: SearchHit<DocInfo>[], group: string): Row[] => arr.map(h => ({ key: h.doc.id, type: 'hit', hit: h, group }));
    return crtFirst ? [...toRows(crt, 'CRT Syllabus'), ...toRows(ai, 'AI Tools')] : [...toRows(ai, 'AI Tools'), ...toRows(crt, 'CRT Syllabus')];
  }, [q, hits, recent, suggestions]);

  // ---- open / close side effects ----
  useEffect(() => {
    if (!open) return;
    opener.current = document.activeElement as HTMLElement | null; // captured before the input takes focus
    inputRef.current?.focus({ preventScroll: true });
    setQuery('');
    setActive(0);
    // lock page scroll without letting the layout jump
    const body = document.body;
    const root = document.documentElement;
    const sbw = window.innerWidth - root.clientWidth;
    const prev = { o: body.style.overflow, p: body.style.paddingRight };
    body.style.overflow = 'hidden';
    if (sbw > 0) {
      body.style.paddingRight = `${sbw}px`;
      root.style.setProperty('--sbw', `${sbw}px`);
    }
    const vv = window.visualViewport;
    const sync = () => root.style.setProperty('--vvh', `${vv ? vv.height : window.innerHeight}px`);
    sync();
    vv?.addEventListener('resize', sync);
    return () => {
      body.style.overflow = prev.o;
      body.style.paddingRight = prev.p;
      root.style.removeProperty('--sbw');
      root.style.removeProperty('--vvh');
      vv?.removeEventListener('resize', sync);
      const el = opener.current;
      if (el && el.isConnected) el.focus({ preventScroll: true });
    };
  }, [open]);

  // grow-from-the-button origin (only when a pointer opened it)
  useEffect(() => {
    if (!open || !origin) { setOriginStyle(undefined); return; }
    const r = panelRef.current?.getBoundingClientRect();
    if (r) setOriginStyle(`${Math.round(origin.x - r.left)}px ${Math.round(origin.y - r.top)}px`);
  }, [open, origin]);

  useEffect(() => { setActive(0); }, [q]);

  // measure the list so its height can animate smoothly as results change
  useEffect(() => {
    const el = listInner.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => setListH(el.offsetHeight));
    ro.observe(el);
    setListH(el.offsetHeight);
    return () => ro.disconnect();
  }, [open, rows.length]);

  useEffect(() => {
    document.getElementById(`sp-opt-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const runRow = (i: number) => {
    const r = rows[i];
    if (!r) return;
    if (r.type === 'hit') choose(r.hit.doc.payload);
    else r.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const n = rows.length;
    if (e.key === 'Escape') { e.preventDefault(); onClose(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (n) setActive(a => (a + 1) % n); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (n) setActive(a => (a - 1 + n) % n); }
    else if (e.key === 'Home' && e.target === inputRef.current && !query) { e.preventDefault(); setActive(0); }
    else if (e.key === 'Enter') { e.preventDefault(); runRow(active); }
    else if (e.key === 'Tab') {
      // keep focus inside the dialog: input -> clear -> close -> back to input
      const f = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('input, button:not([tabindex="-1"])') ?? []).filter(el => el.offsetParent !== null);
      if (!f.length) return;
      const i = f.indexOf(document.activeElement as HTMLElement);
      const next = e.shiftKey ? (i <= 0 ? f.length - 1 : i - 1) : (i === -1 || i === f.length - 1 ? 0 : i + 1);
      e.preventDefault();
      f[next].focus();
    }
  };

  const onInput = (v: string) => {
    setQuery(v);
    setBusy(true);
    window.clearTimeout(busyTimer.current);
    busyTimer.current = window.setTimeout(() => setBusy(false), 220);
  };

  // ---- render helpers ----
  const spring = reduce ? { duration: 0.12 } : { type: 'spring' as const, stiffness: 430, damping: 27, mass: 0.8 };
  let lastGroup = '';
  const status = !q
    ? ''
    : hits.length === 0
    ? 'No results'
    : `${hits.length} result${hits.length === 1 ? '' : 's'}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="scrim"
          aria-hidden="true"
          className="search-scrim fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: reduce ? 0.12 : 0.26, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ opacity: 0, transition: { duration: 0.16 } }}
          onClick={onClose}
        />
      )}
      {open && (
        <div key="wrap" className="fixed inset-0 z-[71] flex items-start justify-center px-3 sm:px-6 pt-[7vh] sm:pt-[13vh] pointer-events-none" style={{ paddingRight: 'calc(var(--sbw, 0px) + 0.75rem)' }}>
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search the syllabus"
            onKeyDown={onKeyDown}
            className="search-panel pointer-events-auto w-full max-w-[720px] flex flex-col"
            style={{ transformOrigin: originStyle ?? '50% 0%', maxHeight: 'calc(var(--vvh, 100dvh) - 7vh - 1rem)', willChange: 'transform, opacity' }}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: origin ? 0.9 : 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: spring }}
            exit={reduce ? { opacity: 0, transition: { duration: 0.12 } } : { opacity: 0, scale: 0.975, y: 6, transition: { duration: 0.16, ease: [0.4, 0, 1, 1] } }}
          >
            {/* input */}
            <div className="p-3 sm:p-4">
              <div className="search-input-wrap flex items-center gap-3 px-4 h-14">
                <motion.span
                  aria-hidden="true"
                  animate={busy && !reduce ? { scale: [1, 1.18, 1], rotate: [0, -8, 0] } : { scale: 1, rotate: 0 }}
                  transition={busy ? { duration: 0.5, repeat: Infinity } : { duration: 0.15 }}
                  className="text-indigo-600 shrink-0"
                >
                  {busy ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                </motion.span>
                <input
                  ref={inputRef}
                  type="text"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="sp-listbox"
                  aria-autocomplete="list"
                  aria-activedescendant={rows.length ? `sp-opt-${active}` : undefined}
                  aria-label="Search chapters, modules and topics"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  enterKeyHint="go"
                  placeholder="Search chapters, modules, topics…"
                  value={query}
                  onChange={e => onInput(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent text-base sm:text-lg font-medium text-slate-900 placeholder-slate-500"
                />
                {query && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                    className="p-1.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-white/70 transition-colors duration-150 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close search (Esc)"
                  className="chip-glass hidden sm:inline-flex px-2 py-1 rounded-lg text-[11px] font-mono font-semibold text-slate-600 cursor-pointer"
                >
                  Esc
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close search"
                  className="sm:hidden px-2 py-1 rounded-lg text-xs font-bold text-indigo-700 hover:bg-white/70 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div role="status" aria-live="polite" className="sr-only">{status}</div>

            {/* results: height follows content, clipped to the viewport */}
            <motion.div
              animate={{ height: Math.min(listH, 460) }}
              transition={reduce ? { duration: 0.01 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-y-auto overscroll-contain px-2 sm:px-3 pb-2 min-h-0"
              style={{ maxHeight: 'calc(var(--vvh, 100dvh) * 0.62)' }}
            >
              <div ref={listInner} className="pb-1">
                <LayoutGroup id="search-palette">
                  {q && hits.length === 0 && (
                    <div className="px-4 pt-6 pb-3 text-center space-y-1">
                      <SearchX className="w-7 h-7 mx-auto text-slate-400" />
                      <p className="font-display font-bold text-slate-900">No match for “{q}”</p>
                      <p className="text-xs text-slate-600">Check the spelling, or try one of these:</p>
                    </div>
                  )}
                  <div id="sp-listbox" role="listbox" aria-label={q ? 'Search results' : 'Suggestions'}>
                    {rows.map((r, i) => {
                      const group = r.type === 'hit' ? r.group : r.type === 'chip' ? '' : '';
                      const heading =
                        !q && r.type === 'chip'
                          ? (suggestions.popular.includes(r.label) ? 'Popular topics' : suggestions.companies.includes(r.label) ? 'Company prep' : 'AI Tools')
                          : group;
                      const showHeading = heading && heading !== lastGroup && !(q && hits.length === 0);
                      if (showHeading) lastGroup = heading;
                      const isActive = i === active;
                      const common = {
                        id: `sp-opt-${i}`,
                        role: 'option' as const,
                        'aria-selected': isActive,
                        onMouseMove: () => { if (!isActive) setActive(i); },
                        onClick: () => runRow(i)
                      };
                      const enter = reduce
                        ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
                        : { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 } };
                      const delay = { delay: Math.min(i, 8) * 0.025, duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };
                      return (
                        <React.Fragment key={r.key}>
                          {showHeading && (
                            <div role="presentation" className="px-3 pt-3 pb-1 flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                              {heading === 'Recently opened' && <History className="w-3 h-3" />}
                              {heading}
                            </div>
                          )}
                          {r.type === 'hit' ? (
                            <motion.div {...common} {...enter} transition={delay} className="relative flex items-center gap-3 px-3 py-2.5 rounded-2xl cursor-pointer">
                              {isActive && <motion.span layoutId="sp-active" aria-hidden="true" className="search-active absolute inset-0 rounded-2xl" transition={spring} />}
                              <span className={`relative shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white ${r.hit.doc.payload.kind === 'crt' ? 'bg-gradient-to-br from-blue-600 to-indigo-600' : 'bg-gradient-to-br from-violet-600 to-fuchsia-600'}`}>
                                {r.hit.doc.payload.kind === 'crt' ? <Brain className="w-4.5 h-4.5" /> : <Cpu className="w-4.5 h-4.5" />}
                              </span>
                              <span className="relative min-w-0 flex-1">
                                <span className="block truncate font-display font-bold text-[15px] text-slate-900">
                                  <Highlight text={r.hit.doc.title} ranges={r.hit.ranges} />
                                </span>
                                <span className="flex flex-wrap items-center gap-1.5 pt-0.5">
                                  {r.hit.doc.payload.badges.filter(Boolean).map((b, bi) => (
                                    <span key={bi} className="px-1.5 py-0.5 rounded-md bg-slate-900/5 text-[10px] font-bold text-slate-700 max-w-[11rem] truncate">{b}</span>
                                  ))}
                                  <span className="text-[11px] font-medium text-slate-600">~{r.hit.doc.payload.minutes} min read</span>
                                </span>
                              </span>
                              <ChevronRight className="relative w-4 h-4 text-slate-500 shrink-0" />
                            </motion.div>
                          ) : (
                            <motion.div {...common} {...enter} transition={delay} className="relative inline-flex mr-1.5 mb-1.5 align-top">
                              <span className={`relative inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[13px] font-semibold text-slate-800 cursor-pointer ${isActive ? '' : 'chip-glass'}`}>
                                {isActive && <motion.span layoutId="sp-active" aria-hidden="true" className="search-active absolute inset-0 rounded-full" transition={spring} />}
                                <span className="relative text-indigo-600">{r.icon}</span>
                                <span className="relative">{r.label}</span>
                              </span>
                            </motion.div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </LayoutGroup>
              </div>
            </motion.div>

            <div className="hidden sm:flex items-center justify-between gap-4 px-5 py-2.5 border-t border-slate-900/5 text-[11px] font-medium text-slate-600">
              <span className="flex items-center gap-3">
                <span><kbd className="font-mono">↑↓</kbd> move</span>
                <span><kbd className="font-mono">↵</kbd> open</span>
                <span><kbd className="font-mono">esc</kbd> close</span>
              </span>
              <span>Press <kbd className="font-mono">/</kbd> or <kbd className="font-mono">Ctrl K</kbd> anywhere</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchPalette;
