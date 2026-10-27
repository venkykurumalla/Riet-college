const fs = require('fs');
const path = require('path');
const { normalizeTopic } = require('../normalizeTopic.cjs');

const topic1 = normalizeTopic(require('./topic1_speed_math.cjs'), 1);
const topic2 = normalizeTopic(require('./topic2_recruiter_patterns.cjs'), 2);

const year4Curriculum = {
  yearId: 4,
  yearName: '4th Year',
  levelTitle: 'Placement Strategy & Speed Mastery — High-Velocity Execution & Assessment Blueprints',
  description:
    'Comprehensive final-year strategic mastery curriculum focusing on computational velocity, mental arithmetic sutras, digital root verification, item response theory (IRT) navigation, and multi-tier recruiter assessment blueprints.',
  targetFocus: [
    'Mastering Vedic mathematics sutras: Urdhva Tiryagbhyam, Nikhilam Base Multiplication, and instantaneous roots',
    'Applying the Digital Sum (Modulo-9 Invariant) to eliminate calculation errors in under 3 seconds',
    'Deconstructing recruiter test engines: TCS iON, Infosys InfyTQ, AMCAT, Mercer Mettl, and Capgemini',
    'Executing the 3-Pass Sectional Time Triage algorithm, Expected Value guessing, and SJT behavioral frameworks'
  ],
  categories: [
    {
      category: 'Placement Strategy & Shortcuts',
      description: 'Vedic speed mathematics, digital root invariants, 3-pass time triage, adaptive IRT algorithms, and corporate hiring blueprints.',
      topics: [topic1, topic2]
    }
  ]
};

const outputContent = `import { CRTYearCurriculum } from '../types/crtTypes';

export const CRT_YEAR_4_DATA: CRTYearCurriculum = ${JSON.stringify(year4Curriculum, null, 2)};
`;

const targetPath = path.join(__dirname, '../../src/data/crtYear4Data.ts');
fs.writeFileSync(targetPath, outputContent, 'utf8');
console.log('Successfully wrote Year 4 data to', targetPath);
