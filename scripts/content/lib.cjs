// Authoring helpers for rewritten chapters and topic quizzes.
// Chapter specs are compact; build() expands them into the CRTTopic shape used by the app
// and writes src/data/chapters/<id>.json and src/data/topicQuizzes/<id>.json.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../..');
const fmt = v => (typeof v === 'number' ? String(Math.round(v * 1e6) / 1e6) : String(v));

// Quiz question: correct answer is passed separately so numeric answers can be computed in code.
const mk = difficulty => (question, correct, wrongs, explanation, shortcut) => ({
  difficulty, question, correct: fmt(correct), wrongs: wrongs.map(fmt), explanation, shortcut
});
const easy = mk('easy');
const medium = mk('medium');
const placement = mk('placement');

function expandQuiz(topicId, topicTitle, morePracticeUrl, qs) {
  const questions = qs.map((q, i) => {
    if (q.wrongs.length !== 3) throw new Error(`${topicId} Q${i + 1}: need exactly 3 wrong options`);
    const answerIndex = (i * 3 + 1 + (i >> 2)) % 4;
    const options = [...q.wrongs];
    options.splice(answerIndex, 0, q.correct);
    const out = { id: i + 1, difficulty: q.difficulty, question: q.question, options, answerIndex, explanation: q.explanation };
    if (q.shortcut) out.shortcut = q.shortcut;
    return out;
  });
  const quiz = { topicId, topicTitle, questions };
  if (morePracticeUrl) quiz.morePracticeUrl = morePracticeUrl;
  return quiz;
}

const diffMap = { easy: 'Easy', medium: 'Intermediate', placement: 'Placement-Style' };
const toPractice = (topicId, tag, q) => ({
  id: `pq-${topicId}-${tag}${q.id}`,
  question: q.question,
  options: q.options,
  correctAnswer: q.options[q.answerIndex],
  explanation: q.explanation,
  difficulty: diffMap[q.difficulty]
});

function expandChapter(c, quiz) {
  const qs = quiz.questions;
  const by = d => qs.filter(q => q.difficulty === d);
  return {
    id: c.id,
    yearId: c.year,
    category: c.category,
    topicNumber: c.num,
    title: c.title,
    tagline: c.tagline,
    estimatedMinutes: c.minutes || 45,
    difficulty: c.difficulty || 'Foundation',
    introduction: {
      overview: c.overview,
      placementRelevance: c.placement,
      realWorldContext: c.realWorld
    },
    learningObjectives: c.objectives,
    prerequisiteKnowledge: { requiredTopics: c.prereq, quickRefresher: c.refresher },
    conceptExplanation: {
      coreDefinitions: c.defs,
      theoreticalIntuition: c.intuition,
      visualOrMentalModel: c.mental
    },
    importantRulesAndFormulas: c.formulas.map(([title, formula, description, whenToUse, simpleExample]) => ({
      title, formula, description, whenToUse, simpleExample
    })),
    detailedExplanation: {
      mainNarrative: c.narrative,
      deepDiveAspects: (c.deep || []).map(([title, content]) => ({ title, content }))
    },
    problemVariations: c.variations.map(([typeName, description, exampleSnippet]) => ({ typeName, description, exampleSnippet })),
    solvedExamples: c.examples.map((e, i) => ({
      id: `ex-${c.id}-${i + 1}`,
      title: e.title,
      question: e.q,
      givenInfo: e.given,
      conceptOrFormula: e.concept,
      steps: e.steps.map(([title, explanation, math], k) => ({ stepNumber: k + 1, title, explanation, ...(math ? { math } : {}) })),
      finalAnswer: e.ans,
      whyItWorks: e.why,
      ...(e.trap ? { commonTrap: e.trap } : {}),
      difficulty: ['Foundation', 'Intermediate', 'Placement-Style'][Math.min(i, 2)]
    })),
    shortcutMethods: {
      title: c.shortcut.title,
      traditionalVsShortcut: { traditionalMethod: c.shortcut.trad, shortcutMethod: c.shortcut.fast },
      rulesForApplication: c.shortcut.rules
    },
    commonMistakes: c.mistakes.map(([mistake, whyItHappens, howToAvoid]) => ({ mistake, whyItHappens, howToAvoid })),
    placementTips: {
      timeAllocationSeconds: c.tips.sec,
      eliminationTechnique: c.tips.elim,
      questionSelectionAdvice: c.tips.advice,
      recruiterInsight: c.tips.insight
    },
    practiceSets: {
      easy: by('easy').slice(0, 3).map(q => toPractice(c.id, 'e', q)),
      intermediate: by('medium').slice(0, 3).map(q => toPractice(c.id, 'i', q)),
      advanced: by('placement').slice(0, 2).map(q => toPractice(c.id, 'a', q)),
      placementStyle: by('placement').slice(2, 5).map(q => toPractice(c.id, 'p', q))
    },
    quickRevision: { summaryBullets: c.revision, quickFormulas: c.quickFormulas },
    keyTakeaways: c.takeaways,
    selfCheckQuestions: c.selfCheck,
    sourcesAndReferences: c.sources.map(([sourceName, sourceType, referenceNote]) => ({ sourceName, sourceType, referenceNote }))
  };
}

function build(chapter, quizQs) {
  const quiz = expandQuiz(chapter.id, chapter.title, chapter.morePractice, quizQs);
  const topic = expandChapter(chapter, quiz);
  fs.writeFileSync(path.join(ROOT, 'src/data/chapters', `${chapter.id}.json`), JSON.stringify(topic, null, 2) + '\n');
  fs.writeFileSync(path.join(ROOT, 'src/data/topicQuizzes', `${chapter.id}.json`), JSON.stringify(quiz, null, 2) + '\n');
  return { topic, quiz };
}

// For chapters whose text is kept as-is (1st Year ch 1-6): write only the quiz file.
function buildQuizOnly(topicId, topicTitle, morePracticeUrl, qs) {
  const quiz = expandQuiz(topicId, topicTitle, morePracticeUrl, qs);
  fs.writeFileSync(path.join(ROOT, 'src/data/topicQuizzes', `${topicId}.json`), JSON.stringify(quiz, null, 2) + '\n');
  return { quiz };
}

module.exports = { easy, medium, placement, build, buildQuizOnly, fmt };
