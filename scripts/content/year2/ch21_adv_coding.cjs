const { easy, medium, placement, build } = require('../lib.cjs');

// Answers for letter-code questions are computed here, not typed by hand.
const A = 65;
const sh = (c, k) => String.fromCharCode(A + (((c.charCodeAt(0) - A + k) % 26) + 26) % 26);
const shift = (w, k) => [...w].map(c => sh(c, k)).join('');
const alt = (w, k1, k2) => [...w].map((c, i) => sh(c, i % 2 === 0 ? k1 : k2)).join('');
const prog = w => [...w].map((c, i) => sh(c, i + 1)).join('');
const rev = w => [...w].reverse().join('');
const opp = w => [...w].map(c => String.fromCharCode(A + 25 - (c.charCodeAt(0) - A))).join('');
const pos = w => [...w].map(c => c.charCodeAt(0) - A + 1);
const sum = a => a.reduce((x, y) => x + y, 0);
const vow = c => 'AEIOU'.includes(c);

const chapter = {
  id: 'y2-lr-adv-coding', year: 2, category: 'Data Interpretation', num: 21, difficulty: 'Intermediate',
  title: 'Advanced Coding-Decoding',
  tagline: 'Year 2 — Combined rules, progressive shifts, position values and decoding',
  minutes: 50,
  overview: 'Year 1 introduced single-rule codes such as a constant shift or reversal. Year 2 combines two rules (reverse then shift), uses shifts that change from letter to letter, assigns values to positions, treats vowels and consonants differently, and asks you to decode as well as encode. The method does not change: compare the original and the code position by position, state the rule exactly, and test it on every letter.',
  placement: 'Advanced coding-decoding questions are commonly asked in company reasoning rounds. They reward careful, systematic working more than speed.',
  realWorld: 'Simple ciphers, check-digit schemes and password rules are all rule-based transformations like these.',
  objectives: [
    'Identify combined rules such as reverse-then-shift',
    'Apply alternating and progressive shifts',
    'Compute position-value sums and reverse numbering',
    'Apply different rules to vowels and consonants',
    'Decode a code back to the original word'
  ],
  prereq: ['Basic Coding-Decoding', 'Alphabetical Reasoning'],
  refresher: 'A = 1 … Z = 26. Opposite position = 27 − position. To decode, apply the inverse of each operation in reverse order.',
  defs: [
    'Combined rule: two operations applied one after the other, such as reversal then +1 shift.',
    'Progressive shift: the shift grows by one for each letter (+1, +2, +3, …).',
    'Alternating shift: the shift alternates, for example +2, −2.',
    'Position value: A = 1 to Z = 26; a word value is the sum of its letter values.',
    'Decoding: recovering the original from the code by inverting the rule.'
  ],
  intuition: 'A code is a function. Encoding applies it and decoding applies its inverse. For a combined rule, the inverse undoes the steps in reverse order: if you reversed and then shifted by +1, decode by shifting −1 and then reversing.',
  mental: 'Write the original on one line and the code below, with the signed step under each pair. A repeating or growing pattern of steps reveals the rule.',
  formulas: [
    ['Combined rule', 'Encode: step 1 then step 2;  Decode: inverse of step 2 then inverse of step 1', 'A constant shift and a reversal give the same result in either order, but position-based shifts do not.', 'Reverse-and-shift codes.', 'LAMP → PMAL → QNBM'],
    ['Alternating shift', 'Shifts a, b, a, b, …', 'Position parity decides the shift.', 'FRIEND → GQJDOC.', 'TRAIN with +2, −2'],
    ['Progressive shift', 'Shifts +1, +2, +3, …', 'The nth letter moves n.', 'PAPER → QCSIW.', 'WORD → XQUH'],
    ['Position values', 'Word value = sum of positions;  Reverse numbering = 27 − position', 'Convert each letter.', 'Number codes.', 'LEAD = 12 + 5 + 1 + 4 = 22'],
    ['Vowel/consonant rule', 'Apply one rule to vowels and another to consonants', 'Test each letter class.', 'Mixed codes.', 'EDUCATION with vowels → *: *D*C*T**N']
  ],
  narrative: [
    'Always compare the original and the code position by position. If MOTHER becomes NPUIFS, each letter moves +1, so FATHER becomes GBUIFS. Check at least three letters before trusting a rule.',
    'For a combined rule, find each operation from the example. If LAMP is coded QNBM, reverse it (PMAL) and then shift each letter by +1 (QNBM). A constant shift and a reversal give the same result in either order, but when the shift depends on position (alternating or progressive), reversing first or last gives different codes, so follow the order in the example.',
    'Progressive and alternating shifts are recognised from the row of steps. If the steps read +1, +2, +3, +4, the code is progressive. If they read +2, −2, +2, −2 it is alternating. Apply the same pattern to the new word letter by letter.',
    'Position-value codes: B A D becomes 25 26 23 with reverse numbering (27 − position). The value of a word is the sum of its letter positions, so LEAD = 12 + 5 + 1 + 4 = 22.',
    'To decode, invert. If the shift is +3, subtract 3: ZRUOG becomes WORLD. If the rule was reverse then shift +1, decode by shifting −1 and then reversing the result.'
  ],
  deep: [
    ['Testing a rule', 'Rules that fit the first letter often fail later. Test the first, middle and last letters. If a rule survives all three, it is almost certainly correct.'],
    ['Wrap-around', 'After Z the alphabet continues at A. A shift of +3 on Y gives B. Subtract 26 when the position exceeds 26.']
  ],
  variations: [
    ['Combined rules', 'Reverse and shift.', 'LAMP → QNBM'],
    ['Progressive and alternating shifts', 'Steps change.', 'WORD → XQUH'],
    ['Position values', 'Sums and reverse numbering.', 'BAD → 25-26-23'],
    ['Vowel and consonant rules', 'Different rule per class.', 'EDUCATION'],
    ['Decoding', 'Inverse operations.', 'ZRUOG → WORLD']
  ],
  examples: [
    {
      title: 'Combined rule',
      q: 'In a code, LAMP is written as QNBM. How is HOME written in that code?',
      given: ['LAMP → QNBM'],
      concept: 'Reverse, then shift +1.',
      steps: [['Reverse LAMP', 'PMAL.'], ['Compare with QNBM', 'P→Q, M→N, A→B, L→M: each letter +1.'], ['Apply to HOME', 'Reverse: EMOH. Shift +1: ' + shift(rev('HOME'), 1) + '.']],
      ans: shift(rev('HOME'), 1), why: 'The same two operations are applied in the same order.', trap: 'Shifting the letters but forgetting to reverse the word.'
    },
    {
      title: 'Progressive shift',
      q: 'If PAPER is coded as QCSIW, how is WORD coded?',
      given: ['PAPER → QCSIW'],
      concept: 'Shifts +1, +2, +3, +4, +5.',
      steps: [['Find the steps', 'P→Q (+1), A→C (+2), P→S (+3), E→I (+4), R→W (+5).'], ['Apply to WORD', 'W+1, O+2, R+3, D+4 = ' + prog('WORD') + '.']],
      ans: prog('WORD'), why: 'The nth letter is shifted by n.', trap: 'Using a constant +1 shift.'
    },
    {
      title: 'Decoding',
      q: 'If the code for a word is ZRUOG using a +3 shift, find the original word.',
      given: ['Code ZRUOG, shift +3'],
      concept: 'Apply −3.',
      steps: [['Subtract 3 from each letter', 'Z→W, R→O, U→R, O→L, G→D.'], ['Word', shift('ZRUOG', -3) + '.']],
      ans: shift('ZRUOG', -3), why: 'Decoding undoes the shift.', trap: 'Adding 3 again.'
    }
  ],
  shortcut: {
    title: 'Row of steps',
    trad: 'Try different rules until one fits.',
    fast: 'Write the signed step under each letter pair. A constant, alternating or growing row gives the rule directly.',
    rules: ['Test every letter.', 'Reverse the order of operations to decode.', 'Opposite position = 27 − p.', 'Wrap past Z by subtracting 26.']
  },
  mistakes: [
    ['Wrong order of operations', 'Applying an alternating shift before reversing when the example reverses first.', 'With position-based shifts, follow the order shown in the example.'],
    ['Testing only one letter', 'A rule fits one letter by chance.', 'Test several.'],
    ['Decoding with the same operation', 'Adding again.', 'Use the inverse.'],
    ['Wrap-around errors', 'Letters past Z.', 'Subtract 26.']
  ],
  tips: { sec: 70, elim: 'Apply the rule to the first letter only and eliminate options that disagree.', advice: 'Write steps under the letters.', insight: 'Accuracy beats speed in this topic.' },
  revision: ['Step row reveals the rule.', 'Combined rules: order matters.', 'Decode by inverse.', 'Position values.', 'Vowel/consonant rules.'],
  quickFormulas: ['Opposite = 27 − p', 'Word value = Σ positions'],
  takeaways: ['Compare letter by letter.', 'Combine carefully.', 'Invert to decode.', 'Test several letters.'],
  selfCheck: ['Can I decode a word with a +3 shift?', 'Can I apply a progressive shift?', 'Can I apply a rule to vowels only?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Coding-Decoding topic area; examples are original.']]
};

