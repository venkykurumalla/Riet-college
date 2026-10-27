const { easy, medium, placement, build } = require('../lib.cjs');

const pc = (d, para, best, wrongs, expl) => d('Choose the option that best completes the paragraph.\n' + para + ' ___', best, wrongs, expl);

const chapter = {
  id: 'y2-verbal-para-completion', year: 2, category: 'Advanced Verbal Ability', num: 41, difficulty: 'Intermediate',
  title: 'Paragraph Completion',
  tagline: 'Year 2 — Choosing the final sentence that fits the logic and tone of a paragraph',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/verbal-ability/questions-and-answers/',
  overview: 'In a paragraph-completion question you read a short paragraph with the last sentence missing and choose the option that completes it best. The right choice continues the idea of the paragraph, matches its tone, and fits the logical signal given by the last words (therefore, however, as a result, finally). Wrong options are usually off-topic, contradictory, too extreme or repeat the paragraph without adding anything.',
  placement: 'Paragraph completion questions are commonly asked in the verbal ability section of company aptitude rounds and help build reading comprehension skill.',
  realWorld: 'Writing a conclusion to an email or report, and checking that it follows from the argument, uses this skill.',
  objectives: [
    'Identify the main idea of a short paragraph',
    'Use transition signals (however, therefore, as a result) to predict the type of ending',
    'Reject off-topic, contradictory and extreme options',
    'Match the tone and scope of the paragraph',
    'Check that the completed paragraph flows logically'
  ],
  prereq: ['Sentence Completion', 'Contextual Vocabulary'],
  refresher: 'A paragraph has one main idea. Transition words tell you the direction: addition (also), contrast (however), result (so, therefore, as a result), sequence (finally).',
  defs: [
    'Main idea: the central point of the paragraph.',
    'Transition word: a word that links ideas and signals the relationship (however, therefore).',
    'Continuation: a sentence that extends the idea of the paragraph.',
    'Conclusion: a closing sentence that follows from the earlier ones.',
    'Off-topic option: one that changes the subject.'
  ],
  intuition: 'The best ending follows from what came before. After a cause, the ending states the result. After a problem, it states a response or a consequence. After "however", it states a contrast. Predict the kind of sentence, then find the option that matches.',
  mental: 'Summarise the paragraph in one line, look at the last signal word, predict the ending, and check each option for relevance, direction and tone.',
  formulas: [
    ['Signal: result', 'So / therefore / as a result / hence → a consequence', 'Pick the logical effect.', 'Result endings.', 'Plastic harms animals → many cities have banned it'],
    ['Signal: contrast', 'However / yet / although → an opposite idea', 'Flip the direction.', 'Contrast endings.', 'Critics said it would hurt the poor → the government claimed welfare benefits'],
    ['Signal: sequence', 'Finally / suddenly / on the day → the next event in the story', 'Continue the narrative.', 'Narrative endings.', 'Studied for years → finally got admission'],
    ['Scope check', 'The ending must match the scope (not extreme, not unrelated)', 'Reject all/never statements.', 'Wrong options.', 'Not "all students fail"'],
    ['Repetition check', 'The ending must add something, not repeat', 'Reject paraphrases.', 'Weak options.', 'Not "Plastic bags are plastic"']
  ],
  narrative: [
    'Read the paragraph and put its idea in a single line. "Regular exercise keeps the body fit and improves mood and sleep" leads to a recommendation: therefore everyone should make exercise part of daily life.',
    'Use the signal word. In "Many students think cramming is the best way to study. Research shows, however, that ___", the word however introduces a contrast: understanding concepts leads to better long-term learning.',
    'For narrative paragraphs, continue the story. "The library was silent… Suddenly ___" needs an event that interrupts the silence: a phone rang loudly.',
    'Reject options that are off-topic, extreme or contradictory. After "Early humans learned to grow crops. This change… ___", the ending should explain its effect: it allowed people to settle in one place and form villages.',
    'Reread the paragraph with your choice to check that it flows and that the tone is consistent.'
  ],
  deep: [
    ['Parallel structure at the end', 'If the paragraph lists benefits, the ending may add another benefit. If it states a problem, the ending may offer a solution. Look at the shape of the paragraph.'],
    ['Extreme options', 'Words like always, never, all and nobody make an option risky. Prefer measured statements unless the paragraph is itself extreme.']
  ],
  variations: [
    ['Result endings', 'Therefore, as a result.', 'Plastic bags → banned'],
    ['Contrast endings', 'However.', 'Cramming vs understanding'],
    ['Narrative endings', 'Suddenly, finally.', 'The phone rang'],
    ['Explanatory endings', 'This change…', 'Agricultural revolution'],
    ['Cause-effect endings', 'Because … .', 'Unsafe bridge closed']
  ],
  examples: [
    {
      title: 'Result',
      q: 'Plastic bags take hundreds of years to decay. They also harm animals that eat them. Many cities have therefore ___',
      given: ['Signal: therefore'],
      concept: 'Result of the problem.',
      steps: [['Problem', 'Plastic is harmful and long-lasting.'], ['Result', 'Cities have banned it.']],
      ans: 'banned them.', why: 'Therefore signals a response to the problem.', trap: 'Choosing an unrelated statement.'
    },
    {
      title: 'Contrast',
      q: 'Many students think that cramming is the best way to study. Research shows, however, that ___',
      given: ['Signal: however'],
      concept: 'Opposite idea.',
      steps: [['Original view', 'Cramming works.'], ['Contrast', 'Understanding is better.']],
      ans: 'understanding concepts leads to better long-term learning.', why: 'However flips the view.', trap: 'Repeating the claim.'
    },
    {
      title: 'Narrative',
      q: 'The library was silent. Students were bent over their books. Suddenly ___',
      given: ['Signal: suddenly'],
      concept: 'An event that breaks the silence.',
      steps: [['Setting', 'Quiet library.'], ['Event', 'A loud interruption.']],
      ans: 'a phone rang loudly.', why: 'The event contrasts with the silence.', trap: 'Choosing a general fact.'
    }
  ],
  shortcut: {
    title: 'Summarise, signal, predict',
    trad: 'Read all options first.',
    fast: 'Summarise the paragraph, read the signal word, predict the ending, then pick the closest option.',
    rules: ['Match the signal word.', 'Avoid off-topic and extreme options.', 'Add new information.', 'Keep the tone.']
  },
  mistakes: [
    ['Ignoring the signal word', 'Choosing a plausible but wrong direction.', 'Read however/therefore.'],
    ['Choosing a repeat', 'The option says the same thing.', 'It must add something.'],
    ['Choosing an extreme option', 'All/never.', 'Prefer measured statements.'],
    ['Changing the tone', 'A casual end to a formal paragraph.', 'Match the tone.']
  ],
  tips: { sec: 40, elim: 'Eliminate off-topic options first.', advice: 'Predict the ending in your own words.', insight: 'Signal words make most questions easy.' },
  revision: ['Main idea.', 'Signal words.', 'Reject extremes.', 'Add new information.', 'Match tone.'],
  quickFormulas: ['Therefore → result', 'However → contrast'],
  takeaways: ['Summarise.', 'Read the signal.', 'Predict.', 'Check tone.'],
  selfCheck: ['Can I predict an ending from "however"?', 'Can I reject an extreme option?', 'Can I complete a narrative paragraph?'],
  sources: [['Objective General English — S.P. Bakshi', 'Textbook', 'Paragraph completion and reading skills; examples are original.']]
};

