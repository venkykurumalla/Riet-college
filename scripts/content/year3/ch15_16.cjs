const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const fr = (n, d) => { const g = gcd(Math.abs(n), d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
const Cb = (n, r) => { let x = 1; for (let i = 1; i <= r; i++) x = x * (n - r + i) / i; return Math.round(x); };
const near = (n, d) => [fr(n + 1, d), fr(Math.max(1, n - 1), d), fr(n + 2, d + 1)];

// ---------------- Chapter 15 ----------------
const ch15 = C({
  n: 15, id: 'y3-quant-adv-probability', cat: 'quant', title: 'Advanced Probability — Conditional and Compound',
  tag: 'Conditional probability, independence, repeated trials and draws without replacement',
  url: 'https://www.indiabix.com/aptitude/probability/',
  over: 'Year 2 probability used single events. Year 3 handles compound events: the probability that A and B both occur, that A or B occurs, and the probability of A given that B has already occurred (conditional probability). It also covers independent trials repeated several times and draws without replacement. The unifying rule is the multiplication rule: P(A and B) = P(A) × P(B | A).',
  place: 'Compound and conditional probability questions are commonly asked in company aptitude rounds with cards, dice, coins and balls in bags.',
  real: 'Quality control sampling, medical test accuracy and risk assessment depend on conditional probability.',
  obj: ['Use the multiplication rule with and without independence', 'Compute conditional probability P(A | B)', 'Solve repeated-trial problems (at least one, exactly k)', 'Handle draws with and without replacement', 'Use the complement for "at least" events'],
  pre: ['Probability Fundamentals', 'Combinations'],
  refresh: 'P(not A) = 1 − P(A). P(A or B) = P(A) + P(B) − P(A and B). For independent events P(A and B) = P(A)P(B).',
  defs: [
    'Conditional probability: P(A | B) = P(A and B) ÷ P(B).',
    'Independent events: P(A | B) = P(A); equivalently P(A and B) = P(A)P(B).',
    'Mutually exclusive events cannot occur together: P(A and B) = 0.',
    'Binomial trials: probability of exactly k successes in n independent trials = nCk pᵏ qⁿ⁻ᵏ.',
    'Without replacement: the sample space shrinks after each draw.'
  ],
  intu: 'Conditional probability restricts the sample space to the cases where the given event has occurred. The probability of A given B is the share of B\'s cases in which A also happens.',
  mental: 'Define the events, decide independence, write the multiplication rule, and compute. For "at least one", compute 1 − P(none).',
  formulas: [
    ['Multiplication rule', 'P(A and B) = P(A) × P(B | A)', 'Sequential events.', 'Draws.', '(5/8)(4/7) = 5/14'],
    ['Conditional', 'P(A | B) = P(A ∩ B)/P(B)', 'Restrict to B.', 'Given that…', 'P(sum 8 | first die is 3)'],
    ['Binomial', 'P(k) = nCk pᵏ (1 − p)ⁿ⁻ᵏ', 'Independent trials.', 'Repeated trials.', 'Exactly 2 heads in 3 tosses: 3/8'],
    ['At least one', '1 − (1 − p)ⁿ', 'Complement.', 'At-least questions.', '1 − (1/2)³ = 7/8'],
    ['Without replacement', 'Multiply changing fractions', 'Hypergeometric.', 'Bags and cards.', '4/10 × 3/9']
  ],
  narr: [
    'For sequential draws without replacement multiply the changing probabilities. From a bag with 5 red and 3 green balls, P(both red) = (5/8)(4/7) = 5/14.',
    'Conditional probability restricts the sample space. Two dice are thrown. Given that the first shows 3, the sum is 8 only if the second shows 5, so P = 1/6. Given that the sum is 8 (5 outcomes), the probability that the first die is 3 is 1/5.',
    'For repeated independent trials, use the binomial formula. P(exactly 2 heads in 3 tosses) = 3C2 (1/2)³ = 3/8. For at least one head: 1 − (1/2)³ = 7/8.',
    'With replacement, trials are independent and the probabilities stay the same. Drawing two cards with replacement, P(both aces) = (4/52)² = 1/169. Without replacement it is (4/52)(3/51) = 1/221.',
    'The addition rule with overlap: P(king or heart) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13.'
  ],
  deep: [['Independent vs exclusive', 'Exclusive events have P(A and B) = 0, so they are dependent (if A occurs, B cannot). Independent events overlap in proportion to their probabilities.'], ['Order does not matter in the total', 'P(red then green) and P(green then red) are equal when drawing without replacement; use combinations for "one of each".']],
  vars: [['Draws without replacement', 'Multiply fractions.', '5 red, 3 green'], ['Conditional', 'Restrict the sample space.', 'Dice sum given first die'], ['Repeated trials', 'Binomial.', '3 tosses'], ['At least one', 'Complement.', '1 − (1/2)³'], ['Or-events', 'Addition rule.', 'King or heart']],
  ex: [
    { t: 'Without replacement', q: 'A bag has 5 red and 3 green balls. Two balls are drawn without replacement. Find the probability that both are red.', g: ['5 red, 3 green'], c: 'Multiplication rule.', s: [['First red', '5/8.'], ['Second red', '4/7.'], ['Both', '(5/8)(4/7) = 5/14.']], a: '5/14', w: 'The second draw has one fewer red and one fewer ball.', tr: 'Using 5/8 twice.' },
    { t: 'Conditional probability', q: 'Two dice are thrown. Find the probability that the sum is 8 given that the first die shows 3.', g: ['First die 3'], c: 'Restrict the sample space.', s: [['Sample space', 'First die = 3: 6 outcomes.'], ['Favourable', 'Second die = 5: 1 outcome.'], ['Probability', '1/6.']], a: '1/6', w: 'Only outcomes with the first die 3 are relevant.', tr: 'Using 5/36.' },
    { t: 'At least one', q: 'A fair coin is tossed 3 times. Find the probability of getting at least one head.', g: ['3 tosses'], c: 'Complement.', s: [['None', '(1/2)³ = 1/8.'], ['At least one', '1 − 1/8 = 7/8.']], a: '7/8', w: 'Only TTT fails.', tr: 'Adding 1/2 + 1/2 + 1/2.' }
  ],
  short: { title: 'Restrict, multiply, complement', trad: 'List all outcomes.', fast: 'Multiply sequential fractions; restrict the sample space for conditions; use 1 − P(none) for at least one.', rules: ['Independent: multiply.', 'Conditional: restrict.', 'At least: complement.', 'Binomial: nCk pᵏqⁿ⁻ᵏ.'] },
  mist: [['Treating dependent draws as independent', 'Not updating the fraction.', 'Update the numerator and denominator.'], ['Confusing P(A | B) and P(B | A)', 'Using the wrong denominator.', 'The given event is the denominator.'], ['Adding probabilities of overlapping events', 'Ignoring the intersection.', 'Subtract P(A and B).']],
  tips: { sec: 80, elim: 'Probabilities must lie in [0, 1]; for sequential draws the answer is less than each factor.', adv: 'Write the events in words first.', ins: 'Conditional probability leads to Bayes\' theorem.' },
  rev: ['Multiplication rule.', 'Conditional restricts.', 'Binomial formula.', 'At least = complement.', 'Without replacement updates.'],
  qf: ['P(A|B) = P(A∩B)/P(B)', 'nCk pᵏ qⁿ⁻ᵏ'],
  take: ['Define events.', 'Restrict the space.', 'Use complements.', 'Update draws.'],
  self: ['Can I find a draw probability without replacement?', 'Can I compute P(A | B)?', 'Can I use the binomial formula?']
});
const q15 = [
  easy('A bag has 5 red and 3 green balls. Two balls are drawn without replacement. The probability that both are red is', fr(20, 56), ['25/64', '5/8', '3/14'], '(5/8)(4/7) = 20/56 = 5/14.'),
  easy('Two cards are drawn with replacement from a pack. The probability that both are aces is', '1/169', ['1/221', '1/13', '2/13'], '(4/52)² = 1/169.'),
  easy('Two cards are drawn without replacement from a pack. The probability that both are aces is', '1/221', ['1/169', '1/52', '4/663'], '(4/52)(3/51) = 12/2652 = 1/221.'),
  easy('A fair coin is tossed 3 times. The probability of at least one head is', '7/8', ['1/8', '3/4', '1/2'], '1 − 1/8 = 7/8.'),
  easy('A die is thrown twice. The probability that both throws show 6 is', '1/36', ['1/6', '1/12', '1/18'], '(1/6)(1/6) = 1/36.'),
  easy('A card is drawn from a pack of 52. The probability that it is a king or a heart is', '4/13', ['17/52', '1/4', '5/26'], '4/52 + 13/52 − 1/52 = 16/52 = 4/13.'),

  medium('Two dice are thrown. Given that the first shows 3, the probability that the sum is 8 is', '1/6', ['5/36', '1/36', '1/3'], 'The second die must show 5, so the probability is 1/6.'),
  medium('Two dice are thrown. Given that the sum is 8, the probability that the first die shows 3 is', '1/5', ['1/6', '1/36', '5/36'], 'The sum 8 has 5 outcomes and one has the first die 3, so the probability is 1/5.'),
  medium('A fair coin is tossed 3 times. The probability of exactly 2 heads is', '3/8', ['1/8', '1/4', '1/2'], '3C2 × (1/2)³ = 3/8.'),
  medium('From a bag with 4 white and 6 black balls, two are drawn together. The probability that they are of different colours is', fr(24, 45), ['2/5', '12/25', '4/9'], '4 × 6 = 24 of 10C2 = 45: 24/45 = 8/15.'),
  medium('A bag has 6 red and 4 blue balls. Three are drawn without replacement. The probability that all are red is', fr(Cb(6, 3), Cb(10, 3)), ['1/3', '3/10', '1/5'], '6C3/10C3 = 20/120 = 1/6.'),
  medium('A box has 3 defective items among 10. Two are chosen. The probability that neither is defective is', fr(Cb(7, 2), Cb(10, 2)), ['3/10', '2/5', '8/15'], '7C2/10C2 = 21/45 = 7/15.'),
  medium('The probability that a student passes Maths is 0.7 and Physics 0.6, independently. The probability that he passes both is', 0.42, [0.13, 0.3, 0.65], '0.7 × 0.6 = 0.42.'),
  medium('The probability that at least one of two independent events with probabilities 0.5 and 0.4 occurs is', 0.7, [0.2, 0.9, 0.45], '1 − 0.5 × 0.6 = 0.7.'),

  placement('A fair coin is tossed 5 times. The probability of getting exactly 3 heads is', fr(10, 32), ['1/8', '3/16', '1/2'], '5C3/32 = 10/32 = 5/16.'),
  placement('Three cards are drawn from a pack without replacement. The probability that all are hearts is', fr(Cb(13, 3), Cb(52, 3)), ['1/64', '13/850', '3/52'], '13C3/52C3 = 286/22100 = 11/850.'),
  placement('A die is thrown 3 times. The probability of getting at least one six is', fr(91, 216), ['1/2', '125/216', '1/6'], '1 − (5/6)³ = 91/216.'),
  placement('The probability that A hits a target is 1/3 and B hits it is 1/4, independently. The probability that exactly one hits is', fr(5, 12), ['1/12', '1/2', '7/12'], '(1/3)(3/4) + (2/3)(1/4) = 3/12 + 2/12 = 5/12.'),
  placement('A bag has 3 red and 2 blue balls. A ball is drawn and, without replacement, a second is drawn. P(second is red | first is red) is', '1/2', ['3/5', '2/5', '3/10'], 'After removing one red there are 2 reds among 4 balls: 2/4 = 1/2.'),
  placement('Two dice are thrown. The probability that the sum is a prime number is', fr(15, 36), ['1/2', '1/3', '7/18'], 'Sums 2, 3, 5, 7, 11 occur in 1, 2, 4, 6, 2 ways: 15/36 = 5/12.')
];
build(ch15, q15);

// ---------------- Chapter 16 ----------------
const ch16 = C({
  n: 16, id: 'y3-quant-bayes-theorem', cat: 'quant', title: 'Bayes\' Theorem Basics',
  tag: 'Updating a probability after evidence: total probability, tree diagrams and reverse conditioning',
  url: 'https://www.indiabix.com/aptitude/probability/',
  over: 'Bayes\' theorem reverses a conditional probability. If you know how likely an outcome is under each of several causes, it tells you how likely each cause is once the outcome is seen. It uses the law of total probability for the denominator: the overall chance of the outcome across all causes. A tree diagram or a table of counts makes the calculation straightforward.',
  place: 'Bayes-type questions are commonly asked in company aptitude rounds as "a bag is chosen at random and a ball is drawn… find the probability that it came from bag 1".',
  real: 'Diagnosing a disease from a test result, spam filters and fault tracing in manufacturing use the same reasoning.',
  obj: ['Compute the total probability of an event across several causes', 'Apply Bayes\' formula to find the probability of a cause', 'Use a tree diagram or count table to organise the work', 'Interpret test accuracy problems', 'Avoid confusing P(A | B) with P(B | A)'],
  pre: ['Advanced Probability — Conditional and Compound'],
  refresh: 'P(A and B) = P(A) P(B | A) = P(B) P(A | B). Causes are mutually exclusive and cover all possibilities.',
  defs: [
    'Prior probability: the probability of a cause before the evidence.',
    'Likelihood: P(evidence | cause).',
    'Total probability: P(E) = Σ P(Hᵢ) P(E | Hᵢ).',
    'Bayes\' theorem: P(Hⱼ | E) = P(Hⱼ) P(E | Hⱼ) / Σ P(Hᵢ) P(E | Hᵢ).',
    'Posterior probability: the probability of a cause after the evidence.'
  ],
  intu: 'Imagine 1000 trials. Split them among the causes by their priors, then see how many of each cause produce the evidence. Bayes\' answer is simply the share of the evidence cases that came from the cause you ask about.',
  mental: 'Make a count table: take a convenient total, split by priors, apply the likelihoods, and divide the cause\'s count by the total evidence count.',
  formulas: [
    ['Total probability', 'P(E) = Σ P(Hᵢ)P(E | Hᵢ)', 'Sum over causes.', 'Denominator.', '½·(3/5) + ½·(2/5)'],
    ['Bayes', 'P(H | E) = P(H)P(E | H)/P(E)', 'Reverse conditioning.', 'Which cause?', 'P(bag 1 | red)'],
    ['Tree diagram', 'Multiply along branches, add across branches', 'Visual method.', 'Any problem.', 'Two-stage experiment'],
    ['Count table', 'Counts = prior × likelihood × N', 'Choose N to avoid fractions.', 'Test problems.', '1000 people'],
    ['Test accuracy', 'P(disease | positive) = TP ÷ (TP + FP)', 'True and false positives.', 'Medical tests.', '9 true / (9 + 99)']
  ],
  narr: [
    'First find the total probability of the evidence. Bag 1 has 3 red and 2 blue balls; bag 2 has 2 red and 3 blue. A bag is chosen at random and a ball drawn. P(red) = ½ × 3/5 + ½ × 2/5 = 1/2.',
    'Then reverse. The probability that the red ball came from bag 1 is P(bag 1) P(red | bag 1) ÷ P(red) = (½ × 3/5) ÷ (1/2) = 3/5.',
    'Count tables avoid formulas. Take 1000 people, 1% have a disease: 10 have it, 990 do not. A test is positive for 90% of those with the disease (9) and for 10% of those without it (99). A person who tests positive has probability 9/(9 + 99) = 1/12 of having the disease.',
    'A tree diagram multiplies along each path and adds the paths that lead to the evidence. The probability of each cause given the evidence is the path value for that cause divided by the sum of the path values that give the evidence.',
    'Do not confuse the two directions: P(positive | disease) = 0.9 is not P(disease | positive) = 1/12.'
  ],
  deep: [['Base rates', 'A rare cause with an accurate test can still have a low posterior, because false positives from the large healthy group swamp the true positives.'], ['Sequential updating', 'The posterior after one piece of evidence becomes the prior for the next.']],
  vars: [['Which bag?', 'Reverse a draw.', 'Red ball'], ['Medical test', 'False positives.', '1% prevalence'], ['Machines and defects', 'Which machine?', 'Defective item'], ['Tree diagrams', 'Multiply and add.', 'Two-stage'], ['Count tables', 'Convenient N.', '1000 people']],
  ex: [
    { t: 'Which bag?', q: 'Bag 1 has 3 red and 2 blue balls and bag 2 has 2 red and 3 blue. A bag is chosen at random and a red ball is drawn. Find the probability that it came from bag 1.', g: ['Bag 1: 3R 2B', 'Bag 2: 2R 3B'], c: 'Bayes.', s: [['P(red)', '½ × 3/5 + ½ × 2/5 = 1/2.'], ['P(bag 1 and red)', '½ × 3/5 = 3/10.'], ['Divide', '(3/10) ÷ (1/2) = 3/5.']], a: '3/5', w: 'Bag 1 has more reds.', tr: 'Answering 1/2 (the prior).' },
    { t: 'Medical test', q: '1% of people have a disease. A test is positive for 90% of the sick and for 10% of the healthy. What is the probability that a person who tests positive is sick?', g: ['1%', '90%', '10%'], c: 'Count table with 1000 people.', s: [['Sick', '10 people; 9 test positive.'], ['Healthy', '990 people; 99 test positive.'], ['Posterior', '9/(9 + 99) = 1/12.']], a: '1/12', w: 'False positives from the large healthy group dominate.', tr: 'Answering 90%.' },
    { t: 'Machine and defect', q: 'Machine A makes 60% of items with 2% defective, machine B makes 40% with 5% defective. An item is found defective. What is the probability that it was made by A?', g: ['A 60%, 2%', 'B 40%, 5%'], c: 'Bayes.', s: [['P(defective)', '0.6 × 0.02 + 0.4 × 0.05 = 0.012 + 0.020 = 0.032.'], ['P(A and defective)', '0.012.'], ['Posterior', '0.012/0.032 = 3/8.']], a: '3/8', w: 'B has the higher defect rate, so it is more likely.', tr: 'Answering 60%.' }
  ],
  short: { title: 'Count table', trad: 'Substitute into the formula.', fast: 'Take N = 1000 (or a multiple), split by priors, apply likelihoods, and divide the cause count by the evidence total.', rules: ['Prior × likelihood.', 'Denominator = total of all causes.', 'Direction matters.', 'Check posteriors sum to 1.'] },
  mist: [['Using the prior as the answer', 'Ignoring the evidence.', 'Compute the posterior.'], ['Wrong denominator', 'Using the likelihood of one cause.', 'Add over all causes.'], ['Swapping conditional directions', 'P(E | H) vs P(H | E).', 'State which is given.']],
  tips: { sec: 100, elim: 'The posteriors of all causes must sum to 1.', adv: 'Use a count table with N = 1000 or 10000.', ins: 'Bayes questions look hard but are two multiplications and a division.' },
  rev: ['Priors and likelihoods.', 'Total probability.', 'Bayes.', 'Count table.', 'Check sum to 1.'],
  qf: ['P(H|E) = P(H)P(E|H)/ΣP(Hᵢ)P(E|Hᵢ)'],
  take: ['Reverse conditioning.', 'Count tables help.', 'Base rates matter.', 'Check the sum.'],
  self: ['Can I find P(bag 1 | red)?', 'Can I interpret a test result?', 'Can I build a count table?']
});
const q16 = [
  easy('Bag 1 has 3 red and 2 blue balls, bag 2 has 2 red and 3 blue. A bag is chosen at random and a ball drawn. The probability that it is red is', '1/2', ['2/5', '3/5', '3/10'], '½ × 3/5 + ½ × 2/5 = 1/2.'),
  easy('In the same experiment, if the ball is red, the probability that it came from bag 1 is', '3/5', ['1/2', '2/5', '3/10'], '(3/10) ÷ (1/2) = 3/5.'),
  easy('A coin is chosen at random from a fair coin and a two-headed coin and tossed. The probability of heads is', '3/4', ['1/2', '2/3', '1/4'], '½ × ½ + ½ × 1 = 3/4.'),
  easy('In the previous experiment, if the toss shows heads, the probability that the coin is two-headed is', '2/3', ['1/2', '3/4', '1/3'], '(½ × 1) ÷ (3/4) = 2/3.'),
  easy('Two boxes: box A has 1 white and 3 black balls; box B has 3 white and 1 black. A box is chosen at random and a ball is drawn. The probability that it is white is', '1/2', ['1/4', '3/4', '3/8'], '½ × 1/4 + ½ × 3/4 = 1/2.'),
  easy('If the ball in the previous question is white, the probability that it came from box B is', '3/4', ['1/2', '1/4', '3/8'], '(½ × 3/4) ÷ (1/2) = 3/4.'),

  medium('1% of people have a disease. A test is positive for 90% of the sick and 10% of the healthy. The probability that a person who tests positive is sick is', '1/12', ['9/10', '1/10', '1/11'], 'Per 1000: 9 true and 99 false positives: 9/108 = 1/12.'),
  medium('Machine A makes 60% of items with 2% defective, machine B makes 40% with 5% defective. An item is defective. The probability it was made by A is', '3/8', ['3/5', '5/8', '1/4'], '0.012/0.032 = 3/8.'),
  medium('In the same factory, the overall defect rate is', 0.032, [0.035, 0.07, 0.016], '0.6 × 0.02 + 0.4 × 0.05 = 0.032.'),
  medium('A box has 2 red and 3 green balls. A second box has 4 red and 1 green. A box is chosen at random and a red ball is drawn. The probability that it came from the second box is', '2/3', ['4/5', '1/2', '3/5'], 'P(red) = ½ × 2/5 + ½ × 4/5 = 3/5. Posterior = (½ × 4/5)/(3/5) = 2/3.'),
  medium('A pack contains 52 cards. One card is lost. Then one card drawn is a heart. The probability that the lost card was a heart is', fr(12, 51), ['1/4', '13/52', '1/13'], 'P(lost heart) × P(heart | lost heart) ÷ P(heart) = (1/4)(12/51) ÷ (1/4) = 12/51 = 4/17.'.replace('= 12/51 = 4/17', '= 4/17')),
  medium('Urn I has 2 white and 1 black ball; urn II has 1 white and 2 black. An urn is picked at random and a black ball is drawn. The probability it was urn II is', '2/3', ['1/3', '1/2', '3/4'], 'P(black) = ½ × 1/3 + ½ × 2/3 = 1/2. Posterior = (½ × 2/3)/(1/2) = 2/3.'),
  medium('Three machines make 50%, 30% and 20% of items with defect rates 1%, 2% and 3%. The overall defect rate is', 0.017, [0.02, 0.06, 0.015], '0.005 + 0.006 + 0.006 = 0.017.'),
  medium('For the same factory, if an item is defective, the probability that it came from the third machine is', fr(6, 17), ['1/5', '1/3', '3/10'], '0.006/0.017 = 6/17.'),

  placement('A test for a disease has 99% sensitivity and 99% specificity. If 1% of people have the disease, a person who tests positive is sick with probability', '1/2', ['99/100', '1/100', '2/3'], 'Per 10000: 99 true positives and 99 false positives: 99/198 = 1/2.'),
  placement('A student knows the answer to 60% of the questions; otherwise he guesses among 4 choices. He answers a question correctly. The probability that he knew the answer is', '6/7', ['3/5', '5/6', '2/3'], 'P(correct) = 0.6 + 0.4 × 0.25 = 0.7. Posterior = 0.6/0.7 = 6/7.'.replace('0.6/0.7 = 6/7', '0.6/0.7 = 6/7, so the answer is 6/7')),
  placement('A coin is biased; P(heads) = 3/4. It is tossed twice and shows two heads. The probability that the coin was the biased one, when a fair coin and this biased coin are equally likely a priori, is', '9/13', ['1/2', '3/4', '4/9'], 'P(HH) = ½(1/4) + ½(9/16) = 13/32. Posterior = (9/32)/(13/32) = 9/13.'),
  placement('Of the people in a town, 40% are men and 60% are women. 5% of the men and 1% of the women are colour-blind. A person is colour-blind. The probability that the person is a man is', fr(20, 26), ['1/3', '1/2', '5/6'], '0.02/(0.02 + 0.006) = 10/13.'.replace('10/13.', '10/13.')),
  placement('Box A has 3 white and 1 black; box B has 1 white and 3 black. A box is chosen at random, a ball drawn, and it is white. A second ball is drawn from the same box without replacing the first. The probability that the second is also white is', fr(5, 16).replace('5/16', '1/2'), ['3/8', '5/8', '7/16'], 'Posterior of A = (3/8)/(1/2) = 3/4, of B = 1/4. P(second white) = 3/4 × 2/3 + 1/4 × 0 = 1/2.'),
  placement('Two urns contain 4 red + 6 blue and 7 red + 3 blue balls. One urn is chosen at random and a ball is drawn, which is red. The probability that it came from the second urn is', fr(7, 11), ['1/2', '3/5', '4/11'], 'P(red) = ½(4/10) + ½(7/10) = 11/20. Posterior = (7/20)/(11/20) = 7/11.')
];
build(ch16, q16);
