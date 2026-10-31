const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'rev', category: 'Mock Test & Revision Preparation' };
const spec = (o) => C({ ...base, ...o });
const f = (n) => (n <= 1 ? 1 : n * f(n - 1));

// ============ Chapter 46: quantitative formula quick reference ============
const ch46 = spec({ n: 46, id: 'y4-rev-quant-formulas', title: 'Quantitative Formula Quick Reference',
  tag: 'The formulas that cover most aptitude questions, each with a one-line use and a worked check',
  over: 'This is a revision sheet in text form. Each entry gives the formula, when to use it and a small worked check so that you can verify that you remember it correctly. The set covers percentages, profit and loss, ratio, averages, interest, time and work, time and distance, mixtures, permutations and combinations, and geometry. The best use of a quick reference is to cover the right-hand side and reproduce it from memory.',
  place: 'The night before a test, a formula sheet you have already practised is the most efficient revision.',
  real: 'Reference sheets and checklists support accurate work in any technical job.',
  obj: ['Recall the core formulas from memory', 'Apply each with a one-line check', 'Choose the right formula for a question', 'Avoid mixing similar formulas', 'Test yourself by covering the answers'],
  pre: ['All earlier quantitative chapters'],
  refresh: 'Revision means retrieval: try to produce the formula before reading it.',
  defs: ['Formula: a rule expressing a relation.', 'Check: a small example that confirms the formula.', 'Retrieval practice: recalling instead of rereading.', 'Similar formulas: ones that are easy to confuse.', 'Unit: what the answer measures.'],
  intu: 'A formula is a compressed story; the check restores the story.',
  mental: 'Cover the formula, recall it, then uncover and compare.',
  formulas: [['Percent change', '(new − old) ÷ old × 100', 'Growth.', 'Percentages.', '80 → 100 is 25%'], ['Profit %', '(SP − CP) ÷ CP × 100', 'Profit.', 'Base is cost.', '120 on 100 is 20%'], ['Simple interest', 'P·r·t ÷ 100', 'Interest.', 'Loans.', '5,000 × 8 × 3/100'], ['Compound amount', 'P(1 + r/100)ⁿ', 'Growth.', 'Compound.', '10,000, 10%, 2 y'], ['Average speed (equal distances)', '2ab/(a + b)', 'Two speeds.', 'Round trips.', '60, 40 → 48'], ['Work together', '1/T = 1/a + 1/b', 'Two workers.', 'Work.', '12, 24 → 8'], ['Nᴾᵣ and Nᶜᵣ', 'n!/(n − r)!, n!/(r!(n − r)!)', 'Counting.', 'Arrangements.', '5P3 = 60'], ['Circle', 'Area πr², circumference 2πr', 'Circles.', 'Mensuration.', 'r = 7']],
  narr: ['Percent change: from 80 to 100 the change is 20; 20 ÷ 80 = 25%.', 'Compound amount: ₹10,000 at 10% for 2 years is 10,000 × 1.21 = ₹12,100.', 'Average speed over equal distances at 60 and 40 km/h is 2 × 60 × 40 ÷ 100 = 48 km/h.', 'Two workers taking 12 and 24 days finish together in 8 days.', 'Arrangements of 3 from 5: 5P3 = 5 × 4 × 3 = 60; selections 5C3 = 10.'],
  deep: [['Similar formulas', 'Simple vs compound interest; permutations vs combinations; average speed vs average of speeds.'], ['Units', 'Check units: km/h vs m/s, years vs months.']],
  vars: [['Percent', 'Change.', '25%'], ['Interest', 'SI and CI.', '₹12,100'], ['Rates', 'Speed and work.', '48 km/h'], ['Counting', 'P and C.', '60, 10'], ['Geometry', 'Circle.', '154']],
  ex: [
    { t: 'Percent change', q: 'A price goes from 80 to 100. Percent change?', g: ['80 → 100'], c: 'Change over old.', s: [['Change', '20.'], ['Percent', '20 ÷ 80 = 25%.']], a: '25%', w: 'Old is the base.', tr: 'Dividing by 100.' },
    { t: 'Compound', q: '₹10,000 at 10% for 2 years. Amount?', g: ['10,000', '10%', '2'], c: 'P(1 + r/100)ⁿ.', s: [['Factor', '1.1² = 1.21.'], ['Amount', '₹12,100.']], a: '₹12,100', w: 'Interest on interest.', tr: 'Using simple interest.' },
    { t: 'Average speed', q: 'Equal distances at 60 and 40 km/h. Average speed?', g: ['60', '40'], c: '2ab/(a + b).', s: [['Numerator', '2 × 60 × 40 = 4,800.'], ['Divide', '4,800 ÷ 100 = 48.']], a: '48 km/h', w: 'Not 50.', tr: 'Taking the mean.' }
  ],
  short: { title: 'Cover and recall', trad: 'Reread the sheet.', fast: 'Cover the right side, recall each formula, and confirm with the small check.', rules: ['Retrieve first.', 'Check units.', 'Separate look-alikes.', 'Test daily.'] },
  mist: [['Rereading instead of recalling', 'Weak memory.', 'Retrieve.'], ['Confusing SI and CI', 'Wrong value.', 'Compare formulas.'], ['Ignoring units', 'Wrong answer.', 'Check units.']],
  tips: { sec: 20, elim: 'A formula that gives an absurd size is wrong.', adv: 'Write the sheet from memory weekly.', ins: 'Formulas are tools; checks are proof.' },
  rev: ['Percent.', 'Interest.', 'Rates.', 'Counting.', 'Geometry.'],
  qf: ['(new − old)/old', 'P(1 + r/100)ⁿ', '2ab/(a + b)'],
  take: ['Recall.', 'Check.', 'Units.', 'Look-alikes.'],
  self: ['Can I write the sheet from memory?', 'Can I separate SI and CI?', 'Can I check units?']
});
const q46 = [
  N('e', 'A price rises from 80 to 100. The percentage increase is', 25, '(100 − 80) ÷ 80 = 25%.', 0, pc),
  N('e', 'The simple interest on ₹5,000 at 8% for 3 years is (₹)', 1200, '5,000 × 8 × 3 ÷ 100 = 1,200.'),
  N('e', 'The compound amount of ₹10,000 at 10% for 2 years is (₹)', 12100, '10,000 × 1.21 = 12,100.'),
  N('e', 'Equal distances at 60 and 40 km/h give an average speed of (km/h)', 48, '2 × 60 × 40 ÷ 100 = 48.'),
  N('e', 'Workers taking 12 and 24 days finish together in (days)', 8, '1/12 + 1/24 = 1/8.'),
  N('e', '5P3 equals', 60, '5 × 4 × 3 = 60.'),
  N('m', '5C3 equals', 10, '5!/(3! 2!) = 10.'),
  N('m', 'The area of a circle of radius 7 cm (π = 22/7, cm²) is', 154, '22/7 × 49 = 154.'),
  N('m', 'A profit of ₹20 on a cost of ₹100 is a profit percentage of', 20, '20 ÷ 100 = 20%.', 0, pc),
  N('m', 'The circumference of a circle of radius 7 cm (π = 22/7, cm) is', 44, '2 × 22/7 × 7 = 44.'),
  N('m', 'The average of 12, 18 and 30 is', 20, '60 ÷ 3 = 20.'),
  N('m', 'The number of ways to arrange the letters of LEVEL is', 30, '5! ÷ (2! 2!) = 30.'),
  N('m', 'Simple interest of ₹600 in 3 years at 5% implies a principal of (₹)', 4000, '600 = P × 5 × 3 ÷ 100, so P = 4,000.'),
  N('m', 'A train 240 m long crosses a pole in 12 s. Its speed in km/h is', 72, '20 m/s × 3.6 = 72.'),
  N('p', 'The volume of a cylinder of radius 7 cm and height 10 cm (π = 22/7, cm³) is', 1540, '22/7 × 49 × 10 = 1,540.'),
  N('p', '8C3 equals', 56, '8 × 7 × 6 ÷ 6 = 56.'),
  N('p', 'The number of arrangements of 6 people around a circular table is', f(5), '(6 − 1)! = 120.'),
  N('p', 'Two numbers in the ratio 3 : 5 have a sum of 64. The larger is', 40, '64 × 5 ÷ 8 = 40.'),
  N('p', 'Successive discounts of 20% and 10% are equal to a single discount of (%)', 28, '20 + 10 − 2 = 28.', 0, pc),
  N('p', 'A sum doubles at compound interest in 5 years. It becomes 8 times in (years)', 15, '8 = 2³, so 3 × 5 = 15.')
];
build(ch46, q46);

