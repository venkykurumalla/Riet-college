const { easy, medium, placement, build } = require('../lib.cjs');

// Counts are computed from the sets below, not typed by hand.
const T = { total: 100, A: 45, B: 40, C: 30, AB: 15, BC: 10, AC: 8, ABC: 5 };
const union3 = T.A + T.B + T.C - T.AB - T.BC - T.AC + T.ABC;
const neither3 = T.total - union3;
const onlyA = T.A - T.AB - T.AC + T.ABC;
const exactlyTwo = T.AB + T.BC + T.AC - 3 * T.ABC;
const atLeastTwo = exactlyTwo + T.ABC;
const SET3 = 'In a survey of 100 students: 45 play cricket (A), 40 play football (B), 30 play hockey (C); 15 play both A and B, 10 play both B and C, 8 play both A and C, and 5 play all three.\n\n';

const chapter = {
  id: 'y2-lr-venn-diagrams', year: 2, category: 'Data Interpretation', num: 26, difficulty: 'Intermediate',
  title: 'Venn Diagrams',
  tagline: 'Year 2 — Set relationships and the inclusion-exclusion rule for two and three sets',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/verbal-reasoning/venn-diagrams/',
  overview: 'A Venn diagram uses overlapping circles to show how groups relate. Two kinds of question are asked. In the first, you choose the diagram that correctly represents the relation between given classes (cats and animals, doctors and women). In the second, you use numbers: how many belong to only one group, to both, or to neither. The counting problems are solved with the inclusion-exclusion rule.',
  placement: 'Venn diagram questions are commonly asked in company reasoning rounds, in both the diagram-choice form and the counting form.',
  realWorld: 'Survey analysis, overlapping customer segments and database queries (AND, OR, NOT) all use set logic.',
  objectives: [
    'Choose the right Venn diagram for the relation between classes',
    'Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B)',
    'Use the three-set inclusion-exclusion formula',
    'Find "only", "exactly two", "at least two" and "none" regions',
    'Fill a diagram from the centre outwards'
  ],
  prereq: ['Basic Arithmetic', 'Linear Equations'],
  refresher: 'Union = everything in A or B (or both). Intersection = in both. Complement = in none of them. The total of all regions equals the size of the universe.',
  defs: [
    'Set: a collection of objects. Universe U: the set of all objects under discussion.',
    'Union A ∪ B: elements in A or B or both. Intersection A ∩ B: elements in both.',
    'Only A = A − (A ∩ B). Neither = U − (A ∪ B).',
    'Subset: if every Cat is an Animal, Cats form a circle inside Animals.',
    'Disjoint sets: have no common elements; their circles do not overlap.'
  ],
  intuition: 'When you add two groups, anyone in both is counted twice, so subtract the overlap once. With three groups, subtracting the three pairwise overlaps removes the triple overlap one time too many, so add it back once.',
  mental: 'For counting, start with the innermost region (all three), then fill the "exactly two" regions by subtracting the triple from each pair, then the "only one" regions by subtracting everything else.',
  formulas: [
    ['Two sets', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)', 'Subtract the overlap once.', 'Two-group counts.', '25 + 20 − 10 = 35'],
    ['Neither', 'Neither = Total − n(A ∪ B)', 'Everyone not in either.', '"Neither" questions.', '40 − 35 = 5'],
    ['Only A', 'Only A = n(A) − n(A ∩ B)', 'Remove the overlap.', '"Only" questions.', '30 − 8 = 22'],
    ['Three sets', 'n(A ∪ B ∪ C) = ΣA − ΣAB + ABC', 'Add singles, subtract pairs, add the triple.', 'Three-group counts.', '115 − 33 + 5 = 87'],
    ['Exactly two', 'AB + BC + AC − 3 × ABC', 'Pairs include the triple three times.', '"Exactly two" questions.', '33 − 15 = 18']
  ],
  narrative: [
    'To choose a diagram, think about class membership. Cats and Dogs are different classes, both inside Animals: two separate circles inside a bigger one. Women and Mothers: Mothers lie inside Women. If two classes can share members without one containing the other (Doctors and Women), draw two overlapping circles.',
    'For two sets, use n(A ∪ B) = n(A) + n(B) − n(A ∩ B). In a class of 40, with 25 liking tea, 20 coffee and 10 both, the number liking at least one is 35 and the number liking neither is 5.',
    'For three sets, fill the diagram from the centre. With the data A = 45, B = 40, C = 30, AB = 15, BC = 10, AC = 8 and ABC = 5, the total in at least one is 45 + 40 + 30 − 15 − 10 − 8 + 5 = 87, so 13 play none.',
    'To count regions: only A = A − AB − AC + ABC = 27; exactly two = AB + BC + AC − 3 × ABC = 18; at least two = exactly two + all three = 23.',
    'Always check that all regions plus "none" add up to the total. This check catches most arithmetic slips.'
  ],
  deep: [
    ['Why add back the triple', 'People in all three sets are counted three times by the singles and subtracted three times by the pairs, so they vanish; adding ABC once restores them.'],
    ['Diagram-choice questions', 'Look for classes that cannot overlap (cats and dogs), classes that are inside another (cats and animals), and classes that can partly overlap (doctors and women).']
  ],
  variations: [
    ['Diagram choice', 'Relations of classes.', 'Cats, Dogs, Animals'],
    ['Two-set counts', 'Union, neither, only.', '25 tea, 20 coffee, 10 both'],
    ['Three-set counts', 'Inclusion-exclusion.', 'Cricket, football, hockey'],
    ['Exactly two or at least two', 'Region counts.', '18 and 23'],
    ['Find the overlap', 'Solve for both.', '60 and 50 of 100']
  ],
  examples: [
    {
      title: 'Two sets',
      q: 'In a class of 40, 25 like tea, 20 like coffee and 10 like both. How many like neither?',
      given: ['Total 40', 'Tea 25', 'Coffee 20', 'Both 10'],
      concept: 'Inclusion-exclusion.',
      steps: [['At least one', '25 + 20 − 10 = 35.'], ['Neither', '40 − 35 = 5.']],
      ans: '5', why: 'Those in both are counted once.', trap: 'Adding 25 + 20 = 45 and getting a negative.'
    },
    {
      title: 'Three sets',
      q: 'In the survey of 100 students (cricket 45, football 40, hockey 30, A∩B 15, B∩C 10, A∩C 8, all three 5), how many play none of the three?',
      given: ['Data as stated'],
      concept: 'Three-set formula.',
      steps: [['Singles', '45 + 40 + 30 = 115.'], ['Pairs', '15 + 10 + 8 = 33.'], ['Union', '115 − 33 + 5 = 87.'], ['None', '100 − 87 = 13.']],
      ans: String(neither3), why: 'The triple overlap is added back once.', trap: 'Forgetting to add the 5.'
    },
    {
      title: 'Exactly two',
      q: 'In the same survey, how many play exactly two of the three sports?',
      given: ['AB = 15, BC = 10, AC = 8, ABC = 5'],
      concept: 'Remove the triple from each pair.',
      steps: [['Pairs only', 'AB only = 10, BC only = 5, AC only = 3.'], ['Add', '10 + 5 + 3 = 18.']],
      ans: String(exactlyTwo), why: 'Each pair count includes the 5 who play all three.', trap: 'Using 15 + 10 + 8 = 33.'
    }
  ],
  shortcut: {
    title: 'Centre-out filling',
    trad: 'Use the formula blindly.',
    fast: 'Fill the triple overlap first, then each pair minus the triple, then each single minus the rest. Total check at the end.',
    rules: ['Union = sum − pairs + triple.', 'Only A = A − AB − AC + ABC.', 'Check regions add up.', 'Draw overlapping circles for partly overlapping classes.']
  },
  mistakes: [
    ['Adding the overlaps', 'Treating them as extra people.', 'Subtract once.'],
    ['Forgetting the triple', 'Dropping the + ABC.', 'Add back once.'],
    ['Wrong diagram', 'Overlapping circles for disjoint classes.', 'Check class membership.'],
    ['Not checking totals', 'Leaving a region wrong.', 'Sum all regions.']
  ],
  tips: { sec: 70, elim: 'Total must equal the sum of all regions; test options.', advice: 'Draw the diagram.', insight: 'Often combined with DI.' },
  revision: ['Two-set formula.', 'Three-set formula.', 'Only and exactly-two regions.', 'Neither = total − union.', 'Diagram choice.'],
  quickFormulas: ['A + B − AB', 'A + B + C − AB − BC − AC + ABC'],
  takeaways: ['Subtract overlaps.', 'Add back triple.', 'Fill from the centre.', 'Check totals.'],
  selfCheck: ['Can I find "neither" in a two-set problem?', 'Can I find "exactly two" in a three-set problem?', 'Can I pick the right diagram?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Venn Diagrams topic area; examples are original.'], ['NCERT Mathematics, Class 11 (Sets)', 'Textbook', 'Union, intersection and inclusion-exclusion.']]
};

