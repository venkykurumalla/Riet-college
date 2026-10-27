const { easy, medium, placement, build } = require('../lib.cjs');

const O = ['Only assumption I is implicit', 'Only assumption II is implicit', 'Both I and II are implicit', 'Neither I nor II is implicit'];
const mk = (d, st, a1, a2, i, expl) => d('Statement: ' + st + '\nAssumptions: I. ' + a1 + ' II. ' + a2 + '\nWhich of the following is correct?', O[i], O.filter((_, k) => k !== i), expl);

const chapter = {
  id: 'y2-lr-statements-assumptions', year: 2, category: 'Advanced Logical Reasoning', num: 29, difficulty: 'Intermediate',
  title: 'Statements and Assumptions',
  tagline: 'Year 2 — Finding the unstated premise on which a statement depends',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/logical-reasoning/statement-and-assumption/',
  overview: 'An assumption is something taken for granted by the speaker or writer, without being stated, which must be true for the statement to make sense. In an assumption question you are given a statement and two or more candidate assumptions, and you must pick those that are implicit. The test is: "If the assumption were false, would the statement become pointless or unreasonable?"',
  placement: 'Statements and assumptions questions are commonly asked in company reasoning rounds, mostly with advertisements, advice and announcements.',
  realWorld: 'Analysing an advertisement, a policy proposal or an argument in a meeting involves spotting the premises that its author takes for granted.',
  objectives: [
    'Distinguish assumptions from conclusions and from restatements',
    'Apply the "negation test" to check whether an assumption is necessary',
    'Reject assumptions that are too strong, too general or unrelated',
    'Recognise typical assumptions in advertisements, advice and announcements',
    'Handle questions with one or two assumptions'
  ],
  prereq: ['Statements and Conclusions'],
  refresher: 'A conclusion follows from a statement; an assumption lies behind it. A restatement is neither.',
  defs: [
    'Assumption: an unstated belief that the speaker takes for granted, necessary for the statement to hold.',
    'Negation test: if the opposite of the assumption makes the statement meaningless, the assumption is implicit.',
    'Strong words (all, always, only, never, best) usually make an assumption invalid.',
    'Advertisement assumption: "people want what is advertised" and "people will respond".',
    'Advice assumption: the advice is useful and can be followed.'
  ],
  intuition: 'People speak with background beliefs that they do not state. A shopkeeper who says "Buy our toothpaste for strong teeth" assumes people want strong teeth and that toothpaste can help. An assumption is such a hidden belief, necessary to make the statement sensible.',
  mental: 'For each assumption, flip it to its opposite and ask whether the statement would still make sense. If not, it is implicit. If the statement still works, the assumption is not necessary.',
  formulas: [
    ['Negation test', 'Negate the assumption; does the statement collapse?', 'If yes, it is implicit.', 'Every assumption.', '"Lift is working" negated → advice to use the lift is pointless'],
    ['Strong-word filter', 'Reject assumptions with all, always, only, never, best, everyone', 'Too extreme to be taken for granted.', 'Choosing between options.', 'No other soap keeps skin fresh → reject'],
    ['Restatement filter', 'An assumption is not a repeat of the statement', 'It must be something unstated.', 'Restatements.', '"Her sister is getting married" repeated → not an assumption'],
    ['Cause-purpose rule', 'A statement about doing X to achieve Y assumes X can achieve Y', 'Means-end link.', 'Advice, decisions.', 'Install cameras to reduce accidents'],
    ['Advertisement rule', 'Ads assume people want the benefit and may respond', 'Usual implicit premises.', 'Advertisements.', 'Strong teeth']
  ],
  narrative: [
    'Read the statement and ask: "What must the speaker believe for this to be a sensible thing to say?" In "Use the lift if you are going above the second floor", the speaker must believe the lift is working and available.',
    'Apply the negation test to each candidate. If the lift were out of order, the advice would be pointless, so "the lift is working" is implicit. The candidate "People going above the second floor use only the stairs" is not necessary for the advice.',
    'Reject extreme assumptions. "No other soap keeps the skin fresh" is too strong; an advertisement need not claim this. Likewise "all roads are jammed" is not needed to recommend the metro.',
    'Reject restatements. If the statement says Rohit wants leave to attend his sister\'s wedding, "his sister is getting married" repeats the statement and is not an assumption. The assumption would be that such leave is likely to be approved.',
    'Means-end statements ("do X to achieve Y") assume X helps achieve Y. A city that installs speed cameras to reduce accidents assumes that speeding contributes to accidents and that cameras deter speeding.'
  ],
  deep: [
    ['Assumptions vs conclusions', 'A conclusion is a consequence of the statement; an assumption is a precondition. Ask: does it come after (conclusion) or before (assumption)?'],
    ['Two good assumptions', 'Sometimes both assumptions are valid. When the statement relies on two separate hidden beliefs, both pass the negation test.']
  ],
  variations: [
    ['Advertisements', 'Benefit and response.', 'Buy this toothpaste for strong teeth'],
    ['Advice', 'Advice can be followed.', 'Use the lift'],
    ['Decisions and policies', 'Means-end link.', 'Install speed cameras'],
    ['Announcements', 'Audience can receive.', 'Apply on the website'],
    ['Reasons', 'Because clauses.', 'Study at night because evenings are noisy']
  ],
  examples: [
    {
      title: 'Advice',
      q: 'Statement: Please use the lift if you are going above the second floor. Assumptions: I. The lift is working. II. People going above the second floor use only the stairs.',
      given: ['Advice to use the lift'],
      concept: 'Negation test.',
      steps: [['Assumption I', 'If the lift is not working, the advice is pointless: implicit.'], ['Assumption II', 'The advice does not rely on this: not implicit.']],
      ans: 'Only assumption I is implicit', why: 'Advice presumes it can be followed.', trap: 'Accepting II because it sounds related.'
    },
    {
      title: 'Advertisement',
      q: 'Statement: Use Brightmax toothpaste for strong teeth. Assumptions: I. People want strong teeth. II. Other toothpastes are harmful.',
      given: ['Advertisement'],
      concept: 'Benefit and no extremes.',
      steps: [['Assumption I', 'The ad assumes people want strong teeth: implicit.'], ['Assumption II', 'Too strong, not required: not implicit.']],
      ans: 'Only assumption I is implicit', why: 'An advertisement does not need to claim rivals are harmful.', trap: 'Accepting extreme claims.'
    },
    {
      title: 'Means and end',
      q: 'Statement: To reduce accidents, the city has decided to install speed cameras. Assumptions: I. Speeding contributes to accidents. II. Speed cameras will deter speeding.',
      given: ['Decision with a purpose'],
      concept: 'Means-end link.',
      steps: [['Assumption I', 'If speeding did not contribute, the plan would not reduce accidents: implicit.'], ['Assumption II', 'If cameras did not deter, the plan would fail: implicit.']],
      ans: 'Both I and II are implicit', why: 'Both are links in the chain from the decision to the goal.', trap: 'Rejecting one as obvious.'
    }
  ],
  shortcut: {
    title: 'Flip and check',
    trad: 'Judge which assumption sounds right.',
    fast: 'Negate each candidate and ask if the statement still makes sense. Reject extreme, unrelated and restating candidates.',
    rules: ['Negation test.', 'Reject strong words.', 'Reject restatements.', 'Look for means-end links.']
  },
  mistakes: [
    ['Accepting consequences', 'Treating a result as an assumption.', 'Assumptions come before.'],
    ['Accepting extreme claims', 'Selecting "all" or "best".', 'Filter strong words.'],
    ['Accepting restatements', 'Repeating the statement.', 'It must be unstated.'],
    ['Ignoring the negation test', 'Using feelings.', 'Flip it.']
  ],
  tips: { sec: 40, elim: 'Reject candidates with strong words first.', advice: 'Apply the negation test to each.', insight: 'Advertisements and advice are the most common.' },
  revision: ['Assumption is unstated.', 'Negation test.', 'Reject strong words.', 'Reject restatements.', 'Means-end link.'],
  quickFormulas: ['Negate → statement fails → implicit'],
  takeaways: ['Hidden premise.', 'Flip and check.', 'No extremes.', 'No restatements.'],
  selfCheck: ['Can I apply the negation test?', 'Can I reject an extreme assumption?', 'Can I find the means-end link?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Statement and Assumption topic area; examples are original.']]
};

