function normalizeTopic(raw, defaultTopicNumber = 1) {
  // 1. Introduction
  let intro = {
    overview: '',
    placementRelevance: '',
    historicalRecruiterWeightage: '',
    realWorldContext: ''
  };
  if (Array.isArray(raw.introduction)) {
    intro.overview = raw.introduction[0] || '';
    intro.placementRelevance = raw.introduction[1] || '';
    intro.realWorldContext = raw.introduction[2] || '';
    intro.historicalRecruiterWeightage =
      'Appears in 80%–90% of corporate recruitment assessment technical screening rounds.';
  } else if (raw.introduction && typeof raw.introduction === 'object') {
    intro = {
      overview: raw.introduction.overview || '',
      placementRelevance: raw.introduction.placementRelevance || '',
      historicalRecruiterWeightage:
        raw.introduction.historicalRecruiterWeightage ||
        'Appears in 80%–90% of corporate recruitment assessment technical screening rounds.',
      realWorldContext: raw.introduction.realWorldContext || ''
    };
  }

  // 2. Category mapping
  let category = raw.category;
  if (category === 'Strategic Placement Mastery') {
    category = 'Placement Strategy & Shortcuts';
  }

  // 3. Problem Variations
  const problemVariations = (raw.problemVariations || []).map((pv, idx) => ({
    typeName: pv.typeName || pv.type || `Variation ${idx + 1}`,
    description: pv.description || '',
    exampleSnippet: pv.exampleSnippet || pv.sampleSnippet || ''
  }));

  // 4. Solved Examples
  const solvedExamples = (raw.solvedExamples || []).map((se, idx) => {
    let steps = [];
    if (Array.isArray(se.steps)) {
      steps = se.steps;
    } else if (Array.isArray(se.stepByStep)) {
      steps = se.stepByStep.map((s, sIdx) => ({
        stepNumber: sIdx + 1,
        title: `Step ${sIdx + 1}`,
        explanation: s,
        math: ''
      }));
    }

    return {
      id: se.id || `se-${raw.id}-${idx + 1}`,
      title: se.title || `Solved Example ${idx + 1}`,
      question: se.question || '',
      givenInfo: Array.isArray(se.givenInfo)
        ? se.givenInfo
        : Array.isArray(se.given)
        ? se.given
        : [],
      conceptOrFormula: se.conceptOrFormula || se.conceptUsed || '',
      steps: steps,
      finalAnswer: se.finalAnswer || '',
      whyItWorks: se.whyItWorks || se.whyMethodWorks || '',
      commonTrap: se.commonTrap || '',
      difficulty: se.difficulty || (idx < 3 ? 'Foundation' : idx < 6 ? 'Intermediate' : 'Advanced')
    };
  });

  // 5. Alternative Methods
  let alternativeMethods = undefined;
  if (raw.alternativeMethods) {
    if (Array.isArray(raw.alternativeMethods)) {
      const first = raw.alternativeMethods[0] || {};
      alternativeMethods = {
        title: first.title || 'Alternative Problem Solving Methods',
        methods: [
          {
            methodName: 'Standard Analytical Method',
            steps: [first.standardMethod || 'Standard step-by-step textbook procedure.'],
            prosAndCons: 'Mathematically robust, universal applicability; takes slightly longer.',
            whenToUse: 'When accuracy is critical or when variables are complex.'
          },
          {
            methodName: 'Vedic / Shortcut Method',
            steps: [first.shortcutMethod || 'Direct formula / ratio shortcut.'],
            prosAndCons: 'Instant 15-30s solution; requires memorizing conditions.',
            whenToUse: 'When time is tight and standard format matches.'
          }
        ]
      };
    } else if (typeof raw.alternativeMethods === 'object') {
      alternativeMethods = raw.alternativeMethods;
    }
  }

  // 6. Shortcut Methods
  let shortcutMethods = {
    title: 'High-Velocity Placement Shortcuts & Ratio Heuristics',
    traditionalVsShortcut: {
      traditionalMethod: 'Multi-line algebraic substitution and manual variable elimination.',
      shortcutMethod: 'Ratio balance, product constancy, and digital sum elimination.',
      timeSavedPercent: '65%–75%'
    },
    rulesForApplication: Array.isArray(raw.fasterMethods)
      ? raw.fasterMethods
      : Array.isArray(raw.shortcutMethods?.rulesForApplication)
      ? raw.shortcutMethods.rulesForApplication
      : [
          'Verify that problem constraints match shortcut prerequisites before applying.',
          'Double check arithmetic sign parity to avoid distractor trap options.'
        ]
  };
  if (raw.shortcutMethods && typeof raw.shortcutMethods === 'object' && raw.shortcutMethods.title) {
    shortcutMethods = raw.shortcutMethods;
  }

  // 7. Common Mistakes
  const commonMistakes = (raw.commonMistakes || []).map(cm => ({
    mistake: cm.mistake || '',
    whyItHappens: cm.whyItHappens || '',
    howToAvoid: cm.howToAvoid || ''
  }));

  // 8. Placement Tips
  let placementTips = {
    timeAllocationSeconds: 90,
    eliminationTechnique: 'Use unit digit parity and digital sums to eliminate options before calculating.',
    questionSelectionAdvice:
      'Attempt 1-variable direct formula questions first, then multi-step word problems.',
    recruiterInsight: Array.isArray(raw.placementStrategy)
      ? raw.placementStrategy.join(' ')
      : raw.placementTips?.recruiterInsight ||
        'Recruiters prioritize high accuracy on medium questions over partial attempts on complex questions.'
  };
  if (raw.placementTips && typeof raw.placementTips === 'object') {
    placementTips = {
      timeAllocationSeconds: raw.placementTips.timeAllocationSeconds || 90,
      eliminationTechnique: raw.placementTips.eliminationTechnique || '',
      questionSelectionAdvice: raw.placementTips.questionSelectionAdvice || '',
      recruiterInsight: raw.placementTips.recruiterInsight || ''
    };
  }

  // 9. Practice Sets
  let practiceSets = {
    easy: [],
    intermediate: [],
    advanced: [],
    placementStyle: []
  };

  if (raw.practiceSets && typeof raw.practiceSets === 'object') {
    practiceSets = raw.practiceSets;
  } else if (Array.isArray(raw.practiceQuestions)) {
    raw.practiceQuestions.forEach((pq, idx) => {
      let correctAns = pq.correctAnswer;
      if (!correctAns && Array.isArray(pq.options) && pq.correctOptionIndex !== undefined) {
        correctAns = pq.options[pq.correctOptionIndex] || '';
      }

      const formatted = {
        id: pq.id || `pq-${raw.id}-${idx + 1}`,
        question: pq.question || '',
        options: pq.options || [],
        correctAnswer: correctAns || '',
        explanation: pq.explanation || '',
        difficulty:
          pq.tier === 'Foundation'
            ? 'Easy'
            : pq.tier === 'Intermediate'
            ? 'Intermediate'
            : pq.tier === 'Advanced'
            ? 'Advanced'
            : 'Placement-Style'
      };

      if (formatted.difficulty === 'Easy') practiceSets.easy.push(formatted);
      else if (formatted.difficulty === 'Intermediate') practiceSets.intermediate.push(formatted);
      else if (formatted.difficulty === 'Advanced') practiceSets.advanced.push(formatted);
      else practiceSets.placementStyle.push(formatted);
    });
  }

  // 10. Mixed Challenge Set
  let mixedChallengeSet = [];
  if (Array.isArray(raw.mixedChallenges)) {
    mixedChallengeSet = raw.mixedChallenges.map((mc, idx) => {
      let explanation = '';
      if (Array.isArray(mc.solutionSteps)) {
        explanation = mc.solutionSteps.join(' ') + ' Final Answer: ' + (mc.finalAnswer || '');
      } else {
        explanation = mc.explanation || mc.finalAnswer || '';
      }

      return {
        id: mc.id || `mc-${raw.id}-${idx + 1}`,
        question: mc.question || '',
        options: mc.options || [],
        correctAnswer: mc.finalAnswer || mc.correctAnswer || 'See Detailed Solution',
        explanation: explanation,
        difficulty: 'Advanced'
      };
    });
  } else if (Array.isArray(raw.mixedChallengeSet)) {
    mixedChallengeSet = raw.mixedChallengeSet;
  }

  // 11. Quick Revision
  let quickRevision = {
    summaryBullets: [],
    quickFormulas: []
  };
  if (Array.isArray(raw.quickRevision)) {
    quickRevision.summaryBullets = raw.quickRevision;
  } else if (raw.quickRevision && typeof raw.quickRevision === 'object') {
    quickRevision = {
      summaryBullets: raw.quickRevision.summaryBullets || [],
      quickFormulas: raw.quickRevision.quickFormulas || []
    };
  }

  // 12. Key Takeaways
  const keyTakeaways = Array.isArray(raw.keyTakeaways) ? raw.keyTakeaways : [];

  // 13. Self Check
  const selfCheckQuestions = Array.isArray(raw.selfCheck)
    ? raw.selfCheck
    : Array.isArray(raw.selfCheckQuestions)
    ? raw.selfCheckQuestions
    : [];

  // 14. Sources and References
  let sourcesAndReferences = [];
  if (Array.isArray(raw.sources)) {
    sourcesAndReferences = raw.sources.map(s => ({
      sourceName: typeof s === 'string' ? s : s.sourceName || 'Academic Resource',
      sourceType: 'Standard Reference',
      referenceNote: 'Curated for Campus Recruitment Training syllabus.'
    }));
  } else if (Array.isArray(raw.sourcesAndReferences)) {
    sourcesAndReferences = raw.sourcesAndReferences;
  }

  // 15. Rules and Formulas
  let importantRulesAndFormulas = [];
  if (Array.isArray(raw.importantRulesAndFormulas)) {
    importantRulesAndFormulas = raw.importantRulesAndFormulas;
  } else if (Array.isArray(raw.rulesAndProperties) || Array.isArray(raw.formulas)) {
    const list = [];
    (raw.rulesAndProperties || []).forEach(r => {
      list.push({
        title: r.rule || 'Rule',
        formula: r.formula || 'Rule Property',
        variables: '',
        description: r.explanation || '',
        whenToUse: 'General problem solving.',
        simpleExample: r.example || ''
      });
    });
    (raw.formulas || []).forEach(f => {
      list.push({
        title: f.name || 'Formula',
        formula: f.formula || '',
        variables: Array.isArray(f.variables) ? f.variables.join(', ') : f.variables || '',
        description: f.description || '',
        whenToUse: f.whenToUse || '',
        simpleExample: f.simpleExample || ''
      });
    });
    importantRulesAndFormulas = list;
  }

  // 16. Concept Explanation
  let conceptExplanation = {
    coreDefinitions: [],
    theoreticalIntuition: '',
    visualOrMentalModel: ''
  };
  if (raw.conceptExplanation) {
    conceptExplanation = raw.conceptExplanation;
  } else {
    conceptExplanation = {
      coreDefinitions: (raw.definitions || []).map(d => `${d.term}: ${d.meaning}`),
      theoreticalIntuition: (raw.coreConcepts || []).join(' '),
      visualOrMentalModel: 'Visual mental model for systematic problem representation and solving.'
    };
  }

  // 17. Detailed Explanation
  let detailedExplanation = {
    mainNarrative: [],
    deepDiveAspects: []
  };
  if (raw.detailedExplanation) {
    detailedExplanation = raw.detailedExplanation;
  } else {
    detailedExplanation = {
      mainNarrative: raw.coreConcepts || [],
      deepDiveAspects: (raw.rulesAndProperties || []).map(r => ({
        title: r.rule || 'Core Rule',
        content: `${r.explanation} Example: ${r.example || ''}`
      }))
    };
  }

  return {
    id: raw.id,
    yearId: raw.yearId,
    category: category,
    topicNumber: raw.topicNumber || defaultTopicNumber,
    title: raw.title,
    tagline: raw.tagline || `${raw.title} — Comprehensive One-Day Textbook Chapter`,
    estimatedMinutes: raw.estimatedMinutes || 60,
    difficulty: raw.difficulty || (raw.yearId === 1 ? 'Foundation' : raw.yearId === 2 ? 'Intermediate' : raw.yearId === 3 ? 'Advanced' : 'Placement-Ready'),
    introduction: intro,
    learningObjectives: raw.learningObjectives || [],
    prerequisiteKnowledge: raw.prerequisiteKnowledge || {
      requiredTopics: raw.prerequisites || ['Basic arithmetic and reasoning'],
      quickRefresher: 'Review fundamental equations and definitions before beginning.'
    },
    conceptExplanation: conceptExplanation,
    importantRulesAndFormulas: importantRulesAndFormulas,
    detailedExplanation: detailedExplanation,
    problemVariations: problemVariations,
    solvedExamples: solvedExamples,
    alternativeMethods: alternativeMethods,
    shortcutMethods: shortcutMethods,
    commonMistakes: commonMistakes,
    placementTips: placementTips,
    practiceSets: practiceSets,
    mixedChallengeSet: mixedChallengeSet,
    quickRevision: quickRevision,
    keyTakeaways: keyTakeaways,
    selfCheckQuestions: selfCheckQuestions,
    sourcesAndReferences: sourcesAndReferences
  };
}

module.exports = { normalizeTopic };
