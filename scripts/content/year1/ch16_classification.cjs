const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-lr-classification', year: 1, category: 'Logical Reasoning', num: 16,
  title: 'Classification / Odd One Out',
  tagline: 'Year 1 Foundation — Grouping words by a shared property and spotting the one that does not belong',
  minutes: 35,
  overview: 'A classification question gives four or five words (or items) and asks you to pick the one that does not belong with the others. Three or four of the words share a property such as being a fruit, a mammal, a metal or a language; the odd one lacks that property. The task is to discover the shared property quickly and precisely. This chapter focuses on words; the next chapter covers numbers and letters.',
  placement: 'Classification questions are commonly asked in the reasoning section of company aptitude rounds. They are easy marks for students who build the habit of naming the common property before choosing.',
  realWorld: 'Sorting items in a shop, filing documents into folders and tagging products in an online catalogue all rely on classification.',
  objectives: [
    'Identify the common property shared by a group of words',
    'Distinguish between a category and an exception within it',
    'Handle questions where more than one property fits, by choosing the most specific one',
    'Classify items by use, origin, state, shape and unit',
    'Avoid being misled by words that look similar'
  ],
  prereq: ['Basic general knowledge of animals, plants, materials and units', 'Analogy'],
  refresher: 'Common groupings: fruits and vegetables; mammals, birds, reptiles and fish; metals and non-metals; 2D and 3D shapes; units of length, mass and volume; languages and programming languages.',
  defs: [
    'Classification: the process of placing items into groups according to a shared property.',
    'Common property: the attribute that three or four of the items share (for example "all are mammals").',
    'Odd one out: the item that does not have the common property.',
    'Category and exception: a category is the set of items with the property; an exception is an item that fails the property test.',
    'Specific property: the narrowest property shared by the majority; it is usually the intended one.'
  ],
  intuition: 'Every odd-one-out question has exactly one intended property. Your job is to name it. A good habit is to find two of the items that obviously belong together, name what they share, and then check whether the remaining items share it.',
  mental: 'Picture four boxes of labels. If three words fit under the label "birds" and the fourth fits under "mammals", the fourth is odd. If more than one label fits, choose the label that fits the largest group of items most precisely.',
  formulas: [
    ['Step 1: pair up', 'Find the two most obviously related words', 'Start where the relationship is strongest.', 'Any odd-one-out question.', 'Dog, Cat → animals / mammals'],
    ['Step 2: name the property', 'Write the property in one phrase', 'Be specific: "mammals" is better than "animals".', 'When several properties seem to fit.', 'Dog, Cat, Cow → mammals'],
    ['Step 3: test the rest', 'Check the other items against the property', 'The item that fails is the answer.', 'All questions.', 'Sparrow is a bird → odd one out'],
    ['Common classes', 'Mammals, birds, fish, reptiles; metals, non-metals; length, mass, volume; 2D, 3D', 'Frequently used categories.', 'Recognise them at a glance.', 'Litre is a unit of volume; the others are units of length'],
    ['Specificity rule', 'If two properties fit, choose the one shared by more items', 'Three-versus-one beats two-versus-two.', 'Ambiguous items.', 'Iron, Copper, Gold, Diamond → three metals, one non-metal']
  ],
  narrative: [
    'Read all the words once before deciding. Many mistakes come from stopping at the first two words and forming a wrong idea of the property. The correct property must hold for all items except one.',
    'Think of several properties for each word: what it is (category), where it lives or is used (habitat or function), what it is made of, what it measures, how it looks. For Mercury, Venus, Moon and Mars the property "planets" covers three; the Moon is a satellite, so it is the odd one out.',
    'When a word belongs to more than one class (a bat is a mammal that flies), look for the property that separates the odd item most cleanly. In Eagle, Parrot, Bat and Crow, "birds" fits three and Bat is the mammal. "Flying animals" would fit all four, so it is not the intended property.',
    'Unit and measurement questions are common: in Kilometre, Litre, Metre and Centimetre, three measure length, so Litre (volume) is the odd one. In Kilogram, Metre, Second and Newton, the first three are base units while Newton is derived.'
  ],
  deep: [
    ['Two plausible answers', 'If you find two words that could both be odd, step back and name the properties. The better answer usually has the property that fits exactly three other words, with a clear reason why the odd word fails.'],
    ['Why general knowledge matters', 'Classification questions use ordinary facts: whale and dolphin are mammals, shark is a fish, diamond is a form of carbon and not a metal. Reading widely helps more than memorising any rule.']
  ],
  variations: [
    ['Living things', 'Animals, birds, plants.', 'Dog, Cat, Sparrow, Cow'],
    ['Materials and substances', 'Metals, elements, compounds.', 'Iron, Copper, Gold, Diamond'],
    ['Units and measurements', 'Length, mass, volume, time.', 'Kilometre, Litre, Metre, Centimetre'],
    ['Places and objects', 'Cities, instruments, games.', 'Sitar, Veena, Tabla, Guitar'],
    ['Shapes and abstract groups', 'Two-dimensional versus three-dimensional.', 'Triangle, Square, Cube, Circle']
  ],
  examples: [
    {
      title: 'Animals',
      q: 'Find the odd one out: Dog, Cat, Sparrow, Cow',
      given: ['Items: Dog, Cat, Sparrow, Cow'],
      concept: 'Name the property shared by three items.',
      steps: [
        ['Pair the obvious items', 'Dog and Cat are mammals.'],
        ['Test the others', 'Cow is a mammal. Sparrow is a bird.'],
        ['Choose', 'Sparrow does not share the property.']
      ],
      ans: 'Sparrow',
      why: 'Three are mammals and one is a bird.',
      trap: 'Selecting Cow because it is not a pet.'
    },
    {
      title: 'Units',
      q: 'Find the odd one out: Kilometre, Litre, Metre, Centimetre',
      given: ['Items: Kilometre, Litre, Metre, Centimetre'],
      concept: 'Identify what each item measures.',
      steps: [
        ['List what each measures', 'Kilometre: length. Litre: volume. Metre: length. Centimetre: length.'],
        ['Identify the property', 'Three are units of length.'],
        ['Choose', 'Litre is a unit of volume.']
      ],
      ans: 'Litre',
      why: 'The group property is "unit of length".',
      trap: 'Choosing Centimetre because it is the smallest.'
    },
    {
      title: 'Sub-classes',
      q: 'Find the odd one out: Whale, Shark, Dolphin, Seal',
      given: ['Items: Whale, Shark, Dolphin, Seal'],
      concept: 'All live in water, so look for a finer property.',
      steps: [
        ['Try "live in water"', 'All four live in water, so this property cannot separate them.'],
        ['Try "mammals"', 'Whale, Dolphin and Seal are mammals.'],
        ['Identify the exception', 'Shark is a fish.']
      ],
      ans: 'Shark',
      why: 'A property that fits every item cannot make one odd; a finer property is needed.',
      trap: 'Stopping at "sea animals" and finding no odd one.'
    }
  ],
  shortcut: {
    title: 'Name-the-property method',
    trad: 'Compare every item with every other item.',
    fast: 'Find the two closest words, name their property, and test the remaining words against it. One test per word is enough.',
    rules: [
      'If every word fits your property, the property is too broad; narrow it down.',
      'Prefer properties that separate three words from one.',
      'Check units, states and categories first in science-related questions.',
      'Do not choose based on spelling or length of the word unless all other properties fail.'
    ]
  },
  mistakes: [
    ['Using a property that fits all items', 'Choosing a broad label such as "animals".', 'Narrow it down until exactly one item fails.'],
    ['Choosing based on a rare property', 'Picking the item that is not a pet, not red, not large.', 'Choose the scientific or functional property.'],
    ['Over-thinking trivia', 'Spending time on obscure meanings.', 'Take the common everyday meaning.'],
    ['Reading only two words', 'Forming the property from the first two items.', 'Read all items before deciding.']
  ],
  tips: {
    sec: 30,
    elim: 'Cross out the two words that clearly belong together, then test the other two against their property.',
    advice: 'These are quick questions; if the property is not clear in 20 seconds, skip.',
    insight: 'The best preparation is general awareness: units, categories of animals, materials, instruments.'
  },
  revision: [
    'Name the property before choosing.',
    'The property must fit all but one item.',
    'Narrow a property that fits everything.',
    'Check units, categories, states and functions.',
    'Prefer the specific property.'
  ],
  quickFormulas: ['Pair → name → test', 'Three-versus-one beats two-versus-two'],
  takeaways: [
    'Always state the property in words.',
    'Specific properties win.',
    'General knowledge is the real preparation.',
    'Do not choose on appearance alone.'
  ],
  selfCheck: [
    'Can I say what property Iron, Copper and Gold share, and why Diamond is out?',
    'Can I explain why Bat is the odd one in Eagle, Parrot, Bat, Crow?',
    'Can I separate base units from derived units?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Classification topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Find the odd one out: Apple, Mango, Potato, Banana', 'Potato', ['Apple', 'Mango', 'Banana'], 'Apple, mango and banana are fruits. Potato is a vegetable.'),
  easy('Find the odd one out: Dog, Cat, Sparrow, Cow', 'Sparrow', ['Dog', 'Cat', 'Cow'], 'Dog, cat and cow are mammals. Sparrow is a bird.'),
  easy('Find the odd one out: Mercury, Venus, Moon, Mars', 'Moon', ['Mercury', 'Venus', 'Mars'], 'Mercury, Venus and Mars are planets. The Moon is a natural satellite.'),
  easy('Find the odd one out: Rose, Lily, Jasmine, Mango', 'Mango', ['Rose', 'Lily', 'Jasmine'], 'Rose, lily and jasmine are flowers. Mango is a fruit.'),
  easy('Find the odd one out: Pen, Pencil, Eraser, Chalk', 'Eraser', ['Pen', 'Pencil', 'Chalk'], 'Pen, pencil and chalk are used to write. An eraser is used to remove writing.'),
  easy('Find the odd one out: Red, Blue, Green, Square', 'Square', ['Red', 'Blue', 'Green'], 'Red, blue and green are colours. Square is a shape.'),

  medium('Find the odd one out: Java, Python, HTML, Windows', 'Windows', ['Java', 'Python', 'HTML'], 'Java, Python and HTML are languages used to write software or web pages. Windows is an operating system.'),
  medium('Find the odd one out: Triangle, Square, Cube, Circle', 'Cube', ['Triangle', 'Square', 'Circle'], 'Triangle, square and circle are flat (2D) shapes. A cube is a solid (3D) shape.'),
  medium('Find the odd one out: Mumbai, Chennai, Kolkata, Delhi', 'Delhi', ['Mumbai', 'Chennai', 'Kolkata'], 'Mumbai, Chennai and Kolkata are coastal port cities. Delhi is an inland city.'),
  medium('Find the odd one out: Kilometre, Litre, Metre, Centimetre', 'Litre', ['Kilometre', 'Metre', 'Centimetre'], 'Kilometre, metre and centimetre are units of length. The litre is a unit of volume.'),
  medium('Find the odd one out: Eagle, Parrot, Bat, Crow', 'Bat', ['Eagle', 'Parrot', 'Crow'], 'Eagle, parrot and crow are birds. A bat is a flying mammal.'),
  medium('Find the odd one out: Iron, Copper, Gold, Diamond', 'Diamond', ['Iron', 'Copper', 'Gold'], 'Iron, copper and gold are metals. Diamond is a form of carbon, a non-metal.'),
  medium('Find the odd one out: Whale, Shark, Dolphin, Seal', 'Shark', ['Whale', 'Dolphin', 'Seal'], 'Whale, dolphin and seal are mammals. Shark is a fish.'),
  medium('Find the odd one out: Wheat, Rice, Maize, Cotton', 'Cotton', ['Wheat', 'Rice', 'Maize'], 'Wheat, rice and maize are cereal food crops. Cotton is a fibre crop.'),

  placement('Find the odd one out: Tenor, Bass, Soprano, Violin', 'Violin', ['Tenor', 'Bass', 'Soprano'], 'Tenor, bass and soprano are types of singing voice. The violin is a musical instrument.'),
  placement('Find the odd one out: Sitar, Veena, Tabla, Guitar', 'Tabla', ['Sitar', 'Veena', 'Guitar'], 'Sitar, veena and guitar are string instruments. The tabla is a percussion instrument.'),
  placement('Find the odd one out: Hydrogen, Oxygen, Water, Nitrogen', 'Water', ['Hydrogen', 'Oxygen', 'Nitrogen'], 'Hydrogen, oxygen and nitrogen are elements. Water is a compound.'),
  placement('Find the odd one out: Kilogram, Metre, Second, Newton', 'Newton', ['Kilogram', 'Metre', 'Second'], 'Kilogram, metre and second are base units of the SI system. Newton is a derived unit (kg·m/s²).'),
  placement('Find the odd one out: Voltmeter, Ammeter, Thermometer, Galvanometer', 'Thermometer', ['Voltmeter', 'Ammeter', 'Galvanometer'], 'Voltmeter, ammeter and galvanometer are used in electrical circuits. A thermometer measures temperature.'),
  placement('Find the odd one out: Ludo, Chess, Carrom, Cricket', 'Cricket', ['Ludo', 'Chess', 'Carrom'], 'Ludo, chess and carrom are indoor board games. Cricket is an outdoor field game.')
];

build(chapter, quiz);
