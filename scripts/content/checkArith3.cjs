// Independent arithmetic check: finds "expression = number" fragments in quiz explanations and chapter examples
// and recomputes the left-hand side. Prints every fragment whose stated result differs from the recomputed one.
const fs = require('fs');
const path = require('path');
const prefix = process.argv[2] || 'y3';
const dir = path.join(__dirname, '..', '..', 'src', 'data');
const sup = { '²': '**2', '³': '**3', '⁴': '**4', '⁵': '**5', '⁶': '**6', '⁷': '**7' };
function clean(expr) {
  let e = expr.replace(/[×x·]/g, '*').replace(/÷/g, '/').replace(/[−–]/g, '-').replace(/,/g, '');
  e = e.replace(/[²³⁴⁵⁶⁷]/g, (m) => sup[m]).replace(/\^/g, '**');
  e = e.replace(/(\d)\s*%/g, '($1/100)');
  return e;
}
const OK = /^[0-9+\-*/().\s*]+$/;
const frag = /((?:\d[\d,]*\.?\d*|\([^()]*\))(?:\s*[×x÷+\-−–*/^]\s*(?:\d[\d,]*\.?\d*[²³⁴⁵⁶⁷]?|\([^()]*\)[²³⁴⁵⁶⁷]?)|[²³⁴⁵⁶⁷])+)\s*=\s*(-?[−]?\d[\d,]*\.?\d*)(?!\d)(?!\s*[×x÷+\-−–*/^²³])/g;
const bad = [];
let checked = 0;
function scan(label, text) {
  if (!text) return;
  let m;
  frag.lastIndex = 0;
  while ((m = frag.exec(text))) {
    const lhs = clean(m[1]);
    const rhsRaw = m[2].replace(/,/g, '').replace('−', '-');
    if (!OK.test(lhs)) continue;
    let val;
    try { val = Function('"use strict";return (' + lhs + ')')(); } catch (e) { continue; }
    if (typeof val !== 'number' || !isFinite(val)) continue;
    const rhs = parseFloat(rhsRaw);
    checked++;
    const dec = (rhsRaw.split('.')[1] || '').length;
    const tol = dec ? 0.51 * Math.pow(10, -dec) : 0.0001;
    const close = (a, b) => Math.abs(a - b) <= tol || Math.abs(a - b) / Math.max(1, Math.abs(b)) <= 0.0001 || Math.abs(a - b) <= 0.0051 * Math.max(1, Math.abs(b)) && dec > 0;
    if (!close(val, rhs) && !close(val * 100, rhs) && !close(Math.round(val), rhs)) bad.push(`${label}: "${m[1].trim()} = ${m[2]}" recomputes to ${Math.round(val * 1000) / 1000}`);
  }
}
for (const f of fs.readdirSync(path.join(dir, 'topicQuizzes')).filter((x) => x.startsWith(prefix) && x.endsWith('.json'))) {
  const d = JSON.parse(fs.readFileSync(path.join(dir, 'topicQuizzes', f), 'utf8'));
  d.questions.forEach((q, i) => { scan(`${d.topicId} Q${i + 1} expl`, q.explanation); scan(`${d.topicId} Q${i + 1} shortcut`, q.shortcut); });
}
for (const f of fs.readdirSync(path.join(dir, 'chapters')).filter((x) => x.startsWith(prefix) && x.endsWith('.json'))) {
  const c = JSON.parse(fs.readFileSync(path.join(dir, 'chapters', f), 'utf8'));
  scan(`${f} json`, JSON.stringify(c));
}
console.log(`checked ${checked} fragments; ${bad.length} mismatches`);
bad.forEach((b) => console.log(b));
