const { easy, medium, placement, build } = require('../lib.cjs');

const O = ['Only conclusion I follows', 'Only conclusion II follows', 'Both I and II follow', 'Neither I nor II follows'];
const mk = (d, st, c1, c2, i, expl) => d('Statement: ' + st + '\nConclusions: I. ' + c1 + ' II. ' + c2 + '\nWhich of the following is correct?', O[i], O.filter((_, k) => k !== i), expl);

const chapter = {
  id: 'y2-lr-statements-conclusions', year: 2, category: 'Advanced Logical Reasoning', num: 28, difficulty: 'Intermediate',
  title: 'Statements and Conclusions',
  tagline: 'Year 2 — Deciding which inferences follow definitely from a given statement',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/logical-reasoning/statement-and-conclusion/',
  overview: 'In a statements-and-conclusions question you are given one or two statements and some conclusions, and you must decide which conclusions follow from the statements alone. A conclusion follows if it is a necessary consequence of the statement. It does not follow if it brings in new facts, if it only might be true, or if it contradicts the statement. The golden rule is: use only the information given, nothing from outside.',
  placement: 'Statements and conclusions questions are commonly asked in company reasoning rounds, with two conclusions and four fixed options.',
  realWorld: 'Reading a news report, a policy notice or a contract and deciding what it definitely says versus what you are assuming uses this skill.',
  objectives: [
    'Decide whether a conclusion is a necessary consequence of the statement',
    'Reject conclusions that add outside information',
    'Recognise a conclusion that is only possible or probable',
    'Handle statements with "only", "all", "some", "few" and "neither-nor"',
    'Handle two-statement and either-or cases'
  ],
  prereq: ['Syllogisms'],
  refresher: '"All" covers the whole; "some" means at least one; "few" means a small number, so most are not; "only" restricts.',
  defs: [
    'Conclusion: a statement that is claimed to follow from the given statements.',
    'Follows: necessarily true if the statement is true.',
    'Does not follow: not necessarily true, or adds new facts, or contradicts the statement.',
    'Direct inference: a conclusion that is a restatement or an immediate consequence of the statement.',
    'Either-or: two conclusions of which exactly one must be true.'
  ],
  intuition: 'Treat the statement as the whole universe. A conclusion that needs any fact outside that universe cannot follow. Ask for each conclusion: "If the statement is true, must this be true?" If the answer is not a clear yes, it does not follow.',
  mental: 'Underline the key words in the statement (all, only, some, few, not, neither). Then test each conclusion by trying to imagine a situation where the statement is true but the conclusion is false. If you can, the conclusion does not follow.',
  formulas: [
    ['The test', 'Statement true ⇒ conclusion must be true', 'Use no outside facts.', 'Every conclusion.', '"Only graduates may apply" ⇒ a non-graduate cannot apply'],
    ['"Only" statements', '"Only X can do Y" ⇒ nobody who is not X can do Y', 'It does not say all X can.', 'Restriction.', 'All graduates will get the post does not follow'],
    ['"Few" and "some"', '"Few are A" ⇒ most are not A;  "Some are A" ⇒ at least one is A', 'Quantity words matter.', 'Quantity statements.', 'Few people own a car ⇒ most do not'],
    ['Percentages', '90% passed ⇒ 10% did not pass', 'Complement.', 'Data statements.', '10% did not pass follows'],
    ['Ordering statements', 'A > B and B > C ⇒ A > C and C is the least of the three', 'Chain.', 'Comparisons.', 'Mina > Rina > Tina']
  ],
  narrative: [
    'Read the statement carefully and note its exact scope. "All employees must wear ID cards" makes it correct to say that an employee without an ID card breaks the rule; it does not say anything about who issues the cards, so "ID cards are given only to employees" does not follow.',
    'Be strict about outside information. "Rain has been heavy this year" supports "there was rain this year", but not "crop yield is higher". Effects, causes and opinions that are not in the statement cannot be concluded.',
    'Quantity words matter. "Few people own a car" means most do not own one, so "most people do not own a car" follows, while "many own cars" does not. "Some students passed with distinction" means at least one did.',
    '"Only" restricts. "Only graduates are eligible" means a non-graduate cannot apply, but not that every graduate will get the job. "Neither Ravi nor Kiran attended" means both were absent, so "Ravi did not attend" follows.',
    'For calculated statements, use arithmetic. If 90% of candidates passed, then 10% did not. If the price rose 20% and fell 20%, the final price is 0.96 of the original, so it is less than the original.'
  ],
  deep: [
    ['Probability words', 'A conclusion that says "may" or "is likely" is usually too weak to be marked as following unless the statement itself says so. Look at whether it is a necessity.'],
    ['Two statements', 'With two statements, combine them first (as in syllogisms), then test each conclusion. A conclusion needing a third fact does not follow.']
  ],
  variations: [
    ['Direct restatements', 'Immediate consequence.', 'A non-graduate cannot apply'],
    ['Outside information', 'Rejected.', 'Crop yield is higher'],
    ['Quantity words', 'Few, some, most.', 'Few own cars'],
    ['Arithmetic statements', 'Percentages and changes.', '90% passed'],
    ['Comparisons', 'Chain.', 'A taller than B']
  ],
  examples: [
    {
      title: 'Restriction with "only"',
      q: 'Statement: Only graduates are eligible to apply for the post. Conclusions: I. A non-graduate cannot apply. II. All graduates will get the post.',
      given: ['Only graduates are eligible'],
      concept: '"Only" restricts, it does not guarantee.',
      steps: [['Conclusion I', 'If only graduates are eligible, a non-graduate is not eligible: follows.'], ['Conclusion II', 'Eligibility does not mean selection: does not follow.']],
      ans: 'Only conclusion I follows', why: 'Eligible does not mean selected.', trap: 'Confusing eligibility with selection.'
    },
    {
      title: 'Outside information',
      q: 'Statement: Rain has been heavy this year. Conclusions: I. Crop yield is higher. II. There was rain this year.',
      given: ['Heavy rain this year'],
      concept: 'Use only the statement.',
      steps: [['Conclusion I', 'Higher yield is an extra assumption: does not follow.'], ['Conclusion II', 'Heavy rain implies rain: follows.']],
      ans: 'Only conclusion II follows', why: 'The statement says nothing about crop yield.', trap: 'Assuming the common-sense effect.'
    },
    {
      title: 'Quantity word',
      q: 'Statement: Few people in the town own a car. Conclusions: I. Most people in the town do not own a car. II. Many people own cars.',
      given: ['Few own cars'],
      concept: '"Few" means a small number.',
      steps: [['Conclusion I', 'If few own cars, most do not: follows.'], ['Conclusion II', '"Many" contradicts "few": does not follow.']],
      ans: 'Only conclusion I follows', why: 'Few is the opposite of many.', trap: 'Treating few as some.'
    }
  ],
  shortcut: {
    title: 'Counter-example test',
    trad: 'Check conclusions against general knowledge.',
    fast: 'For each conclusion, try to build a situation where the statement is true and the conclusion false. If you can, reject it.',
    rules: ['Use only the statement.', '"Only" does not mean "all".', 'Few means most are not.', 'Check both conclusions separately.']
  },
  mistakes: [
    ['Using general knowledge', 'Accepting what is usually true.', 'Use only the statement.'],
    ['Accepting probable conclusions', 'Treating "may be" as true.', 'The conclusion must be necessary.'],
    ['Ignoring the quantifier', 'Treating few as many.', 'Underline the quantifier.'],
    ['Judging both together', 'Letting one conclusion influence the other.', 'Test each separately.']
  ],
  tips: { sec: 40, elim: 'Reject any conclusion with a new noun or fact.', advice: 'Underline quantifiers.', insight: 'Most items have exactly one direct restatement.' },
  revision: ['Statement only.', 'Counter-example test.', 'Quantifiers.', 'Only vs all.', 'Percent complement.'],
  quickFormulas: ['True statement ⇒ conclusion must be true'],
  takeaways: ['No outside facts.', 'Necessary only.', 'Watch quantifiers.', 'Test separately.'],
  selfCheck: ['Can I reject an outside-information conclusion?', 'Can I interpret "few"?', 'Can I decode "only"?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Statement and Conclusion topic area; examples are original.']]
};

