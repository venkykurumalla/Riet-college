// Mobile profile: node perf.mjs <label> [cpuRate] [url]
import { chromium } from 'playwright';
import fs from 'fs';
const label = process.argv[2] || 'run';
const RATE = Number(process.argv[3] || 4);
const URL = process.argv[4] || 'http://localhost:4173';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on('console', m => { if (['error', 'warning'].includes(m.type())) errors.push(m.text().slice(0, 160)); });
page.on('pageerror', e => errors.push('pageerror ' + e.message.slice(0, 160)));
await page.addInitScript(() => {
  window.__lt = []; window.__cls = 0; window.__ev = [];
  try { new PerformanceObserver(l => l.getEntries().forEach(e => window.__lt.push([Math.round(e.startTime), Math.round(e.duration)]))).observe({ type: 'longtask', buffered: true }); } catch {}
  try { new PerformanceObserver(l => l.getEntries().forEach(e => { if (!e.hadRecentInput) window.__cls += e.value; })).observe({ type: 'layout-shift', buffered: true }); } catch {}
  try { new PerformanceObserver(l => l.getEntries().forEach(e => { if (e.interactionId) window.__ev.push(Math.round(e.duration)); })).observe({ type: 'event', durationThreshold: 16, buffered: true }); } catch {}
  window.__frames = null;
  window.__startFrames = () => { const f = { dts: [], run: true }; window.__frames = f; let last = performance.now(); const loop = t => { if (!f.run) return; f.dts.push(t - last); last = t; requestAnimationFrame(loop); }; requestAnimationFrame(loop); };
  window.__stopFrames = () => { const f = window.__frames; f.run = false; const d = f.dts.slice(1).sort((a, b) => a - b); return { frames: d.length, dropped: d.filter(x => x > 25).length, p95: Math.round(d[Math.floor(d.length * 0.95)] || 0), max: Math.round(d[d.length - 1] || 0) }; };
});
const cdp = await ctx.newCDPSession(page);
await cdp.send('Performance.enable');
const metrics = async () => Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(m => [m.name, m.value]));
const diff = (a, b) => ({ script: Math.round((b.ScriptDuration - a.ScriptDuration) * 1000), layout: Math.round((b.LayoutDuration - a.LayoutDuration) * 1000), style: Math.round((b.RecalcStyleDuration - a.RecalcStyleDuration) * 1000), task: Math.round((b.TaskDuration - a.TaskDuration) * 1000) });
const out = { label, rate: RATE };

// ---- first view payload ----
let bytes = 0, jsBytes = 0, cssBytes = 0, fontBytes = 0;
cdp.on?.('Network.loadingFinished', () => {});
await cdp.send('Network.enable');
const sizes = {};
cdp.on('Network.responseReceived', e => { sizes[e.requestId] = e.response.url; });
cdp.on('Network.loadingFinished', e => { const u = sizes[e.requestId] || ''; bytes += e.encodedDataLength; if (/\.js/.test(u)) jsBytes += e.encodedDataLength; else if (/\.css/.test(u)) cssBytes += e.encodedDataLength; else if (/\.woff2/.test(u)) fontBytes += e.encodedDataLength; });
await page.goto(URL, { waitUntil: 'networkidle' });
if (process.env.EXTRA_CSS) await page.addStyleTag({ content: process.env.EXTRA_CSS });
await page.waitForTimeout(800);
out.firstView = { totalKB: Math.round(bytes / 1024), jsKB: Math.round(jsBytes / 1024), cssKB: Math.round(cssBytes / 1024), fontKB: Math.round(fontBytes / 1024) };
await cdp.send('Emulation.setCPUThrottlingRate', { rate: RATE });
await page.waitForTimeout(500);

const tap = async loc => { const b = await loc.boundingBox(); await page.touchscreen.tap(b.x + b.width / 2, b.y + b.height / 2); };
await tap(page.getByRole('button', { name: /OPEN SYLLABUS/i }).first()); await page.waitForTimeout(1500);
await tap(page.getByRole('button', { name: /OPEN CRT/i })); await page.waitForTimeout(2500);