const quiz = [
  pc(easy, 'Regular exercise keeps the body fit. It also improves mood and sleep. Therefore, doctors advise that everyone should', 'make exercise a part of daily life.', ['avoid sleeping early.', 'eat only sweets.', 'stop playing games.'], 'Therefore signals a recommendation that follows from the benefits.'),
  pc(easy, 'Water is essential for life. Without it, plants wither and animals die. So, we should', 'conserve water and avoid wasting it.', ['use as much as possible.', 'stop growing plants.', 'ignore the problem.'], 'The paragraph shows the importance of water, so we should conserve it.'),
  pc(easy, 'The library was silent. Students were bent over their books. Suddenly', 'a phone rang loudly.', ['the exams were cancelled in 1990.', 'rain is a form of water.', 'books are made of paper.'], 'Suddenly signals an event that interrupts the silence.'),
  pc(easy, 'Ravi wanted to become a doctor. He studied hard for years. Finally,', 'he got admission to a medical college.', ['he decided to sell vegetables.', 'the moon was bright.', 'he forgot his name.'], 'The story continues with the reward of his effort.'),
  pc(easy, 'Plastic bags take hundreds of years to decay. They also harm animals that eat them. Many cities have therefore', 'banned them.', ['produced more of them.', 'sold them to tourists.', 'painted them blue.'], 'Therefore signals a response to the harm.'),
  pc(easy, 'The train was late by two hours. Passengers were tired and angry. The station master', 'apologised and announced the new time.', ['danced on the platform.', 'sold the tickets again.', 'ignored the clock.'], 'A natural response to the delay is an apology and update.'),

  pc(medium, 'Social media connects people across the world. However, it also', 'can spread false information quickly.', ['is used by everyone.', 'was invented in the stone age.', 'makes the internet faster.'], 'However introduces a downside.'),
  pc(medium, 'A good leader listens before he decides. He values the opinions of his team. As a result,', 'the team trusts and respects him.', ['the team ignores him.', 'the leader never decides.', 'the office is closed.'], 'As a result signals a positive consequence.'),
  pc(medium, 'Many students think that cramming is the best way to study. Research shows, however, that', 'understanding concepts leads to better long-term learning.', ['cramming always works.', 'books are expensive.', 'students sleep a lot.'], 'However introduces a contrast.'),
  pc(medium, 'India has a vast variety of languages. Each region has its own culture. This diversity', 'makes the country rich and colourful.', ['is found only in one state.', 'has no value.', 'ended in 1947.'], 'The ending states the effect of the diversity.'),
  pc(medium, 'Electric cars produce no smoke. They are also quiet. Yet many people hesitate to buy them because', 'they are costly and charging points are few.', ['they produce smoke.', 'they are very loud.', 'they have no wheels.'], 'Yet signals a reason against buying them.'),
  pc(medium, 'The farmer sowed the seeds in June. The monsoon arrived on time. In October,', 'he harvested a bumper crop.', ['the seeds were still in the bag.', 'he sold his tractor in winter.', 'the monsoon had not started.'], 'The story ends with the harvest.'),
  pc(medium, 'Sleep is not a waste of time. During sleep, the brain stores memories and the body repairs itself. Hence,', 'a good night\'s sleep is necessary for health.', ['we should never sleep.', 'sleep is only for children.', 'the brain stops working.'], 'Hence signals a conclusion.'),
  pc(medium, 'She was nervous before the interview. She practised answers in front of the mirror. On the day,', 'she answered every question confidently.', ['she did not attend.', 'she forgot to wear shoes.', 'the mirror broke.'], 'Her preparation led to confidence.'),

  pc(placement, 'Critics argued that the new tax would hurt the poor. The government, however,', 'claimed that the money would be used for welfare schemes.', ['agreed with the critics completely.', 'abolished all taxes at once.', 'refused to speak.'], 'However signals the government\'s contrasting view.'),
  pc(placement, 'Early humans lived in caves and hunted for food. Over time, they learned to grow crops. This change, known as the agricultural revolution,', 'allowed people to settle in one place and form villages.', ['made people move more.', 'ended the use of fire.', 'was unknown to them.'], 'The ending explains the effect of farming.'),
  pc(placement, 'Although the film had a brilliant story,', 'its poor editing disappointed many viewers.', ['it was a great film in every way.', 'the story was unimportant.', 'it was released in a theatre.'], 'Although introduces a contrasting weakness.'),
  pc(placement, 'The company promised to deliver the order in a week. Three weeks later, there was still no sign of it. Not surprisingly,', 'the customer demanded a refund.', ['the customer thanked the company.', 'the order arrived early.', 'the week was extended to a year.'], 'The delay naturally leads to a demand for a refund.'),
  pc(placement, 'Technology has made our lives easier in many ways. Yet there are costs:', 'people spend less time talking face to face.', ['phones are useful for calls.', 'machines never fail.', 'everyone owns a computer.'], 'Yet costs signals a downside.'),
  pc(placement, 'Because the bridge was unsafe,', 'the authorities closed it to traffic.', ['the authorities opened it to heavier traffic.', 'the river became wider.', 'the bridge was painted blue.'], 'The logical result of an unsafe bridge is closure.')
];
build(chapter, quiz);
