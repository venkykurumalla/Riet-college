const { easy, medium, placement, build } = require('../lib.cjs');

const O = ['Only conclusion I follows', 'Only conclusion II follows', 'Both conclusions follow', 'Neither conclusion follows'];
const pick = (i) => [O[i], O.filter((_, k) => k !== i)];
const mk = (d, st, c1, c2, i, expl) => { const [a, w] = pick(i); return d('Statements: ' + st + '\nConclusions: I. ' + c1 + ' II. ' + c2 + '\nWhich of the following is correct?', a, w, expl); };

const chapter = {
  id: 'y2-lr-syllogisms', year: 2, category: 'Advanced Logical Reasoning', num: 27, difficulty: 'Intermediate',
  title: 'Syllogisms',
  tagline: 'Year 2 — Drawing valid conclusions from All, No, Some and Some-not statements',
  minutes: 55,
  overview: 'A syllogism gives two or more statements about classes of objects (All A are B, No A is B, Some A are B, Some A are not B) and asks which conclusions must follow. A conclusion follows only if it is true in every possible Venn-diagram arrangement of the statements, not merely in one. The reliable method is to draw all possible diagrams and test each conclusion against all of them.',
  placement: 'Syllogism questions are commonly asked in company reasoning rounds, usually with two statements and two or three conclusions.',
  realWorld: 'Deductive reasoning is the basis of logical arguments in law, programming conditions and database queries.',
  objectives: [
    'Know the four statement types and their Venn pictures',
    'Know the conversion rules between statements',
    'Combine two statements to derive new conclusions',
    'Test conclusions against every possible diagram',
    'Recognise complementary (either-or) conclusions'
  ],
  prereq: ['Venn Diagrams', 'Classification / Odd One Out'],
  refresher: 'A universal statement (All, No) talks about the whole class. A particular statement (Some, Some not) talks about part of it. Particular statements do not allow strong conclusions.',
  defs: [
    'All A are B (A): the A circle lies inside the B circle (or equals it).',
    'No A is B (E): the A and B circles are separate.',
    'Some A are B (I): the circles overlap, at least partly.',
    'Some A are not B (O): at least part of A lies outside B.',
    'A conclusion "follows" if it is true in every diagram consistent with the statements.'
  ],
  intuition: 'The statements describe a picture, but usually several pictures fit. A conclusion that is true in all of them is a valid deduction. A conclusion that is true in some and false in others is only a possibility, so it does not follow.',
  mental: 'Draw the most general picture first (circles barely touching), then redraw with circles inside each other where the statements allow. Check each conclusion in every picture.',
  formulas: [
    ['Conversion', 'No A is B ⇒ No B is A;  Some A are B ⇒ Some B are A;  All A are B ⇒ Some B are A', 'Direct conversions.', 'Reversing a statement.', 'All cats are dogs ⇒ some dogs are cats'],
    ['All + All', 'All A are B, All B are C ⇒ All A are C', 'Chain of universal statements.', 'Two "All" statements.', 'All cats are dogs, all dogs are birds'],
    ['All + No', 'All A are B, No B is C ⇒ No A is C', 'A is inside B, B is separate from C.', 'Universal + negative.', 'No A is C'],
    ['Some + All', 'Some A are B, All B are C ⇒ Some A are C', 'Overlap is preserved.', 'Particular + universal.', 'Some pens are books, all books are tables'],
    ['Either-or pair', 'Some A are B and No A is B (and similar) are complementary', 'One of them must be true.', 'Either-or conclusions.', 'Some B are not A / All B are A']
  ],
  narrative: [
    'The four statement types give four pictures. All A are B: A inside B. No A is B: separate circles. Some A are B: overlapping circles. Some A are not B: part of A outside B. Remember that "Some" means at least one.',
    'Two universal statements usually chain. All cats are dogs and all dogs are birds give all cats are birds, but not all birds are cats. A universal affirmative plus a universal negative gives a universal negative: all A are B and no B is C give no A is C.',
    'A particular statement with a universal one gives a particular conclusion. Some pens are books and all books are tables give some pens are tables. Two particular statements (Some A are B, Some B are C) give no conclusion between A and C, because the overlaps may be in different parts of B.',
    'To test a conclusion, draw all possible diagrams. If the conclusion fails in even one, it does not follow. If one of two conclusions must be true in every diagram (such as "Some B are not A" and "All B are A" when "All A are B" is given), then "either I or II follows".',
    'For three statements, combine in pairs step by step, then test each conclusion against the combined picture.'
  ],
  deep: [
    ['Existential import', 'Aptitude tests usually assume the classes are non-empty, so "All A are B" implies "Some A are B". Follow the convention of the test.'],
    ['Possibility vs necessity', 'The phrase "follows" means "must be true". A conclusion that could be true but need not be is rejected.']
  ],
  variations: [
    ['Two statements, two conclusions', 'Standard.', 'All A are B; Some B are C'],
    ['Three statements', 'Chain.', 'All A are B; All B are C; Some C are D'],
    ['Converse conclusions', 'Check conversion.', 'Some A are B ⇒ Some B are A'],
    ['Either-or', 'Complementary pair.', 'All B are A / Some B are not A'],
    ['Negative combinations', 'No with All.', 'No A is B; All B are C']
  ],
  examples: [
    {
      title: 'All plus All',
      q: 'Statements: All cats are dogs. All dogs are birds. Conclusions: I. All cats are birds. II. All birds are cats.',
      given: ['All C are D', 'All D are B'],
      concept: 'Chain of universal statements.',
      steps: [['Draw', 'C inside D inside B.'], ['Conclusion I', 'C is inside B, so all cats are birds: follows.'], ['Conclusion II', 'B is bigger than C, so not all birds are cats: does not follow.']],
      ans: 'Only conclusion I follows', why: 'A smaller class is always inside the larger.', trap: 'Reversing an All statement.'
    },
    {
      title: 'Some plus All',
      q: 'Statements: Some pens are books. All books are tables. Conclusions: I. Some pens are tables. II. All tables are books.',
      given: ['Some P are B', 'All B are T'],
      concept: 'The overlap with B lies inside T.',
      steps: [['Draw', 'P overlaps B; B is inside T.'], ['Conclusion I', 'The pens that are books are inside T: follows.'], ['Conclusion II', 'T may be larger than B: does not follow.']],
      ans: 'Only conclusion I follows', why: 'The overlap region stays inside T.', trap: 'Concluding all tables are books.'
    },
    {
      title: 'Either-or',
      q: 'Statement: All A are B. Conclusions: I. Some B are not A. II. All B are A.',
      given: ['All A are B'],
      concept: 'In some diagrams A = B; in others A is smaller.',
      steps: [['Case 1', 'A inside B with extra B: I is true, II false.'], ['Case 2', 'A = B: I false, II true.'], ['Combine', 'One of I or II is true in every case.']],
      ans: 'Either I or II follows', why: 'The two conclusions are complementary.', trap: 'Saying neither follows.'
    }
  ],
  shortcut: {
    title: 'Draw all cases',
    trad: 'Reason in words.',
    fast: 'Draw the minimum and the maximum overlap pictures; a conclusion must hold in both. Use the combination table for All/No/Some.',
    rules: ['All + All = All.', 'All + No = No.', 'Some + All = Some.', 'Some + Some = no conclusion.']
  },
  mistakes: [
    ['Reversing an All statement', 'Concluding "All B are A".', 'Only "Some B are A" follows.'],
    ['Concluding from two Some statements', 'Joining A and C.', 'No conclusion.'],
    ['Accepting a possible conclusion', 'Treating "could be true" as true.', 'Must be true in every diagram.'],
    ['Missing either-or', 'Marking neither.', 'Check complementary pairs.']
  ],
  tips: { sec: 70, elim: 'Eliminate conclusions with "All" or "No" that come from "Some" statements.', advice: 'Draw each time.', insight: 'The combination table solves most items.' },
  revision: ['Four statement types.', 'Conversions.', 'All + All, All + No, Some + All.', 'Either-or.', 'Draw all diagrams.'],
  quickFormulas: ['All + All = All', 'All + No = No', 'Some + All = Some'],
  takeaways: ['Draw all cases.', 'Must be true in every case.', 'Use the table.', 'Check either-or.'],
  selfCheck: ['Can I combine All and No?', 'Can I reject a possible-but-not-certain conclusion?', 'Can I spot an either-or pair?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Syllogism topic area; examples are original.']]
};