const quiz = [
  mk(easy, 'All employees of the company must wear ID cards.', 'An employee without an ID card breaks the rule.', 'ID cards are given only to employees.', 0, 'I restates the rule. II is outside information.'),
  mk(easy, 'The library is open from 9 a.m. to 5 p.m. on weekdays.', 'The library is closed on weekdays at 6 p.m.', 'The library is open on Sundays.', 0, '6 p.m. is outside the opening hours. Nothing is said about Sundays.'),
  mk(easy, 'Some students of the college passed with distinction.', 'All students of the college failed.', 'At least one student of the college passed with distinction.', 1, 'II restates "some". I contradicts the statement.'),
  mk(easy, 'Rain has been heavy this year.', 'Crop yield is higher.', 'There was rain this year.', 1, 'II is directly implied. I adds an assumption.'),
  mk(easy, 'No smoking is allowed in the office.', 'Smokers cannot smoke in the office.', 'Smoking is allowed outside the office.', 0, 'I restates the rule. Nothing is said about outside.'),
  mk(easy, 'Ravi scored 80 and Meena scored 75.', 'Ravi scored more than Meena.', 'Meena is weaker than Ravi in every subject.', 0, '80 > 75. Subject-wise performance is unknown.'),

  mk(medium, 'Only graduates are eligible to apply for the post.', 'A non-graduate cannot apply.', 'All graduates will get the post.', 0, 'Eligibility does not mean selection.'),
  mk(medium, 'All the trains to Chennai from this station leave before noon.', 'No train to Chennai leaves this station after noon.', 'There are many trains to Chennai.', 0, 'I restates the statement. The number of trains is not given.'),
  mk(medium, 'Mina is taller than Rina, and Rina is taller than Tina.', 'Mina is taller than Tina.', 'Tina is the shortest of the three.', 2, 'Mina > Rina > Tina, so both follow.'),
  mk(medium, 'The use of plastic bags has been banned in the city.', 'Shopkeepers cannot legally give plastic bags.', 'All pollution will end.', 0, 'I follows from the ban. II is an unsupported claim.'),
  mk(medium, 'Every student of class X must take either Science or Commerce.', 'A class X student who takes neither is not following the rule.', 'Class X students cannot take both subjects.', 0, 'I follows. The statement does not forbid taking both.'),
  mk(medium, 'In the examination, 90% of the candidates passed.', '10% of the candidates did not pass.', 'The examination was easy.', 0, '100% − 90% = 10%. Difficulty is not stated.'),
  mk(medium, 'Neither Ravi nor Kiran attended the meeting.', 'Ravi did not attend the meeting.', 'Kiran attended the meeting.', 0, 'Neither means both were absent.'),
  mk(medium, 'Few people in the town own a car.', 'Most people in the town do not own a car.', 'Many people own cars.', 0, 'Few means a small number, so most do not.'),

  mk(placement, 'The company announced that it will not give a bonus this year.', 'Employees will get no bonus this year.', 'The company is making losses.', 0, 'I restates the announcement. The reason is not given.'),
  mk(placement, 'All the doctors in the hospital are on strike from tomorrow.', 'Patients will not get treatment from the hospital\'s doctors tomorrow.', 'The hospital will be shut permanently.', 0, 'I follows. II goes far beyond the statement.'),
  mk(placement, 'The price of onions rose by 20% last month. This month the price fell by 20%.', 'The price now is the same as two months ago.', 'The price now is less than it was two months ago.', 1, '1.2 × 0.8 = 0.96, so the price is lower, not equal.'),
  mk(placement, 'Among five boys, Ram is not the tallest and Shyam is taller than Ram.', 'Shyam is the tallest.', 'Ram is not the shortest.', 3, 'Others may be taller than Shyam, and Ram could be the shortest. Neither is certain.'),
  mk(placement, 'Each of the 40 students of a class has opted for at least one of English and Hindi.', 'No student has opted for neither subject.', 'Every student has opted for both subjects.', 0, 'I restates "at least one". II is not stated.'),
  mk(placement, 'The bank has decided to open branches in all villages with a population over 5,000.', 'A village with 6,000 people will get a branch.', 'Villages with 3,000 people will not get a branch.', 0, 'I follows. The statement does not rule out other branches.')
];
build(chapter, quiz);
