// Compact chapter authoring for 3rd/4th Year. C(spec) fills standard fields and returns the chapter object for lib.build().
// Every substantive field (overview, definitions, formulas, narrative, examples, mistakes, tips) is written per chapter.
const CATS = {
  quant: 'Advanced Quantitative Aptitude',
  lr: 'Advanced Logical Reasoning',
  verbal: 'Advanced Verbal Ability',
  di: 'Data Interpretation'
};
const SRC = {
  quant: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'The corresponding topic area; examples in this chapter are original.']],
  lr: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The corresponding topic area; examples in this chapter are original.']],
  verbal: [['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'Grammar and usage background; examples in this chapter are original.']],
  di: [['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Data interpretation as a topic area; data and examples in this chapter are original.']]
};

function C(s) {
  const cat = s.cat;
  const ex = s.ex.map(e => ({
    title: e.t, q: e.q, given: e.g, concept: e.c,
    steps: e.s.map(([t, x, m]) => (m ? [t, x, m] : [t, x])),
    ans: e.a, why: e.w, trap: e.tr
  }));
  return {
    id: s.id, year: 3, category: s.category || CATS[cat], num: s.n, difficulty: 'Advanced',
    title: s.title, tagline: 'Year 3 — ' + s.tag, minutes: s.min || 55, morePractice: s.url,
    overview: s.over, placement: s.place, realWorld: s.real,
    objectives: s.obj, prereq: s.pre, refresher: s.refresh,
    defs: s.defs, intuition: s.intu, mental: s.mental,
    formulas: s.formulas, narrative: s.narr, deep: s.deep,
    variations: s.vars, examples: ex,
    shortcut: s.short,
    mistakes: s.mist,
    tips: { sec: s.tips.sec, elim: s.tips.elim, advice: s.tips.adv, insight: s.tips.ins },
    revision: s.rev, quickFormulas: s.qf, takeaways: s.take, selfCheck: s.self,
    sources: s.src ? [...SRC[cat], ...s.src] : SRC[cat]
  };
}
module.exports = { C };
