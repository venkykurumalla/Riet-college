const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-verbal-basic-sentence-correction', year: 1, category: 'Verbal Ability', num: 30,
  title: 'Basic Sentence Correction',
  tagline: 'Year 1 Foundation — Finding and fixing common errors in sentences',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/verbal-ability/spotting-errors/',
  overview: 'Sentence correction asks you to find the error in a sentence or to choose the correct version from several options. The errors in basic questions fall into a small number of families: subject-verb agreement, wrong tense or verb form, wrong preposition, wrong article, wrong pronoun case, adjective used for an adverb, double comparatives, and unnecessary words. A systematic approach is to read the sentence once for meaning, then check it against a short list of error types.',
  placement: 'Sentence correction and error-spotting items are commonly asked in the verbal ability section of company aptitude rounds. They draw on all the earlier grammar chapters, so they are a good test of how well those topics have been learned.',
  realWorld: 'Proofreading emails, resumes and reports before sending uses the same checklist: agreement, tense, prepositions, articles, pronouns.',
  objectives: [
    'Apply an error-checklist to any sentence',
    'Spot subject-verb disagreement, wrong tense and wrong verb forms',
    'Spot wrong prepositions, articles, pronoun cases and adjective/adverb confusions',
    'Recognise double comparatives, unnecessary words and wrong word order in reported questions',
    'Choose the grammatically correct and natural option'
  ],
  prereq: ['Parts of Speech', 'Basic Tenses', 'Articles', 'Prepositions', 'Subject-Verb Agreement'],
  refresher: 'Keep the earlier rules ready: the verb agrees with its subject; since + point, for + period; prefer to; articles by sound; object pronouns after prepositions; adjectives modify nouns, adverbs modify verbs.',
  defs: [
    'Error spotting: finding the part of a sentence that is grammatically wrong.',
    'Sentence improvement: choosing the best replacement for an underlined part.',
    'Double comparative: using both more and -er (more smarter), which is wrong.',
    'Reported question: a question reported indirectly, which takes statement word order (She asked where I lived).',
    'Redundancy: using two words that mean the same (return back, repeat again).'
  ],
  intuition: 'Most errors fall into the same ten or so families. Instead of searching blindly for a mistake, run the sentence through a checklist. After a few weeks of practice, the checklist becomes automatic and you can spot the error almost on first reading.',
  mental: 'Read the sentence once. Underline the subject and the verb and ask whether they agree. Check the tense against any time word. Check each preposition and article. Check the pronouns. Finally check for extra words. Most sentences fail on one of these tests.',
  formulas: [
    ['Agreement check', 'Subject (singular/plural) must match the verb', 'Ignore phrases between the subject and the verb.', 'First check for every sentence.', 'She doesn\'t like tea (not "don\'t")'],
    ['Verb-form check', 'After did/does/do and modals use the base form; after has/have/had use the past participle', 'Common slips: "did not came", "has went".', 'Second check.', 'He did not come yesterday'],
    ['Adjective/adverb check', 'Verbs take adverbs (sings well, runs fast); linking verbs take adjectives (looks good)', 'Good is an adjective; well is an adverb.', 'Third check.', 'She sings well (not "very good")'],
    ['Comparison check', 'Use either -er or more, not both; use "than", not "then"', 'Double comparatives are wrong.', 'Comparison sentences.', 'He is smarter than his brother'],
    ['Reported speech check', 'No "that" before a reported question; use statement word order', 'She asked me where I lived.', 'Reported questions.', 'She told me (not "said me")']
  ],
  narrative: [
    'Begin with agreement. "She don\'t like tea" fails because the singular subject she needs the singular auxiliary doesn\'t. "Each of the boys have a book" fails because the real subject is each (singular), so has is needed. "The furniture are old" fails because furniture is uncountable and takes a singular verb.',
    'Next check the verb forms and tenses. After do, does or did the main verb stays in the base form: "He did not come yesterday." After has, have or had the verb takes the past participle: "He has gone." Time words such as yesterday, ago and last year need the simple past: "I saw him yesterday".',
    'Then check the small words. Prepositions follow fixed patterns: prefer to, look forward to meeting, in spite of the rain (or despite the rain), agree with someone (no "am agree"). Articles depend on sound: an MBA, a university.',
    'Adjectives and adverbs: "She sings very good" is wrong because sings (a verb) needs the adverb well. "More smarter" is a double comparative; use smarter or more intelligent. Do not write "than" as "then" in comparisons.',
    'Reported questions use statement order and no "that": "She asked me where I lived" (not "She asked me that where I lived"). Use told with an object (She told me) and said without one (She said that...). Avoid redundancy such as "return back" and "repeat again".'
  ],
  deep: [
    ['"The reason is because"', 'The reason is that something happened; because already means "for the reason that", so "the reason is because" is redundant. Write "The reason is that he was late".'],
    ['"Look forward to" takes -ing', 'In the phrase look forward to, to is a preposition, so it is followed by a noun or -ing form: "I look forward to meeting you" (not "to meet you"). The same applies to "be used to" and "object to".']
  ],
  variations: [
    ['Agreement errors', 'Subject and verb do not match.', 'Each of the boys have a book.'],
    ['Verb-form and tense errors', 'Wrong form after an auxiliary.', 'He did not came yesterday.'],
    ['Adjective/adverb and comparison errors', 'Good/well, more smarter.', 'She sings very good.'],
    ['Preposition and article errors', 'Wrong small word.', 'Despite of the rain.'],
    ['Reported speech errors', 'Order and word choice.', 'She asked me that where I lived.']
  ],
  examples: [
    {
      title: 'Agreement and auxiliary',
      q: 'Find the error: "She don\'t like tea."',
      given: ['Sentence: She don\'t like tea.'],
      concept: 'The singular third-person subject needs the singular auxiliary.',
      steps: [
        ['Identify subject and verb', 'The subject is "she"; the auxiliary is "don\'t".'],
        ['Check agreement', 'Singular third person takes "doesn\'t".'],
        ['Rewrite', '"She doesn\'t like tea."']
      ],
      ans: 'She doesn\'t like tea.',
      why: 'Do/does must agree with the subject.',
      trap: 'Changing "like" to "likes" and keeping "don\'t".'
    },
    {
      title: 'Verb form after did',
      q: 'Find the error: "He did not came yesterday."',
      given: ['Sentence: He did not came yesterday.'],
      concept: 'After did not, the main verb is in the base form.',
      steps: [
        ['Spot the auxiliary', '"Did not" already shows the past tense.'],
        ['Fix the main verb', 'Use the base form: come.']
      ],
      ans: 'He did not come yesterday.',
      why: 'The tense is carried by "did", so the main verb stays in its base form.',
      trap: 'Changing "yesterday" or "did" instead of "came".'
    },
    {
      title: 'Reported question',
      q: 'Find the error: "She asked me that where I lived."',
      given: ['Sentence: She asked me that where I lived.'],
      concept: 'A reported question takes statement word order and no "that".',
      steps: [
        ['Spot the extra word', '"That" is not used before a reported question.'],
        ['Rewrite', '"She asked me where I lived."']
      ],
      ans: 'She asked me where I lived.',
      why: 'A reported question is joined by the question word itself.',
      trap: 'Keeping "that" and changing "lived".'
    }
  ],
  shortcut: {
    title: 'Checklist of ten',
    trad: 'Read and reread the sentence until something feels wrong.',
    fast: 'Check in this order: subject-verb agreement, tense and verb form, preposition, article, pronoun, adjective/adverb, comparison, reported speech, redundancy, word order. Most errors appear in the first four.',
    rules: [
      'Strike out phrases between the subject and the verb before checking agreement.',
      'After do/does/did and modals use the base verb.',
      'Look forward to + -ing; prefer to; in spite of / despite (no "of" after despite).',
      'Good is an adjective, well is an adverb.'
    ]
  },
  mistakes: [
    ['Searching randomly for the error', 'Reading for "feel" rather than for rules.', 'Use the checklist in a fixed order.'],
    ['Correcting the wrong word', 'Changing a correct part and leaving the real error.', 'Find the error type first, then fix only that part.'],
    ['Choosing an option that is correct but changes the meaning', 'Picking a grammatically correct sentence with a different meaning.', 'Check the meaning against the original.'],
    ['Missing "no error"', 'Assuming that every sentence has an error.', 'If the checklist finds nothing, the sentence is correct.']
  ],
  tips: {
    sec: 30,
    elim: 'Compare the options; the part that differs is usually where the error lies.',
    advice: 'Do these after finishing easier verbal items; apply the checklist consistently.',
    insight: 'Because the same ten error types recur, practice gives rapid gains in speed.'
  },
  revision: [
    'Agreement, tense, prepositions, articles, pronouns.',
    'After did/does/do and modals, use the base form.',
    'Good (adjective) versus well (adverb).',
    'No double comparatives; than not then.',
    'Reported questions: no "that", statement order.'
  ],
  quickFormulas: ['Do/does/did + base verb', 'Look forward to + -ing', 'Prefer X to Y'],
  takeaways: [
    'Use a checklist.',
    'Fix only the error.',
    'Check meaning and grammar.',
    'Practise a little every day.'
  ],
  selfCheck: [
    'Can I fix "He did not came yesterday"?',
    'Can I explain why "more smarter" is wrong?',
    'Can I turn "She asked me that where I lived" into a correct sentence?'
  ],
  sources: [
    ['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'Common grammatical errors; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Choose the correct sentence (auxiliary verb).', 'She doesn\'t like tea.', ['She don\'t like tea.', 'She doesn\'t likes tea.', 'She not like tea.'], 'The subject "she" is third person singular, so the auxiliary is "doesn\'t" and the main verb stays in the base form.'),
  easy('Choose the correct sentence (habit in the present).', 'He goes to school daily.', ['He go to school daily.', 'He going to school daily.', 'He gone to school daily.'], 'A habit in the simple present with a singular subject takes goes.'),
  easy('Choose the correct sentence (plural subject).', 'They are playing in the park.', ['They is playing in the park.', 'They am playing in the park.', 'They was playing in the park now.'], 'The plural subject "they" takes "are" with the present continuous.'),
  easy('Choose the correct sentence (subject "I").', 'I have a pen.', ['I has a pen.', 'I haves a pen.', 'I am having a pen.'], 'The subject "I" takes "have".'),
  easy('Choose the correct sentence (plural noun).', 'The children are playing.', ['The childrens are playing.', 'The childs are playing.', 'The childrens is playing.'], 'The plural of child is children (irregular); it already ends in -ren.'),
  easy('Choose the correct sentence (comparison).', 'She is taller than me.', ['She is taller then me.', 'She is more taller than me.', 'She is tallest than me.'], 'The comparative takes "than", not "then", and "taller" is already a comparative.'),

  medium('Choose the correct sentence (subject "each").', 'Each of the boys has a book.', ['Each of the boys have a book.', 'Each of the boys are having a book.', 'Each of the boy has a book.'], '"Each" is the subject and is singular, so the verb is "has"; the noun after "of" is plural.'),
  medium('Choose the correct sentence (verb after "did not").', 'He did not come yesterday.', ['He did not came yesterday.', 'He did not comes yesterday.', 'He not came yesterday.'], 'After "did not" the main verb is in the base form: come.'),
  medium('Choose the correct sentence (subject "neither").', 'Neither of them is ready.', ['Neither of them are ready.', 'Neither of them were ready.', 'Neither of them be ready.'], '"Neither" is singular, so "is" is correct.'),
  medium('Choose the correct sentence (adjective or adverb).', 'She sings very well.', ['She sings very good.', 'She sings very goodly.', 'She sing very well.'], '"Sings" is a verb and needs the adverb well; good is an adjective.'),
  medium('Choose the correct sentence (double comparative).', 'He is smarter than his brother.', ['He is more smarter than his brother.', 'He is smarter then his brother.', 'He is most smarter than his brother.'], 'Use either -er or more, never both, and use "than" in a comparison.'),
  medium('Choose the correct sentence (uncountable noun "news").', 'The news is good.', ['The news are good.', 'The news were good.', 'The news be good.'], '"News" is an uncountable noun that takes a singular verb.'),
  medium('Choose the correct sentence (verb "agree").', 'I agree with you.', ['I am agree with you.', 'I am agreeing with you.', 'I agreeing with you.'], '"Agree" is a verb; "am agree" is wrong.'),
  medium('Choose the correct sentence (told or said).', 'She told me that she was late.', ['She said me that she was late.', 'She told that she was late me.', 'She says me she was late.'], '"Tell" takes an object (told me); "say" does not.'),

  placement('Choose the correct sentence (uncountable noun "furniture").', 'Our furniture is old.', ['Our furniture are old.', 'Our furnitures are old.', 'Our furniture were old.'], '"Furniture" is uncountable and takes a singular verb; it has no plural form.'),
  placement('Choose the correct sentence ("look forward to").', 'I look forward to meeting you.', ['I look forward to meet you.', 'I look forward for meeting you.', 'I am look forward to meeting you.'], 'In "look forward to", "to" is a preposition and is followed by an -ing form.'),
  placement('Choose the correct sentence ("the reason is").', 'The reason is that he was late.', ['The reason is because he was late.', 'The reason is for he was late.', 'The reason being because he was late.'], '"The reason is because" is redundant; use "the reason is that".'),
  placement('Choose the correct sentence ("despite").', 'Despite the rain, we went out.', ['Despite of the rain, we went out.', 'Despite from the rain, we went out.', 'In despite of the rain, we went out.'], '"Despite" is not followed by "of"; the alternative is "in spite of the rain".'),
  placement('Choose the correct sentence (reported question).', 'She asked me where I lived.', ['She asked me that where I lived.', 'She asked me where did I live.', 'She asked me where do I live.'], 'A reported question takes statement word order, with no "that".'),
  placement('Choose the correct sentence (neither-nor).', 'Neither Ravi nor his friends are coming.', ['Neither Ravi nor his friends is coming.', 'Neither Ravi nor his friends was coming.', 'Neither Ravi nor his friends has coming.'], 'With neither-nor the verb agrees with the nearer subject, "his friends" (plural), so "are".')
];

build(chapter, quiz);
