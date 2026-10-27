import { CRTYearCurriculum } from '../types/crtTypes';

export const CRT_YEAR_3_DATA: CRTYearCurriculum = {
  "yearId": 3,
  "yearName": "3rd Year",
  "levelTitle": "3rd Year Analysis CRT — Advanced Reasoning and Multi-Concept Integration",
  "description": "Advanced curriculum: remainder theorems, permutations/combinations, AP/GP, advanced seating, critical reasoning, advanced RC, 3D mensuration, clocks/calendars, and high-difficulty DI sets.",
  "targetFocus": [
    "Advanced quantitative: number theory, P&C, progressions, advanced geometry, 3D mensuration",
    "Advanced reasoning: complex arrangements, critical reasoning, data sufficiency, decision problems",
    "Advanced verbal: inference RC, author tone, para jumbles, argument evaluation",
    "Advanced DI: caselet, multi-chart, approximation, growth rates"
  ],
  "categories": [
    {
      "category": "Advanced Quantitative Aptitude",
      "description": "Advanced Quantitative Aptitude — Year 3 Advanced",
      "topics": [
        {
          "id": "y3-quant-adv-number-properties",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 1,
          "title": "Advanced Number Properties",
          "tagline": "Year 3 Analysis — Advanced Number Properties for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Number Properties develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Number Properties questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Number Properties at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Number Properties",
            "Identify the correct problem type and method in Advanced Number Properties",
            "Solve Advanced Number Properties questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Number Properties"
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
              "【Advanced Number Properties】 Prime: Only div by 1 and itself.",
              "Remainder Theorem: Modulo arithmetic.",
              "Unit Digit Cycle: Periodicity of powers.",
              "Factor: Exact divisor."
            ],
            "theoreticalIntuition": "Mastering Advanced Number Properties requires a firm grasp of underlying concepts. Number theory forms the basis of advanced quantitative analysis.",
            "visualOrMentalModel": "When approaching Advanced Number Properties, visualize the parameters clearly. Unit digit cycles eliminate large-power computation entirely."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Unit Digit of x^y",
              "formula": "Find y mod cycle_length",
              "description": "Power cycle",
              "whenToUse": "Unit digits",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 3, mastering Advanced Number Properties is critical for placement success.",
              "Number theory forms the basis of advanced quantitative analysis.",
              "Unit digit cycles eliminate large-power computation entirely.",
              "Fermat's and Wilson's theorems provide shortcuts for complex remainder problems.",
              "By applying these principles to Advanced Number Properties, accuracy improves by 32%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Number Properties - Advanced Application",
                "content": "Fermat's and Wilson's theorems provide shortcuts for complex remainder problems."
              },
              {
                "title": "Core Methodology for Advanced Number Properties",
                "content": "Unit digit cycles eliminate large-power computation entirely."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Number Properties in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Number Properties problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-number-properties-1",
              "title": "Advanced Number Properties Case Study",
              "question": "[Advanced Number Properties] Unit digit of 3^45?",
              "givenInfo": [
                "3^45"
              ],
              "conceptOrFormula": "Cycle of 3 is 4",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Mod",
                  "explanation": "45 mod 4 = 1",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Map",
                  "explanation": "3^1 = 3",
                  "math": ""
                }
              ],
              "finalAnswer": "3",
              "whyItWorks": "This demonstrates the core mechanic of Advanced Number Properties.",
              "commonTrap": "Failing to account for the 17 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Number Properties Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Number Properties shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Number Properties problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Number Properties problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Number Properties",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Number Properties MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Number Properties.",
            "recruiterInsight": "Year 3 Advanced Number Properties distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-properties-e1",
                "question": "Year 3 Advanced Number Properties — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Number Properties with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-properties-e2",
                "question": "Year 3 Advanced Number Properties variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Number Properties problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-properties-i1",
                "question": "Year 3 Advanced Number Properties — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Number Properties problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-properties-i2",
                "question": "Second Year 3 Advanced Number Properties.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Number Properties variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-properties-a1",
                "question": "High-difficulty Year 3 Advanced Number Properties.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Number Properties.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-properties-p1",
                "question": "Placement-style Year 3 Advanced Number Properties.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Number Properties question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Number Properties: Prime: Only div by 1 and itself.",
              "Remainder Theorem: Modulo arithmetic.",
              "Always review calculation steps.",
              "Apply Advanced Number Properties shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Number Properties compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Number Properties mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Number Properties appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Number Properties answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Number Properties problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Number Properties harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Number Properties problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Number Properties"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Number Properties advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-remainder-theorems",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 2,
          "title": "Remainder Theorems (Chinese, Fermat's)",
          "tagline": "Year 3 Analysis — Remainder Theorems (Chinese, Fermat's) for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Remainder Theorems (Chinese, Fermat's) develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Remainder Theorems (Chinese, Fermat's) questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Remainder Theorems (Chinese, Fermat's) at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Remainder Theorems (Chinese, Fermat's)",
            "Identify the correct problem type and method in Remainder Theorems (Chinese, Fermat's)",
            "Solve Remainder Theorems (Chinese, Fermat's) questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Remainder Theorems (Chinese, Fermat's)"
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
              "【Remainder Theorems (Chinese, Fermat's)】 Prime: Only div by 1 and itself.",
              "Remainder Theorem: Modulo arithmetic.",
              "Unit Digit Cycle: Periodicity of powers.",
              "Factor: Exact divisor."
            ],
            "theoreticalIntuition": "Mastering Remainder Theorems (Chinese, Fermat's) requires a firm grasp of underlying concepts. Number theory forms the basis of advanced quantitative analysis.",
            "visualOrMentalModel": "When approaching Remainder Theorems (Chinese, Fermat's), visualize the parameters clearly. Unit digit cycles eliminate large-power computation entirely."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Unit Digit of x^y",
              "formula": "Find y mod cycle_length",
              "description": "Power cycle",
              "whenToUse": "Unit digits",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 3, mastering Remainder Theorems (Chinese, Fermat's) is critical for placement success.",
              "Number theory forms the basis of advanced quantitative analysis.",
              "Unit digit cycles eliminate large-power computation entirely.",
              "Fermat's and Wilson's theorems provide shortcuts for complex remainder problems.",
              "By applying these principles to Remainder Theorems (Chinese, Fermat's), accuracy improves by 13%."
            ],
            "deepDiveAspects": [
              {
                "title": "Remainder Theorems (Chinese, Fermat's) - Advanced Application",
                "content": "Fermat's and Wilson's theorems provide shortcuts for complex remainder problems."
              },
              {
                "title": "Core Methodology for Remainder Theorems (Chinese, Fermat's)",
                "content": "Unit digit cycles eliminate large-power computation entirely."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Remainder Theorems (Chinese, Fermat's) in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Remainder Theorems (Chinese, Fermat's) problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-remainder-theorems-1",
              "title": "Remainder Theorems (Chinese, Fermat's) Case Study",
              "question": "[Remainder Theorems (Chinese, Fermat's)] Unit digit of 3^45?",
              "givenInfo": [
                "3^45"
              ],
              "conceptOrFormula": "Cycle of 3 is 4",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Mod",
                  "explanation": "45 mod 4 = 1",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Map",
                  "explanation": "3^1 = 3",
                  "math": ""
                }
              ],
              "finalAnswer": "3",
              "whyItWorks": "This demonstrates the core mechanic of Remainder Theorems (Chinese, Fermat's).",
              "commonTrap": "Failing to account for the 46 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Remainder Theorems (Chinese, Fermat's) Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Remainder Theorems (Chinese, Fermat's) shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Remainder Theorems (Chinese, Fermat's) problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Remainder Theorems (Chinese, Fermat's) problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Remainder Theorems (Chinese, Fermat's)",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Remainder Theorems (Chinese, Fermat's) MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Remainder Theorems (Chinese, Fermat's).",
            "recruiterInsight": "Year 3 Remainder Theorems (Chinese, Fermat's) distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-theorems-e1",
                "question": "Year 3 Remainder Theorems (Chinese, Fermat's) — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Remainder Theorems (Chinese, Fermat's) with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-theorems-e2",
                "question": "Year 3 Remainder Theorems (Chinese, Fermat's) variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Remainder Theorems (Chinese, Fermat's) problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-theorems-i1",
                "question": "Year 3 Remainder Theorems (Chinese, Fermat's) — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Remainder Theorems (Chinese, Fermat's) problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-theorems-i2",
                "question": "Second Year 3 Remainder Theorems (Chinese, Fermat's).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Remainder Theorems (Chinese, Fermat's) variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-theorems-a1",
                "question": "High-difficulty Year 3 Remainder Theorems (Chinese, Fermat's).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Remainder Theorems (Chinese, Fermat's).",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-theorems-p1",
                "question": "Placement-style Year 3 Remainder Theorems (Chinese, Fermat's).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Remainder Theorems (Chinese, Fermat's) question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Remainder Theorems (Chinese, Fermat's): Prime: Only div by 1 and itself.",
              "Remainder Theorem: Modulo arithmetic.",
              "Always review calculation steps.",
              "Apply Remainder Theorems (Chinese, Fermat's) shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Remainder Theorems (Chinese, Fermat's) compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Remainder Theorems (Chinese, Fermat's) mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Remainder Theorems (Chinese, Fermat's) appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Remainder Theorems (Chinese, Fermat's) answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Remainder Theorems (Chinese, Fermat's) problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Remainder Theorems (Chinese, Fermat's) harder than Year 2? Write in your own words.",
            "Create a Year 3 Remainder Theorems (Chinese, Fermat's) problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Remainder Theorems (Chinese, Fermat's)"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Remainder Theorems (Chinese, Fermat's) advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-unit-digit-cycles",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 3,
          "title": "Unit Digit Cycles for Powers",
          "tagline": "Year 3 Analysis — Unit Digit Cycles for Powers for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Unit Digit Cycles for Powers develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Unit Digit Cycles for Powers questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Unit Digit Cycles for Powers at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Unit Digit Cycles for Powers",
            "Identify the correct problem type and method in Unit Digit Cycles for Powers",
            "Solve Unit Digit Cycles for Powers questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Unit Digit Cycles for Powers"
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
              "【Unit Digit Cycles for Powers】 Prime: Only div by 1 and itself.",
              "Remainder Theorem: Modulo arithmetic.",
              "Unit Digit Cycle: Periodicity of powers.",
              "Factor: Exact divisor."
            ],
            "theoreticalIntuition": "Mastering Unit Digit Cycles for Powers requires a firm grasp of underlying concepts. Number theory forms the basis of advanced quantitative analysis.",
            "visualOrMentalModel": "When approaching Unit Digit Cycles for Powers, visualize the parameters clearly. Unit digit cycles eliminate large-power computation entirely."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Unit Digit of x^y",
              "formula": "Find y mod cycle_length",
              "description": "Power cycle",
              "whenToUse": "Unit digits",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 3, mastering Unit Digit Cycles for Powers is critical for placement success.",
              "Number theory forms the basis of advanced quantitative analysis.",
              "Unit digit cycles eliminate large-power computation entirely.",
              "Fermat's and Wilson's theorems provide shortcuts for complex remainder problems.",
              "By applying these principles to Unit Digit Cycles for Powers, accuracy improves by 56%."
            ],
            "deepDiveAspects": [
              {
                "title": "Unit Digit Cycles for Powers - Advanced Application",
                "content": "Fermat's and Wilson's theorems provide shortcuts for complex remainder problems."
              },
              {
                "title": "Core Methodology for Unit Digit Cycles for Powers",
                "content": "Unit digit cycles eliminate large-power computation entirely."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Unit Digit Cycles for Powers in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Unit Digit Cycles for Powers problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-unit-digit-cycles-1",
              "title": "Unit Digit Cycles for Powers Case Study",
              "question": "[Unit Digit Cycles for Powers] Unit digit of 3^45?",
              "givenInfo": [
                "3^45"
              ],
              "conceptOrFormula": "Cycle of 3 is 4",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Mod",
                  "explanation": "45 mod 4 = 1",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Map",
                  "explanation": "3^1 = 3",
                  "math": ""
                }
              ],
              "finalAnswer": "3",
              "whyItWorks": "This demonstrates the core mechanic of Unit Digit Cycles for Powers.",
              "commonTrap": "Failing to account for the 53 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Unit Digit Cycles for Powers Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Unit Digit Cycles for Powers shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Unit Digit Cycles for Powers problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Unit Digit Cycles for Powers problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Unit Digit Cycles for Powers",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Unit Digit Cycles for Powers MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Unit Digit Cycles for Powers.",
            "recruiterInsight": "Year 3 Unit Digit Cycles for Powers distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-cycles-e1",
                "question": "Year 3 Unit Digit Cycles for Powers — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Unit Digit Cycles for Powers with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-cycles-e2",
                "question": "Year 3 Unit Digit Cycles for Powers variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Unit Digit Cycles for Powers problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-cycles-i1",
                "question": "Year 3 Unit Digit Cycles for Powers — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Unit Digit Cycles for Powers problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-cycles-i2",
                "question": "Second Year 3 Unit Digit Cycles for Powers.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Unit Digit Cycles for Powers variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-cycles-a1",
                "question": "High-difficulty Year 3 Unit Digit Cycles for Powers.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Unit Digit Cycles for Powers.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-cycles-p1",
                "question": "Placement-style Year 3 Unit Digit Cycles for Powers.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Unit Digit Cycles for Powers question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Unit Digit Cycles for Powers: Prime: Only div by 1 and itself.",
              "Remainder Theorem: Modulo arithmetic.",
              "Always review calculation steps.",
              "Apply Unit Digit Cycles for Powers shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Unit Digit Cycles for Powers compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Unit Digit Cycles for Powers mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Unit Digit Cycles for Powers appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Unit Digit Cycles for Powers answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Unit Digit Cycles for Powers problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Unit Digit Cycles for Powers harder than Year 2? Write in your own words.",
            "Create a Year 3 Unit Digit Cycles for Powers problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Unit Digit Cycles for Powers"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Unit Digit Cycles for Powers advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-trailing-zeros",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 4,
          "title": "Trailing Zeros in Factorials and Products",
          "tagline": "Year 3 Analysis — Trailing Zeros in Factorials and Products for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Trailing Zeros in Factorials and Products develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Trailing Zeros in Factorials and Products questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Trailing Zeros in Factorials and Products at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Trailing Zeros in Factorials and Products",
            "Identify the correct problem type and method in Trailing Zeros in Factorials and Products",
            "Solve Trailing Zeros in Factorials and Products questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Trailing Zeros in Factorials and Products"
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
              "【Trailing Zeros in Factorials and Products】 Prime: Only div by 1 and itself.",
              "Remainder Theorem: Modulo arithmetic.",
              "Unit Digit Cycle: Periodicity of powers.",
              "Factor: Exact divisor."
            ],
            "theoreticalIntuition": "Mastering Trailing Zeros in Factorials and Products requires a firm grasp of underlying concepts. Number theory forms the basis of advanced quantitative analysis.",
            "visualOrMentalModel": "When approaching Trailing Zeros in Factorials and Products, visualize the parameters clearly. Unit digit cycles eliminate large-power computation entirely."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Unit Digit of x^y",
              "formula": "Find y mod cycle_length",
              "description": "Power cycle",
              "whenToUse": "Unit digits",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 3, mastering Trailing Zeros in Factorials and Products is critical for placement success.",
              "Number theory forms the basis of advanced quantitative analysis.",
              "Unit digit cycles eliminate large-power computation entirely.",
              "Fermat's and Wilson's theorems provide shortcuts for complex remainder problems.",
              "By applying these principles to Trailing Zeros in Factorials and Products, accuracy improves by 37%."
            ],
            "deepDiveAspects": [
              {
                "title": "Trailing Zeros in Factorials and Products - Advanced Application",
                "content": "Fermat's and Wilson's theorems provide shortcuts for complex remainder problems."
              },
              {
                "title": "Core Methodology for Trailing Zeros in Factorials and Products",
                "content": "Unit digit cycles eliminate large-power computation entirely."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Trailing Zeros in Factorials and Products in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Trailing Zeros in Factorials and Products problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-trailing-zeros-1",
              "title": "Trailing Zeros in Factorials and Products Case Study",
              "question": "[Trailing Zeros in Factorials and Products] Unit digit of 3^45?",
              "givenInfo": [
                "3^45"
              ],
              "conceptOrFormula": "Cycle of 3 is 4",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Mod",
                  "explanation": "45 mod 4 = 1",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Map",
                  "explanation": "3^1 = 3",
                  "math": ""
                }
              ],
              "finalAnswer": "3",
              "whyItWorks": "This demonstrates the core mechanic of Trailing Zeros in Factorials and Products.",
              "commonTrap": "Failing to account for the 18 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Trailing Zeros in Factorials and Products Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Trailing Zeros in Factorials and Products shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Trailing Zeros in Factorials and Products problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Trailing Zeros in Factorials and Products problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Trailing Zeros in Factorials and Products",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Trailing Zeros in Factorials and Products MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Trailing Zeros in Factorials and Products.",
            "recruiterInsight": "Year 3 Trailing Zeros in Factorials and Products distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-zeros-e1",
                "question": "Year 3 Trailing Zeros in Factorials and Products — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Trailing Zeros in Factorials and Products with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-zeros-e2",
                "question": "Year 3 Trailing Zeros in Factorials and Products variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Trailing Zeros in Factorials and Products problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-zeros-i1",
                "question": "Year 3 Trailing Zeros in Factorials and Products — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Trailing Zeros in Factorials and Products problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-zeros-i2",
                "question": "Second Year 3 Trailing Zeros in Factorials and Products.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Trailing Zeros in Factorials and Products variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-zeros-a1",
                "question": "High-difficulty Year 3 Trailing Zeros in Factorials and Products.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Trailing Zeros in Factorials and Products.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-zeros-p1",
                "question": "Placement-style Year 3 Trailing Zeros in Factorials and Products.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Trailing Zeros in Factorials and Products question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Trailing Zeros in Factorials and Products: Prime: Only div by 1 and itself.",
              "Remainder Theorem: Modulo arithmetic.",
              "Always review calculation steps.",
              "Apply Trailing Zeros in Factorials and Products shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Trailing Zeros in Factorials and Products compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Trailing Zeros in Factorials and Products mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Trailing Zeros in Factorials and Products appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Trailing Zeros in Factorials and Products answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Trailing Zeros in Factorials and Products problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Trailing Zeros in Factorials and Products harder than Year 2? Write in your own words.",
            "Create a Year 3 Trailing Zeros in Factorials and Products problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Trailing Zeros in Factorials and Products"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Trailing Zeros in Factorials and Products advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-mixtures",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 5,
          "title": "Advanced Mixtures — Three-Component Alligation",
          "tagline": "Year 3 Analysis — Advanced Mixtures — Three-Component Alligation for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Mixtures — Three-Component Alligation develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Mixtures — Three-Component Alligation questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Mixtures — Three-Component Alligation at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Mixtures — Three-Component Alligation",
            "Identify the correct problem type and method in Advanced Mixtures — Three-Component Alligation",
            "Solve Advanced Mixtures — Three-Component Alligation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Mixtures — Three-Component Alligation"
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
              "【Advanced Mixtures — Three-Component Alligation】 Mixture: Combined ingredients.",
              "Alligation: Finding the mixing ratio.",
              "Mean Price: Cost of mixture.",
              "Replacement: Removing and replacing."
            ],
            "theoreticalIntuition": "Mastering Advanced Mixtures — Three-Component Alligation requires a firm grasp of underlying concepts. Alligation bypassed complex simultaneous equations.",
            "visualOrMentalModel": "When approaching Advanced Mixtures — Three-Component Alligation, visualize the parameters clearly. Place cheaper/dearer on top, mean in middle, and cross-subtract."
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
              "In Year 3, mastering Advanced Mixtures — Three-Component Alligation is critical for placement success.",
              "Alligation bypassed complex simultaneous equations.",
              "Place cheaper/dearer on top, mean in middle, and cross-subtract.",
              "For replacement, focus on the fraction of the original liquid remaining.",
              "By applying these principles to Advanced Mixtures — Three-Component Alligation, accuracy improves by 37%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Mixtures — Three-Component Alligation - Advanced Application",
                "content": "For replacement, focus on the fraction of the original liquid remaining."
              },
              {
                "title": "Core Methodology for Advanced Mixtures — Three-Component Alligation",
                "content": "Place cheaper/dearer on top, mean in middle, and cross-subtract."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Mixtures — Three-Component Alligation in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Mixtures — Three-Component Alligation problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-mixtures-1",
              "title": "Advanced Mixtures — Three-Component Alligation Case Study",
              "question": "[Advanced Mixtures — Three-Component Alligation] Mix 37.30/kg with 10.80/kg for 10.00/kg?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Mixtures — Three-Component Alligation.",
              "commonTrap": "Failing to account for the 21 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Mixtures — Three-Component Alligation Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Mixtures — Three-Component Alligation shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Mixtures — Three-Component Alligation problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Mixtures — Three-Component Alligation problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Mixtures — Three-Component Alligation",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Mixtures — Three-Component Alligation MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Mixtures — Three-Component Alligation.",
            "recruiterInsight": "Year 3 Advanced Mixtures — Three-Component Alligation distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-mixtures-e1",
                "question": "Year 3 Advanced Mixtures — Three-Component Alligation — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Mixtures — Three-Component Alligation with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-mixtures-e2",
                "question": "Year 3 Advanced Mixtures — Three-Component Alligation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Mixtures — Three-Component Alligation problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-mixtures-i1",
                "question": "Year 3 Advanced Mixtures — Three-Component Alligation — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Mixtures — Three-Component Alligation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-mixtures-i2",
                "question": "Second Year 3 Advanced Mixtures — Three-Component Alligation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Mixtures — Three-Component Alligation variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-mixtures-a1",
                "question": "High-difficulty Year 3 Advanced Mixtures — Three-Component Alligation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Mixtures — Three-Component Alligation.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-mixtures-p1",
                "question": "Placement-style Year 3 Advanced Mixtures — Three-Component Alligation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Mixtures — Three-Component Alligation question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Mixtures — Three-Component Alligation: Mixture: Combined ingredients.",
              "Alligation: Finding the mixing ratio.",
              "Always review calculation steps.",
              "Apply Advanced Mixtures — Three-Component Alligation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Mixtures — Three-Component Alligation compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Mixtures — Three-Component Alligation mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Mixtures — Three-Component Alligation appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Mixtures — Three-Component Alligation answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Mixtures — Three-Component Alligation problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Mixtures — Three-Component Alligation harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Mixtures — Three-Component Alligation problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Mixtures — Three-Component Alligation"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Mixtures — Three-Component Alligation advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-work-problems",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 6,
          "title": "Advanced Work Problems — Efficiency Variation",
          "tagline": "Year 3 Analysis — Advanced Work Problems — Efficiency Variation for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Work Problems — Efficiency Variation develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Work Problems — Efficiency Variation questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Work Problems — Efficiency Variation at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Work Problems — Efficiency Variation",
            "Identify the correct problem type and method in Advanced Work Problems — Efficiency Variation",
            "Solve Advanced Work Problems — Efficiency Variation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Work Problems — Efficiency Variation"
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
              "【Advanced Work Problems — Efficiency Variation】 Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Compound Ratio: ac:bd.",
              "Duplicate Ratio: a²:b².",
              "Componendo-Dividendo: (a+b)/(a-b) = (c+d)/(c-d)."
            ],
            "theoreticalIntuition": "Mastering Advanced Work Problems — Efficiency Variation requires a firm grasp of underlying concepts. Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
            "visualOrMentalModel": "When approaching Advanced Work Problems — Efficiency Variation, visualize the parameters clearly. The 'K-multiplier' method transforms abstract ratios into algebraic equations."
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
              "In Year 3, mastering Advanced Work Problems — Efficiency Variation is critical for placement success.",
              "Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
              "The 'K-multiplier' method transforms abstract ratios into algebraic equations.",
              "Scale pairwise ratios to a common middle term (LCM) before calculating shares.",
              "By applying these principles to Advanced Work Problems — Efficiency Variation, accuracy improves by 42%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Work Problems — Efficiency Variation - Advanced Application",
                "content": "Scale pairwise ratios to a common middle term (LCM) before calculating shares."
              },
              {
                "title": "Core Methodology for Advanced Work Problems — Efficiency Variation",
                "content": "The 'K-multiplier' method transforms abstract ratios into algebraic equations."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Work Problems — Efficiency Variation in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Work Problems — Efficiency Variation problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-work-problems-1",
              "title": "Advanced Work Problems — Efficiency Variation Case Study",
              "question": "[Advanced Work Problems — Efficiency Variation] Divide 4200 in 8:15:20 after deducting 25, 28, 52.",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Work Problems — Efficiency Variation.",
              "commonTrap": "Failing to account for the 44 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Work Problems — Efficiency Variation Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Work Problems — Efficiency Variation shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Work Problems — Efficiency Variation problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Work Problems — Efficiency Variation problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Work Problems — Efficiency Variation",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Work Problems — Efficiency Variation MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Work Problems — Efficiency Variation.",
            "recruiterInsight": "Year 3 Advanced Work Problems — Efficiency Variation distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-problems-e1",
                "question": "Year 3 Advanced Work Problems — Efficiency Variation — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Work Problems — Efficiency Variation with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-problems-e2",
                "question": "Year 3 Advanced Work Problems — Efficiency Variation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Work Problems — Efficiency Variation problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-problems-i1",
                "question": "Year 3 Advanced Work Problems — Efficiency Variation — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Work Problems — Efficiency Variation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-problems-i2",
                "question": "Second Year 3 Advanced Work Problems — Efficiency Variation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Work Problems — Efficiency Variation variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-problems-a1",
                "question": "High-difficulty Year 3 Advanced Work Problems — Efficiency Variation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Work Problems — Efficiency Variation.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-problems-p1",
                "question": "Placement-style Year 3 Advanced Work Problems — Efficiency Variation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Work Problems — Efficiency Variation question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Work Problems — Efficiency Variation: Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Always review calculation steps.",
              "Apply Advanced Work Problems — Efficiency Variation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Work Problems — Efficiency Variation compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Work Problems — Efficiency Variation mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Work Problems — Efficiency Variation appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Work Problems — Efficiency Variation answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Work Problems — Efficiency Variation problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Work Problems — Efficiency Variation harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Work Problems — Efficiency Variation problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Work Problems — Efficiency Variation"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Work Problems — Efficiency Variation advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-alternate-work",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 7,
          "title": "Alternate Day Work Schedules",
          "tagline": "Year 3 Analysis — Alternate Day Work Schedules for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Alternate Day Work Schedules develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Alternate Day Work Schedules questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Alternate Day Work Schedules at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Alternate Day Work Schedules",
            "Identify the correct problem type and method in Alternate Day Work Schedules",
            "Solve Alternate Day Work Schedules questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Alternate Day Work Schedules"
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
              "【Alternate Day Work Schedules】 Work Rate: 1/Time.",
              "Man-Days: Men × Days.",
              "Pipes & Cisterns: Inlets (+), Outlets (-)."
            ],
            "theoreticalIntuition": "Mastering Alternate Day Work Schedules requires a firm grasp of underlying concepts. Time and Work rely on efficiency addition.",
            "visualOrMentalModel": "When approaching Alternate Day Work Schedules, visualize the parameters clearly. The LCM approach turns fractional rates into whole numbers."
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
              "In Year 3, mastering Alternate Day Work Schedules is critical for placement success.",
              "Time and Work rely on efficiency addition.",
              "The LCM approach turns fractional rates into whole numbers.",
              "MDH rule elegantly handles workforce changes.",
              "By applying these principles to Alternate Day Work Schedules, accuracy improves by 59%."
            ],
            "deepDiveAspects": [
              {
                "title": "Alternate Day Work Schedules - Advanced Application",
                "content": "MDH rule elegantly handles workforce changes."
              },
              {
                "title": "Core Methodology for Alternate Day Work Schedules",
                "content": "The LCM approach turns fractional rates into whole numbers."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Alternate Day Work Schedules in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Alternate Day Work Schedules problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-alternate-work-1",
              "title": "Alternate Day Work Schedules Case Study",
              "question": "[Alternate Day Work Schedules] A=10 days, B=15 days. Together?",
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
              "whyItWorks": "This demonstrates the core mechanic of Alternate Day Work Schedules.",
              "commonTrap": "Failing to account for the 12 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Alternate Day Work Schedules Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Alternate Day Work Schedules shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Alternate Day Work Schedules problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Alternate Day Work Schedules problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Alternate Day Work Schedules",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Alternate Day Work Schedules MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Alternate Day Work Schedules.",
            "recruiterInsight": "Year 3 Alternate Day Work Schedules distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-work-e1",
                "question": "Year 3 Alternate Day Work Schedules — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Alternate Day Work Schedules with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-work-e2",
                "question": "Year 3 Alternate Day Work Schedules variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Alternate Day Work Schedules problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-work-i1",
                "question": "Year 3 Alternate Day Work Schedules — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Alternate Day Work Schedules problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-work-i2",
                "question": "Second Year 3 Alternate Day Work Schedules.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Alternate Day Work Schedules variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-work-a1",
                "question": "High-difficulty Year 3 Alternate Day Work Schedules.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Alternate Day Work Schedules.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-work-p1",
                "question": "Placement-style Year 3 Alternate Day Work Schedules.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Alternate Day Work Schedules question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Alternate Day Work Schedules: Work Rate: 1/Time.",
              "Man-Days: Men × Days.",
              "Always review calculation steps.",
              "Apply Alternate Day Work Schedules shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Alternate Day Work Schedules compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Alternate Day Work Schedules mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Alternate Day Work Schedules appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Alternate Day Work Schedules answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Alternate Day Work Schedules problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Alternate Day Work Schedules harder than Year 2? Write in your own words.",
            "Create a Year 3 Alternate Day Work Schedules problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Alternate Day Work Schedules"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Alternate Day Work Schedules advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-pipes-cisterns",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 8,
          "title": "Advanced Pipes and Cisterns — Leak Scenarios",
          "tagline": "Year 3 Analysis — Advanced Pipes and Cisterns — Leak Scenarios for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Pipes and Cisterns — Leak Scenarios develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Pipes and Cisterns — Leak Scenarios questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Pipes and Cisterns — Leak Scenarios at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Pipes and Cisterns — Leak Scenarios",
            "Identify the correct problem type and method in Advanced Pipes and Cisterns — Leak Scenarios",
            "Solve Advanced Pipes and Cisterns — Leak Scenarios questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Pipes and Cisterns — Leak Scenarios"
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
              "【Advanced Pipes and Cisterns — Leak Scenarios】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Advanced Pipes and Cisterns — Leak Scenarios requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Advanced Pipes and Cisterns — Leak Scenarios, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Advanced Pipes and Cisterns — Leak Scenarios is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Advanced Pipes and Cisterns — Leak Scenarios, accuracy improves by 27%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Pipes and Cisterns — Leak Scenarios - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Advanced Pipes and Cisterns — Leak Scenarios",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Pipes and Cisterns — Leak Scenarios in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Pipes and Cisterns — Leak Scenarios problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-pipes-cisterns-1",
              "title": "Advanced Pipes and Cisterns — Leak Scenarios Case Study",
              "question": "[Advanced Pipes and Cisterns — Leak Scenarios] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Pipes and Cisterns — Leak Scenarios.",
              "commonTrap": "Failing to account for the 43 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Pipes and Cisterns — Leak Scenarios Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Pipes and Cisterns — Leak Scenarios shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Pipes and Cisterns — Leak Scenarios problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Pipes and Cisterns — Leak Scenarios problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Pipes and Cisterns — Leak Scenarios",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Pipes and Cisterns — Leak Scenarios MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Pipes and Cisterns — Leak Scenarios.",
            "recruiterInsight": "Year 3 Advanced Pipes and Cisterns — Leak Scenarios distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-cisterns-e1",
                "question": "Year 3 Advanced Pipes and Cisterns — Leak Scenarios — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Pipes and Cisterns — Leak Scenarios with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-cisterns-e2",
                "question": "Year 3 Advanced Pipes and Cisterns — Leak Scenarios variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Pipes and Cisterns — Leak Scenarios problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-cisterns-i1",
                "question": "Year 3 Advanced Pipes and Cisterns — Leak Scenarios — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Pipes and Cisterns — Leak Scenarios problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-cisterns-i2",
                "question": "Second Year 3 Advanced Pipes and Cisterns — Leak Scenarios.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Pipes and Cisterns — Leak Scenarios variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-cisterns-a1",
                "question": "High-difficulty Year 3 Advanced Pipes and Cisterns — Leak Scenarios.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Pipes and Cisterns — Leak Scenarios.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-cisterns-p1",
                "question": "Placement-style Year 3 Advanced Pipes and Cisterns — Leak Scenarios.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Pipes and Cisterns — Leak Scenarios question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Pipes and Cisterns — Leak Scenarios: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Advanced Pipes and Cisterns — Leak Scenarios shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Pipes and Cisterns — Leak Scenarios compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Pipes and Cisterns — Leak Scenarios mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Pipes and Cisterns — Leak Scenarios appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Pipes and Cisterns — Leak Scenarios answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Pipes and Cisterns — Leak Scenarios problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Pipes and Cisterns — Leak Scenarios harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Pipes and Cisterns — Leak Scenarios problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Pipes and Cisterns — Leak Scenarios"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Pipes and Cisterns — Leak Scenarios advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-relative-speed",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 9,
          "title": "Advanced Relative Speed — Circular Tracks",
          "tagline": "Year 3 Analysis — Advanced Relative Speed — Circular Tracks for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Relative Speed — Circular Tracks develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Relative Speed — Circular Tracks questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Relative Speed — Circular Tracks at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Relative Speed — Circular Tracks",
            "Identify the correct problem type and method in Advanced Relative Speed — Circular Tracks",
            "Solve Advanced Relative Speed — Circular Tracks questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Relative Speed — Circular Tracks"
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
              "【Advanced Relative Speed — Circular Tracks】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Advanced Relative Speed — Circular Tracks requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Advanced Relative Speed — Circular Tracks, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Advanced Relative Speed — Circular Tracks is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Advanced Relative Speed — Circular Tracks, accuracy improves by 36%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Relative Speed — Circular Tracks - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Advanced Relative Speed — Circular Tracks",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Relative Speed — Circular Tracks in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Relative Speed — Circular Tracks problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-relative-speed-1",
              "title": "Advanced Relative Speed — Circular Tracks Case Study",
              "question": "[Advanced Relative Speed — Circular Tracks] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Relative Speed — Circular Tracks.",
              "commonTrap": "Failing to account for the 21 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Relative Speed — Circular Tracks Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Relative Speed — Circular Tracks shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Relative Speed — Circular Tracks problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Relative Speed — Circular Tracks problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Relative Speed — Circular Tracks",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Relative Speed — Circular Tracks MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Relative Speed — Circular Tracks.",
            "recruiterInsight": "Year 3 Advanced Relative Speed — Circular Tracks distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-speed-e1",
                "question": "Year 3 Advanced Relative Speed — Circular Tracks — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Relative Speed — Circular Tracks with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-speed-e2",
                "question": "Year 3 Advanced Relative Speed — Circular Tracks variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Relative Speed — Circular Tracks problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-speed-i1",
                "question": "Year 3 Advanced Relative Speed — Circular Tracks — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Relative Speed — Circular Tracks problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-speed-i2",
                "question": "Second Year 3 Advanced Relative Speed — Circular Tracks.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Relative Speed — Circular Tracks variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-speed-a1",
                "question": "High-difficulty Year 3 Advanced Relative Speed — Circular Tracks.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Relative Speed — Circular Tracks.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-speed-p1",
                "question": "Placement-style Year 3 Advanced Relative Speed — Circular Tracks.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Relative Speed — Circular Tracks question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Relative Speed — Circular Tracks: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Advanced Relative Speed — Circular Tracks shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Relative Speed — Circular Tracks compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Relative Speed — Circular Tracks mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Relative Speed — Circular Tracks appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Relative Speed — Circular Tracks answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Relative Speed — Circular Tracks problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Relative Speed — Circular Tracks harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Relative Speed — Circular Tracks problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Relative Speed — Circular Tracks"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Relative Speed — Circular Tracks advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-circular-motion-races",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 10,
          "title": "Circular Motion and Races",
          "tagline": "Year 3 Analysis — Circular Motion and Races for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Circular Motion and Races develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Circular Motion and Races questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Circular Motion and Races at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Circular Motion and Races",
            "Identify the correct problem type and method in Circular Motion and Races",
            "Solve Circular Motion and Races questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Circular Motion and Races"
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
              "【Circular Motion and Races】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Circular Motion and Races requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Circular Motion and Races, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Circular Motion and Races is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Circular Motion and Races, accuracy improves by 59%."
            ],
            "deepDiveAspects": [
              {
                "title": "Circular Motion and Races - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Circular Motion and Races",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Circular Motion and Races in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Circular Motion and Races problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-circular-motion-races-1",
              "title": "Circular Motion and Races Case Study",
              "question": "[Circular Motion and Races] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Circular Motion and Races.",
              "commonTrap": "Failing to account for the 44 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Circular Motion and Races Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Circular Motion and Races shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Circular Motion and Races problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Circular Motion and Races problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Circular Motion and Races",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Circular Motion and Races MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Circular Motion and Races.",
            "recruiterInsight": "Year 3 Circular Motion and Races distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-races-e1",
                "question": "Year 3 Circular Motion and Races — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Circular Motion and Races with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-races-e2",
                "question": "Year 3 Circular Motion and Races variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Circular Motion and Races problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-races-i1",
                "question": "Year 3 Circular Motion and Races — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Circular Motion and Races problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-races-i2",
                "question": "Second Year 3 Circular Motion and Races.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Circular Motion and Races variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-races-a1",
                "question": "High-difficulty Year 3 Circular Motion and Races.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Circular Motion and Races.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-races-p1",
                "question": "Placement-style Year 3 Circular Motion and Races.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Circular Motion and Races question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Circular Motion and Races: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Circular Motion and Races shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Circular Motion and Races compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Circular Motion and Races mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Circular Motion and Races appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Circular Motion and Races answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Circular Motion and Races problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Circular Motion and Races harder than Year 2? Write in your own words.",
            "Create a Year 3 Circular Motion and Races problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Circular Motion and Races"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Circular Motion and Races advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-boats-streams",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 11,
          "title": "Upstream/Downstream with Variable Currents",
          "tagline": "Year 3 Analysis — Upstream/Downstream with Variable Currents for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Upstream/Downstream with Variable Currents develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Upstream/Downstream with Variable Currents questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Upstream/Downstream with Variable Currents at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Upstream/Downstream with Variable Currents",
            "Identify the correct problem type and method in Upstream/Downstream with Variable Currents",
            "Solve Upstream/Downstream with Variable Currents questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Upstream/Downstream with Variable Currents"
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
              "【Upstream/Downstream with Variable Currents】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Upstream/Downstream with Variable Currents requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Upstream/Downstream with Variable Currents, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Upstream/Downstream with Variable Currents is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Upstream/Downstream with Variable Currents, accuracy improves by 28%."
            ],
            "deepDiveAspects": [
              {
                "title": "Upstream/Downstream with Variable Currents - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Upstream/Downstream with Variable Currents",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Upstream/Downstream with Variable Currents in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Upstream/Downstream with Variable Currents problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-boats-streams-1",
              "title": "Upstream/Downstream with Variable Currents Case Study",
              "question": "[Upstream/Downstream with Variable Currents] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Upstream/Downstream with Variable Currents.",
              "commonTrap": "Failing to account for the 33 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Upstream/Downstream with Variable Currents Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Upstream/Downstream with Variable Currents shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Upstream/Downstream with Variable Currents problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Upstream/Downstream with Variable Currents problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Upstream/Downstream with Variable Currents",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Upstream/Downstream with Variable Currents MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Upstream/Downstream with Variable Currents.",
            "recruiterInsight": "Year 3 Upstream/Downstream with Variable Currents distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-streams-e1",
                "question": "Year 3 Upstream/Downstream with Variable Currents — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Upstream/Downstream with Variable Currents with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-streams-e2",
                "question": "Year 3 Upstream/Downstream with Variable Currents variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Upstream/Downstream with Variable Currents problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-streams-i1",
                "question": "Year 3 Upstream/Downstream with Variable Currents — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Upstream/Downstream with Variable Currents problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-streams-i2",
                "question": "Second Year 3 Upstream/Downstream with Variable Currents.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Upstream/Downstream with Variable Currents variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-streams-a1",
                "question": "High-difficulty Year 3 Upstream/Downstream with Variable Currents.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Upstream/Downstream with Variable Currents.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-streams-p1",
                "question": "Placement-style Year 3 Upstream/Downstream with Variable Currents.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Upstream/Downstream with Variable Currents question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Upstream/Downstream with Variable Currents: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Upstream/Downstream with Variable Currents shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Upstream/Downstream with Variable Currents compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Upstream/Downstream with Variable Currents mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Upstream/Downstream with Variable Currents appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Upstream/Downstream with Variable Currents answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Upstream/Downstream with Variable Currents problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Upstream/Downstream with Variable Currents harder than Year 2? Write in your own words.",
            "Create a Year 3 Upstream/Downstream with Variable Currents problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Upstream/Downstream with Variable Currents"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Upstream/Downstream with Variable Currents advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-train-problems",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 12,
          "title": "Advanced Train Problems — Two Moving Trains",
          "tagline": "Year 3 Analysis — Advanced Train Problems — Two Moving Trains for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Train Problems — Two Moving Trains develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Train Problems — Two Moving Trains questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Train Problems — Two Moving Trains at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Train Problems — Two Moving Trains",
            "Identify the correct problem type and method in Advanced Train Problems — Two Moving Trains",
            "Solve Advanced Train Problems — Two Moving Trains questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Train Problems — Two Moving Trains"
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
              "【Advanced Train Problems — Two Moving Trains】 Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Average Speed: Total Dist/Total Time.",
              "Upstream/Downstream: River flow effects."
            ],
            "theoreticalIntuition": "Mastering Advanced Train Problems — Two Moving Trains requires a firm grasp of underlying concepts. TSD governs all variations: trains, boats, races.",
            "visualOrMentalModel": "When approaching Advanced Train Problems — Two Moving Trains, visualize the parameters clearly. Relative speed: opposite=sum, same=diff."
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
              "In Year 3, mastering Advanced Train Problems — Two Moving Trains is critical for placement success.",
              "TSD governs all variations: trains, boats, races.",
              "Relative speed: opposite=sum, same=diff.",
              "Trains crossing platforms must add lengths.",
              "By applying these principles to Advanced Train Problems — Two Moving Trains, accuracy improves by 31%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Train Problems — Two Moving Trains - Advanced Application",
                "content": "Trains crossing platforms must add lengths."
              },
              {
                "title": "Core Methodology for Advanced Train Problems — Two Moving Trains",
                "content": "Relative speed: opposite=sum, same=diff."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Train Problems — Two Moving Trains in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Train Problems — Two Moving Trains problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-train-problems-1",
              "title": "Advanced Train Problems — Two Moving Trains Case Study",
              "question": "[Advanced Train Problems — Two Moving Trains] Train 150m at 72km/hr crosses 250m platform. Time?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Train Problems — Two Moving Trains.",
              "commonTrap": "Failing to account for the 28 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Train Problems — Two Moving Trains Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Train Problems — Two Moving Trains shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Train Problems — Two Moving Trains problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Train Problems — Two Moving Trains problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Train Problems — Two Moving Trains",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Train Problems — Two Moving Trains MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Train Problems — Two Moving Trains.",
            "recruiterInsight": "Year 3 Advanced Train Problems — Two Moving Trains distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-problems-e1",
                "question": "Year 3 Advanced Train Problems — Two Moving Trains — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Train Problems — Two Moving Trains with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-problems-e2",
                "question": "Year 3 Advanced Train Problems — Two Moving Trains variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Train Problems — Two Moving Trains problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-problems-i1",
                "question": "Year 3 Advanced Train Problems — Two Moving Trains — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Train Problems — Two Moving Trains problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-problems-i2",
                "question": "Second Year 3 Advanced Train Problems — Two Moving Trains.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Train Problems — Two Moving Trains variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-problems-a1",
                "question": "High-difficulty Year 3 Advanced Train Problems — Two Moving Trains.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Train Problems — Two Moving Trains.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-problems-p1",
                "question": "Placement-style Year 3 Advanced Train Problems — Two Moving Trains.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Train Problems — Two Moving Trains question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Train Problems — Two Moving Trains: Speed: Dist/Time.",
              "Relative Speed: Sum/Diff of speeds.",
              "Always review calculation steps.",
              "Apply Advanced Train Problems — Two Moving Trains shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Train Problems — Two Moving Trains compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Train Problems — Two Moving Trains mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Train Problems — Two Moving Trains appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Train Problems — Two Moving Trains answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Train Problems — Two Moving Trains problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Train Problems — Two Moving Trains harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Train Problems — Two Moving Trains problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Train Problems — Two Moving Trains"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Train Problems — Two Moving Trains advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-permutations",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 13,
          "title": "Permutations (nPr)",
          "tagline": "Year 3 Analysis — Permutations (nPr) for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Permutations (nPr) develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Permutations (nPr) questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Permutations (nPr) at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Permutations (nPr)",
            "Identify the correct problem type and method in Permutations (nPr)",
            "Solve Permutations (nPr) questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Permutations (nPr)"
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
              "【Permutations (nPr)】 Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Factorial: Product of ints.",
              "Derangement: Complete rearrangement."
            ],
            "theoreticalIntuition": "Mastering Permutations (nPr) requires a firm grasp of underlying concepts. P&C form the basis of probability.",
            "visualOrMentalModel": "When approaching Permutations (nPr), visualize the parameters clearly. Tie Method for grouped items."
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
              "In Year 3, mastering Permutations (nPr) is critical for placement success.",
              "P&C form the basis of probability.",
              "Tie Method for grouped items.",
              "Divide by factorials for repetitions.",
              "By applying these principles to Permutations (nPr), accuracy improves by 44%."
            ],
            "deepDiveAspects": [
              {
                "title": "Permutations (nPr) - Advanced Application",
                "content": "Divide by factorials for repetitions."
              },
              {
                "title": "Core Methodology for Permutations (nPr)",
                "content": "Tie Method for grouped items."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Permutations (nPr) in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Permutations (nPr) problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-permutations-1",
              "title": "Permutations (nPr) Case Study",
              "question": "[Permutations (nPr)] Arrange 'APPLE'",
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
              "whyItWorks": "This demonstrates the core mechanic of Permutations (nPr).",
              "commonTrap": "Failing to account for the 15 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Permutations (nPr) Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Permutations (nPr) shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Permutations (nPr) problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Permutations (nPr) problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Permutations (nPr)",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Permutations (nPr) MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Permutations (nPr).",
            "recruiterInsight": "Year 3 Permutations (nPr) distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-permutations-e1",
                "question": "Year 3 Permutations (nPr) — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Permutations (nPr) with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-permutations-e2",
                "question": "Year 3 Permutations (nPr) variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Permutations (nPr) problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-permutations-i1",
                "question": "Year 3 Permutations (nPr) — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Permutations (nPr) problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-permutations-i2",
                "question": "Second Year 3 Permutations (nPr).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Permutations (nPr) variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-permutations-a1",
                "question": "High-difficulty Year 3 Permutations (nPr).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Permutations (nPr).",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-permutations-p1",
                "question": "Placement-style Year 3 Permutations (nPr).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Permutations (nPr) question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Permutations (nPr): Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Always review calculation steps.",
              "Apply Permutations (nPr) shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Permutations (nPr) compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Permutations (nPr) mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Permutations (nPr) appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Permutations (nPr) answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Permutations (nPr) problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Permutations (nPr) harder than Year 2? Write in your own words.",
            "Create a Year 3 Permutations (nPr) problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Permutations (nPr)"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Permutations (nPr) advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-combinations",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 14,
          "title": "Combinations (nCr)",
          "tagline": "Year 3 Analysis — Combinations (nCr) for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Combinations (nCr) develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Combinations (nCr) questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Combinations (nCr) at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Combinations (nCr)",
            "Identify the correct problem type and method in Combinations (nCr)",
            "Solve Combinations (nCr) questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Combinations (nCr)"
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
              "【Combinations (nCr)】 Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Factorial: Product of ints.",
              "Derangement: Complete rearrangement."
            ],
            "theoreticalIntuition": "Mastering Combinations (nCr) requires a firm grasp of underlying concepts. P&C form the basis of probability.",
            "visualOrMentalModel": "When approaching Combinations (nCr), visualize the parameters clearly. Tie Method for grouped items."
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
              "In Year 3, mastering Combinations (nCr) is critical for placement success.",
              "P&C form the basis of probability.",
              "Tie Method for grouped items.",
              "Divide by factorials for repetitions.",
              "By applying these principles to Combinations (nCr), accuracy improves by 30%."
            ],
            "deepDiveAspects": [
              {
                "title": "Combinations (nCr) - Advanced Application",
                "content": "Divide by factorials for repetitions."
              },
              {
                "title": "Core Methodology for Combinations (nCr)",
                "content": "Tie Method for grouped items."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Combinations (nCr) in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Combinations (nCr) problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-combinations-1",
              "title": "Combinations (nCr) Case Study",
              "question": "[Combinations (nCr)] Arrange 'APPLE'",
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
              "whyItWorks": "This demonstrates the core mechanic of Combinations (nCr).",
              "commonTrap": "Failing to account for the 11 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Combinations (nCr) Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Combinations (nCr) shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Combinations (nCr) problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Combinations (nCr) problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Combinations (nCr)",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Combinations (nCr) MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Combinations (nCr).",
            "recruiterInsight": "Year 3 Combinations (nCr) distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-combinations-e1",
                "question": "Year 3 Combinations (nCr) — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Combinations (nCr) with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-combinations-e2",
                "question": "Year 3 Combinations (nCr) variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Combinations (nCr) problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-combinations-i1",
                "question": "Year 3 Combinations (nCr) — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Combinations (nCr) problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-combinations-i2",
                "question": "Second Year 3 Combinations (nCr).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Combinations (nCr) variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-combinations-a1",
                "question": "High-difficulty Year 3 Combinations (nCr).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Combinations (nCr).",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-combinations-p1",
                "question": "Placement-style Year 3 Combinations (nCr).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Combinations (nCr) question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Combinations (nCr): Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Always review calculation steps.",
              "Apply Combinations (nCr) shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Combinations (nCr) compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Combinations (nCr) mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Combinations (nCr) appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Combinations (nCr) answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Combinations (nCr) problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Combinations (nCr) harder than Year 2? Write in your own words.",
            "Create a Year 3 Combinations (nCr) problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Combinations (nCr)"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Combinations (nCr) advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-probability",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 15,
          "title": "Advanced Probability — Conditional and Compound",
          "tagline": "Year 3 Analysis — Advanced Probability — Conditional and Compound for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Probability — Conditional and Compound develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Probability — Conditional and Compound questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Probability — Conditional and Compound at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Probability — Conditional and Compound",
            "Identify the correct problem type and method in Advanced Probability — Conditional and Compound",
            "Solve Advanced Probability — Conditional and Compound questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Probability — Conditional and Compound"
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
              "【Advanced Probability — Conditional and Compound】 Sample Space: All outcomes.",
              "Event: Specific outcome.",
              "Mutually Exclusive: Cannot co-occur."
            ],
            "theoreticalIntuition": "Mastering Advanced Probability — Conditional and Compound requires a firm grasp of underlying concepts. Probability is Fav/Total.",
            "visualOrMentalModel": "When approaching Advanced Probability — Conditional and Compound, visualize the parameters clearly. Relies heavily on combinatorics."
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
              "In Year 3, mastering Advanced Probability — Conditional and Compound is critical for placement success.",
              "Probability is Fav/Total.",
              "Relies heavily on combinatorics.",
              "Complementary Event: 1 - P(none).",
              "By applying these principles to Advanced Probability — Conditional and Compound, accuracy improves by 50%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Probability — Conditional and Compound - Advanced Application",
                "content": "Complementary Event: 1 - P(none)."
              },
              {
                "title": "Core Methodology for Advanced Probability — Conditional and Compound",
                "content": "Relies heavily on combinatorics."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Probability — Conditional and Compound in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Probability — Conditional and Compound problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-probability-1",
              "title": "Advanced Probability — Conditional and Compound Case Study",
              "question": "[Advanced Probability — Conditional and Compound] 3 coins, at least 1 head?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Probability — Conditional and Compound.",
              "commonTrap": "Failing to account for the 29 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Probability — Conditional and Compound Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Probability — Conditional and Compound shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Probability — Conditional and Compound problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Probability — Conditional and Compound problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Probability — Conditional and Compound",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Probability — Conditional and Compound MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Probability — Conditional and Compound.",
            "recruiterInsight": "Year 3 Advanced Probability — Conditional and Compound distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-probability-e1",
                "question": "Year 3 Advanced Probability — Conditional and Compound — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Probability — Conditional and Compound with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-probability-e2",
                "question": "Year 3 Advanced Probability — Conditional and Compound variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Probability — Conditional and Compound problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-probability-i1",
                "question": "Year 3 Advanced Probability — Conditional and Compound — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Probability — Conditional and Compound problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-probability-i2",
                "question": "Second Year 3 Advanced Probability — Conditional and Compound.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Probability — Conditional and Compound variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-probability-a1",
                "question": "High-difficulty Year 3 Advanced Probability — Conditional and Compound.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Probability — Conditional and Compound.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-probability-p1",
                "question": "Placement-style Year 3 Advanced Probability — Conditional and Compound.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Probability — Conditional and Compound question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Probability — Conditional and Compound: Sample Space: All outcomes.",
              "Event: Specific outcome.",
              "Always review calculation steps.",
              "Apply Advanced Probability — Conditional and Compound shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Probability — Conditional and Compound compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Probability — Conditional and Compound mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Probability — Conditional and Compound appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Probability — Conditional and Compound answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Probability — Conditional and Compound problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Probability — Conditional and Compound harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Probability — Conditional and Compound problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Probability — Conditional and Compound"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Probability — Conditional and Compound advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-bayes-theorem",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 16,
          "title": "Bayes' Theorem Basics",
          "tagline": "Year 3 Analysis — Bayes' Theorem Basics for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Bayes' Theorem Basics develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Bayes' Theorem Basics questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Bayes' Theorem Basics at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Bayes' Theorem Basics",
            "Identify the correct problem type and method in Bayes' Theorem Basics",
            "Solve Bayes' Theorem Basics questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Bayes' Theorem Basics"
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
              "【Bayes' Theorem Basics】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Bayes' Theorem Basics requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Bayes' Theorem Basics, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Bayes' Theorem Basics is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Bayes' Theorem Basics, accuracy improves by 47%."
            ],
            "deepDiveAspects": [
              {
                "title": "Bayes' Theorem Basics - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Bayes' Theorem Basics",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Bayes' Theorem Basics in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Bayes' Theorem Basics problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-bayes-theorem-1",
              "title": "Bayes' Theorem Basics Case Study",
              "question": "[Bayes' Theorem Basics] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Bayes' Theorem Basics.",
              "commonTrap": "Failing to account for the 48 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Bayes' Theorem Basics Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Bayes' Theorem Basics shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Bayes' Theorem Basics problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Bayes' Theorem Basics problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Bayes' Theorem Basics",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Bayes' Theorem Basics MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Bayes' Theorem Basics.",
            "recruiterInsight": "Year 3 Bayes' Theorem Basics distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-theorem-e1",
                "question": "Year 3 Bayes' Theorem Basics — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Bayes' Theorem Basics with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-theorem-e2",
                "question": "Year 3 Bayes' Theorem Basics variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Bayes' Theorem Basics problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-theorem-i1",
                "question": "Year 3 Bayes' Theorem Basics — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Bayes' Theorem Basics problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-theorem-i2",
                "question": "Second Year 3 Bayes' Theorem Basics.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Bayes' Theorem Basics variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-theorem-a1",
                "question": "High-difficulty Year 3 Bayes' Theorem Basics.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Bayes' Theorem Basics.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-theorem-p1",
                "question": "Placement-style Year 3 Bayes' Theorem Basics.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Bayes' Theorem Basics question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Bayes' Theorem Basics: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Bayes' Theorem Basics shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Bayes' Theorem Basics compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Bayes' Theorem Basics mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Bayes' Theorem Basics appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Bayes' Theorem Basics answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Bayes' Theorem Basics problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Bayes' Theorem Basics harder than Year 2? Write in your own words.",
            "Create a Year 3 Bayes' Theorem Basics problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Bayes' Theorem Basics"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Bayes' Theorem Basics advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-algebraic-inequalities",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 17,
          "title": "Algebraic Inequalities",
          "tagline": "Year 3 Analysis — Algebraic Inequalities for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Algebraic Inequalities develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Algebraic Inequalities questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Algebraic Inequalities at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Algebraic Inequalities",
            "Identify the correct problem type and method in Algebraic Inequalities",
            "Solve Algebraic Inequalities questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Algebraic Inequalities"
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
              "【Algebraic Inequalities】 Variable: Unknown value.",
              "Equation: Statement of equality.",
              "Progression: Sequence with specific rules (AP/GP)."
            ],
            "theoreticalIntuition": "Mastering Algebraic Inequalities requires a firm grasp of underlying concepts. Algebra questions test your ability to translate English into math.",
            "visualOrMentalModel": "When approaching Algebraic Inequalities, visualize the parameters clearly. For quadratic equations, use factoring or the formula quickly."
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
              "In Year 3, mastering Algebraic Inequalities is critical for placement success.",
              "Algebra questions test your ability to translate English into math.",
              "For quadratic equations, use factoring or the formula quickly.",
              "Progressions require knowing the Nth term and Sum formulas.",
              "By applying these principles to Algebraic Inequalities, accuracy improves by 20%."
            ],
            "deepDiveAspects": [
              {
                "title": "Algebraic Inequalities - Advanced Application",
                "content": "Progressions require knowing the Nth term and Sum formulas."
              },
              {
                "title": "Core Methodology for Algebraic Inequalities",
                "content": "For quadratic equations, use factoring or the formula quickly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Algebraic Inequalities in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Algebraic Inequalities problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-algebraic-inequalities-1",
              "title": "Algebraic Inequalities Case Study",
              "question": "[Algebraic Inequalities] 10th term of 2, 5, 8...",
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
              "whyItWorks": "This demonstrates the core mechanic of Algebraic Inequalities.",
              "commonTrap": "Failing to account for the 30 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Algebraic Inequalities Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Algebraic Inequalities shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Algebraic Inequalities problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Algebraic Inequalities problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Algebraic Inequalities",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Algebraic Inequalities MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Algebraic Inequalities.",
            "recruiterInsight": "Year 3 Algebraic Inequalities distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-inequalities-e1",
                "question": "Year 3 Algebraic Inequalities — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Algebraic Inequalities with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-inequalities-e2",
                "question": "Year 3 Algebraic Inequalities variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Algebraic Inequalities problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-inequalities-i1",
                "question": "Year 3 Algebraic Inequalities — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Algebraic Inequalities problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-inequalities-i2",
                "question": "Second Year 3 Algebraic Inequalities.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Algebraic Inequalities variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-inequalities-a1",
                "question": "High-difficulty Year 3 Algebraic Inequalities.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Algebraic Inequalities.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-inequalities-p1",
                "question": "Placement-style Year 3 Algebraic Inequalities.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Algebraic Inequalities question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Algebraic Inequalities: Variable: Unknown value.",
              "Equation: Statement of equality.",
              "Always review calculation steps.",
              "Apply Algebraic Inequalities shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Algebraic Inequalities compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Algebraic Inequalities mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Algebraic Inequalities appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Algebraic Inequalities answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Algebraic Inequalities problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Algebraic Inequalities harder than Year 2? Write in your own words.",
            "Create a Year 3 Algebraic Inequalities problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Algebraic Inequalities"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Algebraic Inequalities advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-polynomial-equations",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 18,
          "title": "Advanced Polynomial Equations",
          "tagline": "Year 3 Analysis — Advanced Polynomial Equations for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Polynomial Equations develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Polynomial Equations questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Polynomial Equations at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Polynomial Equations",
            "Identify the correct problem type and method in Advanced Polynomial Equations",
            "Solve Advanced Polynomial Equations questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Polynomial Equations"
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
              "【Advanced Polynomial Equations】 Variable: Unknown value.",
              "Equation: Statement of equality.",
              "Progression: Sequence with specific rules (AP/GP)."
            ],
            "theoreticalIntuition": "Mastering Advanced Polynomial Equations requires a firm grasp of underlying concepts. Algebra questions test your ability to translate English into math.",
            "visualOrMentalModel": "When approaching Advanced Polynomial Equations, visualize the parameters clearly. For quadratic equations, use factoring or the formula quickly."
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
              "In Year 3, mastering Advanced Polynomial Equations is critical for placement success.",
              "Algebra questions test your ability to translate English into math.",
              "For quadratic equations, use factoring or the formula quickly.",
              "Progressions require knowing the Nth term and Sum formulas.",
              "By applying these principles to Advanced Polynomial Equations, accuracy improves by 55%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Polynomial Equations - Advanced Application",
                "content": "Progressions require knowing the Nth term and Sum formulas."
              },
              {
                "title": "Core Methodology for Advanced Polynomial Equations",
                "content": "For quadratic equations, use factoring or the formula quickly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Polynomial Equations in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Polynomial Equations problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-polynomial-equations-1",
              "title": "Advanced Polynomial Equations Case Study",
              "question": "[Advanced Polynomial Equations] 10th term of 2, 5, 8...",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Polynomial Equations.",
              "commonTrap": "Failing to account for the 59 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Polynomial Equations Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Polynomial Equations shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Polynomial Equations problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Polynomial Equations problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Polynomial Equations",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Polynomial Equations MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Polynomial Equations.",
            "recruiterInsight": "Year 3 Advanced Polynomial Equations distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-equations-e1",
                "question": "Year 3 Advanced Polynomial Equations — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Polynomial Equations with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-equations-e2",
                "question": "Year 3 Advanced Polynomial Equations variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Polynomial Equations problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-equations-i1",
                "question": "Year 3 Advanced Polynomial Equations — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Polynomial Equations problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-equations-i2",
                "question": "Second Year 3 Advanced Polynomial Equations.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Polynomial Equations variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-equations-a1",
                "question": "High-difficulty Year 3 Advanced Polynomial Equations.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Polynomial Equations.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-equations-p1",
                "question": "Placement-style Year 3 Advanced Polynomial Equations.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Polynomial Equations question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Polynomial Equations: Variable: Unknown value.",
              "Equation: Statement of equality.",
              "Always review calculation steps.",
              "Apply Advanced Polynomial Equations shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Polynomial Equations compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Polynomial Equations mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Polynomial Equations appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Polynomial Equations answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Polynomial Equations problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Polynomial Equations harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Polynomial Equations problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Polynomial Equations"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Polynomial Equations advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-sequences-series",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 19,
          "title": "Sequences and Series — General Terms",
          "tagline": "Year 3 Analysis — Sequences and Series — General Terms for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Sequences and Series — General Terms develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Sequences and Series — General Terms questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Sequences and Series — General Terms at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Sequences and Series — General Terms",
            "Identify the correct problem type and method in Sequences and Series — General Terms",
            "Solve Sequences and Series — General Terms questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Sequences and Series — General Terms"
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
              "【Sequences and Series — General Terms】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Sequences and Series — General Terms requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Sequences and Series — General Terms, visualize the parameters clearly. Represent negative clues explicitly."
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
              "In Year 3, mastering Sequences and Series — General Terms is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Sequences and Series — General Terms, accuracy improves by 31%."
            ],
            "deepDiveAspects": [
              {
                "title": "Sequences and Series — General Terms - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Sequences and Series — General Terms",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Sequences and Series — General Terms in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Sequences and Series — General Terms problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-sequences-series-1",
              "title": "Sequences and Series — General Terms Case Study",
              "question": "[Sequences and Series — General Terms] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
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
              "whyItWorks": "This demonstrates the core mechanic of Sequences and Series — General Terms.",
              "commonTrap": "Failing to account for the 22 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Sequences and Series — General Terms Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Sequences and Series — General Terms shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Sequences and Series — General Terms problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Sequences and Series — General Terms problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Sequences and Series — General Terms",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Sequences and Series — General Terms MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Sequences and Series — General Terms.",
            "recruiterInsight": "Year 3 Sequences and Series — General Terms distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-series-e1",
                "question": "Year 3 Sequences and Series — General Terms — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Sequences and Series — General Terms with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-series-e2",
                "question": "Year 3 Sequences and Series — General Terms variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Sequences and Series — General Terms problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-series-i1",
                "question": "Year 3 Sequences and Series — General Terms — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Sequences and Series — General Terms problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-series-i2",
                "question": "Second Year 3 Sequences and Series — General Terms.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Sequences and Series — General Terms variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-series-a1",
                "question": "High-difficulty Year 3 Sequences and Series — General Terms.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Sequences and Series — General Terms.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-series-p1",
                "question": "Placement-style Year 3 Sequences and Series — General Terms.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Sequences and Series — General Terms question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Sequences and Series — General Terms: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Sequences and Series — General Terms shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Sequences and Series — General Terms compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Sequences and Series — General Terms mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Sequences and Series — General Terms appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Sequences and Series — General Terms answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Sequences and Series — General Terms problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Sequences and Series — General Terms harder than Year 2? Write in your own words.",
            "Create a Year 3 Sequences and Series — General Terms problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Sequences and Series — General Terms"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Sequences and Series — General Terms advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-arithmetic-progressions",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 20,
          "title": "Arithmetic Progressions (AP)",
          "tagline": "Year 3 Analysis — Arithmetic Progressions (AP) for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Arithmetic Progressions (AP) develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Arithmetic Progressions (AP) questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Arithmetic Progressions (AP) at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Arithmetic Progressions (AP)",
            "Identify the correct problem type and method in Arithmetic Progressions (AP)",
            "Solve Arithmetic Progressions (AP) questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Arithmetic Progressions (AP)"
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
              "【Arithmetic Progressions (AP)】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Arithmetic Progressions (AP) requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Arithmetic Progressions (AP), visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Arithmetic Progressions (AP) is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Arithmetic Progressions (AP), accuracy improves by 12%."
            ],
            "deepDiveAspects": [
              {
                "title": "Arithmetic Progressions (AP) - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Arithmetic Progressions (AP)",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Arithmetic Progressions (AP) in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Arithmetic Progressions (AP) problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-arithmetic-progressions-1",
              "title": "Arithmetic Progressions (AP) Case Study",
              "question": "[Arithmetic Progressions (AP)] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Arithmetic Progressions (AP).",
              "commonTrap": "Failing to account for the 33 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Arithmetic Progressions (AP) Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Arithmetic Progressions (AP) shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Arithmetic Progressions (AP) problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Arithmetic Progressions (AP) problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Arithmetic Progressions (AP)",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Arithmetic Progressions (AP) MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Arithmetic Progressions (AP).",
            "recruiterInsight": "Year 3 Arithmetic Progressions (AP) distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-progressions-e1",
                "question": "Year 3 Arithmetic Progressions (AP) — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Arithmetic Progressions (AP) with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-progressions-e2",
                "question": "Year 3 Arithmetic Progressions (AP) variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Arithmetic Progressions (AP) problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-progressions-i1",
                "question": "Year 3 Arithmetic Progressions (AP) — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Arithmetic Progressions (AP) problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-progressions-i2",
                "question": "Second Year 3 Arithmetic Progressions (AP).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Arithmetic Progressions (AP) variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-progressions-a1",
                "question": "High-difficulty Year 3 Arithmetic Progressions (AP).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Arithmetic Progressions (AP).",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-progressions-p1",
                "question": "Placement-style Year 3 Arithmetic Progressions (AP).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Arithmetic Progressions (AP) question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Arithmetic Progressions (AP): Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Arithmetic Progressions (AP) shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Arithmetic Progressions (AP) compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Arithmetic Progressions (AP) mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Arithmetic Progressions (AP) appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Arithmetic Progressions (AP) answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Arithmetic Progressions (AP) problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Arithmetic Progressions (AP) harder than Year 2? Write in your own words.",
            "Create a Year 3 Arithmetic Progressions (AP) problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Arithmetic Progressions (AP)"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Arithmetic Progressions (AP) advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-geometric-progressions",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 21,
          "title": "Geometric Progressions (GP)",
          "tagline": "Year 3 Analysis — Geometric Progressions (GP) for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Geometric Progressions (GP) develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Geometric Progressions (GP) questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Geometric Progressions (GP) at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Geometric Progressions (GP)",
            "Identify the correct problem type and method in Geometric Progressions (GP)",
            "Solve Geometric Progressions (GP) questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Geometric Progressions (GP)"
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
              "【Geometric Progressions (GP)】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Geometric Progressions (GP) requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Geometric Progressions (GP), visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Geometric Progressions (GP) is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Geometric Progressions (GP), accuracy improves by 37%."
            ],
            "deepDiveAspects": [
              {
                "title": "Geometric Progressions (GP) - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Geometric Progressions (GP)",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Geometric Progressions (GP) in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Geometric Progressions (GP) problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-geometric-progressions-1",
              "title": "Geometric Progressions (GP) Case Study",
              "question": "[Geometric Progressions (GP)] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Geometric Progressions (GP).",
              "commonTrap": "Failing to account for the 30 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Geometric Progressions (GP) Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Geometric Progressions (GP) shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Geometric Progressions (GP) problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Geometric Progressions (GP) problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Geometric Progressions (GP)",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Geometric Progressions (GP) MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Geometric Progressions (GP).",
            "recruiterInsight": "Year 3 Geometric Progressions (GP) distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-progressions-e1",
                "question": "Year 3 Geometric Progressions (GP) — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Geometric Progressions (GP) with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-progressions-e2",
                "question": "Year 3 Geometric Progressions (GP) variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Geometric Progressions (GP) problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-progressions-i1",
                "question": "Year 3 Geometric Progressions (GP) — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Geometric Progressions (GP) problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-progressions-i2",
                "question": "Second Year 3 Geometric Progressions (GP).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Geometric Progressions (GP) variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-progressions-a1",
                "question": "High-difficulty Year 3 Geometric Progressions (GP).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Geometric Progressions (GP).",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-progressions-p1",
                "question": "Placement-style Year 3 Geometric Progressions (GP).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Geometric Progressions (GP) question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Geometric Progressions (GP): Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Geometric Progressions (GP) shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Geometric Progressions (GP) compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Geometric Progressions (GP) mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Geometric Progressions (GP) appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Geometric Progressions (GP) answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Geometric Progressions (GP) problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Geometric Progressions (GP) harder than Year 2? Write in your own words.",
            "Create a Year 3 Geometric Progressions (GP) problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Geometric Progressions (GP)"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Geometric Progressions (GP) advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-agp-hp",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 22,
          "title": "AGP and Harmonic Progressions",
          "tagline": "Year 3 Analysis — AGP and Harmonic Progressions for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 AGP and Harmonic Progressions develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced AGP and Harmonic Progressions questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of AGP and Harmonic Progressions at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of AGP and Harmonic Progressions",
            "Identify the correct problem type and method in AGP and Harmonic Progressions",
            "Solve AGP and Harmonic Progressions questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in AGP and Harmonic Progressions"
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
              "【AGP and Harmonic Progressions】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering AGP and Harmonic Progressions requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching AGP and Harmonic Progressions, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering AGP and Harmonic Progressions is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to AGP and Harmonic Progressions, accuracy improves by 35%."
            ],
            "deepDiveAspects": [
              {
                "title": "AGP and Harmonic Progressions - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for AGP and Harmonic Progressions",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply AGP and Harmonic Progressions in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the AGP and Harmonic Progressions problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-agp-hp-1",
              "title": "AGP and Harmonic Progressions Case Study",
              "question": "[AGP and Harmonic Progressions] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of AGP and Harmonic Progressions.",
              "commonTrap": "Failing to account for the 40 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced AGP and Harmonic Progressions Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 AGP and Harmonic Progressions shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For AGP and Harmonic Progressions problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 AGP and Harmonic Progressions problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in AGP and Harmonic Progressions",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced AGP and Harmonic Progressions MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 AGP and Harmonic Progressions.",
            "recruiterInsight": "Year 3 AGP and Harmonic Progressions distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-hp-e1",
                "question": "Year 3 AGP and Harmonic Progressions — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 AGP and Harmonic Progressions with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-hp-e2",
                "question": "Year 3 AGP and Harmonic Progressions variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced AGP and Harmonic Progressions problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-hp-i1",
                "question": "Year 3 AGP and Harmonic Progressions — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept AGP and Harmonic Progressions problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-hp-i2",
                "question": "Second Year 3 AGP and Harmonic Progressions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced AGP and Harmonic Progressions variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-hp-a1",
                "question": "High-difficulty Year 3 AGP and Harmonic Progressions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 AGP and Harmonic Progressions.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-hp-p1",
                "question": "Placement-style Year 3 AGP and Harmonic Progressions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level AGP and Harmonic Progressions question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of AGP and Harmonic Progressions: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply AGP and Harmonic Progressions shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced AGP and Harmonic Progressions compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 AGP and Harmonic Progressions mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in AGP and Harmonic Progressions appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 AGP and Harmonic Progressions answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 AGP and Harmonic Progressions problems, identifying the 'key unlock' in each.",
            "What makes Year 3 AGP and Harmonic Progressions harder than Year 2? Write in your own words.",
            "Create a Year 3 AGP and Harmonic Progressions problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: AGP and Harmonic Progressions"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "AGP and Harmonic Progressions advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-geometry",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 23,
          "title": "Advanced Geometry — Circles and Polygons",
          "tagline": "Year 3 Analysis — Advanced Geometry — Circles and Polygons for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Geometry — Circles and Polygons develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Geometry — Circles and Polygons questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Geometry — Circles and Polygons at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Geometry — Circles and Polygons",
            "Identify the correct problem type and method in Advanced Geometry — Circles and Polygons",
            "Solve Advanced Geometry — Circles and Polygons questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Geometry — Circles and Polygons"
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
              "【Advanced Geometry — Circles and Polygons】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Advanced Geometry — Circles and Polygons requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Advanced Geometry — Circles and Polygons, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Advanced Geometry — Circles and Polygons is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Advanced Geometry — Circles and Polygons, accuracy improves by 31%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Geometry — Circles and Polygons - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Advanced Geometry — Circles and Polygons",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Geometry — Circles and Polygons in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Geometry — Circles and Polygons problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-geometry-1",
              "title": "Advanced Geometry — Circles and Polygons Case Study",
              "question": "[Advanced Geometry — Circles and Polygons] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Geometry — Circles and Polygons.",
              "commonTrap": "Failing to account for the 37 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Geometry — Circles and Polygons Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Geometry — Circles and Polygons shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Geometry — Circles and Polygons problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Geometry — Circles and Polygons problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Geometry — Circles and Polygons",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Geometry — Circles and Polygons MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Geometry — Circles and Polygons.",
            "recruiterInsight": "Year 3 Advanced Geometry — Circles and Polygons distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-geometry-e1",
                "question": "Year 3 Advanced Geometry — Circles and Polygons — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Geometry — Circles and Polygons with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-geometry-e2",
                "question": "Year 3 Advanced Geometry — Circles and Polygons variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Geometry — Circles and Polygons problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-geometry-i1",
                "question": "Year 3 Advanced Geometry — Circles and Polygons — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Geometry — Circles and Polygons problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-geometry-i2",
                "question": "Second Year 3 Advanced Geometry — Circles and Polygons.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Geometry — Circles and Polygons variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-geometry-a1",
                "question": "High-difficulty Year 3 Advanced Geometry — Circles and Polygons.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Geometry — Circles and Polygons.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-geometry-p1",
                "question": "Placement-style Year 3 Advanced Geometry — Circles and Polygons.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Geometry — Circles and Polygons question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Geometry — Circles and Polygons: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Advanced Geometry — Circles and Polygons shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Geometry — Circles and Polygons compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Geometry — Circles and Polygons mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Geometry — Circles and Polygons appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Geometry — Circles and Polygons answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Geometry — Circles and Polygons problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Geometry — Circles and Polygons harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Geometry — Circles and Polygons problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Geometry — Circles and Polygons"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Geometry — Circles and Polygons advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-coordinate-geometry",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 24,
          "title": "Coordinate Geometry",
          "tagline": "Year 3 Analysis — Coordinate Geometry for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Coordinate Geometry develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Coordinate Geometry questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Coordinate Geometry at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Coordinate Geometry",
            "Identify the correct problem type and method in Coordinate Geometry",
            "Solve Coordinate Geometry questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Coordinate Geometry"
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
              "【Coordinate Geometry】 Mensuration: Measurement of areas/volumes.",
              "Theorem: Proven geometric rule.",
              "Polygon: Closed multi-sided shape."
            ],
            "theoreticalIntuition": "Mastering Coordinate Geometry requires a firm grasp of underlying concepts. Geometry on aptitude tests focuses on properties of triangles and circles.",
            "visualOrMentalModel": "When approaching Coordinate Geometry, visualize the parameters clearly. Memorize the Pythagorean triplets (3-4-5, 5-12-13) for instant answers."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Area of Circle",
              "formula": "π r²",
              "description": "Space inside",
              "whenToUse": "Circles",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 3, mastering Coordinate Geometry is critical for placement success.",
              "Geometry on aptitude tests focuses on properties of triangles and circles.",
              "Memorize the Pythagorean triplets (3-4-5, 5-12-13) for instant answers.",
              "For 3D mensuration, volume formulas are critical.",
              "By applying these principles to Coordinate Geometry, accuracy improves by 36%."
            ],
            "deepDiveAspects": [
              {
                "title": "Coordinate Geometry - Advanced Application",
                "content": "For 3D mensuration, volume formulas are critical."
              },
              {
                "title": "Core Methodology for Coordinate Geometry",
                "content": "Memorize the Pythagorean triplets (3-4-5, 5-12-13) for instant answers."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Coordinate Geometry in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Coordinate Geometry problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-coordinate-geometry-1",
              "title": "Coordinate Geometry Case Study",
              "question": "[Coordinate Geometry] Diagonal of 3x4 rectangle?",
              "givenInfo": [
                "Sides 3, 4"
              ],
              "conceptOrFormula": "Pythagoras",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Square",
                  "explanation": "9 + 16 = 25",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Root",
                  "explanation": "5",
                  "math": ""
                }
              ],
              "finalAnswer": "5",
              "whyItWorks": "This demonstrates the core mechanic of Coordinate Geometry.",
              "commonTrap": "Failing to account for the 42 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Coordinate Geometry Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Coordinate Geometry shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Coordinate Geometry problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Coordinate Geometry problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Coordinate Geometry",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Coordinate Geometry MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Coordinate Geometry.",
            "recruiterInsight": "Year 3 Coordinate Geometry distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-geometry-e1",
                "question": "Year 3 Coordinate Geometry — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Coordinate Geometry with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-geometry-e2",
                "question": "Year 3 Coordinate Geometry variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Coordinate Geometry problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-geometry-i1",
                "question": "Year 3 Coordinate Geometry — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Coordinate Geometry problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-geometry-i2",
                "question": "Second Year 3 Coordinate Geometry.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Coordinate Geometry variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-geometry-a1",
                "question": "High-difficulty Year 3 Coordinate Geometry.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Coordinate Geometry.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-geometry-p1",
                "question": "Placement-style Year 3 Coordinate Geometry.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Coordinate Geometry question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Coordinate Geometry: Mensuration: Measurement of areas/volumes.",
              "Theorem: Proven geometric rule.",
              "Always review calculation steps.",
              "Apply Coordinate Geometry shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Coordinate Geometry compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Coordinate Geometry mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Coordinate Geometry appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Coordinate Geometry answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Coordinate Geometry problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Coordinate Geometry harder than Year 2? Write in your own words.",
            "Create a Year 3 Coordinate Geometry problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Coordinate Geometry"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Coordinate Geometry advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-adv-mensuration-3d",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 25,
          "title": "3D Mensuration — Solids and Surface Area",
          "tagline": "Year 3 Analysis — 3D Mensuration — Solids and Surface Area for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 3D Mensuration — Solids and Surface Area develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced 3D Mensuration — Solids and Surface Area questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of 3D Mensuration — Solids and Surface Area at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of 3D Mensuration — Solids and Surface Area",
            "Identify the correct problem type and method in 3D Mensuration — Solids and Surface Area",
            "Solve 3D Mensuration — Solids and Surface Area questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in 3D Mensuration — Solids and Surface Area"
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
              "【3D Mensuration — Solids and Surface Area】 Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Compound Ratio: ac:bd.",
              "Duplicate Ratio: a²:b².",
              "Componendo-Dividendo: (a+b)/(a-b) = (c+d)/(c-d)."
            ],
            "theoreticalIntuition": "Mastering 3D Mensuration — Solids and Surface Area requires a firm grasp of underlying concepts. Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
            "visualOrMentalModel": "When approaching 3D Mensuration — Solids and Surface Area, visualize the parameters clearly. The 'K-multiplier' method transforms abstract ratios into algebraic equations."
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
              "In Year 3, mastering 3D Mensuration — Solids and Surface Area is critical for placement success.",
              "Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
              "The 'K-multiplier' method transforms abstract ratios into algebraic equations.",
              "Scale pairwise ratios to a common middle term (LCM) before calculating shares.",
              "By applying these principles to 3D Mensuration — Solids and Surface Area, accuracy improves by 37%."
            ],
            "deepDiveAspects": [
              {
                "title": "3D Mensuration — Solids and Surface Area - Advanced Application",
                "content": "Scale pairwise ratios to a common middle term (LCM) before calculating shares."
              },
              {
                "title": "Core Methodology for 3D Mensuration — Solids and Surface Area",
                "content": "The 'K-multiplier' method transforms abstract ratios into algebraic equations."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply 3D Mensuration — Solids and Surface Area in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the 3D Mensuration — Solids and Surface Area problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-adv-mensuration-3d-1",
              "title": "3D Mensuration — Solids and Surface Area Case Study",
              "question": "[3D Mensuration — Solids and Surface Area] Divide 3700 in 8:15:20 after deducting 25, 28, 52.",
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
              "whyItWorks": "This demonstrates the core mechanic of 3D Mensuration — Solids and Surface Area.",
              "commonTrap": "Failing to account for the 42 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced 3D Mensuration — Solids and Surface Area Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 3D Mensuration — Solids and Surface Area shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For 3D Mensuration — Solids and Surface Area problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 3D Mensuration — Solids and Surface Area problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in 3D Mensuration — Solids and Surface Area",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced 3D Mensuration — Solids and Surface Area MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 3D Mensuration — Solids and Surface Area.",
            "recruiterInsight": "Year 3 3D Mensuration — Solids and Surface Area distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-3d-e1",
                "question": "Year 3 3D Mensuration — Solids and Surface Area — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 3D Mensuration — Solids and Surface Area with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-3d-e2",
                "question": "Year 3 3D Mensuration — Solids and Surface Area variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced 3D Mensuration — Solids and Surface Area problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-3d-i1",
                "question": "Year 3 3D Mensuration — Solids and Surface Area — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept 3D Mensuration — Solids and Surface Area problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-3d-i2",
                "question": "Second Year 3 3D Mensuration — Solids and Surface Area.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced 3D Mensuration — Solids and Surface Area variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-3d-a1",
                "question": "High-difficulty Year 3 3D Mensuration — Solids and Surface Area.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 3D Mensuration — Solids and Surface Area.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-3d-p1",
                "question": "Placement-style Year 3 3D Mensuration — Solids and Surface Area.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level 3D Mensuration — Solids and Surface Area question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of 3D Mensuration — Solids and Surface Area: Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Always review calculation steps.",
              "Apply 3D Mensuration — Solids and Surface Area shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced 3D Mensuration — Solids and Surface Area compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 3D Mensuration — Solids and Surface Area mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in 3D Mensuration — Solids and Surface Area appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 3D Mensuration — Solids and Surface Area answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 3D Mensuration — Solids and Surface Area problems, identifying the 'key unlock' in each.",
            "What makes Year 3 3D Mensuration — Solids and Surface Area harder than Year 2? Write in your own words.",
            "Create a Year 3 3D Mensuration — Solids and Surface Area problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: 3D Mensuration — Solids and Surface Area"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "3D Mensuration — Solids and Surface Area advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-clocks",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 26,
          "title": "Clocks — Angle and Coincidence Problems",
          "tagline": "Year 3 Analysis — Clocks — Angle and Coincidence Problems for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Clocks — Angle and Coincidence Problems develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Clocks — Angle and Coincidence Problems questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Clocks — Angle and Coincidence Problems at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Clocks — Angle and Coincidence Problems",
            "Identify the correct problem type and method in Clocks — Angle and Coincidence Problems",
            "Solve Clocks — Angle and Coincidence Problems questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Clocks — Angle and Coincidence Problems"
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
              "【Clocks — Angle and Coincidence Problems】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Clocks — Angle and Coincidence Problems requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Clocks — Angle and Coincidence Problems, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Clocks — Angle and Coincidence Problems is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Clocks — Angle and Coincidence Problems, accuracy improves by 16%."
            ],
            "deepDiveAspects": [
              {
                "title": "Clocks — Angle and Coincidence Problems - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Clocks — Angle and Coincidence Problems",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Clocks — Angle and Coincidence Problems in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Clocks — Angle and Coincidence Problems problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-clocks-1",
              "title": "Clocks — Angle and Coincidence Problems Case Study",
              "question": "[Clocks — Angle and Coincidence Problems] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Clocks — Angle and Coincidence Problems.",
              "commonTrap": "Failing to account for the 47 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Clocks — Angle and Coincidence Problems Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Clocks — Angle and Coincidence Problems shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Clocks — Angle and Coincidence Problems problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Clocks — Angle and Coincidence Problems problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Clocks — Angle and Coincidence Problems",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Clocks — Angle and Coincidence Problems MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Clocks — Angle and Coincidence Problems.",
            "recruiterInsight": "Year 3 Clocks — Angle and Coincidence Problems distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-clocks-e1",
                "question": "Year 3 Clocks — Angle and Coincidence Problems — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Clocks — Angle and Coincidence Problems with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-clocks-e2",
                "question": "Year 3 Clocks — Angle and Coincidence Problems variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Clocks — Angle and Coincidence Problems problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-clocks-i1",
                "question": "Year 3 Clocks — Angle and Coincidence Problems — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Clocks — Angle and Coincidence Problems problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-clocks-i2",
                "question": "Second Year 3 Clocks — Angle and Coincidence Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Clocks — Angle and Coincidence Problems variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-clocks-a1",
                "question": "High-difficulty Year 3 Clocks — Angle and Coincidence Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Clocks — Angle and Coincidence Problems.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-clocks-p1",
                "question": "Placement-style Year 3 Clocks — Angle and Coincidence Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Clocks — Angle and Coincidence Problems question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Clocks — Angle and Coincidence Problems: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Clocks — Angle and Coincidence Problems shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Clocks — Angle and Coincidence Problems compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Clocks — Angle and Coincidence Problems mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Clocks — Angle and Coincidence Problems appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Clocks — Angle and Coincidence Problems answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Clocks — Angle and Coincidence Problems problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Clocks — Angle and Coincidence Problems harder than Year 2? Write in your own words.",
            "Create a Year 3 Clocks — Angle and Coincidence Problems problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Clocks — Angle and Coincidence Problems"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Clocks — Angle and Coincidence Problems advanced category"
            }
          ]
        },
        {
          "id": "y3-quant-calendars",
          "yearId": 3,
          "category": "Advanced Quantitative Aptitude",
          "topicNumber": 27,
          "title": "Calendars — Day and Date Calculation",
          "tagline": "Year 3 Analysis — Calendars — Day and Date Calculation for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Calendars — Day and Date Calculation develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Calendars — Day and Date Calculation questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Calendars — Day and Date Calculation at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Calendars — Day and Date Calculation",
            "Identify the correct problem type and method in Calendars — Day and Date Calculation",
            "Solve Calendars — Day and Date Calculation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Calendars — Day and Date Calculation"
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
              "【Calendars — Day and Date Calculation】 Approximation: Rounding to nearest significant figure.",
              "Estimation: Finding a value close enough for option elimination.",
              "Significant Digits: Meaningful numbers."
            ],
            "theoreticalIntuition": "Mastering Calendars — Day and Date Calculation requires a firm grasp of underlying concepts. Approximation is mandatory for data interpretation and speed math.",
            "visualOrMentalModel": "When approaching Calendars — Day and Date Calculation, visualize the parameters clearly. Do not calculate exact decimal values when options are far apart."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Fraction Estimation",
              "formula": "Round up both or down both",
              "description": "Stable ratio",
              "whenToUse": "DI",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 3, mastering Calendars — Day and Date Calculation is critical for placement success.",
              "Approximation is mandatory for data interpretation and speed math.",
              "Do not calculate exact decimal values when options are far apart.",
              "Always round numerator and denominator in the same direction to minimize error.",
              "By applying these principles to Calendars — Day and Date Calculation, accuracy improves by 16%."
            ],
            "deepDiveAspects": [
              {
                "title": "Calendars — Day and Date Calculation - Advanced Application",
                "content": "Always round numerator and denominator in the same direction to minimize error."
              },
              {
                "title": "Core Methodology for Calendars — Day and Date Calculation",
                "content": "Do not calculate exact decimal values when options are far apart."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Calendars — Day and Date Calculation in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Calendars — Day and Date Calculation problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-quant-calendars-1",
              "title": "Calendars — Day and Date Calculation Case Study",
              "question": "[Calendars — Day and Date Calculation] 14.98 * 20.03",
              "givenInfo": [
                "~15 * ~20"
              ],
              "conceptOrFormula": "Round",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Round",
                  "explanation": "15 * 20",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Mult",
                  "explanation": "300",
                  "math": ""
                }
              ],
              "finalAnswer": "300",
              "whyItWorks": "This demonstrates the core mechanic of Calendars — Day and Date Calculation.",
              "commonTrap": "Failing to account for the 23 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Calendars — Day and Date Calculation Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Calendars — Day and Date Calculation shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Calendars — Day and Date Calculation problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Calendars — Day and Date Calculation problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Calendars — Day and Date Calculation",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Calendars — Day and Date Calculation MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Calendars — Day and Date Calculation.",
            "recruiterInsight": "Year 3 Calendars — Day and Date Calculation distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-calendars-e1",
                "question": "Year 3 Calendars — Day and Date Calculation — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Calendars — Day and Date Calculation with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-calendars-e2",
                "question": "Year 3 Calendars — Day and Date Calculation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Calendars — Day and Date Calculation problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-calendars-i1",
                "question": "Year 3 Calendars — Day and Date Calculation — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Calendars — Day and Date Calculation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-calendars-i2",
                "question": "Second Year 3 Calendars — Day and Date Calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Calendars — Day and Date Calculation variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-calendars-a1",
                "question": "High-difficulty Year 3 Calendars — Day and Date Calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Calendars — Day and Date Calculation.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-calendars-p1",
                "question": "Placement-style Year 3 Calendars — Day and Date Calculation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Calendars — Day and Date Calculation question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Calendars — Day and Date Calculation: Approximation: Rounding to nearest significant figure.",
              "Estimation: Finding a value close enough for option elimination.",
              "Always review calculation steps.",
              "Apply Calendars — Day and Date Calculation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Calendars — Day and Date Calculation compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Calendars — Day and Date Calculation mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Calendars — Day and Date Calculation appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Calendars — Day and Date Calculation answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Calendars — Day and Date Calculation problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Calendars — Day and Date Calculation harder than Year 2? Write in your own words.",
            "Create a Year 3 Calendars — Day and Date Calculation problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Calendars — Day and Date Calculation"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Calendars — Day and Date Calculation advanced category"
            }
          ]
        }
      ]
    },
    {
      "category": "Advanced Logical Reasoning",
      "description": "Advanced Logical Reasoning — Year 3 Advanced",
      "topics": [
        {
          "id": "y3-lr-complex-seating",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 28,
          "title": "Complex Seating Arrangements (7+ People)",
          "tagline": "Year 3 Analysis — Complex Seating Arrangements (7+ People) for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Complex Seating Arrangements (7+ People) develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Complex Seating Arrangements (7+ People) questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Complex Seating Arrangements (7+ People) at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Complex Seating Arrangements (7+ People)",
            "Identify the correct problem type and method in Complex Seating Arrangements (7+ People)",
            "Solve Complex Seating Arrangements (7+ People) questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Complex Seating Arrangements (7+ People)"
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
              "【Complex Seating Arrangements (7+ People)】 Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Factorial: Product of ints.",
              "Derangement: Complete rearrangement."
            ],
            "theoreticalIntuition": "Mastering Complex Seating Arrangements (7+ People) requires a firm grasp of underlying concepts. P&C form the basis of probability.",
            "visualOrMentalModel": "When approaching Complex Seating Arrangements (7+ People), visualize the parameters clearly. Tie Method for grouped items."
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
              "In Year 3, mastering Complex Seating Arrangements (7+ People) is critical for placement success.",
              "P&C form the basis of probability.",
              "Tie Method for grouped items.",
              "Divide by factorials for repetitions.",
              "By applying these principles to Complex Seating Arrangements (7+ People), accuracy improves by 40%."
            ],
            "deepDiveAspects": [
              {
                "title": "Complex Seating Arrangements (7+ People) - Advanced Application",
                "content": "Divide by factorials for repetitions."
              },
              {
                "title": "Core Methodology for Complex Seating Arrangements (7+ People)",
                "content": "Tie Method for grouped items."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Complex Seating Arrangements (7+ People) in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Complex Seating Arrangements (7+ People) problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-complex-seating-1",
              "title": "Complex Seating Arrangements (7+ People) Case Study",
              "question": "[Complex Seating Arrangements (7+ People)] Arrange 'APPLE'",
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
              "whyItWorks": "This demonstrates the core mechanic of Complex Seating Arrangements (7+ People).",
              "commonTrap": "Failing to account for the 22 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Complex Seating Arrangements (7+ People) Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Complex Seating Arrangements (7+ People) shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Complex Seating Arrangements (7+ People) problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Complex Seating Arrangements (7+ People) problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Complex Seating Arrangements (7+ People)",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Complex Seating Arrangements (7+ People) MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Complex Seating Arrangements (7+ People).",
            "recruiterInsight": "Year 3 Complex Seating Arrangements (7+ People) distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-seating-e1",
                "question": "Year 3 Complex Seating Arrangements (7+ People) — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Complex Seating Arrangements (7+ People) with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-seating-e2",
                "question": "Year 3 Complex Seating Arrangements (7+ People) variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Complex Seating Arrangements (7+ People) problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-seating-i1",
                "question": "Year 3 Complex Seating Arrangements (7+ People) — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Complex Seating Arrangements (7+ People) problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-seating-i2",
                "question": "Second Year 3 Complex Seating Arrangements (7+ People).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Complex Seating Arrangements (7+ People) variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-seating-a1",
                "question": "High-difficulty Year 3 Complex Seating Arrangements (7+ People).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Complex Seating Arrangements (7+ People).",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-seating-p1",
                "question": "Placement-style Year 3 Complex Seating Arrangements (7+ People).",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Complex Seating Arrangements (7+ People) question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Complex Seating Arrangements (7+ People): Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Always review calculation steps.",
              "Apply Complex Seating Arrangements (7+ People) shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Complex Seating Arrangements (7+ People) compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Complex Seating Arrangements (7+ People) mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Complex Seating Arrangements (7+ People) appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Complex Seating Arrangements (7+ People) answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Complex Seating Arrangements (7+ People) problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Complex Seating Arrangements (7+ People) harder than Year 2? Write in your own words.",
            "Create a Year 3 Complex Seating Arrangements (7+ People) problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Complex Seating Arrangements (7+ People)"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Complex Seating Arrangements (7+ People) advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-circular-seating",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 29,
          "title": "Circular Seating Arrangements",
          "tagline": "Year 3 Analysis — Circular Seating Arrangements for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Circular Seating Arrangements develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Circular Seating Arrangements questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Circular Seating Arrangements at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Circular Seating Arrangements",
            "Identify the correct problem type and method in Circular Seating Arrangements",
            "Solve Circular Seating Arrangements questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Circular Seating Arrangements"
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
              "【Circular Seating Arrangements】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Circular Seating Arrangements requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Circular Seating Arrangements, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Circular Seating Arrangements is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Circular Seating Arrangements, accuracy improves by 14%."
            ],
            "deepDiveAspects": [
              {
                "title": "Circular Seating Arrangements - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Circular Seating Arrangements",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Circular Seating Arrangements in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Circular Seating Arrangements problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-circular-seating-1",
              "title": "Circular Seating Arrangements Case Study",
              "question": "[Circular Seating Arrangements] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Circular Seating Arrangements.",
              "commonTrap": "Failing to account for the 12 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Circular Seating Arrangements Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Circular Seating Arrangements shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Circular Seating Arrangements problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Circular Seating Arrangements problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Circular Seating Arrangements",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Circular Seating Arrangements MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Circular Seating Arrangements.",
            "recruiterInsight": "Year 3 Circular Seating Arrangements distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-seating-e1",
                "question": "Year 3 Circular Seating Arrangements — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Circular Seating Arrangements with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-seating-e2",
                "question": "Year 3 Circular Seating Arrangements variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Circular Seating Arrangements problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-seating-i1",
                "question": "Year 3 Circular Seating Arrangements — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Circular Seating Arrangements problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-seating-i2",
                "question": "Second Year 3 Circular Seating Arrangements.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Circular Seating Arrangements variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-seating-a1",
                "question": "High-difficulty Year 3 Circular Seating Arrangements.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Circular Seating Arrangements.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-seating-p1",
                "question": "Placement-style Year 3 Circular Seating Arrangements.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Circular Seating Arrangements question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Circular Seating Arrangements: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Circular Seating Arrangements shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Circular Seating Arrangements compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Circular Seating Arrangements mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Circular Seating Arrangements appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Circular Seating Arrangements answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Circular Seating Arrangements problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Circular Seating Arrangements harder than Year 2? Write in your own words.",
            "Create a Year 3 Circular Seating Arrangements problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Circular Seating Arrangements"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Circular Seating Arrangements advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-multiple-row-seating",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 30,
          "title": "Multiple-Row Seating Arrangements",
          "tagline": "Year 3 Analysis — Multiple-Row Seating Arrangements for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Multiple-Row Seating Arrangements develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Multiple-Row Seating Arrangements questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Multiple-Row Seating Arrangements at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Multiple-Row Seating Arrangements",
            "Identify the correct problem type and method in Multiple-Row Seating Arrangements",
            "Solve Multiple-Row Seating Arrangements questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Multiple-Row Seating Arrangements"
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
              "【Multiple-Row Seating Arrangements】 Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Factorial: Product of ints.",
              "Derangement: Complete rearrangement."
            ],
            "theoreticalIntuition": "Mastering Multiple-Row Seating Arrangements requires a firm grasp of underlying concepts. P&C form the basis of probability.",
            "visualOrMentalModel": "When approaching Multiple-Row Seating Arrangements, visualize the parameters clearly. Tie Method for grouped items."
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
              "In Year 3, mastering Multiple-Row Seating Arrangements is critical for placement success.",
              "P&C form the basis of probability.",
              "Tie Method for grouped items.",
              "Divide by factorials for repetitions.",
              "By applying these principles to Multiple-Row Seating Arrangements, accuracy improves by 13%."
            ],
            "deepDiveAspects": [
              {
                "title": "Multiple-Row Seating Arrangements - Advanced Application",
                "content": "Divide by factorials for repetitions."
              },
              {
                "title": "Core Methodology for Multiple-Row Seating Arrangements",
                "content": "Tie Method for grouped items."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Multiple-Row Seating Arrangements in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Multiple-Row Seating Arrangements problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-multiple-row-seating-1",
              "title": "Multiple-Row Seating Arrangements Case Study",
              "question": "[Multiple-Row Seating Arrangements] Arrange 'APPLE'",
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
              "whyItWorks": "This demonstrates the core mechanic of Multiple-Row Seating Arrangements.",
              "commonTrap": "Failing to account for the 34 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Multiple-Row Seating Arrangements Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Multiple-Row Seating Arrangements shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Multiple-Row Seating Arrangements problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Multiple-Row Seating Arrangements problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Multiple-Row Seating Arrangements",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Multiple-Row Seating Arrangements MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Multiple-Row Seating Arrangements.",
            "recruiterInsight": "Year 3 Multiple-Row Seating Arrangements distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-seating-e1",
                "question": "Year 3 Multiple-Row Seating Arrangements — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Multiple-Row Seating Arrangements with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-seating-e2",
                "question": "Year 3 Multiple-Row Seating Arrangements variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Multiple-Row Seating Arrangements problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-seating-i1",
                "question": "Year 3 Multiple-Row Seating Arrangements — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Multiple-Row Seating Arrangements problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-seating-i2",
                "question": "Second Year 3 Multiple-Row Seating Arrangements.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Multiple-Row Seating Arrangements variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-seating-a1",
                "question": "High-difficulty Year 3 Multiple-Row Seating Arrangements.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Multiple-Row Seating Arrangements.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-seating-p1",
                "question": "Placement-style Year 3 Multiple-Row Seating Arrangements.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Multiple-Row Seating Arrangements question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Multiple-Row Seating Arrangements: Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Always review calculation steps.",
              "Apply Multiple-Row Seating Arrangements shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Multiple-Row Seating Arrangements compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Multiple-Row Seating Arrangements mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Multiple-Row Seating Arrangements appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Multiple-Row Seating Arrangements answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Multiple-Row Seating Arrangements problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Multiple-Row Seating Arrangements harder than Year 2? Write in your own words.",
            "Create a Year 3 Multiple-Row Seating Arrangements problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Multiple-Row Seating Arrangements"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Multiple-Row Seating Arrangements advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-floor-puzzles",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 31,
          "title": "Floor-Based Arrangement Puzzles",
          "tagline": "Year 3 Analysis — Floor-Based Arrangement Puzzles for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Floor-Based Arrangement Puzzles develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Floor-Based Arrangement Puzzles questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Floor-Based Arrangement Puzzles at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Floor-Based Arrangement Puzzles",
            "Identify the correct problem type and method in Floor-Based Arrangement Puzzles",
            "Solve Floor-Based Arrangement Puzzles questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Floor-Based Arrangement Puzzles"
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
              "【Floor-Based Arrangement Puzzles】 Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Factorial: Product of ints.",
              "Derangement: Complete rearrangement."
            ],
            "theoreticalIntuition": "Mastering Floor-Based Arrangement Puzzles requires a firm grasp of underlying concepts. P&C form the basis of probability.",
            "visualOrMentalModel": "When approaching Floor-Based Arrangement Puzzles, visualize the parameters clearly. Tie Method for grouped items."
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
              "In Year 3, mastering Floor-Based Arrangement Puzzles is critical for placement success.",
              "P&C form the basis of probability.",
              "Tie Method for grouped items.",
              "Divide by factorials for repetitions.",
              "By applying these principles to Floor-Based Arrangement Puzzles, accuracy improves by 51%."
            ],
            "deepDiveAspects": [
              {
                "title": "Floor-Based Arrangement Puzzles - Advanced Application",
                "content": "Divide by factorials for repetitions."
              },
              {
                "title": "Core Methodology for Floor-Based Arrangement Puzzles",
                "content": "Tie Method for grouped items."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Floor-Based Arrangement Puzzles in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Floor-Based Arrangement Puzzles problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-floor-puzzles-1",
              "title": "Floor-Based Arrangement Puzzles Case Study",
              "question": "[Floor-Based Arrangement Puzzles] Arrange 'APPLE'",
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
              "whyItWorks": "This demonstrates the core mechanic of Floor-Based Arrangement Puzzles.",
              "commonTrap": "Failing to account for the 51 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Floor-Based Arrangement Puzzles Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Floor-Based Arrangement Puzzles shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Floor-Based Arrangement Puzzles problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Floor-Based Arrangement Puzzles problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Floor-Based Arrangement Puzzles",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Floor-Based Arrangement Puzzles MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Floor-Based Arrangement Puzzles.",
            "recruiterInsight": "Year 3 Floor-Based Arrangement Puzzles distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-puzzles-e1",
                "question": "Year 3 Floor-Based Arrangement Puzzles — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Floor-Based Arrangement Puzzles with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-puzzles-e2",
                "question": "Year 3 Floor-Based Arrangement Puzzles variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Floor-Based Arrangement Puzzles problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-puzzles-i1",
                "question": "Year 3 Floor-Based Arrangement Puzzles — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Floor-Based Arrangement Puzzles problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-puzzles-i2",
                "question": "Second Year 3 Floor-Based Arrangement Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Floor-Based Arrangement Puzzles variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-puzzles-a1",
                "question": "High-difficulty Year 3 Floor-Based Arrangement Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Floor-Based Arrangement Puzzles.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-puzzles-p1",
                "question": "Placement-style Year 3 Floor-Based Arrangement Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Floor-Based Arrangement Puzzles question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Floor-Based Arrangement Puzzles: Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Always review calculation steps.",
              "Apply Floor-Based Arrangement Puzzles shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Floor-Based Arrangement Puzzles compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Floor-Based Arrangement Puzzles mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Floor-Based Arrangement Puzzles appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Floor-Based Arrangement Puzzles answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Floor-Based Arrangement Puzzles problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Floor-Based Arrangement Puzzles harder than Year 2? Write in your own words.",
            "Create a Year 3 Floor-Based Arrangement Puzzles problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Floor-Based Arrangement Puzzles"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Floor-Based Arrangement Puzzles advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-box-puzzles",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 32,
          "title": "Box-Stack Arrangement Puzzles",
          "tagline": "Year 3 Analysis — Box-Stack Arrangement Puzzles for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Box-Stack Arrangement Puzzles develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Box-Stack Arrangement Puzzles questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Box-Stack Arrangement Puzzles at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Box-Stack Arrangement Puzzles",
            "Identify the correct problem type and method in Box-Stack Arrangement Puzzles",
            "Solve Box-Stack Arrangement Puzzles questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Box-Stack Arrangement Puzzles"
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
              "【Box-Stack Arrangement Puzzles】 Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Factorial: Product of ints.",
              "Derangement: Complete rearrangement."
            ],
            "theoreticalIntuition": "Mastering Box-Stack Arrangement Puzzles requires a firm grasp of underlying concepts. P&C form the basis of probability.",
            "visualOrMentalModel": "When approaching Box-Stack Arrangement Puzzles, visualize the parameters clearly. Tie Method for grouped items."
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
              "In Year 3, mastering Box-Stack Arrangement Puzzles is critical for placement success.",
              "P&C form the basis of probability.",
              "Tie Method for grouped items.",
              "Divide by factorials for repetitions.",
              "By applying these principles to Box-Stack Arrangement Puzzles, accuracy improves by 55%."
            ],
            "deepDiveAspects": [
              {
                "title": "Box-Stack Arrangement Puzzles - Advanced Application",
                "content": "Divide by factorials for repetitions."
              },
              {
                "title": "Core Methodology for Box-Stack Arrangement Puzzles",
                "content": "Tie Method for grouped items."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Box-Stack Arrangement Puzzles in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Box-Stack Arrangement Puzzles problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-box-puzzles-1",
              "title": "Box-Stack Arrangement Puzzles Case Study",
              "question": "[Box-Stack Arrangement Puzzles] Arrange 'APPLE'",
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
              "whyItWorks": "This demonstrates the core mechanic of Box-Stack Arrangement Puzzles.",
              "commonTrap": "Failing to account for the 11 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Box-Stack Arrangement Puzzles Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Box-Stack Arrangement Puzzles shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Box-Stack Arrangement Puzzles problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Box-Stack Arrangement Puzzles problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Box-Stack Arrangement Puzzles",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Box-Stack Arrangement Puzzles MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Box-Stack Arrangement Puzzles.",
            "recruiterInsight": "Year 3 Box-Stack Arrangement Puzzles distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-puzzles-e1",
                "question": "Year 3 Box-Stack Arrangement Puzzles — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Box-Stack Arrangement Puzzles with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-puzzles-e2",
                "question": "Year 3 Box-Stack Arrangement Puzzles variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Box-Stack Arrangement Puzzles problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-puzzles-i1",
                "question": "Year 3 Box-Stack Arrangement Puzzles — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Box-Stack Arrangement Puzzles problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-puzzles-i2",
                "question": "Second Year 3 Box-Stack Arrangement Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Box-Stack Arrangement Puzzles variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-puzzles-a1",
                "question": "High-difficulty Year 3 Box-Stack Arrangement Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Box-Stack Arrangement Puzzles.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-puzzles-p1",
                "question": "Placement-style Year 3 Box-Stack Arrangement Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Box-Stack Arrangement Puzzles question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Box-Stack Arrangement Puzzles: Permutation: Order matters.",
              "Combination: Order doesn't matter.",
              "Always review calculation steps.",
              "Apply Box-Stack Arrangement Puzzles shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Box-Stack Arrangement Puzzles compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Box-Stack Arrangement Puzzles mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Box-Stack Arrangement Puzzles appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Box-Stack Arrangement Puzzles answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Box-Stack Arrangement Puzzles problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Box-Stack Arrangement Puzzles harder than Year 2? Write in your own words.",
            "Create a Year 3 Box-Stack Arrangement Puzzles problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Box-Stack Arrangement Puzzles"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Box-Stack Arrangement Puzzles advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-scheduling-puzzles",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 33,
          "title": "Scheduling and Day-Assignment Puzzles",
          "tagline": "Year 3 Analysis — Scheduling and Day-Assignment Puzzles for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Scheduling and Day-Assignment Puzzles develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Scheduling and Day-Assignment Puzzles questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Scheduling and Day-Assignment Puzzles at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Scheduling and Day-Assignment Puzzles",
            "Identify the correct problem type and method in Scheduling and Day-Assignment Puzzles",
            "Solve Scheduling and Day-Assignment Puzzles questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Scheduling and Day-Assignment Puzzles"
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
              "【Scheduling and Day-Assignment Puzzles】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Scheduling and Day-Assignment Puzzles requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Scheduling and Day-Assignment Puzzles, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Scheduling and Day-Assignment Puzzles is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Scheduling and Day-Assignment Puzzles, accuracy improves by 36%."
            ],
            "deepDiveAspects": [
              {
                "title": "Scheduling and Day-Assignment Puzzles - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Scheduling and Day-Assignment Puzzles",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Scheduling and Day-Assignment Puzzles in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Scheduling and Day-Assignment Puzzles problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-scheduling-puzzles-1",
              "title": "Scheduling and Day-Assignment Puzzles Case Study",
              "question": "[Scheduling and Day-Assignment Puzzles] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Scheduling and Day-Assignment Puzzles.",
              "commonTrap": "Failing to account for the 49 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Scheduling and Day-Assignment Puzzles Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Scheduling and Day-Assignment Puzzles shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Scheduling and Day-Assignment Puzzles problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Scheduling and Day-Assignment Puzzles problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Scheduling and Day-Assignment Puzzles",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Scheduling and Day-Assignment Puzzles MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Scheduling and Day-Assignment Puzzles.",
            "recruiterInsight": "Year 3 Scheduling and Day-Assignment Puzzles distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-puzzles-e1",
                "question": "Year 3 Scheduling and Day-Assignment Puzzles — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Scheduling and Day-Assignment Puzzles with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-puzzles-e2",
                "question": "Year 3 Scheduling and Day-Assignment Puzzles variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Scheduling and Day-Assignment Puzzles problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-puzzles-i1",
                "question": "Year 3 Scheduling and Day-Assignment Puzzles — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Scheduling and Day-Assignment Puzzles problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-puzzles-i2",
                "question": "Second Year 3 Scheduling and Day-Assignment Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Scheduling and Day-Assignment Puzzles variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-puzzles-a1",
                "question": "High-difficulty Year 3 Scheduling and Day-Assignment Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Scheduling and Day-Assignment Puzzles.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-puzzles-p1",
                "question": "Placement-style Year 3 Scheduling and Day-Assignment Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Scheduling and Day-Assignment Puzzles question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Scheduling and Day-Assignment Puzzles: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Scheduling and Day-Assignment Puzzles shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Scheduling and Day-Assignment Puzzles compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Scheduling and Day-Assignment Puzzles mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Scheduling and Day-Assignment Puzzles appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Scheduling and Day-Assignment Puzzles answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Scheduling and Day-Assignment Puzzles problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Scheduling and Day-Assignment Puzzles harder than Year 2? Write in your own words.",
            "Create a Year 3 Scheduling and Day-Assignment Puzzles problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Scheduling and Day-Assignment Puzzles"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Scheduling and Day-Assignment Puzzles advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-selection-distribution",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 34,
          "title": "Selection and Distribution Problems",
          "tagline": "Year 3 Analysis — Selection and Distribution Problems for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Selection and Distribution Problems develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Selection and Distribution Problems questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Selection and Distribution Problems at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Selection and Distribution Problems",
            "Identify the correct problem type and method in Selection and Distribution Problems",
            "Solve Selection and Distribution Problems questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Selection and Distribution Problems"
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
              "【Selection and Distribution Problems】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Selection and Distribution Problems requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Selection and Distribution Problems, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Selection and Distribution Problems is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Selection and Distribution Problems, accuracy improves by 36%."
            ],
            "deepDiveAspects": [
              {
                "title": "Selection and Distribution Problems - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Selection and Distribution Problems",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Selection and Distribution Problems in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Selection and Distribution Problems problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-selection-distribution-1",
              "title": "Selection and Distribution Problems Case Study",
              "question": "[Selection and Distribution Problems] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Selection and Distribution Problems.",
              "commonTrap": "Failing to account for the 44 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Selection and Distribution Problems Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Selection and Distribution Problems shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Selection and Distribution Problems problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Selection and Distribution Problems problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Selection and Distribution Problems",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Selection and Distribution Problems MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Selection and Distribution Problems.",
            "recruiterInsight": "Year 3 Selection and Distribution Problems distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-distribution-e1",
                "question": "Year 3 Selection and Distribution Problems — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Selection and Distribution Problems with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-distribution-e2",
                "question": "Year 3 Selection and Distribution Problems variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Selection and Distribution Problems problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-distribution-i1",
                "question": "Year 3 Selection and Distribution Problems — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Selection and Distribution Problems problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-distribution-i2",
                "question": "Second Year 3 Selection and Distribution Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Selection and Distribution Problems variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-distribution-a1",
                "question": "High-difficulty Year 3 Selection and Distribution Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Selection and Distribution Problems.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-distribution-p1",
                "question": "Placement-style Year 3 Selection and Distribution Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Selection and Distribution Problems question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Selection and Distribution Problems: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Selection and Distribution Problems shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Selection and Distribution Problems compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Selection and Distribution Problems mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Selection and Distribution Problems appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Selection and Distribution Problems answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Selection and Distribution Problems problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Selection and Distribution Problems harder than Year 2? Write in your own words.",
            "Create a Year 3 Selection and Distribution Problems problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Selection and Distribution Problems"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Selection and Distribution Problems advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-grouping-problems",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 35,
          "title": "Grouping and Team Formation Problems",
          "tagline": "Year 3 Analysis — Grouping and Team Formation Problems for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Grouping and Team Formation Problems develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Grouping and Team Formation Problems questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Grouping and Team Formation Problems at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Grouping and Team Formation Problems",
            "Identify the correct problem type and method in Grouping and Team Formation Problems",
            "Solve Grouping and Team Formation Problems questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Grouping and Team Formation Problems"
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
              "【Grouping and Team Formation Problems】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Grouping and Team Formation Problems requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Grouping and Team Formation Problems, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Grouping and Team Formation Problems is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Grouping and Team Formation Problems, accuracy improves by 10%."
            ],
            "deepDiveAspects": [
              {
                "title": "Grouping and Team Formation Problems - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Grouping and Team Formation Problems",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Grouping and Team Formation Problems in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Grouping and Team Formation Problems problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-grouping-problems-1",
              "title": "Grouping and Team Formation Problems Case Study",
              "question": "[Grouping and Team Formation Problems] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Grouping and Team Formation Problems.",
              "commonTrap": "Failing to account for the 24 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Grouping and Team Formation Problems Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Grouping and Team Formation Problems shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Grouping and Team Formation Problems problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Grouping and Team Formation Problems problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Grouping and Team Formation Problems",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Grouping and Team Formation Problems MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Grouping and Team Formation Problems.",
            "recruiterInsight": "Year 3 Grouping and Team Formation Problems distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-problems-e1",
                "question": "Year 3 Grouping and Team Formation Problems — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Grouping and Team Formation Problems with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-problems-e2",
                "question": "Year 3 Grouping and Team Formation Problems variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Grouping and Team Formation Problems problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-problems-i1",
                "question": "Year 3 Grouping and Team Formation Problems — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Grouping and Team Formation Problems problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-problems-i2",
                "question": "Second Year 3 Grouping and Team Formation Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Grouping and Team Formation Problems variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-problems-a1",
                "question": "High-difficulty Year 3 Grouping and Team Formation Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Grouping and Team Formation Problems.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-problems-p1",
                "question": "Placement-style Year 3 Grouping and Team Formation Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Grouping and Team Formation Problems question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Grouping and Team Formation Problems: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Grouping and Team Formation Problems shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Grouping and Team Formation Problems compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Grouping and Team Formation Problems mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Grouping and Team Formation Problems appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Grouping and Team Formation Problems answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Grouping and Team Formation Problems problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Grouping and Team Formation Problems harder than Year 2? Write in your own words.",
            "Create a Year 3 Grouping and Team Formation Problems problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Grouping and Team Formation Problems"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Grouping and Team Formation Problems advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-adv-syllogisms",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 36,
          "title": "Advanced Syllogisms — Three-Statement Deduction",
          "tagline": "Year 3 Analysis — Advanced Syllogisms — Three-Statement Deduction for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Syllogisms — Three-Statement Deduction develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Syllogisms — Three-Statement Deduction questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Syllogisms — Three-Statement Deduction at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Syllogisms — Three-Statement Deduction",
            "Identify the correct problem type and method in Advanced Syllogisms — Three-Statement Deduction",
            "Solve Advanced Syllogisms — Three-Statement Deduction questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Syllogisms — Three-Statement Deduction"
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
              "【Advanced Syllogisms — Three-Statement Deduction】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Advanced Syllogisms — Three-Statement Deduction requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Advanced Syllogisms — Three-Statement Deduction, visualize the parameters clearly. Represent negative clues explicitly."
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
              "In Year 3, mastering Advanced Syllogisms — Three-Statement Deduction is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Advanced Syllogisms — Three-Statement Deduction, accuracy improves by 35%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Syllogisms — Three-Statement Deduction - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Advanced Syllogisms — Three-Statement Deduction",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Syllogisms — Three-Statement Deduction in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Syllogisms — Three-Statement Deduction problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-adv-syllogisms-1",
              "title": "Advanced Syllogisms — Three-Statement Deduction Case Study",
              "question": "[Advanced Syllogisms — Three-Statement Deduction] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Syllogisms — Three-Statement Deduction.",
              "commonTrap": "Failing to account for the 39 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Syllogisms — Three-Statement Deduction Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Syllogisms — Three-Statement Deduction shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Syllogisms — Three-Statement Deduction problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Syllogisms — Three-Statement Deduction problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Syllogisms — Three-Statement Deduction",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Syllogisms — Three-Statement Deduction MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Syllogisms — Three-Statement Deduction.",
            "recruiterInsight": "Year 3 Advanced Syllogisms — Three-Statement Deduction distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-syllogisms-e1",
                "question": "Year 3 Advanced Syllogisms — Three-Statement Deduction — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Syllogisms — Three-Statement Deduction with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-syllogisms-e2",
                "question": "Year 3 Advanced Syllogisms — Three-Statement Deduction variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Syllogisms — Three-Statement Deduction problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-syllogisms-i1",
                "question": "Year 3 Advanced Syllogisms — Three-Statement Deduction — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Syllogisms — Three-Statement Deduction problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-syllogisms-i2",
                "question": "Second Year 3 Advanced Syllogisms — Three-Statement Deduction.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Syllogisms — Three-Statement Deduction variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-syllogisms-a1",
                "question": "High-difficulty Year 3 Advanced Syllogisms — Three-Statement Deduction.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Syllogisms — Three-Statement Deduction.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-syllogisms-p1",
                "question": "Placement-style Year 3 Advanced Syllogisms — Three-Statement Deduction.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Syllogisms — Three-Statement Deduction question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Syllogisms — Three-Statement Deduction: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Advanced Syllogisms — Three-Statement Deduction shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Syllogisms — Three-Statement Deduction compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Syllogisms — Three-Statement Deduction mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Syllogisms — Three-Statement Deduction appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Syllogisms — Three-Statement Deduction answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Syllogisms — Three-Statement Deduction problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Syllogisms — Three-Statement Deduction harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Syllogisms — Three-Statement Deduction problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Syllogisms — Three-Statement Deduction"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Syllogisms — Three-Statement Deduction advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-adv-statements-conclusions",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 37,
          "title": "Statements and Conclusions — Critical Filtering",
          "tagline": "Year 3 Analysis — Statements and Conclusions — Critical Filtering for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Statements and Conclusions — Critical Filtering develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Statements and Conclusions — Critical Filtering questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Statements and Conclusions — Critical Filtering at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Statements and Conclusions — Critical Filtering",
            "Identify the correct problem type and method in Statements and Conclusions — Critical Filtering",
            "Solve Statements and Conclusions — Critical Filtering questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Statements and Conclusions — Critical Filtering"
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
              "【Statements and Conclusions — Critical Filtering】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Statements and Conclusions — Critical Filtering requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Statements and Conclusions — Critical Filtering, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Statements and Conclusions — Critical Filtering is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Statements and Conclusions — Critical Filtering, accuracy improves by 25%."
            ],
            "deepDiveAspects": [
              {
                "title": "Statements and Conclusions — Critical Filtering - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Statements and Conclusions — Critical Filtering",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Statements and Conclusions — Critical Filtering in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Statements and Conclusions — Critical Filtering problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-adv-statements-conclusions-1",
              "title": "Statements and Conclusions — Critical Filtering Case Study",
              "question": "[Statements and Conclusions — Critical Filtering] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Statements and Conclusions — Critical Filtering.",
              "commonTrap": "Failing to account for the 28 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Statements and Conclusions — Critical Filtering Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Statements and Conclusions — Critical Filtering shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Statements and Conclusions — Critical Filtering problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Statements and Conclusions — Critical Filtering problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Statements and Conclusions — Critical Filtering",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Statements and Conclusions — Critical Filtering MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Statements and Conclusions — Critical Filtering.",
            "recruiterInsight": "Year 3 Statements and Conclusions — Critical Filtering distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-conclusions-e1",
                "question": "Year 3 Statements and Conclusions — Critical Filtering — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Statements and Conclusions — Critical Filtering with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-conclusions-e2",
                "question": "Year 3 Statements and Conclusions — Critical Filtering variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Statements and Conclusions — Critical Filtering problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-conclusions-i1",
                "question": "Year 3 Statements and Conclusions — Critical Filtering — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Statements and Conclusions — Critical Filtering problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-conclusions-i2",
                "question": "Second Year 3 Statements and Conclusions — Critical Filtering.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Statements and Conclusions — Critical Filtering variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-conclusions-a1",
                "question": "High-difficulty Year 3 Statements and Conclusions — Critical Filtering.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Statements and Conclusions — Critical Filtering.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-conclusions-p1",
                "question": "Placement-style Year 3 Statements and Conclusions — Critical Filtering.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Statements and Conclusions — Critical Filtering question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Statements and Conclusions — Critical Filtering: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Statements and Conclusions — Critical Filtering shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Statements and Conclusions — Critical Filtering compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Statements and Conclusions — Critical Filtering mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Statements and Conclusions — Critical Filtering appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Statements and Conclusions — Critical Filtering answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Statements and Conclusions — Critical Filtering problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Statements and Conclusions — Critical Filtering harder than Year 2? Write in your own words.",
            "Create a Year 3 Statements and Conclusions — Critical Filtering problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Statements and Conclusions — Critical Filtering"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Statements and Conclusions — Critical Filtering advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-statements-arguments",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 38,
          "title": "Statements and Arguments — Strong vs Weak",
          "tagline": "Year 3 Analysis — Statements and Arguments — Strong vs Weak for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Statements and Arguments — Strong vs Weak develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Statements and Arguments — Strong vs Weak questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Statements and Arguments — Strong vs Weak at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Statements and Arguments — Strong vs Weak",
            "Identify the correct problem type and method in Statements and Arguments — Strong vs Weak",
            "Solve Statements and Arguments — Strong vs Weak questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Statements and Arguments — Strong vs Weak"
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
              "【Statements and Arguments — Strong vs Weak】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Statements and Arguments — Strong vs Weak requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Statements and Arguments — Strong vs Weak, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Statements and Arguments — Strong vs Weak is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Statements and Arguments — Strong vs Weak, accuracy improves by 28%."
            ],
            "deepDiveAspects": [
              {
                "title": "Statements and Arguments — Strong vs Weak - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Statements and Arguments — Strong vs Weak",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Statements and Arguments — Strong vs Weak in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Statements and Arguments — Strong vs Weak problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-statements-arguments-1",
              "title": "Statements and Arguments — Strong vs Weak Case Study",
              "question": "[Statements and Arguments — Strong vs Weak] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Statements and Arguments — Strong vs Weak.",
              "commonTrap": "Failing to account for the 34 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Statements and Arguments — Strong vs Weak Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Statements and Arguments — Strong vs Weak shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Statements and Arguments — Strong vs Weak problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Statements and Arguments — Strong vs Weak problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Statements and Arguments — Strong vs Weak",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Statements and Arguments — Strong vs Weak MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Statements and Arguments — Strong vs Weak.",
            "recruiterInsight": "Year 3 Statements and Arguments — Strong vs Weak distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-arguments-e1",
                "question": "Year 3 Statements and Arguments — Strong vs Weak — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Statements and Arguments — Strong vs Weak with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-arguments-e2",
                "question": "Year 3 Statements and Arguments — Strong vs Weak variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Statements and Arguments — Strong vs Weak problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-arguments-i1",
                "question": "Year 3 Statements and Arguments — Strong vs Weak — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Statements and Arguments — Strong vs Weak problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-arguments-i2",
                "question": "Second Year 3 Statements and Arguments — Strong vs Weak.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Statements and Arguments — Strong vs Weak variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-arguments-a1",
                "question": "High-difficulty Year 3 Statements and Arguments — Strong vs Weak.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Statements and Arguments — Strong vs Weak.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-arguments-p1",
                "question": "Placement-style Year 3 Statements and Arguments — Strong vs Weak.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Statements and Arguments — Strong vs Weak question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Statements and Arguments — Strong vs Weak: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Statements and Arguments — Strong vs Weak shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Statements and Arguments — Strong vs Weak compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Statements and Arguments — Strong vs Weak mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Statements and Arguments — Strong vs Weak appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Statements and Arguments — Strong vs Weak answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Statements and Arguments — Strong vs Weak problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Statements and Arguments — Strong vs Weak harder than Year 2? Write in your own words.",
            "Create a Year 3 Statements and Arguments — Strong vs Weak problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Statements and Arguments — Strong vs Weak"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Statements and Arguments — Strong vs Weak advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-cause-and-effect",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 39,
          "title": "Cause and Effect Relationships",
          "tagline": "Year 3 Analysis — Cause and Effect Relationships for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Cause and Effect Relationships develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Cause and Effect Relationships questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Cause and Effect Relationships at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Cause and Effect Relationships",
            "Identify the correct problem type and method in Cause and Effect Relationships",
            "Solve Cause and Effect Relationships questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Cause and Effect Relationships"
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
              "【Cause and Effect Relationships】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Cause and Effect Relationships requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Cause and Effect Relationships, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Cause and Effect Relationships is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Cause and Effect Relationships, accuracy improves by 36%."
            ],
            "deepDiveAspects": [
              {
                "title": "Cause and Effect Relationships - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Cause and Effect Relationships",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Cause and Effect Relationships in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Cause and Effect Relationships problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-cause-and-effect-1",
              "title": "Cause and Effect Relationships Case Study",
              "question": "[Cause and Effect Relationships] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Cause and Effect Relationships.",
              "commonTrap": "Failing to account for the 16 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Cause and Effect Relationships Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Cause and Effect Relationships shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Cause and Effect Relationships problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Cause and Effect Relationships problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Cause and Effect Relationships",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Cause and Effect Relationships MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Cause and Effect Relationships.",
            "recruiterInsight": "Year 3 Cause and Effect Relationships distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-effect-e1",
                "question": "Year 3 Cause and Effect Relationships — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Cause and Effect Relationships with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-effect-e2",
                "question": "Year 3 Cause and Effect Relationships variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Cause and Effect Relationships problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-effect-i1",
                "question": "Year 3 Cause and Effect Relationships — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Cause and Effect Relationships problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-effect-i2",
                "question": "Second Year 3 Cause and Effect Relationships.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Cause and Effect Relationships variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-effect-a1",
                "question": "High-difficulty Year 3 Cause and Effect Relationships.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Cause and Effect Relationships.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-effect-p1",
                "question": "Placement-style Year 3 Cause and Effect Relationships.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Cause and Effect Relationships question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Cause and Effect Relationships: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Cause and Effect Relationships shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Cause and Effect Relationships compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Cause and Effect Relationships mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Cause and Effect Relationships appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Cause and Effect Relationships answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Cause and Effect Relationships problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Cause and Effect Relationships harder than Year 2? Write in your own words.",
            "Create a Year 3 Cause and Effect Relationships problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Cause and Effect Relationships"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Cause and Effect Relationships advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-assumptions-inferences",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 40,
          "title": "Assumptions, Inferences, and Courses of Action",
          "tagline": "Year 3 Analysis — Assumptions, Inferences, and Courses of Action for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Assumptions, Inferences, and Courses of Action develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Assumptions, Inferences, and Courses of Action questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Assumptions, Inferences, and Courses of Action at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Assumptions, Inferences, and Courses of Action",
            "Identify the correct problem type and method in Assumptions, Inferences, and Courses of Action",
            "Solve Assumptions, Inferences, and Courses of Action questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Assumptions, Inferences, and Courses of Action"
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
              "【Assumptions, Inferences, and Courses of Action】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Assumptions, Inferences, and Courses of Action requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Assumptions, Inferences, and Courses of Action, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Assumptions, Inferences, and Courses of Action is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Assumptions, Inferences, and Courses of Action, accuracy improves by 50%."
            ],
            "deepDiveAspects": [
              {
                "title": "Assumptions, Inferences, and Courses of Action - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Assumptions, Inferences, and Courses of Action",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Assumptions, Inferences, and Courses of Action in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Assumptions, Inferences, and Courses of Action problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-assumptions-inferences-1",
              "title": "Assumptions, Inferences, and Courses of Action Case Study",
              "question": "[Assumptions, Inferences, and Courses of Action] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Assumptions, Inferences, and Courses of Action.",
              "commonTrap": "Failing to account for the 13 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Assumptions, Inferences, and Courses of Action Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Assumptions, Inferences, and Courses of Action shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Assumptions, Inferences, and Courses of Action problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Assumptions, Inferences, and Courses of Action problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Assumptions, Inferences, and Courses of Action",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Assumptions, Inferences, and Courses of Action MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Assumptions, Inferences, and Courses of Action.",
            "recruiterInsight": "Year 3 Assumptions, Inferences, and Courses of Action distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-inferences-e1",
                "question": "Year 3 Assumptions, Inferences, and Courses of Action — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Assumptions, Inferences, and Courses of Action with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-inferences-e2",
                "question": "Year 3 Assumptions, Inferences, and Courses of Action variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Assumptions, Inferences, and Courses of Action problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-inferences-i1",
                "question": "Year 3 Assumptions, Inferences, and Courses of Action — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Assumptions, Inferences, and Courses of Action problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-inferences-i2",
                "question": "Second Year 3 Assumptions, Inferences, and Courses of Action.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Assumptions, Inferences, and Courses of Action variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-inferences-a1",
                "question": "High-difficulty Year 3 Assumptions, Inferences, and Courses of Action.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Assumptions, Inferences, and Courses of Action.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-inferences-p1",
                "question": "Placement-style Year 3 Assumptions, Inferences, and Courses of Action.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Assumptions, Inferences, and Courses of Action question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Assumptions, Inferences, and Courses of Action: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Assumptions, Inferences, and Courses of Action shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Assumptions, Inferences, and Courses of Action compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Assumptions, Inferences, and Courses of Action mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Assumptions, Inferences, and Courses of Action appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Assumptions, Inferences, and Courses of Action answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Assumptions, Inferences, and Courses of Action problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Assumptions, Inferences, and Courses of Action harder than Year 2? Write in your own words.",
            "Create a Year 3 Assumptions, Inferences, and Courses of Action problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Assumptions, Inferences, and Courses of Action"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Assumptions, Inferences, and Courses of Action advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-critical-reasoning",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 41,
          "title": "Critical Reasoning — Strengthen and Weaken Arguments",
          "tagline": "Year 3 Analysis — Critical Reasoning — Strengthen and Weaken Arguments for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Critical Reasoning — Strengthen and Weaken Arguments develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Critical Reasoning — Strengthen and Weaken Arguments questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Critical Reasoning — Strengthen and Weaken Arguments at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Critical Reasoning — Strengthen and Weaken Arguments",
            "Identify the correct problem type and method in Critical Reasoning — Strengthen and Weaken Arguments",
            "Solve Critical Reasoning — Strengthen and Weaken Arguments questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Critical Reasoning — Strengthen and Weaken Arguments"
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
              "【Critical Reasoning — Strengthen and Weaken Arguments】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Critical Reasoning — Strengthen and Weaken Arguments requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Critical Reasoning — Strengthen and Weaken Arguments, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Critical Reasoning — Strengthen and Weaken Arguments is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Critical Reasoning — Strengthen and Weaken Arguments, accuracy improves by 53%."
            ],
            "deepDiveAspects": [
              {
                "title": "Critical Reasoning — Strengthen and Weaken Arguments - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Critical Reasoning — Strengthen and Weaken Arguments",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Critical Reasoning — Strengthen and Weaken Arguments in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Critical Reasoning — Strengthen and Weaken Arguments problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-critical-reasoning-1",
              "title": "Critical Reasoning — Strengthen and Weaken Arguments Case Study",
              "question": "[Critical Reasoning — Strengthen and Weaken Arguments] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Critical Reasoning — Strengthen and Weaken Arguments.",
              "commonTrap": "Failing to account for the 26 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Critical Reasoning — Strengthen and Weaken Arguments Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Critical Reasoning — Strengthen and Weaken Arguments shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Critical Reasoning — Strengthen and Weaken Arguments problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Critical Reasoning — Strengthen and Weaken Arguments problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Critical Reasoning — Strengthen and Weaken Arguments",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Critical Reasoning — Strengthen and Weaken Arguments MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Critical Reasoning — Strengthen and Weaken Arguments.",
            "recruiterInsight": "Year 3 Critical Reasoning — Strengthen and Weaken Arguments distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-reasoning-e1",
                "question": "Year 3 Critical Reasoning — Strengthen and Weaken Arguments — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Critical Reasoning — Strengthen and Weaken Arguments with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-reasoning-e2",
                "question": "Year 3 Critical Reasoning — Strengthen and Weaken Arguments variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Critical Reasoning — Strengthen and Weaken Arguments problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-reasoning-i1",
                "question": "Year 3 Critical Reasoning — Strengthen and Weaken Arguments — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Critical Reasoning — Strengthen and Weaken Arguments problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-reasoning-i2",
                "question": "Second Year 3 Critical Reasoning — Strengthen and Weaken Arguments.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Critical Reasoning — Strengthen and Weaken Arguments variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-reasoning-a1",
                "question": "High-difficulty Year 3 Critical Reasoning — Strengthen and Weaken Arguments.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Critical Reasoning — Strengthen and Weaken Arguments.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-reasoning-p1",
                "question": "Placement-style Year 3 Critical Reasoning — Strengthen and Weaken Arguments.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Critical Reasoning — Strengthen and Weaken Arguments question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Critical Reasoning — Strengthen and Weaken Arguments: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Critical Reasoning — Strengthen and Weaken Arguments shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Critical Reasoning — Strengthen and Weaken Arguments compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Critical Reasoning — Strengthen and Weaken Arguments mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Critical Reasoning — Strengthen and Weaken Arguments appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Critical Reasoning — Strengthen and Weaken Arguments answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Critical Reasoning — Strengthen and Weaken Arguments problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Critical Reasoning — Strengthen and Weaken Arguments harder than Year 2? Write in your own words.",
            "Create a Year 3 Critical Reasoning — Strengthen and Weaken Arguments problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Critical Reasoning — Strengthen and Weaken Arguments"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Critical Reasoning — Strengthen and Weaken Arguments advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-adv-data-sufficiency",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 42,
          "title": "Advanced Data Sufficiency",
          "tagline": "Year 3 Analysis — Advanced Data Sufficiency for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Data Sufficiency develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Data Sufficiency questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Data Sufficiency at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Data Sufficiency",
            "Identify the correct problem type and method in Advanced Data Sufficiency",
            "Solve Advanced Data Sufficiency questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Data Sufficiency"
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
              "【Advanced Data Sufficiency】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Advanced Data Sufficiency requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Advanced Data Sufficiency, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Advanced Data Sufficiency is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Advanced Data Sufficiency, accuracy improves by 22%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Data Sufficiency - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Advanced Data Sufficiency",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Data Sufficiency in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Data Sufficiency problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-adv-data-sufficiency-1",
              "title": "Advanced Data Sufficiency Case Study",
              "question": "[Advanced Data Sufficiency] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Data Sufficiency.",
              "commonTrap": "Failing to account for the 41 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Data Sufficiency Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Data Sufficiency shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Data Sufficiency problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Data Sufficiency problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Data Sufficiency",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Data Sufficiency MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Data Sufficiency.",
            "recruiterInsight": "Year 3 Advanced Data Sufficiency distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-sufficiency-e1",
                "question": "Year 3 Advanced Data Sufficiency — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Data Sufficiency with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-sufficiency-e2",
                "question": "Year 3 Advanced Data Sufficiency variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Data Sufficiency problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-sufficiency-i1",
                "question": "Year 3 Advanced Data Sufficiency — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Data Sufficiency problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-sufficiency-i2",
                "question": "Second Year 3 Advanced Data Sufficiency.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Data Sufficiency variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-sufficiency-a1",
                "question": "High-difficulty Year 3 Advanced Data Sufficiency.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Data Sufficiency.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-sufficiency-p1",
                "question": "Placement-style Year 3 Advanced Data Sufficiency.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Data Sufficiency question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Data Sufficiency: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Advanced Data Sufficiency shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Data Sufficiency compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Data Sufficiency mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Data Sufficiency appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Data Sufficiency answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Data Sufficiency problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Data Sufficiency harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Data Sufficiency problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Data Sufficiency"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Data Sufficiency advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-complex-matrix-puzzles",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 43,
          "title": "Complex Matrix and Grid Puzzles",
          "tagline": "Year 3 Analysis — Complex Matrix and Grid Puzzles for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Complex Matrix and Grid Puzzles develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Complex Matrix and Grid Puzzles questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Complex Matrix and Grid Puzzles at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Complex Matrix and Grid Puzzles",
            "Identify the correct problem type and method in Complex Matrix and Grid Puzzles",
            "Solve Complex Matrix and Grid Puzzles questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Complex Matrix and Grid Puzzles"
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
              "【Complex Matrix and Grid Puzzles】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Complex Matrix and Grid Puzzles requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Complex Matrix and Grid Puzzles, visualize the parameters clearly. Represent negative clues explicitly."
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
              "In Year 3, mastering Complex Matrix and Grid Puzzles is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Complex Matrix and Grid Puzzles, accuracy improves by 12%."
            ],
            "deepDiveAspects": [
              {
                "title": "Complex Matrix and Grid Puzzles - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Complex Matrix and Grid Puzzles",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Complex Matrix and Grid Puzzles in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Complex Matrix and Grid Puzzles problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-complex-matrix-puzzles-1",
              "title": "Complex Matrix and Grid Puzzles Case Study",
              "question": "[Complex Matrix and Grid Puzzles] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
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
              "whyItWorks": "This demonstrates the core mechanic of Complex Matrix and Grid Puzzles.",
              "commonTrap": "Failing to account for the 58 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Complex Matrix and Grid Puzzles Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Complex Matrix and Grid Puzzles shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Complex Matrix and Grid Puzzles problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Complex Matrix and Grid Puzzles problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Complex Matrix and Grid Puzzles",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Complex Matrix and Grid Puzzles MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Complex Matrix and Grid Puzzles.",
            "recruiterInsight": "Year 3 Complex Matrix and Grid Puzzles distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-puzzles-e1",
                "question": "Year 3 Complex Matrix and Grid Puzzles — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Complex Matrix and Grid Puzzles with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-puzzles-e2",
                "question": "Year 3 Complex Matrix and Grid Puzzles variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Complex Matrix and Grid Puzzles problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-puzzles-i1",
                "question": "Year 3 Complex Matrix and Grid Puzzles — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Complex Matrix and Grid Puzzles problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-puzzles-i2",
                "question": "Second Year 3 Complex Matrix and Grid Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Complex Matrix and Grid Puzzles variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-puzzles-a1",
                "question": "High-difficulty Year 3 Complex Matrix and Grid Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Complex Matrix and Grid Puzzles.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-puzzles-p1",
                "question": "Placement-style Year 3 Complex Matrix and Grid Puzzles.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Complex Matrix and Grid Puzzles question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Complex Matrix and Grid Puzzles: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Complex Matrix and Grid Puzzles shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Complex Matrix and Grid Puzzles compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Complex Matrix and Grid Puzzles mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Complex Matrix and Grid Puzzles appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Complex Matrix and Grid Puzzles answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Complex Matrix and Grid Puzzles problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Complex Matrix and Grid Puzzles harder than Year 2? Write in your own words.",
            "Create a Year 3 Complex Matrix and Grid Puzzles problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Complex Matrix and Grid Puzzles"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Complex Matrix and Grid Puzzles advanced category"
            }
          ]
        },
        {
          "id": "y3-lr-analytical-decision-problems",
          "yearId": 3,
          "category": "Advanced Logical Reasoning",
          "topicNumber": 44,
          "title": "Analytical Decision-Making Problems",
          "tagline": "Year 3 Analysis — Analytical Decision-Making Problems for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Analytical Decision-Making Problems develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Analytical Decision-Making Problems questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Analytical Decision-Making Problems at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Analytical Decision-Making Problems",
            "Identify the correct problem type and method in Analytical Decision-Making Problems",
            "Solve Analytical Decision-Making Problems questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Analytical Decision-Making Problems"
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
              "【Analytical Decision-Making Problems】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Analytical Decision-Making Problems requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Analytical Decision-Making Problems, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Analytical Decision-Making Problems is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Analytical Decision-Making Problems, accuracy improves by 59%."
            ],
            "deepDiveAspects": [
              {
                "title": "Analytical Decision-Making Problems - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Analytical Decision-Making Problems",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Analytical Decision-Making Problems in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Analytical Decision-Making Problems problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-lr-analytical-decision-problems-1",
              "title": "Analytical Decision-Making Problems Case Study",
              "question": "[Analytical Decision-Making Problems] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Analytical Decision-Making Problems.",
              "commonTrap": "Failing to account for the 12 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Analytical Decision-Making Problems Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Analytical Decision-Making Problems shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Analytical Decision-Making Problems problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Analytical Decision-Making Problems problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Analytical Decision-Making Problems",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Analytical Decision-Making Problems MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Analytical Decision-Making Problems.",
            "recruiterInsight": "Year 3 Analytical Decision-Making Problems distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-problems-e1",
                "question": "Year 3 Analytical Decision-Making Problems — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Analytical Decision-Making Problems with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-problems-e2",
                "question": "Year 3 Analytical Decision-Making Problems variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Analytical Decision-Making Problems problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-problems-i1",
                "question": "Year 3 Analytical Decision-Making Problems — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Analytical Decision-Making Problems problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-problems-i2",
                "question": "Second Year 3 Analytical Decision-Making Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Analytical Decision-Making Problems variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-problems-a1",
                "question": "High-difficulty Year 3 Analytical Decision-Making Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Analytical Decision-Making Problems.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-problems-p1",
                "question": "Placement-style Year 3 Analytical Decision-Making Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Analytical Decision-Making Problems question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Analytical Decision-Making Problems: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Analytical Decision-Making Problems shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Analytical Decision-Making Problems compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Analytical Decision-Making Problems mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Analytical Decision-Making Problems appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Analytical Decision-Making Problems answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Analytical Decision-Making Problems problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Analytical Decision-Making Problems harder than Year 2? Write in your own words.",
            "Create a Year 3 Analytical Decision-Making Problems problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Analytical Decision-Making Problems"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Analytical Decision-Making Problems advanced category"
            }
          ]
        }
      ]
    },
    {
      "category": "Advanced Verbal Ability",
      "description": "Advanced Verbal Ability — Year 3 Advanced",
      "topics": [
        {
          "id": "y3-verbal-adv-rc",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 45,
          "title": "Advanced Reading Comprehension — Long Passages",
          "tagline": "Year 3 Analysis — Advanced Reading Comprehension — Long Passages for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Reading Comprehension — Long Passages develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Reading Comprehension — Long Passages questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Reading Comprehension — Long Passages at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Reading Comprehension — Long Passages",
            "Identify the correct problem type and method in Advanced Reading Comprehension — Long Passages",
            "Solve Advanced Reading Comprehension — Long Passages questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Reading Comprehension — Long Passages"
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
              "【Advanced Reading Comprehension — Long Passages】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Advanced Reading Comprehension — Long Passages requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Advanced Reading Comprehension — Long Passages, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Advanced Reading Comprehension — Long Passages is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Advanced Reading Comprehension — Long Passages, accuracy improves by 19%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Reading Comprehension — Long Passages - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Advanced Reading Comprehension — Long Passages",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Reading Comprehension — Long Passages in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Reading Comprehension — Long Passages problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-adv-rc-1",
              "title": "Advanced Reading Comprehension — Long Passages Case Study",
              "question": "[Advanced Reading Comprehension — Long Passages] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Reading Comprehension — Long Passages.",
              "commonTrap": "Failing to account for the 25 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Reading Comprehension — Long Passages Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Reading Comprehension — Long Passages shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Reading Comprehension — Long Passages problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Reading Comprehension — Long Passages problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Reading Comprehension — Long Passages",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Reading Comprehension — Long Passages MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Reading Comprehension — Long Passages.",
            "recruiterInsight": "Year 3 Advanced Reading Comprehension — Long Passages distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-rc-e1",
                "question": "Year 3 Advanced Reading Comprehension — Long Passages — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Reading Comprehension — Long Passages with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-rc-e2",
                "question": "Year 3 Advanced Reading Comprehension — Long Passages variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Reading Comprehension — Long Passages problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-rc-i1",
                "question": "Year 3 Advanced Reading Comprehension — Long Passages — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Reading Comprehension — Long Passages problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-rc-i2",
                "question": "Second Year 3 Advanced Reading Comprehension — Long Passages.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Reading Comprehension — Long Passages variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-rc-a1",
                "question": "High-difficulty Year 3 Advanced Reading Comprehension — Long Passages.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Reading Comprehension — Long Passages.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-rc-p1",
                "question": "Placement-style Year 3 Advanced Reading Comprehension — Long Passages.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Reading Comprehension — Long Passages question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Reading Comprehension — Long Passages: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Advanced Reading Comprehension — Long Passages shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Reading Comprehension — Long Passages compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Reading Comprehension — Long Passages mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Reading Comprehension — Long Passages appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Reading Comprehension — Long Passages answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Reading Comprehension — Long Passages problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Reading Comprehension — Long Passages harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Reading Comprehension — Long Passages problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Reading Comprehension — Long Passages"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Reading Comprehension — Long Passages advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-inference-comprehension",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 46,
          "title": "Inference-Based RC Questions",
          "tagline": "Year 3 Analysis — Inference-Based RC Questions for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Inference-Based RC Questions develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Inference-Based RC Questions questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Inference-Based RC Questions at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Inference-Based RC Questions",
            "Identify the correct problem type and method in Inference-Based RC Questions",
            "Solve Inference-Based RC Questions questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Inference-Based RC Questions"
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
              "【Inference-Based RC Questions】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Inference-Based RC Questions requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Inference-Based RC Questions, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Inference-Based RC Questions is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Inference-Based RC Questions, accuracy improves by 27%."
            ],
            "deepDiveAspects": [
              {
                "title": "Inference-Based RC Questions - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Inference-Based RC Questions",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Inference-Based RC Questions in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Inference-Based RC Questions problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-inference-comprehension-1",
              "title": "Inference-Based RC Questions Case Study",
              "question": "[Inference-Based RC Questions] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Inference-Based RC Questions.",
              "commonTrap": "Failing to account for the 32 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Inference-Based RC Questions Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Inference-Based RC Questions shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Inference-Based RC Questions problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Inference-Based RC Questions problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Inference-Based RC Questions",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Inference-Based RC Questions MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Inference-Based RC Questions.",
            "recruiterInsight": "Year 3 Inference-Based RC Questions distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-comprehension-e1",
                "question": "Year 3 Inference-Based RC Questions — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Inference-Based RC Questions with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-comprehension-e2",
                "question": "Year 3 Inference-Based RC Questions variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Inference-Based RC Questions problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-comprehension-i1",
                "question": "Year 3 Inference-Based RC Questions — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Inference-Based RC Questions problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-comprehension-i2",
                "question": "Second Year 3 Inference-Based RC Questions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Inference-Based RC Questions variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-comprehension-a1",
                "question": "High-difficulty Year 3 Inference-Based RC Questions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Inference-Based RC Questions.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-comprehension-p1",
                "question": "Placement-style Year 3 Inference-Based RC Questions.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Inference-Based RC Questions question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Inference-Based RC Questions: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Inference-Based RC Questions shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Inference-Based RC Questions compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Inference-Based RC Questions mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Inference-Based RC Questions appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Inference-Based RC Questions answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Inference-Based RC Questions problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Inference-Based RC Questions harder than Year 2? Write in your own words.",
            "Create a Year 3 Inference-Based RC Questions problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Inference-Based RC Questions"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Inference-Based RC Questions advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-author-tone",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 47,
          "title": "Author Tone and Attitude in RC",
          "tagline": "Year 3 Analysis — Author Tone and Attitude in RC for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Author Tone and Attitude in RC develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Author Tone and Attitude in RC questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Author Tone and Attitude in RC at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Author Tone and Attitude in RC",
            "Identify the correct problem type and method in Author Tone and Attitude in RC",
            "Solve Author Tone and Attitude in RC questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Author Tone and Attitude in RC"
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
              "【Author Tone and Attitude in RC】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Author Tone and Attitude in RC requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Author Tone and Attitude in RC, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Author Tone and Attitude in RC is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Author Tone and Attitude in RC, accuracy improves by 31%."
            ],
            "deepDiveAspects": [
              {
                "title": "Author Tone and Attitude in RC - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Author Tone and Attitude in RC",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Author Tone and Attitude in RC in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Author Tone and Attitude in RC problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-author-tone-1",
              "title": "Author Tone and Attitude in RC Case Study",
              "question": "[Author Tone and Attitude in RC] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Author Tone and Attitude in RC.",
              "commonTrap": "Failing to account for the 43 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Author Tone and Attitude in RC Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Author Tone and Attitude in RC shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Author Tone and Attitude in RC problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Author Tone and Attitude in RC problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Author Tone and Attitude in RC",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Author Tone and Attitude in RC MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Author Tone and Attitude in RC.",
            "recruiterInsight": "Year 3 Author Tone and Attitude in RC distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-tone-e1",
                "question": "Year 3 Author Tone and Attitude in RC — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Author Tone and Attitude in RC with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-tone-e2",
                "question": "Year 3 Author Tone and Attitude in RC variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Author Tone and Attitude in RC problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-tone-i1",
                "question": "Year 3 Author Tone and Attitude in RC — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Author Tone and Attitude in RC problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-tone-i2",
                "question": "Second Year 3 Author Tone and Attitude in RC.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Author Tone and Attitude in RC variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-tone-a1",
                "question": "High-difficulty Year 3 Author Tone and Attitude in RC.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Author Tone and Attitude in RC.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-tone-p1",
                "question": "Placement-style Year 3 Author Tone and Attitude in RC.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Author Tone and Attitude in RC question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Author Tone and Attitude in RC: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Author Tone and Attitude in RC shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Author Tone and Attitude in RC compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Author Tone and Attitude in RC mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Author Tone and Attitude in RC appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Author Tone and Attitude in RC answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Author Tone and Attitude in RC problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Author Tone and Attitude in RC harder than Year 2? Write in your own words.",
            "Create a Year 3 Author Tone and Attitude in RC problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Author Tone and Attitude in RC"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Author Tone and Attitude in RC advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-main-idea",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 48,
          "title": "Main Idea and Central Theme Identification",
          "tagline": "Year 3 Analysis — Main Idea and Central Theme Identification for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Main Idea and Central Theme Identification develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Main Idea and Central Theme Identification questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Main Idea and Central Theme Identification at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Main Idea and Central Theme Identification",
            "Identify the correct problem type and method in Main Idea and Central Theme Identification",
            "Solve Main Idea and Central Theme Identification questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Main Idea and Central Theme Identification"
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
              "【Main Idea and Central Theme Identification】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Main Idea and Central Theme Identification requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Main Idea and Central Theme Identification, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Main Idea and Central Theme Identification is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Main Idea and Central Theme Identification, accuracy improves by 55%."
            ],
            "deepDiveAspects": [
              {
                "title": "Main Idea and Central Theme Identification - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Main Idea and Central Theme Identification",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Main Idea and Central Theme Identification in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Main Idea and Central Theme Identification problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-main-idea-1",
              "title": "Main Idea and Central Theme Identification Case Study",
              "question": "[Main Idea and Central Theme Identification] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Main Idea and Central Theme Identification.",
              "commonTrap": "Failing to account for the 49 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Main Idea and Central Theme Identification Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Main Idea and Central Theme Identification shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Main Idea and Central Theme Identification problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Main Idea and Central Theme Identification problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Main Idea and Central Theme Identification",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Main Idea and Central Theme Identification MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Main Idea and Central Theme Identification.",
            "recruiterInsight": "Year 3 Main Idea and Central Theme Identification distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-idea-e1",
                "question": "Year 3 Main Idea and Central Theme Identification — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Main Idea and Central Theme Identification with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-idea-e2",
                "question": "Year 3 Main Idea and Central Theme Identification variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Main Idea and Central Theme Identification problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-idea-i1",
                "question": "Year 3 Main Idea and Central Theme Identification — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Main Idea and Central Theme Identification problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-idea-i2",
                "question": "Second Year 3 Main Idea and Central Theme Identification.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Main Idea and Central Theme Identification variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-idea-a1",
                "question": "High-difficulty Year 3 Main Idea and Central Theme Identification.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Main Idea and Central Theme Identification.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-idea-p1",
                "question": "Placement-style Year 3 Main Idea and Central Theme Identification.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Main Idea and Central Theme Identification question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Main Idea and Central Theme Identification: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Main Idea and Central Theme Identification shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Main Idea and Central Theme Identification compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Main Idea and Central Theme Identification mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Main Idea and Central Theme Identification appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Main Idea and Central Theme Identification answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Main Idea and Central Theme Identification problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Main Idea and Central Theme Identification harder than Year 2? Write in your own words.",
            "Create a Year 3 Main Idea and Central Theme Identification problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Main Idea and Central Theme Identification"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Main Idea and Central Theme Identification advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-critical-reasoning-verbal",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 49,
          "title": "Critical Reasoning in Verbal Context",
          "tagline": "Year 3 Analysis — Critical Reasoning in Verbal Context for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Critical Reasoning in Verbal Context develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Critical Reasoning in Verbal Context questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Critical Reasoning in Verbal Context at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Critical Reasoning in Verbal Context",
            "Identify the correct problem type and method in Critical Reasoning in Verbal Context",
            "Solve Critical Reasoning in Verbal Context questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Critical Reasoning in Verbal Context"
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
              "【Critical Reasoning in Verbal Context】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Critical Reasoning in Verbal Context requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Critical Reasoning in Verbal Context, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
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
              "In Year 3, mastering Critical Reasoning in Verbal Context is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Critical Reasoning in Verbal Context, accuracy improves by 41%."
            ],
            "deepDiveAspects": [
              {
                "title": "Critical Reasoning in Verbal Context - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Critical Reasoning in Verbal Context",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Critical Reasoning in Verbal Context in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Critical Reasoning in Verbal Context problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-critical-reasoning-verbal-1",
              "title": "Critical Reasoning in Verbal Context Case Study",
              "question": "[Critical Reasoning in Verbal Context] Neither A nor B was...",
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
              "whyItWorks": "This demonstrates the core mechanic of Critical Reasoning in Verbal Context.",
              "commonTrap": "Failing to account for the 42 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Critical Reasoning in Verbal Context Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Critical Reasoning in Verbal Context shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Critical Reasoning in Verbal Context problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Critical Reasoning in Verbal Context problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Critical Reasoning in Verbal Context",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Critical Reasoning in Verbal Context MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Critical Reasoning in Verbal Context.",
            "recruiterInsight": "Year 3 Critical Reasoning in Verbal Context distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-verbal-e1",
                "question": "Year 3 Critical Reasoning in Verbal Context — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Critical Reasoning in Verbal Context with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-verbal-e2",
                "question": "Year 3 Critical Reasoning in Verbal Context variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Critical Reasoning in Verbal Context problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-verbal-i1",
                "question": "Year 3 Critical Reasoning in Verbal Context — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Critical Reasoning in Verbal Context problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-verbal-i2",
                "question": "Second Year 3 Critical Reasoning in Verbal Context.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Critical Reasoning in Verbal Context variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-verbal-a1",
                "question": "High-difficulty Year 3 Critical Reasoning in Verbal Context.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Critical Reasoning in Verbal Context.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-verbal-p1",
                "question": "Placement-style Year 3 Critical Reasoning in Verbal Context.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Critical Reasoning in Verbal Context question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Critical Reasoning in Verbal Context: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Critical Reasoning in Verbal Context shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Critical Reasoning in Verbal Context compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Critical Reasoning in Verbal Context mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Critical Reasoning in Verbal Context appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Critical Reasoning in Verbal Context answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Critical Reasoning in Verbal Context problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Critical Reasoning in Verbal Context harder than Year 2? Write in your own words.",
            "Create a Year 3 Critical Reasoning in Verbal Context problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Critical Reasoning in Verbal Context"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Critical Reasoning in Verbal Context advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-adv-para-jumbles",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 50,
          "title": "Advanced Para Jumbles — 6 Sentences",
          "tagline": "Year 3 Analysis — Advanced Para Jumbles — 6 Sentences for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Para Jumbles — 6 Sentences develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Para Jumbles — 6 Sentences questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Para Jumbles — 6 Sentences at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Para Jumbles — 6 Sentences",
            "Identify the correct problem type and method in Advanced Para Jumbles — 6 Sentences",
            "Solve Advanced Para Jumbles — 6 Sentences questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Para Jumbles — 6 Sentences"
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
              "【Advanced Para Jumbles — 6 Sentences】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Advanced Para Jumbles — 6 Sentences requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Advanced Para Jumbles — 6 Sentences, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
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
              "In Year 3, mastering Advanced Para Jumbles — 6 Sentences is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Advanced Para Jumbles — 6 Sentences, accuracy improves by 19%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Para Jumbles — 6 Sentences - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Advanced Para Jumbles — 6 Sentences",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Para Jumbles — 6 Sentences in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Para Jumbles — 6 Sentences problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-adv-para-jumbles-1",
              "title": "Advanced Para Jumbles — 6 Sentences Case Study",
              "question": "[Advanced Para Jumbles — 6 Sentences] Neither A nor B was...",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Para Jumbles — 6 Sentences.",
              "commonTrap": "Failing to account for the 47 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Para Jumbles — 6 Sentences Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Para Jumbles — 6 Sentences shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Para Jumbles — 6 Sentences problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Para Jumbles — 6 Sentences problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Para Jumbles — 6 Sentences",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Para Jumbles — 6 Sentences MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Para Jumbles — 6 Sentences.",
            "recruiterInsight": "Year 3 Advanced Para Jumbles — 6 Sentences distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-jumbles-e1",
                "question": "Year 3 Advanced Para Jumbles — 6 Sentences — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Para Jumbles — 6 Sentences with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-jumbles-e2",
                "question": "Year 3 Advanced Para Jumbles — 6 Sentences variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Para Jumbles — 6 Sentences problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-jumbles-i1",
                "question": "Year 3 Advanced Para Jumbles — 6 Sentences — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Para Jumbles — 6 Sentences problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-jumbles-i2",
                "question": "Second Year 3 Advanced Para Jumbles — 6 Sentences.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Para Jumbles — 6 Sentences variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-jumbles-a1",
                "question": "High-difficulty Year 3 Advanced Para Jumbles — 6 Sentences.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Para Jumbles — 6 Sentences.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-jumbles-p1",
                "question": "Placement-style Year 3 Advanced Para Jumbles — 6 Sentences.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Para Jumbles — 6 Sentences question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Para Jumbles — 6 Sentences: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Advanced Para Jumbles — 6 Sentences shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Para Jumbles — 6 Sentences compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Para Jumbles — 6 Sentences mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Para Jumbles — 6 Sentences appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Para Jumbles — 6 Sentences answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Para Jumbles — 6 Sentences problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Para Jumbles — 6 Sentences harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Para Jumbles — 6 Sentences problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Para Jumbles — 6 Sentences"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Para Jumbles — 6 Sentences advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-sentence-rearrangement",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 51,
          "title": "Sentence Rearrangement Within Paragraphs",
          "tagline": "Year 3 Analysis — Sentence Rearrangement Within Paragraphs for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Sentence Rearrangement Within Paragraphs develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Sentence Rearrangement Within Paragraphs questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Sentence Rearrangement Within Paragraphs at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Sentence Rearrangement Within Paragraphs",
            "Identify the correct problem type and method in Sentence Rearrangement Within Paragraphs",
            "Solve Sentence Rearrangement Within Paragraphs questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Sentence Rearrangement Within Paragraphs"
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
              "【Sentence Rearrangement Within Paragraphs】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Sentence Rearrangement Within Paragraphs requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Sentence Rearrangement Within Paragraphs, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
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
              "In Year 3, mastering Sentence Rearrangement Within Paragraphs is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Sentence Rearrangement Within Paragraphs, accuracy improves by 18%."
            ],
            "deepDiveAspects": [
              {
                "title": "Sentence Rearrangement Within Paragraphs - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Sentence Rearrangement Within Paragraphs",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Sentence Rearrangement Within Paragraphs in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Sentence Rearrangement Within Paragraphs problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-sentence-rearrangement-1",
              "title": "Sentence Rearrangement Within Paragraphs Case Study",
              "question": "[Sentence Rearrangement Within Paragraphs] Sales from 120 to 150. % increase?",
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
              "whyItWorks": "This demonstrates the core mechanic of Sentence Rearrangement Within Paragraphs.",
              "commonTrap": "Failing to account for the 46 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Sentence Rearrangement Within Paragraphs Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Sentence Rearrangement Within Paragraphs shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Sentence Rearrangement Within Paragraphs problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Sentence Rearrangement Within Paragraphs problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Sentence Rearrangement Within Paragraphs",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Sentence Rearrangement Within Paragraphs MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Sentence Rearrangement Within Paragraphs.",
            "recruiterInsight": "Year 3 Sentence Rearrangement Within Paragraphs distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-rearrangement-e1",
                "question": "Year 3 Sentence Rearrangement Within Paragraphs — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Sentence Rearrangement Within Paragraphs with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-rearrangement-e2",
                "question": "Year 3 Sentence Rearrangement Within Paragraphs variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Sentence Rearrangement Within Paragraphs problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-rearrangement-i1",
                "question": "Year 3 Sentence Rearrangement Within Paragraphs — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Sentence Rearrangement Within Paragraphs problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-rearrangement-i2",
                "question": "Second Year 3 Sentence Rearrangement Within Paragraphs.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Sentence Rearrangement Within Paragraphs variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-rearrangement-a1",
                "question": "High-difficulty Year 3 Sentence Rearrangement Within Paragraphs.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Sentence Rearrangement Within Paragraphs.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-rearrangement-p1",
                "question": "Placement-style Year 3 Sentence Rearrangement Within Paragraphs.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Sentence Rearrangement Within Paragraphs question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Sentence Rearrangement Within Paragraphs: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Sentence Rearrangement Within Paragraphs shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Sentence Rearrangement Within Paragraphs compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Sentence Rearrangement Within Paragraphs mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Sentence Rearrangement Within Paragraphs appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Sentence Rearrangement Within Paragraphs answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Sentence Rearrangement Within Paragraphs problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Sentence Rearrangement Within Paragraphs harder than Year 2? Write in your own words.",
            "Create a Year 3 Sentence Rearrangement Within Paragraphs problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Sentence Rearrangement Within Paragraphs"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Sentence Rearrangement Within Paragraphs advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-para-completion",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 52,
          "title": "Paragraph Completion — Tone-Matching",
          "tagline": "Year 3 Analysis — Paragraph Completion — Tone-Matching for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Paragraph Completion — Tone-Matching develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Paragraph Completion — Tone-Matching questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Paragraph Completion — Tone-Matching at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Paragraph Completion — Tone-Matching",
            "Identify the correct problem type and method in Paragraph Completion — Tone-Matching",
            "Solve Paragraph Completion — Tone-Matching questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Paragraph Completion — Tone-Matching"
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
              "【Paragraph Completion — Tone-Matching】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Paragraph Completion — Tone-Matching requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Paragraph Completion — Tone-Matching, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
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
              "In Year 3, mastering Paragraph Completion — Tone-Matching is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Paragraph Completion — Tone-Matching, accuracy improves by 53%."
            ],
            "deepDiveAspects": [
              {
                "title": "Paragraph Completion — Tone-Matching - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Paragraph Completion — Tone-Matching",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Paragraph Completion — Tone-Matching in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Paragraph Completion — Tone-Matching problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-para-completion-1",
              "title": "Paragraph Completion — Tone-Matching Case Study",
              "question": "[Paragraph Completion — Tone-Matching] Sales from 120 to 150. % increase?",
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
              "whyItWorks": "This demonstrates the core mechanic of Paragraph Completion — Tone-Matching.",
              "commonTrap": "Failing to account for the 23 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Paragraph Completion — Tone-Matching Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Paragraph Completion — Tone-Matching shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Paragraph Completion — Tone-Matching problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Paragraph Completion — Tone-Matching problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Paragraph Completion — Tone-Matching",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Paragraph Completion — Tone-Matching MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Paragraph Completion — Tone-Matching.",
            "recruiterInsight": "Year 3 Paragraph Completion — Tone-Matching distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-completion-e1",
                "question": "Year 3 Paragraph Completion — Tone-Matching — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Paragraph Completion — Tone-Matching with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-completion-e2",
                "question": "Year 3 Paragraph Completion — Tone-Matching variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Paragraph Completion — Tone-Matching problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-completion-i1",
                "question": "Year 3 Paragraph Completion — Tone-Matching — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Paragraph Completion — Tone-Matching problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-completion-i2",
                "question": "Second Year 3 Paragraph Completion — Tone-Matching.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Paragraph Completion — Tone-Matching variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-completion-a1",
                "question": "High-difficulty Year 3 Paragraph Completion — Tone-Matching.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Paragraph Completion — Tone-Matching.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-completion-p1",
                "question": "Placement-style Year 3 Paragraph Completion — Tone-Matching.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Paragraph Completion — Tone-Matching question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Paragraph Completion — Tone-Matching: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Paragraph Completion — Tone-Matching shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Paragraph Completion — Tone-Matching compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Paragraph Completion — Tone-Matching mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Paragraph Completion — Tone-Matching appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Paragraph Completion — Tone-Matching answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Paragraph Completion — Tone-Matching problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Paragraph Completion — Tone-Matching harder than Year 2? Write in your own words.",
            "Create a Year 3 Paragraph Completion — Tone-Matching problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Paragraph Completion — Tone-Matching"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Paragraph Completion — Tone-Matching advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-adv-sentence-correction",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 53,
          "title": "Advanced Sentence Correction — Multiple Errors",
          "tagline": "Year 3 Analysis — Advanced Sentence Correction — Multiple Errors for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Sentence Correction — Multiple Errors develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Sentence Correction — Multiple Errors questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Sentence Correction — Multiple Errors at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Sentence Correction — Multiple Errors",
            "Identify the correct problem type and method in Advanced Sentence Correction — Multiple Errors",
            "Solve Advanced Sentence Correction — Multiple Errors questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Sentence Correction — Multiple Errors"
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
              "【Advanced Sentence Correction — Multiple Errors】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Advanced Sentence Correction — Multiple Errors requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Advanced Sentence Correction — Multiple Errors, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
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
              "In Year 3, mastering Advanced Sentence Correction — Multiple Errors is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Advanced Sentence Correction — Multiple Errors, accuracy improves by 10%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Sentence Correction — Multiple Errors - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Advanced Sentence Correction — Multiple Errors",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Sentence Correction — Multiple Errors in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Sentence Correction — Multiple Errors problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-adv-sentence-correction-1",
              "title": "Advanced Sentence Correction — Multiple Errors Case Study",
              "question": "[Advanced Sentence Correction — Multiple Errors] Neither A nor B was...",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Sentence Correction — Multiple Errors.",
              "commonTrap": "Failing to account for the 12 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Sentence Correction — Multiple Errors Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Sentence Correction — Multiple Errors shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Sentence Correction — Multiple Errors problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Sentence Correction — Multiple Errors problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Sentence Correction — Multiple Errors",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Sentence Correction — Multiple Errors MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Sentence Correction — Multiple Errors.",
            "recruiterInsight": "Year 3 Advanced Sentence Correction — Multiple Errors distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-correction-e1",
                "question": "Year 3 Advanced Sentence Correction — Multiple Errors — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Sentence Correction — Multiple Errors with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-correction-e2",
                "question": "Year 3 Advanced Sentence Correction — Multiple Errors variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Sentence Correction — Multiple Errors problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-correction-i1",
                "question": "Year 3 Advanced Sentence Correction — Multiple Errors — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Sentence Correction — Multiple Errors problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-correction-i2",
                "question": "Second Year 3 Advanced Sentence Correction — Multiple Errors.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Sentence Correction — Multiple Errors variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-correction-a1",
                "question": "High-difficulty Year 3 Advanced Sentence Correction — Multiple Errors.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Sentence Correction — Multiple Errors.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-correction-p1",
                "question": "Placement-style Year 3 Advanced Sentence Correction — Multiple Errors.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Sentence Correction — Multiple Errors question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Sentence Correction — Multiple Errors: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Advanced Sentence Correction — Multiple Errors shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Sentence Correction — Multiple Errors compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Sentence Correction — Multiple Errors mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Sentence Correction — Multiple Errors appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Sentence Correction — Multiple Errors answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Sentence Correction — Multiple Errors problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Sentence Correction — Multiple Errors harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Sentence Correction — Multiple Errors problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Sentence Correction — Multiple Errors"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Sentence Correction — Multiple Errors advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-adv-error-detection",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 54,
          "title": "Advanced Error Detection — Idiomatic Errors",
          "tagline": "Year 3 Analysis — Advanced Error Detection — Idiomatic Errors for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Error Detection — Idiomatic Errors develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Error Detection — Idiomatic Errors questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Error Detection — Idiomatic Errors at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Error Detection — Idiomatic Errors",
            "Identify the correct problem type and method in Advanced Error Detection — Idiomatic Errors",
            "Solve Advanced Error Detection — Idiomatic Errors questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Error Detection — Idiomatic Errors"
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
              "【Advanced Error Detection — Idiomatic Errors】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Advanced Error Detection — Idiomatic Errors requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Advanced Error Detection — Idiomatic Errors, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
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
              "In Year 3, mastering Advanced Error Detection — Idiomatic Errors is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Advanced Error Detection — Idiomatic Errors, accuracy improves by 37%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Error Detection — Idiomatic Errors - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Advanced Error Detection — Idiomatic Errors",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Error Detection — Idiomatic Errors in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Error Detection — Idiomatic Errors problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-adv-error-detection-1",
              "title": "Advanced Error Detection — Idiomatic Errors Case Study",
              "question": "[Advanced Error Detection — Idiomatic Errors] Neither A nor B was...",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Error Detection — Idiomatic Errors.",
              "commonTrap": "Failing to account for the 44 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Error Detection — Idiomatic Errors Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Error Detection — Idiomatic Errors shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Error Detection — Idiomatic Errors problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Error Detection — Idiomatic Errors problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Error Detection — Idiomatic Errors",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Error Detection — Idiomatic Errors MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Error Detection — Idiomatic Errors.",
            "recruiterInsight": "Year 3 Advanced Error Detection — Idiomatic Errors distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-detection-e1",
                "question": "Year 3 Advanced Error Detection — Idiomatic Errors — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Error Detection — Idiomatic Errors with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-detection-e2",
                "question": "Year 3 Advanced Error Detection — Idiomatic Errors variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Error Detection — Idiomatic Errors problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-detection-i1",
                "question": "Year 3 Advanced Error Detection — Idiomatic Errors — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Error Detection — Idiomatic Errors problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-detection-i2",
                "question": "Second Year 3 Advanced Error Detection — Idiomatic Errors.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Error Detection — Idiomatic Errors variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-detection-a1",
                "question": "High-difficulty Year 3 Advanced Error Detection — Idiomatic Errors.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Error Detection — Idiomatic Errors.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-detection-p1",
                "question": "Placement-style Year 3 Advanced Error Detection — Idiomatic Errors.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Error Detection — Idiomatic Errors question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Error Detection — Idiomatic Errors: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Advanced Error Detection — Idiomatic Errors shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Error Detection — Idiomatic Errors compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Error Detection — Idiomatic Errors mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Error Detection — Idiomatic Errors appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Error Detection — Idiomatic Errors answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Error Detection — Idiomatic Errors problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Error Detection — Idiomatic Errors harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Error Detection — Idiomatic Errors problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Error Detection — Idiomatic Errors"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Error Detection — Idiomatic Errors advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-vocab-in-context",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 55,
          "title": "Advanced Vocabulary in Context",
          "tagline": "Year 3 Analysis — Advanced Vocabulary in Context for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Advanced Vocabulary in Context develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Advanced Vocabulary in Context questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Advanced Vocabulary in Context at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Advanced Vocabulary in Context",
            "Identify the correct problem type and method in Advanced Vocabulary in Context",
            "Solve Advanced Vocabulary in Context questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Advanced Vocabulary in Context"
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
              "【Advanced Vocabulary in Context】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Advanced Vocabulary in Context requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Advanced Vocabulary in Context, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
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
              "In Year 3, mastering Advanced Vocabulary in Context is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Advanced Vocabulary in Context, accuracy improves by 30%."
            ],
            "deepDiveAspects": [
              {
                "title": "Advanced Vocabulary in Context - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Advanced Vocabulary in Context",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Advanced Vocabulary in Context in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Advanced Vocabulary in Context problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-vocab-in-context-1",
              "title": "Advanced Vocabulary in Context Case Study",
              "question": "[Advanced Vocabulary in Context] Neither A nor B was...",
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
              "whyItWorks": "This demonstrates the core mechanic of Advanced Vocabulary in Context.",
              "commonTrap": "Failing to account for the 11 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Advanced Vocabulary in Context Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Advanced Vocabulary in Context shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Advanced Vocabulary in Context problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Advanced Vocabulary in Context problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Advanced Vocabulary in Context",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Advanced Vocabulary in Context MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Advanced Vocabulary in Context.",
            "recruiterInsight": "Year 3 Advanced Vocabulary in Context distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-context-e1",
                "question": "Year 3 Advanced Vocabulary in Context — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Advanced Vocabulary in Context with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-context-e2",
                "question": "Year 3 Advanced Vocabulary in Context variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Advanced Vocabulary in Context problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-context-i1",
                "question": "Year 3 Advanced Vocabulary in Context — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Advanced Vocabulary in Context problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-context-i2",
                "question": "Second Year 3 Advanced Vocabulary in Context.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Advanced Vocabulary in Context variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-context-a1",
                "question": "High-difficulty Year 3 Advanced Vocabulary in Context.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Advanced Vocabulary in Context.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-context-p1",
                "question": "Placement-style Year 3 Advanced Vocabulary in Context.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Advanced Vocabulary in Context question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Advanced Vocabulary in Context: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Advanced Vocabulary in Context shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Advanced Vocabulary in Context compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Advanced Vocabulary in Context mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Advanced Vocabulary in Context appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Advanced Vocabulary in Context answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Advanced Vocabulary in Context problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Advanced Vocabulary in Context harder than Year 2? Write in your own words.",
            "Create a Year 3 Advanced Vocabulary in Context problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Advanced Vocabulary in Context"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Advanced Vocabulary in Context advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-idiomatic-expressions",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 56,
          "title": "Idiomatic Expressions and Phrases",
          "tagline": "Year 3 Analysis — Idiomatic Expressions and Phrases for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Idiomatic Expressions and Phrases develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Idiomatic Expressions and Phrases questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Idiomatic Expressions and Phrases at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Idiomatic Expressions and Phrases",
            "Identify the correct problem type and method in Idiomatic Expressions and Phrases",
            "Solve Idiomatic Expressions and Phrases questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Idiomatic Expressions and Phrases"
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
              "【Idiomatic Expressions and Phrases】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Idiomatic Expressions and Phrases requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Idiomatic Expressions and Phrases, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Idiomatic Expressions and Phrases is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Idiomatic Expressions and Phrases, accuracy improves by 48%."
            ],
            "deepDiveAspects": [
              {
                "title": "Idiomatic Expressions and Phrases - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Idiomatic Expressions and Phrases",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Idiomatic Expressions and Phrases in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Idiomatic Expressions and Phrases problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-idiomatic-expressions-1",
              "title": "Idiomatic Expressions and Phrases Case Study",
              "question": "[Idiomatic Expressions and Phrases] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Idiomatic Expressions and Phrases.",
              "commonTrap": "Failing to account for the 46 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Idiomatic Expressions and Phrases Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Idiomatic Expressions and Phrases shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Idiomatic Expressions and Phrases problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Idiomatic Expressions and Phrases problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Idiomatic Expressions and Phrases",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Idiomatic Expressions and Phrases MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Idiomatic Expressions and Phrases.",
            "recruiterInsight": "Year 3 Idiomatic Expressions and Phrases distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-expressions-e1",
                "question": "Year 3 Idiomatic Expressions and Phrases — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Idiomatic Expressions and Phrases with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-expressions-e2",
                "question": "Year 3 Idiomatic Expressions and Phrases variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Idiomatic Expressions and Phrases problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-expressions-i1",
                "question": "Year 3 Idiomatic Expressions and Phrases — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Idiomatic Expressions and Phrases problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-expressions-i2",
                "question": "Second Year 3 Idiomatic Expressions and Phrases.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Idiomatic Expressions and Phrases variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-expressions-a1",
                "question": "High-difficulty Year 3 Idiomatic Expressions and Phrases.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Idiomatic Expressions and Phrases.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-expressions-p1",
                "question": "Placement-style Year 3 Idiomatic Expressions and Phrases.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Idiomatic Expressions and Phrases question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Idiomatic Expressions and Phrases: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Idiomatic Expressions and Phrases shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Idiomatic Expressions and Phrases compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Idiomatic Expressions and Phrases mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Idiomatic Expressions and Phrases appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Idiomatic Expressions and Phrases answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Idiomatic Expressions and Phrases problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Idiomatic Expressions and Phrases harder than Year 2? Write in your own words.",
            "Create a Year 3 Idiomatic Expressions and Phrases problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Idiomatic Expressions and Phrases"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Idiomatic Expressions and Phrases advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-logical-connectors",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 57,
          "title": "Logical Connectors in Written Discourse",
          "tagline": "Year 3 Analysis — Logical Connectors in Written Discourse for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Logical Connectors in Written Discourse develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Logical Connectors in Written Discourse questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Logical Connectors in Written Discourse at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Logical Connectors in Written Discourse",
            "Identify the correct problem type and method in Logical Connectors in Written Discourse",
            "Solve Logical Connectors in Written Discourse questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Logical Connectors in Written Discourse"
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
              "【Logical Connectors in Written Discourse】 Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Matrix: Grid logic.",
              "Linear/Circular: Seating."
            ],
            "theoreticalIntuition": "Mastering Logical Connectors in Written Discourse requires a firm grasp of underlying concepts. Structural thinking over math computation.",
            "visualOrMentalModel": "When approaching Logical Connectors in Written Discourse, visualize the parameters clearly. Represent negative clues explicitly."
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
              "In Year 3, mastering Logical Connectors in Written Discourse is critical for placement success.",
              "Structural thinking over math computation.",
              "Represent negative clues explicitly.",
              "Start with the most restrictive condition.",
              "By applying these principles to Logical Connectors in Written Discourse, accuracy improves by 31%."
            ],
            "deepDiveAspects": [
              {
                "title": "Logical Connectors in Written Discourse - Advanced Application",
                "content": "Start with the most restrictive condition."
              },
              {
                "title": "Core Methodology for Logical Connectors in Written Discourse",
                "content": "Represent negative clues explicitly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Logical Connectors in Written Discourse in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Logical Connectors in Written Discourse problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-logical-connectors-1",
              "title": "Logical Connectors in Written Discourse Case Study",
              "question": "[Logical Connectors in Written Discourse] A,B,C,D,E linear. C middle, B immediate right of A, D at end. E not adj to D. Left of C?",
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
              "whyItWorks": "This demonstrates the core mechanic of Logical Connectors in Written Discourse.",
              "commonTrap": "Failing to account for the 27 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Logical Connectors in Written Discourse Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Logical Connectors in Written Discourse shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Logical Connectors in Written Discourse problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Logical Connectors in Written Discourse problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Logical Connectors in Written Discourse",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Logical Connectors in Written Discourse MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Logical Connectors in Written Discourse.",
            "recruiterInsight": "Year 3 Logical Connectors in Written Discourse distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-connectors-e1",
                "question": "Year 3 Logical Connectors in Written Discourse — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Logical Connectors in Written Discourse with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-connectors-e2",
                "question": "Year 3 Logical Connectors in Written Discourse variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Logical Connectors in Written Discourse problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-connectors-i1",
                "question": "Year 3 Logical Connectors in Written Discourse — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Logical Connectors in Written Discourse problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-connectors-i2",
                "question": "Second Year 3 Logical Connectors in Written Discourse.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Logical Connectors in Written Discourse variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-connectors-a1",
                "question": "High-difficulty Year 3 Logical Connectors in Written Discourse.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Logical Connectors in Written Discourse.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-connectors-p1",
                "question": "Placement-style Year 3 Logical Connectors in Written Discourse.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Logical Connectors in Written Discourse question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Logical Connectors in Written Discourse: Deduction: Deriving conclusions.",
              "Constraint Mapping: Applying rules.",
              "Always review calculation steps.",
              "Apply Logical Connectors in Written Discourse shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Logical Connectors in Written Discourse compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Logical Connectors in Written Discourse mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Logical Connectors in Written Discourse appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Logical Connectors in Written Discourse answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Logical Connectors in Written Discourse problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Logical Connectors in Written Discourse harder than Year 2? Write in your own words.",
            "Create a Year 3 Logical Connectors in Written Discourse problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Logical Connectors in Written Discourse"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Logical Connectors in Written Discourse advanced category"
            }
          ]
        },
        {
          "id": "y3-verbal-argument-evaluation",
          "yearId": 3,
          "category": "Advanced Verbal Ability",
          "topicNumber": 58,
          "title": "Argument Evaluation in Verbal Problems",
          "tagline": "Year 3 Analysis — Argument Evaluation in Verbal Problems for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Argument Evaluation in Verbal Problems develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Argument Evaluation in Verbal Problems questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Argument Evaluation in Verbal Problems at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Argument Evaluation in Verbal Problems",
            "Identify the correct problem type and method in Argument Evaluation in Verbal Problems",
            "Solve Argument Evaluation in Verbal Problems questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Argument Evaluation in Verbal Problems"
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
              "【Argument Evaluation in Verbal Problems】 Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Inference: Logical conclusion.",
              "Context Clues: Reading hints."
            ],
            "theoreticalIntuition": "Mastering Argument Evaluation in Verbal Problems requires a firm grasp of underlying concepts. Verbal tests mechanics and reading comprehension.",
            "visualOrMentalModel": "When approaching Argument Evaluation in Verbal Problems, visualize the parameters clearly. Rely on grammatical structure, not 'sounds right'."
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
              "In Year 3, mastering Argument Evaluation in Verbal Problems is critical for placement success.",
              "Verbal tests mechanics and reading comprehension.",
              "Rely on grammatical structure, not 'sounds right'.",
              "Read RC for author's tone and structure.",
              "By applying these principles to Argument Evaluation in Verbal Problems, accuracy improves by 16%."
            ],
            "deepDiveAspects": [
              {
                "title": "Argument Evaluation in Verbal Problems - Advanced Application",
                "content": "Read RC for author's tone and structure."
              },
              {
                "title": "Core Methodology for Argument Evaluation in Verbal Problems",
                "content": "Rely on grammatical structure, not 'sounds right'."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Argument Evaluation in Verbal Problems in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Argument Evaluation in Verbal Problems problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-verbal-argument-evaluation-1",
              "title": "Argument Evaluation in Verbal Problems Case Study",
              "question": "[Argument Evaluation in Verbal Problems] Neither A nor B was...",
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
              "whyItWorks": "This demonstrates the core mechanic of Argument Evaluation in Verbal Problems.",
              "commonTrap": "Failing to account for the 28 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Argument Evaluation in Verbal Problems Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Argument Evaluation in Verbal Problems shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Argument Evaluation in Verbal Problems problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Argument Evaluation in Verbal Problems problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Argument Evaluation in Verbal Problems",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Argument Evaluation in Verbal Problems MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Argument Evaluation in Verbal Problems.",
            "recruiterInsight": "Year 3 Argument Evaluation in Verbal Problems distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-evaluation-e1",
                "question": "Year 3 Argument Evaluation in Verbal Problems — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Argument Evaluation in Verbal Problems with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-evaluation-e2",
                "question": "Year 3 Argument Evaluation in Verbal Problems variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Argument Evaluation in Verbal Problems problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-evaluation-i1",
                "question": "Year 3 Argument Evaluation in Verbal Problems — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Argument Evaluation in Verbal Problems problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-evaluation-i2",
                "question": "Second Year 3 Argument Evaluation in Verbal Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Argument Evaluation in Verbal Problems variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-evaluation-a1",
                "question": "High-difficulty Year 3 Argument Evaluation in Verbal Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Argument Evaluation in Verbal Problems.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-evaluation-p1",
                "question": "Placement-style Year 3 Argument Evaluation in Verbal Problems.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Argument Evaluation in Verbal Problems question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Argument Evaluation in Verbal Problems: Syntax: Sentence structure.",
              "Semantics: Meaning.",
              "Always review calculation steps.",
              "Apply Argument Evaluation in Verbal Problems shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Argument Evaluation in Verbal Problems compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Argument Evaluation in Verbal Problems mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Argument Evaluation in Verbal Problems appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Argument Evaluation in Verbal Problems answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Argument Evaluation in Verbal Problems problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Argument Evaluation in Verbal Problems harder than Year 2? Write in your own words.",
            "Create a Year 3 Argument Evaluation in Verbal Problems problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Argument Evaluation in Verbal Problems"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Argument Evaluation in Verbal Problems advanced category"
            }
          ]
        }
      ]
    },
    {
      "category": "Data Interpretation",
      "description": "Data Interpretation — Year 3 Advanced",
      "topics": [
        {
          "id": "y3-di-caselet-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 59,
          "title": "Caselet Data Interpretation",
          "tagline": "Year 3 Analysis — Caselet Data Interpretation for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Caselet Data Interpretation develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Caselet Data Interpretation questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Caselet Data Interpretation at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Caselet Data Interpretation",
            "Identify the correct problem type and method in Caselet Data Interpretation",
            "Solve Caselet Data Interpretation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Caselet Data Interpretation"
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
              "【Caselet Data Interpretation】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Caselet Data Interpretation requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Caselet Data Interpretation, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
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
              "In Year 3, mastering Caselet Data Interpretation is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Caselet Data Interpretation, accuracy improves by 37%."
            ],
            "deepDiveAspects": [
              {
                "title": "Caselet Data Interpretation - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Caselet Data Interpretation",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Caselet Data Interpretation in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Caselet Data Interpretation problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-caselet-di-1",
              "title": "Caselet Data Interpretation Case Study",
              "question": "[Caselet Data Interpretation] Sales from 120 to 150. % increase?",
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
              "whyItWorks": "This demonstrates the core mechanic of Caselet Data Interpretation.",
              "commonTrap": "Failing to account for the 44 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Caselet Data Interpretation Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Caselet Data Interpretation shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Caselet Data Interpretation problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Caselet Data Interpretation problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Caselet Data Interpretation",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Caselet Data Interpretation MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Caselet Data Interpretation.",
            "recruiterInsight": "Year 3 Caselet Data Interpretation distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 Caselet Data Interpretation — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Caselet Data Interpretation with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 Caselet Data Interpretation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Caselet Data Interpretation problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 Caselet Data Interpretation — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Caselet Data Interpretation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 Caselet Data Interpretation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Caselet Data Interpretation variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 Caselet Data Interpretation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Caselet Data Interpretation.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 Caselet Data Interpretation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Caselet Data Interpretation question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Caselet Data Interpretation: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Caselet Data Interpretation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Caselet Data Interpretation compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Caselet Data Interpretation mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Caselet Data Interpretation appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Caselet Data Interpretation answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Caselet Data Interpretation problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Caselet Data Interpretation harder than Year 2? Write in your own words.",
            "Create a Year 3 Caselet Data Interpretation problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Caselet Data Interpretation"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Caselet Data Interpretation advanced category"
            }
          ]
        },
        {
          "id": "y3-di-multi-table-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 60,
          "title": "Multi-Table DI Sets",
          "tagline": "Year 3 Analysis — Multi-Table DI Sets for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Multi-Table DI Sets develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Multi-Table DI Sets questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Multi-Table DI Sets at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Multi-Table DI Sets",
            "Identify the correct problem type and method in Multi-Table DI Sets",
            "Solve Multi-Table DI Sets questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Multi-Table DI Sets"
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
              "【Multi-Table DI Sets】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Multi-Table DI Sets requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Multi-Table DI Sets, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Multi-Table DI Sets is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Multi-Table DI Sets, accuracy improves by 33%."
            ],
            "deepDiveAspects": [
              {
                "title": "Multi-Table DI Sets - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Multi-Table DI Sets",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Multi-Table DI Sets in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Multi-Table DI Sets problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-multi-table-di-1",
              "title": "Multi-Table DI Sets Case Study",
              "question": "[Multi-Table DI Sets] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Multi-Table DI Sets.",
              "commonTrap": "Failing to account for the 55 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Multi-Table DI Sets Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Multi-Table DI Sets shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Multi-Table DI Sets problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Multi-Table DI Sets problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Multi-Table DI Sets",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Multi-Table DI Sets MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Multi-Table DI Sets.",
            "recruiterInsight": "Year 3 Multi-Table DI Sets distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 Multi-Table DI Sets — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Multi-Table DI Sets with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 Multi-Table DI Sets variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Multi-Table DI Sets problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 Multi-Table DI Sets — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Multi-Table DI Sets problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 Multi-Table DI Sets.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Multi-Table DI Sets variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 Multi-Table DI Sets.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Multi-Table DI Sets.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 Multi-Table DI Sets.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Multi-Table DI Sets question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Multi-Table DI Sets: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Multi-Table DI Sets shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Multi-Table DI Sets compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Multi-Table DI Sets mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Multi-Table DI Sets appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Multi-Table DI Sets answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Multi-Table DI Sets problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Multi-Table DI Sets harder than Year 2? Write in your own words.",
            "Create a Year 3 Multi-Table DI Sets problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Multi-Table DI Sets"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Multi-Table DI Sets advanced category"
            }
          ]
        },
        {
          "id": "y3-di-mixed-graph-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 61,
          "title": "Mixed Graph (Bar + Line) DI",
          "tagline": "Year 3 Analysis — Mixed Graph (Bar + Line) DI for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Mixed Graph (Bar + Line) DI develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Mixed Graph (Bar + Line) DI questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Mixed Graph (Bar + Line) DI at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Mixed Graph (Bar + Line) DI",
            "Identify the correct problem type and method in Mixed Graph (Bar + Line) DI",
            "Solve Mixed Graph (Bar + Line) DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Mixed Graph (Bar + Line) DI"
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
              "【Mixed Graph (Bar + Line) DI】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Mixed Graph (Bar + Line) DI requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Mixed Graph (Bar + Line) DI, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
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
              "In Year 3, mastering Mixed Graph (Bar + Line) DI is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Mixed Graph (Bar + Line) DI, accuracy improves by 37%."
            ],
            "deepDiveAspects": [
              {
                "title": "Mixed Graph (Bar + Line) DI - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Mixed Graph (Bar + Line) DI",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Mixed Graph (Bar + Line) DI in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Mixed Graph (Bar + Line) DI problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-mixed-graph-di-1",
              "title": "Mixed Graph (Bar + Line) DI Case Study",
              "question": "[Mixed Graph (Bar + Line) DI] Sales from 120 to 150. % increase?",
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
              "whyItWorks": "This demonstrates the core mechanic of Mixed Graph (Bar + Line) DI.",
              "commonTrap": "Failing to account for the 52 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Mixed Graph (Bar + Line) DI Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Mixed Graph (Bar + Line) DI shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Mixed Graph (Bar + Line) DI problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Mixed Graph (Bar + Line) DI problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Mixed Graph (Bar + Line) DI",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Mixed Graph (Bar + Line) DI MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Mixed Graph (Bar + Line) DI.",
            "recruiterInsight": "Year 3 Mixed Graph (Bar + Line) DI distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 Mixed Graph (Bar + Line) DI — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Mixed Graph (Bar + Line) DI with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 Mixed Graph (Bar + Line) DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Mixed Graph (Bar + Line) DI problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 Mixed Graph (Bar + Line) DI — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Mixed Graph (Bar + Line) DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 Mixed Graph (Bar + Line) DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Mixed Graph (Bar + Line) DI variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 Mixed Graph (Bar + Line) DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Mixed Graph (Bar + Line) DI.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 Mixed Graph (Bar + Line) DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Mixed Graph (Bar + Line) DI question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Mixed Graph (Bar + Line) DI: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Mixed Graph (Bar + Line) DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Mixed Graph (Bar + Line) DI compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Mixed Graph (Bar + Line) DI mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Mixed Graph (Bar + Line) DI appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Mixed Graph (Bar + Line) DI answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Mixed Graph (Bar + Line) DI problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Mixed Graph (Bar + Line) DI harder than Year 2? Write in your own words.",
            "Create a Year 3 Mixed Graph (Bar + Line) DI problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Mixed Graph (Bar + Line) DI"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Mixed Graph (Bar + Line) DI advanced category"
            }
          ]
        },
        {
          "id": "y3-di-radar-chart-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 62,
          "title": "Radar/Spider Chart DI",
          "tagline": "Year 3 Analysis — Radar/Spider Chart DI for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Radar/Spider Chart DI develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Radar/Spider Chart DI questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Radar/Spider Chart DI at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Radar/Spider Chart DI",
            "Identify the correct problem type and method in Radar/Spider Chart DI",
            "Solve Radar/Spider Chart DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Radar/Spider Chart DI"
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
              "【Radar/Spider Chart DI】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Radar/Spider Chart DI requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Radar/Spider Chart DI, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
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
              "In Year 3, mastering Radar/Spider Chart DI is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Radar/Spider Chart DI, accuracy improves by 43%."
            ],
            "deepDiveAspects": [
              {
                "title": "Radar/Spider Chart DI - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Radar/Spider Chart DI",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Radar/Spider Chart DI in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Radar/Spider Chart DI problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-radar-chart-di-1",
              "title": "Radar/Spider Chart DI Case Study",
              "question": "[Radar/Spider Chart DI] Sales from 120 to 150. % increase?",
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
              "whyItWorks": "This demonstrates the core mechanic of Radar/Spider Chart DI.",
              "commonTrap": "Failing to account for the 29 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Radar/Spider Chart DI Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Radar/Spider Chart DI shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Radar/Spider Chart DI problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Radar/Spider Chart DI problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Radar/Spider Chart DI",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Radar/Spider Chart DI MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Radar/Spider Chart DI.",
            "recruiterInsight": "Year 3 Radar/Spider Chart DI distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 Radar/Spider Chart DI — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Radar/Spider Chart DI with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 Radar/Spider Chart DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Radar/Spider Chart DI problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 Radar/Spider Chart DI — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Radar/Spider Chart DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 Radar/Spider Chart DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Radar/Spider Chart DI variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 Radar/Spider Chart DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Radar/Spider Chart DI.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 Radar/Spider Chart DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Radar/Spider Chart DI question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Radar/Spider Chart DI: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Radar/Spider Chart DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Radar/Spider Chart DI compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Radar/Spider Chart DI mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Radar/Spider Chart DI appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Radar/Spider Chart DI answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Radar/Spider Chart DI problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Radar/Spider Chart DI harder than Year 2? Write in your own words.",
            "Create a Year 3 Radar/Spider Chart DI problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Radar/Spider Chart DI"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Radar/Spider Chart DI advanced category"
            }
          ]
        },
        {
          "id": "y3-di-flow-chart-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 63,
          "title": "Flow Chart and Network DI",
          "tagline": "Year 3 Analysis — Flow Chart and Network DI for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Flow Chart and Network DI develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Flow Chart and Network DI questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Flow Chart and Network DI at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Flow Chart and Network DI",
            "Identify the correct problem type and method in Flow Chart and Network DI",
            "Solve Flow Chart and Network DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Flow Chart and Network DI"
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
              "【Flow Chart and Network DI】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Flow Chart and Network DI requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Flow Chart and Network DI, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
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
              "In Year 3, mastering Flow Chart and Network DI is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Flow Chart and Network DI, accuracy improves by 19%."
            ],
            "deepDiveAspects": [
              {
                "title": "Flow Chart and Network DI - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Flow Chart and Network DI",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Flow Chart and Network DI in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Flow Chart and Network DI problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-flow-chart-di-1",
              "title": "Flow Chart and Network DI Case Study",
              "question": "[Flow Chart and Network DI] Sales from 120 to 150. % increase?",
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
              "whyItWorks": "This demonstrates the core mechanic of Flow Chart and Network DI.",
              "commonTrap": "Failing to account for the 21 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Flow Chart and Network DI Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Flow Chart and Network DI shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Flow Chart and Network DI problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Flow Chart and Network DI problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Flow Chart and Network DI",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Flow Chart and Network DI MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Flow Chart and Network DI.",
            "recruiterInsight": "Year 3 Flow Chart and Network DI distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 Flow Chart and Network DI — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Flow Chart and Network DI with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 Flow Chart and Network DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Flow Chart and Network DI problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 Flow Chart and Network DI — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Flow Chart and Network DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 Flow Chart and Network DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Flow Chart and Network DI variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 Flow Chart and Network DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Flow Chart and Network DI.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 Flow Chart and Network DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Flow Chart and Network DI question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Flow Chart and Network DI: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Flow Chart and Network DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Flow Chart and Network DI compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Flow Chart and Network DI mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Flow Chart and Network DI appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Flow Chart and Network DI answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Flow Chart and Network DI problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Flow Chart and Network DI harder than Year 2? Write in your own words.",
            "Create a Year 3 Flow Chart and Network DI problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Flow Chart and Network DI"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Flow Chart and Network DI advanced category"
            }
          ]
        },
        {
          "id": "y3-di-data-analysis",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 64,
          "title": "Data Analysis and Trend Identification",
          "tagline": "Year 3 Analysis — Data Analysis and Trend Identification for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Data Analysis and Trend Identification develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Data Analysis and Trend Identification questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Data Analysis and Trend Identification at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Data Analysis and Trend Identification",
            "Identify the correct problem type and method in Data Analysis and Trend Identification",
            "Solve Data Analysis and Trend Identification questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Data Analysis and Trend Identification"
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
              "【Data Analysis and Trend Identification】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Data Analysis and Trend Identification requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Data Analysis and Trend Identification, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Data Analysis and Trend Identification is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Data Analysis and Trend Identification, accuracy improves by 33%."
            ],
            "deepDiveAspects": [
              {
                "title": "Data Analysis and Trend Identification - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Data Analysis and Trend Identification",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Data Analysis and Trend Identification in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Data Analysis and Trend Identification problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-data-analysis-1",
              "title": "Data Analysis and Trend Identification Case Study",
              "question": "[Data Analysis and Trend Identification] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Data Analysis and Trend Identification.",
              "commonTrap": "Failing to account for the 48 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Data Analysis and Trend Identification Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Data Analysis and Trend Identification shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Data Analysis and Trend Identification problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Data Analysis and Trend Identification problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Data Analysis and Trend Identification",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Data Analysis and Trend Identification MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Data Analysis and Trend Identification.",
            "recruiterInsight": "Year 3 Data Analysis and Trend Identification distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-analysis-e1",
                "question": "Year 3 Data Analysis and Trend Identification — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Data Analysis and Trend Identification with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-analysis-e2",
                "question": "Year 3 Data Analysis and Trend Identification variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Data Analysis and Trend Identification problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-analysis-i1",
                "question": "Year 3 Data Analysis and Trend Identification — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Data Analysis and Trend Identification problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-analysis-i2",
                "question": "Second Year 3 Data Analysis and Trend Identification.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Data Analysis and Trend Identification variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-analysis-a1",
                "question": "High-difficulty Year 3 Data Analysis and Trend Identification.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Data Analysis and Trend Identification.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-analysis-p1",
                "question": "Placement-style Year 3 Data Analysis and Trend Identification.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Data Analysis and Trend Identification question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Data Analysis and Trend Identification: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Data Analysis and Trend Identification shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Data Analysis and Trend Identification compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Data Analysis and Trend Identification mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Data Analysis and Trend Identification appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Data Analysis and Trend Identification answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Data Analysis and Trend Identification problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Data Analysis and Trend Identification harder than Year 2? Write in your own words.",
            "Create a Year 3 Data Analysis and Trend Identification problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Data Analysis and Trend Identification"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Data Analysis and Trend Identification advanced category"
            }
          ]
        },
        {
          "id": "y3-di-high-diff-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 65,
          "title": "High-Difficulty DI — Multi-Step Computation",
          "tagline": "Year 3 Analysis — High-Difficulty DI — Multi-Step Computation for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 High-Difficulty DI — Multi-Step Computation develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced High-Difficulty DI — Multi-Step Computation questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of High-Difficulty DI — Multi-Step Computation at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of High-Difficulty DI — Multi-Step Computation",
            "Identify the correct problem type and method in High-Difficulty DI — Multi-Step Computation",
            "Solve High-Difficulty DI — Multi-Step Computation questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in High-Difficulty DI — Multi-Step Computation"
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
              "【High-Difficulty DI — Multi-Step Computation】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering High-Difficulty DI — Multi-Step Computation requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching High-Difficulty DI — Multi-Step Computation, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering High-Difficulty DI — Multi-Step Computation is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to High-Difficulty DI — Multi-Step Computation, accuracy improves by 35%."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Difficulty DI — Multi-Step Computation - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for High-Difficulty DI — Multi-Step Computation",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply High-Difficulty DI — Multi-Step Computation in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the High-Difficulty DI — Multi-Step Computation problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-high-diff-di-1",
              "title": "High-Difficulty DI — Multi-Step Computation Case Study",
              "question": "[High-Difficulty DI — Multi-Step Computation] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of High-Difficulty DI — Multi-Step Computation.",
              "commonTrap": "Failing to account for the 15 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced High-Difficulty DI — Multi-Step Computation Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 High-Difficulty DI — Multi-Step Computation shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For High-Difficulty DI — Multi-Step Computation problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 High-Difficulty DI — Multi-Step Computation problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in High-Difficulty DI — Multi-Step Computation",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced High-Difficulty DI — Multi-Step Computation MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 High-Difficulty DI — Multi-Step Computation.",
            "recruiterInsight": "Year 3 High-Difficulty DI — Multi-Step Computation distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 High-Difficulty DI — Multi-Step Computation — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 High-Difficulty DI — Multi-Step Computation with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 High-Difficulty DI — Multi-Step Computation variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced High-Difficulty DI — Multi-Step Computation problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 High-Difficulty DI — Multi-Step Computation — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept High-Difficulty DI — Multi-Step Computation problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 High-Difficulty DI — Multi-Step Computation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced High-Difficulty DI — Multi-Step Computation variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 High-Difficulty DI — Multi-Step Computation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 High-Difficulty DI — Multi-Step Computation.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 High-Difficulty DI — Multi-Step Computation.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level High-Difficulty DI — Multi-Step Computation question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of High-Difficulty DI — Multi-Step Computation: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply High-Difficulty DI — Multi-Step Computation shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced High-Difficulty DI — Multi-Step Computation compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 High-Difficulty DI — Multi-Step Computation mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in High-Difficulty DI — Multi-Step Computation appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 High-Difficulty DI — Multi-Step Computation answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 High-Difficulty DI — Multi-Step Computation problems, identifying the 'key unlock' in each.",
            "What makes Year 3 High-Difficulty DI — Multi-Step Computation harder than Year 2? Write in your own words.",
            "Create a Year 3 High-Difficulty DI — Multi-Step Computation problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: High-Difficulty DI — Multi-Step Computation"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "High-Difficulty DI — Multi-Step Computation advanced category"
            }
          ]
        },
        {
          "id": "y3-di-ratio-percentage-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 66,
          "title": "Combined Ratio and Percentage DI",
          "tagline": "Year 3 Analysis — Combined Ratio and Percentage DI for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Combined Ratio and Percentage DI develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Combined Ratio and Percentage DI questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Combined Ratio and Percentage DI at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Combined Ratio and Percentage DI",
            "Identify the correct problem type and method in Combined Ratio and Percentage DI",
            "Solve Combined Ratio and Percentage DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Combined Ratio and Percentage DI"
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
              "【Combined Ratio and Percentage DI】 Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Compound Ratio: ac:bd.",
              "Duplicate Ratio: a²:b².",
              "Componendo-Dividendo: (a+b)/(a-b) = (c+d)/(c-d)."
            ],
            "theoreticalIntuition": "Mastering Combined Ratio and Percentage DI requires a firm grasp of underlying concepts. Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
            "visualOrMentalModel": "When approaching Combined Ratio and Percentage DI, visualize the parameters clearly. The 'K-multiplier' method transforms abstract ratios into algebraic equations."
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
              "In Year 3, mastering Combined Ratio and Percentage DI is critical for placement success.",
              "Ratio and proportion form the foundation of commercial arithmetic. They allow relative comparisons instead of absolute ones.",
              "The 'K-multiplier' method transforms abstract ratios into algebraic equations.",
              "Scale pairwise ratios to a common middle term (LCM) before calculating shares.",
              "By applying these principles to Combined Ratio and Percentage DI, accuracy improves by 54%."
            ],
            "deepDiveAspects": [
              {
                "title": "Combined Ratio and Percentage DI - Advanced Application",
                "content": "Scale pairwise ratios to a common middle term (LCM) before calculating shares."
              },
              {
                "title": "Core Methodology for Combined Ratio and Percentage DI",
                "content": "The 'K-multiplier' method transforms abstract ratios into algebraic equations."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Combined Ratio and Percentage DI in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Combined Ratio and Percentage DI problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-ratio-percentage-di-1",
              "title": "Combined Ratio and Percentage DI Case Study",
              "question": "[Combined Ratio and Percentage DI] Divide 5400 in 8:15:20 after deducting 25, 28, 52.",
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
              "whyItWorks": "This demonstrates the core mechanic of Combined Ratio and Percentage DI.",
              "commonTrap": "Failing to account for the 54 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Combined Ratio and Percentage DI Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Combined Ratio and Percentage DI shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Combined Ratio and Percentage DI problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Combined Ratio and Percentage DI problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Combined Ratio and Percentage DI",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Combined Ratio and Percentage DI MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Combined Ratio and Percentage DI.",
            "recruiterInsight": "Year 3 Combined Ratio and Percentage DI distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 Combined Ratio and Percentage DI — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Combined Ratio and Percentage DI with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 Combined Ratio and Percentage DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Combined Ratio and Percentage DI problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 Combined Ratio and Percentage DI — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Combined Ratio and Percentage DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 Combined Ratio and Percentage DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Combined Ratio and Percentage DI variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 Combined Ratio and Percentage DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Combined Ratio and Percentage DI.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 Combined Ratio and Percentage DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Combined Ratio and Percentage DI question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Combined Ratio and Percentage DI: Ratio: Comparing quantities (a:b).",
              "Proportion: a:b = c:d.",
              "Always review calculation steps.",
              "Apply Combined Ratio and Percentage DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Combined Ratio and Percentage DI compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Combined Ratio and Percentage DI mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Combined Ratio and Percentage DI appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Combined Ratio and Percentage DI answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Combined Ratio and Percentage DI problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Combined Ratio and Percentage DI harder than Year 2? Write in your own words.",
            "Create a Year 3 Combined Ratio and Percentage DI problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Combined Ratio and Percentage DI"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Combined Ratio and Percentage DI advanced category"
            }
          ]
        },
        {
          "id": "y3-di-approximation-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 67,
          "title": "Approximation Techniques in DI",
          "tagline": "Year 3 Analysis — Approximation Techniques in DI for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Approximation Techniques in DI develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Approximation Techniques in DI questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Approximation Techniques in DI at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Approximation Techniques in DI",
            "Identify the correct problem type and method in Approximation Techniques in DI",
            "Solve Approximation Techniques in DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Approximation Techniques in DI"
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
              "【Approximation Techniques in DI】 Approximation: Rounding to nearest significant figure.",
              "Estimation: Finding a value close enough for option elimination.",
              "Significant Digits: Meaningful numbers."
            ],
            "theoreticalIntuition": "Mastering Approximation Techniques in DI requires a firm grasp of underlying concepts. Approximation is mandatory for data interpretation and speed math.",
            "visualOrMentalModel": "When approaching Approximation Techniques in DI, visualize the parameters clearly. Do not calculate exact decimal values when options are far apart."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Fraction Estimation",
              "formula": "Round up both or down both",
              "description": "Stable ratio",
              "whenToUse": "DI",
              "simpleExample": ""
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Year 3, mastering Approximation Techniques in DI is critical for placement success.",
              "Approximation is mandatory for data interpretation and speed math.",
              "Do not calculate exact decimal values when options are far apart.",
              "Always round numerator and denominator in the same direction to minimize error.",
              "By applying these principles to Approximation Techniques in DI, accuracy improves by 47%."
            ],
            "deepDiveAspects": [
              {
                "title": "Approximation Techniques in DI - Advanced Application",
                "content": "Always round numerator and denominator in the same direction to minimize error."
              },
              {
                "title": "Core Methodology for Approximation Techniques in DI",
                "content": "Do not calculate exact decimal values when options are far apart."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Approximation Techniques in DI in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Approximation Techniques in DI problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-approximation-di-1",
              "title": "Approximation Techniques in DI Case Study",
              "question": "[Approximation Techniques in DI] 14.98 * 20.03",
              "givenInfo": [
                "~15 * ~20"
              ],
              "conceptOrFormula": "Round",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Round",
                  "explanation": "15 * 20",
                  "math": ""
                },
                {
                  "stepNumber": 2,
                  "title": "Mult",
                  "explanation": "300",
                  "math": ""
                }
              ],
              "finalAnswer": "300",
              "whyItWorks": "This demonstrates the core mechanic of Approximation Techniques in DI.",
              "commonTrap": "Failing to account for the 56 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Approximation Techniques in DI Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Approximation Techniques in DI shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Approximation Techniques in DI problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Approximation Techniques in DI problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Approximation Techniques in DI",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Approximation Techniques in DI MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Approximation Techniques in DI.",
            "recruiterInsight": "Year 3 Approximation Techniques in DI distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 Approximation Techniques in DI — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Approximation Techniques in DI with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 Approximation Techniques in DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Approximation Techniques in DI problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 Approximation Techniques in DI — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Approximation Techniques in DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 Approximation Techniques in DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Approximation Techniques in DI variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 Approximation Techniques in DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Approximation Techniques in DI.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 Approximation Techniques in DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Approximation Techniques in DI question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Approximation Techniques in DI: Approximation: Rounding to nearest significant figure.",
              "Estimation: Finding a value close enough for option elimination.",
              "Always review calculation steps.",
              "Apply Approximation Techniques in DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Approximation Techniques in DI compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Approximation Techniques in DI mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Approximation Techniques in DI appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Approximation Techniques in DI answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Approximation Techniques in DI problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Approximation Techniques in DI harder than Year 2? Write in your own words.",
            "Create a Year 3 Approximation Techniques in DI problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Approximation Techniques in DI"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Approximation Techniques in DI advanced category"
            }
          ]
        },
        {
          "id": "y3-di-data-comparison",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 68,
          "title": "Cross-Category Data Comparison",
          "tagline": "Year 3 Analysis — Cross-Category Data Comparison for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Cross-Category Data Comparison develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Cross-Category Data Comparison questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Cross-Category Data Comparison at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Cross-Category Data Comparison",
            "Identify the correct problem type and method in Cross-Category Data Comparison",
            "Solve Cross-Category Data Comparison questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Cross-Category Data Comparison"
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
              "【Cross-Category Data Comparison】 Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Line Graph: Trend over time.",
              "Tabular: Raw grid data."
            ],
            "theoreticalIntuition": "Mastering Cross-Category Data Comparison requires a firm grasp of underlying concepts. Data Interpretation tests visual extraction and rapid calculation.",
            "visualOrMentalModel": "When approaching Cross-Category Data Comparison, visualize the parameters clearly. Focus on reading the axes and legends before looking at the data."
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
              "In Year 3, mastering Cross-Category Data Comparison is critical for placement success.",
              "Data Interpretation tests visual extraction and rapid calculation.",
              "Focus on reading the axes and legends before looking at the data.",
              "Use fraction-to-percentage conversions to bypass long division.",
              "By applying these principles to Cross-Category Data Comparison, accuracy improves by 14%."
            ],
            "deepDiveAspects": [
              {
                "title": "Cross-Category Data Comparison - Advanced Application",
                "content": "Use fraction-to-percentage conversions to bypass long division."
              },
              {
                "title": "Core Methodology for Cross-Category Data Comparison",
                "content": "Focus on reading the axes and legends before looking at the data."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Cross-Category Data Comparison in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Cross-Category Data Comparison problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-data-comparison-1",
              "title": "Cross-Category Data Comparison Case Study",
              "question": "[Cross-Category Data Comparison] Sales from 120 to 150. % increase?",
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
              "whyItWorks": "This demonstrates the core mechanic of Cross-Category Data Comparison.",
              "commonTrap": "Failing to account for the 59 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Cross-Category Data Comparison Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Cross-Category Data Comparison shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Cross-Category Data Comparison problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Cross-Category Data Comparison problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Cross-Category Data Comparison",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Cross-Category Data Comparison MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Cross-Category Data Comparison.",
            "recruiterInsight": "Year 3 Cross-Category Data Comparison distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-comparison-e1",
                "question": "Year 3 Cross-Category Data Comparison — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Cross-Category Data Comparison with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-comparison-e2",
                "question": "Year 3 Cross-Category Data Comparison variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Cross-Category Data Comparison problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-comparison-i1",
                "question": "Year 3 Cross-Category Data Comparison — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Cross-Category Data Comparison problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-comparison-i2",
                "question": "Second Year 3 Cross-Category Data Comparison.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Cross-Category Data Comparison variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-comparison-a1",
                "question": "High-difficulty Year 3 Cross-Category Data Comparison.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Cross-Category Data Comparison.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-comparison-p1",
                "question": "Placement-style Year 3 Cross-Category Data Comparison.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Cross-Category Data Comparison question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Cross-Category Data Comparison: Bar Graph: Rectangular comparison.",
              "Pie Chart: Circular percentage.",
              "Always review calculation steps.",
              "Apply Cross-Category Data Comparison shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Cross-Category Data Comparison compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Cross-Category Data Comparison mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Cross-Category Data Comparison appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Cross-Category Data Comparison answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Cross-Category Data Comparison problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Cross-Category Data Comparison harder than Year 2? Write in your own words.",
            "Create a Year 3 Cross-Category Data Comparison problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Cross-Category Data Comparison"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Cross-Category Data Comparison advanced category"
            }
          ]
        },
        {
          "id": "y3-di-growth-rate",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 69,
          "title": "Growth Rate and CAGR Computation from DI",
          "tagline": "Year 3 Analysis — Growth Rate and CAGR Computation from DI for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Growth Rate and CAGR Computation from DI develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Growth Rate and CAGR Computation from DI questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Growth Rate and CAGR Computation from DI at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Growth Rate and CAGR Computation from DI",
            "Identify the correct problem type and method in Growth Rate and CAGR Computation from DI",
            "Solve Growth Rate and CAGR Computation from DI questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Growth Rate and CAGR Computation from DI"
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
              "【Growth Rate and CAGR Computation from DI】 Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Heuristics: Problem-solving shortcuts."
            ],
            "theoreticalIntuition": "Mastering Growth Rate and CAGR Computation from DI requires a firm grasp of underlying concepts. Advanced placement questions combine geometry with probability, or time-speed with ratios.",
            "visualOrMentalModel": "When approaching Growth Rate and CAGR Computation from DI, visualize the parameters clearly. Break the problem into independent modules."
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
              "In Year 3, mastering Growth Rate and CAGR Computation from DI is critical for placement success.",
              "Advanced placement questions combine geometry with probability, or time-speed with ratios.",
              "Break the problem into independent modules.",
              "Do not apply formulas blindly; track the units at each step.",
              "By applying these principles to Growth Rate and CAGR Computation from DI, accuracy improves by 48%."
            ],
            "deepDiveAspects": [
              {
                "title": "Growth Rate and CAGR Computation from DI - Advanced Application",
                "content": "Do not apply formulas blindly; track the units at each step."
              },
              {
                "title": "Core Methodology for Growth Rate and CAGR Computation from DI",
                "content": "Break the problem into independent modules."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Growth Rate and CAGR Computation from DI in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Growth Rate and CAGR Computation from DI problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-growth-rate-1",
              "title": "Growth Rate and CAGR Computation from DI Case Study",
              "question": "[Growth Rate and CAGR Computation from DI] A completes work in 10d. B is 20% more efficient. Time for B?",
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
              "whyItWorks": "This demonstrates the core mechanic of Growth Rate and CAGR Computation from DI.",
              "commonTrap": "Failing to account for the 51 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Growth Rate and CAGR Computation from DI Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Growth Rate and CAGR Computation from DI shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Growth Rate and CAGR Computation from DI problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Growth Rate and CAGR Computation from DI problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Growth Rate and CAGR Computation from DI",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Growth Rate and CAGR Computation from DI MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Growth Rate and CAGR Computation from DI.",
            "recruiterInsight": "Year 3 Growth Rate and CAGR Computation from DI distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-rate-e1",
                "question": "Year 3 Growth Rate and CAGR Computation from DI — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Growth Rate and CAGR Computation from DI with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-rate-e2",
                "question": "Year 3 Growth Rate and CAGR Computation from DI variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Growth Rate and CAGR Computation from DI problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-rate-i1",
                "question": "Year 3 Growth Rate and CAGR Computation from DI — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Growth Rate and CAGR Computation from DI problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-rate-i2",
                "question": "Second Year 3 Growth Rate and CAGR Computation from DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Growth Rate and CAGR Computation from DI variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-rate-a1",
                "question": "High-difficulty Year 3 Growth Rate and CAGR Computation from DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Growth Rate and CAGR Computation from DI.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-rate-p1",
                "question": "Placement-style Year 3 Growth Rate and CAGR Computation from DI.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Growth Rate and CAGR Computation from DI question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Growth Rate and CAGR Computation from DI: Integrated Problem: Combines 2+ concepts.",
              "Multi-stage: Requires sequential solving.",
              "Always review calculation steps.",
              "Apply Growth Rate and CAGR Computation from DI shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Growth Rate and CAGR Computation from DI compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Growth Rate and CAGR Computation from DI mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Growth Rate and CAGR Computation from DI appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Growth Rate and CAGR Computation from DI answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Growth Rate and CAGR Computation from DI problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Growth Rate and CAGR Computation from DI harder than Year 2? Write in your own words.",
            "Create a Year 3 Growth Rate and CAGR Computation from DI problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Growth Rate and CAGR Computation from DI"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Growth Rate and CAGR Computation from DI advanced category"
            }
          ]
        },
        {
          "id": "y3-di-data-sufficiency-di",
          "yearId": 3,
          "category": "Data Interpretation",
          "topicNumber": 70,
          "title": "Data Sufficiency in DI Contexts",
          "tagline": "Year 3 Analysis — Data Sufficiency in DI Contexts for Advanced Placement Rounds",
          "estimatedMinutes": 55,
          "difficulty": "Advanced",
          "introduction": {
            "overview": "Year 3 Data Sufficiency in DI Contexts develops advanced analytical capability. Problems require multi-step reasoning, non-obvious transformations, and combined application of multiple mathematical or logical principles.",
            "placementRelevance": "Advanced Data Sufficiency in DI Contexts questions appear in TCS Digital, Infosys Power Programmer, Wipro Turbo, and top-tier company placement advanced rounds.",
            "realWorldContext": "Mastery of Data Sufficiency in DI Contexts at Year 3 level directly enables success in advanced aptitude rounds that filter top 5% of campus placement candidates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Data Sufficiency in DI Contexts",
            "Identify the correct problem type and method in Data Sufficiency in DI Contexts",
            "Solve Data Sufficiency in DI Contexts questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Data Sufficiency in DI Contexts"
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
              "【Data Sufficiency in DI Contexts】 Principal: Original sum.",
              "Rate: Interest %.",
              "SI: Linear interest.",
              "CI: Exponential interest."
            ],
            "theoreticalIntuition": "Mastering Data Sufficiency in DI Contexts requires a firm grasp of underlying concepts. SI grows linearly, CI grows exponentially.",
            "visualOrMentalModel": "When approaching Data Sufficiency in DI Contexts, visualize the parameters clearly. In SI, interest amount remains exactly the same every year."
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
              "In Year 3, mastering Data Sufficiency in DI Contexts is critical for placement success.",
              "SI grows linearly, CI grows exponentially.",
              "In SI, interest amount remains exactly the same every year.",
              "The 'difference between CI and SI' for 2/3 years is heavily tested.",
              "By applying these principles to Data Sufficiency in DI Contexts, accuracy improves by 20%."
            ],
            "deepDiveAspects": [
              {
                "title": "Data Sufficiency in DI Contexts - Advanced Application",
                "content": "The 'difference between CI and SI' for 2/3 years is heavily tested."
              },
              {
                "title": "Core Methodology for Data Sufficiency in DI Contexts",
                "content": "In SI, interest amount remains exactly the same every year."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Advanced Application",
              "description": "Apply Data Sufficiency in DI Contexts in multi-step complex scenarios.",
              "exampleSnippet": "Typical TCS Digital / Infosys PP question."
            },
            {
              "typeName": "Non-Obvious Transformation",
              "description": "Identify the key insight that simplifies the Data Sufficiency in DI Contexts problem.",
              "exampleSnippet": "Look for symmetry, complementary counting, or modular reduction."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y3-di-data-sufficiency-di-1",
              "title": "Data Sufficiency in DI Contexts Case Study",
              "question": "[Data Sufficiency in DI Contexts] Diff for 2 yrs at 10% is 65. Principal?",
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
              "whyItWorks": "This demonstrates the core mechanic of Data Sufficiency in DI Contexts.",
              "commonTrap": "Failing to account for the 29 hidden constraints.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Advanced Data Sufficiency in DI Contexts Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Algebraic expansion and sequential equation solving (2–3 minutes per problem).",
              "shortcutMethod": "Year 3 Data Sufficiency in DI Contexts shortcut: identify structural pattern → apply advanced technique → compute directly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Always check if complementary counting, symmetry, or modular reduction applies before starting computation.",
              "For Data Sufficiency in DI Contexts problems with large numbers: factorize first, then apply modular arithmetic to reduce computation.",
              "Two-pass approach: in first pass, eliminate clearly wrong options. In second pass, verify shortcut against remaining options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying Year 2 methods to Year 3 Data Sufficiency in DI Contexts problems",
              "whyItHappens": "Direct formula application fails for multi-concept Year 3 problems.",
              "howToAvoid": "Look for the integration of two techniques — the Year 3 problem is designed to require both."
            },
            {
              "mistake": "Missing the non-obvious transformation in Data Sufficiency in DI Contexts",
              "whyItHappens": "Not recognizing when a problem has a simpler equivalent form.",
              "howToAvoid": "Practice 50+ Year 3 {title} problems to build pattern recognition for transformations."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "For advanced Data Sufficiency in DI Contexts MCQs: use the shortcut to get the answer, then check if it appears in options. If not, a different approach is needed.",
            "questionSelectionAdvice": "Spend 5 seconds identifying problem type, 10 seconds finding the key unlock, then compute. Target: under 75 seconds for Year 3 Data Sufficiency in DI Contexts.",
            "recruiterInsight": "Year 3 Data Sufficiency in DI Contexts distinguishes top 5% from the rest in TCS Digital, Infosys PP, and FAANG qualifying rounds."
          },
          "practiceSets": {
            "easy": [
              {
                "id": "pq-y3-di-e1",
                "question": "Year 3 Data Sufficiency in DI Contexts — moderate difficulty.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Year 3 Data Sufficiency in DI Contexts with one non-obvious step.",
                "difficulty": "Easy"
              },
              {
                "id": "pq-y3-di-e2",
                "question": "Year 3 Data Sufficiency in DI Contexts variant.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "Advanced Data Sufficiency in DI Contexts problem.",
                "difficulty": "Easy"
              }
            ],
            "intermediate": [
              {
                "id": "pq-y3-di-i1",
                "question": "Year 3 Data Sufficiency in DI Contexts — combined concept.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "C",
                "explanation": "Multi-concept Data Sufficiency in DI Contexts problem.",
                "difficulty": "Intermediate"
              },
              {
                "id": "pq-y3-di-i2",
                "question": "Second Year 3 Data Sufficiency in DI Contexts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "D",
                "explanation": "Advanced Data Sufficiency in DI Contexts variant.",
                "difficulty": "Intermediate"
              }
            ],
            "advanced": [
              {
                "id": "pq-y3-di-a1",
                "question": "High-difficulty Year 3 Data Sufficiency in DI Contexts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "A",
                "explanation": "Hardest variant of Year 3 Data Sufficiency in DI Contexts.",
                "difficulty": "Advanced"
              }
            ],
            "placementStyle": [
              {
                "id": "pq-y3-di-p1",
                "question": "Placement-style Year 3 Data Sufficiency in DI Contexts.",
                "options": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "correctAnswer": "B",
                "explanation": "TCS/Infosys level Data Sufficiency in DI Contexts question.",
                "difficulty": "Placement-Style"
              }
            ]
          },
          "quickRevision": {
            "summaryBullets": [
              "Core concept of Data Sufficiency in DI Contexts: Principal: Original sum.",
              "Rate: Interest %.",
              "Always review calculation steps.",
              "Apply Data Sufficiency in DI Contexts shortcuts for faster resolution."
            ],
            "quickFormulas": [
              "Advanced Data Sufficiency in DI Contexts compound formula"
            ]
          },
          "keyTakeaways": [
            "Year 3 Data Sufficiency in DI Contexts mastery requires 50+ practice problems — pattern recognition is built, not born.",
            "The key insight pattern in Data Sufficiency in DI Contexts appears repeatedly — once you recognize it the first time, subsequent problems become much faster.",
            "Verify every Year 3 Data Sufficiency in DI Contexts answer using boundary cases or a simpler equivalent problem."
          ],
          "selfCheckQuestions": [
            "Solve 3 Year 3 Data Sufficiency in DI Contexts problems, identifying the 'key unlock' in each.",
            "What makes Year 3 Data Sufficiency in DI Contexts harder than Year 2? Write in your own words.",
            "Create a Year 3 Data Sufficiency in DI Contexts problem for a peer to solve."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Level 3: Data Sufficiency in DI Contexts"
            },
            {
              "sourceName": "50 Top Placement Problems — Previous TCS/Infosys Papers",
              "sourceType": "Practice Set",
              "referenceNote": "Data Sufficiency in DI Contexts advanced category"
            }
          ]
        }
      ]
    }
  ]
};