const quiz = [
  easy('In a class of 40, 25 like tea, 20 like coffee and 10 like both. The number who like neither is', 40 - (25 + 20 - 10), [10, 15, 0], 'At least one = 25 + 20 − 10 = 35. Neither = 40 − 35 = 5.'),
  easy('Which diagram best represents Cats, Dogs and Animals?', 'Two separate circles inside a bigger circle', ['Three overlapping circles', 'Three separate circles', 'One circle inside another, with a third outside'], 'Cats and Dogs are different classes, and both are inside Animals.'),
  easy('If n(A) = 30, n(B) = 20 and n(A ∩ B) = 8, then n(A ∪ B) is', 30 + 20 - 8, [50, 58, 22], '30 + 20 − 8 = 42.'),
  easy('Of 100 students, 60 play cricket and 50 play football. If every student plays at least one game, the number who play both is', 60 + 50 - 100, [5, 15, 20], '60 + 50 − both = 100, so both = 10.'),
  easy('In a group of 50, 30 speak French, 25 speak German and 5 speak neither. The number who speak both is', 30 + 25 - 45, [5, 15, 20], 'At least one = 45. 30 + 25 − both = 45, so both = 10.'),
  easy('If n(A) = 30 and n(A ∩ B) = 8, then the number in A only is', 30 - 8, [8, 38, 18], '30 − 8 = 22.'),

  medium(SET3 + 'How many students play at least one of the three sports?', union3, [90, 100, 85], '45 + 40 + 30 − 15 − 10 − 8 + 5 = 87.'),
  medium(SET3 + 'How many students play none of the three sports?', neither3, [10, 15, 17], '100 − 87 = 13.'),
  medium(SET3 + 'How many students play cricket only?', onlyA, [22, 30, 15], '45 − 15 − 8 + 5 = 27.'),
  medium(SET3 + 'How many students play exactly two of the three sports?', exactlyTwo, [33, 23, 28], '15 + 10 + 8 − 3 × 5 = 18.'),
  medium(SET3 + 'How many students play at least two of the three sports?', atLeastTwo, [18, 28, 33], 'Exactly two (18) + all three (5) = 23.'),
  medium('In a class of 60, 35 take Maths, 30 take Physics and 15 take both. The number taking only Physics is', 30 - 15, [20, 25, 10], '30 − 15 = 15.'),
  medium('In a class of 60, 35 take Maths, 30 take Physics and 15 take both. The number taking neither is', 60 - (35 + 30 - 15), [5, 15, 20], 'At least one = 50. Neither = 10.'),
  medium('Which diagram best represents Women, Mothers and Doctors?', 'Mothers inside Women; Doctors overlapping both partly', ['Three separate circles', 'Three concentric circles', 'Women and Doctors disjoint'], 'Every mother is a woman, and doctors may or may not be women or mothers, so Doctors overlap partly.'),

  medium(SET3 + 'How many students play football only?', T.B - T.AB - T.BC + T.ABC, [15, 20, 25], '40 − 15 − 10 + 5 = 20.'),
  placement(SET3 + 'How many students play exactly one of the three sports?', onlyA + (T.B - T.AB - T.BC + T.ABC) + (T.C - T.AC - T.BC + T.ABC), [45, 55, 60], 'Cricket only 27, football only 20, hockey only 30 − 8 − 10 + 5 = 17. Total = 27 + 20 + 17 = 64.'),
  placement('In a school, 70% like cricket, 60% like football and 10% like neither. The percentage who like both is', 70 + 60 - 90, [30, 50, 60], 'At least one = 90%. 70 + 60 − both = 90, so both = 40%.'),
  placement('Of 120 people, 70 like tea, 50 like coffee and 30 like both. The number who like exactly one is', 70 + 50 - 2 * 30, [50, 70, 100], 'Only tea = 40 and only coffee = 20. Exactly one = 60.'),
  placement('In a group, 40 people read The Hindu, 35 read Deccan Chronicle and 20 read both. If 25 read neither, the group size is', 40 + 35 - 20 + 25, [75, 95, 120], 'At least one = 55. Group = 55 + 25 = 80.'),
  placement('If n(A ∪ B) = 70, n(A) = 45 and n(B) = 40, then n(A ∩ B) is', 45 + 40 - 70, [10, 20, 25], '70 = 45 + 40 − n(A ∩ B), so n(A ∩ B) = 15.')
];
build(chapter, quiz);
