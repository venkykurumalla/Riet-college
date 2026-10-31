const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-pipes-cisterns', year: 2, category: 'Advanced Quantitative Aptitude', num: 10, difficulty: 'Intermediate',
  title: 'Pipes and Cisterns',
  tagline: 'Year 2 — Inlet pipes, outlet pipes and leaks as positive and negative work rates',
  minutes: 45,
  overview: 'Pipes and cisterns is time and work with water. An inlet pipe fills a tank (positive rate) and an outlet pipe or leak empties it (negative rate). A pipe that fills a tank in n hours does 1/n of the tank per hour. When several pipes work together, add their rates, with a minus sign for outlets.',
  placement: 'Pipes and cisterns questions are commonly asked in company aptitude rounds. They look different from time-and-work but use the same method.',
  realWorld: 'Filling and draining swimming pools, water tanks with leaks and reservoirs with inlets and outlets are real examples.',
  objectives: [
    'Convert fill and empty times into rates',
    'Combine inlet and outlet pipes',
    'Handle a leak that makes the filling time longer',
    'Solve problems where pipes are opened and closed at different times',
    'Compute the time to fill or empty a given fraction of the tank'
  ],
  prereq: ['Time and Work', 'Fractions and Decimals'],
  refresher: 'Rate of an inlet = 1/time to fill. Rate of an outlet = −1/time to empty. Net rate = sum of rates.',
  defs: [
    'Inlet: a pipe that fills the tank. Outlet: a pipe that empties it.',
    'Leak: an unintended outlet at the bottom.',
    'Net rate: sum of inlet rates minus outlet rates.',
    'Cistern: a tank or reservoir holding water.',
    'Capacity: the volume of the tank (total work = 1).'
  ],
  intuition: 'A tank is a job; an inlet works towards it and an outlet works against it. If the net rate is positive the tank fills, and if negative it empties. The time to complete is 1 divided by the size of the net rate.',
  mental: 'Take the capacity as the LCM of all the times. Then each pipe does a whole number of litres per hour and the net rate is simple arithmetic.',
  formulas: [
    ['Rate', 'Inlet = +1/n,  Outlet = −1/n', 'n is the time to fill or empty alone.', 'Every pipe.', 'Fills in 6 h → +1/6'],
    ['Net rate', 'Net = Σ inlets − Σ outlets', 'Positive fills, negative empties.', 'Several pipes together.', '1/6 − 1/10 = 1/15'],
    ['Time together', 'T = 1 ÷ Net', 'Fills or empties the whole tank.', 'Combined questions.', 'Net 1/15 → 15 hours'],
    ['Leak', 'Leak rate = 1/fill − 1/(fill with leak)', 'The pipe alone vs with leak.', '"Takes 2 hours longer with leak".', '1/6 − 1/7.5 = 1/30 → empties in 30 h'],
    ['Partly open', 'Work done = Σ(rate × time open)', 'Add each pipe\'s contribution.', 'Pipes opened one after another.', 'A 4 h + B 3 h']
  ],
  narrative: [
    'Write each pipe as a rate. A pipe that fills the tank in 10 hours is +1/10 per hour. An outlet that empties in 15 hours is −1/15. With both open the net rate is 1/10 − 1/15 = 1/30 per hour, and the tank is filled in 30 hours.',
    'Use the LCM trick. For fill times 6, 8 and an empty time 12, take capacity 24 litres. Rates are +4, +3 and −2, net +5, so the tank fills in 24 ÷ 5 = 4.8 hours.',
    'A leak makes filling take longer. If a pipe fills the tank in 6 hours but it takes 7.5 hours with the leak, the leak rate is 1/6 − 1/7.5 = 1/30, so the leak alone empties a full tank in 30 hours.',
    'If pipes are opened for different durations, add the work done by each. Pipe A (12 hours) open for 4 hours fills 4/12 = 1/3. Then both A and B (8 hours) run until full.',
    'To find the time for a fraction, divide the fraction by the net rate. Filling half a tank at net rate 1/30 takes (1/2) ÷ (1/30) = 15 hours.'
  ],
  deep: [
    ['Pipes with different diameters', 'Sometimes the problem says pipe A is twice as fast as B. Then the rates are in the ratio 2 : 1. Use the ratio to find the individual times.'],
    ['Negative net rate', 'If the outlet is faster than the inlet, the net rate is negative and the tank empties; the "time to fill" is meaningless. The time to empty is 1 ÷ |net|.']
  ],
  variations: [
    ['Inlets only', 'Add the rates.', 'Fill times 10 and 15'],
    ['Inlet and outlet', 'Subtract.', 'Fill 10, empty 15'],
    ['Leak', 'Find the leak rate.', 'Takes 7.5 h with a leak'],
    ['Opened at different times', 'Add partial work.', 'A opened 4 h earlier'],
    ['Fraction of the tank', 'Divide by net rate.', 'Fill half the tank']
  ],
  examples: [
    {
      title: 'Inlet and outlet',
      q: 'A pipe can fill a tank in 10 hours and an outlet can empty it in 15 hours. If both are opened together, in how many hours will the tank be full?',
      given: ['Inlet: +1/10', 'Outlet: −1/15'],
      concept: 'Net rate.',
      steps: [['Net', '1/10 − 1/15 = 3/30 − 2/30 = 1/30.'], ['Time', '30 hours.']],
      ans: '30 hours', why: 'The outlet slows down the filling.', trap: 'Adding the rates.'
    },
    {
      title: 'Leak',
      q: 'A tap fills a tank in 6 hours. Because of a leak it takes 7.5 hours. In how many hours would the leak alone empty the full tank?',
      given: ['Tap alone: 6 h', 'With leak: 7.5 h'],
      concept: 'Leak rate = tap rate − net rate.',
      steps: [['Rates', 'Tap = 1/6. Net = 1/7.5 = 2/15.'], ['Leak', '1/6 − 2/15 = 5/30 − 4/30 = 1/30.'], ['Time', '30 hours.']],
      ans: '30 hours', why: 'The leak removes what the tap adds beyond the net.', trap: 'Using 7.5 − 6 = 1.5 hours.'
    },
    {
      title: 'Three pipes',
      q: 'Two pipes can fill a tank in 6 hours and 8 hours, and an outlet can empty it in 12 hours. If all three are opened together, how long to fill the tank?',
      given: ['+1/6, +1/8, −1/12'],
      concept: 'Use the LCM as capacity.',
      steps: [['Capacity 24 units', 'Rates: +4, +3 and −2 units per hour.'], ['Net', '4 + 3 − 2 = 5 units per hour.'], ['Time', '24 ÷ 5 = 4.8 hours.']],
      ans: '4.8 hours', why: 'The net rate is 5/24 of the tank per hour.', trap: 'Ignoring the outlet.'
    }
  ],
  shortcut: {
    title: 'LCM litres',
    trad: 'Add fractions every time.',
    fast: 'Take the LCM of the times as the capacity, compute litres per hour for each pipe, add and subtract, divide.',
    rules: ['Inlet +, outlet −.', 'Leak rate = tap rate − net rate.', 'Time = capacity ÷ net rate.', 'Check that the time with a leak is longer.']
  },
  mistakes: [
    ['Adding an outlet', 'Using + for an outlet.', 'Outlets are negative.'],
    ['Subtracting times', 'Using time differences for the leak.', 'Use rates.'],
    ['Wrong capacity', 'Ignoring the LCM.', 'Pick the LCM.'],
    ['Forgetting partial opening', 'Assuming all pipes open at once.', 'Account for each open time.']
  ],
  tips: { sec: 70, elim: 'With an outlet, the combined fill time must be longer than the inlet alone.', advice: 'Use the LCM method to avoid fractions.', insight: 'Same logic as men and women in time and work.' },
  revision: ['Inlet +, outlet −.', 'Time = 1 ÷ net.', 'LCM capacity.', 'Leak rate.', 'Partial opening.'],
  quickFormulas: ['Net = Σ in − Σ out', 'T = capacity/net'],
  takeaways: ['Signs matter.', 'Use rates.', 'LCM litres.', 'Check reasonableness.'],
  selfCheck: ['Can I find the time with an inlet and outlet?', 'Can I find the leak rate?', 'Can I handle pipes opened at different times?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Pipes and Cistern topic area; examples are original.']]
};