const quiz = [
  mk(easy, 'All cats are dogs. All dogs are birds.', 'All cats are birds.', 'All birds are cats.', 0, 'C inside D inside B: all cats are birds follows; all birds are cats does not.'),
  mk(easy, 'Some pens are books. All books are tables.', 'Some pens are tables.', 'All tables are books.', 0, 'The pens that are books are inside tables. Not all tables need be books.'),
  mk(easy, 'No flower is a tree. All trees are plants.', 'No flower is a plant.', 'Some plants are not flowers.', 1, 'Trees are plants and are not flowers, so some plants are not flowers. Flowers may still be plants, so I does not follow.'),
  mk(easy, 'Some A are B.', 'Some B are A.', 'All A are B.', 0, '"Some" statements convert. II does not follow.'),
  mk(easy, 'All A are B.', 'Some A are B.', 'Some B are A.', 2, 'A is inside B, so some A are B and some B are A.'),
  mk(easy, 'No A is B.', 'No B is A.', 'All A are B.', 0, 'The No statement converts. II contradicts the statement.'),

  mk(medium, 'All A are B. Some B are C.', 'Some A are C.', 'Some C are B.', 1, 'II is the converse of "Some B are C". I does not follow because the overlap with C may be outside A.'),
  mk(medium, 'Some A are B. Some B are C.', 'Some A are C.', 'Some C are A.', 3, 'Two particular statements give no conclusion about A and C.'),
  mk(medium, 'All A are B. No B is C.', 'No A is C.', 'Some A are C.', 0, 'A is inside B and B is separate from C, so no A is C. II contradicts it.'),
  mk(medium, 'No A is B. No B is C.', 'No A is C.', 'All A are C.', 3, 'Two negative statements give no conclusion; I and II are both uncertain.'),
  mk(medium, 'Some A are B. All B are C.', 'Some A are C.', 'Some C are B.', 2, 'The overlap of A and B lies inside C, and B is inside C, so some C are B.'),
  mk(medium, 'All A are B. Some A are C.', 'Some B are C.', 'All C are B.', 0, 'The part of A that is C is also in B, so some B are C. C may extend outside B.'),
  mk(medium, 'Some A are not B. All B are C.', 'Some A are not C.', 'No A is C.', 3, 'The A that is not B may still be in C. Neither follows.'),
  mk(medium, 'All A are B. All C are B.', 'All A are C.', 'Some C are A.', 3, 'A and C are both inside B but may not touch.'),

  placement('Statement: All A are B.\nConclusions: I. Some B are not A. II. All B are A.\nWhich of the following is correct?', 'Either I or II follows', ['Only I follows', 'Only II follows', 'Neither follows'], 'If A is smaller than B, I is true. If A = B, II is true. One of them is always true, so either I or II follows.'),
  placement('Statements: All A are B. All B are C. Some C are D.\nConclusions: I. Some A are D. II. Some D are C. III. All A are C.\nWhich of the following is correct?', 'Only II and III follow', ['Only I and II follow', 'Only I and III follow', 'All follow'], 'A inside B inside C gives III. II is the converse of the third statement. I does not follow because the D overlap may be outside A.'),
  placement('Statements: No A is B. Some B are C. All C are D.\nConclusions: I. Some C are not A. II. Some D are not A.\nWhich of the following is correct?', 'Both conclusions follow', ['Only I follows', 'Only II follows', 'Neither follows'], 'Some B are C, and those C are not A (no A is B), so I. They are also D, so some D are not A.'),
  placement('Statements: Some doctors are teachers. All teachers are singers. No singer is a dancer.\nConclusions: I. Some doctors are singers. II. No teacher is a dancer. III. Some doctors are not dancers.\nWhich of the following is correct?', 'All three follow', ['Only I and II follow', 'Only II and III follow', 'Only I follows'], 'Doctors who are teachers are singers (I). Teachers are singers, who are not dancers (II). Those doctors are not dancers (III).'),
  placement('Statements: All A are B. No B is C. Some D are C.\nConclusions: I. Some D are not B. II. Some D are not A. III. Some B are D.\nWhich of the following is correct?', 'Only I and II follow', ['Only I follows', 'All three follow', 'Only II and III follow'], 'The D that are C are not B (no B is C), so I. Those D are also not A (all A are B), so II. III need not hold.'),
  placement('Statements: Some A are B. No B is C.\nConclusions: I. Some A are not C. II. No A is C. III. Some B are not A.\nWhich of the following is correct?', 'Only I follows', ['Only II follows', 'Only I and III follow', 'All follow'], 'The A that are B cannot be C, so some A are not C. II and III need not hold.')
];
build(chapter, quiz);