// ---- year switching ----
const tab = y => page.getByRole('tab', { name: new RegExp(y) });
const seq = ['2nd', '3rd', '4th', '1st', '3rd', '2nd', '4th', '1st'];
const sw = [];
for (const y of seq) {
  await page.evaluate(() => { window.__lt.length = 0; window.__startFrames(); window.__pillT = null; const p = document.querySelector('[role=tablist] > div'); window.__pillX0 = p.getBoundingClientRect().left; window.__t0 = performance.now(); const poll = () => { if (window.__pillT === null) { if (Math.abs(p.getBoundingClientRect().left - window.__pillX0) > 0.5) window.__pillT = performance.now() - window.__t0; else requestAnimationFrame(poll); } }; requestAnimationFrame(poll); });
  const m0 = await metrics();
  const b = await tab(y).boundingBox();
  await page.evaluate(() => { window.__t0 = performance.now(); });
  await page.touchscreen.tap(b.x + b.width / 2, b.y + b.height / 2);
  await page.waitForTimeout(1300);
  const m1 = await metrics();
  const r = await page.evaluate(() => ({ pill: window.__pillT, lt: window.__lt.slice(), fr: window.__stopFrames() }));
  sw.push({ y, pillStartMs: r.pill === null ? null : Math.round(r.pill), longTasks: r.lt.length, longest: Math.max(0, ...r.lt.map(x => x[1])), ...r.fr, ...diff(m0, m1) });
}
out.yearSwitch = sw;
const avg = k => Math.round(sw.reduce((a, s) => a + (s[k] || 0), 0) / sw.length);
out.yearSwitchAvg = { pillStartMs: avg('pillStartMs'), script: avg('script'), layout: avg('layout'), style: avg('style'), task: avg('task'), longTasks: avg('longTasks'), longestTask: Math.max(...sw.map(s => s.longest)), dropped: avg('dropped'), p95: avg('p95'), maxFrame: Math.max(...sw.map(s => s.max)) };
out.dom = { yearPage: await page.evaluate(() => document.querySelectorAll('*').length) };

// ---- open chapter (card on overview) ----
let m0 = await metrics();
const oc = page.getByText('Open Chapter').nth(1); await oc.scrollIntoViewIfNeeded(); await page.waitForTimeout(300); await page.evaluate(() => { window.__lt.length = 0; window.__startFrames(); }); m0 = await metrics(); await tap(oc); await page.waitForSelector('#topic-quiz', { state: 'attached', timeout: 20000 }).catch(() => {}); await page.waitForTimeout(1500);
let m1 = await metrics();
let r = await page.evaluate(() => ({ lt: window.__lt.slice(), fr: window.__stopFrames() }));
out.chapterOpen = { longTasks: r.lt.length, longest: Math.max(0, ...r.lt.map(x => x[1])), ...r.fr, ...diff(m0, m1) };
out.dom.chapterPage = await page.evaluate(() => document.querySelectorAll('*').length);

// ---- scroll a long chapter (touch-like steps) ----
await page.evaluate(() => { window.__lt.length = 0; window.__startFrames(); });
for (let i = 0; i < 14; i++) { await page.evaluate(() => window.scrollBy(0, 420)); await page.waitForTimeout(70); }
await page.waitForTimeout(500);
r = await page.evaluate(() => ({ lt: window.__lt.slice(), fr: window.__stopFrames(), y: scrollY }));
out.chapterScroll = { scrolledPx: r.y, longTasks: r.lt.length, longest: Math.max(0, ...r.lt.map(x => x[1])), ...r.fr };

// ---- quiz paging ----
await page.waitForSelector('#topic-quiz', { timeout: 20000, state: 'attached' }).catch(() => {});
await page.evaluate(() => document.getElementById('topic-quiz')?.scrollIntoView());
await page.waitForTimeout(600);
const quiz = page.locator('#topic-quiz');
await page.evaluate(() => { window.__lt.length = 0; window.__startFrames(); });
for (let i = 0; i < 3; i++) { const nb = quiz.getByRole('button', { name: /Next/ }); const bb = await nb.boundingBox({ timeout: 5000 }).catch(() => null); if (bb) await page.touchscreen.tap(bb.x + bb.width / 2, bb.y + bb.height / 2); await page.waitForTimeout(500); }
r = await page.evaluate(() => ({ lt: window.__lt.slice(), fr: window.__stopFrames() }));
out.quizPaging = { longTasks: r.lt.length, longest: Math.max(0, ...r.lt.map(x => x[1])), ...r.fr };

out.inpMs = await page.evaluate(() => Math.max(0, ...window.__ev));
out.cls = Math.round(await page.evaluate(() => window.__cls) * 1000) / 1000;
out.errors = errors;
fs.writeFileSync(`${label}-${RATE}x.json`, JSON.stringify(out, null, 1));
console.log(JSON.stringify({ label, rate: RATE, firstView: out.firstView, dom: out.dom, yearSwitchAvg: out.yearSwitchAvg, chapterOpen: out.chapterOpen, chapterScroll: out.chapterScroll, quizPaging: out.quizPaging, inp: out.inpMs, cls: out.cls, errors: out.errors }, null, 1));
await browser.close();
