const fs = require('fs');
const path = require('path');
const { normalizeTopic } = require('../normalizeTopic.cjs');

const topic1 = normalizeTopic(require('./topic1_profit_loss.cjs'), 1);
const topic2 = normalizeTopic(require('./topic2_time_work.cjs'), 2);
const topic3 = normalizeTopic(require('./topic3_seating.cjs'), 3);
const topic4 = normalizeTopic(require('./topic4_para_jumbles.cjs'), 4);
const topic5 = normalizeTopic(require('./topic5_line_graphs.cjs'), 5);

const year2Curriculum = {
  yearId: 2,
  yearName: '2nd Year',
  levelTitle: 'Intermediate CRT — Commercial Arithmetic, Operational Reasoning & Analytical Synthesis',
  description:
    'Comprehensive second-year curriculum designed to master commercial arithmetic, unitary operational models, complex linear and circular constraint layouts, paragraph coherence heuristics, and multi-series trend line analytics.',
  targetFocus: [
    'Mastering commercial arithmetic: marked price, successive discounts, faulty weight mechanics, and multi-step profit-loss balance equations',
    'Formulating unitary time-work equations, LCM-efficiency models, negative work dynamics, and alternating work schedules',
    'Developing bi-directional relative placement grids, inward/outward circular boundary mapping, and linear queue constraint satisfaction',
    'Applying mandatory opening identification, pronoun-antecedent anchoring, chronological sequence mapping, and ACRONYM-first heuristics for parajumbles',
    'Deconstructing multi-line comparative time-series graphs, compounded growth rates, intercept crossovers, and index-based data synthesis'
  ],
  categories: [
    {
      category: 'Quantitative Aptitude',
      description: 'Commercial profit-loss mechanics, discount chain reactions, efficiency-based work dynamics, and alternating operational cycles.',
      topics: [topic1, topic2]
    },
    {
      category: 'Logical Reasoning',
      description: 'Linear queue constraints, bi-directional row arrangements, inward/outward facing circular rings, and matrix attribute binding.',
      topics: [topic3]
    },
    {
      category: 'Verbal Ability',
      description: 'Discourse markers, paragraph organization, mandatory pair linkages, chronological timelines, and structural coherence.',
      topics: [topic4]
    },
    {
      category: 'Data Interpretation',
      description: 'Multi-line trend analysis, continuous time-series analytics, year-over-year rate differentials, and index conversion matrices.',
      topics: [topic5]
    }
  ]
};

const outputContent = `import { CRTYearCurriculum } from '../types/crtTypes';

export const CRT_YEAR_2_DATA: CRTYearCurriculum = ${JSON.stringify(year2Curriculum, null, 2)};
`;

const targetPath = path.join(__dirname, '../../src/data/crtYear2Data.ts');
fs.writeFileSync(targetPath, outputContent, 'utf8');
console.log('Successfully wrote Year 2 data to', targetPath);