// ============ Chapter 47: reasoning pattern quick reference ============
const ch47 = spec({ n: 47, id: 'y4-rev-reasoning-patterns', title: 'Reasoning Pattern Quick Reference',
  tag: 'Standard patterns and one-line methods for series, coding, ranking, directions, relations, arrangements and logic',
  over: 'Reasoning questions fall into a small number of recurring patterns. This sheet lists them with a one-line method each: series (differences, ratios, squares), coding (shifts and positions), ranking (left + right − 1), direction (coordinates), blood relations (draw a tree), seating (anchors and chains; circular arrangements fix one person), syllogisms (Venn test), clocks (5.5° per minute) and calendars (odd days). Revision means recognising the pattern within seconds and applying its method.',
  place: 'Pattern recognition is the quickest way to bank marks in the reasoning section.',
  real: 'Recognising a familiar structure shortens any analysis.',
  obj: ['Recognise the pattern of a question', 'Apply the one-line method', 'Recall the counting formulas for arrangements', 'Use the clock and calendar rules', 'Check with a quick sanity test'],
  pre: ['All earlier reasoning chapters'],
  refresh: 'Total = left rank + right rank − 1. Circular arrangements of n: (n − 1)!. Clock: relative speed 5.5° per minute.',
  defs: ['Pattern: a recurring question structure.', 'Method: a standard way to solve a pattern.', 'Anchor: a clue that fixes a position.', 'Odd days: remainder of days ÷ 7.', 'Relative speed on a clock: 5.5° per minute.'],
  intu: 'A reasoning question is a known shape in a new story.',
  mental: 'Name the shape, recall the method, apply, sanity-check.',
  formulas: [['Ranking', 'left + right − 1', 'Row.', 'Total.', '12 and 29 → 40'], ['Circular arrangements', '(n − 1)!', 'Round table.', 'Counting.', '6 → 120'], ['Persons between', 'difference − 1', 'Two in a row.', 'Count.', '3 and 8 → 4'], ['Clock angle', '|30h − 5.5m|', 'Time.', 'Angle.', '4:30 → 45°'], ['Calendar', 'days mod 7', 'Date gaps.', 'Weekday.', '18 → 4']],
  narr: ['In a row of 40, the 12th from the left is 29th from the right: 40 − 12 + 1.', 'Six people around a circular table can sit in 5! = 120 ways.', 'At 4:30 the hour hand is at 135° and the minute hand at 180°, so the angle is 45°; the formula gives |120 − 165| = 45°.', 'From a Monday, 18 days later is 18 mod 7 = 4 days ahead: Friday.', 'In a coding question, test a shift of +1, then +2, then position values.'],
  deep: [['Syllogism quick test', 'Draw circles and try to break the conclusion; if you can, it does not follow.'], ['Blood relations', 'Draw a tree; use generation lines and sex symbols.']],
  vars: [['Ranking', 'Total.', '40'], ['Arrangements', 'Circular.', '120'], ['Clocks', 'Angle.', '45°'], ['Calendars', 'Weekday.', 'Friday'], ['Coding', 'Shift.', '+1']],
  ex: [
    { t: 'Ranking', q: 'A student is 12th from the left in a row of 40. Rank from the right?', g: ['12th, 40'], c: 'Total − left + 1.', s: [['Formula', 'right = total − left + 1.'], ['Compute', '40 − 12 + 1 = 29.']], a: '29th', w: 'Subtract 1 once.', tr: 'Answering 28.' },
    { t: 'Circular', q: 'In how many ways can 6 people sit around a round table?', g: ['n = 6'], c: '(n − 1)!.', s: [['Fix one', 'Fix one person.'], ['Arrange', '5! = 120.']], a: '120', w: 'Rotations are the same.', tr: 'Answering 720.' },
    { t: 'Clock', q: 'Angle between the hands at 4:30?', g: ['4:30'], c: '|30h − 5.5m|.', s: [['Compute', '|120 − 165|.'], ['Angle', '45°.']], a: '45°', w: 'Take the smaller angle.', tr: 'Taking 135°.' }
  ],
  short: { title: 'Name the shape', trad: 'Solve each from scratch.', fast: 'Recognise the pattern, recall its method, apply and sanity-check.', rules: ['Left + right − 1.', '(n − 1)! for rings.', '5.5° per minute.', 'Mod 7 for days.'] },
  mist: [['Using n! for circular tables', 'Overcount.', 'Use (n − 1)!.'], ['Off-by-one in ranks', 'Wrong total.', 'Subtract 1.'], ['Choosing the reflex clock angle', 'Wrong angle.', 'Use the smaller one.']],
  tips: { sec: 40, elim: 'Reject answers that break a basic constraint.', adv: 'Practise each pattern for a week.', ins: 'Recognition beats calculation.' },
  rev: ['Series.', 'Ranking.', 'Arrangements.', 'Clocks.', 'Calendars.'],
  qf: ['(n − 1)!', 'left + right − 1', '|30h − 5.5m|'],
  take: ['Name shape.', 'Method.', 'Sanity.', 'Practise.'],
  self: ['Can I name a pattern quickly?', 'Can I recall counting rules?', 'Can I use the clock rule?']
});
const ang = (h, m) => { const a = Math.abs(30 * h - 5.5 * m); return a > 180 ? 360 - a : a; };
const q47 = [
  N('e', 'In a row of 40, a student is 12th from the left. From the right the rank is', 29, '40 − 12 + 1 = 29.'),
  N('e', 'The number of ways 6 people can sit around a round table is', f(5), '5! = 120.'),
  N('e', 'What comes next: 3, 6, 12, 24, ?', 48, 'Each term doubles, so 24 × 2 = 48.'),
  N('e', 'The angle between the hands at 4:30 is (degrees)', ang(4, 30), '|120 − 165| = 45.'),
  N('e', 'A man walks 6 m north and 8 m east. The distance from the start is (m)', 10, '√(36 + 64) = 10.'),
  T('e', 'If CAT is coded DBU, then DOG is coded', 'EPH', ['EQI', 'CNF', 'DPH'], 'Each letter moves one step forward.'),
  N('m', 'If the 5th of a month is a Monday, the 23rd is how many days ahead of Monday (mod 7)?', 4, '18 mod 7 = 4, so Friday.'),
  N('m', 'The number of people between the 3rd and the 8th in a row is', 4, '8 − 3 − 1 = 4.'),
  N('m', 'The angle between the hands at 6:00 is (degrees)', 180, '|180 − 0| = 180.'),
  N('m', 'The angle between the hands at 3:15 is (degrees)', ang(3, 15), '|90 − 82.5| = 7.5.', 1),
  N('m', 'Arrangements of the letters of LEVEL', 30, '5!/(2! 2!) = 30.'),
  N('m', 'The number of ways to arrange 5 books on a shelf is', f(5), '5! = 120.'),
  N('m', 'What comes next: 2, 6, 12, 20, 30, ?', 42, 'The terms are n(n + 1), so the next is 6 × 7 = 42.'),
  N('m', 'A is 7th from the top and 18th from the bottom. The number of students is', 24, '7 + 18 − 1 = 24.'),
  T('p', 'Pointing to a girl, Arjun says "She is the daughter of my father\'s only son." The girl is Arjun\'s', 'daughter', ['sister', 'niece', 'cousin'], 'Arjun\'s father\'s only son is Arjun.'),
  N('p', 'Six people sit around a table with two particular persons always together. The number of ways is', f(4) * 2, '(5 − 1)! × 2 = 48.'),
  N('p', 'The angle between the hands at 9:20 is (degrees, one decimal)', ang(9, 20), '|270 − 110| = 160.', 0),
  N('p', 'If 1 January is a Monday in a non-leap year, 1 March is how many days ahead (mod 7)?', 59 % 7, '31 + 28 = 59; 59 mod 7 = 3, so Thursday.'),
  N('p', 'In a coding where A = 1, B = 2, …, the value of CAB is', 6, '3 + 1 + 2 = 6.'),
  N('p', 'A 3 × 3 × 3 cube painted on all faces is cut into 27 unit cubes. The number with exactly 2 painted faces is', 12, 'One on each of the 12 edges: 12.')
];
build(ch47, q47);

