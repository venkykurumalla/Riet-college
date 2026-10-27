const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// A policy has a decide(c) function that returns {o: outcome, why: reason}. Unknown (null) fields are tried with
// sample values; if the outcome changes, the decision is "Data inadequate".
function policy(name, rulesText, outcomes, domains, decide, fieldText) {
  const OUT = [...outcomes, 'Data inadequate'];
  const fill = (c) => {
    const unknown = Object.keys(c).filter((k) => c[k] === null);
    let list = [c];
    for (const k of unknown) list = list.flatMap((x) => domains[k].map((v) => ({ ...x, [k]: v })));
    return list;
  };
  return (cand) => {
    const results = fill(cand).map((x) => decide(x));
    const outs = [...new Set(results.map((r) => r.o))];
    const known = Object.keys(cand).filter((k) => cand[k] !== null);
    const desc = Object.keys(cand).filter((k) => cand[k] !== null).map((k) => fieldText[k](cand[k])).join('; ');
    const q = `${rulesText}\n\nCandidate: ${desc}.\n\nWhat is the decision for this candidate?`;
    let c, e;
    if (outs.length === 1) { c = outs[0]; e = `${results[0].why} Decision: ${c}.`; }
    else {
      const a = results[0], b = results.find((r) => r.o !== a.o);
      c = 'Data inadequate';
      e = `A fact that is not given can change the result: for one possible value the outcome is "${a.o}" (${a.why.toLowerCase().replace(/\.$/, '')}), and for another it is "${b.o}" (${b.why.toLowerCase().replace(/\.$/, '')}). Decision: Data inadequate.`;
    }
    return { q, c, w: OUT.filter((o) => o !== c), e };
  };
}
const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

// ---- policy 1: scholarship ----
const rules1 = 'A trust awards scholarships under these rules.\n(i) The student must be between 18 and 25 years of age (both inclusive).\n(ii) The student must have passed Class XII with at least 60% marks.\n(iii) The annual family income must be less than ₹3,00,000.\nIf all three conditions are satisfied, the student is selected. If conditions (i) and (ii) are satisfied but the annual family income is from ₹3,00,000 to ₹5,00,000 (both inclusive), the student is placed on the waiting list. In every other case the student is rejected.';
const sch = policy('scholarship', rules1, ['Selected', 'Waiting list', 'Rejected'], { age: [17, 20, 26], marks: [50, 65], income: [200000, 400000, 600000] }, (c) => {
  const a = c.age >= 18 && c.age <= 25, m = c.marks >= 60;
  if (a && m && c.income < 300000) return { o: 'Selected', why: 'All three conditions are satisfied.' };
  if (a && m && c.income >= 300000 && c.income <= 500000) return { o: 'Waiting list', why: 'Conditions (i) and (ii) hold and the income is between ₹3,00,000 and ₹5,00,000.' };
  if (!a) return { o: 'Rejected', why: 'The age is outside 18 to 25.' };
  if (!m) return { o: 'Rejected', why: 'The marks are below 60%.' };
  return { o: 'Rejected', why: 'The income is above ₹5,00,000.' };
}, { age: (v) => `age ${v} years`, marks: (v) => `${v}% in Class XII`, income: (v) => `annual family income ${inr(v)}` });

