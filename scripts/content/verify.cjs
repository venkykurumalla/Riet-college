// Verifies rewritten chapters and topic quizzes. Usage: node scripts/content/verify.cjs [yearPrefix e.g. y1]
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '../..');
const prefix = process.argv[2] || 'y';
const BAD = [
  'A standard placement-level question on', 'Result of direct calculation', 'Next term based on identified pattern',
  'See narrative for specific formulas', 'Varies by problem', 'Easy MCQ on', 'Second easy MCQ on', 'targeted practice',
  'accuracy improves by', 'hidden constraints', 'timeSavedPercent', 'multiplication tables 1–20'
];
let errors = 0, warns = 0, checked = 0;
const err = m => { errors++; console.log('ERROR ', m); };
const warn = m => { warns++; console.log('warn  ', m); };
const norm = s => String(s).replace(/[,\s₹]/g, '').toLowerCase();

for (const f of fs.readdirSync(path.join(ROOT, 'src/data/chapters')).filter(f => f.startsWith(prefix) && f.endsWith('.json'))) {
  const id = f.replace('.json', '');
  const raw = fs.readFileSync(path.join(ROOT, 'src/data/chapters', f), 'utf8');
  const t = JSON.parse(raw);
  checked++;
  BAD.forEach(b => raw.includes(b) && err(`${id}: contains "${b}"`));
  if (/\b\d{2,3}\s?%\s+(of|more|faster)\s+(placement|candidates|tests|students)/i.test(raw)) err(`${id}: numeric placement claim`);
  if (t.solvedExamples.length < 3) err(`${id}: only ${t.solvedExamples.length} solved examples`);
  t.solvedExamples.forEach(e => e.steps.length < 2 && err(`${id}: example "${e.title}" has <2 steps`));
  if (t.importantRulesAndFormulas.length < 2) err(`${id}: <2 formula cards`);
  if (t.commonMistakes.length < 3) warn(`${id}: <3 common mistakes`);

  const qp = path.join(ROOT, 'src/data/topicQuizzes', f);
  if (!fs.existsSync(qp)) { err(`${id}: no quiz file`); continue; }
  const quiz = JSON.parse(fs.readFileSync(qp, 'utf8'));
  if (quiz.topicId !== id) err(`${id}: quiz topicId mismatch`);
  if (quiz.questions.length < 15) err(`${id}: only ${quiz.questions.length} questions`);
  const dc = { easy: 0, medium: 0, placement: 0 };
  const seenQ = new Set();
  quiz.questions.forEach(q => {
    const tag = `${id} Q${q.id}`;
    dc[q.difficulty]++;
    if (q.options.length !== 4) err(`${tag}: ${q.options.length} options`);
    if (new Set(q.options.map(norm)).size !== q.options.length) err(`${tag}: duplicate options ${JSON.stringify(q.options)}`);
    if (!(q.answerIndex >= 0 && q.answerIndex < q.options.length)) err(`${tag}: bad answerIndex`);
    if (seenQ.has(q.question)) err(`${tag}: duplicate question`);
    seenQ.add(q.question);
    const correct = q.options[q.answerIndex];
    if (!norm(q.explanation).includes(norm(correct))) warn(`${tag}: explanation does not state the answer "${correct}"`);
    if (/^(Option )?[A-D]$/.test(correct)) err(`${tag}: placeholder option`);
  });
  if (dc.easy < 4 || dc.medium < 5 || dc.placement < 4) warn(`${id}: mix easy/medium/placement = ${dc.easy}/${dc.medium}/${dc.placement}`);
}
console.log(`\nChecked ${checked} chapters: ${errors} errors, ${warns} warnings`);
process.exit(errors ? 1 : 0);
