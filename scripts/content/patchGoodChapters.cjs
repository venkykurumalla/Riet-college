// Minimal edits to the six good 1st Year chapters (ch 1-6). Everything else is kept as it was.
// Changes: (1) remove invented timeSavedPercent values, (2) soften unverifiable placement claims,
// (3) replace the generic prerequisite text with topic-appropriate prerequisites,
// (4) add a third worked example to ch 1-4 (they had two).
// Reads the generated data (src/data/crtYear1Data.ts) and writes overrides to src/data/chapters/<id>.json.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '../..');
const src = fs.readFileSync(path.join(ROOT, 'src/data/crtYear1Data.ts'), 'utf8');
const json = src.slice(src.indexOf('= {') + 2, src.lastIndexOf('};') + 1);
const year1 = JSON.parse(json);
const topics = year1.categories.flatMap(c => c.topics).filter(t => t.topicNumber <= 6);

const prereqs = {
  'y1-quant-num-sys': [['Basic arithmetic: addition, subtraction, multiplication, division'], 'Be comfortable with the four operations and with the idea of a factor and a multiple.'],
  'y1-quant-divisibility': [['Number System Fundamentals', 'Multiplication tables up to 12'], 'Know the tables up to 12 and the meaning of "divisible by" and "remainder".'],
  'y1-quant-hcf-lcm': [['Number System Fundamentals', 'Divisibility Rules', 'Prime factorisation'], 'Be able to write a number as a product of primes and to test divisibility quickly.'],
  'y1-quant-fractions-decimals': [['HCF and LCM Fundamentals', 'Basic arithmetic'], 'Know how to simplify a fraction with the HCF and how to find a common denominator with the LCM.'],
  'y1-quant-simplification': [['Fractions and Decimals', 'Basic arithmetic'], 'Be fluent in fraction and decimal operations and in squares and square roots of small numbers.'],
  'y1-quant-basic-percentages': [['Fractions and Decimals', 'Basic multiplication and division'], 'Recall that 1/4 = 25%, 1/3 ≈ 33.33%, 1/5 = 20% and 1/8 = 12.5%.']
};

const sentenceFixes = [
  [' Mastering rules from 2 to 13 eliminates over 80% of calculation in aptitude option-filtering tasks.', ' Knowing the rules for 2 to 13 removes a great deal of calculation when filtering options in aptitude questions.'],
  ['Divisibility rules 2–13 save 80% of computation time — learn them all before any placement test.', 'Divisibility rules for 2 to 13 save a lot of calculation time — learn them all before any placement test.'],
  [' Every placement aptitude paper includes at least 2–3 direct HCF/LCM questions.', ' HCF and LCM questions are commonly asked in company aptitude rounds.'],
  ['TCS, Infosys, and Wipro consistently test HCF/LCM directly and embed it', 'HCF and LCM are commonly tested directly in company aptitude rounds and are embedded'],
  ['Simplification questions are guaranteed in every placement aptitude test. TCS NQT, Infosys, Wipro, and Accenture all include 3–5 direct simplification problems. Speed and accuracy in BODMAS determines your score ceiling.', 'Simplification questions are commonly asked in company aptitude rounds, either directly or inside other questions. Speed and accuracy in BODMAS decide how many of them you can answer in time.'],
  [' Works on 70% of simplification MCQs.', ' This works whenever the options are well spread out.'],
  [' Virtually every quantitative section has 2–4 percentage-based questions.', ' Percentage-based questions are common in the quantitative section of company aptitude rounds.']
];


