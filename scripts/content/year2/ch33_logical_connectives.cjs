const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-lr-logical-connectives', year: 2, category: 'Advanced Logical Reasoning', num: 33, difficulty: 'Intermediate',
  title: 'Logical Connectives',
  tagline: 'Year 2 — And, or, if-then, only if, unless, negation and valid inferences',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/logical-reasoning/logical-deduction/',
  overview: 'Logical connectives are the small words that join statements: and, or, if…then, only if, unless and not. Their meaning is exact. "P and Q" is true only when both are true. "P or Q" is true when at least one is true. "If P then Q" is false only when P is true and Q is false. Understanding these meanings lets you negate statements correctly and draw valid conclusions.',
  placement: 'Questions on connectives, negations and conditional statements are commonly asked in company reasoning rounds, in the form of "which of the following follows" or "which is the negation".',
  realWorld: 'Programming conditions, legal clauses and search queries (AND, OR, NOT) all follow these rules.',
  objectives: [
    'Know the truth conditions of and, or, if-then, only-if and unless',
    'Form the negation of compound statements (De Morgan\'s laws)',
    'Write the converse and contrapositive of a conditional',
    'Draw valid inferences (modus ponens, modus tollens, chain)',
    'Recognise common fallacies'
  ],
  prereq: ['Syllogisms', 'Statements and Conclusions'],
  refresher: 'A statement is true or false. The negation of a true statement is false and vice versa.',
  defs: [
    'Conjunction "P and Q": true only if both are true. Disjunction "P or Q": true if at least one is true (inclusive).',
    'Conditional "If P then Q": false only when P is true and Q is false. P is the antecedent and Q the consequent.',
    'Converse: If Q then P. Contrapositive: If not Q then not P. A conditional is equivalent to its contrapositive, not to its converse.',
    '"P only if Q" means "If P then Q". "Unless P, Q" means "If not P, then Q".',
    'De Morgan\'s laws: not (P and Q) = (not P) or (not Q); not (P or Q) = (not P) and (not Q).'
  ],
  intuition: 'A conditional is a promise: "If it rains, the match is cancelled." The promise is broken only when it rains and the match is not cancelled. If it does not rain, the promise says nothing. This is why the converse is not equivalent.',
  mental: 'Rewrite every statement in the form "if … then …". Then use the contrapositive for reverse reasoning and the chain rule for two conditionals.',
  formulas: [
    ['Negation of and/or', 'not (P and Q) = not P or not Q;  not (P or Q) = not P and not Q', 'De Morgan\'s laws.', 'Negating compound statements.', 'Not (raining and cold) = not raining or not cold'],
    ['Negation of quantifiers', 'not (All A are B) = Some A are not B;  not (Some A are B) = No A is B', 'Switch the quantifier.', 'Negating All/Some.', 'Not all birds fly = some birds do not fly'],
    ['Conditional forms', 'If P then Q ≡ If not Q then not P;  not equivalent to If Q then P', 'Contrapositive.', 'Conditional questions.', 'Contrapositive of "if even then x² even"'],
    ['Only if and unless', 'P only if Q ≡ If P then Q;  Unless P, Q ≡ If not P then Q', 'Translate to if-then.', 'Words only-if and unless.', 'Unless you study, you fail = if you do not study, you fail'],
    ['Valid inferences', 'P→Q, P ⊢ Q (modus ponens);  P→Q, not Q ⊢ not P (modus tollens);  P→Q, Q→R ⊢ P→R', 'Rules of deduction.', 'Drawing conclusions.', 'Rain → cancelled; not cancelled → no rain']
  ],
  narrative: [
    'Start by understanding when each compound statement is true. "P and Q" requires both. "P or Q" is true if at least one is true. "If P then Q" is false only if P is true and Q is false; in particular a false antecedent makes it true, so "If 2 + 2 = 5, then the moon is made of cheese" is true.',
    'To negate a compound statement, use De Morgan\'s laws. The negation of "It is raining and cold" is "It is not raining or it is not cold". The negation of "All birds fly" is "Some birds do not fly", and the negation of "Some students are absent" is "No student is absent".',
    'For conditionals, the contrapositive is equivalent to the original: "If x is even then x² is even" has the contrapositive "If x² is not even then x is not even". The converse ("If x² is even then x is even") may or may not be true and must be checked separately.',
    'Translate special words. "I will go only if it does not rain" means "If I go, it does not rain". "Unless you study, you will fail" means "If you do not study, you will fail".',
    'Valid inferences: from "If it rains the match is cancelled" and "It rained" conclude it was cancelled; from the same statement and "It was not cancelled" conclude it did not rain. From "If the ground is wet it rained" the fact that the ground is wet does not prove it rained: that is the fallacy of affirming the consequent.'
  ],
  deep: [
    ['Inclusive and exclusive or', 'In logic, "or" is inclusive: both may be true. "Either P or Q but not both" is exclusive.'],
    ['Why a false antecedent makes a conditional true', 'The promise "if P then Q" has not been broken if P did not happen. So it counts as true by default.']
  ],
  variations: [
    ['Negation of compounds', 'De Morgan.', 'Raining and cold'],
    ['Negation of quantified statements', 'Switch All and Some.', 'All birds fly'],
    ['Contrapositive and converse', 'Equivalent or not.', 'If even then x² even'],
    ['Only if and unless', 'Translate.', 'Unless you study'],
    ['Inference and fallacy', 'Valid or not.', 'Wet ground']
  ],
  examples: [
    {
      title: 'De Morgan',
      q: 'What is the negation of "It is raining and it is cold"?',
      given: ['P and Q'],
      concept: 'not (P and Q) = not P or not Q.',
      steps: [['Apply the law', 'Negate each part and change and to or.'], ['Result', 'It is not raining or it is not cold.']],
      ans: 'It is not raining or it is not cold', why: 'The original fails if either part fails.', trap: 'Writing "not raining and not cold".'
    },
    {
      title: 'Contrapositive',
      q: 'Every day it rains the match is cancelled. The match was not cancelled. What follows?',
      given: ['If rain then cancelled', 'Not cancelled'],
      concept: 'Modus tollens.',
      steps: [['Contrapositive', 'If not cancelled, then no rain.'], ['Apply', 'The match was not cancelled, so it did not rain.']],
      ans: 'It did not rain', why: 'A conditional is equivalent to its contrapositive.', trap: 'Concluding anything from the converse.'
    },
    {
      title: 'Only if and unless',
      q: 'Rewrite "I will go only if it does not rain" and "Unless you study, you will fail" as if-then statements.',
      given: ['Two sentences'],
      concept: 'Translate special words.',
      steps: [['Only if', '"P only if Q" means If P then Q: If I go, then it does not rain.'], ['Unless', '"Unless P, Q" means If not P then Q: If you do not study, you will fail.']],
      ans: 'If I go, it does not rain; if you do not study, you will fail', why: 'The connective words have exact meanings.', trap: 'Reversing the direction of only if.'
    }
  ],
  shortcut: {
    title: 'Translate and contrapose',
    trad: 'Reason from the English wording.',
    fast: 'Rewrite as if-then, use the contrapositive to reason backwards, and apply De Morgan to negations.',
    rules: ['Only if = if-then.', 'Unless = if not.', 'Negate and ↔ or.', 'Never swap the direction of a conditional.']
  },
  mistakes: [
    ['Confusing converse and contrapositive', 'Treating "if Q then P" as equivalent.', 'Use the contrapositive.'],
    ['Wrong negation of and/or', 'Keeping and as and.', 'Change the connective.'],
    ['Affirming the consequent', 'Concluding P from Q.', 'It is invalid.'],
    ['Misreading only if', 'Reversing the direction.', 'Only if gives if-then.']
  ],
  tips: { sec: 50, elim: 'Reject answers that use the converse or affirm the consequent.', advice: 'Translate each sentence to if-then.', insight: 'Truth-table thinking settles doubtful cases.' },
  revision: ['De Morgan.', 'Contrapositive.', 'Only if, unless.', 'Modus ponens and tollens.', 'Fallacies.'],
  quickFormulas: ['not(P and Q) = not P or not Q', 'P→Q ≡ not Q → not P'],
  takeaways: ['Know the meanings.', 'Negate correctly.', 'Use the contrapositive.', 'Avoid fallacies.'],
  selfCheck: ['Can I negate "all birds fly"?', 'Can I write the contrapositive?', 'Can I spot affirming the consequent?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Logical deduction topic area; examples are original.']]
};

