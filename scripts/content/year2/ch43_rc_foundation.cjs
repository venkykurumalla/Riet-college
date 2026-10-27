const { easy, medium, placement, build } = require('../lib.cjs');

const PA = 'Passage: Rahul\'s village had no school. Children had to walk five kilometres to the nearest town to study. Many gave up after the primary classes. Rahul, however, was determined. He woke up at five every day, walked to school, and returned home in the evening to help his father on the farm. His teachers admired his dedication.';
const PB = 'Passage: Plastic is useful because it is cheap, light and durable. But its durability is also its greatest problem. Plastic does not decay for hundreds of years, so waste collects in landfills and oceans. Marine animals mistake it for food and die. Many countries are therefore encouraging recycling and the use of cloth bags.';
const PC = 'Passage: Sleep is as important as food for health. During sleep the body repairs itself and the brain stores what was learned during the day. Students who sleep less than six hours often find it hard to concentrate. Doctors recommend seven to eight hours of sleep for most adults.';
const PD = 'Passage: When the factory opened in the town, many people welcomed it because it created jobs. Within a few years, however, the river that flowed near it turned dark and the fish began to die. Villagers complained, but the owners argued that the factory was essential for the town\'s economy. After a long dispute, the court ordered the factory to install a treatment plant.';
const PE = 'Passage: Honesty is often described as the best policy, but it is not always the easiest. A person who tells the truth may sometimes lose a friend or an opportunity. Yet in the long run, honest people earn trust, and trust is more valuable than any single gain. The cost of dishonesty, on the other hand, is that nobody believes you even when you speak the truth.';
const q = (p, text) => p + '\n\n' + text;