const quiz = [
  mk(easy, 'Please use the lift if you are going above the second floor.', 'The lift is working.', 'People going above the second floor use only the stairs.', 0, 'The advice presumes the lift is available. II is not needed.'),
  mk(easy, 'Use Brightmax toothpaste for strong teeth.', 'People want strong teeth.', 'Other toothpastes are harmful.', 0, 'The advertisement presumes people want strong teeth. II is too strong.'),
  mk(easy, 'The teacher said: "Read the chapter before coming to class."', 'Students have access to the chapter.', 'The teacher will test the students.', 0, 'The instruction presumes access. A test is not necessary.'),
  mk(easy, 'Travel by metro to avoid traffic jams.', 'The metro is free of road traffic jams.', 'All roads in the city are jammed.', 0, 'The advice presumes the metro avoids jams. II is too strong.'),
  mk(easy, 'Do not touch the wire; it is live.', 'Touching a live wire is harmful.', 'The wire will become dead tomorrow.', 0, 'The warning presumes harm. II is unrelated.'),
  mk(easy, 'He decided to study at night because the evenings are noisy.', 'Nights are quieter than evenings.', 'He cannot study during the day.', 0, 'The decision presumes the night is quieter. II is not needed.'),

  mk(medium, 'The government has increased bus fares, so people will shift to trains.', 'Train fares are lower than the new bus fares.', 'People travel only by bus.', 0, 'Shifting presumes trains are cheaper. II contradicts the shift.'),
  mk(medium, 'Apply for the job on our website only.', 'Candidates have internet access.', 'Applications by post are illegal.', 0, 'The instruction presumes online access. II is too strong.'),
  mk(medium, 'A says to B: "Give me your phone; I will call him."', 'A\'s own phone is not available.', 'B has a phone.', 2, 'The request presumes A has no phone at hand and that B has one.'),
  mk(medium, 'Use this soap; it keeps skin fresh.', 'People want fresh skin.', 'No other soap keeps skin fresh.', 0, 'The ad presumes people want fresh skin. II is extreme.'),
  mk(medium, 'Mr. X proposed to expand his business by opening three new shops.', 'Mr. X expects the new shops to be profitable.', 'Mr. X has no existing shops.', 0, 'Expansion presumes expected profit. II is not required and contradicts "expand".'),
  mk(medium, 'Do not miss the 10 a.m. bus; the next one is at 1 p.m.', 'People may want to travel before 1 p.m.', 'The 1 p.m. bus will be late.', 0, 'The warning presumes some want an earlier trip. II is unrelated.'),
  mk(medium, 'The company has decided to give a 10% hike to all employees.', 'The company can afford the hike.', 'All employees will leave otherwise.', 0, 'The decision presumes the company can pay. II is extreme.'),
  mk(medium, 'Please carry your ID card for entry.', 'Entry is restricted to ID card holders.', 'All visitors already have ID cards.', 0, 'The request presumes entry depends on ID. II is not needed.'),

  mk(placement, 'To reduce accidents, the city has decided to install speed cameras.', 'Speeding contributes to accidents.', 'Speed cameras will deter speeding.', 2, 'Both links are necessary for the plan to reduce accidents.'),
  mk(placement, 'An advertisement: "Only 1000 units of this phone are available; hurry."', 'People tend to buy quickly if stock is limited.', 'This phone is the best in the market.', 0, 'The ad presumes scarcity prompts action. "Best" is not needed.'),
  mk(placement, 'The principal ordered that all mobile phones be switched off in class.', 'Phones can disturb the class.', 'Phones are used for studying.', 0, 'The order presumes phones can disturb. II is not needed.'),
  mk(placement, 'She turned off the AC to save electricity.', 'The AC consumes electricity.', 'She is poor.', 0, 'The action presumes the AC uses electricity. II is irrelevant.'),
  mk(placement, 'Rohit applied for three days\' leave to attend his sister\'s wedding.', 'Leave is likely to be granted for such a reason.', 'Rohit\'s sister is getting married.', 0, 'II restates the statement. The unstated assumption is that the leave may be granted.'),
  mk(placement, 'Fruit-sellers display fruits in colourful baskets.', 'Colourful displays attract customers.', 'All fruit-sellers are rich.', 0, 'The practice presumes attraction. II is irrelevant and extreme.')
];
build(chapter, quiz);
