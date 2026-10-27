const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-verbal-parts-of-speech', year: 1, category: 'Verbal Ability', num: 23,
  title: 'Parts of Speech',
  tagline: 'Year 1 Foundation — Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions and interjections',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/verbal-ability/questions-and-answers/',
  overview: 'Every word in an English sentence does a job. Grammar groups these jobs into eight classes called parts of speech: noun, pronoun, verb, adjective, adverb, preposition, conjunction and interjection. Knowing the part of speech of a word tells you how it can be used, what it can be joined to, and how it changes form. Many grammar questions in placement tests (error spotting, sentence improvement, fill in the blanks) depend on this skill.',
  placement: 'Parts of speech are the base of the verbal ability section in company aptitude rounds. They are rarely asked in isolation but are needed in almost every grammar question.',
  realWorld: 'Spell-checkers, search engines and translation tools all tag every word with its part of speech before doing anything else, and so does every good writer when editing a sentence.',
  objectives: [
    'Define and recognise the eight parts of speech',
    'Decide the part of speech from the job the word does in a sentence',
    'Recognise words that change class between sentences (run, light, round)',
    'Choose the correct case of a pronoun (I/me/my, he/him/his)',
    'Distinguish adjectives from adverbs'
  ],
  prereq: ['Basic English sentence structure'],
  refresher: 'A sentence needs at least a subject and a verb. The subject is who or what the sentence is about; the verb tells what the subject does or is.',
  defs: [
    'Noun: a word that names a person, place, thing, animal or idea (Ravi, Chennai, table, honesty). Kinds: common, proper, collective (flock, team), abstract (honesty), material (gold).',
    'Pronoun: a word used in place of a noun (he, she, it, they, who, this, mine).',
    'Verb: a word that shows action, state or being (run, is, seem, have).',
    'Adjective: a word that describes or limits a noun or pronoun (tall boy, three books).',
    'Adverb: a word that tells how, when, where or to what extent about a verb, adjective or another adverb (quickly, very, here).',
    'Preposition: a word that shows the relation of a noun or pronoun to another word (in, on, under, with). Conjunction: a word that joins words, phrases or clauses (and, but, because, although). Interjection: a word that expresses sudden feeling (Hurrah! Alas!).'
  ],
  intuition: 'You cannot tell the part of speech of a word by looking at it alone; you must see what it does in the sentence. "Run" is a verb in "I run daily" and a noun in "He went for a run". The question to ask is always: what job is this word doing here?',
  mental: 'Use short tests. Can you put "the" or "a" before it? Then it acts as a noun. Can it take "-ed" or change for tense? It is a verb. Does it describe a noun? It is an adjective. Does it tell how or when the action happened? It is an adverb.',
  formulas: [
    ['Noun test', 'Can take "a", "the" or a plural "s"', 'If the word names something, check whether it can follow an article.', 'Identifying nouns.', 'the honesty of Ravi → honesty is a noun'],
    ['Adjective versus adverb', 'Adjective → modifies a noun;  Adverb → modifies a verb, adjective or another adverb', 'Many adverbs end in -ly, but friendly, lovely and lonely are adjectives.', 'Choosing between "quick" and "quickly".', 'She is a quick learner (adj); She learns quickly (adv)'],
    ['Pronoun cases', 'Subject: I, he, she, we, they, who.  Object: me, him, her, us, them, whom.  Possessive: my, his, her, our, their, whose', 'Use the subject form before a verb and the object form after a verb or preposition.', 'Pronoun choice questions.', 'Between you and me (object after "between")'],
    ['Same word, different class', 'The job in the sentence decides the class', 'Run, light, round, after, before can change class.', 'Questions that ask "the word X is a ...".', 'after she reached → conjunction; after the meeting → preposition'],
    ['Preposition test', 'It is followed by a noun or pronoun (its object)', 'If a clause follows, the word is a conjunction.', 'Distinguishing preposition and conjunction.', 'before dinner (prep) / before he left (conj)']
  ],
  narrative: [
    'Start with the nouns and verbs, since every sentence has at least one of each. In "Ravi reads a book", Ravi and book are nouns and reads is a verb. The article a is a kind of adjective (a determiner) that points to the noun book.',
    'Adjectives and adverbs are the main source of confusion. An adjective answers "which one" or "what kind" about a noun: a quick reply. An adverb answers "how", "when", "where" or "to what extent" about a verb, adjective or adverb: he replied quickly; she is very kind. Words like friendly, lovely and lonely look like adverbs because they end in -ly but they are adjectives.',
    'Pronouns replace nouns and change form with their role. Use "I", "he", "she", "we" and "they" as subjects; use "me", "him", "her", "us" and "them" as objects. After a preposition always use the object form: between you and me, with them, for her.',
    'Prepositions and conjunctions can look alike. After is a preposition when followed by a noun phrase (after the meeting) and a conjunction when followed by a full clause (after she reached home). The test is what follows the word.',
    'Many words move between classes. "A run" is a noun and "to run" is a verb. "The poor need help" uses poor (normally an adjective) as a noun meaning poor people. Always decide the class from the sentence, not from memory.'
  ],
  deep: [
    ['Kinds of nouns worth knowing', 'Collective nouns name a group (a flock of birds, a team of players). Abstract nouns name qualities or ideas (honesty, freedom). Uncountable (mass) nouns such as water, information and advice have no plural form and take no "a".'],
    ['Possessive adjectives and pronouns', 'My, your, his, her, its, our and their come before a noun (my book) and are called possessive adjectives. Mine, yours, his, hers, ours and theirs stand alone (the book is mine) and are possessive pronouns.']
  ],
  variations: [
    ['Identify the part of speech', 'Name the class of a word in a sentence.', 'In "She sings beautifully", beautifully is an adverb.'],
    ['Same word, two roles', 'Decide from the context.', 'run (noun) / run (verb)'],
    ['Pronoun case', 'Choose between I/me, he/him.', 'Between you and ___.'],
    ['Adjective or adverb', 'Choose the correct form.', 'He is a ___ driver. (careful/carefully)'],
    ['Kinds of nouns', 'Collective, abstract, uncountable.', 'A flock of sheep (collective).']
  ],
  examples: [
    {
      title: 'Identifying parts of speech',
      q: 'Name the part of speech of each underlined word: "The tall boy quickly ran to the market and bought mangoes."  (tall, quickly, to, and)',
      given: ['Sentence: The tall boy quickly ran to the market and bought mangoes.'],
      concept: 'Ask what job each word does.',
      steps: [
        ['tall', 'It describes the noun boy, so it is an adjective.'],
        ['quickly', 'It tells how the boy ran, so it is an adverb.'],
        ['to', 'It shows the relation between ran and market, so it is a preposition.'],
        ['and', 'It joins two actions (ran and bought), so it is a conjunction.']
      ],
      ans: 'tall – adjective; quickly – adverb; to – preposition; and – conjunction',
      why: 'Each word is classified by the job it does in the sentence.',
      trap: 'Calling "quickly" an adjective because it describes something.'
    },
    {
      title: 'Same word, different class',
      q: 'State the part of speech of "after" in (a) "He left after the meeting." and (b) "She called me after she reached home."',
      given: ['(a) after the meeting', '(b) after she reached home'],
      concept: 'A preposition takes a noun; a conjunction joins clauses.',
      steps: [
        ['Sentence (a)', 'After is followed by the noun phrase "the meeting" (no verb), so it is a preposition.'],
        ['Sentence (b)', 'After is followed by the clause "she reached home" (subject and verb), so it is a conjunction.']
      ],
      ans: '(a) preposition, (b) conjunction',
      why: 'What follows the word decides its class.',
      trap: 'Learning "after" as only one class.'
    },
    {
      title: 'Pronoun case',
      q: 'Choose the correct pronoun: "Between you and ___, the plan is risky."  (I / me / myself / mine)',
      given: ['Options: I, me, myself, mine'],
      concept: 'After a preposition, use the object form.',
      steps: [
        ['Find the structure', '"Between" is a preposition, and "you and ___" is its object.'],
        ['Choose the object form', 'The object form of I is me.']
      ],
      ans: 'me',
      why: '"Between you and me" is correct because both pronouns are objects of the preposition.',
      trap: 'Choosing "I" because "you and I" sounds more polite.'
    }
  ],
  shortcut: {
    title: 'Job-in-the-sentence test',
    trad: 'Memorise lists of words under each part of speech.',
    fast: 'Ask: what does the word do here? Names a thing → noun; replaces a noun → pronoun; shows action or state → verb; describes a noun → adjective; describes a verb/adjective/adverb → adverb; links a noun to another word → preposition; joins clauses → conjunction; shows emotion → interjection.',
    rules: [
      'Not every -ly word is an adverb (friendly, lovely, lonely are adjectives).',
      'Pronouns after prepositions take the object form.',
      'If a full clause follows the word, it is a conjunction, not a preposition.',
      'Uncountable nouns such as information and advice take no "a" and no plural "s".'
    ]
  },
  mistakes: [
    ['Treating all -ly words as adverbs', 'Assuming the ending decides the class.', 'Check what the word describes: a noun means an adjective.'],
    ['Using a subject pronoun after a preposition', 'Saying "between you and I" because it sounds formal.', 'After a preposition, always use the object form (me, him, her, us, them).'],
    ['Pluralising uncountable nouns', 'Writing "informations", "advices".', 'Use "pieces of information", "pieces of advice".'],
    ['Classifying a word out of context', 'Thinking that "run" is only a verb.', 'Decide the class from the sentence every time.']
  ],
  tips: {
    sec: 30,
    elim: 'In a fill-in-the-blank, first decide which part of speech is needed in that gap and discard options of any other class.',
    advice: 'Parts of speech form the foundation; spend time here and the later grammar topics become easier.',
    insight: 'Error-spotting questions often hinge on an adjective used for an adverb or a wrong pronoun case.'
  },
  revision: [
    'Eight parts of speech: noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection.',
    'The job in the sentence decides the class.',
    'Adjectives modify nouns; adverbs modify verbs, adjectives and adverbs.',
    'After a preposition use the object pronoun.',
    'Uncountable nouns have no plural.'
  ],
  quickFormulas: ['Subject: I, he, she, we, they', 'Object: me, him, her, us, them', 'Possessive: my, his, her, our, their'],
  takeaways: [
    'Classify words by their job.',
    'Know the -ly exceptions.',
    'Keep pronoun cases straight.',
    'Same word, different class.'
  ],
  selfCheck: [
    'Can I name the part of speech of each word in a simple sentence?',
    'Can I give an example of a word used both as a noun and a verb?',
    'Can I choose between "I" and "me" in a compound phrase?'
  ],
  sources: [
    ['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'The Parts of Speech topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Identify the verb in the sentence: "She sings beautifully."', 'sings', ['She', 'beautifully', 'None of these'], '"Sings" tells the action done by the subject, so it is the verb.'),
  easy('Identify the adjective in the sentence: "The tall boy won the race."', 'tall', ['boy', 'won', 'race'], '"Tall" describes the noun boy, so it is an adjective.'),
  easy('Identify the adverb in the sentence: "He ran quickly."', 'quickly', ['He', 'ran', 'None of these'], '"Quickly" tells how he ran, so it is an adverb.'),
  easy('Identify the pronoun in the sentence: "Rahul gave her a book."', 'her', ['Rahul', 'gave', 'book'], '"Her" takes the place of a noun (a girl or woman), so it is a pronoun.'),
  easy('Identify the preposition in the sentence: "The cat is under the table."', 'under', ['cat', 'is', 'table'], '"Under" shows the relation between the cat and the table, so it is a preposition.'),
  easy('Identify the conjunction in the sentence: "I wanted to go, but it rained."', 'but', ['wanted', 'go', 'rained'], '"But" joins the two clauses, so it is a conjunction.'),

  medium('In "The patient was happy", the word "happy" is a/an', 'adjective', ['noun', 'adverb', 'verb'], '"Happy" describes the noun patient, so it is an adjective.'),
  medium('In "Let\'s go for a run", the word "run" is a', 'noun', ['verb', 'adjective', 'adverb'], 'After the article "a", "run" names an activity, so it is a noun.'),
  medium('In "Hurrah! We won the match", the word "Hurrah" is a/an', 'interjection', ['adverb', 'noun', 'conjunction'], '"Hurrah" expresses sudden joy, so it is an interjection.'),
  medium('The word "honesty" is a/an', 'abstract noun', ['collective noun', 'adjective', 'proper noun'], '"Honesty" names a quality, which makes it an abstract noun.'),
  medium('Which of the following is a collective noun?', 'Flock', ['Sheep', 'Shepherd', 'Wool'], 'A flock names a group of animals (birds or sheep), so it is a collective noun.'),
  medium('In "This is my book", the word "my" is a', 'possessive adjective', ['noun', 'verb', 'adverb'], '"My" shows ownership and comes before the noun book, so it is a possessive adjective.'),
  medium('Which of the following is an uncountable noun?', 'Water', ['Book', 'Chair', 'Pen'], 'Water is a mass noun with no plural form in everyday use; book, chair and pen can be counted.'),
  medium('Choose the correct pronoun: "Neither of the boys brought ___ book."', 'his', ['their', 'her', 'our'], '"Neither" takes a singular pronoun. The boys are male, so "his" is correct.'),

  placement('Choose the correct pronoun: "Between you and ___, the plan is risky."', 'me', ['I', 'myself', 'mine'], '"Between" is a preposition and needs the object form "me".'),
  placement('In "She called me after she reached home", the word "after" is a', 'conjunction', ['preposition', 'adverb', 'adjective'], '"After" is followed by the clause "she reached home", so it joins two clauses: a conjunction.'),
  placement('Which of the following is an adverb?', 'quickly', ['friendly', 'lovely', 'lonely'], 'Friendly, lovely and lonely are adjectives that end in -ly. "Quickly" is an adverb.'),
  placement('In "The poor need help", the word "poor" is used as a', 'noun', ['verb', 'adverb', 'preposition'], 'Here "the poor" means poor people, so the adjective is used as a (plural) noun.'),
  placement('Choose the correct form: "She is ___ than her sister."', 'taller', ['tall', 'tallest', 'more tall'], 'Two people are compared, so the comparative form "taller" is needed.'),
  placement('Choose the grammatically correct sentence.', 'He and I went to the market.', ['Me and him went to the market.', 'Him and me went to the market.', 'I and he went to the market.'], 'Both pronouns are subjects, so the subject forms "he" and "I" are used. By convention, "I" is placed last.')
];

build(chapter, quiz);