const chapter = {
  id: 'y2-verbal-rc-foundation', year: 2, category: 'Advanced Verbal Ability', num: 43, difficulty: 'Intermediate',
  title: 'Reading Comprehension Foundation',
  tagline: 'Year 2 — Reading a short passage and answering factual, vocabulary, inference and main-idea questions',
  minutes: 55,
  morePractice: 'https://www.indiabix.com/verbal-ability/reading-comprehension/',
  overview: 'Reading comprehension (RC) tests whether you can understand a passage and answer questions about it. Question types are factual (what the passage says), vocabulary-in-context (what a word means here), inference (what must be true because of what is said), main idea (what the passage is mostly about) and tone or purpose. At this level the passages are short, and the answers can be checked against the text. The golden rule: answer from the passage, not from your own opinion.',
  placement: 'Reading comprehension is commonly asked in the verbal ability section of company aptitude rounds, and it is the most heavily weighted verbal skill because it reflects real reading ability.',
  realWorld: 'Understanding emails, reports and instructions quickly and accurately depends on the same skills.',
  objectives: [
    'Identify the main idea of a passage',
    'Locate factual details quickly',
    'Infer meanings from context and from what is stated',
    'Recognise the author\'s tone and purpose',
    'Eliminate options that go beyond the passage'
  ],
  prereq: ['Contextual Vocabulary', 'Paragraph Completion'],
  refresher: 'A passage has a main idea, supporting details and a tone. Signal words (however, therefore, on the other hand) show how ideas are related.',
  defs: [
    'Main idea: the central point of the passage.',
    'Supporting detail: a fact or example that supports the main idea.',
    'Inference: a conclusion that must follow from what is stated, but is not stated directly.',
    'Vocabulary in context: the meaning of a word as used in the passage.',
    'Tone: the author\'s attitude (admiring, critical, neutral, worried).'
  ],
  intuition: 'The passage contains every answer you need. Read once for the main idea, then use the question to look back for the evidence. If you cannot point to a line that supports an option, the option is not safe.',
  mental: 'Read the passage and summarise it in one line. For each question, find the line that supports the answer. For inference, ask "what must be true?"; for vocabulary, test the word in the sentence.',
  formulas: [
    ['Main idea check', 'The correct option covers the whole passage, not just one detail', 'Reject too narrow and too broad options.', 'Main idea questions.', 'Plastic is useful but harmful'],
    ['Fact check', 'Find the line that states it', 'Evidence in the text.', 'Factual questions.', '"five kilometres"'],
    ['Inference check', 'It must be true given the passage', 'Not just possible.', 'Inference questions.', 'Poor sleep → concentration problems'],
    ['Vocabulary check', 'Substitute the meaning into the sentence', 'Use context.', 'Meaning questions.', 'determined = firm in purpose'],
    ['Extreme-word filter', 'Reject options with always, never, all, only unless the passage uses them', 'Passages are measured.', 'Wrong options.', 'Not "all villagers moved away"']
  ],
  narrative: [
    'Read the passage once, quickly, for its structure. In the passage about Rahul, the idea is that Rahul was determined to study despite the distance. The main details are the distance (five kilometres), his routine and his teachers\' admiration.',
    'For factual questions, scan for the key words of the question. "How far was the nearest school?" points to "five kilometres". Do not rely on memory; check the line.',
    'For vocabulary questions, substitute each option into the sentence. "Rahul, however, was determined" contrasts with children who gave up, so determined means firm in purpose.',
    'For inference questions, choose the option that must be true. "Students who sleep less than six hours often find it hard to concentrate" lets us infer that a student who sleeps only four hours is likely to find it hard to concentrate.',
    'For main idea and tone questions, avoid options that are too narrow (one detail) or too broad (beyond the passage). For the factory passage the main idea is the conflict between economic benefit and environmental damage.'
  ],
  deep: [
    ['Passage structure', 'Many passages follow: idea, problem, response. Signal words such as however and therefore mark the turns.'],
    ['Reading speed', 'Aim to read at a steady pace and use the questions as a guide. Rereading the whole passage for every question wastes time.']
  ],
  variations: [
    ['Factual', 'What the passage says.', 'How far was the school?'],
    ['Vocabulary in context', 'Meaning here.', 'Determined'],
    ['Inference', 'Must be true.', 'Student who sleeps four hours'],
    ['Main idea', 'Whole passage.', 'Plastic is useful but harmful'],
    ['Tone and purpose', 'Attitude.', 'Honesty is valuable']
  ],
  examples: [
    {
      title: 'Factual',
      q: PA + '\n\nHow far did the children have to walk to study?',
      given: ['Passage about Rahul'],
      concept: 'Find the line.',
      steps: [['Scan for the key words', 'The question asks about distance to school.'], ['Locate the line', '"Five kilometres to the nearest town".']],
      ans: 'Five kilometres', why: 'Stated directly.', trap: 'Choosing a number from memory.'
    },
    {
      title: 'Vocabulary in context',
      q: PA + '\n\nIn the passage, the word "determined" means',
      given: ['Determined'],
      concept: 'Context.',
      steps: [['Contrast', 'Many gave up; Rahul was determined.'], ['Meaning', 'firm in purpose.']],
      ans: 'firm in purpose', why: 'It contrasts with giving up.', trap: 'Choosing a similar-sounding word.'
    },
    {
      title: 'Inference',
      q: PC + '\n\nA student who sleeps only four hours a night is most likely to',
      given: ['Sleep passage'],
      concept: 'Must be true.',
      steps: [['Evidence', 'Less than six hours → hard to concentrate.'], ['Inference', 'Four hours → hard to concentrate.']],
      ans: 'find it hard to concentrate', why: 'The passage links short sleep to poor concentration.', trap: 'Choosing an unsupported claim.'
    }
  ],
  shortcut: {
    title: 'Evidence in the text',
    trad: 'Rely on memory and general knowledge.',
    fast: 'Summarise the passage in one line, then for each question find the line that supports the answer and reject extreme options.',
    rules: ['Use only the passage.', 'Find the line.', 'Reject extremes.', 'Main idea covers all.']
  },
  mistakes: [
    ['Using outside knowledge', 'Answering from opinion.', 'Use the passage.'],
    ['Choosing a narrow main idea', 'One detail.', 'Cover the whole passage.'],
    ['Accepting extreme options', 'Always/never.', 'Prefer measured statements.'],
    ['Not checking the line', 'Memory errors.', 'Look back.']
  ],
  tips: { sec: 150, elim: 'Eliminate options that contradict a line in the passage.', advice: 'Read the questions first on long passages.', insight: 'Wrong options are usually partly true but not supported.' },
  revision: ['Main idea.', 'Find the line.', 'Inference must be true.', 'Substitute for vocabulary.', 'Reject extremes.'],
  quickFormulas: ['Evidence in the text'],
  takeaways: ['Passage only.', 'Evidence.', 'Substitute.', 'Whole-passage idea.'],
  selfCheck: ['Can I state the main idea in one line?', 'Can I find a fact quickly?', 'Can I make a safe inference?'],
  sources: [['Objective General English — S.P. Bakshi', 'Textbook', 'Reading comprehension practice; passages in this chapter are original.']]
};