// ---- policy 2: recruitment ----
const rules2 = 'A company recruits executives under these rules.\n(a) The candidate must be a graduate or a postgraduate. A graduate must have at least 55% marks; a postgraduate need not satisfy the marks condition.\n(b) The age must not be more than 35 years.\n(c) The candidate must have at least 2 years of work experience to be selected as an Executive. A candidate who satisfies (a) and (b) and has experience of at least 1 year but less than 2 years is selected as a Trainee.\nIn every other case the candidate is rejected.';
const rec = policy('recruitment', rules2, ['Select as Executive', 'Select as Trainee', 'Reject'], { degree: ['undergraduate', 'graduate', 'postgraduate'], marks: [50, 70], exp: [0.5, 1.5, 3], age: [30, 38] }, (c) => {
  const q = c.degree === 'postgraduate' || (c.degree === 'graduate' && c.marks >= 55);
  if (!q) return { o: 'Reject', why: c.degree === 'undergraduate' ? 'The candidate is not a graduate.' : 'A graduate needs at least 55% marks.' };
  if (c.age > 35) return { o: 'Reject', why: 'The age is above 35.' };
  if (c.exp >= 2) return { o: 'Select as Executive', why: 'Qualification, age and experience of 2 years or more are satisfied.' };
  if (c.exp >= 1) return { o: 'Select as Trainee', why: 'Experience is at least 1 year but below 2 years.' };
  return { o: 'Reject', why: 'Experience is below 1 year.' };
}, { degree: (v) => `${v}`, marks: (v) => `${v}% marks`, exp: (v) => `${v} ${v === 1 ? 'year' : 'years'} of experience`, age: (v) => `age ${v} years` });

// ---- policy 3: loan ----
const rules3 = 'A bank approves personal loans under these rules.\n(1) The applicant must be an Indian citizen aged 21 to 60 years (both inclusive).\n(2) The monthly income must be at least ₹30,000.\n(3) The applicant must not have more than 2 existing loans.\n(4) If (1), (2) and (3) are satisfied: a credit score of 700 or more means the loan is approved; a score from 650 to 699 means the loan is approved only if a guarantor is provided, otherwise the application is referred to the manager; a score below 650 means the application is rejected.\nIf any of (1), (2) or (3) is not satisfied, the application is rejected.';
const loan = policy('loan', rules3, ['Approve the loan', 'Refer to the manager', 'Reject the application'], { citizen: [true, false], age: [18, 30, 65], income: [20000, 40000], loans: [0, 3], credit: [600, 680, 750], guarantor: [true, false] }, (c) => {
  if (!c.citizen) return { o: 'Reject the application', why: 'The applicant is not an Indian citizen.' };
  if (c.age < 21 || c.age > 60) return { o: 'Reject the application', why: 'The age is outside 21 to 60.' };
  if (c.income < 30000) return { o: 'Reject the application', why: 'The monthly income is below ₹30,000.' };
  if (c.loans > 2) return { o: 'Reject the application', why: 'The applicant has more than 2 existing loans.' };
  if (c.credit >= 700) return { o: 'Approve the loan', why: 'The credit score is 700 or more.' };
  if (c.credit >= 650) return c.guarantor ? { o: 'Approve the loan', why: 'The score is 650 to 699 and a guarantor is provided.' } : { o: 'Refer to the manager', why: 'The score is 650 to 699 and no guarantor is provided.' };
  return { o: 'Reject the application', why: 'The credit score is below 650.' };
}, { citizen: (v) => (v ? 'an Indian citizen' : 'not an Indian citizen'), age: (v) => `age ${v} years`, income: (v) => `monthly income ${inr(v)}`, loans: (v) => `${v} existing ${v === 1 ? 'loan' : 'loans'}`, credit: (v) => `credit score ${v}`, guarantor: (v) => (v ? 'a guarantor is provided' : 'no guarantor is provided') });

