const { easy, medium, placement, build } = require('../lib.cjs');

// Each item lists the sentences in their correct order. They are shown in a scrambled order with labels
// P, Q, R, S (T), and the answer string is computed from the scramble.
const LABELS = 'PQRST';
let seed = 7;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
const shuffle = n => { let a; do { a = Array.from({ length: n }, (_, i) => i).sort(() => rnd() - 0.5); } while (a.every((v, i) => v === i)); return a; };
const pj = (d, sentences) => {
  const n = sentences.length;
  const order = shuffle(n); // order[k] = index (in correct order) of the sentence shown with label k
  const label = idx => LABELS[order.indexOf(idx)];
  const answer = Array.from({ length: n }, (_, i) => label(i)).join('');
  const variants = new Set();
  const a = answer.split('');
  for (let i = 0; i < n - 1 && variants.size < 3; i++) { const b = [...a]; [b[i], b[i + 1]] = [b[i + 1], b[i]]; const s = b.join(''); if (s !== answer) variants.add(s); }
  for (let i = 0; i < n - 2 && variants.size < 3; i++) { const b = [...a]; [b[i], b[i + 2]] = [b[i + 2], b[i]]; const s = b.join(''); if (s !== answer) variants.add(s); }
  const shown = order.map((idx, k) => `${LABELS[k]}. ${sentences[idx]}`).join('\n');
  return d('Arrange the sentences P, Q, R, ' + LABELS.slice(3, n).split('').join(', ') + ' in the correct order to form a meaningful paragraph.\n' + shown, answer, [...variants].slice(0, 3),
    'The correct order is ' + answer.split('').join(' → ') + '. ' + sentences.map((s, i) => `${i + 1}) ${s}`).join(' ').slice(0, 240));
};