// ============ Chapter 48: verbal strategy quick reference ============
const ch48 = spec({ n: 48, id: 'y4-rev-verbal-strategy', title: 'Verbal Strategy Quick Reference',
  tag: 'One-page rules for grammar, vocabulary, jumbles, connectors and reading comprehension',
  over: 'This quick reference gathers the rules that decide most verbal items. Grammar: subject-verb agreement (each, every, neither take singular verbs), tense consistency, parallel structure, prepositions with fixed words, pronoun case. Vocabulary: context clues, tone and roots. Jumbles: opener, links, closer. Connectors: contrast, cause, result, condition. Reading comprehension: structure first, then lines. Use it as a retrieval exercise: cover each rule and recall it.',
  place: 'Verbal sections reward knowing a small set of rules well.',
  real: 'Clear, correct writing depends on the same rules.',
  obj: ['Recall core grammar rules', 'Apply context-clue methods', 'Order jumbles with openers and links', 'Choose connectors by relation', 'Answer RC questions from structure'],
  pre: ['All earlier verbal chapters'],
  refresh: 'Rules beat feelings: apply a rule, then check how it sounds.',
  defs: ['Agreement: verb matches the subject in number.', 'Parallelism: items in a list share a form.', 'Context clue: a hint in the sentence.', 'Opener: a sentence that starts a paragraph.', 'Connector: a word showing a relation between ideas.'],
  intu: 'A few rules explain the majority of errors.',
  mental: 'Identify the item type, recall its rule, apply it.',
  formulas: [['Agreement', 'Each/every/neither + singular', 'Subjects.', 'Grammar.', 'Each of the boys has'], ['Nearest subject', 'Neither… nor: nearer subject', 'Pairs.', 'Grammar.', 'were'], ['Comparatives', 'Never "more taller"', 'Adjectives.', 'Grammar.', 'taller'], ['Fixed prepositions', 'good at, fond of, prefer to', 'Phrases.', 'Idiom.', 'prefer tea to coffee'], ['Hardly/no sooner', 'hardly… when; no sooner… than', 'Pairs.', 'Idiom.', 'hardly had he… when']],
  narr: ['"Each of the students was given a book": each is singular.', '"Neither the teacher nor the students were aware": the verb agrees with the nearer subject.', '"He is taller than I am": a comparison needs the full clause.', '"I prefer tea to coffee": prefer takes to.', '"Hardly had he reached the station when the train left": hardly takes when.'],
  deep: [['Tone in vocabulary', 'A praising sentence rules out negative meanings.'], ['RC order of work', 'Read for structure, then answer detail and vocabulary questions first.']],
  vars: [['Agreement', 'Singular words.', 'Each'], ['Nearer subject', 'Pairs.', 'Neither… nor'], ['Comparatives', 'No double.', 'Taller'], ['Prepositions', 'Fixed pairs.', 'Prefer to'], ['Correlatives', 'Pairs.', 'Hardly… when']],
  ex: [
    { t: 'Agreement', q: 'Each of the students ____ given a book.', g: ['Each of'], c: 'Singular.', s: [['Rule', '"Each" is singular.'], ['Verb', 'was.']], a: 'was', w: 'Not were.', tr: 'Choosing were.' },
    { t: 'Preposition', q: 'I prefer tea ____ coffee.', g: ['prefer'], c: 'Fixed pair.', s: [['Rule', '"prefer" takes "to".'], ['Choose', 'to.']], a: 'to', w: 'Not than.', tr: 'Choosing than.' },
    { t: 'Correlative', q: 'Hardly had he reached the station ____ the train left.', g: ['hardly'], c: 'Correlative pair.', s: [['Rule', '"hardly" pairs with "when".'], ['Choose', 'when.']], a: 'when', w: 'No sooner takes than.', tr: 'Choosing than.' }
  ],
  short: { title: 'Rule then check', trad: 'Pick by ear.', fast: 'Name the item type, recall its rule, apply it, then read the result aloud.', rules: ['Singular each/every.', 'Nearer subject.', 'Prefer to.', 'Hardly when.'] },
  mist: [['Choosing by ear', 'Familiar errors.', 'Apply the rule.'], ['Ignoring tone', 'Wrong meaning.', 'Check positive/negative.'], ['Starting with the longest passage', 'Time lost.', 'Quick items first.']],
  tips: { sec: 30, elim: 'Eliminate options that break a rule.', adv: 'Write the rules from memory weekly.', ins: 'The same ten rules decide most errors.' },
  rev: ['Agreement.', 'Prepositions.', 'Correlatives.', 'Tone.', 'Structure.'],
  qf: ['hardly… when; no sooner… than'],
  take: ['Rule.', 'Apply.', 'Check.', 'Quick first.'],
  self: ['Can I recall ten rules?', 'Can I apply them quickly?', 'Can I order my verbal work?']
});
const q48 = [
  T('e', 'Each of the students ____ given a book.', 'was', ['were', 'are', 'have been'], '"Each" is singular, so "was".'),
  T('e', 'I prefer tea ____ coffee.', 'to', ['than', 'from', 'over to'], '"Prefer" takes "to".'),
  T('e', 'Hardly had he reached the station ____ the train left.', 'when', ['than', 'then', 'while'], '"Hardly" pairs with "when".'),
  T('e', 'No sooner had the teacher entered ____ the students stood up.', 'than', ['when', 'then', 'while'], '"No sooner" pairs with "than".'),
  T('e', 'Neither the teacher nor the students ____ aware of the change.', 'were', ['was', 'is', 'has been'], 'The verb agrees with the nearer subject, "students".'),
  T('e', 'Choose the correct comparison.', 'He is taller than I am.', ['He is more taller than I am.', 'He is taller as I am.', 'He is tallest than I am.'], 'A comparative takes "than"; "more taller" is a double comparative.'),
  T('m', 'She is good ____ mathematics.', 'at', ['in', 'on', 'with'], 'The idiom is "good at".'),
  T('m', 'He is fond ____ music.', 'of', ['for', 'to', 'at'], 'The idiom is "fond of".'),
  T('m', 'The committee consists ____ five members.', 'of', ['from', 'in', 'with'], 'The idiom is "consists of".'),
  T('m', 'Despite ____ the rain, the match went on.', 'the', ['of the', 'that', 'for'], '"Despite" is followed directly by a noun phrase.'),
  T('m', 'He insisted ____ paying the bill.', 'on', ['to', 'at', 'for'], 'The idiom is "insisted on".'),
  T('m', 'He is senior ____ me by two years.', 'to', ['than', 'from', 'over'], '"Senior" takes "to".'),
  T('m', 'A word with a praising tone, such as "magnanimous", most likely means', 'generous', ['mean', 'angry', 'lazy'], 'Tone narrows the meaning.'),
  T('m', 'In a jumble, the opener is the sentence that', 'introduces the topic without referring back', ['starts with a pronoun', 'starts with "however"', 'has the longest length'], 'An opener has no back-reference.'),
  T('p', 'The connector that best fills "He was exhausted; ____, he continued working." is', 'nevertheless', ['therefore', 'because', 'moreover'], 'Continuing despite exhaustion is a contrast.'),
  T('p', 'The idiom "to burn the midnight oil" means', 'to work late into the night', ['to waste oil', 'to cook at midnight', 'to sleep early'], 'It describes working late.'),
  T('p', 'In reading comprehension, an option that uses "always" or "never" when the passage hedges is most likely', 'wrong', ['right', 'neutral', 'missing'], 'Extreme words often overstate the passage.'),
  T('p', 'The first thing to do with a long passage is to', 'read for the structure: claim, support, turn, conclusion', ['memorise every sentence', 'skip to the options', 'read the last line only'], 'Structure answers most questions.'),
  T('p', 'A sentence where a list reads "swimming, to cycle and going for walks" has a problem with', 'parallel structure', ['agreement', 'prepositions', 'spelling'], 'The items should share a form: swimming, cycling and going.'),
  T('p', 'In "Walking down the street, a dog barked at me", the error is a', 'dangling modifier', ['wrong tense', 'missing article', 'double comparative'], '"Walking" should be attached to the person walking.')
];
build(ch48, q48);