const ch44 = C({
  n: 44, id: 'y3-lr-analytical-decision-problems', cat: 'lr', title: 'Analytical Decision-Making Problems',
  tag: 'Applying a set of rules to individual cases: eligibility checks, tiers, exceptions and missing data',
  url: 'https://www.indiabix.com/logical-reasoning/',
  over: 'An analytical decision problem gives a set of rules (for admissions, loans, recruitment or scholarships) and a profile of a case, and asks what the decision should be. There is no hidden trick, only discipline: test the conditions in a fixed order, apply exceptions only when the rule says so, and notice when a needed fact is missing, because then the right answer is that the data is inadequate.',
  place: 'Rule-based decision sets are popular in management and bank-recruitment tests, and they reward careful reading.',
  real: 'Loan officers, HR screeners and admissions committees make decisions exactly this way.',
  obj: ['Translate rules into a checklist', 'Apply knock-out conditions first', 'Handle tiers and exceptions', 'Recognise inclusive and exclusive limits', 'Spot missing information'],
  pre: ['Statements and Conclusions', 'Selection and Distribution Problems'],
  refresh: 'Both inclusive means the end values count. "At least 60" includes 60; "less than 3,00,000" excludes 3,00,000.',
  defs: [
    'Knock-out condition: failing it means rejection regardless of the others.',
    'Tier: a band of values that leads to different outcomes (for example credit score bands).',
    'Exception: a clause that waives or changes a condition for a particular group.',
    'Inclusive limit: the stated value qualifies. Exclusive limit: it does not.',
    'Data inadequate: a missing fact could change the decision.'
  ],
  intu: 'The rules are a flow chart in words. Walk each case through it, step by step, and stop at the first knock-out.',
  mental: 'Write each condition as a tick box. Test knock-outs first, then tier conditions. Before answering, ask whether any unstated fact could change a box.',
  formulas: [
    ['Knock-out first', 'Fail a must-have ⇒ reject', 'Mandatory conditions.', 'Order of checking.', 'Age above 35'],
    ['Inclusive/exclusive', '≥ includes; < excludes', 'Boundaries.', 'Edge cases.', '60% passes; ₹3,00,000 does not'],
    ['Tiers', 'Match the value to its band', 'Banded rules.', 'Credit score 650–699', 'Needs a guarantor'],
    ['Exceptions', 'Apply only to the named group', 'Waivers.', 'Postgraduates', 'No marks condition'],
    ['Missing data', 'Could it change the outcome?', 'Incomplete profile.', 'Last check.', 'Marks not given']
  ],
  narr: [
    'A trust selects a student aged 18–25 with at least 60% in Class XII and family income below ₹3,00,000. A student aged 21 with 72% and income ₹1,80,000 meets all three and is selected. A student aged 24 with 65% and income ₹4,00,000 meets (i) and (ii) but has income in the ₹3,00,000–₹5,00,000 band, so goes on the waiting list.',
    'Boundary values are the usual trap. "At least 60%" includes exactly 60%. "Less than ₹3,00,000" does not include ₹3,00,000, but "from ₹3,00,000 to ₹5,00,000 (both inclusive)" does. A student with exactly 60% and income ₹2,99,999 is selected.',
    'An exception changes who must meet a condition. In the recruitment rules, a postgraduate need not meet the 55% marks condition, so a postgraduate with 48% can still be an Executive if the other conditions hold.',
    'Tiers lead to different outcomes. With a credit score of 670, the loan is approved only with a guarantor; without one the application goes to the manager; at 640 it is rejected.',
    'If a needed fact is missing, test whether it could change the result. A graduate whose marks are not given could be an Executive (with 70%) or be rejected (with 50%), so the data is inadequate.'
  ],
  deep: [['Order of checks', 'Knock-outs first saves time and avoids contradictions.'], ['Over-reading', 'Do not add a rule that is not stated, such as a preference for experience or a minimum for a field the rules do not mention.']],
  vars: [['Straight eligibility', 'All conditions.', 'Scholarship'], ['Tiers and bands', 'Credit score.', 'Loan'], ['Exceptions', 'Waived conditions.', 'Postgraduates'], ['Boundary cases', 'Inclusive limits.', '60% and 55%'], ['Missing data', 'Data inadequate.', 'Marks not given']],
  ex: [
    { t: 'Boundary', q: 'A scholarship needs at least 60% in Class XII, age 18 to 25, and family income below ₹3,00,000. A student aged 20 has exactly 60% and income ₹2,99,999. What is the decision?', g: ['At least 60%', 'Below ₹3,00,000'], c: 'Check inclusive limits.', s: [['Marks', 'Exactly 60% satisfies "at least 60%".'], ['Income', '₹2,99,999 is below ₹3,00,000.'], ['Age', '20 is between 18 and 25.']], a: 'Selected', w: 'All three hold.', tr: 'Rejecting at 60%.' },
    { t: 'Exception', q: 'Graduates need 55% marks but postgraduates need not. A postgraduate aged 32 with 48% marks and 2 years of experience applies for an Executive post (age limit 35, experience 2 years). What is the decision?', g: ['Postgraduate'], c: 'Apply the exception.', s: [['Marks', 'The marks condition does not apply to postgraduates.'], ['Age and experience', '32 ≤ 35 and 2 years ≥ 2 years.']], a: 'Select as Executive', w: 'The exception removes the marks barrier.', tr: 'Rejecting for 48%.' },
    { t: 'Missing data', q: 'A graduate aged 30 with 3 years of experience applies, but the marks are not stated. Graduates need 55%. What is the decision?', g: ['Marks unknown'], c: 'Test both possibilities.', s: [['If 60%', 'The candidate qualifies as an Executive.'], ['If 50%', 'The candidate is rejected.']], a: 'Data inadequate', w: 'The missing fact changes the result.', tr: 'Assuming the marks are fine.' }
  ],
  short: { title: 'Checklist walk', trad: 'Read the rules once and decide.', fast: 'Turn the rules into a checklist, test the knock-outs first, apply tiers and exceptions only where stated, and ask whether any missing fact could change the outcome.', rules: ['Knock-outs first.', 'Mind inclusive limits.', 'Exceptions only for named groups.', 'Missing data may flip it.'] },
  mist: [['Misreading inclusive limits', 'Boundary errors.', 'Underline "at least", "less than", "both inclusive".'], ['Applying an exception to everyone', 'Over-reading.', 'Apply it only to the named group.'], ['Guessing missing data', 'Unsafe.', 'Check if the outcome would change.']],
  tips: { sec: 75, elim: 'Eliminate options that contradict a knock-out failure.', adv: 'Mark boundary words as you read.', ins: 'Several cases share one rule set, so build the checklist once.' },
  rev: ['Checklist.', 'Knock-outs.', 'Tiers.', 'Exceptions.', 'Missing data.'],
  qf: ['Test must-haves first'],
  take: ['Checklist.', 'Boundaries.', 'Exceptions.', 'Missing data.'],
  self: ['Can I turn rules into a checklist?', 'Can I handle inclusive limits?', 'Can I spot missing data?']
});
build(ch44, [
  E(sch({ age: 21, marks: 72, income: 180000 })), E(sch({ age: 19, marks: 58, income: 200000 })), E(sch({ age: 24, marks: 65, income: 400000 })), E(sch({ age: 27, marks: 80, income: 100000 })), E(sch({ age: 22, marks: 61, income: null })), E(sch({ age: 20, marks: 60, income: 299999 })),
  M(rec({ degree: 'graduate', marks: 62, exp: 3, age: 30 })), M(rec({ degree: 'graduate', marks: 50, exp: 4, age: 28 })), M(rec({ degree: 'postgraduate', marks: 48, exp: 2, age: 32 })), M(rec({ degree: 'graduate', marks: 70, exp: 1.5, age: 26 })), M(rec({ degree: 'graduate', marks: 65, exp: 0.5, age: 24 })), M(rec({ degree: 'graduate', marks: 60, exp: 3, age: 38 })), M(rec({ degree: 'undergraduate', marks: 80, exp: 5, age: 30 })), M(rec({ degree: 'graduate', marks: null, exp: 3, age: 30 })),
  P(loan({ citizen: true, age: 35, income: 45000, loans: 1, credit: 720, guarantor: false })), P(loan({ citizen: true, age: 28, income: 50000, loans: 1, credit: 670, guarantor: false })), P(loan({ citizen: true, age: 28, income: 50000, loans: 1, credit: 670, guarantor: true })), P(loan({ citizen: true, age: 40, income: 60000, loans: 3, credit: 780, guarantor: true })), P(loan({ citizen: true, age: 23, income: 28000, loans: 0, credit: 760, guarantor: true })), P(loan({ citizen: true, age: 45, income: 70000, loans: 0, credit: null, guarantor: true }))
]);
