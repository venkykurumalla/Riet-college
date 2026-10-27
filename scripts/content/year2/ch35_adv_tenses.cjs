const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-verbal-adv-tenses', year: 2, category: 'Advanced Verbal Ability', num: 35, difficulty: 'Intermediate',
  title: 'Advanced Tenses',
  tagline: 'Year 2 — Perfect and continuous forms, conditionals, reported speech and "wish" sentences',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/verbal-ability/questions-and-answers/',
  overview: 'Year 1 covered the twelve tenses and their basic use. Year 2 deals with how tenses work together in a sentence: sequence of tenses, conditionals (if-sentences), reported speech, sentences with wish, "it is high time" and "would rather", and structures such as hardly…when and no sooner…than. These patterns are the favourite targets of fill-in-the-blank and error-spotting questions.',
  placement: 'Advanced tense and conditional questions are commonly asked in the verbal ability section of company aptitude rounds, in fill-in-the-blank and error-spotting formats.',
  realWorld: 'Reports, minutes of meetings and emails depend on correct tenses in reported speech and in conditional statements ("if we had started earlier, we would have finished").',
  objectives: [
    'Use all three types of conditional sentences correctly',
    'Change direct speech into reported speech with correct tense shifts',
    'Use wish, would rather, it is high time and as if correctly',
    'Use past perfect and future perfect forms for sequence and completion',
    'Handle hardly/scarcely…when and no sooner…than'
  ],
  prereq: ['Basic Tenses', 'Subject-Verb Agreement'],
  refresher: 'Perfect = has/have/had + V3. Continuous = be + V-ing. Perfect continuous = has/have/had been + V-ing. Time words guide the choice (since, for, by the time, before).',
  defs: [
    'Conditional type 1 (real future): If + present, will + base verb. Type 2 (unreal present): If + past, would + base verb. Type 3 (unreal past): If + past perfect, would have + V3.',
    'Reported speech: the speaker\'s words reported by someone else; verbs usually move one tense back after a past reporting verb.',
    'Sequence of tenses: the tense of the subordinate clause is linked to the tense of the main clause.',
    'Subjunctive: the base form used after verbs like suggest, insist, demand ("He suggested that she see a doctor").',
    'Inversion with hardly/scarcely/no sooner: "Hardly had he reached when…", "No sooner had she left than…".'
  ],
  intuition: 'English tenses express not only time but also reality. The simple past in "If I were rich" does not talk about the past; it signals that the situation is unreal. Each pattern has a fixed set of tense choices, so learning the patterns is more effective than reasoning from meaning alone.',
  mental: 'For an if-sentence, ask: is the situation real (type 1), unreal now (type 2), or unreal in the past (type 3)? Then use the matching pair: present/will, past/would, past perfect/would have.',
  formulas: [
    ['Conditionals', 'Type 1: If + present, will + V1.  Type 2: If + past (were), would + V1.  Type 3: If + had + V3, would have + V3', 'Pick the type by the reality of the situation.', 'If-sentences.', 'If it rains, we will cancel; If I were rich, I would travel; If I had known, I would have told'],
    ['Reported speech', 'Present → past; past → past perfect; will → would; tomorrow → the next day; yesterday → the previous day', 'After a past reporting verb.', 'Direct to indirect.', '"I am busy" → He said that he was busy'],
    ['Wish and would rather', 'I wish + past (present wish); I wish + had + V3 (past regret); would rather + subject + past', 'Past forms for unreal wishes.', 'Wish sentences.', 'I wish I knew; I would rather you stayed'],
    ['Hardly/no sooner', 'Hardly had + S + V3 + when …;  No sooner had + S + V3 + than …', 'Inversion with had.', 'Structure questions.', 'No sooner had he left than it rained'],
    ['Completion by a time', 'By + future time → future perfect;  By the time + past → past perfect', 'Completion before a time.', 'By questions.', 'By 2030 we will have completed the project']
  ],
  narrative: [
    'Conditionals depend on how real the situation is. If it rains tomorrow, we will cancel the trip (real future: present + will). If I were rich, I would travel the world (unreal present: past + would; use were for all subjects). If she had worked harder, she would have passed (unreal past: past perfect + would have).',
    'In reported speech, the verb moves one step back after a past reporting verb. "I am busy" becomes "He said that he was busy". "I will come tomorrow" becomes "He said that he would come the next day". Time words change too: yesterday becomes the previous day.',
    'After wish, use a past form for an unreal present: I wish I knew the answer. Use the past perfect for a past regret: I wish I had known. After "would rather" with a different subject use the past: I would rather you stayed here tomorrow. After "it is high time", use the past: It is high time we left.',
    'For sequences, hardly and no sooner take the past perfect and inversion: Hardly had he reached when it started to rain; No sooner had she left than it rained. Notice when after hardly and than after no sooner.',
    'By + a future time takes the future perfect: By 2030 we will have completed the project. By the time you arrive, I will have cooked dinner. After verbs of suggestion, use the base form: He suggested that she see a doctor.'
  ],
  deep: [
    ['Mixed conditionals', 'A past cause with a present result: If I had studied medicine, I would be a doctor now. Use past perfect in the if-clause and would + base in the main clause.'],
    ['Were for all subjects', 'In formal English, type 2 uses were for all subjects: If he were here. "Was" is common in speech but "were" is the exam answer.']
  ],
  variations: [
    ['Conditionals', 'Types 1, 2 and 3.', 'If I ___ rich'],
    ['Reported speech', 'Tense shift.', 'He said that he ___ busy'],
    ['Wish and would rather', 'Unreal wishes.', 'I wish I ___'],
    ['Inversion structures', 'Hardly, no sooner.', 'Hardly ___ he reached'],
    ['Completion by a time', 'Future perfect.', 'By 2030 we ___']
  ],
  examples: [
    {
      title: 'Conditionals',
      q: 'Choose the correct form: "If I ___ the answer, I would have told you." (knew / had known / know / would know)',
      given: ['Main clause: would have told (type 3)'],
      concept: 'Type 3 uses past perfect in the if-clause.',
      steps: [['Identify the type', '"Would have told" signals an unreal past.'], ['Choose the if-clause', 'If + had + V3: had known.']],
      ans: 'had known', why: 'Unreal past → past perfect.', trap: 'Using the simple past (knew).'
    },
    {
      title: 'Reported speech',
      q: 'Report: He said, "I will come tomorrow."',
      given: ['Direct speech'],
      concept: 'Shift will → would, tomorrow → the next day.',
      steps: [['Pronoun and tense', 'I → he; will → would.'], ['Time word', 'tomorrow → the next day.']],
      ans: 'He said that he would come the next day.', why: 'The reporting verb is in the past.', trap: 'Keeping "will" and "tomorrow".'
    },
    {
      title: 'Hardly … when',
      q: 'Complete: "Hardly ___ he reached the station when the train left." (has / had / did / was)',
      given: ['Hardly … when'],
      concept: 'Past perfect with inversion.',
      steps: [['Pattern', 'Hardly + had + subject + V3 + when.'], ['Choose', 'had.']],
      ans: 'had', why: 'The first action is completed before the second.', trap: 'Using did.'
    }
  ],
  shortcut: {
    title: 'Pattern pairs',
    trad: 'Reason from meaning each time.',
    fast: 'Memorise the pairs: present/will; past/would; past perfect/would have; hardly had … when; no sooner had … than; wish + past.',
    rules: ['Type 2: were for all subjects.', 'Reported speech shifts back one tense.', 'Hardly … when; no sooner … than.', 'Suggest that + base form.']
  },
  mistakes: [
    ['Using would in the if-clause', 'If I would know…', 'The if-clause never takes would in these types.'],
    ['Wrong word after no sooner', 'No sooner … when.', 'Use than.'],
    ['Not shifting time words', 'Keeping tomorrow.', 'Change to the next day.'],
    ['Wish with present tense', 'I wish I know.', 'Use the past: knew.']
  ],
  tips: { sec: 25, elim: 'Check which conditional the main clause shows and match the if-clause.', advice: 'Learn the patterns by heart.', insight: 'These items are very predictable.' },
  revision: ['Three conditionals.', 'Reported speech shifts.', 'Wish + past.', 'Hardly had … when.', 'By + future → future perfect.'],
  quickFormulas: ['If + had V3, would have V3', 'No sooner had … than'],
  takeaways: ['Patterns.', 'Reality decides tense.', 'Shift in reporting.', 'Inversion rules.'],
  selfCheck: ['Can I complete a type 3 conditional?', 'Can I report a statement?', 'Can I use wish correctly?'],
  sources: [['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'Tenses, conditionals and reported speech; examples are original.']]
};

const quiz = [
  easy('Choose the correct form: "If I ___ rich, I would travel the world."', 'were', ['am', 'will be', 'would be'], 'Type 2 (unreal present): If + past (were), would + base verb.'),
  easy('Choose the correct form: "She said that she ___ the work the previous day."', 'had finished', ['finishes', 'has finished', 'will finish'], 'In reported speech, the past moves back to the past perfect.'),
  easy('Choose the correct form: "By 2030, we ___ the project."', 'will have completed', ['will complete', 'have completed', 'completed'], '"By" a future time takes the future perfect.'),
  easy('Choose the correct word: "I have been working here ___ 2019."', 'since', ['for', 'from', 'by'], '"Since" is used with a starting point of time.'),
  easy('Choose the correct form: "Hardly ___ he reached when it started to rain."', 'had', ['has', 'did', 'was'], 'Hardly is followed by the past perfect: Hardly had he reached when…'),
  easy('Choose the correct form: "The train ___ before we reached the station."', 'had left', ['left', 'has left', 'leaves'], 'Leaving came before reaching, so the past perfect is used.'),

  medium('Choose the correct form: "If it ___ tomorrow, we will cancel the trip."', 'rains', ['will rain', 'rained', 'would rain'], 'Type 1: the if-clause takes the simple present.'),
  medium('Choose the correct form: "If I had known, I ___ you."', 'would have told', ['would tell', 'told', 'will tell'], 'Type 3: if + past perfect, would have + V3.'),
  medium('Choose the correct form: "She asked me where I ___."', 'lived', ['do live', 'live', 'did live'], 'In a reported question the verb moves back: lived.'),
  medium('Report: He said, "I am busy." He said that he ___ busy.', 'was', ['is', 'be', 'will be'], 'Present moves back to past: was.'),
  medium('Choose the correct form: "I wish I ___ the answer."', 'knew', ['know', 'had known', 'will know'], 'For an unreal present wish, use the past: knew.'),
  medium('Choose the correct word: "No sooner had he left ___ it rained."', 'than', ['when', 'then', 'that'], 'No sooner is followed by than.'),
  medium('Choose the correct form: "By the time you arrive, I ___ dinner."', 'will have cooked', ['will cook', 'cooked', 'have cooked'], 'Completion before a future time: future perfect.'),
  medium('Choose the correct form: "She ___ for two hours when he called."', 'had been waiting', ['was waiting', 'has been waiting', 'waited'], 'An action in progress up to a past moment: past perfect continuous.'),

  placement('Choose the correct form: "If she ___ harder, she would have passed."', 'had worked', ['worked', 'would work', 'has worked'], 'Type 3: if + past perfect.'),
  placement('Choose the correct form: "He suggested that she ___ a doctor."', 'see', ['sees', 'saw', 'will see'], 'After suggest that, the base form (subjunctive) is used.'),
  placement('Choose the correct form: "It is high time we ___ now."', 'left', ['leave', 'will leave', 'had left'], 'After "it is high time", the past form is used: left.'),
  placement('Choose the correct form: "I would rather you ___ here tomorrow."', 'stayed', ['stay', 'will stay', 'staying'], 'After "would rather" with a different subject, use the past: stayed.'),
  placement('Report: He said, "I will come tomorrow." He said that he ___ the next day.', 'would come', ['will come', 'comes', 'came'], 'Will becomes would, and tomorrow becomes the next day.'),
  placement('Choose the correct sentence.', 'I have lived here for five years.', ['I have lived here since five years.', 'I live here since five years.', 'I am living here from five years.'], '"For" is used with a length of time, "since" with a starting point.')
];
build(chapter, quiz);
