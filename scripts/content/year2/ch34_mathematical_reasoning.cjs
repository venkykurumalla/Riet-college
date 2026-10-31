const { easy, medium, placement, build } = require('../lib.cjs');

// Answers are computed by evaluating the stated rules, not typed by hand.
const OPS = ['+', '−', '×', '÷'];
const ev = (a, o1, b, o2, c) => Function('return ' + [a, o1, b, o2, c].join(' ').replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'))();
const fits = (a, b, c, r) => { const out = []; for (const o1 of OPS) for (const o2 of OPS) if (Math.abs(ev(a, o1, b, o2, c) - r) < 1e-9) out.push(o1 + ', ' + o2); return out; };
const signQ = (d, a, b, c, r) => {
  const good = fits(a, b, c, r);
  if (good.length !== 1) throw new Error('not unique: ' + [a, b, c, r] + ' ' + good);
  const bad = []; for (const o1 of OPS) for (const o2 of OPS) { const s = o1 + ', ' + o2; if (s !== good[0] && !good.includes(s)) bad.push(s); }
  return d(`Which pair of signs, in order, fills the blanks so that ${a} _ ${b} _ ${c} = ${r}?`, good[0], bad.slice(0, 3), `Trying the pairs, only ${good[0]} works: ${a} ${good[0].split(', ')[0]} ${b} ${good[0].split(', ')[1]} ${c} = ${r} (with BODMAS).`);
};
const num = (v, w) => [v + 1, v - 2, w ?? v * 2].map(x => Math.round(x * 100) / 100).filter(x => x !== v).slice(0, 3);
const defQ = (d, rule, f, a, b) => { const v = f(a, b); return d(`If ${rule}, then ${a} ◈ ${b} equals`, v, num(v, v + 5), `Substitute a = ${a} and b = ${b} into the rule. The value is ${v}.`); };

const chapter = {
  id: 'y2-lr-mathematical-reasoning', year: 2, category: 'Advanced Logical Reasoning', num: 34, difficulty: 'Intermediate',
  title: 'Mathematical Reasoning',
  tagline: 'Year 2 — New operations, missing signs, interchanged symbols and inequality chains',
  minutes: 45,
  overview: 'Mathematical reasoning questions test whether you can follow rules that are stated in the question. Typical forms: a new operation is defined (a ◈ b = a² + b) and you evaluate expressions with it; signs are missing in an equation and you find them; two signs or numbers are interchanged and you evaluate; or a chain of inequalities is given and you decide which relation follows. The arithmetic is simple; accuracy in applying the rule is what matters.',
  placement: 'Mathematical reasoning questions are commonly asked in company reasoning rounds. They are quick if you follow the rule literally and check with BODMAS.',
  realWorld: 'Spreadsheet formulas, code functions and unit conversions are defined operations in just this way.',
  objectives: [
    'Evaluate expressions with a newly defined operation',
    'Find missing arithmetic signs by systematic trial',
    'Evaluate after interchanging signs or numbers',
    'Draw conclusions from chains of inequalities',
    'Apply BODMAS strictly'
  ],
  prereq: ['Simplification & BODMAS', 'Symbol Coding'],
  refresher: 'BODMAS: Brackets, Orders, Division and Multiplication (left to right), Addition and Subtraction (left to right). In a chain a > b ≥ c = d, a > d holds because one strict step is enough.',
  defs: [
    'Defined operation: a rule such as a ◈ b = a² + b that tells you how to combine two numbers.',
    'Interchange of signs/numbers: swap them in the expression before evaluating.',
    'Missing signs: choose operators from +, −, ×, ÷ so that the equation is true.',
    'Inequality chain: a series of relations (>, ≥, <, ≤, =) linking quantities.',
    'Conclusion from a chain: valid if it holds in every case consistent with the chain.'
  ],
  intuition: 'The rule is a machine: put numbers in, follow the instructions, take the result out. Never mix the new rule with ordinary arithmetic. In a defined operation, the letters a and b stand for the left and right entries in order.',
  mental: 'Write the rule, replace a and b with the actual numbers in the right order, evaluate inside brackets first, and then apply the rule again if the expression is nested.',
  formulas: [
    ['Defined operation', 'Replace a and b by the given numbers, in order', 'Order matters: a ◈ b is not b ◈ a in general.', 'New-operation questions.', 'a ◈ b = a² + b: 3 ◈ 4 = 13'],
    ['Nested operations', 'Evaluate the innermost bracket first', 'Then apply the rule again.', 'Expressions like (a ◈ b) ◈ c.', '(5 Δ 3) Δ 2 with a² − b²: 16 Δ 2 = 252'],
    ['Missing signs', 'Try the 16 pairs of signs and test with BODMAS', 'Usually only one pair works.', 'Fill-in-the-blank equations.', '8 × 2 − 4 = 12'],
    ['Interchange', 'Swap the named symbols or numbers, then evaluate', 'Do it before calculating.', 'If + and × are interchanged…', '6 + 3 × 2 becomes 6 × 3 + 2 = 20'],
    ['Inequality chain', 'a > b ≥ c = d ⇒ a > d', 'A chain with at least one strict sign gives strict.', 'Which conclusion follows.', 'Compare the ends']
  ],
  narrative: [
    'For a defined operation, copy the rule and substitute. If a ◈ b = a² + b, then 3 ◈ 4 = 3² + 4 = 13. The order matters: 4 ◈ 3 = 16 + 3 = 19. For nested expressions, work from the inside out.',
    'For missing signs, try combinations systematically. For 8 _ 2 _ 4 = 12, test: 8 × 2 − 4 = 16 − 4 = 12, which works. Always apply BODMAS: multiplication before subtraction.',
    'For interchange, swap first. If + and × are interchanged, then 6 + 3 × 2 becomes 6 × 3 + 2 = 20. If the numbers 4 and 7 are interchanged in 4 × 3 + 7, the expression becomes 7 × 3 + 4 = 25.',
    'For inequality chains, combine links. P > Q ≥ R = S gives P > S, because P > Q ≥ R and R = S. A chain gives a conclusion between its ends only when the signs point the same way.',
    'For equation-based definitions, solve for the unknown. If a ★ b = 3a − 2b and x ★ 4 = 10, then 3x − 8 = 10, so x = 6.'
  ],
  deep: [
    ['Non-commutative operations', 'Most defined operations are not commutative: a ◈ b differs from b ◈ a. Respect the order given.'],
    ['Checking by substitution', 'After finding a missing sign or an unknown, substitute back to verify the equation.']
  ],
  variations: [
    ['Defined operations', 'Evaluate.', 'a ◈ b = a² + b'],
    ['Nested', 'Inside out.', '(a Δ b) Δ c'],
    ['Missing signs', 'Fill the blanks.', '8 _ 2 _ 4 = 12'],
    ['Interchange', 'Swap, then evaluate.', '+ and × interchanged'],
    ['Inequality chains', 'Decide the relation.', 'P > Q ≥ R = S']
  ],
  examples: [
    {
      title: 'Defined operation',
      q: 'If a ◈ b = a² + b, find 3 ◈ 4.',
      given: ['a ◈ b = a² + b'],
      concept: 'Substitute in order.',
      steps: [['a = 3, b = 4', 'a² + b = 3² + 4.'], ['Compute', '9 + 4 = 13.']],
      ans: '13', why: 'The rule is followed literally.', trap: 'Using b² + a.'
    },
    {
      title: 'Missing signs',
      q: 'Which pair of signs fills 8 _ 2 _ 4 = 12?',
      given: ['8 _ 2 _ 4 = 12'],
      concept: 'Test pairs with BODMAS.',
      steps: [['Try ×, −', '8 × 2 − 4 = 16 − 4 = 12.'], ['Check others', 'For example + , × gives 8 + 8 = 16; not equal to 12.']],
      ans: '×, −', why: 'Only this pair gives 12.', trap: 'Evaluating left to right ignoring BODMAS.'
    },
    {
      title: 'Inequality chain',
      q: 'If P > Q ≥ R = S, which relation between P and S is certain?',
      given: ['P > Q', 'Q ≥ R', 'R = S'],
      concept: 'Combine links.',
      steps: [['Replace R by S', 'Q ≥ S.'], ['Combine', 'P > Q ≥ S, so P > S.']],
      ans: 'P > S', why: 'One strict sign makes the chain strict.', trap: 'Concluding P ≥ S only.'
    }
  ],
  shortcut: {
    title: 'Literal substitution',
    trad: 'Reason about the rule in words.',
    fast: 'Rewrite the rule with the actual numbers in order, evaluate with BODMAS, and verify by substitution.',
    rules: ['Respect the order of a and b.', 'Innermost bracket first.', 'BODMAS for missing signs.', 'Swap before calculating.']
  },
  mistakes: [
    ['Swapping a and b', 'Using the wrong order.', 'Read from left to right.'],
    ['Ignoring BODMAS', 'Evaluating left to right.', 'Multiply before add.'],
    ['Interchanging after calculating', 'Evaluating before swapping.', 'Swap first.'],
    ['Overstating an inequality', 'Writing ≥ as >.', 'Keep the weakest sign.']
  ],
  tips: { sec: 50, elim: 'Test options by substituting into the stated rule.', advice: 'Write the rule at the top of the page.', insight: 'These are among the fastest reasoning items.' },
  revision: ['Substitute in order.', 'Inside out.', 'Try sign pairs.', 'Interchange first.', 'Combine links.'],
  quickFormulas: ['a ◈ b ≠ b ◈ a'],
  takeaways: ['Follow the rule literally.', 'BODMAS.', 'Check by substitution.', 'Combine inequalities carefully.'],
  selfCheck: ['Can I evaluate a defined operation?', 'Can I find missing signs?', 'Can I read an inequality chain?']
  ,
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Mathematical operations topic area; examples are original.']]
};

const quiz = [
  defQ(easy, 'a ◈ b = a² + b', (a, b) => a * a + b, 3, 4),
  defQ(easy, 'a ◈ b = 2a − b', (a, b) => 2 * a - b, 5, 3),
  defQ(easy, 'a ◈ b = a × b + a', (a, b) => a * b + a, 4, 5),
  easy('If + and × are interchanged, the value of 6 + 3 × 2 is', 6 * 3 + 2, [12, 18, 14], 'After interchange the expression is 6 × 3 + 2 = 20.'),
  easy('If the numbers 4 and 7 are interchanged, the value of 4 × 3 + 7 is', 7 * 3 + 4, [19, 28, 22], 'The expression becomes 7 × 3 + 4 = 25.'),
  signQ(easy, 8, 2, 4, 12),

  defQ(medium, 'a ◈ b = a² − b²', (a, b) => a * a - b * b, 7, 3),
  medium('If a ◈ b = a² − b², then (5 ◈ 3) ◈ 2 equals', (25 - 9) ** 2 - 4, [12, 252 + 4, 140], 'First 5 ◈ 3 = 25 − 9 = 16. Then 16 ◈ 2 = 256 − 4 = 252.'),
  medium('If a ◈ b = 3a − 2b, then 6 ◈ 4 equals', 3 * 6 - 2 * 4, [12, 8, 14], '3 × 6 − 2 × 4 = 18 − 8 = 10.'),
  signQ(medium, 12, 4, 3, 9),
  signQ(medium, 6, 2, 3, 15),
  signQ(medium, 9, 3, 4, 7),
  medium('If P > Q ≥ R = S, which relation is certain?', 'P > S', ['P = S', 'P < S', 'Q = S'], 'P > Q ≥ R and R = S, so P > S.'),
  medium('If A ≥ B > C and C ≥ D, which relation is certain?', 'A > D', ['A = D', 'B = C', 'D > A'], 'A ≥ B > C ≥ D, so A > D.'),

  medium('If a ◈ b = a + b + ab, then 2 ◈ 3 equals', 2 + 3 + 6, [6, 5, 13], '2 + 3 + 2 × 3 = 11.'),
  placement('If a ◈ b = a + b + ab, then 2 ◈ (3 ◈ 4) equals', (() => { const f = (a, b) => a + b + a * b; return f(2, f(3, 4)); })(), [47, 62, 29], 'First 3 ◈ 4 = 3 + 4 + 12 = 19. Then 2 ◈ 19 = 2 + 19 + 38 = 59.'),
  placement('If a ◈ b = 3a − 2b and x ◈ 4 = 10, then x equals', 6, [4, 5, 8], '3x − 8 = 10, so x = 6.'),
  placement('If P ≥ Q, Q > R and R ≥ S, then which is certain?', 'P > S', ['P = S', 'S > P', 'Q = R'], 'P ≥ Q > R ≥ S gives P > S.'),
  signQ(placement, 15, 3, 5, 10),
  placement('If \'+\' means \'−\', \'−\' means \'×\', \'×\' means \'÷\' and \'÷\' means \'+\', then 18 × 3 + 4 − 2 equals', 18 / 3 - 4 * 2, [2, 10, 22], 'The expression becomes 18 ÷ 3 − 4 × 2 = 6 − 8 = -2.')
];
build(chapter, quiz);