const quiz = [
  easy('A pipe fills a tank in 10 hours and another in 15 hours. Together they fill it in', 6, [5, 7.5, 12.5], '1/10 + 1/15 = 1/6, so 6 hours.'),
  easy('A pipe fills a tank in 12 hours. In 3 hours it fills what fraction of the tank?', '1/4', ['1/3', '1/6', '1/2'], '3/12 = 1/4.'),
  easy('A tank is filled by a pipe in 10 hours and emptied by another in 15 hours. With both open, the tank fills in', 30, [25, 20, 5], '1/10 − 1/15 = 1/30, so 30 hours.'),
  easy('A pipe fills a tank in 6 hours. The tank is filled to half in', 3, [2, 4, 6], 'Half the tank takes half the time: 3 hours.'),
  easy('An outlet empties a full tank in 8 hours. In 2 hours it empties', '1/4', ['1/2', '1/8', '1/3'], '2/8 = 1/4 of the tank.'),
  easy('Two pipes fill a tank in 12 hours and 12 hours. Together they fill it in', 6, [4, 8, 12], 'Rate = 1/12 + 1/12 = 1/6, so 6 hours.'),

  medium('Two pipes fill a tank in 6 and 8 hours, and an outlet empties it in 12 hours. With all three open, the tank fills in', 4.8, [4, 5, 6], 'Capacity 24: +4, +3, −2 per hour. Net 5. Time = 24 ÷ 5 = 4.8 hours.'),
  medium('A tap fills a tank in 6 hours. Because of a leak it takes 7.5 hours. The leak alone would empty the full tank in', 30, [15, 25, 45], 'Leak = 1/6 − 1/7.5 = 1/30. So 30 hours.'),
  medium('Pipe A fills a tank in 12 hours and pipe B in 18 hours. If both are opened together, the time to fill is', 7.2, [6, 7, 8], '1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 hours.'),
  medium('A pipe fills a tank in 4 hours. Because of a leak it takes 5 hours. The leak would empty the full tank in', 20, [9, 16, 25], 'Leak = 1/4 − 1/5 = 1/20, so 20 hours.'),
  medium('Pipe A fills a tank in 20 hours and pipe B in 30 hours. Pipe A is open for the first 10 hours, then both are open. The total time to fill the tank is', 16, [15, 17, 18], 'A fills 1/2 in 10 hours. The remaining 1/2 at rate 1/20 + 1/30 = 1/12 takes 6 hours. Total 16 hours.'),
  medium('An inlet fills a tank in 10 hours and an outlet empties it in 20 hours. Starting empty with both open, the time to fill half the tank is', 10, [5, 15, 20], 'Net = 1/10 − 1/20 = 1/20. Half the tank takes (1/2) ÷ (1/20) = 10 hours.'),
  medium('Pipe A is twice as fast as pipe B. Together they fill a tank in 12 hours. B alone takes', 36, [18, 24, 48], 'Rates A = 2x, B = x, so 3x = 1/12 and x = 1/36. B takes 36 hours.'),
  medium('Three pipes fill a tank in 10, 20 and 30 hours. Together they fill it in (to two decimal places, in hours)', 5.45, [5, 6, 6.5], '1/10 + 1/20 + 1/30 = 11/60. Time = 60/11 ≈ 5.45 hours.'),

  placement('An inlet fills a tank in 8 hours and an outlet empties it in 12 hours. If the tank is half full and both are opened, the time to fill it is', 12, [8, 10, 24], 'Net = 1/8 − 1/12 = 1/24. The remaining half takes (1/2) ÷ (1/24) = 12 hours.'),
  placement('A tank has two inlets that fill it in 20 and 30 hours and a leak that empties it in 60 hours. With the leak, both inlets together fill it in', 15, [12, 18, 20], '1/20 + 1/30 − 1/60 = 3/60 + 2/60 − 1/60 = 4/60 = 1/15. So 15 hours.'),
  placement('Pipes A and B fill a tank in 15 and 20 hours. Both are opened, but B is closed after 6 hours. The tank is filled in a total of', 10.5, [10, 11, 12], 'In 6 hours both fill 6 × (1/15 + 1/20) = 6 × 7/60 = 7/10. The remaining 3/10 by A alone takes (3/10) × 15 = 4.5 hours. Total 10.5 hours.'),
  placement('A cistern is normally filled in 8 hours but takes 2 hours longer because of a leak. A full cistern would be emptied by the leak in', 40, [30, 36, 50], 'Leak = 1/8 − 1/10 = 1/40. So 40 hours.'),
  placement('Pipe A fills a tank in 12 hours and pipe B empties it in 18 hours. Both are open for 6 hours, then B is closed. The time A then needs to fill the remaining tank is', 10, [9, 8, 12], 'In 6 hours the net is 6 × (1/12 − 1/18) = 6 × 1/36 = 1/6. Remaining 5/6 by A alone takes (5/6) × 12 = 10 hours.'),
  placement('Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B fill the rest in 7 hours. C alone can fill the tank in', 14, [10, 12, 16], 'Together in 2 hours they fill 1/3. Remaining 2/3 by A and B in 7 hours: rate = 2/21. C = 1/6 − 2/21 = 7/42 − 4/42 = 3/42 = 1/14, so 14 hours.')
];
build(chapter, quiz);
