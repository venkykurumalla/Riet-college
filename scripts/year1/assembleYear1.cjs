const fs = require('fs');
const path = require('path');
const { normalizeTopic } = require('../normalizeTopic.cjs');

const topic1 = normalizeTopic(require('./topic1_number_system.cjs'), 1);
const topic2 = normalizeTopic(require('./topic2_hcf_lcm.cjs'), 2);
const topic3 = normalizeTopic(require('./topic3_percentages.cjs'), 3);
const topic4 = normalizeTopic(require('./topic4_series.cjs'), 4);
const topic5 = normalizeTopic(require('./topic5_coding_decoding.cjs'), 5);
const topic6 = normalizeTopic(require('./topic6_grammar_concord.cjs'), 6);
const topic7 = normalizeTopic(require('./topic7_di_tables.cjs'), 7);

const year1Curriculum = {
  yearId: 1,
  yearName: '1st Year',
  levelTitle: 'Foundation CRT — Core Numerical, Logical & Verbal Fundamentals',
  description:
    'Comprehensive first-year foundation curriculum designed to establish fundamental mathematical fluency, systematic reasoning patterns, grammatical accuracy, and basic chart comprehension.',
  targetFocus: [
    'Building core arithmetic intuition, number properties, and rapid mental calculation accuracy',
    'Developing step-by-step pattern recognition in logical sequences, letter structures, and codes',
    'Mastering English grammar fundamentals, concord rules, pronoun cases, and baseline error detection',
    'Interpreting standard baseline tables, bar charts, growth rates, and circular data distributions'
  ],
  categories: [
    {
      category: 'Quantitative Aptitude',
      description: 'Foundational arithmetic, number theory, divisibility, HCF-LCM, percentages, and baseline ratio mathematics.',
      topics: [topic1, topic2, topic3]
    },
    {
      category: 'Logical Reasoning',
      description: 'Pattern recognition, alpha-numeric sequences, positional values, and substitution coding.',
      topics: [topic4, topic5]
    },
    {
      category: 'Verbal Ability',
      description: 'English syntax foundations, subject-verb concord, tense consistency, and structural sentence correction.',
      topics: [topic6]
    },
    {
      category: 'Data Interpretation',
      description: 'Tabular data analysis, single and multi-variable bar charts, percentage growth, and rapid ratio calculations.',
      topics: [topic7]
    }
  ]
};

const outputContent = `import { CRTYearCurriculum } from '../types/crtTypes';

export const CRT_YEAR_1_DATA: CRTYearCurriculum = ${JSON.stringify(year1Curriculum, null, 2)};
`;

const targetPath = path.join(__dirname, '../../src/data/crtYear1Data.ts');
fs.writeFileSync(targetPath, outputContent, 'utf8');
console.log('Successfully wrote Year 1 data to', targetPath);
