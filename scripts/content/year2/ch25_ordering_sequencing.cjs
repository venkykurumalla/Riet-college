const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-lr-ordering-sequencing', year: 2, category: 'Advanced Logical Reasoning', num: 25, difficulty: 'Intermediate',
  title: 'Ordering and Sequencing',
  tagline: 'Year 2 — Ranking by comparisons, dictionary order, logical sequences and day problems',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/verbal-reasoning/logical-sequence-of-words/',
  overview: 'Ordering questions give you a few comparisons (A is taller than B; C is lighter than D) and ask who is tallest, lightest or in the middle. Sequencing questions ask you to arrange words in dictionary order, in a logical order (stages of a process, units of size) or by the day of the week. The key skill is to combine the comparisons into one ordered line and to read the answer from it.',
  placement: 'Ordering and sequencing questions are commonly asked in company reasoning rounds. They are quick if you build the full line before answering.',
  realWorld: 'Ranking candidates, scheduling events, ordering steps in a process and calendar calculations use these methods.',
  objectives: [
    'Combine several comparisons into a single ordered line',
    'Identify the highest, lowest, nth and middle person',
    'Arrange words in dictionary order and logical order',
    'Solve day-of-the-week and calendar problems',
    'Detect when the information is insufficient'
  ],
  prereq: ['Ranking and Position Basics', 'Alphabetical Reasoning'],
  refresher: 'The seven days repeat every 7 days; dividing a number of days by 7 gives the remainder shift. Dictionary order compares letters left to right.',
  defs: [
    'Order: the arrangement of items by a property such as height, age, weight or speed.',
    'Transitivity: if A > B and B > C then A > C.',
    'Dictionary (alphabetical) order: compare the first letters, then the second, and so on; a shorter word that is the start of a longer one comes first.',
    'Logical sequence: arrangement by natural order of stages (seed, plant, flower, fruit) or size (village, district, state).',
    'Odd days: remainder when the number of days is divided by 7.'
  ],
  intuition: 'Each comparison is a link in a chain. Join the links wherever they share a person, and you get a single line. If two pieces cannot be joined, the order between them is undetermined.',
  mental: 'Write the comparisons as symbols (A > B). Combine them into one line from highest to lowest. Then read off whichever position the question asks.',
  formulas: [
    ['Chaining comparisons', 'A > B and B > C ⇒ A > B > C', 'Transitivity.', 'Ordering questions.', 'E > A > B > C > D'],
    ['Position in the line', 'nth from the top = (total − n + 1)th from the bottom', 'Counting from either end.', 'nth tallest, nth shortest.', '2nd tallest of 5 = 4th shortest'],
    ['Dictionary order', 'Compare letter by letter; shorter prefix first', 'Left to right.', 'Alphabetical arrangement.', 'Tab, Tabby, Table, Tablet'],
    ['Odd days', 'Days later = number of days mod 7', 'Add to the weekday.', 'Calendar problems.', '59 days → 3 odd days'],
    ['Logical sequences', 'Order by size, time or process', 'Use natural order.', 'Word sequences.', 'Village < District < State < Country < Continent']
  ],
  narrative: [
    'Write each comparison as a symbol and chain them. A taller than B, C shorter than B but taller than D, and E the tallest gives E > A > B > C > D. The second tallest is A, the middle person is B.',
    'If a piece does not connect, the order is not determined. If you know only A > B and C > D, you cannot compare A with C. A good question will always give enough links for the asked position.',
    'For dictionary order, compare the first letters, then the second letters and so on. A shorter word that is the start of a longer word comes first. So Tab, Tabby, Table, Tablet is the correct order.',
    'For days of the week, find the number of days between the dates, divide by 7 and add the remainder to the weekday. If 15 August is a Thursday, 26 August is 11 days later; 11 mod 7 = 4, and Thursday + 4 days is Monday. January has 31 days and February 28, so 1 March is 59 days after 1 January, a shift of 3 days.',
    'For logical sequences, use the natural order: egg, larva, pupa, adult; village, district, state, country, continent. Decide whether the question asks for the order by size, time or process.'
  ],
  deep: [
    ['Insufficient data', 'If the comparisons do not link everything, the question may be unanswerable. In exams, the option "cannot be determined" is usually present for this case.'],
    ['Leap years', 'In a leap year February has 29 days. A leap year has 366 days, which is 2 odd days.']
  ],
  variations: [
    ['Height, weight, age comparisons', 'Chain the symbols.', 'A > B, C < B'],
    ['Position in the line', 'nth from the top.', '2nd tallest'],
    ['Dictionary order', 'Alphabetical.', 'Cat, Cart, Car, Cab'],
    ['Day and date problems', 'Odd days.', '15 Aug is Thursday'],
    ['Logical sequences', 'Size or time.', 'Egg, larva, pupa, adult']
  ],
  examples: [
    {
      title: 'Chaining comparisons',
      q: 'A is taller than B. C is shorter than B but taller than D. E is the tallest. Who is the second tallest?',
      given: ['A > B', 'B > C > D', 'E tallest'],
      concept: 'Chain into one line.',
      steps: [['Combine', 'A > B > C > D.'], ['Add E', 'E > A > B > C > D.'], ['Second tallest', 'A.']],
      ans: 'A', why: 'E is first, so the second is the tallest of the rest.', trap: 'Choosing B.'
    },
    {
      title: 'Dictionary order',
      q: 'Arrange Cat, Cart, Car and Cab in dictionary order. Which comes last?',
      given: ['Cat, Cart, Car, Cab'],
      concept: 'Compare letter by letter.',
      steps: [['Common start', 'All start with C. Second letter a.'], ['Third letters', 'b < r < r < t, so Cab first, then Car and Cart, and Cat last.'], ['Car vs Cart', 'Car is a prefix of Cart, so Car comes first.']],
      ans: 'Cat', why: 'Order: Cab, Car, Cart, Cat.', trap: 'Treating Cart as before Car.'
    },
    {
      title: 'Day of the week',
      q: '1 January 2021 was a Friday. What day was 1 March 2021?',
      given: ['Jan 31 days, Feb 28 days'],
      concept: 'Odd days.',
      steps: [['Days between', '31 + 28 = 59 days.'], ['Remainder', '59 ÷ 7 leaves 3.'], ['Weekday', 'Friday + 3 = Monday.']],
      ans: 'Monday', why: '2021 is not a leap year.', trap: 'Counting February as 29 days.'
    }
  ],
  shortcut: {
    title: 'Symbol line',
    trad: 'Reason in words each time.',
    fast: 'Write each statement as a > b, chain them into one line, and count positions.',
    rules: ['Chain through common names.', 'Dictionary: prefix first.', 'Days: remainder of days ÷ 7.', 'Check enough data exists.']
  },
  mistakes: [
    ['Reversing the order', 'Reading "taller" as "shorter".', 'Write symbols.'],
    ['Skipping a link', 'Missing a comparison.', 'Use every statement.'],
    ['Wrong odd days', 'Forgetting the month length.', 'Count carefully.'],
    ['Ignoring ties', 'Assuming strict order.', 'Read for "same as".']
  ],
  tips: { sec: 50, elim: 'Test options against every given comparison.', advice: 'Build the whole line first.', insight: 'Calendar questions use odd days.' },
  revision: ['Chain comparisons.', 'nth from top.', 'Dictionary order.', 'Odd days.', 'Logical sequences.'],
  quickFormulas: ['n-th from top = (N − n + 1)-th from bottom', 'Days mod 7'],
  takeaways: ['One line.', 'Symbols.', 'Odd days.', 'Check data.'],
  selfCheck: ['Can I chain five comparisons?', 'Can I arrange words alphabetically?', 'Can I find a weekday?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Ranking, order and calendar topic areas; examples are original.']]
};