const w = (a, k) => k; void w;
const quiz = [
  easy('In a code, each letter is replaced by the letter two places ahead. Then PLAY is written as', shift('PLAY', 2), [shift('PLAY', -2), shift('PLAY', 1), rev(shift('PLAY', 2))], 'P→R, L→N, A→C, Y→A. So PLAY becomes ' + shift('PLAY', 2) + '.'),
  easy('In a code, each letter is replaced by the letter one place before it. Then STUDENT is written as', shift('STUDENT', -1), [shift('STUDENT', 1), rev('STUDENT'), shift('STUDENT', -2)], 'Each letter moves one place back: ' + shift('STUDENT', -1) + '.'),
  easy('If every word is written backwards, then CODE is written as', rev('CODE'), ['DOCE', 'CEDO', 'EDCO'], 'Reading CODE backwards gives EDOC.'),
  easy('If A = 1, B = 2, …, Z = 26, the value of the word FACE is', sum(pos('FACE')), [14, 16, 18], 'F = 6, A = 1, C = 3, E = 5. Sum = 15.'),
  easy('If A = 1, B = 2, …, then CAT is written as', '3-1-20', ['3-1-19', '2-1-20', '3-2-20'], 'C = 3, A = 1, T = 20.'),
  easy('In a code each letter is replaced by its opposite letter (A↔Z, B↔Y, …). Then MAN is written as', opp('MAN'), [shift('MAN', 1), rev(opp('MAN')), 'NZM '.trim() + 'X'], 'M→N, A→Z, N→M. So MAN becomes NZM.'),

  medium('If PAPER is coded as QCSIW (shifts +1, +2, +3, +4, +5), then WORD is coded as', prog('WORD'), [shift('WORD', 1), alt('WORD', 1, 2), shift('WORD', 2)], 'W+1 = X, O+2 = Q, R+3 = U, D+4 = H. The code is ' + prog('WORD') + '.'),
  medium('In a code, LAMP is written as QNBM (reverse, then +1 to each letter). Then HOME is written as', shift(rev('HOME'), 1), [shift('HOME', 1), rev('HOME'), shift(rev('HOME'), 2)], 'Reverse HOME to get EMOH. Shift each letter by +1: ' + shift(rev('HOME'), 1) + '.'),
  medium('In a code, shifts of +2 and −2 alternate starting with +2. Then TRAIN is written as', alt('TRAIN', 2, -2), [shift('TRAIN', 2), alt('TRAIN', -2, 2), shift('TRAIN', -2)], 'T+2 = V, R−2 = P, A+2 = C, I−2 = G, N+2 = P. The code is ' + alt('TRAIN', 2, -2) + '.'),
  medium('If COLD is coded as DPME, then WARM is coded as', shift('WARM', 1), [shift('WARM', 2), shift('WARM', -1), rev(shift('WARM', 1))], 'Each letter is shifted by +1: ' + shift('WARM', 1) + '.'),
  medium('In a code, each vowel is shifted +1 and each consonant is shifted −1. Then LEARN is written as', [...'LEARN'].map(c => sh(c, vow(c) ? 1 : -1)).join(''), [shift('LEARN', 1), shift('LEARN', -1), [...'LEARN'].map(c => sh(c, vow(c) ? -1 : 1)).join('')], 'L−1 = K, E+1 = F, A+1 = B, R−1 = Q, N−1 = M. The code is ' + [...'LEARN'].map(c => sh(c, vow(c) ? 1 : -1)).join('') + '.'),
  medium('If the numbering of the alphabet is reversed (A = 26, B = 25, …, Z = 1), the code for BAD is', '25-26-23', ['2-1-4', '25-26-24', '24-25-23'], 'B = 25, A = 26, D = 23 (27 minus the usual position).'),
  medium('If A = 1, B = 2, …, the value of the word LEAD is', sum(pos('LEAD')), [20, 21, 24], 'L = 12, E = 5, A = 1, D = 4. Sum = 22.'),
  medium('If each letter is shifted back by 3 places, then SKY is written as', shift('SKY', -3), [shift('SKY', 3), shift('SKY', -2), rev(shift('SKY', -3))], 'S→P, K→H, Y→V. The code is ' + shift('SKY', -3) + '.'),

  placement('In a code, the letters are first shifted alternately by +1, −1, +1, −1 (starting with +1) and then the word is written backwards. Then HOME is written as', rev(alt('HOME', 1, -1)), [alt(rev('HOME'), 1, -1), alt('HOME', 1, -1), shift('HOME', 1)], 'Alternate shifts: H+1 = I, O−1 = N, M+1 = N, E−1 = D gives ' + alt('HOME', 1, -1) + '. Writing it backwards gives ' + rev(alt('HOME', 1, -1)) + '.'),
  placement('If MOTHER is coded as NPUIFS, then FATHER is coded as', shift('FATHER', 1), [shift('FATHER', -1), shift('FATHER', 2), rev(shift('FATHER', 1))], 'Each letter is shifted by +1. FATHER becomes ' + shift('FATHER', 1) + '.'),
  placement('If the code for a word using a +3 shift is ZRUOG, the original word is', shift('ZRUOG', -3), [shift('ZRUOG', 3), shift('ZRUOG', -2), rev(shift('ZRUOG', -3))], 'Subtract 3 from each letter: Z→W, R→O, U→R, O→L, G→D.'),
  placement('If FIRE is coded as DGPC, then WATER is coded as', shift('WATER', -2), [shift('WATER', 2), shift('WATER', -1), rev(shift('WATER', -2))], 'Each letter is shifted back by 2: F→D, I→G, R→P, E→C. So WATER becomes ' + shift('WATER', -2) + '.'),
  placement('In a code, every vowel is replaced by * and consonants are unchanged. Then EDUCATION is written as', [...'EDUCATION'].map(c => (vow(c) ? '*' : c)).join(''), ['EDUCATION', '*D*C*T*ON', '*D*C*TI*N'], 'The vowels E, U, A, I, O become *: *D*C*T**N.'),
  placement('If JUMP = 10-21-13-16 in position values, then 8-5-12-16 stands for', 'HELP', ['HELD', 'HEAP', 'HALF'], '8 = H, 5 = E, 12 = L, 16 = P. The word is HELP.')
];
build(chapter, quiz);
