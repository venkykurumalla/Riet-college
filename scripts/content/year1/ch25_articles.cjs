const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-verbal-articles', year: 1, category: 'Verbal Ability', num: 25,
  title: 'Articles',
  tagline: 'Year 1 Foundation — A, an, the and when to use no article',
  minutes: 35,
  overview: 'Articles are small words placed before nouns: a, an and the. A and an are indefinite articles used for one non-specific item. The is the definite article used for a specific item that the speaker and listener both know. Sometimes no article is needed. Although articles are tiny, they are a regular topic in fill-in-the-blank and error-spotting questions because the rules depend on sound, not spelling, and on whether a noun is specific, countable or unique.',
  placement: 'Article questions are commonly asked in the verbal ability section of company aptitude rounds, and article errors are among the most common mistakes in written English.',
  realWorld: 'Emails, resumes and product descriptions look polished or careless depending on small choices like "an MBA degree" versus "a MBA degree".',
  objectives: [
    'Choose between a and an by the first sound, not the first letter',
    'Use the for specific and unique things',
    'Recognise when no article is needed',
    'Handle names of rivers, mountains, countries and institutions',
    'Use articles with uncountable and abstract nouns correctly'
  ],
  prereq: ['Parts of Speech'],
  refresher: 'A noun can be singular or plural, countable or uncountable. A and an go only with singular countable nouns.',
  defs: [
    'Indefinite article (a, an): refers to any one member of a class. Use a before a consonant sound and an before a vowel sound.',
    'Definite article (the): refers to a particular, known or unique person or thing.',
    'Zero article (no article): used with plural and uncountable nouns in a general sense, most proper names and some fixed expressions.',
    'Consonant sound: a sound like /b/, /k/, /y/ or /w/ even when the spelling begins with a vowel letter (university, one, European).',
    'Vowel sound: a sound like /a/, /e/, /i/, /o/, /u/ even when the spelling begins with a consonant letter (hour, honest, MBA).'
  ],
  intuition: 'The choice of a or an is purely about how the next word sounds. If it starts with a vowel sound, use an; if it starts with a consonant sound, use a. The choice of the depends on whether the listener can tell which one you mean.',
  mental: 'Say the next word aloud. "Umbrella" starts with an /u/ vowel sound, so an umbrella. "University" starts with a /yoo/ sound (like a y), so a university. "Hour" has a silent h, so an hour.',
  formulas: [
    ['A or an', 'a + consonant sound;  an + vowel sound', 'Decide by sound, not spelling.', 'Any a/an blank.', 'an umbrella, a university, an hour, a European'],
    ['Letters read aloud', 'an MBA, an MS, an SQL query, a UFO, a one-day match', 'Check the sound of the letter name or the word.', 'Abbreviations and numbers.', 'MBA is read "em-bee-ay" → an MBA'],
    ['Use of "the"', 'Unique things (the sun, the moon, the earth), superlatives (the best), rivers (the Ganga), mountain ranges (the Himalayas), musical instruments (the guitar), and things already mentioned', 'The listener knows which one.', 'Definite reference.', 'She plays the guitar.'],
    ['No article', 'Plural or uncountable nouns in a general sense, abstract nouns, languages, meals, most countries and cities', 'No article is needed.', 'General statements.', 'Honesty is the best policy. We have dinner at nine.'],
    ['Fixed expressions with institutions', 'go to school / college / hospital / church (for the usual purpose) takes no article', 'If you refer to the building, use the.', 'Institution questions.', 'He goes to school by bus.']
  ],
  narrative: [
    'The basic rule for a and an depends on sound. The letters a, e, i, o, u usually begin a vowel sound (an apple, an egg, an idea), but not always. University, uniform, European and one begin with a /y/ or /w/ consonant sound, so we say a university, a European, a one-day match. Honest, hour and heir begin with a silent h, so we say an honest girl, an hour, an heir.',
    'For abbreviations, use the sound of the first letter name. MBA is read "em-bee-ay", so an MBA; MS is "em-ess", so an MS; UFO is "yoo-ef-oh", so a UFO.',
    'Use the for things that are unique (the sun, the equator), for superlatives (the best player), for rivers, oceans and mountain ranges (the Ganga, the Pacific, the Himalayas), and for musical instruments (play the guitar). Also use the for something already mentioned: "I saw a dog. The dog was barking."',
    'Do not use an article with plural or uncountable nouns used in a general sense (Honesty is the best policy; Books are friends), with languages (She speaks Telugu), with meals (We have dinner at nine), or with most names of countries, cities and individual mountains.',
    'Institutions such as school, college, hospital and church take no article when used for their usual purpose: "He goes to school by bus" (as a student). If you mean the building, use the: "He went to the school to meet the principal."'
  ],
  deep: [
    ['"The" before adjectives used as nouns', 'The + an adjective can mean a group of people: the rich, the poor, the young. These take a plural verb. "The rich are not always happy."'],
    ['Hotel and building names', 'Many names of hotels, theatres, cinemas and landmarks take the: the Taj Mahal Hotel, the Red Fort. Names of most individual people, cities and companies do not.']
  ],
  variations: [
    ['A or an', 'Choose by the sound of the next word.', 'He bought ___ umbrella.'],
    ['The or no article', 'Unique, superlative, general.', '___ sun rises in the east.'],
    ['Abbreviations', 'MBA, MS, UFO.', 'He is ___ MBA from IIM.'],
    ['Geographical names', 'Rivers, ranges, countries.', '___ Himalayas are in the north.'],
    ['Institutions', 'School, hospital, college.', 'He goes to ___ school by bus.']
  ],
  examples: [
    {
      title: 'A or an by sound',
      q: 'Fill in the blanks: (a) She is ___ honest girl. (b) He is studying in ___ university. (c) He waited for ___ hour.',
      given: ['(a) honest, (b) university, (c) hour'],
      concept: 'Decide by the first sound of the next word.',
      steps: [
        ['honest', 'The h is silent, so the word begins with the vowel sound /o/. Use an.'],
        ['university', 'The word begins with the sound /yoo/ (a consonant sound). Use a.'],
        ['hour', 'The h is silent, so the word begins with a vowel sound. Use an.']
      ],
      ans: '(a) an, (b) a, (c) an',
      why: 'a/an follow the sound, not the spelling.',
      trap: 'Choosing "a" for honest and hour because they begin with the letter h.'
    },
    {
      title: 'The with unique items and instruments',
      q: 'Fill in the blanks with a, an, the or no article: (a) ___ sun rises in the east. (b) She plays ___ guitar. (c) ___ Himalayas are in the north.',
      given: ['(a) unique body, (b) musical instrument, (c) mountain range'],
      concept: 'Use the for unique things, instruments and mountain ranges.',
      steps: [
        ['sun', 'There is only one sun, so the sun.'],
        ['guitar', 'Musical instruments take the: the guitar.'],
        ['Himalayas', 'A mountain range takes the: the Himalayas.']
      ],
      ans: '(a) The, (b) the, (c) The',
      why: 'All three are specific or unique things.',
      trap: 'Leaving out the before a range or instrument.'
    },
    {
      title: 'No article',
      q: 'Fill in the blank: "___ honesty is the best policy." (a / an / the / no article)',
      given: ['Abstract noun used in a general sense'],
      concept: 'Abstract nouns used generally take no article.',
      steps: [
        ['Identify the noun type', 'Honesty is an abstract noun used in a general statement.'],
        ['Apply the rule', 'Abstract nouns used in general take no article.']
      ],
      ans: 'no article',
      why: 'The sentence speaks of honesty in general, not a particular instance of it.',
      trap: 'Adding "the" because the sentence feels formal.'
    }
  ],
  shortcut: {
    title: 'Say it aloud',
    trad: 'Memorise a long list of exceptions to a/an.',
    fast: 'Say the next word aloud. A vowel sound takes an; a consonant sound takes a. For the, ask: do both speaker and listener know exactly which one?',
    rules: [
      'a university, a European, a one-rupee coin (consonant sound).',
      'an hour, an honest man, an MBA, an SQL query (vowel sound).',
      'Use the with rivers, mountain ranges, oceans, superlatives and instruments.',
      'No article with abstract or plural nouns in a general sense, languages and meals.'
    ]
  },
  mistakes: [
    ['Choosing by letter instead of sound', '"a hour" or "an university".', 'Say the word aloud before choosing.'],
    ['Leaving out the with rivers and ranges', '"Himalayas are in the north."', 'Use the with rivers, oceans, ranges and groups of islands.'],
    ['Adding the before abstract nouns', '"The honesty is the best policy."', 'Use no article with abstract nouns used generally.'],
    ['Using a with uncountable nouns', '"a information", "an advice".', 'Use "a piece of information" or "some advice".']
  ],
  tips: {
    sec: 20,
    elim: 'If the next word starts with a vowel letter, check its sound before choosing; this removes two options at once.',
    advice: 'Article blanks are among the quickest grammar questions. Answer them immediately and move on.',
    insight: 'Placement tests like exceptions such as "an MBA", "a university" and "the Himalayas".'
  },
  revision: [
    'a before a consonant sound, an before a vowel sound.',
    'Use the for unique things, superlatives, rivers, ranges, instruments.',
    'No article for general plurals, abstract and uncountable nouns.',
    'MBA → an; university → a; hour → an.',
    'Institutions for their purpose: no article.'
  ],
  quickFormulas: ['a + consonant sound', 'an + vowel sound', 'the + unique / specific'],
  takeaways: [
    'Sound, not spelling.',
    'Specific means "the".',
    'General plurals take no article.',
    'Practise exceptions.'
  ],
  selfCheck: [
    'Can I say why we write "an hour" and "a university"?',
    'Can I choose the right article for the Ganga, the Himalayas, the best player?',
    'Can I explain why "Honesty is the best policy" has no article before honesty?'
  ],
  sources: [
    ['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'The Articles topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Fill in the blank: "He bought ___ umbrella."', 'an', ['a', 'the', 'no article'], 'Umbrella begins with a vowel sound, so "an" is used.'),
  easy('Fill in the blank: "___ sun rises in the east."', 'The', ['A', 'An', 'No article'], 'There is only one sun, so the definite article is used.'),
  easy('Fill in the blank: "She is ___ honest girl."', 'an', ['a', 'the', 'no article'], '"Honest" begins with a silent h, giving a vowel sound, so "an" is used.'),
  easy('Fill in the blank: "I saw ___ elephant in the zoo."', 'an', ['a', 'the', 'no article'], 'Elephant begins with a vowel sound, so "an" is used.'),
  easy('Fill in the blank: "___ Ganga is a holy river."', 'The', ['A', 'An', 'No article'], 'Names of rivers take the definite article: the Ganga.'),
  easy('Fill in the blank: "He is ___ European."', 'a', ['an', 'the', 'no article'], 'European begins with a /y/ consonant sound, so "a" is used.'),

  medium('Fill in the blank: "She is ___ university student."', 'a', ['an', 'the', 'no article'], 'University begins with the consonant sound /yoo/, so "a" is used.'),
  medium('Fill in the blank: "He waited for ___ hour."', 'an', ['a', 'the', 'no article'], 'The h in hour is silent, so the word begins with a vowel sound.'),
  medium('Fill in the blank: "Ravi is ___ best player in the team."', 'the', ['a', 'an', 'no article'], 'A superlative takes the definite article.'),
  medium('Fill in the blank: "My father is ___ engineer."', 'an', ['a', 'the', 'no article'], 'Engineer begins with a vowel sound. A profession after "is" takes a/an.'),
  medium('Fill in the blank: "She plays ___ guitar."', 'the', ['a', 'an', 'no article'], 'Names of musical instruments take the definite article when we speak of playing them.'),
  medium('Fill in the blank: "___ Himalayas are in the north of India."', 'The', ['A', 'An', 'No article'], 'A mountain range takes the definite article.'),
  medium('Fill in the blank: "He goes to ___ school by bus."', 'no article', ['a', 'an', 'the'], 'School is used for its usual purpose (as a student), so no article is needed.'),
  medium('Fill in the blank: "___ honesty is the best policy."', 'no article', ['The', 'A', 'An'], 'An abstract noun used in a general sense takes no article.'),

  placement('Fill in the blank: "It was ___ one-day match."', 'a', ['an', 'the', 'no article'], '"One" begins with the consonant sound /w/, so "a" is used.'),
  placement('Fill in the blank: "He is ___ MBA from a reputed institute."', 'an', ['a', 'the', 'no article'], 'MBA is read "em-bee-ay", which begins with a vowel sound.'),
  placement('Choose the correct sentence.', 'The rich are not always happy.', ['Rich are not always happy.', 'A rich are not always happy.', 'An rich are not always happy.'], '"The" + an adjective names a group of people (the rich), and it takes a plural verb.'),
  placement('Fill in the blank: "We stayed at ___ Taj Mahal Hotel."', 'the', ['a', 'an', 'no article'], 'Names of well-known hotels and landmarks usually take the definite article.'),
  placement('Fill in the blank: "Gold is ___ precious metal."', 'a', ['an', 'the', 'no article'], '"Precious metal" is a singular countable noun phrase, and "precious" begins with a consonant sound.'),
  placement('Fill in the blank: "He bought ___ unique gift for her."', 'a', ['an', 'the', 'no article'], '"Unique" begins with the consonant sound /yoo/, so "a" is used.')
];

build(chapter, quiz);