const quiz = [
  easy(q(PA, 'How far did the children have to walk to reach the nearest school?'), 'Five kilometres', ['Three kilometres', 'Ten kilometres', 'Fifty metres'], 'The passage says they walked five kilometres to the nearest town.'),
  easy(q(PA, 'Why did many children give up their studies after the primary classes?'), 'The nearest school was far away', ['They were not intelligent', 'Their teachers were unkind', 'They had to go abroad'], 'The distance to the school is the reason implied by the passage.'),
  easy(q(PB, 'Which of the following is NOT given as a reason why plastic is useful?'), 'It decays quickly', ['It is cheap', 'It is light', 'It is durable'], 'The passage says plastic does not decay for hundreds of years.'),
  easy(q(PC, 'According to the passage, sleep is as important as'), 'food', ['exercise', 'money', 'study'], 'The first sentence says sleep is as important as food for health.'),
  easy(q(PD, 'Why did many people welcome the factory when it opened?'), 'It created jobs', ['It cleaned the river', 'It sold cheap fish', 'It built a school'], 'The passage says they welcomed it because it created jobs.'),
  easy(q(PE, 'According to the author, honest people earn'), 'trust', ['wealth', 'fame', 'power'], 'The passage says honest people earn trust in the long run.'),

  medium(q(PA, 'In the passage, the word "determined" means'), 'firm in purpose', ['lazy', 'afraid', 'confused'], 'Rahul contrasts with those who gave up, so determined means firm in purpose.'),
  medium(q(PA, 'Which of the following best describes Rahul?'), 'Hard-working and dedicated', ['Careless and lazy', 'Rich and proud', 'Shy and weak'], 'He walked daily, helped his father and was admired by his teachers.'),
  medium(q(PB, 'The main idea of the passage is that'), 'plastic is useful but harms the environment, so alternatives are being encouraged', ['plastic should be produced more', 'marine animals like plastic', 'cloth bags are expensive'], 'The passage presents both the usefulness and the harm of plastic and the response.'),
  medium(q(PB, 'Why is the durability of plastic a problem?'), 'Plastic waste stays for hundreds of years', ['Plastic breaks easily', 'Plastic is too light', 'Plastic is cheap'], 'The passage states that plastic does not decay for hundreds of years.'),
  medium(q(PB, 'What do marine animals do with plastic, according to the passage?'), 'They mistake it for food', ['They use it as shelter', 'They avoid it', 'They recycle it'], 'The passage says marine animals mistake it for food and die.'),
  medium(q(PC, 'What does the brain do during sleep, according to the passage?'), 'It stores what was learned during the day', ['It stops working', 'It forgets everything', 'It grows taller'], 'The passage says the brain stores what was learned during the day.'),
  medium(q(PC, 'A student who sleeps only four hours a night is most likely to'), 'find it hard to concentrate', ['score full marks', 'need no food', 'feel fully rested'], 'The passage links sleeping fewer than six hours to difficulty in concentrating.'),
  medium(q(PC, 'How many hours of sleep do doctors recommend for most adults?'), 'Seven to eight hours', ['Four to five hours', 'Ten to twelve hours', 'Two hours'], 'The last sentence gives seven to eight hours.'),

  placement(q(PD, 'The passage mainly deals with'), 'the conflict between economic benefit and environmental damage', ['the history of the town', 'the habits of fish', 'the cost of building courts'], 'The factory brought jobs but also polluted the river.'),
  placement(q(PD, 'What can be inferred about the cause of the dying fish?'), 'Pollution from the factory', ['A natural drought', 'Overfishing by villagers', 'A new bridge'], 'The river turned dark after the factory opened and the court ordered a treatment plant.'),
  placement(q(PD, 'What did the court order the factory to do?'), 'Install a treatment plant', ['Close permanently', 'Pay the villagers a bonus', 'Move to another town'], 'The last sentence states the order.'),
  placement(q(PE, 'The author\'s view about honesty is that it'), 'is valuable even though it can be costly in the short term', ['always brings immediate rewards', 'is not important', 'is easy for everyone'], 'The passage admits the costs but says trust is more valuable.'),
  placement(q(PE, 'Which of the following can be inferred from the passage?'), 'Dishonest people lose credibility even when they tell the truth', ['Honest people never lose friends', 'Trust is worth less than money', 'Truth is always welcomed'], 'The passage says nobody believes a dishonest person even when they speak the truth.'),
  placement(q(PE, 'The phrase "on the other hand" introduces'), 'a contrast: the cost of dishonesty', ['an example of honesty', 'a definition of trust', 'a summary of the passage'], 'It contrasts the benefit of honesty with the cost of dishonesty.')
];
build(chapter, quiz);