const chapter = {
  id: 'y2-verbal-basic-para-jumbles', year: 2, category: 'Advanced Verbal Ability', num: 42, difficulty: 'Intermediate',
  title: 'Basic Para Jumbles',
  tagline: 'Year 2 — Arranging jumbled sentences into a logical paragraph',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/verbal-ability/questions-and-answers/',
  overview: 'A para jumble gives you four or five sentences in a scrambled order and asks for the arrangement that forms a meaningful paragraph. The sentences are linked by time order, cause and effect, pronoun reference, connectors (however, therefore, finally) and the movement from general to specific. The skill is to find the opening sentence, the closing sentence and the links in between.',
  placement: 'Para jumble questions are commonly asked in the verbal ability section of company aptitude rounds, usually with four sentences.',
  realWorld: 'Organising the steps of a procedure, structuring an email and ordering the points of an argument use the same logic.',
  objectives: [
    'Find the opening sentence (a general statement or introduction)',
    'Find the closing sentence (a conclusion or final result)',
    'Use pronouns and connectors to link sentences',
    'Follow time order and cause-effect order',
    'Test the final order by reading the paragraph aloud'
  ],
  prereq: ['Paragraph Completion', 'Parts of Speech'],
  refresher: 'A pronoun (he, it, they, this) refers to something mentioned before; a sentence beginning with a pronoun is rarely the first.',
  defs: [
    'Opening sentence: introduces the topic and uses names rather than pronouns.',
    'Connector: a word that links ideas (then, therefore, however, finally).',
    'Chronological order: the order in which events happen.',
    'Cause-effect order: the cause comes before the effect.',
    'Pair: two sentences that clearly belong together (for example a question and its answer).'
  ],
  intuition: 'A paragraph has a shape: an opening idea, development, and a close. Each sentence leans on the one before it, usually through a pronoun or a connector. Find a pair that clearly fits, then extend the chain in both directions.',
  mental: 'First pick the sentence that could start the paragraph. Then find the sentence that follows it using pronouns and connectors. Test each candidate order by reading it as a whole.',
  formulas: [
    ['Opening sentence', 'General statement; names rather than pronouns; no connector', 'It sets the topic.', 'First sentence.', 'Ravi woke up early in the morning.'],
    ['Pronoun link', 'A sentence with he/she/it/they follows one that names the person or thing', 'Check the reference.', 'Linking.', 'Ravi … He …'],
    ['Connector link', 'Then, soon, finally, therefore, however', 'These show order or logic.', 'Linking.', 'Then he had breakfast'],
    ['Time and cause order', 'Earlier event first; cause before effect', 'Look at the logic.', 'Stories and processes.', 'Seed planted → watered → sprouted → tree'],
    ['Closing sentence', 'A result, conclusion or final step', 'Words like finally, hence, so.', 'Last sentence.', 'Soon the ground was full of children.']
  ],
  narrative: [
    'Start by finding the opening sentence. It usually introduces the subject by name and does not depend on any earlier sentence. "Ravi woke up early in the morning" can start a paragraph; "He brushed his teeth" cannot.',
    'Then link sentences with pronouns and connectors. "He brushed his teeth and took a bath" follows the sentence that names Ravi. "Then he had breakfast" follows the bath. "Finally, he left for school" closes the sequence.',
    'For explanatory paragraphs, use cause and effect. "Vehicles and factories release harmful gases" explains why "pollution is increasing"; "These gases make the air unhealthy" follows the gases; "Therefore, we must use public transport" is the conclusion.',
    'For longer sets of five sentences, find two or three pairs first and then join them. The final sentence often starts with therefore, hence or as a result.',
    'Finally, read the arranged paragraph aloud to check that it flows and that no sentence is out of place.'
  ],
  deep: [
    ['Definition-first paragraphs', 'Explanations often begin with a definition ("A computer is an electronic machine"), then describe how it works, and end with its uses.'],
    ['Distractor orders', 'Wrong options usually swap two neighbouring sentences. Check each swap against the pronoun and connector links.']
  ],
  variations: [
    ['Daily routines', 'Time order.', 'Wake up, bath, breakfast, school'],
    ['Growth and process', 'Stages.', 'Seed, water, sprout, tree'],
    ['Cause and effect', 'Reason then result.', 'Pollution, gases, air, action'],
    ['Biographical order', 'Birth, study, work.', 'Gandhi'],
    ['Argument', 'Statement, support, conclusion.', 'Time is precious']
  ],
  examples: [
    {
      title: 'Time order',
      q: 'Arrange: Finally, he left for school. / Ravi woke up early in the morning. / Then he had breakfast. / He brushed his teeth and took a bath.',
      given: ['Four sentences'],
      concept: 'Chronological order.',
      steps: [['Opening', 'Ravi woke up early in the morning.'], ['Next', 'He brushed his teeth and took a bath.'], ['Then', 'Then he had breakfast.'], ['Close', 'Finally, he left for school.']],
      ans: 'Ravi woke up → brushed teeth and bathed → had breakfast → left for school', why: 'Connectors then and finally show the order.', trap: 'Starting with Finally.'
    },
    {
      title: 'Cause and effect',
      q: 'Arrange: These gases make the air unhealthy. / Pollution is increasing in cities. / Therefore, we must use public transport and plant trees. / Vehicles and factories release harmful gases.',
      given: ['Four sentences'],
      concept: 'Problem, cause, effect, conclusion.',
      steps: [['Opening', 'Pollution is increasing in cities.'], ['Cause', 'Vehicles and factories release harmful gases.'], ['Effect', 'These gases make the air unhealthy.'], ['Conclusion', 'Therefore, we must use public transport and plant trees.']],
      ans: 'Pollution → cause → effect → conclusion', why: 'These refers back to gases; therefore closes the paragraph.', trap: 'Placing the effect before the cause.'
    },
    {
      title: 'Pronoun link',
      q: 'In the pair "Ravi woke up early. He brushed his teeth", why must the sentence with "He" come second?',
      given: ['Pronoun He'],
      concept: 'Pronoun reference.',
      steps: [['Pronoun', 'He needs an earlier sentence that names the person.'], ['Order', 'The sentence naming Ravi comes first.']],
      ans: 'The pronoun refers to Ravi, who is named in the earlier sentence', why: 'Pronouns follow the noun they stand for.', trap: 'Starting with a pronoun sentence.'
    }
  ],
  shortcut: {
    title: 'Opening, links, closing',
    trad: 'Try all permutations.',
    fast: 'Find the opening sentence, link by pronouns and connectors, and place the sentence with finally/therefore last. Test the order by reading.',
    rules: ['Names before pronouns.', 'Cause before effect.', 'Therefore and finally close.', 'Check the whole paragraph.']
  },
  mistakes: [
    ['Starting with a pronoun sentence', 'Beginning with "He …".', 'Find the sentence that names the person.'],
    ['Ignoring connectors', 'Missing then/finally.', 'Use them as signposts.'],
    ['Reversing cause and effect', 'Effect before cause.', 'Cause comes first.'],
    ['Not checking the flow', 'Leaving the paragraph unread.', 'Read it as a whole.']
  ],
  tips: { sec: 60, elim: 'Eliminate options that start with a pronoun sentence.', advice: 'Fix the first sentence, then the last.', insight: 'Most jumbles have one clear pair.' },
  revision: ['Opening sentence.', 'Pronoun links.', 'Connectors.', 'Cause then effect.', 'Closing sentence.'],
  quickFormulas: ['Names → pronouns', 'Cause → effect'],
  takeaways: ['Find the opening.', 'Use links.', 'Find the close.', 'Read to check.'],
  selfCheck: ['Can I pick the opening sentence?', 'Can I use connectors?', 'Can I arrange a four-sentence paragraph?'],
  sources: [['Objective General English — S.P. Bakshi', 'Textbook', 'Rearrangement and reading skills; examples are original.']]
};

