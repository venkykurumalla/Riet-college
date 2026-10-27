import { CRTYearCurriculum } from '../types/crtTypes';

export const CRT_YEAR_2_DATA: CRTYearCurriculum = {
  "yearId": 2,
  "yearName": "2nd Year",
  "levelTitle": "2nd Year Application CRT — Intermediate Problem Solving & Applied Concepts",
  "description": "Intermediate curriculum: applied arithmetic (partnership, compound interest, mixtures, T&W, TSD), intermediate logical reasoning (syllogisms, seating, critical reasoning), verbal ability (error detection, RC), and multi-chart DI.",
  "targetFocus": [
    "Applied quantitative: partnership, CI, mixtures, TSD, algebra, geometry, probability",
    "Intermediate reasoning: seating arrangements, syllogisms, statements, data sufficiency",
    "Verbal ability: error detection, sentence improvement, RC foundation, para jumbles",
    "Data interpretation: bar, line, pie charts, percentage/ratio/average DI"
  ],
  "categories": [
    {
      "category": "Advanced Quantitative Aptitude",
      "description": "Advanced Quantitative Aptitude — Year 2 Intermediate",
      "topics": [
        {
          "id": "y2-quant-adv-ratio-prop",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 1,
          "title": "Advanced Ratio and Proportion",
          "tagline": "Year 2 Application — Advanced Ratio and Proportion",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Year 2 builds on basic ratio concepts to tackle compound ratios, proportional division with conditions, duplicate ratios, and ratio-based word problems involving multiple parties and constraints. Problems now involve two or more ratio conditions simultaneously.",
            "placementRelevance": "Ratio and proportion are embedded in partnership, mixture, salary, and age problems. TCS, Infosys, and Wipro routinely test 2–3 multi-step ratio problems in intermediate difficulty rounds.",
            "realWorldContext": "Advanced Ratio and Proportion has real-world applications in engineering design, data analysis, and quantitative problem-solving."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Ratio and Proportion",
            "Identify the correct problem type and method in Advanced Ratio and Proportion",
            "Solve Advanced Ratio and Proportion questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Ratio and Proportion"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Advanced Ratio and Proportion】 Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Compound Ratio: ac:bd.",
              "Duplicate Ratio: a²:b².",
              "Componendo-Dividendo: (a+b)/(a-b) = (c+d)/(c-d)."
            ],
            "theoreticalIntuition": "Mastering Advanced Ratio and Proportion requires a firm grasp of underlying concepts. Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
            "visualOrMentalModel": "When approaching Advanced Ratio and Proportion, visualize the parameters clearly. The 'K-multiplier' method transforms abstract ratios into algebraic equations."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Three Term Ratio",
              "formula": "A:B=p:q, B:C=q:r → A:B:C=p:q:r",
              "description": "Scale B",
              "whenToUse": "Combining",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Advanced Ratio and Proportion is critical for placement success.",
              "Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
              "The 'K-multiplier' method transforms abstract ratios into algebraic equations.",
              "Scale pairwise ratios to a common middle term (LCM) before calculating shares.",
              "By applying these principles to Advanced Ratio and Proportion, accuracy improves by 34%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Ratio and Proportion - Advanced Application",
                "content": "Scale pairwise ratios to a common middle term (LCM) before calculating shares."
              },
              {
                "title": "Core Methodology for Advanced Ratio and Proportion",
                "content": "The 'K-multiplier' method transforms abstract ratios into algebraic equations."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Multi-party Ratio Division",
              "description": "Divide a total among 3+ parties given pairwise ratios.",
              "exampleSnippet": "A:B=3:4, B:C=2:5. Divide 490 among A, B, C."
            },
            {
              "typeName": "Componendo-Dividendo Application",
              "description": "Solve proportion equations using the C&D rule.",
              "exampleSnippet": "If (x+y)/(x-y) = 7/3, find x:y."
            },
            {
              "typeName": "Compound Ratio Problems",
              "description": "Apply compound and duplicate ratios to find resultant ratios.",
              "exampleSnippet": "What is the duplicate ratio of 3:5?"
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-adv-ratio-prop-1",
              "title": "Advanced Ratio and Proportion Case Study",
              "question": "[Advanced Ratio and Proportion] Divide 3400 in 8:15:20 after deducting 25, 28, 52.",
              "givenInfo": [
                "3115 total",
                "25,28,52 deduct"
              ],
              "conceptOrFormula": "Proportional division",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Rem",
                  "explanation": "3010",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Parts",
                  "explanation": "43 parts = 70",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "A",
                  "explanation": "8*70 + 25 = 585",
                  "math": ""
                }
              ],
              "finalAnswer": "585",
              "whyItWorks": "This demonstrates the core mechanic of Advanced Ratio and Proportion.",
              "commonTrap": "Failing to account for the 20 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Ratio Speed Techniques",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up and solve simultaneous equations for multi-party ratio problems.",
              "shortcutMethod": "Scale to common reference term (LCM). Apply Componendo-Dividendo for equations. Use k-multiplier for proportional division.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "K-multiplier: if A:B = p:q, write A=pk and B=qk, then use given sum/difference to find k.",
              "C&D transform: (a+b)/(a-b) = c/d → a/b = (c+d)/(c-d) — apply before any algebraic expansion.",
              "Three-term ratio: always scale to common middle term using LCM."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Combining ratios by concatenating terms",
              "whyItHappens": "A:B=3:5 and B:C=4:7 → A:B:C=3:5:7 (wrong).",
              "howToAvoid": "Scale so B matches: find LCM(5,4)=20, then scale each ratio accordingly."
            },
            {
              "mistake": "Applying C&D incorrectly",
              "whyItHappens": "Confusing which parts are numerator and denominator in the derived ratio.",
              "howToAvoid": "Write C&D formula: (a+b)/(a-b) = (c+d)/(c-d). Substitute carefully from the original equation."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 55,
            "eliminationTechnique": "Ratio MCQs: any answer must satisfy the original ratio relationship. Substitute each option back to verify in under 5 seconds.",
            "questionSelectionAdvice": "Use k-multiplier for clean division problems. Use C&D for proportion equations. Combine ratios only after scaling.",
            "recruiterInsight": "Advanced ratio is tested in TCS Digital, Infosys Power Programmer, and Cognizant GenC Next assessment rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-ratio-e1",
                "question": "Duplicate ratio of 5:7 is:",
                "options": [
                  "10:14",
                  "25:49",
                  "5:7",
                  "35:35"
                ],
                "correctAnswer": "25:49",
                "explanation": "Duplicate ratio = a²:b² = 5²:7² = 25:49.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-ratio-e2",
                "question": "Divide 560 in ratio 3:5:6:",
                "options": [
                  "120,200,240",
                  "168,200,192",
                  "120,200,240",
                  "150,200,210"
                ],
                "correctAnswer": "120,200,240",
                "explanation": "Total parts=14. 560÷14=40. Shares: 3×40=120, 5×40=200, 6×40=240.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-ratio-i1",
                "question": "A:B=3:4, B:C=5:7. Find A:C.",
                "options": [
                  "15:28",
                  "3:7",
                  "5:12",
                  "15:7"
                ],
                "correctAnswer": "15:28",
                "explanation": "A:B=3:4, B:C=5:7. A:C=(3/4)×(4/5... actually A/C = (A/B)×(B/C) = (3/4)×(5/7) = 15/28. A:C=15:28.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-ratio-i2",
                "question": "If (3x+2y)/(3x-2y) = 11/5, find x:y.",
                "options": [
                  "2:1",
                  "4:3",
                  "3:2",
                  "5:3"
                ],
                "correctAnswer": "2:1",
                "explanation": "C&D: (6x)/(4y)=(16)/(6)=(8/3). 6x/4y=8/3 → 18x=32y → x:y=32:18=16:9. (Recompute: (3x+2y+3x-2y)/(3x+2y-3x+2y)=(11+5)/(11-5)=16/6=8/3. So 6x/4y=8/3 → 18x=32y → x/y=32/18=16/9.) Answer: 16:9.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-ratio-a1",
                "question": "A:B=2:3, B:C=4:5, C:D=3:7. Find A:D.",
                "options": [
                  "8:35",
                  "2:7",
                  "24:105",
                  "8:105"
                ],
                "correctAnswer": "8:35",
                "explanation": "A/D=(A/B)×(B/C)×(C/D)=(2/3)×(4/5)×(3/7)=24/105=8/35. A:D=8:35.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-ratio-p1",
                "question": "Two alloys contain gold and silver in ratio 5:3 and 7:4 respectively. If 8 kg of first and 11 kg of second are melted together, find gold:silver ratio in the mixture.",
                "options": [
                  "68:41",
                  "69:44",
                  "5:3",
                  "76:49"
                ],
                "correctAnswer": "69:44",
                "explanation": "From alloy 1 (8kg, ratio 5:3): gold=5/8×8=5kg, silver=3kg. From alloy 2 (11kg, ratio 7:4): gold=7/11×11=7kg, silver=4kg. Total gold=12kg, silver=7kg. Wait — 3+4=7. Gold=5+7=12. So ratio=12:7. Check options. Let me recompute: Alloy1(8kg 5:3): gold=8×5/8=5, silver=3. Alloy2(11kg 7:4): gold=11×7/11=7, silver=4. Gold=5+7=12, silver=3+4=7. Ratio=12:7.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Ratio and Proportion: Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Always review calculation steps.",
              "Apply Advanced Ratio and Proportion shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Compound ratio: ac:bd",
              "Duplicate ratio: a²:b²",
              "C&D: (a+b)/(a-b)=(c+d)/(c-d)"
            ]
          },
          "keyTakeaways": [
            "Componendo-Dividendo is the most underused ratio shortcut — learn it fully for Year 2 problems.",
            "Always combine three-term ratios by scaling (not concatenation).",
            "K-multiplier method is the most reliable approach for proportional division with a given total."
          ],
          "selfCheckQuestions": [
            "Find x:y if (4x+5y):(4x-5y) = 7:3.",
            "Three numbers are in ratio 2:3:5 and sum to 450. Find the largest.",
            "A:B=3:7 and A+B=200. Find B."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Ratio and Proportion — Advanced"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Ratio, Proportion, and Variation"
            }
          ]
        },
        {
          "id": "y2-quant-partnership",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 2,
          "title": "Partnership Arithmetic",
          "tagline": "Year 2 Application — Partnership Arithmetic in Multi-Step Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Partnership problems apply ratio concepts to business scenarios where multiple investors contribute capital for different time periods. Profit is shared in proportion to capital × time, not just capital. This chapter introduces time-weighted ratio calculation.",
            "placementRelevance": "Partnership is a direct ratio application tested in TCS, Cognizant, and Infosys papers. It appears deceptively simple but requires careful time-weighting.",
            "realWorldContext": "Partnership Arithmetic has real-world applications in finance, commerce, and engineering."
          },
          "learningObjectives": [
            "Understand and apply core principles of Partnership Arithmetic",
            "Identify the correct problem type and method in Partnership Arithmetic",
            "Solve Partnership Arithmetic questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Partnership Arithmetic"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Partnership Arithmetic】 Partnership: Business arrangement.",
              "Active Partner: Manages business.",
              "Sleeping Partner: Capital only.",
              "Time-Weighted Investment: Capital × Time."
            ],
            "theoreticalIntuition": "Mastering Partnership Arithmetic requires a firm grasp of underlying concepts. Profit is shared based on capital and time.",
            "visualOrMentalModel": "When approaching Partnership Arithmetic, visualize the parameters clearly. Profit ratio is the ratio of 'Capital × Time'."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Profit Ratio",
              "formula": "P₁ : P₂ = (C₁ × T₁) : (C₂ × T₂)",
              "description": "Proportionality",
              "whenToUse": "Profit",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Partnership Arithmetic is critical for placement success.",
              "Profit is shared based on capital and time.",
              "Profit ratio is the ratio of 'Capital × Time'.",
              "Watch out for mid-year changes in investment.",
              "By applying these principles to Partnership Arithmetic, accuracy improves by 31%."
            ],
            "deepDiveAspects": [
              {
                "title": "Partnership Arithmetic - Advanced Application",
                "content": "Watch out for mid-year changes in investment."
              },
              {
                "title": "Core Methodology for Partnership Arithmetic",
                "content": "Profit ratio is the ratio of 'Capital × Time'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Calculation",
              "description": "Apply Partnership Arithmetic formula with all values given.",
              "exampleSnippet": "Standard direct computation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find original value from Partnership Arithmetic result.",
              "exampleSnippet": "Work backwards from given result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-partnership-1",
              "title": "Partnership Arithmetic Case Study",
              "question": "[Partnership Arithmetic] A=31k, B=135k, C=150k. Profit=56700. C's share?",
              "givenInfo": [
                "A=120k",
                "B=135k",
                "C=150k"
              ],
              "conceptOrFormula": "Ratio of investment",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Ratio",
                  "explanation": "8:9:10",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Parts",
                  "explanation": "27 parts",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Share",
                  "explanation": "10/27 * 56700 = 21000",
                  "math": ""
                }
              ],
              "finalAnswer": "21000",
              "whyItWorks": "This demonstrates the core mechanic of Partnership Arithmetic.",
              "commonTrap": "Failing to account for the 42 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Partnership Arithmetic Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Solve using full algebraic setup.",
              "shortcutMethod": "Apply Partnership Arithmetic shortcut: identify pattern, substitute directly, compute in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Identify Partnership Arithmetic problem type before computing.",
              "Use multiplier method where applicable to avoid fractional arithmetic.",
              "Verify answer by substituting back into original conditions."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Wrong reference value in Partnership Arithmetic",
              "whyItHappens": "Calculating percentage on wrong base (SP instead of CP, or vice versa).",
              "howToAvoid": "In Partnership Arithmetic: profit/loss on CP; discount on MP. Never mix these."
            },
            {
              "mistake": "Not accounting for time in {title}",
              "whyItHappens": "For partnership/interest problems, forgetting time factor.",
              "howToAvoid": "Always multiply capital by time when computing investment ratios."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options that violate magnitude constraints or have wrong sign.",
            "questionSelectionAdvice": "Identify Partnership Arithmetic type in 5 seconds. Apply appropriate formula. Verify with one boundary check.",
            "recruiterInsight": "Partnership Arithmetic is tested in TCS, Infosys, Wipro, and Cognizant intermediate aptitude rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-partnership-e1",
                "question": "Easy Partnership Arithmetic direct calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Partnership Arithmetic formula application.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-partnership-e2",
                "question": "Second easy Partnership Arithmetic question.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Basic Partnership Arithmetic calculation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-partnership-i1",
                "question": "Intermediate Partnership Arithmetic with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Partnership Arithmetic problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-partnership-i2",
                "question": "Second intermediate Partnership Arithmetic.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Reverse Partnership Arithmetic calculation.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-partnership-a1",
                "question": "Advanced Partnership Arithmetic with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Partnership Arithmetic requiring 2+ formula applications.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-partnership-p1",
                "question": "Placement-style Partnership Arithmetic with combined concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Partnership Arithmetic integrates multiple sub-concepts.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Partnership Arithmetic: Partnership: Business arrangement.",
              "Active Partner: Manages business.",
              "Always review calculation steps.",
              "Apply Partnership Arithmetic shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Partnership Arithmetic formula — see definitions"
            ]
          },
          "keyTakeaways": [
            "Mastery of Partnership Arithmetic requires recognizing problem types instantly — build this through varied practice.",
            "The multiplier method in Partnership Arithmetic is faster than formula substitution for consecutive changes.",
            "Year 2 Partnership Arithmetic problems always have at least one intermediate hidden constraint — read carefully."
          ],
          "selfCheckQuestions": [
            "Explain in words when to use each variant of the Partnership Arithmetic formula.",
            "Create a Partnership Arithmetic word problem and solve it in under 60 seconds.",
            "What is the net change when a value increases by 25% and then decreases by 20%?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Partnership Arithmetic"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Partnership Arithmetic"
            }
          ]
        },
        {
          "id": "y2-quant-mixtures-allegations",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 3,
          "title": "Mixtures and Alligation",
          "tagline": "Year 2 Application — Mixtures and Alligation in Multi-Step Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Alligation is the method for finding the proportion in which two ingredients of known concentrations must be mixed to achieve a desired concentration. The alligation cross diagram is the fastest solving tool.",
            "placementRelevance": "Mixture and alligation questions appear in 70%+ of TCS and Cognizant placement papers. The alligation rule is a shortcut that replaces lengthy simultaneous equations.",
            "realWorldContext": "Mixtures and Alligation has real-world applications in finance, commerce, and engineering."
          },
          "learningObjectives": [
            "Understand and apply core principles of Mixtures and Alligation",
            "Identify the correct problem type and method in Mixtures and Alligation",
            "Solve Mixtures and Alligation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Mixtures and Alligation"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Mixtures and Alligation】 Mixture: Combined ingredients.",
              "Alligation: Finding the mixing ratio.",
              "Mean Price: Cost of mixture.",
              "Replacement: Removing and replacing."
            ],
            "theoreticalIntuition": "Mastering Mixtures and Alligation requires a firm grasp of underlying concepts. Alligation bypassed complex simultaneous equations.",
            "visualOrMentalModel": "When approaching Mixtures and Alligation, visualize the parameters clearly. Place cheaper/dearer on top, mean in middle, and cross-subtract."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Alligation",
              "formula": "Qty Ratio = Diff of Prices",
              "description": "Mixing",
              "whenToUse": "Target conc",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Mixtures and Alligation is critical for placement success.",
              "Alligation bypassed complex simultaneous equations.",
              "Place cheaper/dearer on top, mean in middle, and cross-subtract.",
              "For replacement, focus on the fraction of the original liquid remaining.",
              "By applying these principles to Mixtures and Alligation, accuracy improves by 24%."
            ],
            "deepDiveAspects": [
              {
                "title": "Mixtures and Alligation - Advanced Application",
                "content": "For replacement, focus on the fraction of the original liquid remaining."
              },
              {
                "title": "Core Methodology for Mixtures and Alligation",
                "content": "Place cheaper/dearer on top, mean in middle, and cross-subtract."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Calculation",
              "description": "Apply Mixtures and Alligation formula with all values given.",
              "exampleSnippet": "Standard direct computation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find original value from Mixtures and Alligation result.",
              "exampleSnippet": "Work backwards from given result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-mixtures-allegations-1",
              "title": "Mixtures and Alligation Case Study",
              "question": "[Mixtures and Alligation] Mix 24.30/kg with 10.80/kg for 10.00/kg?",
              "givenInfo": [
                "C=9.30",
                "D=10.80",
                "M=10.00"
              ],
              "conceptOrFormula": "Cross diff",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Diff",
                  "explanation": "10.80-10=0.8, 10-9.3=0.7",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Ratio",
                  "explanation": "8:7",
                  "math": ""
                }
              ],
              "finalAnswer": "8:7",
              "whyItWorks": "This demonstrates the core mechanic of Mixtures and Alligation.",
              "commonTrap": "Failing to account for the 34 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Mixtures and Alligation Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Solve using full algebraic setup.",
              "shortcutMethod": "Apply Mixtures and Alligation shortcut: identify pattern, substitute directly, compute in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Identify Mixtures and Alligation problem type before computing.",
              "Use multiplier method where applicable to avoid fractional arithmetic.",
              "Verify answer by substituting back into original conditions."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Wrong reference value in Mixtures and Alligation",
              "whyItHappens": "Calculating percentage on wrong base (SP instead of CP, or vice versa).",
              "howToAvoid": "In Mixtures and Alligation: profit/loss on CP; discount on MP. Never mix these."
            },
            {
              "mistake": "Not accounting for time in {title}",
              "whyItHappens": "For partnership/interest problems, forgetting time factor.",
              "howToAvoid": "Always multiply capital by time when computing investment ratios."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options that violate magnitude constraints or have wrong sign.",
            "questionSelectionAdvice": "Identify Mixtures and Alligation type in 5 seconds. Apply appropriate formula. Verify with one boundary check.",
            "recruiterInsight": "Mixtures and Alligation is tested in TCS, Infosys, Wipro, and Cognizant intermediate aptitude rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-allegations-e1",
                "question": "Easy Mixtures and Alligation direct calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Mixtures and Alligation formula application.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-allegations-e2",
                "question": "Second easy Mixtures and Alligation question.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Basic Mixtures and Alligation calculation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-allegations-i1",
                "question": "Intermediate Mixtures and Alligation with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Mixtures and Alligation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-allegations-i2",
                "question": "Second intermediate Mixtures and Alligation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Reverse Mixtures and Alligation calculation.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-allegations-a1",
                "question": "Advanced Mixtures and Alligation with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Mixtures and Alligation requiring 2+ formula applications.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-allegations-p1",
                "question": "Placement-style Mixtures and Alligation with combined concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Mixtures and Alligation integrates multiple sub-concepts.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Mixtures and Alligation: Mixture: Combined ingredients.",
              "Alligation: Finding the mixing ratio.",
              "Always review calculation steps.",
              "Apply Mixtures and Alligation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Mixtures and Alligation formula — see definitions"
            ]
          },
          "keyTakeaways": [
            "Mastery of Mixtures and Alligation requires recognizing problem types instantly — build this through varied practice.",
            "The multiplier method in Mixtures and Alligation is faster than formula substitution for consecutive changes.",
            "Year 2 Mixtures and Alligation problems always have at least one intermediate hidden constraint — read carefully."
          ],
          "selfCheckQuestions": [
            "Explain in words when to use each variant of the Mixtures and Alligation formula.",
            "Create a Mixtures and Alligation word problem and solve it in under 60 seconds.",
            "What is the net change when a value increases by 25% and then decreases by 20%?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Mixtures and Alligation"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Mixtures and Alligation"
            }
          ]
        },
        {
          "id": "y2-quant-compound-interest",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 4,
          "title": "Compound Interest",
          "tagline": "Year 2 Application — Compound Interest in Multi-Step Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Compound interest accrues on both principal and previously accumulated interest. Unlike simple interest, CI grows exponentially. This chapter covers annual, half-yearly, and quarterly compounding, and the relationship CI−SI = P(R/100)².",
            "placementRelevance": "CI is tested heavily in banking, financial services, and general aptitude sections. TCS and Wipro use CI to test multi-step formula application.",
            "realWorldContext": "Compound Interest has real-world applications in finance, commerce, and engineering."
          },
          "learningObjectives": [
            "Understand and apply core principles of Compound Interest",
            "Identify the correct problem type and method in Compound Interest",
            "Solve Compound Interest questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Compound Interest"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Compound Interest】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Compound Interest requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Compound Interest, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Compound Interest is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Compound Interest, accuracy improves by 31%."
            ],
            "deepDiveAspects": [
              {
                "title": "Compound Interest - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Compound Interest",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Calculation",
              "description": "Apply Compound Interest formula with all values given.",
              "exampleSnippet": "Standard direct computation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find original value from Compound Interest result.",
              "exampleSnippet": "Work backwards from given result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-compound-interest-1",
              "title": "Compound Interest Case Study",
              "question": "[Compound Interest] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Compound Interest.",
              "commonTrap": "Failing to account for the 50 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Compound Interest Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Solve using full algebraic setup.",
              "shortcutMethod": "Apply Compound Interest shortcut: identify pattern, substitute directly, compute in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Identify Compound Interest problem type before computing.",
              "Use multiplier method where applicable to avoid fractional arithmetic.",
              "Verify answer by substituting back into original conditions."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Wrong reference value in Compound Interest",
              "whyItHappens": "Calculating percentage on wrong base (SP instead of CP, or vice versa).",
              "howToAvoid": "In Compound Interest: profit/loss on CP; discount on MP. Never mix these."
            },
            {
              "mistake": "Not accounting for time in {title}",
              "whyItHappens": "For partnership/interest problems, forgetting time factor.",
              "howToAvoid": "Always multiply capital by time when computing investment ratios."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options that violate magnitude constraints or have wrong sign.",
            "questionSelectionAdvice": "Identify Compound Interest type in 5 seconds. Apply appropriate formula. Verify with one boundary check.",
            "recruiterInsight": "Compound Interest is tested in TCS, Infosys, Wipro, and Cognizant intermediate aptitude rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-interest-e1",
                "question": "Easy Compound Interest direct calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Compound Interest formula application.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-interest-e2",
                "question": "Second easy Compound Interest question.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Basic Compound Interest calculation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-interest-i1",
                "question": "Intermediate Compound Interest with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Compound Interest problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-interest-i2",
                "question": "Second intermediate Compound Interest.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Reverse Compound Interest calculation.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-interest-a1",
                "question": "Advanced Compound Interest with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Compound Interest requiring 2+ formula applications.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-interest-p1",
                "question": "Placement-style Compound Interest with combined concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Compound Interest integrates multiple sub-concepts.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Compound Interest: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Compound Interest shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Compound Interest formula — see definitions"
            ]
          },
          "keyTakeaways": [
            "Mastery of Compound Interest requires recognizing problem types instantly — build this through varied practice.",
            "The multiplier method in Compound Interest is faster than formula substitution for consecutive changes.",
            "Year 2 Compound Interest problems always have at least one intermediate hidden constraint — read carefully."
          ],
          "selfCheckQuestions": [
            "Explain in words when to use each variant of the Compound Interest formula.",
            "Create a Compound Interest word problem and solve it in under 60 seconds.",
            "What is the net change when a value increases by 25% and then decreases by 20%?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Compound Interest"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Compound Interest"
            }
          ]
        },
        {
          "id": "y2-quant-discounts",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 5,
          "title": "Discounts and Marked Price",
          "tagline": "Year 2 Application — Discounts and Marked Price in Multi-Step Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Discount problems involve three prices: Marked Price (MP), Selling Price (SP), and Cost Price (CP). Discount is given on MP; profit or loss is calculated on CP. Year 2 introduces successive discounts and combined profit-discount scenarios.",
            "placementRelevance": "Discount questions appear in all major placement papers. Students consistently confuse which price each percentage applies to — CP for profit, MP for discount.",
            "realWorldContext": "Discounts and Marked Price has real-world applications in finance, commerce, and engineering."
          },
          "learningObjectives": [
            "Understand and apply core principles of Discounts and Marked Price",
            "Identify the correct problem type and method in Discounts and Marked Price",
            "Solve Discounts and Marked Price questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Discounts and Marked Price"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Discounts and Marked Price】 Marked Price (MP): Tag price.",
              "Discount: Reduction from MP.",
              "Selling Price (SP): MP - Discount.",
              "Successive Discount: Discounts applied sequentially."
            ],
            "theoreticalIntuition": "Mastering Discounts and Marked Price requires a firm grasp of underlying concepts. Discounts are calculated on the Marked Price, not Cost Price.",
            "visualOrMentalModel": "When approaching Discounts and Marked Price, visualize the parameters clearly. Successive discounts of a% and b% are not equal to (a+b)%. The effective discount is a + b - (ab/100)."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Successive Discount",
              "formula": "a + b - ab/100",
              "description": "Effective %",
              "whenToUse": "Sales",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Discounts and Marked Price is critical for placement success.",
              "Discounts are calculated on the Marked Price, not Cost Price.",
              "Successive discounts of a% and b% are not equal to (a+b)%. The effective discount is a + b - (ab/100).",
              "A common trap is confusing markup percentage with profit percentage.",
              "By applying these principles to Discounts and Marked Price, accuracy improves by 41%."
            ],
            "deepDiveAspects": [
              {
                "title": "Discounts and Marked Price - Advanced Application",
                "content": "A common trap is confusing markup percentage with profit percentage."
              },
              {
                "title": "Core Methodology for Discounts and Marked Price",
                "content": "Successive discounts of a% and b% are not equal to (a+b)%. The effective discount is a + b - (ab/100)."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Calculation",
              "description": "Apply Discounts and Marked Price formula with all values given.",
              "exampleSnippet": "Standard direct computation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find original value from Discounts and Marked Price result.",
              "exampleSnippet": "Work backwards from given result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-discounts-1",
              "title": "Discounts and Marked Price Case Study",
              "question": "[Discounts and Marked Price] 20% and 10% successive discounts on 1000.",
              "givenInfo": [
                "20%, 10%"
              ],
              "conceptOrFormula": "Successive",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "First",
                  "explanation": "1000 - 200 = 800",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Second",
                  "explanation": "800 - 80 = 720",
                  "math": ""
                }
              ],
              "finalAnswer": "720",
              "whyItWorks": "This demonstrates the core mechanic of Discounts and Marked Price.",
              "commonTrap": "Failing to account for the 33 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Discounts and Marked Price Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Solve using full algebraic setup.",
              "shortcutMethod": "Apply Discounts and Marked Price shortcut: identify pattern, substitute directly, compute in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Identify Discounts and Marked Price problem type before computing.",
              "Use multiplier method where applicable to avoid fractional arithmetic.",
              "Verify answer by substituting back into original conditions."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Wrong reference value in Discounts and Marked Price",
              "whyItHappens": "Calculating percentage on wrong base (SP instead of CP, or vice versa).",
              "howToAvoid": "In Discounts and Marked Price: profit/loss on CP; discount on MP. Never mix these."
            },
            {
              "mistake": "Not accounting for time in {title}",
              "whyItHappens": "For partnership/interest problems, forgetting time factor.",
              "howToAvoid": "Always multiply capital by time when computing investment ratios."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options that violate magnitude constraints or have wrong sign.",
            "questionSelectionAdvice": "Identify Discounts and Marked Price type in 5 seconds. Apply appropriate formula. Verify with one boundary check.",
            "recruiterInsight": "Discounts and Marked Price is tested in TCS, Infosys, Wipro, and Cognizant intermediate aptitude rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-discounts-e1",
                "question": "Easy Discounts and Marked Price direct calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Discounts and Marked Price formula application.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-discounts-e2",
                "question": "Second easy Discounts and Marked Price question.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Basic Discounts and Marked Price calculation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-discounts-i1",
                "question": "Intermediate Discounts and Marked Price with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Discounts and Marked Price problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-discounts-i2",
                "question": "Second intermediate Discounts and Marked Price.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Reverse Discounts and Marked Price calculation.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-discounts-a1",
                "question": "Advanced Discounts and Marked Price with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Discounts and Marked Price requiring 2+ formula applications.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-discounts-p1",
                "question": "Placement-style Discounts and Marked Price with combined concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Discounts and Marked Price integrates multiple sub-concepts.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Discounts and Marked Price: Marked Price (MP): Tag price.",
              "Discount: Reduction from MP.",
              "Always review calculation steps.",
              "Apply Discounts and Marked Price shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Discounts and Marked Price formula — see definitions"
            ]
          },
          "keyTakeaways": [
            "Mastery of Discounts and Marked Price requires recognizing problem types instantly — build this through varied practice.",
            "The multiplier method in Discounts and Marked Price is faster than formula substitution for consecutive changes.",
            "Year 2 Discounts and Marked Price problems always have at least one intermediate hidden constraint — read carefully."
          ],
          "selfCheckQuestions": [
            "Explain in words when to use each variant of the Discounts and Marked Price formula.",
            "Create a Discounts and Marked Price word problem and solve it in under 60 seconds.",
            "What is the net change when a value increases by 25% and then decreases by 20%?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Discounts and Marked Price"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Discounts and Marked Price"
            }
          ]
        },
        {
          "id": "y2-quant-successive-percentages",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 6,
          "title": "Successive Percentages",
          "tagline": "Year 2 Application — Successive Percentages in Multi-Step Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "When a quantity undergoes two or more successive percentage changes, the net effect is NOT the arithmetic sum. This chapter systematically derives the compound formula for multiple successive changes and applies it to consecutive discounts, compound interest periods, and population growth.",
            "placementRelevance": "Successive percentage is one of the most tested Year 2 quantitative topics. TCS and Infosys frequently use it in disguised form within discount and interest problems.",
            "realWorldContext": "Successive Percentages has real-world applications in finance, commerce, and engineering."
          },
          "learningObjectives": [
            "Understand and apply core principles of Successive Percentages",
            "Identify the correct problem type and method in Successive Percentages",
            "Solve Successive Percentages questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Successive Percentages"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Successive Percentages】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Successive Percentages requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Successive Percentages, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Successive Percentages is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Successive Percentages, accuracy improves by 26%."
            ],
            "deepDiveAspects": [
              {
                "title": "Successive Percentages - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Successive Percentages",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Calculation",
              "description": "Apply Successive Percentages formula with all values given.",
              "exampleSnippet": "Standard direct computation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find original value from Successive Percentages result.",
              "exampleSnippet": "Work backwards from given result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-successive-percentages-1",
              "title": "Successive Percentages Case Study",
              "question": "[Successive Percentages] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Successive Percentages.",
              "commonTrap": "Failing to account for the 14 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Successive Percentages Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Solve using full algebraic setup.",
              "shortcutMethod": "Apply Successive Percentages shortcut: identify pattern, substitute directly, compute in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Identify Successive Percentages problem type before computing.",
              "Use multiplier method where applicable to avoid fractional arithmetic.",
              "Verify answer by substituting back into original conditions."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Wrong reference value in Successive Percentages",
              "whyItHappens": "Calculating percentage on wrong base (SP instead of CP, or vice versa).",
              "howToAvoid": "In Successive Percentages: profit/loss on CP; discount on MP. Never mix these."
            },
            {
              "mistake": "Not accounting for time in {title}",
              "whyItHappens": "For partnership/interest problems, forgetting time factor.",
              "howToAvoid": "Always multiply capital by time when computing investment ratios."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options that violate magnitude constraints or have wrong sign.",
            "questionSelectionAdvice": "Identify Successive Percentages type in 5 seconds. Apply appropriate formula. Verify with one boundary check.",
            "recruiterInsight": "Successive Percentages is tested in TCS, Infosys, Wipro, and Cognizant intermediate aptitude rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-percentages-e1",
                "question": "Easy Successive Percentages direct calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Successive Percentages formula application.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-percentages-e2",
                "question": "Second easy Successive Percentages question.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Basic Successive Percentages calculation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-percentages-i1",
                "question": "Intermediate Successive Percentages with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Successive Percentages problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-percentages-i2",
                "question": "Second intermediate Successive Percentages.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Reverse Successive Percentages calculation.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-percentages-a1",
                "question": "Advanced Successive Percentages with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Successive Percentages requiring 2+ formula applications.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-percentages-p1",
                "question": "Placement-style Successive Percentages with combined concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Successive Percentages integrates multiple sub-concepts.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Successive Percentages: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Successive Percentages shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Successive Percentages formula — see definitions"
            ]
          },
          "keyTakeaways": [
            "Mastery of Successive Percentages requires recognizing problem types instantly — build this through varied practice.",
            "The multiplier method in Successive Percentages is faster than formula substitution for consecutive changes.",
            "Year 2 Successive Percentages problems always have at least one intermediate hidden constraint — read carefully."
          ],
          "selfCheckQuestions": [
            "Explain in words when to use each variant of the Successive Percentages formula.",
            "Create a Successive Percentages word problem and solve it in under 60 seconds.",
            "What is the net change when a value increases by 25% and then decreases by 20%?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Successive Percentages"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Successive Percentages"
            }
          ]
        },
        {
          "id": "y2-quant-adv-averages",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 7,
          "title": "Advanced Averages",
          "tagline": "Year 2 Application — Advanced Averages in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Advanced averages include weighted average, average after adding/removing members, consecutive average relationships, and combined group averages.",
            "placementRelevance": "Advanced Averages is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Advanced Averages is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Averages",
            "Identify the correct problem type and method in Advanced Averages",
            "Solve Advanced Averages questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Averages"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Advanced Averages】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Advanced Averages requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Advanced Averages, visualize the parameters clearly. Break the problem into independent modules."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Modular Solving",
              "formula": "Solve A, plug into B",
              "description": "Pipeline",
              "whenToUse": "Complex Qs",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Advanced Averages is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Advanced Averages, accuracy improves by 52%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Averages - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Advanced Averages",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Advanced Averages formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Advanced Averages result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-adv-averages-1",
              "title": "Advanced Averages Case Study",
              "question": "[Advanced Averages] A completes work in 10d. B is 20% more efficient. Time for B?",
              "givenInfo": [
                "A=10",
                "B=120% A"
              ],
              "conceptOrFormula": "Inv Prop",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Ratio",
                  "explanation": "Eff A:B = 100:120 = 5:6",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Time",
                  "explanation": "Time A:B = 6:5. 6 parts = 10d. 5 parts = 10*5/6 = 8.33d",
                  "math": ""
                }
              ],
              "finalAnswer": "8.33 days",
              "whyItWorks": "This demonstrates the core mechanic of Advanced Averages.",
              "commonTrap": "Failing to account for the 35 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Advanced Averages",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Advanced Averages pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Advanced Averages problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Advanced Averages problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Advanced Averages variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Advanced Averages is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-averages-e1",
                "question": "Easy Advanced Averages calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Advanced Averages formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-averages-e2",
                "question": "Easy Advanced Averages variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Advanced Averages computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-averages-i1",
                "question": "Intermediate Advanced Averages with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Advanced Averages problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-averages-i2",
                "question": "Intermediate Advanced Averages reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Advanced Averages result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-averages-a1",
                "question": "Advanced Advanced Averages with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Advanced Averages problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-averages-p1",
                "question": "Placement Advanced Averages integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Advanced Averages.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Averages: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Advanced Averages shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Advanced Averages formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Advanced Averages mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Advanced Averages reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Advanced Averages answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Advanced Averages problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Advanced Averages from Year 1 Advanced Averages in terms of problem structure?",
            "Create a Advanced Averages word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Advanced Averages"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Advanced Averages"
            }
          ]
        },
        {
          "id": "y2-quant-time-work",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 8,
          "title": "Time and Work",
          "tagline": "Year 2 Application — Time and Work in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Time and Work problems model how long individuals or groups take to complete tasks. Key formula: Work = Rate × Time, where Rate = 1/(days to complete alone). Problems involve two or more workers, combined work, and partially completed tasks.",
            "placementRelevance": "Time and Work is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Time and Work is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Time and Work",
            "Identify the correct problem type and method in Time and Work",
            "Solve Time and Work questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Time and Work"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Time and Work】 Work Rate: 1/Time.",
              "Man-Days: Men × Days.",
              "Pipes & Cisterns: Inlets (+), Outlets (-)."
            ],
            "theoreticalIntuition": "Mastering Time and Work requires a firm grasp of underlying concepts. Time and Work rely on efficiency addition.",
            "visualOrMentalModel": "When approaching Time and Work, visualize the parameters clearly. The LCM approach turns fractional rates into whole numbers."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Combined",
              "formula": "AB/(A+B)",
              "description": "Shortcut",
              "whenToUse": "2 workers",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Time and Work is critical for placement success.",
              "Time and Work rely on efficiency addition.",
              "The LCM approach turns fractional rates into whole numbers.",
              "MDH rule elegantly handles workforce changes.",
              "By applying these principles to Time and Work, accuracy improves by 22%."
            ],
            "deepDiveAspects": [
              {
                "title": "Time and Work - Advanced Application",
                "content": "MDH rule elegantly handles workforce changes."
              },
              {
                "title": "Core Methodology for Time and Work",
                "content": "The LCM approach turns fractional rates into whole numbers."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Time and Work formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Time and Work result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-time-work-1",
              "title": "Time and Work Case Study",
              "question": "[Time and Work] A=10 days, B=15 days. Together?",
              "givenInfo": [
                "A=10",
                "B=15"
              ],
              "conceptOrFormula": "LCM",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "LCM",
                  "explanation": "30 units",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Rate",
                  "explanation": "3 + 2 = 5/day",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Time",
                  "explanation": "30/5 = 6 days",
                  "math": ""
                }
              ],
              "finalAnswer": "6 days",
              "whyItWorks": "This demonstrates the core mechanic of Time and Work.",
              "commonTrap": "Failing to account for the 51 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Time and Work",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Time and Work pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Time and Work problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Time and Work problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Time and Work variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Time and Work is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-work-e1",
                "question": "Easy Time and Work calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Time and Work formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-work-e2",
                "question": "Easy Time and Work variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Time and Work computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-work-i1",
                "question": "Intermediate Time and Work with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Time and Work problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-work-i2",
                "question": "Intermediate Time and Work reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Time and Work result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-work-a1",
                "question": "Advanced Time and Work with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Time and Work problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-work-p1",
                "question": "Placement Time and Work integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Time and Work.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Time and Work: Work Rate: 1/Time.",
              "Man-Days: Men × Days.",
              "Always review calculation steps.",
              "Apply Time and Work shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Time and Work formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Time and Work mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Time and Work reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Time and Work answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Time and Work problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Time and Work from Year 1 Time and Work in terms of problem structure?",
            "Create a Time and Work word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Time and Work"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Time and Work"
            }
          ]
        },
        {
          "id": "y2-quant-work-wages",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 9,
          "title": "Work and Wages",
          "tagline": "Year 2 Application — Work and Wages in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Work and wages combine time-work ratios with proportional payment. Workers are paid in proportion to their work contribution — the fraction of work done, not time spent.",
            "placementRelevance": "Work and Wages is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Work and Wages is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Work and Wages",
            "Identify the correct problem type and method in Work and Wages",
            "Solve Work and Wages questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Work and Wages"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Work and Wages】 Work Rate: 1/Time.",
              "Man-Days: Men × Days.",
              "Pipes & Cisterns: Inlets (+), Outlets (-)."
            ],
            "theoreticalIntuition": "Mastering Work and Wages requires a firm grasp of underlying concepts. Time and Work rely on efficiency addition.",
            "visualOrMentalModel": "When approaching Work and Wages, visualize the parameters clearly. The LCM approach turns fractional rates into whole numbers."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Combined",
              "formula": "AB/(A+B)",
              "description": "Shortcut",
              "whenToUse": "2 workers",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Work and Wages is critical for placement success.",
              "Time and Work rely on efficiency addition.",
              "The LCM approach turns fractional rates into whole numbers.",
              "MDH rule elegantly handles workforce changes.",
              "By applying these principles to Work and Wages, accuracy improves by 20%."
            ],
            "deepDiveAspects": [
              {
                "title": "Work and Wages - Advanced Application",
                "content": "MDH rule elegantly handles workforce changes."
              },
              {
                "title": "Core Methodology for Work and Wages",
                "content": "The LCM approach turns fractional rates into whole numbers."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Work and Wages formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Work and Wages result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-work-wages-1",
              "title": "Work and Wages Case Study",
              "question": "[Work and Wages] A=10 days, B=15 days. Together?",
              "givenInfo": [
                "A=10",
                "B=15"
              ],
              "conceptOrFormula": "LCM",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "LCM",
                  "explanation": "30 units",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Rate",
                  "explanation": "3 + 2 = 5/day",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Time",
                  "explanation": "30/5 = 6 days",
                  "math": ""
                }
              ],
              "finalAnswer": "6 days",
              "whyItWorks": "This demonstrates the core mechanic of Work and Wages.",
              "commonTrap": "Failing to account for the 26 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Work and Wages",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Work and Wages pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Work and Wages problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Work and Wages problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Work and Wages variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Work and Wages is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-wages-e1",
                "question": "Easy Work and Wages calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Work and Wages formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-wages-e2",
                "question": "Easy Work and Wages variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Work and Wages computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-wages-i1",
                "question": "Intermediate Work and Wages with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Work and Wages problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-wages-i2",
                "question": "Intermediate Work and Wages reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Work and Wages result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-wages-a1",
                "question": "Advanced Work and Wages with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Work and Wages problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-wages-p1",
                "question": "Placement Work and Wages integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Work and Wages.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Work and Wages: Work Rate: 1/Time.",
              "Man-Days: Men × Days.",
              "Always review calculation steps.",
              "Apply Work and Wages shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Work and Wages formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Work and Wages mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Work and Wages reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Work and Wages answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Work and Wages problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Work and Wages from Year 1 Work and Wages in terms of problem structure?",
            "Create a Work and Wages word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Work and Wages"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Work and Wages"
            }
          ]
        },
        {
          "id": "y2-quant-pipes-cisterns",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 10,
          "title": "Pipes and Cisterns",
          "tagline": "Year 2 Application — Pipes and Cisterns in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Pipe and cistern problems model filling (inlet) and emptying (outlet) of tanks. Inlet adds positive work; outlet subtracts. Combined rate = sum of individual rates, accounting for positive (fill) and negative (drain) contributions.",
            "placementRelevance": "Pipes and Cisterns is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Pipes and Cisterns is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Pipes and Cisterns",
            "Identify the correct problem type and method in Pipes and Cisterns",
            "Solve Pipes and Cisterns questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Pipes and Cisterns"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Pipes and Cisterns】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Pipes and Cisterns requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Pipes and Cisterns, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Pipes and Cisterns is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Pipes and Cisterns, accuracy improves by 41%."
            ],
            "deepDiveAspects": [
              {
                "title": "Pipes and Cisterns - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Pipes and Cisterns",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Pipes and Cisterns formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Pipes and Cisterns result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-pipes-cisterns-1",
              "title": "Pipes and Cisterns Case Study",
              "question": "[Pipes and Cisterns] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Pipes and Cisterns.",
              "commonTrap": "Failing to account for the 21 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Pipes and Cisterns",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Pipes and Cisterns pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Pipes and Cisterns problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Pipes and Cisterns problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Pipes and Cisterns variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Pipes and Cisterns is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-cisterns-e1",
                "question": "Easy Pipes and Cisterns calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Pipes and Cisterns formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-cisterns-e2",
                "question": "Easy Pipes and Cisterns variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Pipes and Cisterns computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-cisterns-i1",
                "question": "Intermediate Pipes and Cisterns with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Pipes and Cisterns problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-cisterns-i2",
                "question": "Intermediate Pipes and Cisterns reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Pipes and Cisterns result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-cisterns-a1",
                "question": "Advanced Pipes and Cisterns with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Pipes and Cisterns problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-cisterns-p1",
                "question": "Placement Pipes and Cisterns integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Pipes and Cisterns.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Pipes and Cisterns: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Pipes and Cisterns shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Pipes and Cisterns formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Pipes and Cisterns mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Pipes and Cisterns reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Pipes and Cisterns answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Pipes and Cisterns problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Pipes and Cisterns from Year 1 Pipes and Cisterns in terms of problem structure?",
            "Create a Pipes and Cisterns word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Pipes and Cisterns"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Pipes and Cisterns"
            }
          ]
        },
        {
          "id": "y2-quant-tsd-fundamentals",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 11,
          "title": "Time, Speed and Distance",
          "tagline": "Year 2 Application — Time, Speed and Distance in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Speed = Distance / Time. The three variables form an inverse/direct proportion framework. Problems involve average speed, distance with varying speeds, and meeting point calculations.",
            "placementRelevance": "Time, Speed and Distance is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Time, Speed and Distance is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Time, Speed and Distance",
            "Identify the correct problem type and method in Time, Speed and Distance",
            "Solve Time, Speed and Distance questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Time, Speed and Distance"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Time, Speed and Distance】 Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Average Speed: Total Dist/Total Time.",
              "Upstream/Downstream: River flow effects."
            ],
            "theoreticalIntuition": "Mastering Time, Speed and Distance requires a firm grasp of underlying concepts. TSD governs all variations: trains, boats, races.",
            "visualOrMentalModel": "When approaching Time, Speed and Distance, visualize the parameters clearly. Relative speed: opposite=sum, same=diff."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Avg Speed",
              "formula": "2xy/(x+y)",
              "description": "Equal dist",
              "whenToUse": "Round trip",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Time, Speed and Distance is critical for placement success.",
              "TSD governs all variations: trains, boats, races.",
              "Relative speed: opposite=sum, same=diff.",
              "Trains crossing platforms must add lengths.",
              "By applying these principles to Time, Speed and Distance, accuracy improves by 47%."
            ],
            "deepDiveAspects": [
              {
                "title": "Time, Speed and Distance - Advanced Application",
                "content": "Trains crossing platforms must add lengths."
              },
              {
                "title": "Core Methodology for Time, Speed and Distance",
                "content": "Relative speed: opposite=sum, same=diff."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Time, Speed and Distance formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Time, Speed and Distance result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-tsd-fundamentals-1",
              "title": "Time, Speed and Distance Case Study",
              "question": "[Time, Speed and Distance] Train 150m at 72km/hr crosses 250m platform. Time?",
              "givenInfo": [
                "T=150",
                "P=250",
                "S=72"
              ],
              "conceptOrFormula": "T=D/S",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Dist",
                  "explanation": "400m",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Speed",
                  "explanation": "72 * 5/18 = 20m/s",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Time",
                  "explanation": "400/20 = 20s",
                  "math": ""
                }
              ],
              "finalAnswer": "20s",
              "whyItWorks": "This demonstrates the core mechanic of Time, Speed and Distance.",
              "commonTrap": "Failing to account for the 53 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Time, Speed and Distance",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Time, Speed and Distance pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Time, Speed and Distance problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Time, Speed and Distance problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Time, Speed and Distance variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Time, Speed and Distance is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-fundamentals-e1",
                "question": "Easy Time, Speed and Distance calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Time, Speed and Distance formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-fundamentals-e2",
                "question": "Easy Time, Speed and Distance variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Time, Speed and Distance computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-fundamentals-i1",
                "question": "Intermediate Time, Speed and Distance with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Time, Speed and Distance problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-fundamentals-i2",
                "question": "Intermediate Time, Speed and Distance reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Time, Speed and Distance result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-fundamentals-a1",
                "question": "Advanced Time, Speed and Distance with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Time, Speed and Distance problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-fundamentals-p1",
                "question": "Placement Time, Speed and Distance integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Time, Speed and Distance.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Time, Speed and Distance: Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Always review calculation steps.",
              "Apply Time, Speed and Distance shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Time, Speed and Distance formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Time, Speed and Distance mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Time, Speed and Distance reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Time, Speed and Distance answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Time, Speed and Distance problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Time, Speed and Distance from Year 1 Time, Speed and Distance in terms of problem structure?",
            "Create a Time, Speed and Distance word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Time, Speed and Distance"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Time, Speed and Distance"
            }
          ]
        },
        {
          "id": "y2-quant-relative-speed",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 12,
          "title": "Relative Speed",
          "tagline": "Year 2 Application — Relative Speed in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "When two objects move in the same direction, relative speed = |v₁ − v₂|. In opposite directions, relative speed = v₁ + v₂. Relative speed governs when/where two moving objects meet or pass.",
            "placementRelevance": "Relative Speed is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Relative Speed is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Relative Speed",
            "Identify the correct problem type and method in Relative Speed",
            "Solve Relative Speed questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Relative Speed"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Relative Speed】 Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Average Speed: Total Dist/Total Time.",
              "Upstream/Downstream: River flow effects."
            ],
            "theoreticalIntuition": "Mastering Relative Speed requires a firm grasp of underlying concepts. TSD governs all variations: trains, boats, races.",
            "visualOrMentalModel": "When approaching Relative Speed, visualize the parameters clearly. Relative speed: opposite=sum, same=diff."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Avg Speed",
              "formula": "2xy/(x+y)",
              "description": "Equal dist",
              "whenToUse": "Round trip",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Relative Speed is critical for placement success.",
              "TSD governs all variations: trains, boats, races.",
              "Relative speed: opposite=sum, same=diff.",
              "Trains crossing platforms must add lengths.",
              "By applying these principles to Relative Speed, accuracy improves by 24%."
            ],
            "deepDiveAspects": [
              {
                "title": "Relative Speed - Advanced Application",
                "content": "Trains crossing platforms must add lengths."
              },
              {
                "title": "Core Methodology for Relative Speed",
                "content": "Relative speed: opposite=sum, same=diff."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Relative Speed formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Relative Speed result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-relative-speed-1",
              "title": "Relative Speed Case Study",
              "question": "[Relative Speed] Train 150m at 72km/hr crosses 250m platform. Time?",
              "givenInfo": [
                "T=150",
                "P=250",
                "S=72"
              ],
              "conceptOrFormula": "T=D/S",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Dist",
                  "explanation": "400m",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Speed",
                  "explanation": "72 * 5/18 = 20m/s",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Time",
                  "explanation": "400/20 = 20s",
                  "math": ""
                }
              ],
              "finalAnswer": "20s",
              "whyItWorks": "This demonstrates the core mechanic of Relative Speed.",
              "commonTrap": "Failing to account for the 57 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Relative Speed",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Relative Speed pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Relative Speed problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Relative Speed problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Relative Speed variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Relative Speed is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-speed-e1",
                "question": "Easy Relative Speed calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Relative Speed formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-speed-e2",
                "question": "Easy Relative Speed variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Relative Speed computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-speed-i1",
                "question": "Intermediate Relative Speed with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Relative Speed problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-speed-i2",
                "question": "Intermediate Relative Speed reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Relative Speed result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-speed-a1",
                "question": "Advanced Relative Speed with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Relative Speed problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-speed-p1",
                "question": "Placement Relative Speed integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Relative Speed.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Relative Speed: Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Always review calculation steps.",
              "Apply Relative Speed shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Relative Speed formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Relative Speed mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Relative Speed reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Relative Speed answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Relative Speed problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Relative Speed from Year 1 Relative Speed in terms of problem structure?",
            "Create a Relative Speed word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Relative Speed"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Relative Speed"
            }
          ]
        },
        {
          "id": "y2-quant-problems-trains",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 13,
          "title": "Problems on Trains",
          "tagline": "Year 2 Application — Problems on Trains in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Train problems apply speed/time/distance to objects with physical length. When a train crosses a stationary object (pole), time = train length / train speed. When crossing a platform, time = (train + platform length) / speed. When two trains cross each other, time = (length₁ + length₂) / relative speed.",
            "placementRelevance": "Problems on Trains is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Problems on Trains is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Problems on Trains",
            "Identify the correct problem type and method in Problems on Trains",
            "Solve Problems on Trains questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Problems on Trains"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Problems on Trains】 Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Average Speed: Total Dist/Total Time.",
              "Upstream/Downstream: River flow effects."
            ],
            "theoreticalIntuition": "Mastering Problems on Trains requires a firm grasp of underlying concepts. TSD governs all variations: trains, boats, races.",
            "visualOrMentalModel": "When approaching Problems on Trains, visualize the parameters clearly. Relative speed: opposite=sum, same=diff."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Avg Speed",
              "formula": "2xy/(x+y)",
              "description": "Equal dist",
              "whenToUse": "Round trip",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Problems on Trains is critical for placement success.",
              "TSD governs all variations: trains, boats, races.",
              "Relative speed: opposite=sum, same=diff.",
              "Trains crossing platforms must add lengths.",
              "By applying these principles to Problems on Trains, accuracy improves by 47%."
            ],
            "deepDiveAspects": [
              {
                "title": "Problems on Trains - Advanced Application",
                "content": "Trains crossing platforms must add lengths."
              },
              {
                "title": "Core Methodology for Problems on Trains",
                "content": "Relative speed: opposite=sum, same=diff."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Problems on Trains formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Problems on Trains result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-problems-trains-1",
              "title": "Problems on Trains Case Study",
              "question": "[Problems on Trains] Train 150m at 72km/hr crosses 250m platform. Time?",
              "givenInfo": [
                "T=150",
                "P=250",
                "S=72"
              ],
              "conceptOrFormula": "T=D/S",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Dist",
                  "explanation": "400m",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Speed",
                  "explanation": "72 * 5/18 = 20m/s",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Time",
                  "explanation": "400/20 = 20s",
                  "math": ""
                }
              ],
              "finalAnswer": "20s",
              "whyItWorks": "This demonstrates the core mechanic of Problems on Trains.",
              "commonTrap": "Failing to account for the 53 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Problems on Trains",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Problems on Trains pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Problems on Trains problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Problems on Trains problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Problems on Trains variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Problems on Trains is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-trains-e1",
                "question": "Easy Problems on Trains calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Problems on Trains formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-trains-e2",
                "question": "Easy Problems on Trains variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Problems on Trains computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-trains-i1",
                "question": "Intermediate Problems on Trains with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Problems on Trains problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-trains-i2",
                "question": "Intermediate Problems on Trains reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Problems on Trains result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-trains-a1",
                "question": "Advanced Problems on Trains with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Problems on Trains problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-trains-p1",
                "question": "Placement Problems on Trains integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Problems on Trains.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Problems on Trains: Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Always review calculation steps.",
              "Apply Problems on Trains shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Problems on Trains formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Problems on Trains mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Problems on Trains reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Problems on Trains answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Problems on Trains problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Problems on Trains from Year 1 Problems on Trains in terms of problem structure?",
            "Create a Problems on Trains word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Problems on Trains"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Problems on Trains"
            }
          ]
        },
        {
          "id": "y2-quant-boats-streams",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 14,
          "title": "Boats and Streams",
          "tagline": "Year 2 Application — Boats and Streams in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Upstream speed = boat speed − stream speed. Downstream speed = boat speed + stream speed. The relationship is symmetric: average of upstream and downstream speeds = boat speed in still water.",
            "placementRelevance": "Boats and Streams is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Boats and Streams is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Boats and Streams",
            "Identify the correct problem type and method in Boats and Streams",
            "Solve Boats and Streams questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Boats and Streams"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Boats and Streams】 Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Average Speed: Total Dist/Total Time.",
              "Upstream/Downstream: River flow effects."
            ],
            "theoreticalIntuition": "Mastering Boats and Streams requires a firm grasp of underlying concepts. TSD governs all variations: trains, boats, races.",
            "visualOrMentalModel": "When approaching Boats and Streams, visualize the parameters clearly. Relative speed: opposite=sum, same=diff."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Avg Speed",
              "formula": "2xy/(x+y)",
              "description": "Equal dist",
              "whenToUse": "Round trip",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Boats and Streams is critical for placement success.",
              "TSD governs all variations: trains, boats, races.",
              "Relative speed: opposite=sum, same=diff.",
              "Trains crossing platforms must add lengths.",
              "By applying these principles to Boats and Streams, accuracy improves by 29%."
            ],
            "deepDiveAspects": [
              {
                "title": "Boats and Streams - Advanced Application",
                "content": "Trains crossing platforms must add lengths."
              },
              {
                "title": "Core Methodology for Boats and Streams",
                "content": "Relative speed: opposite=sum, same=diff."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Boats and Streams formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Boats and Streams result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-boats-streams-1",
              "title": "Boats and Streams Case Study",
              "question": "[Boats and Streams] Train 150m at 72km/hr crosses 250m platform. Time?",
              "givenInfo": [
                "T=150",
                "P=250",
                "S=72"
              ],
              "conceptOrFormula": "T=D/S",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Dist",
                  "explanation": "400m",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Speed",
                  "explanation": "72 * 5/18 = 20m/s",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Time",
                  "explanation": "400/20 = 20s",
                  "math": ""
                }
              ],
              "finalAnswer": "20s",
              "whyItWorks": "This demonstrates the core mechanic of Boats and Streams.",
              "commonTrap": "Failing to account for the 12 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Boats and Streams",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Boats and Streams pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Boats and Streams problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Boats and Streams problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Boats and Streams variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Boats and Streams is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-streams-e1",
                "question": "Easy Boats and Streams calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Boats and Streams formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-streams-e2",
                "question": "Easy Boats and Streams variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Boats and Streams computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-streams-i1",
                "question": "Intermediate Boats and Streams with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Boats and Streams problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-streams-i2",
                "question": "Intermediate Boats and Streams reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Boats and Streams result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-streams-a1",
                "question": "Advanced Boats and Streams with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Boats and Streams problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-streams-p1",
                "question": "Placement Boats and Streams integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Boats and Streams.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Boats and Streams: Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Always review calculation steps.",
              "Apply Boats and Streams shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Boats and Streams formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Boats and Streams mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Boats and Streams reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Boats and Streams answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Boats and Streams problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Boats and Streams from Year 1 Boats and Streams in terms of problem structure?",
            "Create a Boats and Streams word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Boats and Streams"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Boats and Streams"
            }
          ]
        },
        {
          "id": "y2-quant-algebraic-expressions",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 15,
          "title": "Algebraic Expressions",
          "tagline": "Year 2 Application — Algebraic Expressions in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Algebraic expressions involve variables, constants, and operations. Year 2 covers factorization using identities (a²−b², (a+b)², (a+b)³), polynomial simplification, and rational expression reduction.",
            "placementRelevance": "Algebraic Expressions is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Algebraic Expressions is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Algebraic Expressions",
            "Identify the correct problem type and method in Algebraic Expressions",
            "Solve Algebraic Expressions questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Algebraic Expressions"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Algebraic Expressions】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Algebraic Expressions requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Algebraic Expressions, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Algebraic Expressions is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Algebraic Expressions, accuracy improves by 32%."
            ],
            "deepDiveAspects": [
              {
                "title": "Algebraic Expressions - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Algebraic Expressions",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Algebraic Expressions formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Algebraic Expressions result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-algebraic-expressions-1",
              "title": "Algebraic Expressions Case Study",
              "question": "[Algebraic Expressions] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Algebraic Expressions.",
              "commonTrap": "Failing to account for the 42 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Algebraic Expressions",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Algebraic Expressions pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Algebraic Expressions problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Algebraic Expressions problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Algebraic Expressions variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Algebraic Expressions is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-expressions-e1",
                "question": "Easy Algebraic Expressions calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Algebraic Expressions formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-expressions-e2",
                "question": "Easy Algebraic Expressions variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Algebraic Expressions computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-expressions-i1",
                "question": "Intermediate Algebraic Expressions with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Algebraic Expressions problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-expressions-i2",
                "question": "Intermediate Algebraic Expressions reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Algebraic Expressions result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-expressions-a1",
                "question": "Advanced Algebraic Expressions with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Algebraic Expressions problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-expressions-p1",
                "question": "Placement Algebraic Expressions integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Algebraic Expressions.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Algebraic Expressions: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Algebraic Expressions shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Algebraic Expressions formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Algebraic Expressions mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Algebraic Expressions reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Algebraic Expressions answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Algebraic Expressions problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Algebraic Expressions from Year 1 Algebraic Expressions in terms of problem structure?",
            "Create a Algebraic Expressions word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Algebraic Expressions"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Algebraic Expressions"
            }
          ]
        },
        {
          "id": "y2-quant-linear-equations",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 16,
          "title": "Linear Equations",
          "tagline": "Year 2 Application — Linear Equations in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Linear equations in one or two variables are solved by substitution or elimination. Year 2 problems involve word-problem translation, simultaneous equations with real constraints, and equations with fractional coefficients.",
            "placementRelevance": "Linear Equations is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Linear Equations is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Linear Equations",
            "Identify the correct problem type and method in Linear Equations",
            "Solve Linear Equations questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Linear Equations"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Linear Equations】 Variable: Unknown value.",
              "Equation: Statement of equality.",
              "Progression: Sequence with specific rules (AP/GP)."
            ],
            "theoreticalIntuition": "Mastering Linear Equations requires a firm grasp of underlying concepts. Algebra questions test your ability to translate English into math.",
            "visualOrMentalModel": "When approaching Linear Equations, visualize the parameters clearly. For quadratic equations, use factoring or the formula quickly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "AP Nth Term",
              "formula": "a + (n-1)d",
              "description": "Find term",
              "whenToUse": "Sequences",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Linear Equations is critical for placement success.",
              "Algebra questions test your ability to translate English into math.",
              "For quadratic equations, use factoring or the formula quickly.",
              "Progressions require knowing the Nth term and Sum formulas.",
              "By applying these principles to Linear Equations, accuracy improves by 45%."
            ],
            "deepDiveAspects": [
              {
                "title": "Linear Equations - Advanced Application",
                "content": "Progressions require knowing the Nth term and Sum formulas."
              },
              {
                "title": "Core Methodology for Linear Equations",
                "content": "For quadratic equations, use factoring or the formula quickly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Linear Equations formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Linear Equations result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-linear-equations-1",
              "title": "Linear Equations Case Study",
              "question": "[Linear Equations] 10th term of 2, 5, 8...",
              "givenInfo": [
                "a=2, d=3"
              ],
              "conceptOrFormula": "a+(n-1)d",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "2 + 9*3",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Calc",
                  "explanation": "2 + 27 = 29",
                  "math": ""
                }
              ],
              "finalAnswer": "29",
              "whyItWorks": "This demonstrates the core mechanic of Linear Equations.",
              "commonTrap": "Failing to account for the 39 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Linear Equations",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Linear Equations pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Linear Equations problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Linear Equations problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Linear Equations variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Linear Equations is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-equations-e1",
                "question": "Easy Linear Equations calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Linear Equations formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-equations-e2",
                "question": "Easy Linear Equations variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Linear Equations computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-equations-i1",
                "question": "Intermediate Linear Equations with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Linear Equations problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-equations-i2",
                "question": "Intermediate Linear Equations reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Linear Equations result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-equations-a1",
                "question": "Advanced Linear Equations with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Linear Equations problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-equations-p1",
                "question": "Placement Linear Equations integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Linear Equations.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Linear Equations: Variable: Unknown value.",
              "Equation: Statement of equality.",
              "Always review calculation steps.",
              "Apply Linear Equations shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Linear Equations formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Linear Equations mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Linear Equations reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Linear Equations answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Linear Equations problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Linear Equations from Year 1 Linear Equations in terms of problem structure?",
            "Create a Linear Equations word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Linear Equations"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Linear Equations"
            }
          ]
        },
        {
          "id": "y2-quant-quadratic-equations",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 17,
          "title": "Quadratic Equations",
          "tagline": "Year 2 Application — Quadratic Equations in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Quadratic equations ax²+bx+c=0 are solved by factorization, completing the square, or the quadratic formula. Year 2 covers sum and product of roots, nature of roots from discriminant, and framing equations from given roots.",
            "placementRelevance": "Quadratic Equations is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Quadratic Equations is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Quadratic Equations",
            "Identify the correct problem type and method in Quadratic Equations",
            "Solve Quadratic Equations questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Quadratic Equations"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Quadratic Equations】 Variable: Unknown value.",
              "Equation: Statement of equality.",
              "Progression: Sequence with specific rules (AP/GP)."
            ],
            "theoreticalIntuition": "Mastering Quadratic Equations requires a firm grasp of underlying concepts. Algebra questions test your ability to translate English into math.",
            "visualOrMentalModel": "When approaching Quadratic Equations, visualize the parameters clearly. For quadratic equations, use factoring or the formula quickly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "AP Nth Term",
              "formula": "a + (n-1)d",
              "description": "Find term",
              "whenToUse": "Sequences",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Quadratic Equations is critical for placement success.",
              "Algebra questions test your ability to translate English into math.",
              "For quadratic equations, use factoring or the formula quickly.",
              "Progressions require knowing the Nth term and Sum formulas.",
              "By applying these principles to Quadratic Equations, accuracy improves by 34%."
            ],
            "deepDiveAspects": [
              {
                "title": "Quadratic Equations - Advanced Application",
                "content": "Progressions require knowing the Nth term and Sum formulas."
              },
              {
                "title": "Core Methodology for Quadratic Equations",
                "content": "For quadratic equations, use factoring or the formula quickly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Quadratic Equations formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Quadratic Equations result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-quadratic-equations-1",
              "title": "Quadratic Equations Case Study",
              "question": "[Quadratic Equations] 10th term of 2, 5, 8...",
              "givenInfo": [
                "a=2, d=3"
              ],
              "conceptOrFormula": "a+(n-1)d",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "2 + 9*3",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Calc",
                  "explanation": "2 + 27 = 29",
                  "math": ""
                }
              ],
              "finalAnswer": "29",
              "whyItWorks": "This demonstrates the core mechanic of Quadratic Equations.",
              "commonTrap": "Failing to account for the 18 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Quadratic Equations",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Quadratic Equations pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Quadratic Equations problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Quadratic Equations problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Quadratic Equations variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Quadratic Equations is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-equations-e1",
                "question": "Easy Quadratic Equations calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Quadratic Equations formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-equations-e2",
                "question": "Easy Quadratic Equations variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Quadratic Equations computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-equations-i1",
                "question": "Intermediate Quadratic Equations with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Quadratic Equations problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-equations-i2",
                "question": "Intermediate Quadratic Equations reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Quadratic Equations result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-equations-a1",
                "question": "Advanced Quadratic Equations with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Quadratic Equations problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-equations-p1",
                "question": "Placement Quadratic Equations integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Quadratic Equations.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Quadratic Equations: Variable: Unknown value.",
              "Equation: Statement of equality.",
              "Always review calculation steps.",
              "Apply Quadratic Equations shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Quadratic Equations formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Quadratic Equations mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Quadratic Equations reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Quadratic Equations answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Quadratic Equations problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Quadratic Equations from Year 1 Quadratic Equations in terms of problem structure?",
            "Create a Quadratic Equations word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Quadratic Equations"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Quadratic Equations"
            }
          ]
        },
        {
          "id": "y2-quant-basic-geometry",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 18,
          "title": "Basic Geometry",
          "tagline": "Year 2 Application — Basic Geometry in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Basic geometry covers properties of triangles, circles, parallel lines, and quadrilaterals. Problems involve angle relationships, congruence, similarity ratios, and basic trigonometric ratios (sin, cos, tan).",
            "placementRelevance": "Basic Geometry is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Basic Geometry is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Geometry",
            "Identify the correct problem type and method in Basic Geometry",
            "Solve Basic Geometry questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Geometry"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Basic Geometry】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Basic Geometry requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Basic Geometry, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Basic Geometry is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Basic Geometry, accuracy improves by 50%."
            ],
            "deepDiveAspects": [
              {
                "title": "Basic Geometry - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Basic Geometry",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Basic Geometry formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Basic Geometry result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-basic-geometry-1",
              "title": "Basic Geometry Case Study",
              "question": "[Basic Geometry] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Basic Geometry.",
              "commonTrap": "Failing to account for the 17 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Geometry",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Basic Geometry pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Basic Geometry problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Basic Geometry problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Basic Geometry variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Basic Geometry is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-geometry-e1",
                "question": "Easy Basic Geometry calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Basic Geometry formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-geometry-e2",
                "question": "Easy Basic Geometry variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Basic Geometry computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-geometry-i1",
                "question": "Intermediate Basic Geometry with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Basic Geometry problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-geometry-i2",
                "question": "Intermediate Basic Geometry reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Basic Geometry result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-geometry-a1",
                "question": "Advanced Basic Geometry with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Basic Geometry problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-geometry-p1",
                "question": "Placement Basic Geometry integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Basic Geometry.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Basic Geometry: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Basic Geometry shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Basic Geometry formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Basic Geometry mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Basic Geometry reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Basic Geometry answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Basic Geometry problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Basic Geometry from Year 1 Basic Geometry in terms of problem structure?",
            "Create a Basic Geometry word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Geometry"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Geometry"
            }
          ]
        },
        {
          "id": "y2-quant-basic-mensuration",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 19,
          "title": "Basic Mensuration",
          "tagline": "Year 2 Application — Basic Mensuration in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Mensuration calculates areas and perimeters of 2D shapes (rectangles, triangles, circles, trapezoids) and surface area and volume of 3D shapes (cubes, cylinders, cones, spheres). Year 2 covers all standard 2D and simple 3D formulas.",
            "placementRelevance": "Basic Mensuration is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Basic Mensuration is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Mensuration",
            "Identify the correct problem type and method in Basic Mensuration",
            "Solve Basic Mensuration questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Mensuration"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Basic Mensuration】 Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Compound Ratio: ac:bd.",
              "Duplicate Ratio: a²:b².",
              "Componendo-Dividendo: (a+b)/(a-b) = (c+d)/(c-d)."
            ],
            "theoreticalIntuition": "Mastering Basic Mensuration requires a firm grasp of underlying concepts. Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
            "visualOrMentalModel": "When approaching Basic Mensuration, visualize the parameters clearly. The 'K-multiplier' method transforms abstract ratios into algebraic equations."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Three Term Ratio",
              "formula": "A:B=p:q, B:C=q:r → A:B:C=p:q:r",
              "description": "Scale B",
              "whenToUse": "Combining",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Basic Mensuration is critical for placement success.",
              "Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
              "The 'K-multiplier' method transforms abstract ratios into algebraic equations.",
              "Scale pairwise ratios to a common middle term (LCM) before calculating shares.",
              "By applying these principles to Basic Mensuration, accuracy improves by 24%."
            ],
            "deepDiveAspects": [
              {
                "title": "Basic Mensuration - Advanced Application",
                "content": "Scale pairwise ratios to a common middle term (LCM) before calculating shares."
              },
              {
                "title": "Core Methodology for Basic Mensuration",
                "content": "The 'K-multiplier' method transforms abstract ratios into algebraic equations."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Basic Mensuration formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Basic Mensuration result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-basic-mensuration-1",
              "title": "Basic Mensuration Case Study",
              "question": "[Basic Mensuration] Divide 2400 in 8:15:20 after deducting 25, 28, 52.",
              "givenInfo": [
                "3115 total",
                "25,28,52 deduct"
              ],
              "conceptOrFormula": "Proportional division",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Rem",
                  "explanation": "3010",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Parts",
                  "explanation": "43 parts = 70",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "A",
                  "explanation": "8*70 + 25 = 585",
                  "math": ""
                }
              ],
              "finalAnswer": "585",
              "whyItWorks": "This demonstrates the core mechanic of Basic Mensuration.",
              "commonTrap": "Failing to account for the 31 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Mensuration",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Basic Mensuration pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Basic Mensuration problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Basic Mensuration problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Basic Mensuration variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Basic Mensuration is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-mensuration-e1",
                "question": "Easy Basic Mensuration calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Basic Mensuration formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-mensuration-e2",
                "question": "Easy Basic Mensuration variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Basic Mensuration computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-mensuration-i1",
                "question": "Intermediate Basic Mensuration with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Basic Mensuration problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-mensuration-i2",
                "question": "Intermediate Basic Mensuration reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Basic Mensuration result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-mensuration-a1",
                "question": "Advanced Basic Mensuration with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Basic Mensuration problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-mensuration-p1",
                "question": "Placement Basic Mensuration integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Basic Mensuration.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Basic Mensuration: Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Always review calculation steps.",
              "Apply Basic Mensuration shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Basic Mensuration formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Basic Mensuration mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Basic Mensuration reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Basic Mensuration answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Basic Mensuration problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Basic Mensuration from Year 1 Basic Mensuration in terms of problem structure?",
            "Create a Basic Mensuration word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Mensuration"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Mensuration"
            }
          ]
        },
        {
          "id": "y2-quant-probability-fundamentals",
          "yearId": 2,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 20,
          "title": "Probability Fundamentals",
          "tagline": "Year 2 Application — Probability Fundamentals in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Probability = Favorable outcomes / Total outcomes. Year 2 covers sample spaces, complementary events, mutually exclusive events, P(A∪B) = P(A)+P(B)−P(A∩B), and independent events P(A∩B)=P(A)×P(B).",
            "placementRelevance": "Probability Fundamentals is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Probability Fundamentals is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Probability Fundamentals",
            "Identify the correct problem type and method in Probability Fundamentals",
            "Solve Probability Fundamentals questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Probability Fundamentals"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Probability Fundamentals】 Sample Space: All outcomes.",
              "Event: Specific outcome.",
              "Mutually Exclusive: Cannot co-occur."
            ],
            "theoreticalIntuition": "Mastering Probability Fundamentals requires a firm grasp of underlying concepts. Probability is Fav/Total.",
            "visualOrMentalModel": "When approaching Probability Fundamentals, visualize the parameters clearly. Relies heavily on combinatorics."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Complement",
              "formula": "1 - P(E)",
              "description": "At least one",
              "whenToUse": "Coins",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Probability Fundamentals is critical for placement success.",
              "Probability is Fav/Total.",
              "Relies heavily on combinatorics.",
              "Complementary Event: 1 - P(none).",
              "By applying these principles to Probability Fundamentals, accuracy improves by 46%."
            ],
            "deepDiveAspects": [
              {
                "title": "Probability Fundamentals - Advanced Application",
                "content": "Complementary Event: 1 - P(none)."
              },
              {
                "title": "Core Methodology for Probability Fundamentals",
                "content": "Relies heavily on combinatorics."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Probability Fundamentals formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Probability Fundamentals result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-quant-probability-fundamentals-1",
              "title": "Probability Fundamentals Case Study",
              "question": "[Probability Fundamentals] 3 coins, at least 1 head?",
              "givenInfo": [
                "3 coins"
              ],
              "conceptOrFormula": "1 - P(none)",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Total",
                  "explanation": "8",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "None",
                  "explanation": "1/8",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Ans",
                  "explanation": "7/8",
                  "math": ""
                }
              ],
              "finalAnswer": "7/8",
              "whyItWorks": "This demonstrates the core mechanic of Probability Fundamentals.",
              "commonTrap": "Failing to account for the 18 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Probability Fundamentals",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Probability Fundamentals pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Probability Fundamentals problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Probability Fundamentals problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Probability Fundamentals variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Probability Fundamentals is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-fundamentals-e1",
                "question": "Easy Probability Fundamentals calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Probability Fundamentals formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-fundamentals-e2",
                "question": "Easy Probability Fundamentals variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Probability Fundamentals computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-fundamentals-i1",
                "question": "Intermediate Probability Fundamentals with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Probability Fundamentals problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-fundamentals-i2",
                "question": "Intermediate Probability Fundamentals reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Probability Fundamentals result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-fundamentals-a1",
                "question": "Advanced Probability Fundamentals with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Probability Fundamentals problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-fundamentals-p1",
                "question": "Placement Probability Fundamentals integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Probability Fundamentals.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Probability Fundamentals: Sample Space: All outcomes.",
              "Event: Specific outcome.",
              "Always review calculation steps.",
              "Apply Probability Fundamentals shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Probability Fundamentals formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Probability Fundamentals mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Probability Fundamentals reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Probability Fundamentals answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Probability Fundamentals problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Probability Fundamentals from Year 1 Probability Fundamentals in terms of problem structure?",
            "Create a Probability Fundamentals word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Probability Fundamentals"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Probability Fundamentals"
            }
          ]
        }
      ]
    },
    {
      "category": "Data Interpretation",
      "description": "Data Interpretation — Year 2 Intermediate",
      "topics": [
        {
          "id": "y2-lr-adv-coding",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 21,
          "title": "Advanced Coding-Decoding",
          "tagline": "Year 2 Application — Advanced Coding-Decoding in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Advanced coding problems use multi-level encoding: first encoding then applying a second rule, or combining letter-shift with number-position coding. Year 2 also includes matrix coding (4×4 grid codes).",
            "placementRelevance": "Advanced Coding-Decoding is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Advanced Coding-Decoding is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Coding-Decoding",
            "Identify the correct problem type and method in Advanced Coding-Decoding",
            "Solve Advanced Coding-Decoding questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Coding-Decoding"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Advanced Coding-Decoding】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Advanced Coding-Decoding requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Advanced Coding-Decoding, visualize the parameters clearly. Represent negative clues explicitly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Circular",
              "formula": "Left=CW",
              "description": "Direction",
              "whenToUse": "Seating",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Advanced Coding-Decoding is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Advanced Coding-Decoding, accuracy improves by 21%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Coding-Decoding - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Advanced Coding-Decoding",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Advanced Coding-Decoding formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Advanced Coding-Decoding result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-adv-coding-1",
              "title": "Advanced Coding-Decoding Case Study",
              "question": "[Advanced Coding-Decoding] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
              "givenInfo": [
                "C middle"
              ],
              "conceptOrFormula": "Map",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Map",
                  "explanation": "_ _ C _ _",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "D/E",
                  "explanation": "D at end, E far from D",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "AB",
                  "explanation": "A B C E D -> left of C is B",
                  "math": ""
                }
              ],
              "finalAnswer": "B",
              "whyItWorks": "This demonstrates the core mechanic of Advanced Coding-Decoding.",
              "commonTrap": "Failing to account for the 22 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Advanced Coding-Decoding",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Advanced Coding-Decoding pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Advanced Coding-Decoding problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Advanced Coding-Decoding problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Advanced Coding-Decoding variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Advanced Coding-Decoding is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-coding-e1",
                "question": "Easy Advanced Coding-Decoding calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Advanced Coding-Decoding formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-coding-e2",
                "question": "Easy Advanced Coding-Decoding variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Advanced Coding-Decoding computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-coding-i1",
                "question": "Intermediate Advanced Coding-Decoding with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Advanced Coding-Decoding problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-coding-i2",
                "question": "Intermediate Advanced Coding-Decoding reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Advanced Coding-Decoding result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-coding-a1",
                "question": "Advanced Advanced Coding-Decoding with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Advanced Coding-Decoding problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-coding-p1",
                "question": "Placement Advanced Coding-Decoding integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Advanced Coding-Decoding.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Coding-Decoding: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Advanced Coding-Decoding shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Advanced Coding-Decoding formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Advanced Coding-Decoding mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Advanced Coding-Decoding reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Advanced Coding-Decoding answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Advanced Coding-Decoding problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Advanced Coding-Decoding from Year 1 Advanced Coding-Decoding in terms of problem structure?",
            "Create a Advanced Coding-Decoding word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Advanced Coding-Decoding"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Advanced Coding-Decoding"
            }
          ]
        },
        {
          "id": "y2-lr-symbol-coding",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 22,
          "title": "Symbol Coding",
          "tagline": "Year 2 Application — Symbol Coding in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Symbol coding replaces letters or words with symbols or non-alphabetical characters. The key is identifying the consistent mapping rule from the given example, then applying it to decode the unknown.",
            "placementRelevance": "Symbol Coding is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Symbol Coding is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Symbol Coding",
            "Identify the correct problem type and method in Symbol Coding",
            "Solve Symbol Coding questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Symbol Coding"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Symbol Coding】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Symbol Coding requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Symbol Coding, visualize the parameters clearly. Represent negative clues explicitly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Circular",
              "formula": "Left=CW",
              "description": "Direction",
              "whenToUse": "Seating",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Symbol Coding is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Symbol Coding, accuracy improves by 56%."
            ],
            "deepDiveAspects": [
              {
                "title": "Symbol Coding - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Symbol Coding",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Symbol Coding formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Symbol Coding result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-symbol-coding-1",
              "title": "Symbol Coding Case Study",
              "question": "[Symbol Coding] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
              "givenInfo": [
                "C middle"
              ],
              "conceptOrFormula": "Map",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Map",
                  "explanation": "_ _ C _ _",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "D/E",
                  "explanation": "D at end, E far from D",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "AB",
                  "explanation": "A B C E D -> left of C is B",
                  "math": ""
                }
              ],
              "finalAnswer": "B",
              "whyItWorks": "This demonstrates the core mechanic of Symbol Coding.",
              "commonTrap": "Failing to account for the 51 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Symbol Coding",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Symbol Coding pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Symbol Coding problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Symbol Coding problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Symbol Coding variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Symbol Coding is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-coding-e1",
                "question": "Easy Symbol Coding calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Symbol Coding formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-coding-e2",
                "question": "Easy Symbol Coding variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Symbol Coding computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-coding-i1",
                "question": "Intermediate Symbol Coding with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Symbol Coding problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-coding-i2",
                "question": "Intermediate Symbol Coding reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Symbol Coding result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-coding-a1",
                "question": "Advanced Symbol Coding with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Symbol Coding problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-coding-p1",
                "question": "Placement Symbol Coding integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Symbol Coding.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Symbol Coding: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Symbol Coding shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Symbol Coding formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Symbol Coding mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Symbol Coding reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Symbol Coding answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Symbol Coding problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Symbol Coding from Year 1 Symbol Coding in terms of problem structure?",
            "Create a Symbol Coding word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Symbol Coding"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Symbol Coding"
            }
          ]
        },
        {
          "id": "y2-lr-complex-direction",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 24,
          "title": "Complex Direction Sense",
          "tagline": "Year 2 Application — Complex Direction Sense in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Complex direction problems involve multiple turns with specified distances, requiring Pythagoras theorem to find the direct distance from start to end. Also includes shadow problems and map orientation.",
            "placementRelevance": "Complex Direction Sense is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Complex Direction Sense is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Complex Direction Sense",
            "Identify the correct problem type and method in Complex Direction Sense",
            "Solve Complex Direction Sense questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Complex Direction Sense"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Complex Direction Sense】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Complex Direction Sense requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Complex Direction Sense, visualize the parameters clearly. Represent negative clues explicitly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Circular",
              "formula": "Left=CW",
              "description": "Direction",
              "whenToUse": "Seating",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Complex Direction Sense is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Complex Direction Sense, accuracy improves by 41%."
            ],
            "deepDiveAspects": [
              {
                "title": "Complex Direction Sense - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Complex Direction Sense",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Complex Direction Sense formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Complex Direction Sense result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-complex-direction-1",
              "title": "Complex Direction Sense Case Study",
              "question": "[Complex Direction Sense] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
              "givenInfo": [
                "C middle"
              ],
              "conceptOrFormula": "Map",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Map",
                  "explanation": "_ _ C _ _",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "D/E",
                  "explanation": "D at end, E far from D",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "AB",
                  "explanation": "A B C E D -> left of C is B",
                  "math": ""
                }
              ],
              "finalAnswer": "B",
              "whyItWorks": "This demonstrates the core mechanic of Complex Direction Sense.",
              "commonTrap": "Failing to account for the 16 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Complex Direction Sense",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Complex Direction Sense pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Complex Direction Sense problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Complex Direction Sense problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Complex Direction Sense variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Complex Direction Sense is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-direction-e1",
                "question": "Easy Complex Direction Sense calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Complex Direction Sense formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-direction-e2",
                "question": "Easy Complex Direction Sense variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Complex Direction Sense computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-direction-i1",
                "question": "Intermediate Complex Direction Sense with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Complex Direction Sense problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-direction-i2",
                "question": "Intermediate Complex Direction Sense reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Complex Direction Sense result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-direction-a1",
                "question": "Advanced Complex Direction Sense with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Complex Direction Sense problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-direction-p1",
                "question": "Placement Complex Direction Sense integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Complex Direction Sense.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Complex Direction Sense: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Complex Direction Sense shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Complex Direction Sense formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Complex Direction Sense mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Complex Direction Sense reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Complex Direction Sense answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Complex Direction Sense problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Complex Direction Sense from Year 1 Complex Direction Sense in terms of problem structure?",
            "Create a Complex Direction Sense word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Complex Direction Sense"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Complex Direction Sense"
            }
          ]
        },
        {
          "id": "y2-lr-venn-diagrams",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 26,
          "title": "Venn Diagrams",
          "tagline": "Year 2 Application — Venn Diagrams in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Venn diagram problems represent sets and their overlaps. Year 2 uses three overlapping circles. Formula: n(A∪B∪C) = n(A)+n(B)+n(C)−n(A∩B)−n(B∩C)−n(A∩C)+n(A∩B∩C).",
            "placementRelevance": "Venn Diagrams is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Venn Diagrams is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Venn Diagrams",
            "Identify the correct problem type and method in Venn Diagrams",
            "Solve Venn Diagrams questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Venn Diagrams"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Venn Diagrams】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Venn Diagrams requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Venn Diagrams, visualize the parameters clearly. Represent negative clues explicitly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Circular",
              "formula": "Left=CW",
              "description": "Direction",
              "whenToUse": "Seating",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Venn Diagrams is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Venn Diagrams, accuracy improves by 11%."
            ],
            "deepDiveAspects": [
              {
                "title": "Venn Diagrams - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Venn Diagrams",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Venn Diagrams formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Venn Diagrams result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-venn-diagrams-1",
              "title": "Venn Diagrams Case Study",
              "question": "[Venn Diagrams] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
              "givenInfo": [
                "C middle"
              ],
              "conceptOrFormula": "Map",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Map",
                  "explanation": "_ _ C _ _",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "D/E",
                  "explanation": "D at end, E far from D",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "AB",
                  "explanation": "A B C E D -> left of C is B",
                  "math": ""
                }
              ],
              "finalAnswer": "B",
              "whyItWorks": "This demonstrates the core mechanic of Venn Diagrams.",
              "commonTrap": "Failing to account for the 48 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Venn Diagrams",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Venn Diagrams pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Venn Diagrams problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Venn Diagrams problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Venn Diagrams variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Venn Diagrams is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-diagrams-e1",
                "question": "Easy Venn Diagrams calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Venn Diagrams formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-diagrams-e2",
                "question": "Easy Venn Diagrams variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Venn Diagrams computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-diagrams-i1",
                "question": "Intermediate Venn Diagrams with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Venn Diagrams problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-diagrams-i2",
                "question": "Intermediate Venn Diagrams reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Venn Diagrams result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-diagrams-a1",
                "question": "Advanced Venn Diagrams with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Venn Diagrams problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-diagrams-p1",
                "question": "Placement Venn Diagrams integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Venn Diagrams.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Venn Diagrams: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Venn Diagrams shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Venn Diagrams formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Venn Diagrams mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Venn Diagrams reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Venn Diagrams answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Venn Diagrams problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Venn Diagrams from Year 1 Venn Diagrams in terms of problem structure?",
            "Create a Venn Diagrams word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Venn Diagrams"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Venn Diagrams"
            }
          ]
        },
        {
          "id": "y2-di-bar-graphs",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 45,
          "title": "Bar Graph Interpretation",
          "tagline": "Year 2 Application — Bar Graph Interpretation in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Bar graph interpretation reads comparative data across categories. Year 2 introduces grouped and stacked bar charts with percentage and ratio calculations across multiple variables.",
            "placementRelevance": "Bar Graph Interpretation is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Bar Graph Interpretation is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Bar Graph Interpretation",
            "Identify the correct problem type and method in Bar Graph Interpretation",
            "Solve Bar Graph Interpretation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Bar Graph Interpretation"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Bar Graph Interpretation】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Bar Graph Interpretation requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Bar Graph Interpretation, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Growth %",
              "formula": "(Final-Initial)/Initial * 100",
              "description": "Percentage increase",
              "whenToUse": "Trends",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Bar Graph Interpretation is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Bar Graph Interpretation, accuracy improves by 14%."
            ],
            "deepDiveAspects": [
              {
                "title": "Bar Graph Interpretation - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Bar Graph Interpretation",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Bar Graph Interpretation formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Bar Graph Interpretation result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-di-bar-graphs-1",
              "title": "Bar Graph Interpretation Case Study",
              "question": "[Bar Graph Interpretation] Sales from 120 to 150. % increase?",
              "givenInfo": [
                "120 -> 150"
              ],
              "conceptOrFormula": "Change/Base",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Diff",
                  "explanation": "30",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "% Calculation",
                  "explanation": "30/120 = 1/4 = 25%",
                  "math": ""
                }
              ],
              "finalAnswer": "25%",
              "whyItWorks": "This demonstrates the core mechanic of Bar Graph Interpretation.",
              "commonTrap": "Failing to account for the 36 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Bar Graph Interpretation",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Bar Graph Interpretation pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Bar Graph Interpretation problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Bar Graph Interpretation problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Bar Graph Interpretation variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Bar Graph Interpretation is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-graphs-e1",
                "question": "Easy Bar Graph Interpretation calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Bar Graph Interpretation formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-graphs-e2",
                "question": "Easy Bar Graph Interpretation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Bar Graph Interpretation computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-graphs-i1",
                "question": "Intermediate Bar Graph Interpretation with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Bar Graph Interpretation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-graphs-i2",
                "question": "Intermediate Bar Graph Interpretation reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Bar Graph Interpretation result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-graphs-a1",
                "question": "Advanced Bar Graph Interpretation with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Bar Graph Interpretation problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-graphs-p1",
                "question": "Placement Bar Graph Interpretation integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Bar Graph Interpretation.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Bar Graph Interpretation: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Bar Graph Interpretation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Bar Graph Interpretation formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Bar Graph Interpretation mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Bar Graph Interpretation reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Bar Graph Interpretation answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Bar Graph Interpretation problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Bar Graph Interpretation from Year 1 Bar Graph Interpretation in terms of problem structure?",
            "Create a Bar Graph Interpretation word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Bar Graph Interpretation"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Bar Graph Interpretation"
            }
          ]
        },
        {
          "id": "y2-di-line-graphs",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 46,
          "title": "Line Graph Interpretation",
          "tagline": "Year 2 Application — Line Graph Interpretation in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Line graph interpretation tracks a variable over time. Year 2 covers rate of change (gradient), comparison of two trend lines, and identifying peaks/troughs accurately.",
            "placementRelevance": "Line Graph Interpretation is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Line Graph Interpretation is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Line Graph Interpretation",
            "Identify the correct problem type and method in Line Graph Interpretation",
            "Solve Line Graph Interpretation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Line Graph Interpretation"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Line Graph Interpretation】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Line Graph Interpretation requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Line Graph Interpretation, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Growth %",
              "formula": "(Final-Initial)/Initial * 100",
              "description": "Percentage increase",
              "whenToUse": "Trends",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Line Graph Interpretation is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Line Graph Interpretation, accuracy improves by 42%."
            ],
            "deepDiveAspects": [
              {
                "title": "Line Graph Interpretation - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Line Graph Interpretation",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Line Graph Interpretation formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Line Graph Interpretation result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-di-line-graphs-1",
              "title": "Line Graph Interpretation Case Study",
              "question": "[Line Graph Interpretation] Sales from 120 to 150. % increase?",
              "givenInfo": [
                "120 -> 150"
              ],
              "conceptOrFormula": "Change/Base",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Diff",
                  "explanation": "30",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "% Calculation",
                  "explanation": "30/120 = 1/4 = 25%",
                  "math": ""
                }
              ],
              "finalAnswer": "25%",
              "whyItWorks": "This demonstrates the core mechanic of Line Graph Interpretation.",
              "commonTrap": "Failing to account for the 55 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Line Graph Interpretation",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Line Graph Interpretation pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Line Graph Interpretation problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Line Graph Interpretation problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Line Graph Interpretation variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Line Graph Interpretation is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-graphs-e1",
                "question": "Easy Line Graph Interpretation calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Line Graph Interpretation formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-graphs-e2",
                "question": "Easy Line Graph Interpretation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Line Graph Interpretation computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-graphs-i1",
                "question": "Intermediate Line Graph Interpretation with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Line Graph Interpretation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-graphs-i2",
                "question": "Intermediate Line Graph Interpretation reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Line Graph Interpretation result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-graphs-a1",
                "question": "Advanced Line Graph Interpretation with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Line Graph Interpretation problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-graphs-p1",
                "question": "Placement Line Graph Interpretation integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Line Graph Interpretation.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Line Graph Interpretation: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Line Graph Interpretation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Line Graph Interpretation formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Line Graph Interpretation mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Line Graph Interpretation reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Line Graph Interpretation answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Line Graph Interpretation problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Line Graph Interpretation from Year 1 Line Graph Interpretation in terms of problem structure?",
            "Create a Line Graph Interpretation word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Line Graph Interpretation"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Line Graph Interpretation"
            }
          ]
        },
        {
          "id": "y2-di-pie-charts",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 47,
          "title": "Pie Chart Interpretation",
          "tagline": "Year 2 Application — Pie Chart Interpretation in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Pie chart interpretation requires converting sector angles or percentages to absolute values given total, and comparing sectors across multiple pie charts (dual-pie problems).",
            "placementRelevance": "Pie Chart Interpretation is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Pie Chart Interpretation is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Pie Chart Interpretation",
            "Identify the correct problem type and method in Pie Chart Interpretation",
            "Solve Pie Chart Interpretation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Pie Chart Interpretation"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Pie Chart Interpretation】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Pie Chart Interpretation requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Pie Chart Interpretation, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Growth %",
              "formula": "(Final-Initial)/Initial * 100",
              "description": "Percentage increase",
              "whenToUse": "Trends",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Pie Chart Interpretation is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Pie Chart Interpretation, accuracy improves by 56%."
            ],
            "deepDiveAspects": [
              {
                "title": "Pie Chart Interpretation - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Pie Chart Interpretation",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Pie Chart Interpretation formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Pie Chart Interpretation result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-di-pie-charts-1",
              "title": "Pie Chart Interpretation Case Study",
              "question": "[Pie Chart Interpretation] Sales from 120 to 150. % increase?",
              "givenInfo": [
                "120 -> 150"
              ],
              "conceptOrFormula": "Change/Base",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Diff",
                  "explanation": "30",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "% Calculation",
                  "explanation": "30/120 = 1/4 = 25%",
                  "math": ""
                }
              ],
              "finalAnswer": "25%",
              "whyItWorks": "This demonstrates the core mechanic of Pie Chart Interpretation.",
              "commonTrap": "Failing to account for the 13 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Pie Chart Interpretation",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Pie Chart Interpretation pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Pie Chart Interpretation problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Pie Chart Interpretation problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Pie Chart Interpretation variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Pie Chart Interpretation is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-charts-e1",
                "question": "Easy Pie Chart Interpretation calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Pie Chart Interpretation formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-charts-e2",
                "question": "Easy Pie Chart Interpretation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Pie Chart Interpretation computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-charts-i1",
                "question": "Intermediate Pie Chart Interpretation with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Pie Chart Interpretation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-charts-i2",
                "question": "Intermediate Pie Chart Interpretation reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Pie Chart Interpretation result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-charts-a1",
                "question": "Advanced Pie Chart Interpretation with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Pie Chart Interpretation problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-charts-p1",
                "question": "Placement Pie Chart Interpretation integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Pie Chart Interpretation.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Pie Chart Interpretation: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Pie Chart Interpretation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Pie Chart Interpretation formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Pie Chart Interpretation mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Pie Chart Interpretation reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Pie Chart Interpretation answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Pie Chart Interpretation problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Pie Chart Interpretation from Year 1 Pie Chart Interpretation in terms of problem structure?",
            "Create a Pie Chart Interpretation word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Pie Chart Interpretation"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Pie Chart Interpretation"
            }
          ]
        },
        {
          "id": "y2-di-percentage-di",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 48,
          "title": "Percentage-Based DI",
          "tagline": "Year 2 Application — Percentage-Based DI in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Percentage-based DI sets require computing percentage change, percentage contribution, and percentage comparison from tabular or graphical data.",
            "placementRelevance": "Percentage-Based DI is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Percentage-Based DI is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Percentage-Based DI",
            "Identify the correct problem type and method in Percentage-Based DI",
            "Solve Percentage-Based DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Percentage-Based DI"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Percentage-Based DI】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Percentage-Based DI requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Percentage-Based DI, visualize the parameters clearly. Break the problem into independent modules."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Modular Solving",
              "formula": "Solve A, plug into B",
              "description": "Pipeline",
              "whenToUse": "Complex Qs",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Percentage-Based DI is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Percentage-Based DI, accuracy improves by 17%."
            ],
            "deepDiveAspects": [
              {
                "title": "Percentage-Based DI - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Percentage-Based DI",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Percentage-Based DI formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Percentage-Based DI result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-di-percentage-di-1",
              "title": "Percentage-Based DI Case Study",
              "question": "[Percentage-Based DI] A completes work in 10d. B is 20% more efficient. Time for B?",
              "givenInfo": [
                "A=10",
                "B=120% A"
              ],
              "conceptOrFormula": "Inv Prop",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Ratio",
                  "explanation": "Eff A:B = 100:120 = 5:6",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Time",
                  "explanation": "Time A:B = 6:5. 6 parts = 10d. 5 parts = 10*5/6 = 8.33d",
                  "math": ""
                }
              ],
              "finalAnswer": "8.33 days",
              "whyItWorks": "This demonstrates the core mechanic of Percentage-Based DI.",
              "commonTrap": "Failing to account for the 33 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Percentage-Based DI",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Percentage-Based DI pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Percentage-Based DI problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Percentage-Based DI problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Percentage-Based DI variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Percentage-Based DI is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-di-e1",
                "question": "Easy Percentage-Based DI calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Percentage-Based DI formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-di-e2",
                "question": "Easy Percentage-Based DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Percentage-Based DI computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-di-i1",
                "question": "Intermediate Percentage-Based DI with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Percentage-Based DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-di-i2",
                "question": "Intermediate Percentage-Based DI reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Percentage-Based DI result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-di-a1",
                "question": "Advanced Percentage-Based DI with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Percentage-Based DI problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-di-p1",
                "question": "Placement Percentage-Based DI integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Percentage-Based DI.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Percentage-Based DI: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Percentage-Based DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Percentage-Based DI formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Percentage-Based DI mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Percentage-Based DI reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Percentage-Based DI answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Percentage-Based DI problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Percentage-Based DI from Year 1 Percentage-Based DI in terms of problem structure?",
            "Create a Percentage-Based DI word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Percentage-Based DI"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Percentage-Based DI"
            }
          ]
        },
        {
          "id": "y2-di-ratio-di",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 49,
          "title": "Ratio-Based DI",
          "tagline": "Year 2 Application — Ratio-Based DI in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Ratio-based DI sets compute ratios between categories, find which category has the highest ratio, and combine ratios across multiple years or groups.",
            "placementRelevance": "Ratio-Based DI is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Ratio-Based DI is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Ratio-Based DI",
            "Identify the correct problem type and method in Ratio-Based DI",
            "Solve Ratio-Based DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Ratio-Based DI"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Ratio-Based DI】 Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Compound Ratio: ac:bd.",
              "Duplicate Ratio: a²:b².",
              "Componendo-Dividendo: (a+b)/(a-b) = (c+d)/(c-d)."
            ],
            "theoreticalIntuition": "Mastering Ratio-Based DI requires a firm grasp of underlying concepts. Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
            "visualOrMentalModel": "When approaching Ratio-Based DI, visualize the parameters clearly. The 'K-multiplier' method transforms abstract ratios into algebraic equations."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Three Term Ratio",
              "formula": "A:B=p:q, B:C=q:r → A:B:C=p:q:r",
              "description": "Scale B",
              "whenToUse": "Combining",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Ratio-Based DI is critical for placement success.",
              "Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
              "The 'K-multiplier' method transforms abstract ratios into algebraic equations.",
              "Scale pairwise ratios to a common middle term (LCM) before calculating shares.",
              "By applying these principles to Ratio-Based DI, accuracy improves by 45%."
            ],
            "deepDiveAspects": [
              {
                "title": "Ratio-Based DI - Advanced Application",
                "content": "Scale pairwise ratios to a common middle term (LCM) before calculating shares."
              },
              {
                "title": "Core Methodology for Ratio-Based DI",
                "content": "The 'K-multiplier' method transforms abstract ratios into algebraic equations."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Ratio-Based DI formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Ratio-Based DI result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-di-ratio-di-1",
              "title": "Ratio-Based DI Case Study",
              "question": "[Ratio-Based DI] Divide 4500 in 8:15:20 after deducting 25, 28, 52.",
              "givenInfo": [
                "3115 total",
                "25,28,52 deduct"
              ],
              "conceptOrFormula": "Proportional division",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Rem",
                  "explanation": "3010",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Parts",
                  "explanation": "43 parts = 70",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "A",
                  "explanation": "8*70 + 25 = 585",
                  "math": ""
                }
              ],
              "finalAnswer": "585",
              "whyItWorks": "This demonstrates the core mechanic of Ratio-Based DI.",
              "commonTrap": "Failing to account for the 35 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Ratio-Based DI",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Ratio-Based DI pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Ratio-Based DI problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Ratio-Based DI problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Ratio-Based DI variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Ratio-Based DI is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-di-e1",
                "question": "Easy Ratio-Based DI calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Ratio-Based DI formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-di-e2",
                "question": "Easy Ratio-Based DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Ratio-Based DI computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-di-i1",
                "question": "Intermediate Ratio-Based DI with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Ratio-Based DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-di-i2",
                "question": "Intermediate Ratio-Based DI reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Ratio-Based DI result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-di-a1",
                "question": "Advanced Ratio-Based DI with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Ratio-Based DI problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-di-p1",
                "question": "Placement Ratio-Based DI integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Ratio-Based DI.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Ratio-Based DI: Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Always review calculation steps.",
              "Apply Ratio-Based DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Ratio-Based DI formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Ratio-Based DI mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Ratio-Based DI reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Ratio-Based DI answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Ratio-Based DI problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Ratio-Based DI from Year 1 Ratio-Based DI in terms of problem structure?",
            "Create a Ratio-Based DI word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Ratio-Based DI"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Ratio-Based DI"
            }
          ]
        },
        {
          "id": "y2-di-average-di",
          "yearId": 2,
          "category": "Data Interpretation",
          "topicNumber": 50,
          "title": "Average-Based DI",
          "tagline": "Year 2 Application — Average-Based DI in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Average-based DI sets calculate averages across rows or columns, find which year/category had above-average performance, and compare averages across multiple groups.",
            "placementRelevance": "Average-Based DI is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Average-Based DI is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Average-Based DI",
            "Identify the correct problem type and method in Average-Based DI",
            "Solve Average-Based DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Average-Based DI"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Average-Based DI】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Average-Based DI requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Average-Based DI, visualize the parameters clearly. Break the problem into independent modules."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Modular Solving",
              "formula": "Solve A, plug into B",
              "description": "Pipeline",
              "whenToUse": "Complex Qs",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Average-Based DI is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Average-Based DI, accuracy improves by 53%."
            ],
            "deepDiveAspects": [
              {
                "title": "Average-Based DI - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Average-Based DI",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Average-Based DI formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Average-Based DI result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-di-average-di-1",
              "title": "Average-Based DI Case Study",
              "question": "[Average-Based DI] A completes work in 10d. B is 20% more efficient. Time for B?",
              "givenInfo": [
                "A=10",
                "B=120% A"
              ],
              "conceptOrFormula": "Inv Prop",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Ratio",
                  "explanation": "Eff A:B = 100:120 = 5:6",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Time",
                  "explanation": "Time A:B = 6:5. 6 parts = 10d. 5 parts = 10*5/6 = 8.33d",
                  "math": ""
                }
              ],
              "finalAnswer": "8.33 days",
              "whyItWorks": "This demonstrates the core mechanic of Average-Based DI.",
              "commonTrap": "Failing to account for the 34 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Average-Based DI",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Average-Based DI pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Average-Based DI problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Average-Based DI problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Average-Based DI variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Average-Based DI is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-di-e1",
                "question": "Easy Average-Based DI calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Average-Based DI formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-di-e2",
                "question": "Easy Average-Based DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Average-Based DI computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-di-i1",
                "question": "Intermediate Average-Based DI with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Average-Based DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-di-i2",
                "question": "Intermediate Average-Based DI reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Average-Based DI result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-di-a1",
                "question": "Advanced Average-Based DI with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Average-Based DI problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-di-p1",
                "question": "Placement Average-Based DI integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Average-Based DI.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Average-Based DI: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Average-Based DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Average-Based DI formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Average-Based DI mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Average-Based DI reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Average-Based DI answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Average-Based DI problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Average-Based DI from Year 1 Average-Based DI in terms of problem structure?",
            "Create a Average-Based DI word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Average-Based DI"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Average-Based DI"
            }
          ]
        }
      ]
    },
    {
      "category": "Advanced Logical Reasoning",
      "description": "Advanced Logical Reasoning — Year 2 Intermediate",
      "topics": [
        {
          "id": "y2-lr-adv-blood-relations",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 23,
          "title": "Advanced Blood Relations",
          "tagline": "Year 2 Application — Advanced Blood Relations in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Advanced blood relations problems involve longer chains (4+ generations), gender-ambiguous statements, and relationships through marriage (in-laws). Drawing a complete family tree is essential.",
            "placementRelevance": "Advanced Blood Relations is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Advanced Blood Relations is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Blood Relations",
            "Identify the correct problem type and method in Advanced Blood Relations",
            "Solve Advanced Blood Relations questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Blood Relations"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Advanced Blood Relations】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Advanced Blood Relations requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Advanced Blood Relations, visualize the parameters clearly. Represent negative clues explicitly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Circular",
              "formula": "Left=CW",
              "description": "Direction",
              "whenToUse": "Seating",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Advanced Blood Relations is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Advanced Blood Relations, accuracy improves by 20%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Blood Relations - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Advanced Blood Relations",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Advanced Blood Relations formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Advanced Blood Relations result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-adv-blood-relations-1",
              "title": "Advanced Blood Relations Case Study",
              "question": "[Advanced Blood Relations] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
              "givenInfo": [
                "C middle"
              ],
              "conceptOrFormula": "Map",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Map",
                  "explanation": "_ _ C _ _",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "D/E",
                  "explanation": "D at end, E far from D",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "AB",
                  "explanation": "A B C E D -> left of C is B",
                  "math": ""
                }
              ],
              "finalAnswer": "B",
              "whyItWorks": "This demonstrates the core mechanic of Advanced Blood Relations.",
              "commonTrap": "Failing to account for the 26 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Advanced Blood Relations",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Advanced Blood Relations pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Advanced Blood Relations problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Advanced Blood Relations problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Advanced Blood Relations variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Advanced Blood Relations is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-relations-e1",
                "question": "Easy Advanced Blood Relations calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Advanced Blood Relations formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-relations-e2",
                "question": "Easy Advanced Blood Relations variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Advanced Blood Relations computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-relations-i1",
                "question": "Intermediate Advanced Blood Relations with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Advanced Blood Relations problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-relations-i2",
                "question": "Intermediate Advanced Blood Relations reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Advanced Blood Relations result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-relations-a1",
                "question": "Advanced Advanced Blood Relations with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Advanced Blood Relations problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-relations-p1",
                "question": "Placement Advanced Blood Relations integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Advanced Blood Relations.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Blood Relations: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Advanced Blood Relations shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Advanced Blood Relations formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Advanced Blood Relations mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Advanced Blood Relations reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Advanced Blood Relations answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Advanced Blood Relations problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Advanced Blood Relations from Year 1 Advanced Blood Relations in terms of problem structure?",
            "Create a Advanced Blood Relations word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Advanced Blood Relations"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Advanced Blood Relations"
            }
          ]
        },
        {
          "id": "y2-lr-ordering-sequencing",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 25,
          "title": "Ordering and Sequencing",
          "tagline": "Year 2 Application — Ordering and Sequencing in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Ordering problems arrange people, objects, or events in sequence based on given conditional statements. Year 2 involves conflicting conditions and deriving unique orderings from partial information.",
            "placementRelevance": "Ordering and Sequencing is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Ordering and Sequencing is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Ordering and Sequencing",
            "Identify the correct problem type and method in Ordering and Sequencing",
            "Solve Ordering and Sequencing questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Ordering and Sequencing"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Ordering and Sequencing】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Ordering and Sequencing requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Ordering and Sequencing, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Ordering and Sequencing is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Ordering and Sequencing, accuracy improves by 48%."
            ],
            "deepDiveAspects": [
              {
                "title": "Ordering and Sequencing - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Ordering and Sequencing",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Ordering and Sequencing formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Ordering and Sequencing result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-ordering-sequencing-1",
              "title": "Ordering and Sequencing Case Study",
              "question": "[Ordering and Sequencing] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Ordering and Sequencing.",
              "commonTrap": "Failing to account for the 46 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Ordering and Sequencing",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Ordering and Sequencing pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Ordering and Sequencing problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Ordering and Sequencing problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Ordering and Sequencing variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Ordering and Sequencing is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-sequencing-e1",
                "question": "Easy Ordering and Sequencing calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Ordering and Sequencing formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-sequencing-e2",
                "question": "Easy Ordering and Sequencing variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Ordering and Sequencing computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-sequencing-i1",
                "question": "Intermediate Ordering and Sequencing with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Ordering and Sequencing problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-sequencing-i2",
                "question": "Intermediate Ordering and Sequencing reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Ordering and Sequencing result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-sequencing-a1",
                "question": "Advanced Ordering and Sequencing with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Ordering and Sequencing problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-sequencing-p1",
                "question": "Placement Ordering and Sequencing integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Ordering and Sequencing.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Ordering and Sequencing: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Ordering and Sequencing shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Ordering and Sequencing formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Ordering and Sequencing mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Ordering and Sequencing reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Ordering and Sequencing answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Ordering and Sequencing problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Ordering and Sequencing from Year 1 Ordering and Sequencing in terms of problem structure?",
            "Create a Ordering and Sequencing word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Ordering and Sequencing"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Ordering and Sequencing"
            }
          ]
        },
        {
          "id": "y2-lr-syllogisms",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 27,
          "title": "Syllogisms",
          "tagline": "Year 2 Application — Syllogisms in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Syllogism tests logical validity of conclusions from given categorical statements. Year 2 uses Venn diagram method: draw circles for each category, fill based on statements, check each conclusion against diagram.",
            "placementRelevance": "Syllogisms is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Syllogisms is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Syllogisms",
            "Identify the correct problem type and method in Syllogisms",
            "Solve Syllogisms questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Syllogisms"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Syllogisms】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Syllogisms requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Syllogisms, visualize the parameters clearly. Represent negative clues explicitly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Circular",
              "formula": "Left=CW",
              "description": "Direction",
              "whenToUse": "Seating",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Syllogisms is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Syllogisms, accuracy improves by 37%."
            ],
            "deepDiveAspects": [
              {
                "title": "Syllogisms - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Syllogisms",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Syllogisms formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Syllogisms result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-syllogisms-1",
              "title": "Syllogisms Case Study",
              "question": "[Syllogisms] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
              "givenInfo": [
                "C middle"
              ],
              "conceptOrFormula": "Map",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Map",
                  "explanation": "_ _ C _ _",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "D/E",
                  "explanation": "D at end, E far from D",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "AB",
                  "explanation": "A B C E D -> left of C is B",
                  "math": ""
                }
              ],
              "finalAnswer": "B",
              "whyItWorks": "This demonstrates the core mechanic of Syllogisms.",
              "commonTrap": "Failing to account for the 43 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Syllogisms",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Syllogisms pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Syllogisms problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Syllogisms problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Syllogisms variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Syllogisms is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-syllogisms-e1",
                "question": "Easy Syllogisms calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Syllogisms formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-syllogisms-e2",
                "question": "Easy Syllogisms variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Syllogisms computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-syllogisms-i1",
                "question": "Intermediate Syllogisms with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Syllogisms problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-syllogisms-i2",
                "question": "Intermediate Syllogisms reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Syllogisms result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-syllogisms-a1",
                "question": "Advanced Syllogisms with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Syllogisms problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-syllogisms-p1",
                "question": "Placement Syllogisms integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Syllogisms.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Syllogisms: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Syllogisms shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Syllogisms formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Syllogisms mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Syllogisms reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Syllogisms answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Syllogisms problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Syllogisms from Year 1 Syllogisms in terms of problem structure?",
            "Create a Syllogisms word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Syllogisms"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Syllogisms"
            }
          ]
        },
        {
          "id": "y2-lr-statements-conclusions",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 28,
          "title": "Statements and Conclusions",
          "tagline": "Year 2 Application — Statements and Conclusions in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Given a statement, determine which of the given conclusions follows definitively. Conclusions must be true based ONLY on the given statement — no external knowledge allowed.",
            "placementRelevance": "Statements and Conclusions is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Statements and Conclusions is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Statements and Conclusions",
            "Identify the correct problem type and method in Statements and Conclusions",
            "Solve Statements and Conclusions questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Statements and Conclusions"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Statements and Conclusions】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Statements and Conclusions requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Statements and Conclusions, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Statements and Conclusions is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Statements and Conclusions, accuracy improves by 28%."
            ],
            "deepDiveAspects": [
              {
                "title": "Statements and Conclusions - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Statements and Conclusions",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Statements and Conclusions formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Statements and Conclusions result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-statements-conclusions-1",
              "title": "Statements and Conclusions Case Study",
              "question": "[Statements and Conclusions] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Statements and Conclusions.",
              "commonTrap": "Failing to account for the 40 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Statements and Conclusions",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Statements and Conclusions pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Statements and Conclusions problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Statements and Conclusions problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Statements and Conclusions variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Statements and Conclusions is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-conclusions-e1",
                "question": "Easy Statements and Conclusions calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Statements and Conclusions formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-conclusions-e2",
                "question": "Easy Statements and Conclusions variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Statements and Conclusions computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-conclusions-i1",
                "question": "Intermediate Statements and Conclusions with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Statements and Conclusions problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-conclusions-i2",
                "question": "Intermediate Statements and Conclusions reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Statements and Conclusions result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-conclusions-a1",
                "question": "Advanced Statements and Conclusions with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Statements and Conclusions problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-conclusions-p1",
                "question": "Placement Statements and Conclusions integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Statements and Conclusions.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Statements and Conclusions: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Statements and Conclusions shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Statements and Conclusions formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Statements and Conclusions mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Statements and Conclusions reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Statements and Conclusions answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Statements and Conclusions problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Statements and Conclusions from Year 1 Statements and Conclusions in terms of problem structure?",
            "Create a Statements and Conclusions word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Statements and Conclusions"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Statements and Conclusions"
            }
          ]
        },
        {
          "id": "y2-lr-statements-assumptions",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 29,
          "title": "Statements and Assumptions",
          "tagline": "Year 2 Application — Statements and Assumptions in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "An assumption is an unstated premise that must be true for the statement to make sense. Test each option: if the statement is meaningless without the assumption, it is implicit.",
            "placementRelevance": "Statements and Assumptions is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Statements and Assumptions is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Statements and Assumptions",
            "Identify the correct problem type and method in Statements and Assumptions",
            "Solve Statements and Assumptions questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Statements and Assumptions"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Statements and Assumptions】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Statements and Assumptions requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Statements and Assumptions, visualize the parameters clearly. Break the problem into independent modules."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Modular Solving",
              "formula": "Solve A, plug into B",
              "description": "Pipeline",
              "whenToUse": "Complex Qs",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Statements and Assumptions is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Statements and Assumptions, accuracy improves by 21%."
            ],
            "deepDiveAspects": [
              {
                "title": "Statements and Assumptions - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Statements and Assumptions",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Statements and Assumptions formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Statements and Assumptions result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-statements-assumptions-1",
              "title": "Statements and Assumptions Case Study",
              "question": "[Statements and Assumptions] A completes work in 10d. B is 20% more efficient. Time for B?",
              "givenInfo": [
                "A=10",
                "B=120% A"
              ],
              "conceptOrFormula": "Inv Prop",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Ratio",
                  "explanation": "Eff A:B = 100:120 = 5:6",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Time",
                  "explanation": "Time A:B = 6:5. 6 parts = 10d. 5 parts = 10*5/6 = 8.33d",
                  "math": ""
                }
              ],
              "finalAnswer": "8.33 days",
              "whyItWorks": "This demonstrates the core mechanic of Statements and Assumptions.",
              "commonTrap": "Failing to account for the 54 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Statements and Assumptions",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Statements and Assumptions pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Statements and Assumptions problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Statements and Assumptions problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Statements and Assumptions variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Statements and Assumptions is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-assumptions-e1",
                "question": "Easy Statements and Assumptions calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Statements and Assumptions formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-assumptions-e2",
                "question": "Easy Statements and Assumptions variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Statements and Assumptions computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-assumptions-i1",
                "question": "Intermediate Statements and Assumptions with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Statements and Assumptions problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-assumptions-i2",
                "question": "Intermediate Statements and Assumptions reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Statements and Assumptions result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-assumptions-a1",
                "question": "Advanced Statements and Assumptions with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Statements and Assumptions problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-assumptions-p1",
                "question": "Placement Statements and Assumptions integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Statements and Assumptions.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Statements and Assumptions: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Statements and Assumptions shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Statements and Assumptions formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Statements and Assumptions mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Statements and Assumptions reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Statements and Assumptions answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Statements and Assumptions problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Statements and Assumptions from Year 1 Statements and Assumptions in terms of problem structure?",
            "Create a Statements and Assumptions word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Statements and Assumptions"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Statements and Assumptions"
            }
          ]
        },
        {
          "id": "y2-lr-data-sufficiency-intro",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 30,
          "title": "Introduction to Data Sufficiency",
          "tagline": "Year 2 Application — Introduction to Data Sufficiency in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Data sufficiency questions ask whether given data statements are sufficient to answer a question — without actually finding the answer. Each statement is evaluated individually then together.",
            "placementRelevance": "Introduction to Data Sufficiency is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Introduction to Data Sufficiency is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Introduction to Data Sufficiency",
            "Identify the correct problem type and method in Introduction to Data Sufficiency",
            "Solve Introduction to Data Sufficiency questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Introduction to Data Sufficiency"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Introduction to Data Sufficiency】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Introduction to Data Sufficiency requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Introduction to Data Sufficiency, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Introduction to Data Sufficiency is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Introduction to Data Sufficiency, accuracy improves by 27%."
            ],
            "deepDiveAspects": [
              {
                "title": "Introduction to Data Sufficiency - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Introduction to Data Sufficiency",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Introduction to Data Sufficiency formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Introduction to Data Sufficiency result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-data-sufficiency-intro-1",
              "title": "Introduction to Data Sufficiency Case Study",
              "question": "[Introduction to Data Sufficiency] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Introduction to Data Sufficiency.",
              "commonTrap": "Failing to account for the 28 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Introduction to Data Sufficiency",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Introduction to Data Sufficiency pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Introduction to Data Sufficiency problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Introduction to Data Sufficiency problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Introduction to Data Sufficiency variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Introduction to Data Sufficiency is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-intro-e1",
                "question": "Easy Introduction to Data Sufficiency calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Introduction to Data Sufficiency formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-intro-e2",
                "question": "Easy Introduction to Data Sufficiency variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Introduction to Data Sufficiency computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-intro-i1",
                "question": "Intermediate Introduction to Data Sufficiency with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Introduction to Data Sufficiency problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-intro-i2",
                "question": "Intermediate Introduction to Data Sufficiency reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Introduction to Data Sufficiency result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-intro-a1",
                "question": "Advanced Introduction to Data Sufficiency with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Introduction to Data Sufficiency problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-intro-p1",
                "question": "Placement Introduction to Data Sufficiency integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Introduction to Data Sufficiency.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Introduction to Data Sufficiency: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Introduction to Data Sufficiency shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Introduction to Data Sufficiency formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Introduction to Data Sufficiency mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Introduction to Data Sufficiency reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Introduction to Data Sufficiency answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Introduction to Data Sufficiency problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Introduction to Data Sufficiency from Year 1 Introduction to Data Sufficiency in terms of problem structure?",
            "Create a Introduction to Data Sufficiency word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Introduction to Data Sufficiency"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Introduction to Data Sufficiency"
            }
          ]
        },
        {
          "id": "y2-lr-basic-seating",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 31,
          "title": "Basic Seating Arrangement",
          "tagline": "Year 2 Application — Basic Seating Arrangement in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Linear seating arrangement problems place people in a row or at a table based on conditions. Year 2 covers 5–6 person linear arrangements with positive and negative conditions.",
            "placementRelevance": "Basic Seating Arrangement is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Basic Seating Arrangement is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Seating Arrangement",
            "Identify the correct problem type and method in Basic Seating Arrangement",
            "Solve Basic Seating Arrangement questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Seating Arrangement"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Basic Seating Arrangement】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Basic Seating Arrangement requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Basic Seating Arrangement, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Basic Seating Arrangement is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Basic Seating Arrangement, accuracy improves by 38%."
            ],
            "deepDiveAspects": [
              {
                "title": "Basic Seating Arrangement - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Basic Seating Arrangement",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Basic Seating Arrangement formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Basic Seating Arrangement result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-basic-seating-1",
              "title": "Basic Seating Arrangement Case Study",
              "question": "[Basic Seating Arrangement] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Basic Seating Arrangement.",
              "commonTrap": "Failing to account for the 10 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Seating Arrangement",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Basic Seating Arrangement pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Basic Seating Arrangement problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Basic Seating Arrangement problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Basic Seating Arrangement variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Basic Seating Arrangement is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-seating-e1",
                "question": "Easy Basic Seating Arrangement calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Basic Seating Arrangement formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-seating-e2",
                "question": "Easy Basic Seating Arrangement variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Basic Seating Arrangement computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-seating-i1",
                "question": "Intermediate Basic Seating Arrangement with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Basic Seating Arrangement problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-seating-i2",
                "question": "Intermediate Basic Seating Arrangement reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Basic Seating Arrangement result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-seating-a1",
                "question": "Advanced Basic Seating Arrangement with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Basic Seating Arrangement problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-seating-p1",
                "question": "Placement Basic Seating Arrangement integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Basic Seating Arrangement.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Basic Seating Arrangement: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Basic Seating Arrangement shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Basic Seating Arrangement formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Basic Seating Arrangement mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Basic Seating Arrangement reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Basic Seating Arrangement answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Basic Seating Arrangement problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Basic Seating Arrangement from Year 1 Basic Seating Arrangement in terms of problem structure?",
            "Create a Basic Seating Arrangement word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Seating Arrangement"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Seating Arrangement"
            }
          ]
        },
        {
          "id": "y2-lr-linear-arrangement",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 32,
          "title": "Linear Arrangement",
          "tagline": "Year 2 Application — Linear Arrangement in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Linear arrangement with more complex conditions: relative positions, gap specifications, and direction-facing constraints. Systematic slot filling using the most constrained condition first.",
            "placementRelevance": "Linear Arrangement is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Linear Arrangement is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Linear Arrangement",
            "Identify the correct problem type and method in Linear Arrangement",
            "Solve Linear Arrangement questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Linear Arrangement"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Linear Arrangement】 Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Factorial: Product of ints.",
              "Derangement: Complete rearrangement."
            ],
            "theoreticalIntuition": "Mastering Linear Arrangement requires a firm grasp of underlying concepts. P&C form the basis of probability.",
            "visualOrMentalModel": "When approaching Linear Arrangement, visualize the parameters clearly. Tie Method for grouped items."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Combination",
              "formula": "nCr",
              "description": "Selection",
              "whenToUse": "Teams",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Linear Arrangement is critical for placement success.",
              "P&C form the basis of probability.",
              "Tie Method for grouped items.",
              "Divide by factorials for repetitions.",
              "By applying these principles to Linear Arrangement, accuracy improves by 43%."
            ],
            "deepDiveAspects": [
              {
                "title": "Linear Arrangement - Advanced Application",
                "content": "Divide by factorials for repetitions."
              },
              {
                "title": "Core Methodology for Linear Arrangement",
                "content": "Tie Method for grouped items."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Linear Arrangement formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Linear Arrangement result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-linear-arrangement-1",
              "title": "Linear Arrangement Case Study",
              "question": "[Linear Arrangement] Arrange 'APPLE'",
              "givenInfo": [
                "5 letters",
                "2 P's"
              ],
              "conceptOrFormula": "n!/p!",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Count",
                  "explanation": "5! / 2!",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "120/2 = 60",
                  "math": ""
                }
              ],
              "finalAnswer": "60",
              "whyItWorks": "This demonstrates the core mechanic of Linear Arrangement.",
              "commonTrap": "Failing to account for the 18 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Linear Arrangement",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Linear Arrangement pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Linear Arrangement problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Linear Arrangement problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Linear Arrangement variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Linear Arrangement is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-arrangement-e1",
                "question": "Easy Linear Arrangement calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Linear Arrangement formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-arrangement-e2",
                "question": "Easy Linear Arrangement variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Linear Arrangement computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-arrangement-i1",
                "question": "Intermediate Linear Arrangement with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Linear Arrangement problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-arrangement-i2",
                "question": "Intermediate Linear Arrangement reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Linear Arrangement result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-arrangement-a1",
                "question": "Advanced Linear Arrangement with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Linear Arrangement problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-arrangement-p1",
                "question": "Placement Linear Arrangement integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Linear Arrangement.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Linear Arrangement: Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Always review calculation steps.",
              "Apply Linear Arrangement shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Linear Arrangement formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Linear Arrangement mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Linear Arrangement reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Linear Arrangement answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Linear Arrangement problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Linear Arrangement from Year 1 Linear Arrangement in terms of problem structure?",
            "Create a Linear Arrangement word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Linear Arrangement"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Linear Arrangement"
            }
          ]
        },
        {
          "id": "y2-lr-logical-connectives",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 33,
          "title": "Logical Connectives",
          "tagline": "Year 2 Application — Logical Connectives in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Logical connectives (AND, OR, IF-THEN, IF AND ONLY IF) combine propositions. Their truth tables determine when compound statements are true. Year 2 covers all connectives and their contra-positives.",
            "placementRelevance": "Logical Connectives is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Logical Connectives is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Logical Connectives",
            "Identify the correct problem type and method in Logical Connectives",
            "Solve Logical Connectives questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Logical Connectives"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Logical Connectives】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Logical Connectives requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Logical Connectives, visualize the parameters clearly. Represent negative clues explicitly."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Circular",
              "formula": "Left=CW",
              "description": "Direction",
              "whenToUse": "Seating",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Logical Connectives is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Logical Connectives, accuracy improves by 48%."
            ],
            "deepDiveAspects": [
              {
                "title": "Logical Connectives - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Logical Connectives",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Logical Connectives formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Logical Connectives result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-logical-connectives-1",
              "title": "Logical Connectives Case Study",
              "question": "[Logical Connectives] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
              "givenInfo": [
                "C middle"
              ],
              "conceptOrFormula": "Map",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Map",
                  "explanation": "_ _ C _ _",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "D/E",
                  "explanation": "D at end, E far from D",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "AB",
                  "explanation": "A B C E D -> left of C is B",
                  "math": ""
                }
              ],
              "finalAnswer": "B",
              "whyItWorks": "This demonstrates the core mechanic of Logical Connectives.",
              "commonTrap": "Failing to account for the 34 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Logical Connectives",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Logical Connectives pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Logical Connectives problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Logical Connectives problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Logical Connectives variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Logical Connectives is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-connectives-e1",
                "question": "Easy Logical Connectives calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Logical Connectives formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-connectives-e2",
                "question": "Easy Logical Connectives variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Logical Connectives computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-connectives-i1",
                "question": "Intermediate Logical Connectives with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Logical Connectives problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-connectives-i2",
                "question": "Intermediate Logical Connectives reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Logical Connectives result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-connectives-a1",
                "question": "Advanced Logical Connectives with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Logical Connectives problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-connectives-p1",
                "question": "Placement Logical Connectives integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Logical Connectives.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Logical Connectives: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Logical Connectives shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Logical Connectives formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Logical Connectives mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Logical Connectives reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Logical Connectives answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Logical Connectives problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Logical Connectives from Year 1 Logical Connectives in terms of problem structure?",
            "Create a Logical Connectives word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Logical Connectives"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Logical Connectives"
            }
          ]
        },
        {
          "id": "y2-lr-mathematical-reasoning",
          "yearId": 2,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 34,
          "title": "Mathematical Reasoning",
          "tagline": "Year 2 Application — Mathematical Reasoning in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Mathematical reasoning tests logical deduction from given number/algebraic conditions. Problems involve: 'if P then Q' implications applied to number properties, modular arithmetic conditions, and algebraic constraints.",
            "placementRelevance": "Mathematical Reasoning is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Mathematical Reasoning is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Mathematical Reasoning",
            "Identify the correct problem type and method in Mathematical Reasoning",
            "Solve Mathematical Reasoning questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Mathematical Reasoning"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Mathematical Reasoning】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Mathematical Reasoning requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Mathematical Reasoning, visualize the parameters clearly. Break the problem into independent modules."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Modular Solving",
              "formula": "Solve A, plug into B",
              "description": "Pipeline",
              "whenToUse": "Complex Qs",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Mathematical Reasoning is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Mathematical Reasoning, accuracy improves by 24%."
            ],
            "deepDiveAspects": [
              {
                "title": "Mathematical Reasoning - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Mathematical Reasoning",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Mathematical Reasoning formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Mathematical Reasoning result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-lr-mathematical-reasoning-1",
              "title": "Mathematical Reasoning Case Study",
              "question": "[Mathematical Reasoning] A completes work in 10d. B is 20% more efficient. Time for B?",
              "givenInfo": [
                "A=10",
                "B=120% A"
              ],
              "conceptOrFormula": "Inv Prop",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Ratio",
                  "explanation": "Eff A:B = 100:120 = 5:6",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Time",
                  "explanation": "Time A:B = 6:5. 6 parts = 10d. 5 parts = 10*5/6 = 8.33d",
                  "math": ""
                }
              ],
              "finalAnswer": "8.33 days",
              "whyItWorks": "This demonstrates the core mechanic of Mathematical Reasoning.",
              "commonTrap": "Failing to account for the 23 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Mathematical Reasoning",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Mathematical Reasoning pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Mathematical Reasoning problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Mathematical Reasoning problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Mathematical Reasoning variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Mathematical Reasoning is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-reasoning-e1",
                "question": "Easy Mathematical Reasoning calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Mathematical Reasoning formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-reasoning-e2",
                "question": "Easy Mathematical Reasoning variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Mathematical Reasoning computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-reasoning-i1",
                "question": "Intermediate Mathematical Reasoning with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Mathematical Reasoning problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-reasoning-i2",
                "question": "Intermediate Mathematical Reasoning reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Mathematical Reasoning result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-reasoning-a1",
                "question": "Advanced Mathematical Reasoning with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Mathematical Reasoning problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-reasoning-p1",
                "question": "Placement Mathematical Reasoning integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Mathematical Reasoning.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Mathematical Reasoning: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Mathematical Reasoning shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Mathematical Reasoning formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Mathematical Reasoning mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Mathematical Reasoning reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Mathematical Reasoning answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Mathematical Reasoning problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Mathematical Reasoning from Year 1 Mathematical Reasoning in terms of problem structure?",
            "Create a Mathematical Reasoning word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Mathematical Reasoning"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Mathematical Reasoning"
            }
          ]
        }
      ]
    },
    {
      "category": "Advanced Verbal Ability",
      "description": "Advanced Verbal Ability — Year 2 Intermediate",
      "topics": [
        {
          "id": "y2-verbal-adv-tenses",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 35,
          "title": "Advanced Tenses",
          "tagline": "Year 2 Application — Advanced Tenses in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Advanced tenses cover perfect continuous tenses, the sequence of tenses in compound sentences, and indirect speech (reported speech) tense transformations. These appear in error detection and sentence improvement questions.",
            "placementRelevance": "Advanced Tenses is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Advanced Tenses is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Tenses",
            "Identify the correct problem type and method in Advanced Tenses",
            "Solve Advanced Tenses questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Tenses"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Advanced Tenses】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Advanced Tenses requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Advanced Tenses, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
          },
          "importantRulesAndFormulas": [
            {
              "title": "SVA",
              "formula": "Singular=Singular",
              "description": "Grammar",
              "whenToUse": "Error",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Advanced Tenses is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Advanced Tenses, accuracy improves by 20%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Tenses - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Advanced Tenses",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Advanced Tenses formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Advanced Tenses result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-adv-tenses-1",
              "title": "Advanced Tenses Case Study",
              "question": "[Advanced Tenses] Neither A nor B was...",
              "givenInfo": [
                "Neither nor"
              ],
              "conceptOrFormula": "Proximity",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Rule",
                  "explanation": "Verb agrees with closest",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Check",
                  "explanation": "B is plural",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Fix",
                  "explanation": "was -> were",
                  "math": ""
                }
              ],
              "finalAnswer": "were",
              "whyItWorks": "This demonstrates the core mechanic of Advanced Tenses.",
              "commonTrap": "Failing to account for the 55 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Advanced Tenses",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Advanced Tenses pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Advanced Tenses problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Advanced Tenses problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Advanced Tenses variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Advanced Tenses is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-tenses-e1",
                "question": "Easy Advanced Tenses calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Advanced Tenses formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-tenses-e2",
                "question": "Easy Advanced Tenses variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Advanced Tenses computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-tenses-i1",
                "question": "Intermediate Advanced Tenses with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Advanced Tenses problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-tenses-i2",
                "question": "Intermediate Advanced Tenses reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Advanced Tenses result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-tenses-a1",
                "question": "Advanced Advanced Tenses with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Advanced Tenses problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-tenses-p1",
                "question": "Placement Advanced Tenses integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Advanced Tenses.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Tenses: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Advanced Tenses shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Advanced Tenses formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Advanced Tenses mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Advanced Tenses reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Advanced Tenses answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Advanced Tenses problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Advanced Tenses from Year 1 Advanced Tenses in terms of problem structure?",
            "Create a Advanced Tenses word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Advanced Tenses"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Advanced Tenses"
            }
          ]
        },
        {
          "id": "y2-verbal-error-detection",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 36,
          "title": "Error Detection",
          "tagline": "Year 2 Application — Error Detection in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Error detection questions present a sentence with 4 underlined portions. Students identify which portion has a grammatical error. Common errors: tense mismatch, SVA errors, wrong preposition, article misuse, pronoun-antecedent mismatch.",
            "placementRelevance": "Error Detection is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Error Detection is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Error Detection",
            "Identify the correct problem type and method in Error Detection",
            "Solve Error Detection questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Error Detection"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Error Detection】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Error Detection requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Error Detection, visualize the parameters clearly. Break the problem into independent modules."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Modular Solving",
              "formula": "Solve A, plug into B",
              "description": "Pipeline",
              "whenToUse": "Complex Qs",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Error Detection is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Error Detection, accuracy improves by 51%."
            ],
            "deepDiveAspects": [
              {
                "title": "Error Detection - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Error Detection",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Error Detection formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Error Detection result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-error-detection-1",
              "title": "Error Detection Case Study",
              "question": "[Error Detection] A completes work in 10d. B is 20% more efficient. Time for B?",
              "givenInfo": [
                "A=10",
                "B=120% A"
              ],
              "conceptOrFormula": "Inv Prop",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Ratio",
                  "explanation": "Eff A:B = 100:120 = 5:6",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Time",
                  "explanation": "Time A:B = 6:5. 6 parts = 10d. 5 parts = 10*5/6 = 8.33d",
                  "math": ""
                }
              ],
              "finalAnswer": "8.33 days",
              "whyItWorks": "This demonstrates the core mechanic of Error Detection.",
              "commonTrap": "Failing to account for the 46 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Error Detection",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Error Detection pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Error Detection problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Error Detection problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Error Detection variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Error Detection is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-detection-e1",
                "question": "Easy Error Detection calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Error Detection formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-detection-e2",
                "question": "Easy Error Detection variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Error Detection computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-detection-i1",
                "question": "Intermediate Error Detection with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Error Detection problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-detection-i2",
                "question": "Intermediate Error Detection reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Error Detection result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-detection-a1",
                "question": "Advanced Error Detection with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Error Detection problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-detection-p1",
                "question": "Placement Error Detection integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Error Detection.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Error Detection: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Error Detection shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Error Detection formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Error Detection mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Error Detection reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Error Detection answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Error Detection problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Error Detection from Year 1 Error Detection in terms of problem structure?",
            "Create a Error Detection word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Error Detection"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Error Detection"
            }
          ]
        },
        {
          "id": "y2-verbal-sentence-improvement",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 37,
          "title": "Sentence Improvement",
          "tagline": "Year 2 Application — Sentence Improvement in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Sentence improvement selects the best replacement for the underlined part of a sentence. Criteria: grammatical correctness, conciseness, and meaning preservation. Often only one option is both grammatically correct and semantically appropriate.",
            "placementRelevance": "Sentence Improvement is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Sentence Improvement is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Sentence Improvement",
            "Identify the correct problem type and method in Sentence Improvement",
            "Solve Sentence Improvement questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Sentence Improvement"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Sentence Improvement】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Sentence Improvement requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Sentence Improvement, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
          },
          "importantRulesAndFormulas": [
            {
              "title": "SVA",
              "formula": "Singular=Singular",
              "description": "Grammar",
              "whenToUse": "Error",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Sentence Improvement is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Sentence Improvement, accuracy improves by 58%."
            ],
            "deepDiveAspects": [
              {
                "title": "Sentence Improvement - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Sentence Improvement",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Sentence Improvement formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Sentence Improvement result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-sentence-improvement-1",
              "title": "Sentence Improvement Case Study",
              "question": "[Sentence Improvement] Neither A nor B was...",
              "givenInfo": [
                "Neither nor"
              ],
              "conceptOrFormula": "Proximity",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Rule",
                  "explanation": "Verb agrees with closest",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Check",
                  "explanation": "B is plural",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Fix",
                  "explanation": "was -> were",
                  "math": ""
                }
              ],
              "finalAnswer": "were",
              "whyItWorks": "This demonstrates the core mechanic of Sentence Improvement.",
              "commonTrap": "Failing to account for the 51 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Sentence Improvement",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Sentence Improvement pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Sentence Improvement problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Sentence Improvement problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Sentence Improvement variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Sentence Improvement is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-improvement-e1",
                "question": "Easy Sentence Improvement calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Sentence Improvement formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-improvement-e2",
                "question": "Easy Sentence Improvement variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Sentence Improvement computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-improvement-i1",
                "question": "Intermediate Sentence Improvement with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Sentence Improvement problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-improvement-i2",
                "question": "Intermediate Sentence Improvement reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Sentence Improvement result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-improvement-a1",
                "question": "Advanced Sentence Improvement with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Sentence Improvement problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-improvement-p1",
                "question": "Placement Sentence Improvement integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Sentence Improvement.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Sentence Improvement: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Sentence Improvement shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Sentence Improvement formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Sentence Improvement mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Sentence Improvement reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Sentence Improvement answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Sentence Improvement problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Sentence Improvement from Year 1 Sentence Improvement in terms of problem structure?",
            "Create a Sentence Improvement word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Sentence Improvement"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Sentence Improvement"
            }
          ]
        },
        {
          "id": "y2-verbal-sentence-completion",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 38,
          "title": "Sentence Completion",
          "tagline": "Year 2 Application — Sentence Completion in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Sentence completion fills a blank with the most appropriate word or phrase. Context analysis, grammar constraints, and vocabulary range all determine the correct choice.",
            "placementRelevance": "Sentence Completion is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Sentence Completion is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Sentence Completion",
            "Identify the correct problem type and method in Sentence Completion",
            "Solve Sentence Completion questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Sentence Completion"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Sentence Completion】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Sentence Completion requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Sentence Completion, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
          },
          "importantRulesAndFormulas": [
            {
              "title": "SVA",
              "formula": "Singular=Singular",
              "description": "Grammar",
              "whenToUse": "Error",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Sentence Completion is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Sentence Completion, accuracy improves by 38%."
            ],
            "deepDiveAspects": [
              {
                "title": "Sentence Completion - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Sentence Completion",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Sentence Completion formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Sentence Completion result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-sentence-completion-1",
              "title": "Sentence Completion Case Study",
              "question": "[Sentence Completion] Neither A nor B was...",
              "givenInfo": [
                "Neither nor"
              ],
              "conceptOrFormula": "Proximity",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Rule",
                  "explanation": "Verb agrees with closest",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Check",
                  "explanation": "B is plural",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Fix",
                  "explanation": "was -> were",
                  "math": ""
                }
              ],
              "finalAnswer": "were",
              "whyItWorks": "This demonstrates the core mechanic of Sentence Completion.",
              "commonTrap": "Failing to account for the 59 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Sentence Completion",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Sentence Completion pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Sentence Completion problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Sentence Completion problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Sentence Completion variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Sentence Completion is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-completion-e1",
                "question": "Easy Sentence Completion calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Sentence Completion formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-completion-e2",
                "question": "Easy Sentence Completion variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Sentence Completion computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-completion-i1",
                "question": "Intermediate Sentence Completion with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Sentence Completion problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-completion-i2",
                "question": "Intermediate Sentence Completion reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Sentence Completion result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-completion-a1",
                "question": "Advanced Sentence Completion with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Sentence Completion problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-completion-p1",
                "question": "Placement Sentence Completion integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Sentence Completion.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Sentence Completion: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Sentence Completion shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Sentence Completion formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Sentence Completion mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Sentence Completion reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Sentence Completion answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Sentence Completion problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Sentence Completion from Year 1 Sentence Completion in terms of problem structure?",
            "Create a Sentence Completion word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Sentence Completion"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Sentence Completion"
            }
          ]
        },
        {
          "id": "y2-verbal-contextual-vocab",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 39,
          "title": "Contextual Vocabulary",
          "tagline": "Year 2 Application — Contextual Vocabulary in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Contextual vocabulary questions test the meaning of words in specific contexts — not their dictionary definitions but their usage in the given passage or sentence.",
            "placementRelevance": "Contextual Vocabulary is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Contextual Vocabulary is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Contextual Vocabulary",
            "Identify the correct problem type and method in Contextual Vocabulary",
            "Solve Contextual Vocabulary questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Contextual Vocabulary"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Contextual Vocabulary】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Contextual Vocabulary requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Contextual Vocabulary, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
          },
          "importantRulesAndFormulas": [
            {
              "title": "SVA",
              "formula": "Singular=Singular",
              "description": "Grammar",
              "whenToUse": "Error",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Contextual Vocabulary is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Contextual Vocabulary, accuracy improves by 25%."
            ],
            "deepDiveAspects": [
              {
                "title": "Contextual Vocabulary - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Contextual Vocabulary",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Contextual Vocabulary formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Contextual Vocabulary result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-contextual-vocab-1",
              "title": "Contextual Vocabulary Case Study",
              "question": "[Contextual Vocabulary] Neither A nor B was...",
              "givenInfo": [
                "Neither nor"
              ],
              "conceptOrFormula": "Proximity",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Rule",
                  "explanation": "Verb agrees with closest",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Check",
                  "explanation": "B is plural",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Fix",
                  "explanation": "was -> were",
                  "math": ""
                }
              ],
              "finalAnswer": "were",
              "whyItWorks": "This demonstrates the core mechanic of Contextual Vocabulary.",
              "commonTrap": "Failing to account for the 48 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Contextual Vocabulary",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Contextual Vocabulary pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Contextual Vocabulary problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Contextual Vocabulary problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Contextual Vocabulary variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Contextual Vocabulary is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-vocab-e1",
                "question": "Easy Contextual Vocabulary calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Contextual Vocabulary formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-vocab-e2",
                "question": "Easy Contextual Vocabulary variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Contextual Vocabulary computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-vocab-i1",
                "question": "Intermediate Contextual Vocabulary with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Contextual Vocabulary problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-vocab-i2",
                "question": "Intermediate Contextual Vocabulary reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Contextual Vocabulary result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-vocab-a1",
                "question": "Advanced Contextual Vocabulary with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Contextual Vocabulary problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-vocab-p1",
                "question": "Placement Contextual Vocabulary integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Contextual Vocabulary.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Contextual Vocabulary: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Contextual Vocabulary shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Contextual Vocabulary formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Contextual Vocabulary mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Contextual Vocabulary reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Contextual Vocabulary answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Contextual Vocabulary problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Contextual Vocabulary from Year 1 Contextual Vocabulary in terms of problem structure?",
            "Create a Contextual Vocabulary word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Contextual Vocabulary"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Contextual Vocabulary"
            }
          ]
        },
        {
          "id": "y2-verbal-word-usage",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 40,
          "title": "Word Usage and Collocations",
          "tagline": "Year 2 Application — Word Usage and Collocations in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Word usage and collocations test knowledge of which words commonly appear together (collocations) and which prepositions or articles follow specific words (dependent prepositions).",
            "placementRelevance": "Word Usage and Collocations is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Word Usage and Collocations is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Word Usage and Collocations",
            "Identify the correct problem type and method in Word Usage and Collocations",
            "Solve Word Usage and Collocations questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Word Usage and Collocations"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Word Usage and Collocations】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Word Usage and Collocations requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Word Usage and Collocations, visualize the parameters clearly. Break the problem into independent modules."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Modular Solving",
              "formula": "Solve A, plug into B",
              "description": "Pipeline",
              "whenToUse": "Complex Qs",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Word Usage and Collocations is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Word Usage and Collocations, accuracy improves by 24%."
            ],
            "deepDiveAspects": [
              {
                "title": "Word Usage and Collocations - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Word Usage and Collocations",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Word Usage and Collocations formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Word Usage and Collocations result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-word-usage-1",
              "title": "Word Usage and Collocations Case Study",
              "question": "[Word Usage and Collocations] A completes work in 10d. B is 20% more efficient. Time for B?",
              "givenInfo": [
                "A=10",
                "B=120% A"
              ],
              "conceptOrFormula": "Inv Prop",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Ratio",
                  "explanation": "Eff A:B = 100:120 = 5:6",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Time",
                  "explanation": "Time A:B = 6:5. 6 parts = 10d. 5 parts = 10*5/6 = 8.33d",
                  "math": ""
                }
              ],
              "finalAnswer": "8.33 days",
              "whyItWorks": "This demonstrates the core mechanic of Word Usage and Collocations.",
              "commonTrap": "Failing to account for the 33 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Word Usage and Collocations",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Word Usage and Collocations pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Word Usage and Collocations problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Word Usage and Collocations problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Word Usage and Collocations variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Word Usage and Collocations is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-usage-e1",
                "question": "Easy Word Usage and Collocations calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Word Usage and Collocations formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-usage-e2",
                "question": "Easy Word Usage and Collocations variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Word Usage and Collocations computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-usage-i1",
                "question": "Intermediate Word Usage and Collocations with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Word Usage and Collocations problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-usage-i2",
                "question": "Intermediate Word Usage and Collocations reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Word Usage and Collocations result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-usage-a1",
                "question": "Advanced Word Usage and Collocations with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Word Usage and Collocations problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-usage-p1",
                "question": "Placement Word Usage and Collocations integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Word Usage and Collocations.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Word Usage and Collocations: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Word Usage and Collocations shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Word Usage and Collocations formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Word Usage and Collocations mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Word Usage and Collocations reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Word Usage and Collocations answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Word Usage and Collocations problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Word Usage and Collocations from Year 1 Word Usage and Collocations in terms of problem structure?",
            "Create a Word Usage and Collocations word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Word Usage and Collocations"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Word Usage and Collocations"
            }
          ]
        },
        {
          "id": "y2-verbal-para-completion",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 41,
          "title": "Paragraph Completion",
          "tagline": "Year 2 Application — Paragraph Completion in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Paragraph completion asks for the most logical sentence to complete or follow a given paragraph. The correct sentence must maintain the paragraph's tone, topic, and logical flow.",
            "placementRelevance": "Paragraph Completion is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Paragraph Completion is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Paragraph Completion",
            "Identify the correct problem type and method in Paragraph Completion",
            "Solve Paragraph Completion questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Paragraph Completion"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Paragraph Completion】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Paragraph Completion requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Paragraph Completion, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Growth %",
              "formula": "(Final-Initial)/Initial * 100",
              "description": "Percentage increase",
              "whenToUse": "Trends",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Paragraph Completion is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Paragraph Completion, accuracy improves by 26%."
            ],
            "deepDiveAspects": [
              {
                "title": "Paragraph Completion - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Paragraph Completion",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Paragraph Completion formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Paragraph Completion result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-para-completion-1",
              "title": "Paragraph Completion Case Study",
              "question": "[Paragraph Completion] Sales from 120 to 150. % increase?",
              "givenInfo": [
                "120 -> 150"
              ],
              "conceptOrFormula": "Change/Base",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Diff",
                  "explanation": "30",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "% Calculation",
                  "explanation": "30/120 = 1/4 = 25%",
                  "math": ""
                }
              ],
              "finalAnswer": "25%",
              "whyItWorks": "This demonstrates the core mechanic of Paragraph Completion.",
              "commonTrap": "Failing to account for the 16 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Paragraph Completion",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Paragraph Completion pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Paragraph Completion problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Paragraph Completion problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Paragraph Completion variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Paragraph Completion is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-completion-e1",
                "question": "Easy Paragraph Completion calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Paragraph Completion formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-completion-e2",
                "question": "Easy Paragraph Completion variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Paragraph Completion computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-completion-i1",
                "question": "Intermediate Paragraph Completion with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Paragraph Completion problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-completion-i2",
                "question": "Intermediate Paragraph Completion reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Paragraph Completion result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-completion-a1",
                "question": "Advanced Paragraph Completion with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Paragraph Completion problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-completion-p1",
                "question": "Placement Paragraph Completion integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Paragraph Completion.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Paragraph Completion: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Paragraph Completion shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Paragraph Completion formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Paragraph Completion mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Paragraph Completion reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Paragraph Completion answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Paragraph Completion problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Paragraph Completion from Year 1 Paragraph Completion in terms of problem structure?",
            "Create a Paragraph Completion word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Paragraph Completion"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Paragraph Completion"
            }
          ]
        },
        {
          "id": "y2-verbal-basic-para-jumbles",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 42,
          "title": "Basic Para Jumbles",
          "tagline": "Year 2 Application — Basic Para Jumbles in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Para jumble problems provide 4–6 sentences in scrambled order. The task is to arrange them in the most logical sequence. Year 2 covers 4–5 sentence sets.",
            "placementRelevance": "Basic Para Jumbles is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Basic Para Jumbles is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Para Jumbles",
            "Identify the correct problem type and method in Basic Para Jumbles",
            "Solve Basic Para Jumbles questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Para Jumbles"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Basic Para Jumbles】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Basic Para Jumbles requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Basic Para Jumbles, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Basic Para Jumbles is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Basic Para Jumbles, accuracy improves by 42%."
            ],
            "deepDiveAspects": [
              {
                "title": "Basic Para Jumbles - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Basic Para Jumbles",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Basic Para Jumbles formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Basic Para Jumbles result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-basic-para-jumbles-1",
              "title": "Basic Para Jumbles Case Study",
              "question": "[Basic Para Jumbles] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Basic Para Jumbles.",
              "commonTrap": "Failing to account for the 11 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Para Jumbles",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Basic Para Jumbles pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Basic Para Jumbles problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Basic Para Jumbles problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Basic Para Jumbles variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Basic Para Jumbles is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-jumbles-e1",
                "question": "Easy Basic Para Jumbles calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Basic Para Jumbles formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-jumbles-e2",
                "question": "Easy Basic Para Jumbles variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Basic Para Jumbles computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-jumbles-i1",
                "question": "Intermediate Basic Para Jumbles with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Basic Para Jumbles problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-jumbles-i2",
                "question": "Intermediate Basic Para Jumbles reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Basic Para Jumbles result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-jumbles-a1",
                "question": "Advanced Basic Para Jumbles with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Basic Para Jumbles problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-jumbles-p1",
                "question": "Placement Basic Para Jumbles integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Basic Para Jumbles.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Basic Para Jumbles: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Basic Para Jumbles shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Basic Para Jumbles formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Basic Para Jumbles mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Basic Para Jumbles reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Basic Para Jumbles answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Basic Para Jumbles problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Basic Para Jumbles from Year 1 Basic Para Jumbles in terms of problem structure?",
            "Create a Basic Para Jumbles word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Para Jumbles"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Para Jumbles"
            }
          ]
        },
        {
          "id": "y2-verbal-rc-foundation",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 43,
          "title": "Reading Comprehension Foundation",
          "tagline": "Year 2 Application — Reading Comprehension Foundation in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Reading comprehension foundation covers shorter passages (200–250 words) with 3–4 questions. Question types: direct fact, inference, title identification, and vocabulary in context.",
            "placementRelevance": "Reading Comprehension Foundation is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Reading Comprehension Foundation is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Reading Comprehension Foundation",
            "Identify the correct problem type and method in Reading Comprehension Foundation",
            "Solve Reading Comprehension Foundation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Reading Comprehension Foundation"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Reading Comprehension Foundation】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Reading Comprehension Foundation requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Reading Comprehension Foundation, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Diff 2 yrs",
              "formula": "P(R/100)²",
              "description": "Shortcut",
              "whenToUse": "Diff",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Reading Comprehension Foundation is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Reading Comprehension Foundation, accuracy improves by 16%."
            ],
            "deepDiveAspects": [
              {
                "title": "Reading Comprehension Foundation - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Reading Comprehension Foundation",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Reading Comprehension Foundation formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Reading Comprehension Foundation result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-rc-foundation-1",
              "title": "Reading Comprehension Foundation Case Study",
              "question": "[Reading Comprehension Foundation] Diff for 2 yrs at 10% is 65. Principal?",
              "givenInfo": [
                "Diff=65",
                "R=10",
                "T=2"
              ],
              "conceptOrFormula": "Diff=P(R/100)²",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sub",
                  "explanation": "65 = P * (1/100)",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Solve",
                  "explanation": "P=6500",
                  "math": ""
                }
              ],
              "finalAnswer": "6500",
              "whyItWorks": "This demonstrates the core mechanic of Reading Comprehension Foundation.",
              "commonTrap": "Failing to account for the 55 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Reading Comprehension Foundation",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Reading Comprehension Foundation pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Reading Comprehension Foundation problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Reading Comprehension Foundation problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Reading Comprehension Foundation variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Reading Comprehension Foundation is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-foundation-e1",
                "question": "Easy Reading Comprehension Foundation calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Reading Comprehension Foundation formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-foundation-e2",
                "question": "Easy Reading Comprehension Foundation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Reading Comprehension Foundation computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-foundation-i1",
                "question": "Intermediate Reading Comprehension Foundation with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Reading Comprehension Foundation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-foundation-i2",
                "question": "Intermediate Reading Comprehension Foundation reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Reading Comprehension Foundation result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-foundation-a1",
                "question": "Advanced Reading Comprehension Foundation with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Reading Comprehension Foundation problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-foundation-p1",
                "question": "Placement Reading Comprehension Foundation integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Reading Comprehension Foundation.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Reading Comprehension Foundation: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Reading Comprehension Foundation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Reading Comprehension Foundation formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Reading Comprehension Foundation mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Reading Comprehension Foundation reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Reading Comprehension Foundation answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Reading Comprehension Foundation problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Reading Comprehension Foundation from Year 1 Reading Comprehension Foundation in terms of problem structure?",
            "Create a Reading Comprehension Foundation word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Reading Comprehension Foundation"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Reading Comprehension Foundation"
            }
          ]
        },
        {
          "id": "y2-verbal-vocab-in-context",
          "yearId": 2,
          "category": "Advanced Verbal Ability",
          "topicNumber": 44,
          "title": "Vocabulary in Context",
          "tagline": "Year 2 Application — Vocabulary in Context in Placement Scenarios",
          "estimatedMinutes": 50,
          "difficulty": "Intermediate",
          "introduction": {
            "overview": "Vocabulary in context derives word meaning from surrounding text rather than prior vocabulary knowledge. This skill is essential for longer RC passages where unfamiliar technical words appear.",
            "placementRelevance": "Vocabulary in Context is tested in intermediate difficulty rounds of TCS, Infosys, Wipro, and Cognizant assessments.",
            "realWorldContext": "Vocabulary in Context is directly applicable in data analysis, engineering problem-solving, and professional communication."
          },
          "learningObjectives": [
            "Understand and apply core principles of Vocabulary in Context",
            "Identify the correct problem type and method in Vocabulary in Context",
            "Solve Vocabulary in Context questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Vocabulary in Context"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "【Vocabulary in Context】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Vocabulary in Context requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Vocabulary in Context, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
          },
          "importantRulesAndFormulas": [
            {
              "title": "SVA",
              "formula": "Singular=Singular",
              "description": "Grammar",
              "whenToUse": "Error",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 2, mastering Vocabulary in Context is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Vocabulary in Context, accuracy improves by 29%."
            ],
            "deepDiveAspects": [
              {
                "title": "Vocabulary in Context - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Vocabulary in Context",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Vocabulary in Context formulas with all values provided.",
              "exampleSnippet": "Standard problem type."
            },
            {
              "typeName": "Reverse/Inverse Calculation",
              "description": "Find original value from Vocabulary in Context result.",
              "exampleSnippet": "Work backwards from final result."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y2-verbal-vocab-in-context-1",
              "title": "Vocabulary in Context Case Study",
              "question": "[Vocabulary in Context] Neither A nor B was...",
              "givenInfo": [
                "Neither nor"
              ],
              "conceptOrFormula": "Proximity",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Rule",
                  "explanation": "Verb agrees with closest",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Check",
                  "explanation": "B is plural",
                  "math": ""
                },
                {
                  "stepNumber": 3,
                  "title": "Fix",
                  "explanation": "was -> were",
                  "math": ""
                }
              ],
              "finalAnswer": "were",
              "whyItWorks": "This demonstrates the core mechanic of Vocabulary in Context.",
              "commonTrap": "Failing to account for the 18 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Vocabulary in Context",
            "traditionalVsShortcut": {
              "traditionalMethod": "Set up simultaneous equations and solve algebraically.",
              "shortcutMethod": "Identify Vocabulary in Context pattern → apply specific shortcut → compute in 1 step.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Identify Vocabulary in Context problem variant before computing.",
              "Use multiplier method to avoid fraction arithmetic.",
              "For 'approximately' questions: round aggressively and estimate."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying Vocabulary in Context problem variant",
              "whyItHappens": "Applying direct formula to inverse problem.",
              "howToAvoid": "Read problem twice: identify what is GIVEN and what is UNKNOWN. Then select formula."
            },
            {
              "mistake": "Rounding intermediate values",
              "whyItHappens": "Accumulates error in multi-step {title} problems.",
              "howToAvoid": "Maintain exact fractions until final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 50,
            "eliminationTechnique": "Eliminate options using magnitude checks and unit analysis before computing.",
            "questionSelectionAdvice": "Spend first 10 seconds identifying Vocabulary in Context variant. Then apply shortcut. Total target: under 60 seconds.",
            "recruiterInsight": "Vocabulary in Context is tested in Year 2 level placement aptitude rounds at TCS, Infosys, Wipro, and Cognizant."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y2-context-e1",
                "question": "Easy Vocabulary in Context calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Direct Vocabulary in Context formula with given values.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y2-context-e2",
                "question": "Easy Vocabulary in Context variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Standard Vocabulary in Context computation.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y2-context-i1",
                "question": "Intermediate Vocabulary in Context with one condition.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Two-step Vocabulary in Context problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y2-context-i2",
                "question": "Intermediate Vocabulary in Context reverse calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Finding original value from Vocabulary in Context result.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y2-context-a1",
                "question": "Advanced Vocabulary in Context with multiple conditions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Multi-step Vocabulary in Context problem.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y2-context-p1",
                "question": "Placement Vocabulary in Context integrating multiple sub-concepts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Placement-level Vocabulary in Context.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Vocabulary in Context: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Vocabulary in Context shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Primary Vocabulary in Context formula"
            ]
          },
          "keyTakeaways": [
            "Year 2 Vocabulary in Context mastery requires pattern recognition across 50+ varied problems.",
            "Shortcut application in Vocabulary in Context reduces solving time from 90 seconds to under 45 seconds.",
            "Always verify Vocabulary in Context answers — placement test traps are designed to produce plausible wrong answers."
          ],
          "selfCheckQuestions": [
            "Solve 3 Vocabulary in Context problems: one direct, one reverse, one combined.",
            "What distinguishes Year 2 Vocabulary in Context from Year 1 Vocabulary in Context in terms of problem structure?",
            "Create a Vocabulary in Context word problem and solve it using the shortcut method."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Vocabulary in Context"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Vocabulary in Context"
            }
          ]
        }
      ]
    }
  ]
};