const quiz = [
  easy('A is taller than B, and B is taller than C. Who is the tallest?', 'A', ['B', 'C', 'Cannot be determined'], 'A > B > C, so A is the tallest.'),
  easy('P is heavier than Q and R is lighter than Q. Who is the lightest?', 'R', ['P', 'Q', 'Cannot be determined'], 'P > Q > R, so R is the lightest.'),
  easy('Which of these words comes first in dictionary order: Table, Tablet, Tab, Tabby?', 'Tab', ['Tabby', 'Table', 'Tablet'], 'Tab is a prefix of the others and comes first: Tab, Tabby, Table, Tablet.'),
  easy('If the day after tomorrow is Friday, the day before yesterday was', 'Monday', ['Sunday', 'Tuesday', 'Wednesday'], 'Today is Wednesday. The day before yesterday was Monday.'),
  easy('If the 5th of a month is a Monday, the 12th of that month is a', 'Monday', ['Tuesday', 'Sunday', 'Saturday'], '12 − 5 = 7 days later, the same weekday.'),
  easy('Which is the correct order of the life cycle of a butterfly?', 'Egg, larva, pupa, adult', ['Egg, pupa, larva, adult', 'Larva, egg, pupa, adult', 'Egg, adult, larva, pupa'], 'A butterfly develops from an egg to a larva (caterpillar), then a pupa, then an adult.'),

  medium('A is taller than B. C is shorter than B but taller than D. E is the tallest. The second tallest is', 'Person A', ['Person B', 'Person C', 'Person D'], 'E > A > B > C > D, so A is second.'),
  medium('P is richer than Q, R is richer than P and S is poorer than Q. The second richest is', 'P', ['Q', 'R', 'S'], 'R > P > Q > S, so P is second.'),
  medium('Arrange Planet, Plane, Plant and Plain in dictionary order. The third word is', 'Planet', ['Plain', 'Plane', 'Plant'], 'Plain, Plane, Planet, Plant. The third is Planet.'),
  medium('Arrange: 1. Bath 2. Wake up 3. Breakfast 4. Go to school. The correct order is', '2, 1, 3, 4', ['1, 2, 3, 4', '2, 3, 1, 4', '3, 2, 1, 4'], 'The order is 2, 1, 3, 4: wake up, bath, breakfast, go to school.'),
  medium('A is older than B, C is younger than B and D is older than A. The youngest is', 'Person C', ['Person A', 'Person B', 'Person D'], 'D > A > B > C. C is the youngest.'),
  medium('If the day before yesterday was Thursday, tomorrow will be', 'Sunday', ['Friday', 'Saturday', 'Monday'], 'Today is Saturday, so tomorrow is Sunday.'),
  medium('D is taller than E but shorter than A. B is taller than A. C is shorter than E. The person in the middle by height is', 'D', ['A', 'E', 'B'], 'B > A > D > E > C. The middle (third) is D.'),
  medium('Arrange Cat, Cart, Car and Cab in dictionary order. The last word is', 'Cat', ['Cab', 'Car', 'Cart'], 'Cab, Car, Cart, Cat.'),

  placement('A is faster than B, C is slower than D, B is faster than D and E is faster than A. The third fastest is', 'Person B', ['Person A', 'Person D', 'Person C'], 'E > A > B > D > C. The third is B.'),
  placement('1 January 2021 was a Friday. 1 March 2021 was a', 'Monday', ['Sunday', 'Tuesday', 'Wednesday'], 'Days between = 31 + 28 = 59, which leaves 3 when divided by 7. Friday + 3 = Monday.'),
  placement('Heights: A = 150 cm, B = 165 cm, C = 158 cm, D = 160 cm, E = 170 cm. Arranged in increasing order, D is at position', 'third', ['second', 'fourth', 'fifth'], 'A 150, C 158, D 160, B 165, E 170. D is third.'),
  placement('P is heavier than Q and R. S is lighter than Q but heavier than T. T is heavier than R. The second lightest is', 'T', ['S', 'R', 'Q'], 'P > Q > S > T > R. The second lightest is T.'),
  placement('Arranged in decreasing order of size: Village, District, State, Country, Continent. The third is', 'State', ['Country', 'District', 'Continent'], 'Continent > Country > State > District > Village. The third is State.'),
  placement('15 August 2024 was a Thursday. 26 August 2024 was a', 'Monday', ['Sunday', 'Tuesday', 'Saturday'], '11 days later; 11 leaves 4 when divided by 7. Thursday + 4 = Monday.')
];
build(chapter, quiz);
