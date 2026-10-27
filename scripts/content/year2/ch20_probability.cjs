const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-probability-fundamentals', year: 2, category: 'Advanced Quantitative Aptitude', num: 20, difficulty: 'Intermediate',
  title: 'Probability Fundamentals',
  tagline: 'Year 2 — Sample spaces, events, and the basic rules of probability',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/aptitude/probability/',
  overview: 'Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). For equally likely outcomes, the probability of an event is the number of favourable outcomes divided by the total number of outcomes. The sample space lists all possible outcomes. With a few rules (complement, addition, multiplication for independent events) many aptitude problems on coins, dice, cards and bags can be solved.',
  placement: 'Probability questions are commonly asked in company aptitude rounds, usually with coins, dice, cards or balls in a bag.',
  realWorld: 'Weather forecasts, quality control and risk estimates all use probability.',
  objectives: [
    'Write the sample space for coins, dice and cards',
    'Compute the probability of an event as favourable ÷ total',
    'Use the complement rule and the addition rule',
    'Use the multiplication rule for independent events',
    'Handle draws with and without replacement'
  ],
  prereq: ['Permutations and combinations basics (counting)', 'Fractions and Decimals'],
  refresher: 'Number of ways to choose r items from n: nCr = n!/(r!(n − r)!). A standard deck has 52 cards: 4 suits of 13, 12 face cards, 4 aces.',
  defs: [
    'Experiment: an action with uncertain outcomes (tossing a coin). Sample space S: set of all outcomes.',
    'Event: a subset of the sample space. P(E) = n(E)/n(S) for equally likely outcomes.',
    'Complement: P(not E) = 1 − P(E).',
    'Mutually exclusive events cannot happen together: P(A or B) = P(A) + P(B). In general P(A or B) = P(A) + P(B) − P(A and B).',
    'Independent events: P(A and B) = P(A) × P(B).'
  ],
  intuition: 'Probability is relative frequency: if you repeat the experiment many times, the fraction of times the event occurs approaches P(E). Counting favourable and total outcomes carefully is most of the work.',
  mental: 'List the outcomes systematically (a table for two dice, a tree for coins), count the favourable ones, and divide. If the event is "at least one", use the complement.',
  formulas: [
    ['Basic rule', 'P(E) = favourable ÷ total', 'Equally likely outcomes.', 'Any single-draw question.', 'Even number on a die: 3/6 = 1/2'],
    ['Complement', 'P(not E) = 1 − P(E)', 'Handy for "at least one".', '"At least one head" in 3 coins.', '1 − 1/8 = 7/8'],
    ['Addition rule', 'P(A or B) = P(A) + P(B) − P(A and B)', 'Subtract the overlap.', '"King or heart".', '4/52 + 13/52 − 1/52 = 16/52'],
    ['Independent events', 'P(A and B) = P(A) × P(B)', 'Separate tosses and throws.', 'Several tosses.', '1/2 × 1/2 = 1/4'],
    ['Without replacement', 'Multiply the changing fractions', 'The second draw has fewer items.', 'Balls in a bag.', '5/8 × 4/7 = 5/14']
  ],
  narrative: [
    'Define the sample space first. A coin has {H, T}. A die has {1, …, 6}. Two dice have 36 equally likely ordered pairs. A deck has 52 cards. The probability of an event is the count of favourable outcomes divided by the count of all outcomes.',
    'Use the complement for "at least one". Tossing three coins has 8 outcomes; only TTT has no head, so P(at least one head) = 1 − 1/8 = 7/8.',
    'For "or" questions, use the addition rule and subtract the overlap. In a deck, P(king or heart) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13, because the king of hearts is counted in both groups.',
    'For independent events multiply: two heads in two tosses is 1/2 × 1/2 = 1/4. For draws without replacement, the denominators change: from 5 red and 3 green balls, P(both red) = (5/8) × (4/7) = 5/14.',
    'For dice sums, tabulate the 36 pairs. A sum of 7 occurs in 6 ways, so P = 6/36 = 1/6; a sum of 8 occurs in 5 ways, so P = 5/36.'
  ],
  deep: [
    ['Independent vs mutually exclusive', 'Mutually exclusive events cannot happen together (probability of both is 0). Independent events do not influence each other. They are different ideas.'],
    ['Combinations in probability', 'When balls are drawn together, use combinations: one white and one black from 4 white and 6 black has 4 × 6 = 24 favourable ways out of C(10, 2) = 45, so P = 8/15.']
  ],
  variations: [
    ['Single draw', 'Favourable ÷ total.', 'Even number on a die'],
    ['At least one', 'Complement.', 'Three coins'],
    ['Or events', 'Addition rule.', 'King or heart'],
    ['Independent events', 'Multiply.', 'Two coins'],
    ['Without replacement', 'Changing denominators.', 'Two red balls']
  ],
  examples: [
    {
      title: 'At least one head',
      q: 'Three coins are tossed. Find the probability of getting at least one head.',
      given: ['Sample space of 8 outcomes'],
      concept: 'Complement.',
      steps: [['No heads', 'Only TTT: probability 1/8.'], ['At least one', '1 − 1/8 = 7/8.']],
      ans: '7/8', why: 'It is easier to count the single outcome with no head.', trap: 'Counting favourable outcomes one by one and missing one.'
    },
    {
      title: 'King or heart',
      q: 'A card is drawn from a pack of 52. Find the probability that it is a king or a heart.',
      given: ['4 kings, 13 hearts, 1 king of hearts'],
      concept: 'Addition rule with overlap.',
      steps: [['Count', '4 + 13 − 1 = 16.'], ['Probability', '16/52 = 4/13.']],
      ans: '4/13', why: 'The king of hearts is in both groups and must be counted once.', trap: 'Using 17/52.'
    },
    {
      title: 'Without replacement',
      q: 'A bag has 5 red and 3 green balls. Two balls are drawn one after another without replacement. Find the probability that both are red.',
      given: ['5 red, 3 green'],
      concept: 'Multiply changing probabilities.',
      steps: [['First red', '5/8.'], ['Second red', '4/7 (one red is gone).'], ['Both', '(5/8) × (4/7) = 20/56 = 5/14.']],
      ans: '5/14', why: 'The second draw has 4 reds among 7 balls.', trap: 'Using 5/8 twice.'
    }
  ],
  shortcut: {
    title: 'Complement and tables',
    trad: 'Count every favourable outcome.',
    fast: 'Use 1 − P(none) for "at least one", a 6 × 6 table for dice sums, and multiply fractions for sequential draws.',
    rules: ['0 ≤ P ≤ 1.', 'P(not E) = 1 − P(E).', 'Subtract overlaps in "or".', 'Without replacement: update the denominator.']
  },
  mistakes: [
    ['Counting outcomes unequally', 'Treating HT and TH as the same.', 'Use ordered outcomes.'],
    ['Ignoring the overlap', 'Adding without subtracting.', 'Use the addition rule.'],
    ['Replacing without saying', 'Assuming replacement.', 'Read the wording.'],
    ['Forgetting to simplify', 'Leaving 16/52.', 'Reduce to 4/13.']
  ],
  tips: { sec: 70, elim: 'A probability must be between 0 and 1; discard options outside.', advice: 'Write the sample space before counting.', insight: 'Dice-sum tables appear often.' },
  revision: ['P = favourable/total.', 'Complement.', 'Addition rule.', 'Independent: multiply.', 'Without replacement.'],
  quickFormulas: ['P(E) = n(E)/n(S)', 'P(A∪B) = P(A)+P(B)−P(A∩B)'],
  takeaways: ['Define the sample space.', 'Use complements.', 'Subtract overlaps.', 'Multiply independents.'],
  selfCheck: ['Can I list the outcomes of two dice?', 'Can I use the complement?', 'Can I draw without replacement?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Probability topic area; examples are original.'], ['NCERT Mathematics, Class 9–10 (Probability)', 'Textbook', 'Basic probability.']]
};