// ============ Chapter 49: DI formula and approach tables ============
const ch49 = spec({ n: 49, id: 'y4-rev-di-tables', title: 'DI Formula and Approach Tables',
  tag: 'A one-page table of the formulas and approaches for tables, bar, line, pie and caselet data interpretation',
  over: 'Data interpretation uses a small set of calculations again and again: percentage change, share of total, ratio, average, weighted average, CAGR, and the rule that a percentage must use the right base. This table pairs each calculation with its formula and the typical trap, and then gives an approach for each chart type: write the numbers, add derived columns, and use approximation when options are well separated.',
  place: 'A quick DI sheet saves time because you stop deriving the same formula in each set.',
  real: 'Business reporting uses the same small set of calculations.',
  obj: ['Recall the core DI formulas', 'State the typical trap for each', 'Choose an approach for each chart type', 'Decide when to approximate', 'Check bases and units'],
  pre: ['All earlier DI chapters'],
  refresh: 'Percent change = change ÷ old. Share = part ÷ whole. Weighted average = total ÷ total weight.',
  defs: ['Base: the quantity a percentage refers to.', 'Weighted average: total ÷ total weight.', 'CAGR: constant yearly growth rate.', 'Percentage point: difference between two percentages.', 'Derived column: a column you compute.'],
  intu: 'Most DI is the same eight calculations in different clothing.',
  mental: 'Write the numbers, name the calculation, check the base.',
  formulas: [['Percent change', '(new − old) ÷ old', 'Growth.', 'Base is old.', '100 → 125 is 25%'], ['Share', 'Part ÷ total', 'Pie.', 'Base is total.', '30 of 120'], ['Ratio', 'Simplify by HCF', 'Comparison.', 'Order matters.', '30 : 20'], ['Average', 'Total ÷ count', 'Mean.', 'Count terms.', '(10 + 20 + 30)/3'], ['Weighted average', 'Σ(value × weight) ÷ Σ weight', 'Mixed groups.', 'Not simple mean.', '60 and 40'], ['CAGR', '(end/start)^(1/n) − 1', 'Growth over n years.', 'Not total ÷ n.', '1.331^(1/3)'], ['Percentage points', 'Difference of two percentages', 'Share changes.', 'Not percent change.', '30% → 35%'], ['Approximation', 'Round to two figures', 'Wide options.', 'Check spacing.', '4,180 → 4,200']],
  narr: ['Percent change from 100 to 125 is 25 ÷ 100 = 25%; the reverse change from 125 to 100 is 25 ÷ 125 = 20%.', 'A share rising from 30% to 35% is 5 percentage points, or about 16.7% in percentage terms.', 'A weighted average of marks 60 (30 students) and 40 (20 students) is (1,800 + 800) ÷ 50 = 52, not 50.', 'CAGR from 1,000 to 1,331 in 3 years is 10%: 1.331^(1/3) = 1.1.', 'For each chart type: write the numbers in a table, add derived columns, answer from the table.'],
  deep: [['Pie charts', 'Shares must sum to 100%; angles are share × 3.6°.'], ['Line charts', 'Read the slope: steeper means faster change.']],
  vars: [['Growth', 'Percent change.', '25%'], ['Shares', 'Part/whole.', '25%'], ['Weighted mean', 'Totals.', '52'], ['CAGR', 'Compound.', '10%'], ['Points vs percent', 'Care.', '5 vs 16.7']],
  ex: [
    { t: 'Percent change', q: 'A value goes from 100 to 125. Percent increase? And the reverse change from 125 to 100?', g: ['100, 125'], c: 'Use the old value as base.', s: [['Increase', '25 ÷ 100 = 25%.'], ['Decrease', '25 ÷ 125 = 20%.']], a: '25% up, 20% down', w: 'The bases differ.', tr: 'Saying 25% both ways.' },
    { t: 'Weighted average', q: 'Marks 60 for 30 students and 40 for 20 students. Average?', g: ['60, 30', '40, 20'], c: 'Total ÷ total.', s: [['Totals', '1,800 + 800 = 2,600.'], ['Average', '2,600 ÷ 50 = 52.']], a: '52', w: 'Not 50.', tr: 'Taking the simple mean.' },
    { t: 'Points vs percent', q: 'A share rises from 30% to 35%. Percentage points and percent change?', g: ['30%, 35%'], c: 'Two measures.', s: [['Points', '35 − 30 = 5.'], ['Percent', '5 ÷ 30 = 16.7%.']], a: '5 points; 16.7%', w: 'Different measures.', tr: 'Mixing them.' }
  ],
  short: { title: 'Table, base, check', trad: 'Derive each time.', fast: 'Name the calculation, check the base, add derived columns, approximate when options are wide.', rules: ['Old is the base.', 'Weighted means.', 'Points vs percent.', 'Check units.'] },
  mist: [['Wrong base', 'Wrong percent.', 'Name the base.'], ['Averaging percentages', 'Wrong mean.', 'Weighted.'], ['Mixing points and percent', 'Wrong measure.', 'Read the question.']],
  tips: { sec: 20, elim: 'Reject options that break a simple bound.', adv: 'Write the sheet weekly.', ins: 'Eight calculations cover most DI.' },
  rev: ['Percent change.', 'Share.', 'Weighted mean.', 'CAGR.', 'Points.'],
  qf: ['(new − old)/old', '(end/start)^(1/n) − 1'],
  take: ['Base.', 'Weights.', 'Points.', 'Approximate.'],
  self: ['Can I state the base?', 'Can I weight an average?', 'Can I tell points from percent?']
});
const q49 = [
  N('e', 'A value rises from 100 to 125. The percentage increase is', 25, '25 ÷ 100 = 25%.', 0, pc),
  N('e', 'A value falls from 125 to 100. The percentage decrease is', 20, '25 ÷ 125 = 20%.', 0, pc),
  N('e', '30 out of 120 is what percentage?', 25, '30 ÷ 120 = 25%.', 0, pc),
  N('e', 'The average of 10, 20 and 30 is', 20, '60 ÷ 3 = 20.'),
  N('e', 'The angle of a pie sector for a 25% share is (degrees)', 90, '0.25 × 360 = 90.'),
  N('e', 'A share rising from 30% to 35% is a rise of how many percentage points?', 5, '35 − 30 = 5.'),
  N('m', 'The same share rise (30% → 35%) is what percentage change (one decimal)?', 5 / 30 * 100, '5 ÷ 30 = 16.7%.', 1, pc),
  N('m', 'Marks 60 for 30 students and 40 for 20 students give an average of', (1800 + 800) / 50, '2,600 ÷ 50 = 52.'),
  N('m', 'The CAGR for 1,000 growing to 1,331 in 3 years is (%)', 10, '1.331 = 1.1³.', 0, pc),
  N('m', 'The total growth from 1,000 to 1,331 is (%)', 33.1, '331 ÷ 1,000 = 33.1%.', 1, pc),
  N('m', 'The ratio 30 : 20 in simplest form has first term', 3, '30 : 20 = 3 : 2.'),
  N('m', 'The average of 12, 18 and 30 is', 20, '60 ÷ 3 = 20.'),
  N('m', 'A pie sector of 54 degrees represents (%)', 15, '54 ÷ 360 = 15%.', 0, pc),
  N('m', 'Sales rise from 4,180 to 4,970. The percentage growth is approximately (%)', 19, '790 ÷ 4,180 = 18.9%, about 19%.', 0, pc),
  N('p', 'A price rises 20% and then falls 20%. The net change is (%)', -4, '1.2 × 0.8 = 0.96, a 4% fall.', 0),
  N('p', 'The weighted average of 80 (weight 3) and 50 (weight 2) is', (240 + 100) / 5, '(240 + 100) ÷ 5 = 68.'),
  N('p', 'If total sales are 1,000 and a category has a 24% share, its sales are', 240, '0.24 × 1,000 = 240.'),
  N('p', 'If a series has year-on-year rates of 10% and 20%, the combined two-year growth is (%)', 32, '1.1 × 1.2 = 1.32.', 0, pc),
  N('p', 'A sector of 108 degrees in a pie of total 600 represents', 180, '108 ÷ 360 × 600 = 180.'),
  T('p', 'The correct base for a percentage change is', 'the old (earlier) value', ['the new value', 'the average', 'the total'], 'Change is measured against where you started.')
];
build(ch49, q49);
