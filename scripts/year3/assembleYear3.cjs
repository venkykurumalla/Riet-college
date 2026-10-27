const fs = require('fs');
const path = require('path');
const { normalizeTopic } = require('../normalizeTopic.cjs');

const topic1 = normalizeTopic(require('./topic1_tsd_advanced.cjs'), 1);
const topic2 = normalizeTopic(require('./topic2_complex_puzzles.cjs'), 2);
const topic3 = normalizeTopic(require('./topic3_rc_advanced.cjs'), 3);
const topic4 = normalizeTopic(require('./topic4_caselet_di.cjs'), 4);

const year3Curriculum = {
  yearId: 3,
  yearName: '3rd Year',
  levelTitle: 'Advanced CRT — Pre-Final Year Placement Rigor & Multi-Variable Synthesis',
  description:
    'High-intensity pre-final year placement curriculum focusing on advanced multi-body kinematic dynamics, multi-dimensional combinatorial puzzle matrices, critical reading discourse analysis, and unstructured paragraph caselet analytics.',
  targetFocus: [
    'Mastering multi-body relative speed kinematics: train traversals, fluid vectors, escalators, and circular track periodicity',
    'Deconstructing complex 3-attribute and 4-attribute logic matrices, vertical box stacks, and multi-department scheduling constraints',
    'Applying critical discourse analysis: primary purpose identification, authorial tone calibration, and 4-step distractor elimination',
    'Translating unstructured narrative paragraph caselets into structured 2D matrices and 3-set Venn demographic models'
  ],
  categories: [
    {
      category: 'Quantitative Aptitude',
      description: 'Advanced kinematic models, relative velocity vectors, fluid stream dynamics, escalator step counters, and circular lap races.',
      topics: [topic1]
    },
    {
      category: 'Logical Reasoning',
      description: 'Multi-attribute constraint matrices, floor/box stacking layouts, day-month scheduling grids, and hybrid family tree seating.',
      topics: [topic2]
    },
    {
      category: 'Verbal Ability',
      description: 'Critical reading comprehension, authorial tone spectrum, unstated assumption negation, and distractor elimination.',
      topics: [topic3]
    },
    {
      category: 'Data Interpretation',
      description: 'Narrative table translation, 3-set Venn inclusion-exclusion, missing data balance sheets, and set boundary optimization.',
      topics: [topic4]
    }
  ]
};

const outputContent = `import { CRTYearCurriculum } from '../types/crtTypes';

export const CRT_YEAR_3_DATA: CRTYearCurriculum = ${JSON.stringify(year3Curriculum, null, 2)};
`;

const targetPath = path.join(__dirname, '../../src/data/crtYear3Data.ts');
fs.writeFileSync(targetPath, outputContent, 'utf8');
console.log('Successfully wrote Year 3 data to', targetPath);
