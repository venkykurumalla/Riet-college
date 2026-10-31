const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-verbal-basic-tenses', year: 1, category: 'Verbal Ability', num: 24,
  title: 'Basic Tenses',
  tagline: 'Year 1 Foundation — Present, past and future forms and when to use each',
  minutes: 45,
  overview: 'A tense is the form of a verb that tells the time of an action (past, present or future) and the way the action is viewed (simple, continuous, perfect or perfect continuous). English has twelve tense forms in this grid. Choosing the right tense depends on when the action happens, whether it is complete, and whether it continues. In placement tests the tense questions are usually fill-in-the-blank or error-spotting items, where time words such as yesterday, since, for, by the time and tomorrow give strong clues.',
  placement: 'Tense questions are commonly asked in the verbal ability section of company aptitude rounds, either on their own or hidden inside sentence correction and error-spotting items.',
  realWorld: 'Emails, project reports and status updates all depend on correct tense: "we completed the module", "we are testing it now", "we will deploy next week".',
  objectives: [
    'Form the twelve tenses correctly',
    'Choose the tense from time expressions (yesterday, since, for, by, tomorrow)',
    'Use the present perfect and the simple past correctly',
    'Use the past perfect for the earlier of two past actions',
    'Avoid continuous forms with stative verbs (know, like, want)'
  ],
  prereq: ['Parts of Speech', 'Basic sentence structure'],
  refresher: 'Verb forms: base (go), past (went), past participle (gone), present participle (going). Helping verbs: is/am/are, was/were, has/have/had, will/shall.',
  defs: [
    'Simple present: habitual action or general truth (She goes to school daily. The sun rises in the east.)',
    'Present continuous: action in progress now (They are playing football.)',
    'Present perfect: past action with present relevance, formed with has/have + past participle (I have finished my work.)',
    'Simple past: completed action at a definite past time (I saw him yesterday.)',
    'Past perfect: the earlier of two past actions, formed with had + past participle (The train had left before we reached.)',
    'Future simple: will/shall + base verb (We will watch a movie tomorrow.) Future continuous and perfect: will be + -ing, will have + past participle.'
  ],
  intuition: 'The tense should answer two questions: when did it happen, and what is the state of the action at that time? "Since" and "for" signal that the action continues to the present, so use present perfect. "Yesterday" or "in 2019" fix a finished time, so use simple past. Two past events in one sentence need the earlier one in past perfect.',
  mental: 'Picture a timeline. Mark "now". For an action that is complete before now with no definite time, use present perfect. For a point before now with a stated time, use simple past. For one past event before another past event, use past perfect for the first.',
  formulas: [
    ['Present tenses', 'Simple: V1 (s).  Continuous: am/is/are + V-ing.  Perfect: has/have + V3.  Perfect continuous: has/have been + V-ing', 'Four forms for present time.', 'Time words: every day, now, already, since, for.', 'She has lived here since 2020.'],
    ['Past tenses', 'Simple: V2.  Continuous: was/were + V-ing.  Perfect: had + V3.  Perfect continuous: had been + V-ing', 'Four forms for past time.', 'Time words: yesterday, ago, when, before, by the time.', 'The train had left when we reached.'],
    ['Future tenses', 'Simple: will + V1.  Continuous: will be + V-ing.  Perfect: will have + V3.  Perfect continuous: will have been + V-ing', 'Four forms for future time.', 'Time words: tomorrow, next week, by next March.', 'By next March she will have worked here for ten years.'],
    ['Since and for', 'Since + point of time (since 2020, since morning);  For + length of time (for two hours, for ten years)', 'Both usually go with perfect or perfect continuous tenses.', 'Present perfect questions.', 'I have been waiting for him since morning.'],
    ['Stative verbs', 'know, like, love, want, believe, see (understand), belong are not used in continuous tenses', 'Use the simple form instead.', 'Error-spotting items.', 'She knows the answer (not "is knowing")']
  ],
  narrative: [
    'The simple present is used for habits (She goes to school every day) and universal truths (The sun rises in the east). The present continuous is for actions happening now or around now (They are playing football). Time words such as now, at the moment and look! point to the continuous form.',
    'The present perfect connects past and present. It is used when the time of the action is not stated or the action continues up to now: "I have finished my work", "He has lived here since 2020". It cannot be used with a finished time word such as yesterday or last year; use the simple past instead: "I saw him yesterday".',
    'The simple past describes completed actions at a definite time. The past continuous describes an action in progress at a past moment, often interrupted by another: "While I was watching TV, the phone rang." The past perfect marks the earlier of two past actions: "By the time we reached, the train had left."',
    'For the future, will + base verb states a plan or prediction (We will watch a movie tomorrow). The future continuous describes an action that will be in progress at a future time (This time next week I will be lying on a beach). The future perfect describes an action completed before a future time (By next March she will have worked here for ten years).',
    'After "if", "when", "before", "after" and "as soon as" in sentences about the future, use the present tense, not will: "If it rains tomorrow, we will stay at home" (not "if it will rain"). In reported speech, the verb usually moves one step back: "He said that he had finished the work."'
  ],
  deep: [
    ['Simple past versus present perfect', 'Use the simple past when the time is given or understood (I saw him yesterday). Use the present perfect when the time is not given or the action is linked to now (I have seen him this week). "Yesterday", "last year", "in 2019" and "ago" never go with the present perfect.'],
    ['Conditional and wish sentences', 'After "wish", use the past for a present wish (I wish I knew the answer) and the past perfect for a past wish (I wish I had known). In real conditionals about the future, use present in the if-clause and will in the main clause.']
  ],
  variations: [
    ['Fill in with the correct tense', 'Choose from options.', 'She ___ to school every day.'],
    ['Time-word clues', 'Since, for, yesterday, by the time.', 'He ___ here since 2020.'],
    ['Two past actions', 'Past perfect for the earlier action.', 'By the time we reached, the train ___.'],
    ['Error spotting', 'Wrong tense with a time word.', 'I have seen him yesterday.'],
    ['Reported speech and conditionals', 'Sequence of tenses.', 'He said that he ___ the work.']
  ],
  examples: [
    {
      title: 'Present perfect with since',
      q: 'Choose the correct form: "He ___ here since 2020."  (lives / has lived / is living / lived)',
      given: ['Time expression: since 2020'],
      concept: '"Since" + a point of time needs a perfect tense.',
      steps: [
        ['Read the time expression', '"Since 2020" means the action started in 2020 and continues to now.'],
        ['Choose the tense', 'An action that began in the past and continues to the present uses the present perfect (has + past participle).']
      ],
      ans: 'has lived',
      why: 'Simple present and simple past do not link the past to the present.',
      trap: 'Choosing "lives" or "lived" because the sentence seems simple.'
    },
    {
      title: 'Past perfect',
      q: 'Choose the correct form: "By the time we reached the station, the train ___."  (left / had left / has left / was leaving)',
      given: ['Two past events: we reached; the train left'],
      concept: 'The earlier of two past events takes the past perfect.',
      steps: [
        ['Order the events', 'The train left first; then we reached the station.'],
        ['Choose the tense', 'The earlier event takes the past perfect: had left.']
      ],
      ans: 'had left',
      why: '"By the time" with a past event requires the earlier action in the past perfect.',
      trap: 'Using the simple past for both and losing the order.'
    },
    {
      title: 'Error with a finished time word',
      q: 'Correct the sentence: "I have seen him yesterday."',
      given: ['Time word: yesterday'],
      concept: 'A finished time word needs the simple past.',
      steps: [
        ['Spot the time word', '"Yesterday" is a finished time.'],
        ['Match the tense', 'Replace the present perfect "have seen" with the simple past "saw".']
      ],
      ans: 'I saw him yesterday.',
      why: 'The present perfect cannot be used with a time word that points to a finished period.',
      trap: 'Keeping "have seen" because the action feels connected to now.'
    }
  ],
  shortcut: {
    title: 'Time-word map',
    trad: 'Work out the tense from the meaning of each sentence.',
    fast: 'Scan for the time word first. Every day/always → simple present; now/look → present continuous; yesterday/ago/last → simple past; since/for/already/yet → present perfect; by the time (past) → past perfect; tomorrow/next → future simple.',
    rules: [
      'Yesterday, ago and last (week) → simple past.',
      'Since + point of time, for + period → perfect tenses.',
      'After if, when, before, as soon as in future sentences use the present tense.',
      'Do not use continuous tenses with stative verbs.'
    ]
  },
  mistakes: [
    ['Present perfect with a finished time', '"I have met him last week."', 'Use the simple past with last week, yesterday, ago and in + year.'],
    ['Using will after if or when', '"If it will rain, we will stay."', 'Use the present tense in the if-clause: "If it rains, we will stay."'],
    ['Continuous tense with stative verbs', '"She is knowing the answer."', 'Use the simple form: "She knows the answer."'],
    ['Ignoring the order of two past events', 'Using the simple past for both.', 'Put the earlier event in the past perfect.']
  ],
  tips: {
    sec: 30,
    elim: 'Remove options whose tense cannot go with the time word in the sentence.',
    advice: 'Tense questions are quick marks; read the whole sentence for the time word before choosing.',
    insight: 'Most tense errors in placement tests involve since/for, yesterday/ago, or an if-clause.'
  },
  revision: [
    'Twelve tenses: simple, continuous, perfect and perfect continuous in present, past and future.',
    'Since + point of time; for + period.',
    'Simple past with yesterday, ago, last.',
    'Earlier of two past actions → past perfect.',
    'No will after if or when in future sentences.'
  ],
  quickFormulas: ['Present perfect: has/have + V3', 'Past perfect: had + V3', 'Future perfect: will have + V3'],
  takeaways: [
    'Time words guide the tense.',
    'Perfect tenses link two points in time.',
    'Use present tense in time and if-clauses about the future.',
    'Stative verbs avoid continuous forms.'
  ],
  selfCheck: [
    'Can I fill in "She ___ for two hours when I called"?',
    'Can I correct "I have seen him yesterday"?',
    'Can I explain why "If it will rain" is wrong?'
  ],
  sources: [
    ['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'The Tenses topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Choose the correct form: "She ___ to school every day."', 'goes', ['go', 'going', 'gone'], 'A habit uses the simple present, and the third person singular takes -es: goes.'),
  easy('Choose the correct form: "They ___ football now."', 'are playing', ['play', 'played', 'have played'], '"Now" shows an action in progress, so the present continuous is used.'),
  easy('Choose the correct form: "I ___ my homework yesterday."', 'finished', ['finish', 'have finished', 'am finishing'], '"Yesterday" is a finished time, so the simple past is used.'),
  easy('Choose the correct form: "He ___ here since 2020."', 'has lived', ['lives', 'lived', 'is living'], '"Since 2020" takes the present perfect (has + past participle).'),
  easy('Choose the correct form: "The sun ___ in the east."', 'rises', ['rise', 'rose', 'is rising'], 'A universal truth takes the simple present: rises.'),
  easy('Choose the correct form: "We ___ a movie tomorrow."', 'will watch', ['watched', 'have watched', 'watching'], '"Tomorrow" points to the future, so "will watch" is used.'),

  medium('Choose the correct form: "By the time we reached, the train ___."', 'had left', ['left', 'has left', 'was leaving'], 'The train left before we reached, so the earlier action takes the past perfect.'),
  medium('Choose the correct form: "She ___ for two hours when I called."', 'had been waiting', ['was waiting', 'has been waiting', 'waited'], 'An action in progress up to a past moment takes the past perfect continuous: had been waiting.'),
  medium('Choose the correct form: "I ___ for him since morning."', 'have been waiting', ['am waiting', 'waited', 'had waited'], '"Since morning" with an action that continues to now takes the present perfect continuous.'),
  medium('Choose the correct form: "While I ___ TV, the phone rang."', 'was watching', ['watched', 'am watching', 'have watched'], 'An action in progress when another action interrupts it takes the past continuous.'),
  medium('Choose the correct form: "He said that he ___ the work."', 'had finished', ['has finished', 'finishes', 'will finish'], 'In reported speech after a past verb ("said"), the earlier action takes the past perfect.'),
  medium('Choose the correct form: "If it rains tomorrow, we ___ at home."', 'will stay', ['stayed', 'would stay', 'have stayed'], 'The if-clause uses the present tense ("rains") and the main clause uses will + base verb.'),
  medium('Choose the correct form: "The teacher ___ the lesson before the bell rang."', 'had completed', ['completes', 'was completing', 'has completed'], 'Completing the lesson came before the bell, so the earlier action takes the past perfect.'),
  medium('Choose the correct form: "This time next week, I ___ on a beach."', 'will be lying', ['lie', 'lay', 'will lie'], 'An action that will be in progress at a future time takes the future continuous.'),

  placement('Choose the correct form: "By next March, she ___ here for ten years."', 'will have worked', ['will work', 'has worked', 'worked'], '"By next March" points to completion before a future time, so the future perfect is used.'),
  placement('Choose the correct sentence about a past meeting.', 'I saw him yesterday.', ['I have seen him yesterday.', 'I am seeing him yesterday.', 'I had seen him yesterday.'], '"Yesterday" is a finished time, so the simple past (saw) is used. The other options misuse the perfect or continuous forms.'),
  placement('Choose the correct sentence about knowing the answer.', 'She knows the answer.', ['She is knowing the answer.', 'She has been knowing the answer.', 'She was knowing the answer.'], '"Know" is a stative verb and is not used in continuous forms.'),
  placement('Choose the correct form: "I wish I ___ the answer."', 'knew', ['know', 'known', 'will know'], 'After "wish" for a present situation, the past form is used: I wish I knew.'),
  placement('Choose the correct form: "He ___ in Pune for ten years before he moved to Hyderabad."', 'had lived', ['has lived', 'lives', 'is living'], 'Living in Pune was completed before the move (a past event), so the past perfect is used.'),
  placement('Choose the correct form: "Look! It ___."', 'is raining', ['rains', 'rained', 'has rained'], '"Look!" signals an action in progress now, so the present continuous is used.')
];

build(chapter, quiz);
