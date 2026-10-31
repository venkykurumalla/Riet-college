const { easy, medium, placement, build } = require('../lib.cjs');

// Operator-substitution answers are computed here from the stated mapping, not typed by hand.
const real = (expr, map) => expr.split(' ').map(t => (map[t] !== undefined ? map[t] : t)).join(' ');
const calc = (expr, map) => Function('return (' + real(expr, map).replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-') + ')')();
const opts = v => [v + 3, v - 2, v * 2 === v ? v + 7 : v * 2].map(x => Math.round(x * 100) / 100);
const MATRIX = ['ABCDE', 'FGHIJ', 'KLMNO', 'PQRST', 'UVWXY'];
const code = c => { for (let r = 0; r < 5; r++) { const k = MATRIX[r].indexOf(c); if (k >= 0) return `${r}${k}`; } };
const codeWord = w => [...w].map(code).join(' ');
const M_TEXT = 'Letter matrix (code = row number, then column number):\n\n    0 1 2 3 4\n0 | A B C D E\n1 | F G H I J\n2 | K L M N O\n3 | P Q R S T\n4 | U V W X Y\n\n';

const chapter = {
  id: 'y2-lr-symbol-coding', year: 2, category: 'Data Interpretation', num: 22, difficulty: 'Intermediate',
  title: 'Symbol Coding',
  tagline: 'Year 2 — Symbol substitution, operator substitution, number-word codes and matrix codes',
  minutes: 45,
  overview: 'In symbol coding, letters, words or arithmetic operators are replaced by other symbols according to a key stated in the question. The question gives the key; your job is to apply it exactly. Typical forms are letter-to-symbol codes, substitution of arithmetic operators (when + means ×), number-code to word-code comparisons, and matrix codes where each letter is coded by its row and column.',
  placement: 'Symbol coding questions are commonly asked in company reasoning rounds. They are rule-following tasks where accuracy matters more than insight.',
  realWorld: 'Spreadsheet formulas, cell references such as B7, barcode keys and custom shorthand all rely on exact substitution.',
  objectives: [
    'Apply a letter-to-symbol key to encode and decode words',
    'Evaluate expressions after operator substitution, respecting BODMAS',
    'Deduce word codes from several coded sentences',
    'Encode letters using matrix row and column numbers',
    'Check answers by reversing the substitution'
  ],
  prereq: ['Basic Coding-Decoding', 'Simplification & BODMAS'],
  refresher: 'BODMAS: Brackets, Orders, Division and Multiplication (left to right), Addition and Subtraction (left to right).',
  defs: [
    'Key: the table or statement that tells you what each symbol stands for.',
    'Operator substitution: the symbols +, −, ×, ÷ are given different meanings; first rewrite the expression with the real operators, then evaluate.',
    'Common-element method: in coded sentences, a word common to two sentences matches the code common to them.',
    'Matrix code: a letter is coded by its row and column numbers in a given grid.',
    'Decoding: reversing the key to recover the original.'
  ],
  intuition: 'Symbol coding is a translation exercise. Translate the question into ordinary arithmetic or ordinary letters using the key, solve it, and translate back if needed. Never evaluate the expression with the printed symbols.',
  mental: 'For operator problems, write the real expression directly beneath the printed one, then apply BODMAS to the real expression.',
  formulas: [
    ['Operator substitution', 'Replace each printed symbol by its real operator, then use BODMAS', 'Do not evaluate the printed symbols.', 'If + means ×, − means ÷ …', '12 − 4 × 3 + 2 ÷ 1 → 12 ÷ 4 + 3 × 2 − 1'],
    ['Letter-symbol key', 'Write the key as a list; encode letter by letter', 'Be precise with order.', 'A = @, B = #, C = $.', 'CAB → $@#'],
    ['Common-element method', 'A word common to two sentences ↔ the code common to them', 'Solve one word at a time.', 'Coded sentences.', '24, 45, 56 → morning = 4'],
    ['Matrix code', 'Code = row number followed by column number', 'Rows first, then columns.', 'Matrix letter coding.', 'D → 03; H → 12'],
    ['Check', 'Reverse the substitution on your answer', 'It must return the original.', 'Every question.', '$@# → CAB']
  ],
  narrative: [
    'For letter-symbol keys, build the key as a table and encode each letter in order. With A = @, B = #, C = $, the word CAB becomes $@#, and the code #$@ decodes to BCA.',
    'For operator substitution, rewrite the expression using the real operators. If + means ×, − means ÷, × means + and ÷ means −, then 12 − 4 × 3 + 2 ÷ 1 becomes 12 ÷ 4 + 3 × 2 − 1 = 3 + 6 − 1 = 8. Apply BODMAS after substituting.',
    'For coded sentences, use common elements. If "good morning" = 24, "morning sun" = 45 and "sun rise" = 56, then morning is the common code digit 4, good is 2, sun is 5 and rise is 6. So "good sun" is 25.',
    'For matrix codes, find the letter in the grid; its code is the row number followed by the column number. D is in row 0, column 3, so D = 03; H is in row 1, column 2, so H = 12.',
    'Always verify. Decode your answer with the same key. If it does not return the original, an error crept in.'
  ],
  deep: [
    ['Order of operations after substitution', 'Substitution changes which operators appear, so the order of calculation changes too. Evaluate multiplication and division before addition and subtraction in the real expression.'],
    ['Unique solutions', 'In coded-sentence questions, a unique answer needs each word to appear in at least two sentences. If a word appears only once, its code cannot be fixed by the common-element method.']
  ],
  variations: [
    ['Letter-symbol codes', 'Encode and decode.', 'A = @, B = #'],
    ['Operator substitution', 'Evaluate.', '+ means ×'],
    ['Coded sentences', 'Common elements.', '24, 45, 56'],
    ['Matrix codes', 'Row-column codes.', 'H → 12'],
    ['Mixed keys', 'Two keys together.', 'Letters then operators']
  ],
  examples: [
    {
      title: 'Operator substitution',
      q: 'If + means ×, − means ÷, × means + and ÷ means −, find the value of 12 − 4 × 3 + 2 ÷ 1.',
      given: ['+ = ×, − = ÷, × = +, ÷ = −'],
      concept: 'Substitute, then apply BODMAS.',
      steps: [['Rewrite', '12 ÷ 4 + 3 × 2 − 1.'], ['Multiply and divide first', '3 + 6 − 1.'], ['Add and subtract', '8.']],
      ans: String(calc('12 − 4 × 3 + 2 ÷ 1', { '+': '×', '−': '÷', '×': '+', '÷': '−' })), why: 'The real operators decide the order.', trap: 'Evaluating the printed symbols.'
    },
    {
      title: 'Coded sentences',
      q: 'In a code, "good morning" = 24, "morning sun" = 45 and "sun rise" = 56. What is the code for "good sun"?',
      given: ['good morning = 24', 'morning sun = 45', 'sun rise = 56'],
      concept: 'Common-element method.',
      steps: [['Morning', 'Common to the first two: digit 4.'], ['Good and sun', 'good = 2 (from 24); sun = 5 (from 45).'], ['Good sun', '25.']],
      ans: '25', why: 'Each word is fixed by a common digit.', trap: 'Assuming the code follows the word order in a different sentence.'
    },
    {
      title: 'Matrix code',
      q: 'In the letter matrix (rows 0–4, columns 0–4, letters A–Y in order), find the code for HI.',
      given: ['Row-then-column code'],
      concept: 'Locate each letter.',
      steps: [['H', 'Row 1, column 2: 12.'], ['I', 'Row 1, column 3: 13.']],
      ans: codeWord('HI'), why: 'Rows count from the top and columns from the left, starting at 0.', trap: 'Counting from 1.'
    }
  ],
  shortcut: {
    title: 'Translate, solve, check',
    trad: 'Work with the printed symbols throughout.',
    fast: 'Rewrite using the key, solve in ordinary form, and verify by reversing.',
    rules: ['Rewrite before calculating.', 'BODMAS after substitution.', 'Common elements for coded sentences.', 'Rows first, columns second.']
  },
  mistakes: [
    ['Evaluating printed symbols', 'Ignoring the key.', 'Rewrite first.'],
    ['Breaking BODMAS', 'Left-to-right only.', 'Do × and ÷ before + and −.'],
    ['Misreading the matrix', 'Swapping row and column.', 'Row first.'],
    ['Skipping the check', 'Not decoding the answer.', 'Reverse the key.']
  ],
  tips: { sec: 60, elim: 'Decode each option and keep the one that returns the original.', advice: 'Write the key at the side of the page.', insight: 'Operator-substitution questions are the most common form.' },
  revision: ['Rewrite with the key.', 'BODMAS.', 'Common elements.', 'Row then column.', 'Check by reversing.'],
  quickFormulas: ['Key → rewrite → solve', 'Code = row + column'],
  takeaways: ['Follow the key exactly.', 'Rewrite operators.', 'Use common elements.', 'Verify.'],
  selfCheck: ['Can I evaluate an expression after operator substitution?', 'Can I decode coded sentences?', 'Can I code with a matrix?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Coding and symbol topic areas; examples are original.']]
};

