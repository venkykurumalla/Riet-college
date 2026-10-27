// Rebuilds every authored chapter/quiz file: node scripts/content/runAll.cjs [year1]
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, process.argv[2] || 'year1');
fs.readdirSync(dir).filter(f => f.endsWith('.cjs')).sort().forEach(f => { require(path.join(dir, f)); console.log('built', f); });