const quiz = [
  easy('The negation of "It is raining and it is cold" is', 'It is not raining or it is not cold', ['It is not raining and it is not cold', 'It is raining or it is cold', 'It is raining and it is not cold'], 'By De Morgan\'s law: not (P and Q) = not P or not Q.'),
  easy('The negation of "All birds can fly" is', 'Some birds cannot fly', ['No bird can fly', 'All birds cannot fly', 'Some birds can fly'], 'The negation of "All" is "Some … not".'),
  easy('If P then Q is true and P is true. Then', 'Q is true', ['Q is false', 'Nothing can be said about Q', 'P is false'], 'Modus ponens: from P → Q and P we get Q.'),
  easy('If it rains, the match is cancelled. The match was not cancelled. We can conclude', 'It did not rain', ['It rained', 'The match was played in the rain', 'Nothing'], 'Contrapositive: if not cancelled, then it did not rain.'),
  easy('Ravi is tall or fast. Ravi is not tall. Then', 'Ravi is fast', ['Ravi is slow', 'Ravi is short and slow', 'Nothing can be said'], 'The "or" statement requires at least one true; since not tall, he is fast.'),
  easy('The statement "P and Q" is true only when', 'both P and Q are true', ['P is true', 'Q is true', 'at least one is true'], 'A conjunction needs both parts true.'),

  medium('The contrapositive of "If x is even, then x² is even" is', 'If x² is not even, then x is not even', ['If x² is even, then x is even', 'If x is not even, then x² is not even', 'If x is even, then x² is not even'], 'Contrapositive: If not Q then not P.'),
  medium('"I will go only if it does not rain" means', 'If I go, then it does not rain', ['If it does not rain, I will go', 'If I do not go, it rains', 'I will go if it rains'], '"P only if Q" means If P then Q.'),
  medium('"Unless you study, you will fail" is equivalent to', 'If you do not study, you will fail', ['If you study, you will fail', 'If you fail, you did not study', 'If you study, you will pass'], '"Unless P, Q" means If not P then Q.'),
  medium('The negation of "Some students are absent" is', 'No student is absent', ['All students are absent', 'Some students are present', 'Some students are not absent'], 'The negation of "Some" is "No".'),
  medium('If A then B, and if B then C. Which follows?', 'If A then C', ['If C then A', 'If B then A', 'If not A then not C'], 'The chain rule: A → B and B → C give A → C.'),
  medium('The converse of "If it is a square, it is a rectangle" is', 'If it is a rectangle, it is a square', ['If it is not a square, it is not a rectangle', 'If it is not a rectangle, it is not a square', 'It is a square and a rectangle'], 'The converse swaps the two parts: If Q then P. It is not necessarily true.'),
  medium('The statement "If 2 + 2 = 5, then the moon is made of cheese" is', 'true', ['false', 'neither true nor false', 'cannot be decided'], 'A conditional with a false antecedent is true.'),
  medium('"Either P or Q but not both" is true when', 'P is true and Q is false', ['P and Q are both true', 'P and Q are both false', 'neither P nor Q is true'], 'Exclusive or is true when exactly one is true.'),

  placement('If it rains, the ground is wet. The ground is wet. Therefore it rained. This reasoning is', 'invalid (affirming the consequent)', ['valid (modus ponens)', 'valid (modus tollens)', 'valid (contrapositive)'], 'The ground may be wet for another reason. Q does not imply P.'),
  placement('The negation of "If P then Q" is', 'P and not Q', ['not P and Q', 'not P or Q', 'If not P then not Q'], 'A conditional is false only when P is true and Q is false.'),
  placement('A is true only if B is true. B is false. Then', 'A is false', ['A is true', 'A may be true or false', 'B is true'], 'A → B and not B give not A.'),
  placement('"Neither Ravi nor Meena passed" means', 'Ravi did not pass and Meena did not pass', ['Ravi did not pass or Meena did not pass', 'Ravi passed or Meena passed', 'Only one of them passed'], 'Neither means both failed.'),
  placement('All who study pass. Anil did not pass. Therefore', 'Anil did not study', ['Anil studied', 'Anil may have studied', 'Everyone who did not study failed'], 'Contrapositive: if not pass, then not study.'),
  placement('Given P → Q, (not Q) or R, and P is true. Then', 'R is true', ['R is false', 'Q is false', 'Nothing can be said about R'], 'From P → Q and P, Q is true. Then "not Q or R" with Q true forces R true.')
];
build(chapter, quiz);