const quiz = [
  easy('A coin is tossed. The probability of getting a head is', '1/2', ['1/4', '1', '2'], 'One favourable outcome out of two: 1/2.'),
  easy('A die is thrown. The probability of an even number is', '1/2', ['1/3', '1/6', '2/3'], 'Even numbers: 2, 4, 6. So 3/6 = 1/2.'),
  easy('A die is thrown. The probability of a prime number is', '1/2', ['1/3', '1/6', '2/3'], 'Primes: 2, 3, 5. So 3/6 = 1/2.'),
  easy('A card is drawn from a pack of 52. The probability of an ace is', '1/13', ['1/52', '1/4', '4/13'], '4/52 = 1/13.'),
  easy('A bag has 3 red and 2 blue balls. The probability of drawing a red ball is', '3/5', ['2/5', '3/2', '1/3'], '3 red out of 5 balls: 3/5.'),
  easy('A die is thrown. The probability of a number greater than 4 is', '1/3', ['1/6', '1/2', '2/3'], 'Numbers 5 and 6: 2/6 = 1/3.'),

  medium('Two coins are tossed. The probability of two heads is', '1/4', ['1/2', '1/3', '3/4'], '1 outcome (HH) out of 4.'),
  medium('Two dice are thrown. The probability that the sum is 7 is', '1/6', ['1/12', '5/36', '7/36'], '6 pairs out of 36: 1/6.'),
  medium('Three coins are tossed. The probability of at least one head is', '7/8', ['1/8', '3/4', '1/2'], '1 − 1/8 = 7/8.'),
  medium('A bag has 5 red and 3 green balls. Two balls are drawn one after another without replacement. The probability that both are red is', '5/14', ['25/64', '5/8', '3/14'], '(5/8) × (4/7) = 5/14.'),
  medium('A die is thrown. The probability of not getting a 6 is', '5/6', ['1/6', '1/2', '2/3'], '1 − 1/6 = 5/6.'),
  medium('A letter is chosen at random from the word MATH. The probability that it is a vowel is', '1/4', ['1/2', '1/3', '3/4'], 'Only A is a vowel: 1/4.'),
  medium('A number is chosen at random from 1 to 20. The probability that it is a multiple of 3 is', '3/10', ['1/3', '1/4', '7/20'], 'Multiples: 3, 6, 9, 12, 15, 18. So 6/20 = 3/10.'),
  medium('If A and B are independent events with P(A) = 0.4 and P(B) = 0.5, then P(A and B) is', 0.2, [0.9, 0.1, 0.45], '0.4 × 0.5 = 0.2.'),

  placement('Two dice are thrown. The probability that the sum is 8 is', '5/36', ['1/6', '1/9', '7/36'], 'Pairs: (2,6), (3,5), (4,4), (5,3), (6,2) = 5. So 5/36.'),
  placement('A card is drawn from a pack of 52. The probability that it is a king or a heart is', '4/13', ['17/52', '1/4', '5/26'], '4 + 13 − 1 = 16 favourable cards: 16/52 = 4/13.'),
  placement('Three coins are tossed. The probability of getting exactly two heads is', '3/8', ['1/8', '1/4', '1/2'], 'HHT, HTH, THH: 3 out of 8.'),
  placement('A bag has 4 white and 6 black balls. Two balls are drawn together. The probability that one is white and one is black is', '8/15', ['2/5', '12/25', '4/9'], '4 × 6 = 24 favourable out of C(10, 2) = 45: 24/45 = 8/15.'),
  placement('The probability that a leap year has 53 Sundays is', '2/7', ['1/7', '3/7', '5/7'], 'A leap year has 52 weeks and 2 extra days. 2 of the 7 possible pairs include a Sunday: 2/7.'),
  placement('Two dice are thrown. The probability that the product of the numbers is even is', '3/4', ['1/4', '1/2', '5/6'], 'The product is odd only if both are odd: 3 × 3 = 9 of 36, i.e. 1/4. So even = 3/4.')
];
build(chapter, quiz);