const M1 = { '+': '×', '−': '÷', '×': '+', '÷': '−' };
const M2 = { '+': '−', '−': '+' };
const M3 = { '×': '+', '+': '×' };
const M4 = { '÷': '×', '×': '÷' };
const M5 = { '+': '÷', '÷': '+' };
const q = (expr, map, desc, mdesc, d) => d(`${desc}, find the value of ${expr}.`, calc(expr, map), opts(calc(expr, map)), `After substitution (${mdesc}) the expression becomes ${real(expr, map)}. Evaluating with BODMAS gives ${calc(expr, map)}.`);

const quiz = [
  easy('If A = @, B = #, C = $, then CAB is coded as', '$@#', ['@#$', '#@$', '$#@'], 'C = $, A = @, B = #, so CAB = $@#.'),
  easy('If A = @, B = #, C = $, then the code #$@ stands for', 'BCA', ['ABC', 'CAB', 'BAC'], '# = B, $ = C, @ = A.'),
  q('12 + 4 − 2', M2, 'If + means − and − means +', '+ → −, − → +', easy),
  q('8 × 5 + 3', M3, 'If × means + and + means ×', '× → +, + → ×', easy),
  q('12 ÷ 4 + 2', M5, 'If ÷ means + and + means ÷', '÷ → +, + → ÷', easy),
  q('9 ÷ 3 × 2', M4, 'If ÷ means × and × means ÷', '÷ → ×, × → ÷', easy),

  q('12 − 4 × 3 + 2 ÷ 1', M1, 'If + means ×, − means ÷, × means + and ÷ means −', '+ → ×, − → ÷, × → +, ÷ → −', medium),
  q('20 − 5 × 2 + 4', M1, 'If + means ×, − means ÷, × means + and ÷ means −', '+ → ×, − → ÷, × → +, ÷ → −', medium),
  q('6 + 4 − 2 × 1', { '+': '×', '−': '+', '×': '−' }, 'If + means ×, − means + and × means −', '+ → ×, − → +, × → −', medium),
  medium('In a code, "good morning" = 24, "morning sun" = 45 and "sun rise" = 56. The code for "good sun" is', '25', ['26', '42', '46'], 'Morning = 4, good = 2, sun = 5, rise = 6. So "good sun" = 25.'),
  medium(M_TEXT + 'In the letter matrix, the code for the word HI is', codeWord('HI'), [codeWord('IH'), '21 22', '12 14'], 'H is in row 1, column 2: 12. I is in row 1, column 3: 13. So HI = 12 13.'),
  medium(M_TEXT + 'In the letter matrix, the code for the letter N is', code('N'), ['32', '12', '24'], 'N is in row 2, column 3: 23.'),
  medium(M_TEXT + 'In the letter matrix, the code 31 stands for the letter', 'Q', ['P', 'R', 'L'], 'Row 3, column 1 is the letter Q.'),
  q('18 ÷ 3 + 6', M5, 'If ÷ means + and + means ÷', '÷ → +, + → ÷', medium),

  q('15 − 3 × 4 + 2 ÷ 5', M1, 'If + means ×, − means ÷, × means + and ÷ means −', '+ → ×, − → ÷, × → +, ÷ → −', placement),
  q('24 ÷ 6 + 4 × 2', { '÷': '×', '+': '−', '×': '+' }, 'If ÷ means ×, + means − and × means +', '÷ → ×, + → −, × → +', placement),
  placement('In a code, "red apple" = "ka lo", "green apple" = "ma lo" and "red rose" = "ka ti". The code for "green rose" is', 'ma ti', ['ka ma', 'lo ti', 'ma lo'], 'apple = lo, red = ka, green = ma, rose = ti. So "green rose" = "ma ti".'),
  placement(M_TEXT + 'In the letter matrix, the word CODE is coded as', codeWord('CODE'), [codeWord('DOCE'), '02 14 03 04', '20 42 30 40'], 'C = 02, O = 24, D = 03, E = 04. So CODE = 02 24 03 04.'),
  placement(M_TEXT + 'In the letter matrix, the code 12 24 03 stands for the word', 'HOD', ['HOE', 'GOD', 'HOP'], '12 = H, 24 = O, 03 = D. The word is HOD.'),
  q('10 + 5 − 3 × 2', { '+': '×', '−': '+', '×': '−' }, 'If + means ×, − means + and × means −', '+ → ×, − → +, × → −', placement)
];
build(chapter, quiz);