// (4) A third worked example for the four chapters that had only two.
const step = (stepNumber, title, explanation, math) => ({ stepNumber, title, explanation, ...(math ? { math } : {}) });
const extraExamples = {
  'y1-quant-num-sys': {
    id: 'ex-y1-num-sys-3', title: 'Unit digit of a sum of powers',
    question: 'Find the unit digit of 7^2023 + 3^2024.',
    givenInfo: ['Powers of 7 and 3', 'Exponents 2023 and 2024'],
    conceptOrFormula: 'Unit digits of powers repeat in a cycle of 4 (for 2, 3, 7, 8).',
    steps: [
      step(1, 'Cycle for 7', 'Unit digits of 7¹, 7², 7³, 7⁴ are 7, 9, 3, 1, and then repeat.'),
      step(2, 'Position of 2023 in the cycle', '2023 ÷ 4 leaves remainder 3, so the unit digit of 7^2023 is the third in the cycle: 3.', '2023 mod 4 = 3'),
      step(3, 'Cycle for 3', 'Unit digits of 3¹ to 3⁴ are 3, 9, 7, 1. 2024 ÷ 4 leaves remainder 0, so the unit digit of 3^2024 is the fourth in the cycle: 1.', '2024 mod 4 = 0'),
      step(4, 'Add the unit digits', '3 + 1 = 4, so the unit digit of the sum is 4.')
    ],
    finalAnswer: '4',
    whyItWorks: 'Only the unit digits matter for the unit digit of a sum, and each power cycles through four unit digits.',
    commonTrap: 'Treating a remainder of 0 as the first element of the cycle instead of the last.',
    difficulty: 'Placement-Style'
  },
  'y1-quant-divisibility': {
    id: 'ex-y1-divisibility-3', title: 'Smallest 5-digit number divisible by 88',
    question: 'Find the smallest 5-digit number that is divisible by 88.',
    givenInfo: ['88 = 8 × 11, and 8 and 11 are co-prime'],
    conceptOrFormula: 'A number is divisible by 88 if it is divisible by both 8 and 11. Start from the smallest 5-digit number and add the shortfall.',
    steps: [
      step(1, 'Divide the smallest 5-digit number by 88', '10000 = 88 × 113 + 56, so the remainder is 56.', '10000 − 9944 = 56'),
      step(2, 'Add the shortfall', 'To reach the next multiple of 88, add 88 − 56 = 32. The number is 10032.', '10000 + 32 = 10032'),
      step(3, 'Check with the rules', 'For 8: the last three digits 032 = 32 are divisible by 8. For 11: (1 + 0 + 2) − (0 + 3) = 0, which is divisible by 11.')
    ],
    finalAnswer: '10032',
    whyItWorks: 'Adding the shortfall from the remainder gives the next exact multiple, and the divisibility rules for 8 and 11 confirm it.',
    commonTrap: 'Starting from 9999 and moving up or down by the wrong amount.',
    difficulty: 'Placement-Style'
  },
  'y1-quant-hcf-lcm': {
    id: 'ex-y1-hcf-lcm-3', title: 'Least number leaving the same remainder',
    question: 'Find the least number which, when divided by 6, 9 and 15, leaves a remainder of 4 in each case.',
    givenInfo: ['Divisors: 6, 9, 15', 'Remainder in each case: 4'],
    conceptOrFormula: 'Required number = LCM of the divisors + common remainder.',
    steps: [
      step(1, 'Find the LCM', '6 = 2 × 3, 9 = 3², 15 = 3 × 5. LCM = 2 × 3² × 5 = 90.', 'LCM = 90'),
      step(2, 'Add the remainder', 'The number is a multiple of 90 plus 4. The least such number is 90 + 4 = 94.', '90 + 4 = 94'),
      step(3, 'Check', '94 ÷ 6 leaves 4, 94 ÷ 9 leaves 4, 94 ÷ 15 leaves 4.')
    ],
    finalAnswer: '94',
    whyItWorks: 'A multiple of the LCM leaves remainder 0 for every divisor, so adding 4 leaves remainder 4 for each.',
    commonTrap: 'Giving the LCM (90) as the answer.',
    difficulty: 'Placement-Style'
  },
  'y1-quant-fractions-decimals': {
    id: 'ex-y1-fractions-3', title: 'Tank problem with fractions',
    question: 'A tank is 3/5 full. After 18 litres are removed, it is 3/10 full. Find the capacity of the tank.',
    givenInfo: ['Initial fraction = 3/5', 'Final fraction = 3/10', 'Water removed = 18 litres'],
    conceptOrFormula: 'The fraction removed corresponds to the quantity removed.',
    steps: [
      step(1, 'Find the fraction removed', '3/5 − 3/10 = 6/10 − 3/10 = 3/10 of the tank.', '3/5 − 3/10 = 3/10'),
      step(2, 'Relate to the quantity', '3/10 of the capacity = 18 litres.'),
      step(3, 'Solve for the capacity', 'Capacity = 18 ÷ (3/10) = 18 × 10/3 = 60 litres.', '18 × 10/3 = 60')
    ],
    finalAnswer: '60 litres',
    whyItWorks: 'The difference of two fractions of the same whole is the fraction of the whole that was removed.',
    commonTrap: 'Treating 18 litres as 3/5 of the tank.',
    difficulty: 'Placement-Style'
  }
};

for (const t of topics) {
  let s = JSON.stringify(t);
  s = s.replace(/,?"timeSavedPercent":"[^"]*"/g, '');
  for (const [from, to] of sentenceFixes) s = s.split(JSON.stringify(from).slice(1, -1)).join(JSON.stringify(to).slice(1, -1));
  const out = JSON.parse(s);
  if (extraExamples[t.id]) out.solvedExamples.push(extraExamples[t.id]);
  out.prerequisiteKnowledge = { requiredTopics: prereqs[t.id][0], quickRefresher: prereqs[t.id][1] };
  fs.writeFileSync(path.join(ROOT, 'src/data/chapters', `${t.id}.json`), JSON.stringify(out, null, 2) + '\n');
  console.log('patched', t.id);
}
