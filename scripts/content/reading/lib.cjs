// Builder for chapter reading guides (src/data/reading/<id>.json).
// Usage: require('../lib.cjs').R({...}) from a chapter file; run all with
//   node scripts/content/reading/run.cjs year1
// Every numeric example carries chk(): the value(s) that MUST appear in the stated answer,
// computed here in code rather than typed twice.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const OUT = path.join(ROOT, 'src', 'data', 'reading');
const CHAPTERS = path.join(ROOT, 'src', 'data', 'chapters');

const words = s => String(s).trim().split(/\s+/).filter(Boolean).length;
const norm = s => String(s).replace(/[,\s₹%]/g, '');

function R(spec) {
  const fail = m => { throw new Error(`${spec.id}: ${m}`); };
  const ex = spec.ex || [];
  if (ex.length < 5) fail(`needs at least 5 worked examples, has ${ex.length}`);
  if (!ex.some(e => e.lv === 'Easy')) fail('needs an Easy example');
  if (!ex.some(e => e.lv === 'Placement')) fail('needs a Placement example');
  ex.forEach((e, i) => {
    if (!['Easy', 'Medium', 'Placement'].includes(e.lv)) fail(`example ${i + 1}: bad level`);
    if (!e.q || !e.ans) fail(`example ${i + 1}: missing question or answer`);
    if (!e.steps || e.steps.length < 2) fail(`example ${i + 1}: needs 2+ steps`);
    if (spec.quant && !e.sc) fail(`example ${i + 1}: aptitude example needs a shortcut`);
    if (e.chk) {
      const vals = [].concat(e.chk());
      vals.forEach(v => {
        const want = typeof v === 'number' ? String(Math.round(v * 1e6) / 1e6) : String(v);
        if (!norm(e.ans).includes(norm(want))) fail(`example ${i + 1}: answer "${e.ans}" does not contain computed value ${want}`);
      });
    } else if (spec.quant) fail(`example ${i + 1}: aptitude example needs chk()`);
  });
  const need = (k, n) => { if (!spec[k] || spec[k].length < n) fail(`${k} needs at least ${n} entries`); };
  need('build', 3); need('terms', 5); need('rules', 3); need('recog', 3); need('vars', 3); need('mist', 3);
  if (!spec.tryIt || spec.tryIt.length !== 3) fail('tryIt needs exactly 3 questions');
  if (!spec.rev || spec.rev.rows.length < 3) fail('revision table needs 3+ rows');
  spec.rev.rows.forEach(r => { if (r.length !== spec.rev.h.length) fail('revision row width mismatch'); });
  const dup = new Set(); ex.forEach(e => { if (dup.has(e.q)) fail('duplicate example question'); dup.add(e.q); });

  const guide = {
    topicId: spec.id,
    buildUp: spec.build.map(([heading, paragraphs]) => ({ heading, paragraphs })),
    keyTerms: spec.terms.map(([term, meaning]) => ({ term, meaning })),
    rules: spec.rules.map(([rule, condition]) => ({ rule, condition })),
    recognise: spec.recog,
    workedExamples: ex.map(e => ({ level: e.lv, question: e.q, steps: e.steps, answer: e.ans, ...(e.sc ? { shortcut: e.sc } : {}) })),
    variations: spec.vars.map(([name, note]) => ({ name, note })),
    mistakes: spec.mist.map(([wrong, why, corrected]) => ({ wrong, why, corrected })),
    revisionTable: { headers: spec.rev.h, rows: spec.rev.rows },
    tryIt: spec.tryIt.map(([question, answer, hint]) => ({ question, answer, ...(hint ? { hint } : {}) }))
  };
  fs.writeFileSync(path.join(OUT, `${spec.id}.json`), JSON.stringify(guide, null, 1) + '\n');

  // Honest study time: reading at ~200 wpm plus ~2.5 min to attempt each example / try-it question.
  const text = JSON.stringify(guide).replace(/[{}\[\]":,]/g, ' ');
  const chapterFile = path.join(CHAPTERS, `${spec.id}.json`);
  const chapter = JSON.parse(fs.readFileSync(chapterFile, 'utf8'));
  const chapterWords = words(JSON.stringify(chapter.conceptExplanation) + JSON.stringify(chapter.detailedExplanation) + JSON.stringify(chapter.solvedExamples));
  const minutes = Math.round((words(text) + chapterWords) / 200 + ex.length * 2.5 + 3 * 1.5 + 4);
  chapter.estimatedMinutes = Math.round(minutes / 5) * 5;
  fs.writeFileSync(chapterFile, JSON.stringify(chapter, null, 2) + '\n');

  const idxFile = path.join(OUT, 'index.json');
  const idx = JSON.parse(fs.readFileSync(idxFile, 'utf8'));
  idx[spec.id] = { examples: ex.length };
  const sorted = Object.fromEntries(Object.entries(idx).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(idxFile, JSON.stringify(sorted, null, 1) + '\n');
  return { words: words(text), examples: ex.length, minutes: chapter.estimatedMinutes };
}

module.exports = { R };
