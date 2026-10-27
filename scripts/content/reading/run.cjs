// node scripts/content/reading/run.cjs year1  -> rebuilds every reading guide of that year.
// Run AFTER scripts/content/runAll.cjs (it patches estimatedMinutes in the chapter JSON).
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, process.argv[2] || 'year1');
let totalWords = 0, totalEx = 0, n = 0;
fs.readdirSync(dir).filter(f => f.endsWith('.cjs')).sort().forEach(f => {
  const r = require(path.join(dir, f));
  (Array.isArray(r) ? r : [r]).forEach(x => { if (x) { totalWords += x.words; totalEx += x.examples; n++; } });
  console.log('built', f);
});
console.log(`${n} chapters, ${totalWords} words, ${totalEx} worked examples`);