const S = {
  e1: ['Ravi woke up early in the morning.', 'He brushed his teeth and took a bath.', 'Then he had breakfast.', 'Finally, he left for school.'],
  e2: ['The sun rose in the east.', 'Slowly its light spread over the fields.', 'Farmers started their work.', 'By noon, the fields were full of workers.'],
  e3: ['A seed was planted in the garden.', 'It was watered every day.', 'Soon a small plant sprouted.', 'In time, the plant grew into a tall tree.'],
  e4: ['Mina wanted to bake a cake.', 'She collected all the ingredients.', 'She mixed them and put the batter in the oven.', 'After an hour, the cake was ready.'],
  e5: ['The bell rang at four o\'clock.', 'Students rushed out of the classrooms.', 'They ran towards the playground.', 'Soon the ground was full of children.'],
  e6: ['The train arrived at the station.', 'Passengers got down from the train.', 'Porters carried their luggage.', 'Soon the platform was empty.'],
  m1: ['Pollution is increasing in cities.', 'Vehicles and factories release harmful gases.', 'These gases make the air unhealthy.', 'Therefore, we must use public transport and plant trees.'],
  m2: ['A computer is an electronic machine.', 'It accepts data and processes it.', 'The results are shown on a screen.', 'Today computers are used in almost every field.'],
  m3: ['Many people dream of becoming rich.', 'But wealth alone does not bring happiness.', 'Good health and good relationships matter more.', 'Hence we should value them first.'],
  m4: ['The Earth moves around the Sun.', 'One complete round takes a year.', 'The Earth also rotates on its axis.', 'This rotation causes day and night.'],
  m5: ['Rahul failed the first test.', 'He realised that he had not studied properly.', 'He made a timetable and followed it.', 'In the next test, he scored very well.'],
  m6: ['The company launched a new phone.', 'Customers liked its design.', 'Sales rose sharply within weeks.', 'As a result, profits doubled that year.'],
  m7: ['Mahatma Gandhi was born in Porbandar.', 'He studied law in London.', 'He then returned to India and joined the freedom struggle.', 'He led the nation to independence through non-violence.'],
  m8: ['The doctor examined the patient.', 'He found that the fever was high.', 'He prescribed some medicines.', 'The patient recovered in a week.'],
  p1: ['Electricity was discovered through many experiments.', 'Scientists studied its nature carefully.', 'Inventors then found ways to use it.', 'Soon it lit homes and ran machines.', 'Today modern life cannot function without it.'],
  p2: ['Exams are approaching.', 'Students have begun to revise their lessons.', 'Some prefer to study in groups.', 'Others find silence better for concentration.', 'In either case, regular practice leads to success.'],
  p3: ['Rainwater harvesting collects rain for later use.', 'Water falling on roofs is channelled into tanks.', 'The stored water can be used for gardening and cleaning.', 'This reduces the demand on groundwater.', 'Therefore many cities now require it in new buildings.'],
  p4: ['Time is a precious resource.', 'Once it is lost, it cannot be recovered.', 'Wise people plan their day carefully.', 'They give priority to important tasks.', 'As a result, they achieve more in less time.'],
  p5: ['The invention of the printing press changed the world.', 'Books became cheaper and more common.', 'More people learned to read.', 'Ideas spread faster than before.', 'This helped bring about great social change.'],
  p6: ['A good habit takes time to form.', 'It needs repetition and patience.', 'At first it may seem difficult.', 'But gradually it becomes natural.', 'Finally, it becomes a part of one\'s character.']
};

const quiz = [
  pj(easy, S.e1), pj(easy, S.e2), pj(easy, S.e3), pj(easy, S.e4), pj(easy, S.e5), pj(easy, S.e6),
  pj(medium, S.m1), pj(medium, S.m2), pj(medium, S.m3), pj(medium, S.m4), pj(medium, S.m5), pj(medium, S.m6), pj(medium, S.m7), pj(medium, S.m8),
  pj(placement, S.p1), pj(placement, S.p2), pj(placement, S.p3), pj(placement, S.p4), pj(placement, S.p5), pj(placement, S.p6)
];
build(chapter, quiz);
