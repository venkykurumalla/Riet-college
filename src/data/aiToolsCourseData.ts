import {
  CourseInfo,
  CourseObjective,
  CourseOutcome,
  COPOMappingRow,
  CourseUnit,
  BookResource,
  WebResource
} from '../types';

export const fontCourseInfo: CourseInfo = {
  title: 'AI Tools and Applications',
  programme: 'B.Tech CSE(DS) – R26',
  university: 'JNTUK Kakinada',
  ltpc: '0 - 1 - 3 - 2.5',
  prerequisites: 'NIL'
};

export const COURSE_OBJECTIVES: CourseObjective[] = [
  {
    id: 1,
    text: 'To familiarize students with the landscape of AI tools and their underlying working principles.'
  },
  {
    id: 2,
    text: 'To develop competence in prompt engineering for effective interaction with generative AI systems.'
  },
  {
    id: 3,
    text: 'To enable students to apply AI tools for data analysis, visualization, and interpretation.'
  },
  {
    id: 4,
    text: 'To train students in using AI-assisted tools for coding, writing, and productivity tasks.'
  },
  {
    id: 5,
    text: 'To instill awareness of ethical, legal, and societal considerations in AI tool usage.'
  }
];

export const COURSE_OUTCOMES: CourseOutcome[] = [
  {
    id: 'CO1',
    bloomLevel: 'K1',
    description: 'Recall the categories, capabilities, and limitations of major AI tools (text, image, code, data).'
  },
  {
    id: 'CO2',
    bloomLevel: 'K2',
    description: 'Explain the principles of prompt engineering and how generative AI models process and generate responses.'
  },
  {
    id: 'CO3',
    bloomLevel: 'K3',
    description: 'Apply AI tools to solve first-year engineering problems in analysis, writing, and coding tasks.'
  },
  {
    id: 'CO4',
    bloomLevel: 'K4',
    description: 'Analyze AI-generated outputs for accuracy, bias, and reliability before use.'
  },
  {
    id: 'CO5',
    bloomLevel: 'K5',
    description: 'Evaluate the ethical, academic-integrity, and societal implications of AI tool use, justifying appropriate usage choices.'
  }
];

export const CO_PO_MAPPING: COPOMappingRow[] = [
  { co: 'CO1', po1: 'M', po2: '-', po3: '-', po4: '-', po5: 'H', po6: 'L', po7: 'L', po8: '-', po9: '-', po10: '-', po11: 'L', pso1: '', pso2: '', pso3: '' },
  { co: 'CO2', po1: 'M', po2: 'M', po3: '-', po4: '-', po5: 'H', po6: 'L', po7: '-', po8: 'L', po9: '-', po10: 'M', po11: 'L', pso1: '', pso2: '', pso3: '' },
  { co: 'CO3', po1: 'H', po2: 'H', po3: 'M', po4: 'M', po5: 'H', po6: 'L', po7: 'L', po8: '-', po9: 'L', po10: 'M', po11: 'M', pso1: '', pso2: '', pso3: '' },
  { co: 'CO4', po1: 'M', po2: 'H', po3: 'M', po4: 'H', po5: 'H', po6: 'M', po7: 'M', po8: 'H', po9: 'L', po10: 'M', po11: 'M', pso1: '', pso2: '', pso3: '' },
  { co: 'CO5', po1: 'L', po2: 'M', po3: 'M', po4: 'M', po5: 'M', po6: 'H', po7: 'H', po8: 'H', po9: 'M', po10: 'H', po11: 'M', pso1: '', pso2: '', pso3: '' }
];

export const COURSE_UNITS: CourseUnit[] = [
  {
    id: 1,
    number: 'UNIT 1',
    title: 'Introduction to AI and the AI Tools Landscape',
    description: 'Foundations of AI, ML, and Generative AI, core tool categories, LLM operation principles, tool selection criteria, workspace configuration, and hands-on comparison.',
    topics: [
      {
        id: 'u1-t1',
        unitId: 1,
        topicNumber: 1,
        title: 'What is AI, Machine Learning, and Generative AI',
        syllabusPoint: 'What is AI, Machine Learning, and Generative AI — basic definitions and how they relate to one another.',
        estimatedMinutes: 25,
        content: {
          overview: 'Artificial Intelligence, Machine Learning, and Generative AI form concentric spheres of modern computational intelligence. Understanding how these three domains relate provides first-year engineering students with a solid foundation for evaluating AI tools.',
          exactSyllabusPoint: 'What is AI, Machine Learning, and Generative AI — basic definitions and how they relate to one another.',
          explanation: 'Artificial Intelligence (AI) is the overarching branch of computer science dedicated to creating systems capable of performing tasks that typically require human cognition, such as visual perception, decision-making, speech recognition, and language translation.\n\nMachine Learning (ML) is a subfield of AI that focuses on building algorithms that learn patterns directly from data and improve their performance over time without being explicitly programmed with rule-based conditional logic.\n\nGenerative AI (GenAI) is a specialized subset of Machine Learning focused on creating new, original content—such as text, synthetic code, photorealistic images, audio, or video—by learning the probabilistic patterns and structures of massive training datasets.',
          keyConcepts: [
            {
              title: 'Artificial Intelligence (AI)',
              description: 'Broad term for machine systems performing human-like cognitive tasks like reasoning, pattern recognition, and problem solving.'
            },
            {
              title: 'Machine Learning (ML)',
              description: 'Algorithms that learn statistical patterns from data to make predictions (e.g., spam detection, housing price estimation).'
            },
            {
              title: 'Generative AI (GenAI)',
              description: 'AI models that generate novel artifacts (text, code, images, audio) based on learned probabilistic data distributions.'
            },
            {
              title: 'Hierarchical Relationship',
              description: 'GenAI is a subfield of ML, which in turn is a subfield of AI (GenAI ⊂ ML ⊂ AI).'
            }
          ],
          realWorldExamples: [
            'Traditional AI: Rule-based chess engines like Deep Blue evaluating positional states.',
            'Machine Learning: Email filters predicting whether an incoming email is spam based on historical frequency metrics.',
            'Generative AI: ChatGPT composing a formal project proposal draft from a brief outline prompt.'
          ],
          engineeringExamples: [
            'Engineering AI System: An automated structural diagnostic system inspecting bridge imagery for surface crack classification.',
            'Engineering ML Model: Predicting concrete compressive strength based on water-cement ratio and curing time data.',
            'Engineering GenAI Tool: Generating Python scripts to plot stress-strain curves from raw sensor data CSV files.'
          ],
          practicalApplication: {
            title: 'Identifying AI vs ML vs GenAI in Academic Tools',
            steps: [
              'Step 1: Check if the tool uses hardcoded rules or data-driven patterns. Rule-based calculators are general software, not ML.',
              'Step 2: Check if the tool outputs a prediction score or classification. If yes, it is standard Predictive ML (e.g., fraud score).',
              'Step 3: Check if the tool generates brand new text, code, or artwork. If yes, it falls under Generative AI.'
            ]
          },
          keyTakeaways: [
            'AI is the broadest discipline of smart computational systems.',
            'ML learns rules automatically from empirical data rather than hand-crafted logic.',
            'GenAI produces new content based on learned statistical associations.',
            'All Generative AI is Machine Learning, but not all Machine Learning is Generative AI.'
          ]
        }
      },
      {
        id: 'u1-t2',
        unitId: 1,
        topicNumber: 2,
        title: 'Core Categories of AI Tools',
        syllabusPoint: 'Core categories of AI tools: Conversational/text, Code assistants, Data-analysis tools, Image-generation tools, Writing/productivity tools.',
        estimatedMinutes: 20,
        content: {
          overview: 'Modern AI tools can be classified into distinct functional categories based on their primary input/output modalities and target workflows in academic and professional engineering context.',
          exactSyllabusPoint: 'Core categories of AI tools: Conversational/text, Code assistants, Data-analysis tools, Image-generation tools, Writing/productivity tools.',
          explanation: 'AI tools differ significantly in architecture, interface, and capabilities. Understanding their primary categories allows engineers to select the most efficient tool for a specific task:\n\n1. Conversational / Text AI: General-purpose reasoning chatbots capable of multi-turn dialogue, research assistance, and document querying (e.g., ChatGPT, Claude, Gemini, Perplexity).\n\n2. AI Coding Assistants: Inline code completion engines and agentic editors that auto-suggest functions, refactor legacy code, and debug syntax errors inside IDEs (e.g., GitHub Copilot, Cursor, Claude Code).\n\n3. Data-Analysis Tools: Intelligent agents capable of executing Python/R code, parsing uploaded datasets, computing statistical summaries, and rendering charts from natural language instructions (e.g., ChatGPT Advanced Data Analysis, Julius AI, MS Copilot in Excel).\n\n4. Image-Generation Tools: Diffusion and transformer models that synthesize photorealistic pictures, diagrams, and design mockups from descriptive prompts (e.g., DALL-E 3, Midjourney, Stable Diffusion/Flux).\n\n5. Writing & Productivity Tools: AI-powered utilities for grammar correction, automated slide deck creation, meeting transcript summarization, and workflow automation (e.g., Grammarly, Gamma, Notion AI, Fathom).',
          keyConcepts: [
            {
              title: 'Conversational/Text AI',
              description: 'Interactive natural language models designed for discussion, text synthesis, and broad reasoning.'
            },
            {
              title: 'Code Assistants',
              description: 'Context-aware programming tools integrated into editors to accelerate software development.'
            },
            {
              title: 'Data-Analysis Tools',
              description: 'Natural language interfaces for dataset manipulation, statistical computations, and chart generation.'
            },
            {
              title: 'Image & Media Generators',
              description: 'Generative models producing visual assets from text prompts using diffusion algorithms.'
            }
          ],
          realWorldExamples: [
            'Conversational AI: Asking Claude to synthesize key research findings from a 20-page PDF paper.',
            'Coding Assistant: GitHub Copilot completing a complex sorting algorithm inside VS Code.',
            'Data Tool: Julius AI generating a histogram of student test scores from an uploaded Excel file.'
          ],
          engineeringExamples: [
            'Engineering Documentation: Using Notion AI to draft standard operating procedures for a circuit lab.',
            'Visual Mockup: Using DALL-E 3 to generate conceptual architectural renderings for a civil engineering design project.'
          ],
          practicalApplication: {
            title: 'Selecting the Category Based on Task Objective',
            steps: [
              'Step 1: Define the primary input format (text, code, tabular dataset, or prompt description).',
              'Step 2: Match the desired output format with the tool category (e.g., Python file → Code Assistant; Plot PNG → Data Analysis Tool).',
              'Step 3: Combine complementary tools (e.g., research with Perplexity, draft with Claude, code with Cursor).'
            ]
          },
          keyTakeaways: [
            'Choose specialized tools for specialized tasks (e.g., Cursor for coding, Julius for data).',
            'General conversational AI acts as a versatile starting point for brainstorming and multi-modal tasks.',
            'Combining tools across categories creates a powerful academic workflow.'
          ]
        }
      },
      {
        id: 'u1-t3',
        unitId: 1,
        topicNumber: 3,
        title: 'How LLMs Process and Generate Responses',
        syllabusPoint: 'How large language models process and generate responses (conceptual, non-mathematical overview).',
        estimatedMinutes: 30,
        content: {
          overview: 'Large Language Models (LLMs) predict the next most probable word fragment (token) based on vast patterns learned during pre-training. Understanding this non-mathematically helps students grasp why LLMs excel at language tasks yet occasionally generate plausible-sounding falsehoods.',
          exactSyllabusPoint: 'How large language models process and generate responses (conceptual, non-mathematical overview).',
          explanation: 'At a conceptual level, a Large Language Model works as a sophisticated text prediction system:\n\n1. Tokens & Tokenization: Before processing, input text is broken down into smaller chunks called "tokens" (typically 3-4 letters or words). For example, the word "engineering" might be split into "engine" and "ering".\n\n2. Training Concept: During pre-training on billions of webpage pages, books, and articles, the model repeatedly guesses masked tokens and adjusts its parameters to learn grammar, facts, reasoning paths, and contextual associations.\n\n3. Context Window: The context window represents the model\'s active short-term memory—the maximum number of tokens it can read and consider at one time when forming a response.\n\n4. Autoregressive Generation: The model generates text token by token. It evaluates the prompt plus all previously generated tokens to pick the next most probabilistic token.\n\n5. Limitations & Hallucinations: Because LLMs predict tokens based on statistical likelihood rather than querying a real-time database of ground truth, they can generate confident statements that are factually incorrect (hallucinations), especially when asked for precise citations or niche calculations.',
          keyConcepts: [
            {
              title: 'Tokens',
              description: 'Basic building blocks of text processed by LLMs (~1 token ≈ 0.75 English words).'
            },
            {
              title: 'Context Window',
              description: 'The maximum token capacity the LLM can read and process in a single conversation context.'
            },
            {
              title: 'Prompt & Response',
              description: 'Prompt is the input context provided by user; response is the generated probabilistic output sequence.'
            },
            {
              title: 'Hallucination',
              description: 'When an LLM produces plausible-sounding but factually incorrect or fabricated information.'
            }
          ],
          realWorldExamples: [
            'Tokenization: The phrase "AI for B.Tech" is converted to ~4-5 tokens like ["AI", " for", " B", ".", "Tech"].',
            'Context Window: A 128k token context window allows an LLM to digest a full textbook chapter before answering questions.'
          ],
          engineeringExamples: [
            'Probabilistic Coding: An LLM suggests standard `for` loops in C++ because that sequence appeared millions of times in its training data.',
            'Hallucination Risk: Asking an LLM for an obscure thermodynamic constant without specifying a reference textbook may lead it to invent a plausible number.'
          ],
          practicalApplication: {
            title: 'Mitigating Hallucination through Structured Inputs',
            steps: [
              'Step 1: Always provide source text directly inside the prompt context when asking for factual summaries.',
              'Step 2: Instruct the AI to explicitly state "Information not found in context" if the answer is missing.',
              'Step 3: Manually cross-reference all numeric outputs, equations, and literature citations against verified reference materials.'
            ]
          },
          keyTakeaways: [
            'LLMs are probabilistic next-token predictors, not conscious reasoning engines.',
            'Tokens are the fundamental unit of cost, memory, and length in LLM systems.',
            'Plausibility does not equal accuracy—always verify factual and mathematical claims.'
          ]
        }
      },
      {
        id: 'u1-t4',
        unitId: 1,
        topicNumber: 4,
        title: 'Criteria for Selecting the Right AI Tool',
        syllabusPoint: 'Criteria for selecting the right AI tool for a given task: Accuracy needs, Cost, Data sensitivity, Output format.',
        estimatedMinutes: 20,
        content: {
          overview: 'Not all tasks require the largest or most expensive AI model. Evaluating tools against four foundational criteria—accuracy needs, cost, data sensitivity, and desired output format—ensures effective and compliant usage.',
          exactSyllabusPoint: 'Criteria for selecting the right AI tool for a given task: Accuracy needs, Cost, Data sensitivity, Output format.',
          explanation: 'When approaching an academic or engineering problem with AI assistance, apply the following 4-point selection evaluation matrix:\n\n1. Accuracy Needs: Is the task mission-critical or exploratory? Brainstorming project ideas permits low accuracy tolerance, whereas calculating structural load tolerances requires deterministic, highly verifiable outputs.\n\n2. Cost & Budget: Free-tier public web models are adequate for basic queries. However, complex multi-file engineering repositories may require premium API usage or paid monthly subscriptions.\n\n3. Data Sensitivity & Privacy: Does the input contain confidential institutional data, personal student IDs, or proprietary project code? Public free-tier tools often log conversations for model training, whereas enterprise or local offline models protect data privacy.\n\n4. Output Format Requirements: Does the task require plain text, formatted Markdown, executable Python code, downloadable SVG diagrams, or JSON API payloads? Select tools optimized for your intended output format.',
          keyConcepts: [
            {
              title: 'Accuracy Tolerance',
              description: 'Matching tool reliability with risk level (high accuracy for engineering calculations vs exploratory for creative tasks).'
            },
            {
              title: 'Cost Hierarchy',
              description: 'Balancing free-tier quotas against paid subscriptions or pay-per-token API endpoints.'
            },
            {
              title: 'Data Sensitivity & Governance',
              description: 'Protecting confidential data from being logged into public AI training datasets.'
            },
            {
              title: 'Output Modality',
              description: 'Ensuring the tool natively emits the required format (e.g., CSV, JSON, LaTeX, Python script).'
            }
          ],
          realWorldExamples: [
            'Creative Task: Using ChatGPT free-tier for drafting a seminar welcome speech (Low accuracy risk, zero cost).',
            'Sensitive Task: Summarizing internal college faculty meeting notes (Requires strict data sensitivity check).'
          ],
          engineeringExamples: [
            'Data Analysis: Uploading class performance CSV to Julius AI or Python Interpreter to get native `.png` charts and clean summary statistics.'
          ],
          practicalApplication: {
            title: 'Applying the 4-Point AI Tool Selection Matrix',
            steps: [
              'Step 1 (Accuracy): Assess whether errors carry safety or academic integrity penalties.',
              'Step 2 (Data Privacy): Confirm whether input data is public, internal, or confidential.',
              'Step 3 (Cost): Verify if free-tier daily usage limits are sufficient.',
              'Step 4 (Format): Select the tool that outputs directly into your required file type.'
            ]
          },
          keyTakeaways: [
            'Never upload sensitive or personal data to unverified public AI models.',
            'Choose the tool format that minimizes manual re-formatting.',
            'Match the model capability to the precision needed for the problem.'
          ]
        }
      },
      {
        id: 'u1-t5',
        unitId: 1,
        topicNumber: 5,
        title: 'Setting Up Accounts & Understanding Tiers',
        syllabusPoint: 'Setting up accounts and workspaces; understanding free-tier versus paid-tier capabilities and limitations.',
        estimatedMinutes: 20,
        content: {
          overview: 'Navigating AI platforms efficiently requires understanding account setup, workspace settings, context limits, and the practical differences between free and paid subscription tiers.',
          exactSyllabusPoint: 'Setting up accounts and workspaces; understanding free-tier versus paid-tier capabilities and limitations.',
          explanation: 'To use AI tools responsibly in an academic setting, students must master workspace setup and account configuration:\n\n1. Workspace & Account Setup: Create dedicated academic accounts using institutional email addresses where applicable. Configure user preferences, default model selection, and privacy settings (such as opting out of model training history where available).\n\n2. Free-Tier Capabilities & Limits: Free tiers (e.g., ChatGPT Free, Claude Free, Gemini Free) offer access to base models, ideal for general learning. However, they enforce rate limits (e.g., limited messages per hour), capped context windows, and restricted access during peak usage times.\n\n3. Paid-Tier Capabilities: Paid subscriptions (e.g., ChatGPT Plus, Claude Pro, Gemini Advanced) unlock higher-tier reasoning models, expanded context windows, faster response speeds, advanced data analysis capabilities, and custom GPT creation.\n\n4. Practical Considerations: For first-year B.Tech students, free-tier capabilities across multiple platforms (combining ChatGPT, Claude, Gemini, and Perplexity) provide more than enough capacity for coursework without requiring financial expense.',
          keyConcepts: [
            {
              title: 'Account Settings & Data Privacy',
              description: 'Configuring history controls and opting out of training data collection.'
            },
            {
              title: 'Rate Limits',
              description: 'Restrictions placed on the frequency or volume of prompts sent within a given time window.'
            },
            {
              title: 'Context Window Quotas',
              description: 'Differences in document upload limits between free and premium tiers.'
            },
            {
              title: 'Multi-Tool Strategy',
              description: 'Leveraging free tiers of 3-4 different platforms to maximize availability.'
            }
          ],
          realWorldExamples: [
            'Rate Limit Encounter: Receiving a "You\'ve reached your hourly message limit on GPT-4o" notification and switching to Claude or Gemini to continue research.',
            'Privacy Setting: Turning off "Improve the model for everyone" in settings when analyzing personal study notes.'
          ],
          engineeringExamples: [
            'Workspace Customization: Setting system instructions in ChatGPT to "Format all code responses in standard C++17 with explanatory comments for a first-year engineering student."'
          ],
          practicalApplication: {
            title: 'Setting Up a Compliant Academic AI Workspace',
            steps: [
              'Step 1: Sign up on ChatGPT, Claude, and Perplexity using your academic credentials.',
              'Step 2: Navigate to Settings → Data Controls → Disable "Chat History & Training" if processing private notes.',
              'Step 3: Save custom instructions to specify your student role, preferred programming languages, and formatting preferences.'
            ]
          },
          keyTakeaways: [
            'Free tiers across multiple tools provide ample capacity when managed strategically.',
            'Always inspect privacy settings to control how your conversations are stored.',
            'Custom instructions save time by enforcing consistent output formats.'
          ]
        }
      }
    ],
    aiToolsTable: [
      {
        category: 'Conversational / General-Purpose AI',
        exampleTools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
        typicalApplications: ['Writing', 'Research', 'Coding help', 'File/data analysis', 'Cited web search']
      },
      {
        category: 'AI Coding Assistants',
        exampleTools: ['GitHub Copilot', 'Cursor', 'Claude Code'],
        typicalApplications: ['In-IDE code completion', 'AI-native editing', 'Multi-file agentic coding']
      },
      {
        category: 'Data Analysis Tools',
        exampleTools: ['ChatGPT (Advanced Data Analysis)', 'Microsoft Copilot in Excel', 'Julius AI'],
        typicalApplications: ['Upload a dataset', 'Generate statistics/charts', 'Spreadsheet formulas through natural language']
      },
      {
        category: 'Image Generation',
        exampleTools: ['Midjourney', 'DALL-E 3', 'Stable Diffusion / Flux'],
        typicalApplications: ['Illustrations', 'Concept art', 'Design mockups']
      },
      {
        category: 'Writing & Productivity',
        exampleTools: ['Grammarly', 'Gamma', 'Fathom', 'Notion AI'],
        typicalApplications: ['Grammar/style checking', 'Slide generation', 'Meeting summaries', 'Task automation']
      },
      {
        category: 'Audio, Video & Presentation',
        exampleTools: ['ElevenLabs', 'Runway/Sora', 'Synthesia'],
        typicalApplications: ['Text-to-speech', 'AI video generation', 'Script-to-video presentations'],
        isOptional: true
      }
    ],
    teacherExamples: [
      {
        id: 'u1-ex1',
        number: 1,
        title: 'Live Chatbot Comparison on Engineering Design Query',
        description: 'Live comparison of the same general engineering query ("explain the engineering design process") answered by two different AI chatbots, highlighting differences in response style and accuracy.',
        steps: [
          'Step 1: Open ChatGPT (GPT-4o) and Claude 3.5 Sonnet side-by-side in browser windows.',
          'Step 2: Enter the exact prompt: "Explain the engineering design process for a first-year B.Tech student in 5 structured steps."',
          'Step 3: Compare ChatGPT\'s response (bulleted, concise, action-oriented) with Claude\'s response (narrative, contextual, deeply structured).',
          'Step 4: Point out how ChatGPT includes quick bullet lists while Claude provides detailed phase breakdowns and real-world engineering trade-offs.'
        ],
        teachingNote: 'Emphasize to students that different LLM architectures and RLHF alignments produce distinct tone, structure, and depth for identical inputs.'
      },
      {
        id: 'u1-ex2',
        number: 2,
        title: 'Walkthrough of AI Tool Interface Elements',
        description: 'Walkthrough of an AI tool\'s interface: settings, conversation history, file upload, and model selection.',
        steps: [
          'Step 1: Share screen showing the main ChatGPT / Claude dashboard.',
          'Step 2: Demonstrate model switcher dropdown (e.g., selecting between fast vs deep reasoning models).',
          'Step 3: Show the file upload attachment button (paperclip icon) and demonstrate uploading a sample 2-page PDF document.',
          'Step 4: Navigate to User Profile → Settings → Data Controls, demonstrating how chat history can be searched, exported, or deleted.'
        ],
        teachingNote: 'Ensure students understand how attaching files alters the context window and how privacy settings affect data storage.'
      }
    ],
    studentExercises: [
      {
        id: 'u1-stu1',
        number: 1,
        title: 'Platform Comparison Exercise',
        problemStatement: 'Create accounts on two AI platforms (e.g., ChatGPT and Claude/Perplexity) and compare their responses to a simple engineering question: "explain the difference between analysis and design".',
        deliverable: 'A short written response (150-200 words) contrasting accuracy, tone, formatting, and clarity between the two platforms.',
        guidance: 'Evaluate whether one platform provided better real-world engineering examples or clearer formatting.'
      },
      {
        id: 'u1-stu2',
        number: 2,
        title: 'AI Tools Category Chart',
        problemStatement: 'Prepare a one-page comparison chart of five AI tools by category, key capabilities, pricing tier (free vs paid), and primary academic use case.',
        deliverable: 'A structured 1-page table covering 5 distinct tool categories from Unit 1.',
        guidance: 'Include at least one tool from Conversational AI, Coding Assistants, Data Analysis, Image Generation, and Writing/Productivity.'
      },
      {
        id: 'u1-stu3',
        number: 3,
        title: 'Academic Reflection',
        problemStatement: 'Write a short reflection identifying one task in your daily academic life (e.g., lab report formatting, math concept clarification, seminar outline) where an AI tool could assist you responsibly.',
        deliverable: 'A 1-paragraph reflection highlighting the task, chosen tool, expected benefit, and verification step.',
        guidance: 'Focus on responsible usage and explicitly state how you will verify the AI-generated output.'
      }
    ]
  },
  {
    id: 2,
    number: 'UNIT 2',
    title: 'Prompt Engineering and Generative AI Tools',
    description: 'Anatomy of effective prompts, zero-shot/few-shot/chain-of-thought techniques, role-based context setting, iterative refinement, and generative techniques for brainstorming, summarizing, and technical writing.',
    topics: [
      {
        id: 'u2-t1',
        unitId: 2,
        topicNumber: 1,
        title: 'Anatomy of a Good Prompt',
        syllabusPoint: 'Anatomy of a good prompt — context, clear instruction, desired format, and constraints.',
        estimatedMinutes: 25,
        content: {
          overview: 'Prompt engineering is the practice of crafting precise inputs to guide generative AI models toward accurate, structured, and contextually relevant outputs. A well-constructed prompt contains four core structural components.',
          exactSyllabusPoint: 'Anatomy of a good prompt — context, clear instruction, desired format, and constraints.',
          explanation: 'A prompt acts as the complete instruction set for an LLM. Vague prompts yield generic, unfocused answers. High-performing prompts incorporate four key building blocks:\n\n1. Context: Background information specifying the user role, academic level, domain, or situation (e.g., "I am a 1st-year B.Tech CSE student studying C programming...").\n\n2. Clear Instruction: The specific task or action verb to be executed (e.g., "Explain the concept of pointer memory addresses...").\n\n3. Desired Format: The exact output structure requested (e.g., "Provide a numbered 3-step explanation followed by a short C code snippet and Markdown table...").\n\n4. Constraints: Explicit boundary rules or negative instructions (e.g., "Do not use advanced C++ pointers; limit explanation to standard C syntax under 200 words...").',
          keyConcepts: [
            {
              title: 'Context',
              description: 'Background information that sets the domain, user identity, and situational setting.'
            },
            {
              title: 'Clear Instruction',
              description: 'Direct action verbs defining the exact core task (e.g., summarize, compare, generate, debug).'
            },
            {
              title: 'Desired Format',
              description: 'Structural requirements specifying tables, bullet points, code blocks, or JSON schema.'
            },
            {
              title: 'Constraints',
              description: 'Limits on length, tone, technical complexity, or disallowed terms.'
            }
          ],
          realWorldExamples: [
            'Poor Prompt: "Tell me about solar panels."',
            'Structured Prompt: "Context: I am preparing a 5-minute seminar presentation for a freshman engineering class. Task: Explain photovoltaic energy conversion. Format: 4 bullet points with bold sub-headers. Constraint: Keep total response under 150 words and avoid complex quantum mechanical equations."'
          ],
          engineeringExamples: [
            'Engineering Prompt: "Context: Civil engineering fluid mechanics lab. Task: Draft a procedure for measuring flow rate using a Venturi meter. Format: Numbered step-by-step list followed by a formula summary box. Constraint: Assume standard lab apparatus with manometer readings."'
          ],
          practicalApplication: {
            title: 'Applying the 4-Component Prompt Formula',
            steps: [
              'Step 1 (Context): Write 1 sentence establishing who you are and why you need the information.',
              'Step 2 (Instruction): State the main command clearly starting with an action verb.',
              'Step 3 (Format): Request a specific output layout (e.g., Markdown table with 3 columns).',
              'Step 4 (Constraints): Set length limits and restrict unwanted topics.'
            ]
          },
          keyTakeaways: [
            'Vague inputs produce generic outputs; structured inputs yield precise results.',
            'Include Context, Instruction, Format, and Constraints in every serious prompt.',
            'Constraints prevent the AI from generating unnecessarily long or overly complex text.'
          ]
        }
      },
      {
        id: 'u2-t2',
        unitId: 2,
        topicNumber: 2,
        title: 'Zero-Shot, Few-Shot, and Chain-of-Thought Prompting',
        syllabusPoint: 'Zero-shot, few-shot, and chain-of-thought prompting techniques and when to use each.',
        estimatedMinutes: 30,
        content: {
          overview: 'Prompting strategies vary based on task complexity. Zero-shot asks directly without examples, few-shot provides illustrative input-output pairs, and chain-of-thought guides the model through structured reasoning steps.',
          exactSyllabusPoint: 'Zero-shot, few-shot, and chain-of-thought prompting techniques and when to use each.',
          explanation: '1. Zero-Shot Prompting: Providing a task instruction to the model without any prior training examples. Effective for straightforward questions, general knowledge retrieval, or common tasks where the model\'s baseline training is sufficient (e.g., "Define kinetic energy").\n\n2. Few-Shot Prompting: Providing one or more input-output exemplar pairs within the prompt before asking the model to perform the task on a new input. Crucial when enforcing custom formatting, domain-specific classification, or consistent syntax.\n\n3. Chain-of-Thought (CoT) Prompting: Explicitly instructing the model to break down complex multi-step reasoning problems into intermediate logical steps before producing a final answer (e.g., "Think step-by-step before answering"). This significantly improves accuracy on mathematical calculations, logic puzzles, and multi-stage engineering problems.',
          keyConcepts: [
            {
              title: 'Zero-Shot',
              description: 'Direct query without providing example inputs or outputs.'
            },
            {
              title: 'Few-Shot',
              description: 'Including 2-3 exemplar pairs in the prompt to establish pattern and format.'
            },
            {
              title: 'Chain-of-Thought (CoT)',
              description: 'Guiding the model to write out intermediate step-by-step reasoning.'
            },
            {
              title: 'Technique Selection',
              description: 'Zero-shot for simple facts, Few-shot for custom formats, CoT for complex math/logic.'
            }
          ],
          realWorldExamples: [
            'Zero-Shot Example: "Convert 100 Celsius to Fahrenheit."',
            'Few-Shot Example: "Input: Apple -> Category: Fruit | Input: Steel -> Category: Alloy | Input: Silicon -> Category: Semiconductor | Input: Copper -> Category:?"',
            'Chain-of-Thought Example: "Calculate the kinetic energy of a 1200 kg car moving at 20 m/s. Work step-by-step: 1. State formula, 2. Substitute values, 3. Compute final answer with units."'
          ],
          engineeringExamples: [
            'Engineering CoT: "Determine the equivalent resistance of three 10-ohm resistors connected in parallel. Show step-by-step calculations: write the parallel formula (1/Req = 1/R1 + 1/R2 + 1/R3), substitute numbers, sum fractions, and solve for Req."'
          ],
          practicalApplication: {
            title: 'Selecting the Prompting Strategy',
            steps: [
              'Step 1: Try Zero-Shot first for standard definitions or basic summaries.',
              'Step 2: If the AI output fails to follow your required layout, add 2 Exemplar pairs (Few-Shot).',
              'Step 3: If the AI makes arithmetic or logical errors, append "Think step by step" (Chain-of-Thought).'
            ]
          },
          keyTakeaways: [
            'Few-shot prompting is the most reliable way to lock in output formatting.',
            'Chain-of-thought prompting dramatically reduces arithmetic errors in LLM outputs.',
            'Match the technique to the complexity of the engineering problem.'
          ]
        }
      },
      {
        id: 'u2-t3',
        unitId: 2,
        topicNumber: 3,
        title: 'Role-Based and Context-Setting Prompts',
        syllabusPoint: 'Role-based and context-setting prompts (for example, asking the AI to respond as a reviewer, tutor, or domain expert).',
        estimatedMinutes: 20,
        content: {
          overview: 'Assigning a specific role or persona to an AI model alters its perspective, technical depth, tone, and vocabulary, making it act effectively as a patient tutor, rigorous code reviewer, or senior domain expert.',
          exactSyllabusPoint: 'Role-based and context-setting prompts (for example, asking the AI to respond as a reviewer, tutor, or domain expert).',
          explanation: 'Generative AI models contain vast latent representations of different domain styles. By assigning a persona at the beginning of a prompt, you prime the model to activate relevant sub-networks of knowledge and communication styles:\n\n1. AI as a Patient Tutor: "Act as a friendly first-year B.Tech computer science tutor. Explain recursion using simple analogies and simple C code examples without jargon." -> Output is supportive, gradual, and analogy-driven.\n\n2. AI as a Senior Code Reviewer: "Act as a strict Google software engineer conducting a code review. Analyze the following C program for memory leaks, time complexity, and adherence to naming conventions." -> Output is critical, precise, and performance-focused.\n\n3. AI as a Peer Reviewer: "Act as an academic journal reviewer evaluating a student research poster abstract. Highlight strengths, weak arguments, and missing citations." -> Output is academic, objective, and analytical.',
          keyConcepts: [
            {
              title: 'Persona Priming',
              description: 'Specifying an expert persona to tailor the tone, vocabulary, and depth of the response.'
            },
            {
              title: 'Tutor Persona',
              description: 'Ideal for concept learning, encouraging step-by-step guidance and analogies.'
            },
            {
              title: 'Reviewer Persona',
              description: 'Ideal for critique, bug detection, quality control, and academic feedback.'
            },
            {
              title: 'Domain Expert Persona',
              description: 'Ideal for advanced technical terminology and industry-standard solutions.'
            }
          ],
          realWorldExamples: [
            'Tutor Role: "Act as a physics professor explaining Newton\'s Third Law using a rocket launch analogy."',
            'Reviewer Role: "Act as an editor checking a project report abstract for grammatical flow and technical clarity."'
          ],
          engineeringExamples: [
            'Engineering Persona: "Act as a Senior Data Scientist. Review this Python pandas script for data cleaning efficiency and suggest vectorization improvements over raw for loops."'
          ],
          practicalApplication: {
            title: 'Constructing a Role-Based Prompt',
            steps: [
              'Step 1: Begin prompt with "Act as a [Specific Role/Title]".',
              'Step 2: Define the target audience (e.g., "explaining to a B.Tech freshman").',
              'Step 3: Specify the desired tone (e.g., "encouraging", "rigorous", "concise").',
              'Step 4: State the main task.'
            ]
          },
          keyTakeaways: [
            'Role assignment immediately sets the appropriate vocabulary and detail level.',
            'Use tutor roles when learning new topics; use reviewer roles when auditing your work.',
            'Explicitly specify both the AI\'s role and the intended reader\'s identity.'
          ]
        }
      },
      {
        id: 'u2-t4',
        unitId: 2,
        topicNumber: 4,
        title: 'Iterative Prompt Refinement',
        syllabusPoint: 'Iterative prompt refinement — diagnosing a poor AI response and rewriting the prompt to fix it.',
        estimatedMinutes: 25,
        content: {
          overview: 'Prompt engineering is rarely a single-step action. Effective AI interaction involves analyzing suboptimal responses, identifying specific failure modes, and iteratively refining the prompt to achieve desired results.',
          exactSyllabusPoint: 'Iterative prompt refinement — diagnosing a poor AI response and rewriting the prompt to fix it.',
          explanation: 'When an AI tool provides an unsatisfactory response, do not start over from scratch. Instead, diagnose the response flaw and apply targeted prompt revisions:\n\n1. Diagnostic Step — Identify the Failure Mode:\n- Too Vague/Broad? -> Needs tighter scope and length constraints.\n- Incorrect Format? -> Needs explicit layout rules or Few-Shot examples.\n- Overly Complex Language? -> Needs role adjustment (e.g., "Explain for a 1st-year student").\n- Factually Off/Hallucinated? -> Needs source context provided directly in prompt.\n\n2. Refinement Techniques:\n- Clarify ambiguous terms.\n- Add negative constraints (e.g., "Do not use external libraries").\n- Request intermediate verification steps.',
          keyConcepts: [
            {
              title: 'Diagnostic Evaluation',
              description: 'Analyzing why an AI output fell short (scope, format, tone, accuracy).'
            },
            {
              title: 'Iterative Feedback Loop',
              description: 'Providing feedback to the AI in subsequent turns to correct specific errors.'
            },
            {
              title: 'Negative Constraints',
              description: 'Explicitly telling the AI what NOT to include in its output.'
            },
            {
              title: 'Prompt Versioning',
              description: 'Keeping track of prompt variations to find the most reliable formulation.'
            }
          ],
          realWorldExamples: [
            'Initial Output: AI generates a 1,000-word essay on AI ethics when student wanted 3 bullet points.',
            'Refinement Prompt: "Too long. Summarize the above essay into exactly 3 bullet points, maximum 20 words per bullet point."'
          ],
          engineeringExamples: [
            'Initial Code Output: AI provides Python code using `numpy` when the student needs pure Python standard library.',
            'Refined Prompt: "Rewrite the previous algorithm using ONLY standard Python built-in lists and loops. Do not import numpy or any external packages."'
          ],
          practicalApplication: {
            title: '4-Step Iterative Refinement Cycle',
            steps: [
              'Step 1: Evaluate initial AI output against your task requirements.',
              'Step 2: Pinpoint the exact deficiency (e.g., format error, missing constraint).',
              'Step 3: Write a follow-up refinement prompt addressing only the defect.',
              'Step 4: Save the final working prompt structure for future reuse.'
            ]
          },
          keyTakeaways: [
            'Prompting is a conversational feedback loop, not a static query.',
            'Tell the AI exactly what went wrong in its previous answer so it can adjust.',
            'Negative constraints ("do not use X") are powerful refinement tools.'
          ]
        }
      },
      {
        id: 'u2-t5',
        unitId: 2,
        topicNumber: 5,
        title: 'Using Generative AI for Brainstorming, Summarizing & Drafting',
        syllabusPoint: 'Using generative AI for: brainstorming, summarizing, drafting technical content.',
        estimatedMinutes: 25,
        content: {
          overview: 'Generative AI tools serve as versatile intellectual accelerators across three primary academic workflow phases: creative brainstorming, rapid document summarization, and initial technical drafting.',
          exactSyllabusPoint: 'Using generative AI for: brainstorming, summarizing, drafting technical content.',
          explanation: '1. Brainstorming & Idea Generation: Generative AI excels at overcoming "blank page syndrome". By asking the AI for multiple diverse ideas (e.g., "Generate 10 innovative mini-project concepts combining IoT sensors and Python for a B.Tech competition"), students receive a broad spectrum of possibilities to critique and build upon.\n\n2. Technical Summarization: When faced with dense academic literature, AI can extract key objectives, methodologies, and conclusions. Prompting with specific structures (e.g., "Summarize this paper into Problem, Method, Findings, and Future Scope") ensures key details are captured efficiently.\n\n3. Technical Drafting: AI can assist in structuring lab reports, seminar introductions, email communications, and documentation drafts. The human student acts as the editor and verifier, refining the AI\'s draft for domain accuracy, personal voice, and institutional policy compliance.',
          keyConcepts: [
            {
              title: 'Brainstorming Partner',
              description: 'Using AI to generate multiple creative angles and topic ideas rapidly.'
            },
            {
              title: 'Structured Summarization',
              description: 'Distilling lengthy articles into predefined key analytical categories.'
            },
            {
              title: 'Drafting Accelerator',
              description: 'Creating initial outlines and drafts to overcome writer\'s block.'
            },
            {
              title: 'Human-in-the-Loop Editing',
              description: 'Reviewing, fact-checking, and polishing AI drafts before final submission.'
            }
          ],
          realWorldExamples: [
            'Brainstorming: Prompting an AI for 5 creative themes for an upcoming college technical fest paper presentation.',
            'Summarizing: Pasting a 1,500-word article on renewable energy storage and requesting a 200-word executive summary.'
          ],
          engineeringExamples: [
            'Drafting Technical Report: Using AI to outline the "Hardware Components Required" section of an Arduino-based smart irrigation project report.'
          ],
          practicalApplication: {
            title: 'Executing a Brainstorm-Draft-Refine Workflow',
            steps: [
              'Step 1 (Brainstorm): Ask AI for 5 project topic ideas.',
              'Step 2 (Select & Outline): Pick 1 idea and ask AI to generate a 4-section report outline.',
              'Step 3 (Draft & Verify): Have AI draft section 1 based on your notes, then manually review every technical fact.'
            ]
          },
          keyTakeaways: [
            'Use AI to launch the creative process, not to replace critical thinking.',
            'Always provide structured constraints when asking AI to summarize papers.',
            'You are responsible for every word in your final submission—edit AI drafts thoroughly.'
          ]
        }
      }
    ],
    teacherExamples: [
      {
        id: 'u2-ex1',
        number: 1,
        title: 'Refining a Vague Prompt Step-by-Step',
        description: 'Refine a vague prompt ("explain project scheduling") into a precise one step-by-step, showing output improvement at each stage.',
        steps: [
          'Step 1: Input Vague Prompt: "Explain project scheduling." -> Show generic 500-word output.',
          'Step 2: Add Context & Role: "Act as a Civil Engineering professor teaching 1st-year B.Tech students. Explain project scheduling." -> Show improved tone.',
          'Step 3: Add Structure & Format: "Act as a Civil Engineering professor. Explain project scheduling using the Critical Path Method (CPM). Format output as: 1. Core Definition, 2. Key Terms (Early Start, Late Finish, Float) in a Markdown table, 3. Simple 3-activity calculation example."',
          'Step 4: Highlight to class how the final output transformed from generic fluff into a structured, exam-ready study guide.'
        ],
        teachingNote: 'Demonstrate to students that 2 minutes spent refining a prompt saves 20 minutes of sifting through vague AI output.'
      },
      {
        id: 'u2-ex2',
        number: 2,
        title: 'Demonstrating Few-Shot Prompting for Structured Comparison',
        description: 'Demonstrate few-shot prompting by providing examples to guide AI toward a specific output format (example: formatted comparison table).',
        steps: [
          'Step 1: Define the target task: Categorizing programming languages by paradigm.',
          'Step 2: Construct prompt with 2 Exemplar pairs:\nInput: C -> Paradigm: Procedural | Primary Memory Control: Manual | Use Case: Systems\nInput: Haskell -> Paradigm: Functional | Primary Memory Control: Automatic | Use Case: Academic Research',
          'Step 3: Append target input: "Input: Python -> ? | Input: Rust -> ? | Input: Java -> ?"',
          'Step 4: Execute query and demonstrate how the AI follows the exact table/pair format without extra conversational filler.'
        ],
        teachingNote: 'Point out that Few-Shot prompting eliminates unwanted introductory text ("Sure, here is your answer...") and ensures clean output.'
      }
    ],
    studentExercises: [
      {
        id: 'u2-stu1',
        number: 1,
        title: '3-Version Prompt Comparison',
        problemStatement: 'Write three versions of a prompt for the same task ("explain sorting algorithms"): (A) Basic/Vague, (B) Detailed with Context & Constraints, (C) Role-based with Few-Shot format. Compare outputs across the 3 versions.',
        deliverable: 'A structured submission displaying the 3 prompts and a brief evaluation of output quality differences.',
        guidance: 'Evaluate which version gave the most directly usable content for study.'
      },
      {
        id: 'u2-stu2',
        number: 2,
        title: 'AI Article Summarization & Verification',
        problemStatement: 'Use an AI tool to summarize a one-page technical article on emerging technology. Manually read the original article and verify the AI summary for missing details or hallucinations.',
        deliverable: 'The AI summary annotated with manual verification checkmarks and a list of any omitted key points.',
        guidance: 'Pay special attention to whether the AI accurately preserved numeric metrics and author conclusions.'
      },
      {
        id: 'u2-stu3',
        number: 3,
        title: 'Chain-of-Thought Problem Solving Prompt',
        problemStatement: 'Draft a structured reasoning prompt (incorporating Chain-of-Thought) to solve a multi-step numerical problem (e.g., unit conversion or estimation of energy consumption in a home). Verify the calculation.',
        deliverable: 'The CoT prompt, the AI step-by-step solution, and a manual arithmetic verification statement.',
        guidance: 'Explicitly check whether the AI correctly carried units through each intermediate step.'
      }
    ]
  },
  {
    id: 3,
    number: 'UNIT 3',
    title: 'AI Tools for Data Analysis and Visualization',
    description: 'Natural language dataset querying, automated statistical summary generation, AI chart synthesis, interpreting statistical outputs, and detecting/correcting data processing errors.',
    topics: [
      {
        id: 'u3-t1',
        unitId: 3,
        topicNumber: 1,
        title: 'AI-Assisted Spreadsheet and Dataset Analysis',
        syllabusPoint: 'AI-assisted spreadsheet and dataset analysis using natural-language commands.',
        estimatedMinutes: 25,
        content: {
          overview: 'Modern AI data tools allow engineers to interact with tabular datasets (CSV, Excel) using natural language queries instead of complex manual formula syntax or SQL scripts.',
          exactSyllabusPoint: 'AI-assisted spreadsheet and dataset analysis using natural-language commands.',
          explanation: 'Traditionally, analyzing a spreadsheet required memorizing complex nested Excel formulas (VLOOKUP, INDEX/MATCH, SUMIFS) or writing custom Python scripts. AI-assisted data tools (such as ChatGPT Advanced Data Analysis, MS Copilot in Excel, and Julius AI) transform this workflow:\n\n1. File Parsing: Users upload CSV or Excel files directly into the AI workspace. The tool inspects headers, column data types (integers, strings, floats, dates), and missing values.\n\n2. Natural Language Instructions: Instead of typing `=AVERAGEIF(B2:B100, ">=75", C2:C100)`, the user types: "Calculate the average test mark for students with attendance above 75%".\n\n3. Behind-the-Scenes Execution: The AI interprets the natural language prompt, writes executable code (typically Python pandas), runs it in a sandboxed environment, and displays the exact numerical answer along with the underlying code for verification.',
          keyConcepts: [
            {
              title: 'Natural Language Querying',
              description: 'Asking data questions in plain English instead of writing complex formulas.'
            },
            {
              title: 'Automated Schema Parsing',
              description: 'AI automatically detecting column names, data types, and null records.'
            },
            {
              title: 'Sandboxed Execution',
              description: 'Running Python code behind the scenes to perform accurate mathematical operations.'
            },
            {
              title: 'Code Verification',
              description: 'Inspecting the generated code to verify that calculations were performed correctly.'
            }
          ],
          realWorldExamples: [
            'Spreadsheet Query: Uploading a sales dataset and typing: "Show me the top 3 highest revenue regions for Q3."',
            'Data Cleaning: Instructing AI: "Replace all missing values in the Temperature column with the column median."'
          ],
          engineeringExamples: [
            'Lab Data Processing: Uploading sensor voltage readings CSV and instructing AI: "Filter out noise readings below 0.5V and calculate the peak voltage duration."'
          ],
          practicalApplication: {
            title: 'Analyzing a Dataset via Natural Language',
            steps: [
              'Step 1: Upload your dataset (.csv or .xlsx) to the AI data analysis tool.',
              'Step 2: Prompt: "Inspect this dataset and state the total rows, columns, and any missing data."',
              'Step 3: Prompt: "Calculate the mean, median, and standard deviation for Column X."',
              'Step 4: Click "Show Code" to inspect the Python code executed by the AI.'
            ]
          },
          keyTakeaways: [
            'AI tools convert natural language queries into executable Python code behind the scenes.',
            'Always check generated Python code to ensure the AI interpreted column names correctly.',
            'Data cleaning (handling null values and duplicates) can be automated with explicit instructions.'
          ]
        }
      },
      {
        id: 'u3-t2',
        unitId: 3,
        topicNumber: 2,
        title: 'Natural-Language Querying for Statistics & Insights',
        syllabusPoint: 'Natural-language querying of datasets to extract summary statistics and insights.',
        estimatedMinutes: 25,
        content: {
          overview: 'Extracting key summary statistics (mean, median, variance, correlation) and automated trend insights from data using plain text instructions.',
          exactSyllabusPoint: 'Natural-language querying of datasets to extract summary statistics and insights.',
          explanation: 'Data analysis involves both quantitative calculations and qualitiative insight extraction. Natural language querying enables students to perform two levels of dataset exploration:\n\n1. Summary Statistics Extraction: Requesting descriptive metrics across variables (e.g., "Provide a summary statistics table containing mean, standard deviation, min, max, and 25th/75th percentiles for student exam scores").\n\n2. Automated Insight Discovery: Asking the AI to identify non-obvious patterns, correlations, or anomalies in the dataset (e.g., "What factors in this dataset correlate most strongly with final exam performance?").\n\n3. Verifying Statistical Logic: Because AI tools execute real code when processing data files, numeric statistics are computed deterministically. However, qualitative conclusions drawn by the AI (e.g., asserting causation from correlation) must be critically evaluated by the student.',
          keyConcepts: [
            {
              title: 'Descriptive Statistics',
              description: 'Computing central tendencies (mean, median) and dispersion (range, std dev).'
            },
            {
              title: 'Correlation vs Causation',
              description: 'Recognizing that statistical association between two variables does not prove cause.'
            },
            {
              title: 'Outlier Detection',
              description: 'Identifying extreme values that skew overall statistical trends.'
            },
            {
              title: 'Automated Pattern Insights',
              description: 'Prompting AI to highlight key trends and anomalies in tabular data.'
            }
          ],
          realWorldExamples: [
            'Survey Analysis: Querying a student feedback dataset: "Summarize overall satisfaction ratings by department in a structured summary table."',
            'Anomaly Detection: "Identify any records where electricity consumption exceeds 3 standard deviations from the daily mean."'
          ],
          engineeringExamples: [
            'Material Testing: Uploading tensile strength test data and asking: "Determine the correlation coefficient between carbon content percentage and yield stress."'
          ],
          practicalApplication: {
            title: 'Generating an Automated Dataset Insight Report',
            steps: [
              'Step 1: Upload dataset to AI tool.',
              'Step 2: Prompt: "Generate a descriptive statistics table for all numerical columns."',
              'Step 3: Prompt: "Identify the top 3 strongest correlations between numeric variables in this dataset."',
              'Step 4: Verify the correlation coefficients manually or via spreadsheet formulas.'
            ]
          },
          keyTakeaways: [
            'Natural language queries can instantly compute complex multi-variable statistics.',
            'Always distinguish between raw statistical numbers and the AI\'s narrative interpretation.',
            'Watch for correlation vs causation traps when reading AI-generated insights.'
          ]
        }
      },
      {
        id: 'u3-t3',
        unitId: 3,
        topicNumber: 3,
        title: 'AI Tools for Generating Charts and Visual Summaries',
        syllabusPoint: 'AI tools for generating charts, graphs, and visual summaries from tabular data.',
        estimatedMinutes: 25,
        content: {
          overview: 'Transforming raw tabular data into clear, informative visual charts (histograms, scatter plots, bar charts, box plots) using descriptive prompts.',
          exactSyllabusPoint: 'AI tools for generating charts, graphs, and visual summaries from tabular data.',
          explanation: 'Data visualization converts raw numbers into intuitive visual insights. AI data tools generate publication-ready plots using libraries like `matplotlib` and `seaborn`:\n\n1. Selecting Chart Types:\n- Bar Charts: Comparing discrete categories (e.g., average marks by section).\n- Histograms & Density Plots: Showing distribution of continuous variables (e.g., class grade distribution).\n- Scatter Plots: Displaying relationships between two continuous variables (e.g., study hours vs test score).\n- Box Plots: Visualizing median, quartiles, and outliers.\n\n2. Customizing Visual Aesthetics through Prompts: Students can specify titles, axis labels, color palettes, grid lines, and figure resolutions using plain text instructions (e.g., "Create a clean scatter plot of Study Hours vs Test Mark, add a linear trend line, label axes clearly, and use a dark blue theme").',
          keyConcepts: [
            {
              title: 'Visual Encoding',
              description: 'Mapping numerical data onto visual dimensions (height, position, color).'
            },
            {
              title: 'Appropriate Chart Selection',
              description: 'Choosing bar charts for categories, scatter plots for relationships, histograms for distributions.'
            },
            {
              title: 'Trend Line Fitting',
              description: 'Overlaying linear regression trend lines on scatter plots to visualize relationships.'
            },
            {
              title: 'Plot Formatting & Annotations',
              description: 'Customizing labels, legends, titles, and color palettes via prompt instructions.'
            }
          ],
          realWorldExamples: [
            'Class Attendance Visual: Generating a color-coded bar chart comparing weekly attendance across 4 CSE sections.',
            'Grade Distribution: Rendering a histogram to check whether class test marks follow a normal Gaussian curve.'
          ],
          engineeringExamples: [
            'Circuit Response Plot: Generating a line chart plotting output voltage vs frequency for an RC low-pass filter dataset.'
          ],
          practicalApplication: {
            title: 'Prompting for Publication-Ready Engineering Charts',
            steps: [
              'Step 1: Upload data CSV.',
              'Step 2: Prompt: "Create a scatter plot comparing Column X (x-axis) and Column Y (y-axis)."',
              'Step 3: Refine: "Add a linear regression trend line, set x-axis title to \'Stress (MPa)\', y-axis title to \'Strain (\%)\', and export as high-resolution PNG."',
              'Step 4: Download generated plot image.'
            ]
          },
          keyTakeaways: [
            'Always specify axis titles, units, and clear chart titles in your prompt.',
            'Select the chart type that matches your analytical question.',
            'Verify that axis scales start at appropriate baseline values to avoid visual distortion.'
          ]
        }
      },
      {
        id: 'u3-t4',
        unitId: 3,
        topicNumber: 4,
        title: 'Interpreting AI Statistical Summaries & Limitations',
        syllabusPoint: 'Interpreting AI-generated statistical summaries correctly and recognizing their limitations.',
        estimatedMinutes: 20,
        content: {
          overview: 'AI-generated data summaries must be interpreted with statistical rigor. Recognizing key limitations—such as sensitivity to outliers, sample size constraints, and misassigned data types—prevents flawed conclusions.',
          exactSyllabusPoint: 'Interpreting AI-generated statistical summaries correctly and recognizing their limitations.',
          explanation: 'While AI data tools compute numbers accurately, their automatic summaries can misguide users if not interpreted critically:\n\n1. Sensitivity to Data Quality: If an uploaded CSV contains uncleaned data (e.g., text strings in a numeric column, or extreme typos like age = 250), the AI\'s calculated mean will be distorted.\n\n2. Skewed Distributions & Mean vs Median: For heavily skewed data (such as income or network latency), the AI may report the arithmetic mean without warning that the median is a far more representative central measure.\n\n3. Small Sample Size Warnings: AI models will compute correlation coefficients on datasets with only 5 records without automatically warning the student that sample size is too small for statistical significance.\n\n4. Critical Evaluation Rule: Students must inspect data distributions, check for missing values, and verify whether statistical assumptions (such as normality) hold before accepting AI summaries in engineering reports.',
          keyConcepts: [
            {
              title: 'Mean vs Median Sensitivity',
              description: 'Understanding how extreme outliers distort arithmetic mean but not median.'
            },
            {
              title: 'Sample Size Adequacy',
              description: 'Evaluating whether dataset size supports reliable statistical claims.'
            },
            {
              title: 'Data Type Mismatches',
              description: 'Recognizing when numeric codes (e.g., Student ID 101) are incorrectly treated as quantitative variables.'
            },
            {
              title: 'Contextual Validation',
              description: 'Cross-checking statistical findings against domain engineering principles.'
            }
          ],
          realWorldExamples: [
            'Outlier Distortion: A class of 10 students has 9 scores of 80% and one score of 0%. AI reports mean score = 72%, which misrepresents general class mastery.',
            'ID Field Error: AI computes the "average Student Roll Number", which is mathematically meaningless.'
          ],
          engineeringExamples: [
            'Sensor Glitch: A temperature sensor logs -999°C during a power failure. AI calculates average temperature including -999°C, skewing the overall experimental results.'
          ],
          practicalApplication: {
            title: 'Auditing an AI Statistical Summary',
            steps: [
              'Step 1: Check minimum and maximum values for impossible entries (e.g., negative resistance).',
              'Step 2: Compare mean and median. If they differ significantly, the data is skewed.',
              'Step 3: Confirm that ID fields, phone numbers, and codes are excluded from numeric averages.'
            ]
          },
          keyTakeaways: [
            'Never report average values without checking for extreme outliers.',
            'Ensure categorical numeric codes (like Roll Numbers) are excluded from statistics.',
            'Statistical outputs require human domain knowledge for accurate interpretation.'
          ]
        }
      },
      {
        id: 'u3-t5',
        unitId: 3,
        topicNumber: 5,
        title: 'Identifying and Correcting Data Analysis Errors',
        syllabusPoint: 'Identifying and correcting errors or misinterpretations in AI-generated data analysis.',
        estimatedMinutes: 25,
        content: {
          overview: 'Developing systematic techniques to detect, diagnose, and rectify errors, misinterpretations, or flawed code in AI-generated data processing pipelines.',
          exactSyllabusPoint: 'Identifying and correcting errors or misinterpretations in AI-generated data analysis.',
          explanation: 'When using AI for data analysis, errors occur primarily in three areas:\n\n1. Data Ingestion Errors: AI misidentifying date formats (e.g., treating DD/MM/YYYY as MM/DD/YYYY) or treating missing data placeholders ("N/A", "-") as text strings, causing numeric calculations to drop entire rows.\n\n2. Logic & Formula Errors: AI writing Python pandas code that performs an `inner join` instead of an `outer join`, accidentally dropping unmatched student records during dataset merging.\n\n3. Chart Distortion Errors: Generating charts with truncated y-axes (not starting at zero) that exaggerate minor differences between categories.\n\n4. Rectification Workflow: Students should explicitly check the AI\'s generated Python code, test calculation outputs on a small 5-row manual sample, and re-prompt the AI with corrective constraints.',
          keyConcepts: [
            {
              title: 'Code Auditing',
              description: 'Reviewing generated Python pandas code line-by-line for logical flaws.'
            },
            {
              title: 'Date & String Parsing Fixes',
              description: 'Ensuring date strings and missing value indicators are correctly parsed.'
            },
            {
              title: 'Axis Baseline Verification',
              description: 'Ensuring chart axes start at zero to avoid visual exaggeration.'
            },
            {
              title: 'Manual Benchmark Testing',
              description: 'Testing calculations on 5 sample rows manually to confirm AI accuracy.'
            }
          ],
          realWorldExamples: [
            'Date Misparsing: AI interprets "01/02/2024" as Jan 2 instead of Feb 1, distorting monthly trend analysis.',
            'Truncated Chart: A bar chart showing 98% vs 99% accuracy looks twice as tall because y-axis starts at 97%.'
          ],
          engineeringExamples: [
            'Merge Error: AI merges attendance CSV and exam score CSV on "Student Name", but misses students with slight name spelling variations. Fix: Instruct AI to join on unique "Roll Number" instead.'
          ],
          practicalApplication: {
            title: 'Step-by-Step Data Analysis Error Correction',
            steps: [
              'Step 1: Inspect the generated Python code block provided by the AI.',
              'Step 2: Check join keys, missing value handling, and column data type conversions.',
              'Step 3: If an error is found, prompt AI: "Your previous script merged on Name instead of Roll Number. Rewrite the code joining strictly on Roll Number."',
              'Step 4: Verify row count before and after merge.'
            ]
          },
          keyTakeaways: [
            'Inspect the underlying Python code to catch data joining and filtering bugs.',
            'Always join datasets on unique IDs (Roll Numbers) rather than names.',
            'Ensure chart y-axes start at zero for unbiased visual representation.'
          ]
        }
      }
    ],
    teacherExamples: [
      {
        id: 'u3-ex1',
        number: 1,
        title: 'Dataset Upload & Automated Statistical Report Generation',
        description: 'Upload a small dataset (example: class attendance or survey data) and generate a summary-statistic report and chart using natural-language commands.',
        steps: [
          'Step 1: Upload a sample 20-row CSV file (`class_attendance_marks.csv`) into ChatGPT / Julius AI.',
          'Step 2: Enter Prompt: "Analyze this dataset. Output a summary statistics table containing mean, median, min, max for Attendance% and Marks. Then generate a scatter plot showing Attendance% vs Marks with a trend line."',
          'Step 3: Show the generated summary table and display the automatically rendered scatter plot.',
          'Step 4: Click "Show Code" to demonstrate the exact Python `pandas` and `seaborn` code executed by the tool.'
        ],
        teachingNote: 'Highlight to students how natural language converts instantly into transparent, executable Python data science code.'
      },
      {
        id: 'u3-ex2',
        number: 2,
        title: 'Demonstrating and Correcting AI Data Misinterpretation',
        description: 'Show an example where AI misinterprets data (example: treats a numeric code as text or miscalculates skewed average) and demonstrate how to verify and correct it.',
        steps: [
          'Step 1: Upload dataset where Student Roll Number is integer (e.g., 24001, 24002) and one test score is missing recorded as "ABSENT".',
          'Step 2: Show initial AI output: AI attempts to calculate average Roll Number and drops all rows with "ABSENT" text.',
          'Step 3: Demonstrate diagnostic feedback prompt: "Roll Number is a categorical identifier—do not compute summary statistics for it. Also, replace \'ABSENT\' with 0 for marks calculation rather than dropping the student record."',
          'Step 4: Review corrected summary table and point out the change in calculated mean mark.'
        ],
        teachingNote: 'Emphasize that AI tools follow raw text blindly unless explicitly instructed on data semantics.'
      }
    ],
    studentExercises: [
      {
        id: 'u3-stu1',
        number: 1,
        title: 'Dataset Cleaning and Summarization',
        problemStatement: 'Use an AI tool to clean and summarize a small sample dataset (e.g., class attendance or test marks data containing missing entries). Instruct the AI to replace missing values appropriately and output clean summary statistics.',
        deliverable: 'Original dataset description, cleaning prompt used, clean summary statistics table, and underlying Python code.',
        guidance: 'Verify whether the AI filled missing values with mean, median, or zero as instructed.'
      },
      {
        id: 'u3-stu2',
        number: 2,
        title: '3-Chart Visual Comparison',
        problemStatement: 'Generate three different chart types (e.g., Bar Chart, Histogram, Scatter Plot) from the same dataset using AI prompts. Justify in writing which chart type is most appropriate for answering a specific question about the data.',
        deliverable: 'The three generated chart images and a 1-paragraph justification of the best chart choice.',
        guidance: 'Explain why continuous data belongs on histograms while categorical comparisons belong on bar charts.'
      },
      {
        id: 'u3-stu3',
        number: 3,
        title: 'Manual Verification of AI Statistical Claim',
        problemStatement: 'Cross-check one AI-generated statistical claim (e.g., calculated mean, median, or correlation coefficient) manually using spreadsheet formulas or hand calculation on a 10-row dataset. Report any discrepancy found.',
        deliverable: 'A short verification report showing AI claim vs manual formula result.',
        guidance: 'Document whether rounding differences or dropped null values caused any minor numerical variations.'
      }
    ]
  },
  {
    id: 4,
    number: 'UNIT 4',
    title: 'AI Tools for Coding, Writing, and Productivity',
    description: 'AI coding assistants for generation/debugging, AI writing tools for reports/emails/docs, productivity utilities for scheduling/summarization, slide outline generation, and workflow integration.',
    topics: [
      {
        id: 'u4-t1',
        unitId: 4,
        topicNumber: 1,
        title: 'AI Coding Assistants for Generation & Debugging',
        syllabusPoint: 'AI coding assistants — code generation, explanation, and debugging support for simple programs.',
        estimatedMinutes: 30,
        content: {
          overview: 'AI coding tools assist students in generating boilerplate code, explaining unfamiliar algorithm steps, and systematically identifying syntax and logical bugs.',
          exactSyllabusPoint: 'AI coding assistants — code generation, explanation, and debugging support for simple programs.',
          explanation: 'AI coding assistants (such as GitHub Copilot, Cursor, and Claude Code) transform how software is developed and learned:\n\n1. In-IDE Code Completion: As you type a function signature in C, C++, or Python, the assistant suggests context-aware completions based on surrounding code.\n\n2. Code Explanation: Students can highlight an unfamiliar block of code and ask: "Explain how this binary search logic works line-by-line for a B.Tech freshman."\n\n3. Debugging Support: When a program crashes with a stack trace or runtime error (e.g., `Segmentation fault` or `IndexOutOfBoundsException`), pasting the error log along with the source code allows the AI to pinpoint the exact failing line, explain the root cause, and propose a corrected code fix.',
          keyConcepts: [
            {
              title: 'In-IDE Completion',
              description: 'Real-time code autocompletion directly inside code editors like VS Code.'
            },
            {
              title: 'Line-by-Line Explanation',
              description: 'Deconstructing complex algorithms into understandable step-by-step prose.'
            },
            {
              title: 'Root Cause Debugging',
              description: 'Pasting error stack traces to locate syntax, logic, and memory bugs.'
            },
            {
              title: 'Refactoring & Optimization',
              description: 'Improving code readability, variable naming, and algorithmic efficiency.'
            }
          ],
          realWorldExamples: [
            'Debugging: Pasting a C++ `NullPointerException` stack trace into Cursor and getting the exact missing pointer check line.',
            'Learning: Asking Claude to explain how quicksort partitioning works with step-by-step array state diagrams.'
          ],
          engineeringExamples: [
            'Python Data Script: Prompting Copilot: "Write a C++ program to read temperature sensor values from a text file, compute the moving average of every 5 samples, and save to output.txt."'
          ],
          practicalApplication: {
            title: 'Debugging a Broken Program with AI',
            steps: [
              'Step 1: Copy your source code and the exact terminal error output.',
              'Step 2: Prompt AI: "Context: C programming lab. My code throws a segmentation fault. Code: [Paste Code]. Error: [Paste Error]. Task: Identify failing line, explain root cause, and provide corrected code."',
              'Step 3: Review the fix, test it in your IDE, and verify you understand why the bug occurred.'
            ]
          },
          keyTakeaways: [
            'Use AI coding assistants as interactive tutors, not as automated homework copy-paste tools.',
            'Always read and test AI-generated code before running it in production or lab submissions.',
            'Pasting error logs along with source code dramatically improves debugging accuracy.'
          ]
        }
      },
      {
        id: 'u4-t2',
        unitId: 4,
        topicNumber: 2,
        title: 'AI Writing Assistants for Reports, Emails & Docs',
        syllabusPoint: 'AI writing assistants for: reports, emails, technical documentation.',
        estimatedMinutes: 25,
        content: {
          overview: 'Leveraging AI writing tools to draft formal academic emails, structure laboratory technical reports, and produce standard software/engineering documentation efficiently.',
          exactSyllabusPoint: 'AI writing assistants for: reports, emails, technical documentation.',
          explanation: 'Clear technical communication is a vital engineering skill. AI writing assistants (like Grammarly, Notion AI, and Claude) streamline three key document types:\n\n1. Formal Academic Emails: Drafting professional correspondence to faculty, department heads, or internship coordinators (e.g., requesting project guidance, submitting leave applications, or applying for research positions) using appropriate formal tone.\n\n2. Laboratory & Technical Reports: Structuring lab reports with standard academic sections (Abstract, Introduction, Apparatus, Procedure, Results, Discussion, Conclusion) and ensuring passive/objective scientific tone.\n\n3. Software & Project Documentation: Generating clean `README.md` files, API parameter documentations, and installation guides from project source code.',
          keyConcepts: [
            {
              title: 'Formal Tone Calibration',
              description: 'Adjusting vocabulary and phrasing for professional academic communication.'
            },
            {
              title: 'Report Structural Consistency',
              description: 'Enforcing standard academic report headings and objective passive voice.'
            },
            {
              title: 'Documentation Generation',
              description: 'Creating README files and API documentation directly from code artifacts.'
            },
            {
              title: 'Proofreading & Polishing',
              description: 'Correcting grammatical errors, passive voice misuse, and sentence flow.'
            }
          ],
          realWorldExamples: [
            'Academic Email: Drafting a polite request to a professor for a letter of recommendation for an internship.',
            'README Generation: Prompting AI: "Generate a markdown README.md for a Python weather monitoring app with installation, usage, and license sections."'
          ],
          engineeringExamples: [
            'Engineering Lab Report: Structuring the "Discussion of Errors" section for a digital electronics logic gate experiment.'
          ],
          practicalApplication: {
            title: 'Drafting a Formal Project README.md',
            steps: [
              'Step 1: Provide project name, technologies used, and basic execution steps to the AI.',
              'Step 2: Prompt: "Generate a professional GitHub README.md in Markdown containing Project Title, Badges, Features list, Installation steps, Usage code block, and Author credits."',
              'Step 3: Review generated Markdown, add repo-specific links, and test installation commands.'
            ]
          },
          keyTakeaways: [
            'AI writing tools help establish appropriate tone and structure rapidly.',
            'Always personalize email drafts and technical documentation with exact details.',
            'Maintain a professional, objective tone in technical academic submissions.'
          ]
        }
      },
      {
        id: 'u4-t3',
        unitId: 4,
        topicNumber: 3,
        title: 'AI Tools for Scheduling, Notes & Summarization',
        syllabusPoint: 'AI tools for: scheduling, note-taking, meeting/lecture summarization.',
        estimatedMinutes: 20,
        content: {
          overview: 'Utilizing intelligent AI utilities for organizing daily study schedules, capturing raw lecture notes, and generating structured summaries of academic seminars and meetings.',
          exactSyllabusPoint: 'AI tools for: scheduling, note-taking, meeting/lecture summarization.',
          explanation: 'Managing academic workload requires efficient time management and information organization:\n\n1. AI Scheduling Assistants: Converting assignment deadlines, exam timetables, and study goals into optimized daily study schedules (e.g., using prompts to balance study sessions with breaks using Pomodoro principles).\n\n2. AI Note-Taking & Organization: Cleaning messy, bulleted lecture scratchwork into structured, categorized study notes with key term definitions highlighted (e.g., Notion AI).\n\n3. Lecture & Meeting Summarization: Audio and text summarization tools (like Fathom, Otter.ai, or LLM transcript processing) extract key action items, decision points, and main topic breakdowns from recorded lectures or group project meetings.',
          keyConcepts: [
            {
              title: 'Automated Schedule Optimization',
              description: 'Balancing course deadlines and study slots using algorithmic prompts.'
            },
            {
              title: 'Note Structuring',
              description: 'Converting raw, unstructured lecture scratchwork into formatted study guides.'
            },
            {
              title: 'Action Item Extraction',
              description: 'Identifying task assignments and deadlines from group project transcripts.'
            },
            {
              title: 'Key Point Indexing',
              description: 'Tagging and indexing core concepts for rapid exam revision.'
            }
          ],
          realWorldExamples: [
            'Schedule Creation: Prompting: "I have 3 exams next week (C Programming on Mon, Math on Wed, Physics on Fri). Create a 7-day balanced study schedule with 2-hour study blocks and revision buffers."',
            'Lecture Summary: Uploading raw bulleted notes from a database lecture and asking AI to format into a Cornell Note template.'
          ],
          engineeringExamples: [
            'Group Project Meeting: Processing a 15-minute group meeting transcript to extract: 1. Completed tasks, 2. Assigned tasks for next week, 3. Next meeting date.'
          ],
          practicalApplication: {
            title: 'Converting Rough Lecture Notes into a Study Guide',
            steps: [
              'Step 1: Paste unformatted scratchwork lecture notes into the AI tool.',
              'Step 2: Prompt: "Format these rough notes into a Cornell Note format: Left column: Key Questions/Keywords, Right column: Detailed Explanations, Bottom: 2-sentence Summary."',
              'Step 3: Save generated study guide to your digital notebook.'
            ]
          },
          keyTakeaways: [
            'AI tools save hours by turning raw notes into structured revision guides.',
            'Use action item extraction to keep student group projects accountable.',
            'Structure schedules with realistic time buffers and revision breaks.'
          ]
        }
      },
      {
        id: 'u4-t4',
        unitId: 4,
        topicNumber: 4,
        title: 'AI-Assisted Presentation & Slide Outline Generation',
        syllabusPoint: 'AI-assisted presentation and slide-outline generation from a topic prompt.',
        estimatedMinutes: 20,
        content: {
          overview: 'Using AI tools (like Gamma, ChatGPT, and Notion AI) to design slide structures, write slide content outlines, and draft speaker notes for academic seminar presentations.',
          exactSyllabusPoint: 'AI-assisted presentation and slide-outline generation from a topic prompt.',
          explanation: 'Creating compelling academic presentations involves content structuring, visual layout, and oral preparation:\n\n1. Slide Outline Generation: Converting a broad topic (e.g., "Applications of Computer Vision in Autonomous Vehicles") into a logical 8-slide presentation structure (Title, Introduction, Sensor Types, Object Detection, Challenges, Case Study, Future Scope, Conclusion).\n\n2. Content Per Slide: Instructing AI to limit each slide to 3-4 concise bullet points (avoiding walls of text on slides).\n\n3. Speaker Notes Generation: Prompting AI to write 30-second spoken commentary scripts (speaker notes) for each slide so the presenter can speak confidently without reading directly from the screen.\n\n4. AI Slide Platforms: Specialized platforms (like Gamma AI) generate fully styled visual slide decks directly from text prompts.',
          keyConcepts: [
            {
              title: 'Slide Hierarchy',
              description: 'Structuring presentations logically from problem introduction to conclusion.'
            },
            {
              title: 'Concise Bullet Formatting',
              description: 'Limiting slide text to key punchy points rather than paragraph blocks.'
            },
            {
              title: 'Speaker Notes Scripting',
              description: 'Generating companion verbal scripts for natural presentation delivery.'
            },
            {
              title: 'Automated Deck Generation',
              description: 'Using AI presentation platforms to output styled slide decks from prompts.'
            }
          ],
          realWorldExamples: [
            'Seminar Outline: Prompting AI: "Generate an 8-slide outline for a 10-minute B.Tech seminar on 5G Wireless Networks. For each slide, provide Slide Title, 3 Bullet Points, and 2-sentence Speaker Notes."',
            'Gamma AI Presentation: Entering "Cybersecurity Basics for Engineering Students" into Gamma to receive a 10-slide visual presentation deck.'
          ],
          engineeringExamples: [
            'Project Defense Slides: Structuring a 5-slide capstone project proposal deck: Slide 1: Problem Statement, Slide 2: Proposed Block Diagram, Slide 3: Hardware Cost Estimate, Slide 4: Timeline, Slide 5: Expected Outcomes.'
          ],
          practicalApplication: {
            title: 'Generating a Seminar Slide Outline & Speaker Script',
            steps: [
              'Step 1: Choose your seminar topic.',
              'Step 2: Prompt AI: "Create a 6-slide outline for a 5-minute presentation on [Topic]. Include Slide Title, 3 concise bullets, and Speaker Notes for each slide."',
              'Step 3: Copy bullets into PowerPoint/Google Slides and practice speaking using the generated speaker notes.'
            ]
          },
          keyTakeaways: [
            'Keep slides visual and concise—use speaker notes for oral details.',
            'Structure presentations with a clear flow: Problem → Solution → Results → Conclusion.',
            'Always practice your talk aloud with a timer before presenting in class.'
          ]
        }
      },
      {
        id: 'u4-t5',
        unitId: 4,
        topicNumber: 5,
        title: 'Integrating AI into an Academic Engineering Workflow',
        syllabusPoint: 'Integrating AI tools into an efficient day-to-day academic and engineering workflow.',
        estimatedMinutes: 25,
        content: {
          overview: 'Synthesizing individual AI tools across research, coding, writing, and presentation into a cohesive, high-efficiency daily academic workflow for first-year engineering success.',
          exactSyllabusPoint: 'Integrating AI tools into an efficient day-to-day academic and engineering workflow.',
          explanation: 'The true power of AI tools lies not in isolated usage, but in building an integrated academic workflow:\n\n1. Phase 1 — Research & Concept Learning: Use Perplexity or Claude to research topic fundamentals, synthesize literature, and clarify difficult engineering concepts.\n\n2. Phase 2 — Problem Solving & Data Analysis: Use ChatGPT Advanced Data Analysis or Julius AI to process lab datasets, compute statistics, and render charts.\n\n3. Phase 3 — Development & Coding: Use Cursor or GitHub Copilot inside VS Code to write, test, and debug code assignments.\n\n4. Phase 4 — Documentation & Presentation: Use Grammarly / Notion AI for report editing and Gamma for slide deck generation.\n\n5. Academic Integrity Rule: AI acts as a co-intelligence accelerator. Every output must be audited, verified, understood, and cited according to institutional guidelines.',
          keyConcepts: [
            {
              title: 'Multi-Tool Ecosystem',
              description: 'Chaining specialized tools sequentially across research, code, analysis, and presentation.'
            },
            {
              title: 'Workflow Friction Reduction',
              description: 'Automating routine formatting and boilerplate work to focus on core engineering reasoning.'
            },
            {
              title: 'Human Oversight & Audit',
              description: 'Maintaining full personal responsibility for accuracy, validity, and ethics.'
            },
            {
              title: 'Sustainable Daily Practice',
              description: 'Establishing repeatable daily habits for prompt usage and data verification.'
            }
          ],
          realWorldExamples: [
            'Daily Workflow: Research topic on Perplexity -> Write code in Cursor -> Analyze benchmark data in Julius -> Format report in Notion -> Check grammar in Grammarly.'
          ],
          engineeringExamples: [
            'Engineering Lab Workflow: Sensor Data -> Python Script (Copilot) -> Chart Generation (Julius) -> Lab Report Formatting (Claude) -> Final Review (Student).'
          ],
          practicalApplication: {
            title: 'Designing Your Personal Academic AI Workflow',
            steps: [
              'Step 1: Map your typical assignment stages (Research, Code, Write, Review).',
              'Step 2: Assign 1 primary AI tool to each stage.',
              'Step 3: Define explicit verification checkpoints at each stage before moving to the next.',
              'Step 4: Execute the multi-stage pipeline on your next course project.'
            ]
          },
          keyTakeaways: [
            'Chain specialized tools together for maximum efficiency.',
            'Always maintain human verification at every transition point.',
            'AI tools augment human learning; they do not replace personal effort and understanding.'
          ]
        }
      }
    ],
    teacherExamples: [
      {
        id: 'u4-ex1',
        number: 1,
        title: 'Generating, Bug Injection & AI Debugging Walkthrough',
        description: 'Use an AI coding assistant to generate a simple program (example: temperature converter), intentionally introduce a bug, and have the AI debug it.',
        steps: [
          'Step 1: Prompt AI to generate a C program: "Write a simple C program that converts Celsius to Fahrenheit and Kelvin."',
          'Step 2: Copy the generated code into IDE, then intentionally introduce a bug (e.g., change formula `(c * 9/5) + 32` to integer division `(c * (9/5)) + 32` causing zero multiplication, or omit a semicolon/pointer reference).',
          'Step 3: Compile in terminal to show compiler error or incorrect math output.',
          'Step 4: Paste code + error into AI assistant: "My program outputs incorrect Fahrenheit values. Explain why integer division `9/5` evaluates to `1` in C and show the float cast fix `9.0/5.0`."',
          'Step 5: Highlight to students how AI identifies subtle language-specific data type pitfalls.'
        ],
        teachingNote: 'Emphasize to students that AI debugging works best when you explain the expected output vs actual broken output.'
      },
      {
        id: 'u4-ex2',
        number: 2,
        title: 'Generating Presentation Outline and Speaker Notes',
        description: 'Generate a presentation outline and speaker notes from a topic prompt using an AI writing/productivity tool.',
        steps: [
          'Step 1: Enter Prompt: "Act as a technical presentation coach. Create a 5-slide seminar outline on \'Introduction to Cloud Computing for B.Tech Students\'. For each slide, provide: Slide Title, 3 bullet points, and a 3-sentence Speaker Script."',
          'Step 2: Show generated output on projector.',
          'Step 3: Walk through Slide 3 (Cloud Service Models: IaaS, PaaS, SaaS) and read the speaker notes aloud to demonstrate how speaker notes guide natural speaking delivery.'
        ],
        teachingNote: 'Point out how structured speaker notes prevent students from reading wall-of-text slides during oral presentations.'
      }
    ],
    studentExercises: [
      {
        id: 'u4-stu1',
        number: 1,
        title: 'Write and Debug a Program with AI Assistant',
        problemStatement: 'Use an AI coding tool to write a simple C or Python program for a given problem statement (e.g., calculating student grade averages or matrix addition). Intentionally introduce a logic error, use the AI to diagnose and fix it, and document the solution.',
        deliverable: 'Original AI code, introduced bug description, AI error diagnosis transcript, and final verified bug-free code.',
        guidance: 'Explain in your own words why the introduced bug broke program execution.'
      },
      {
        id: 'u4-stu2',
        number: 2,
        title: 'Formal Email / Short Report Drafting & Editing',
        problemStatement: 'Draft a formal email to an internship coordinator or a 1-page lab report summary using an AI writing assistant. Manually edit the draft for technical accuracy, appropriate tone, and personal context.',
        deliverable: 'Raw AI draft, tracked changes (or side-by-side comparison), and final edited version.',
        guidance: 'Highlight at least 3 specific manual edits you made to personalize or correct the AI draft.'
      },
      {
        id: 'u4-stu3',
        number: 3,
        title: '5-Minute Seminar Slide Outline & Presentation Script',
        problemStatement: 'Generate a 5-slide presentation outline and speaker notes for a 5-minute seminar topic using an AI tool. Refine the outline to ensure each slide has no more than 4 bullet points.',
        deliverable: 'A 5-slide outline document complete with slide titles, concise bullet points, and speaker notes.',
        guidance: 'Practice reading your speaker notes aloud to ensure the presentation fits strictly within 5 minutes.'
      }
    ]
  },
  {
    id: 5,
    number: 'UNIT 5',
    title: 'Ethics, Reliability, and Emerging Trends',
    description: 'AI bias and hallucination detection, academic integrity and citation rules, India\'s DPDP Act 2023 compliance, copyright and IP considerations, and emerging trends (multimodal AI, AI agents).',
    topics: [
      {
        id: 'u5-t1',
        unitId: 5,
        topicNumber: 1,
        title: 'Bias and Hallucination in AI Outputs',
        syllabusPoint: 'Bias and hallucination in AI outputs, and techniques for detecting and fact-checking them.',
        estimatedMinutes: 30,
        content: {
          overview: 'AI models can reflect societal biases present in their training data and generate fabricated statements (hallucinations). Engineers must master systematic techniques for auditing, fact-checking, and validating AI outputs.',
          exactSyllabusPoint: 'Bias and hallucination in AI outputs, and techniques for detecting and fact-checking them.',
          explanation: 'Generative AI models are statistical reflections of internet data. Consequently, they suffer from two major reliability risks:\n\n1. AI Hallucination: The phenomenon where an LLM generates plausible-sounding but completely fabricated facts, statistics, mathematical proofs, historical dates, or academic literature citations. Hallucinations occur because models prioritize linguistic fluency and probability over ground-truth verification.\n\n2. Algorithmic Bias: Systematic skew or unfairness in model responses resulting from demographic, historical, or cultural imbalances in pre-training data (e.g., gender assumptions in occupational prompts or geographical bias in engineering case studies).\n\n3. Fact-Checking & Audit Techniques:\n- Primary Source Verification: Cross-reference every factual claim, citation, and constant against authoritative textbooks, peer-reviewed journals, or official standards.\n- Reverse Search: Search generated paper titles or DOIs on Google Scholar or IEEE Xplore to verify if the paper actually exists.\n- Cross-Model Verification: Query the same factual prompt across two independent LLMs (e.g., Claude and ChatGPT) to compare claims.',
          keyConcepts: [
            {
              title: 'AI Hallucination',
              description: 'Production of fluent but completely fabricated facts, data, or literature citations.'
            },
            {
              title: 'Algorithmic Bias',
              description: 'Systematic skew in model outputs reflecting historical imbalances in training data.'
            },
            {
              title: 'Primary Source Cross-Checking',
              description: 'Verifying AI claims directly against physical textbooks and peer-reviewed databases.'
            },
            {
              title: 'DOI & Citation Verification',
              description: 'Confirming that cited authors, paper titles, and DOIs exist in official registries.'
            }
          ],
          realWorldExamples: [
            'Fabricated Citation: Asking ChatGPT for "5 research papers on AI in civil engineering" and receiving 3 titles with realistic author names that do not actually exist.',
            'Gender Bias: Prompting "A doctor and a nurse walked in..." and AI defaulting to referring to the doctor as "he" and nurse as "she".'
          ],
          engineeringExamples: [
            'Fabricated Constant: AI stating that "The ultimate tensile strength of Structural Steel A36 is 1,250 MPa" (Actual value is ~400-550 MPa). Failure to fact-check would lead to catastrophic engineering failure.'
          ],
          practicalApplication: {
            title: '4-Step Fact-Checking & Hallucination Audit',
            steps: [
              'Step 1: Highlight all specific numbers, dates, formulas, and citations in the AI output.',
              'Step 2: Search citations on IEEE Xplore, PubMed, or Google Scholar.',
              'Step 3: Look up physical constants in standard university engineering handbooks.',
              'Step 4: Flag and correct any unverified or fabricated assertions before inclusion in coursework.'
            ]
          },
          keyTakeaways: [
            'Never cite a paper generated by AI without verifying its existence on Google Scholar or IEEE.',
            'Fluency does not equal truth—LLMs can lie with supreme confidence.',
            'Students bear 100% personal responsibility for factual errors in their submissions.'
          ]
        }
      },
      {
        id: 'u5-t2',
        unitId: 5,
        topicNumber: 2,
        title: 'Academic Integrity and Citation of AI Assistance',
        syllabusPoint: 'Academic integrity and appropriate citation of AI assistance in coursework and submissions.',
        estimatedMinutes: 25,
        content: {
          overview: 'Understanding institutional academic integrity policies, avoiding unaccredited plagiarism, and properly declaring and citing AI tool assistance in coursework and research submissions.',
          exactSyllabusPoint: 'Academic integrity and appropriate citation of AI assistance in coursework and submissions.',
          explanation: 'Academic integrity requires transparency and honesty regarding how work was produced. Passing off AI-generated text or code as your own unassisted intellectual creation constitutes academic misconduct:\n\n1. Authorized vs Unauthorized AI Use: Consult course syllabi and university policies (JNTUK/RIET guidelines) to understand where AI assistance is permitted (e.g., brainstorming, grammar polish) versus prohibited (e.g., during closed-book exams or unassisted coding tests).\n\n2. AI Usage Declarations: Many academic institutions require an explicit "AI Declaration Statement" appended to assignments detailing which tools were used, for what purpose, and how outputs were verified.\n\n3. Standard Citation Formats for AI:\n- APA 7th Edition: OpenAI. (2024). ChatGPT (GPT-4o version) [Large language model]. https://chatgpt.com\n- IEEE Style: OpenAI ChatGPT, response to prompt on "C++ pointer syntax", Sep. 15, 2024.\n\n4. Maintaining Original Intellectual Voice: Coursework must demonstrate personal understanding. AI should assist your thinking, not replace your learning.',
          keyConcepts: [
            {
              title: 'Academic Transparency',
              description: 'Disclosing tool usage openly rather than concealing AI assistance.'
            },
            {
              title: 'AI Usage Declaration',
              description: 'Formal statement appended to assignments describing tools used, prompts, and verification.'
            },
            {
              title: 'APA / IEEE Citation Format',
              description: 'Standardized referencing rules for acknowledging generative AI outputs.'
            },
            {
              title: 'Intellectual Ownership',
              description: 'Ensuring final submissions reflect genuine student comprehension and effort.'
            }
          ],
          realWorldExamples: [
            'Proper Citation: Adding a footnote: "ChatGPT (GPT-4o, OpenAI) was used to generate an initial outline for Section 2. The author verified all technical details and wrote the final text independently."',
            'Misconduct: Submitting an AI-generated essay directly into a plagiarism checker without editing or citation.'
          ],
          engineeringExamples: [
            'Lab Report Declaration: "AI Declaration: GitHub Copilot was used for C++ code completion in Task 3. All algorithm logic was written and debugged by the student author."'
          ],
          practicalApplication: {
            title: 'Writing an Official AI Usage Declaration',
            steps: [
              'Step 1: Append an "AI Assistance Declaration" section at the end of your assignment.',
              'Step 2: List Tool Name & Model Version (e.g., Claude 3.5 Sonnet, Anthropic).',
              'Step 3: Specify exact purpose (e.g., "Grammar check and slide outline generation").',
              'Step 4: Include verification statement: "I have manually verified all facts, calculations, and code logic."'
            ]
          },
          keyTakeaways: [
            'Transparency protects academic integrity—always declare AI tool usage when required.',
            'Follow institutional APA or IEEE citation rules for generative AI.',
            'Never present AI-generated content as your unassisted personal creation.'
          ]
        }
      },
      {
        id: 'u5-t3',
        unitId: 5,
        topicNumber: 3,
        title: 'Data Privacy, Security & India\'s DPDP Act 2023',
        syllabusPoint: 'Data privacy and security considerations, including obligations under India\'s Digital Personal Data Protection Act, 2023 (DPDP Act), when uploading personal or institutional data.',
        estimatedMinutes: 30,
        content: {
          overview: 'Understanding data privacy risks when interacting with cloud-hosted AI tools, with specific focus on compliance obligations under India\'s Digital Personal Data Protection Act, 2023 (DPDP Act, 2023).',
          exactSyllabusPoint: 'Data privacy and security considerations, including obligations under India\'s Digital Personal Data Protection Act, 2023 (DPDP Act), when uploading personal or institutional data.',
          explanation: 'When students and faculty upload files or enter text into cloud AI platforms, data is transmitted to external servers. Protecting personal and institutional privacy is both a technical requirement and a legal obligation under Indian law:\n\n1. Data Privacy Risks: Free-tier public AI tools often log inputs to train future foundation models. Uploading sensitive files—such as student grade sheets, personal Aadhar numbers, private institutional research code, or confidential health data—exposes that data to unauthorized model ingestion.\n\n2. Overview of India\'s DPDP Act, 2023:\nEnacted in August 2023, the Digital Personal Data Protection Act (DPDP Act) governs the processing of digital personal data in India:\n- Data Principal: The individual whose personal data is collected (e.g., students, faculty).\n- Data Fiduciary: The entity determining the purpose of data processing (e.g., College, University, or AI Service Provider).\n- Consent & Purpose Limitation: Personal data can only be processed for specified, lawful purposes with explicit, informed consent.\n- Significant Penalties: Violations and data breaches attract heavy financial penalties under the Act (up to ₹250 crore).\n\n3. Compliance Best Practices for Students:\n- Never upload Personal Identifiable Information (PII)—names, phone numbers, roll numbers, marks, financial details—to public AI tools.\n- Anonymize or sanitize datasets before uploading for analysis (e.g., replace student names with `Student_A`, `Student_B`).',
          keyConcepts: [
            {
              title: 'Digital Personal Data Protection Act (DPDP Act, 2023)',
              description: 'India\'s landmark data privacy law protecting digital personal data rights and enforcing fiduciary duties.'
            },
            {
              title: 'Data Principal & Data Fiduciary',
              description: 'Legal definitions: Individual owner of data (Principal) vs Entity processing data (Fiduciary).'
            },
            {
              title: 'Personally Identifiable Information (PII)',
              description: 'Data that can uniquely identify an individual (Aadhar, phone, email, roll number, grades).'
            },
            {
              title: 'Data Anonymization & Sanitization',
              description: 'Stripping or masking personal identifiers before uploading datasets to cloud tools.'
            }
          ],
          realWorldExamples: [
            'DPDP Compliance Violation: Uploading an unredacted PDF of class marks containing student phone numbers and Aadhar IDs to a free public AI summarizer.',
            'Correct Data Sanitization: Replacing names and roll numbers in a dataset with generic codes (`ID_01`, `ID_02`) before asking AI to run statistical analysis.'
          ],
          engineeringExamples: [
            'Proprietary Code Protection: Refraining from uploading a college lab\'s patented circuit schematic or unpublished software repository to public cloud AI chats.'
          ],
          practicalApplication: {
            title: 'Sanitizing Datasets for DPDP Act 2023 Compliance',
            steps: [
              'Step 1: Open dataset in Excel or text editor before uploading to AI.',
              'Step 2: Delete or mask all PII columns (Names, Aadhar, Phone, Address, Roll Number).',
              'Step 3: Replace identifiers with anonymous indices (`Subject_1`, `Subject_2`).',
              'Step 4: Save sanitized file as `sanitized_data.csv` and upload to AI tool.'
            ]
          },
          keyTakeaways: [
            'India\'s DPDP Act 2023 legally protects digital personal data and enforces strict processing consent.',
            'Never upload personal or institutional PII to public AI platforms.',
            'Always sanitize datasets by stripping personal identifiers before AI analysis.'
          ]
        }
      },
      {
        id: 'u5-t4',
        unitId: 5,
        topicNumber: 4,
        title: 'Copyright and Intellectual Property in AI Content',
        syllabusPoint: 'Copyright and intellectual property considerations in AI-generated text and image content.',
        estimatedMinutes: 25,
        content: {
          overview: 'Examining ownership rights, copyright boundaries, fair use, and intellectual property (IP) challenges associated with AI-generated text, code, and artwork.',
          exactSyllabusPoint: 'Copyright and intellectual property considerations in AI-generated text and image content.',
          explanation: 'Generative AI creates complex legal and intellectual property questions regarding ownership and copyright:\n\n1. Can AI-Generated Content be Copyrighted? In most global jurisdictions (including Indian Copyright Law and US Copyright Office rulings), copyright protection requires human authorship. Purely AI-generated text, images, or code without substantial human creative contribution generally cannot be registered for copyright ownership.\n\n2. Training Data & Fair Use Debates: Foundation models are trained on billions of copyrighted books, articles, and artworks. Ongoing lawsuits evaluate whether scraping copyrighted material for AI training constitutes "fair use" or copyright infringement.\n\n3. Commercial & Academic IP Risks: Using AI-generated images or code snippets in commercial engineering products or published papers carries potential IP risks if the AI outputs closely paraphrase or replicate copyrighted source material.\n\n4. Best Practices for Engineers:\n- Use AI outputs as internal drafts or inspiration rather than final proprietary assets.\n- Add significant human creative transformation to any AI-assisted work.\n- Use permissively licensed or open-source foundation models for enterprise projects.',
          keyConcepts: [
            {
              title: 'Human Authorship Requirement',
              description: 'Legal standard establishing that copyright protection requires human creative input.'
            },
            {
              title: 'Training Data Copyright Disputes',
              description: 'Legal controversies surrounding scraping copyrighted web content to train foundation models.'
            },
            {
              title: 'Substantial Transformation',
              description: 'Adding original human analysis, code logic, or writing to transform raw AI outputs.'
            },
            {
              title: 'Open Source & Permissive Licensing',
              description: 'Choosing tools and models with clear commercial and academic usage terms.'
            }
          ],
          realWorldExamples: [
            'Art Copyright Case: An AI-generated image created via Midjourney was denied copyright registration because it lacked direct human artistic execution.',
            'Code Paraphrasing: An AI tool outputting code that reproduces copyrighted GPL-licensed software code verbatim.'
          ],
          engineeringExamples: [
            'Patent Application Risk: Including raw, unedited AI-generated text in a patent filing may compromise the patent\'s validity due to lack of human inventor disclosure.'
          ],
          practicalApplication: {
            title: 'Evaluating IP Risk in AI-Assisted Work',
            steps: [
              'Step 1: Check if the tool\'s Terms of Service grant you ownership of generated outputs.',
              'Step 2: Check if AI output closely replicates an existing published source.',
              'Step 3: Apply substantial human editing, rewriting, and original engineering code structure.',
              'Step 4: Document human creative contribution.'
            ]
          },
          keyTakeaways: [
            'Purely AI-generated outputs generally lack copyright protection.',
            'Transform AI drafts with original human intellectual analysis and writing.',
            'Check terms of service when using AI assets in commercial or published projects.'
          ]
        }
      },
      {
        id: 'u5-t5',
        unitId: 5,
        topicNumber: 5,
        title: 'Emerging Trends: Multimodal AI & AI Agents',
        syllabusPoint: 'Emerging trends: multimodal AI, AI agents, and their implications for future engineering practice.',
        estimatedMinutes: 30,
        content: {
          overview: 'Exploring the frontier of artificial intelligence—including multimodal models that seamlessly process text, audio, images, and video simultaneously, and autonomous AI agents capable of executing complex multi-step engineering workflows.',
          exactSyllabusPoint: 'Emerging trends: multimodal AI, AI agents, and their implications for future engineering practice.',
          explanation: 'The landscape of AI tools is evolving rapidly beyond simple single-turn text chat:\n\n1. Multimodal AI Systems: Modern models (such as GPT-4o, Gemini 1.5 Pro, and Claude 3.5 Sonnet) natively process multiple modalities simultaneously—text, high-resolution imagery, audio streams, blueprints, and video feeds. For engineers, this enables uploading circuit schematics, mechanical CAD drawings, or raw audio recordings directly into the model for instant analysis.\n\n2. Autonomous AI Agents: Unlike passive chatbots that respond to a single prompt, AI agents operate with goal-oriented autonomy. Given a high-level goal (e.g., "Audit this Python repository for security vulnerabilities and submit a pull request with fixes"), an agent creates a task plan, executes terminal commands, browses the web, tests code, inspects errors, and iterates until the goal is complete.\n\n3. Implications for Future Engineering Practice:\n- Shift from Manual Coding to Agentic Orchestration: Engineers will increasingly act as architects and reviewers, directing teams of autonomous AI agents.\n- Interdisciplinary Synthesis: Multimodal tools allow seamless integration across mechanical, electrical, and computer science domains.\n- Lifelong Learning Imperative: As AI tools advance, continuous adaptation and ethical stewardship become core engineering competencies.',
          keyConcepts: [
            {
              title: 'Multimodal AI',
              description: 'AI models natively integrating text, image, audio, video, and code modalities simultaneously.'
            },
            {
              title: 'Autonomous AI Agents',
              description: 'Goal-driven AI systems capable of multi-step planning, tool invocation, and self-correction.'
            },
            {
              title: 'Agentic Workflow Orchestration',
              description: 'Engineers managing high-level goals and auditing agent execution paths.'
            },
            {
              title: 'Future Engineering Competencies',
              description: 'Focusing on problem formulation, system design, ethical judgment, and verification.'
            }
          ],
          realWorldExamples: [
            'Multimodal Visual Analysis: Uploading a photo of a burnt circuit board to Gemini and asking: "Identify damaged components and suggest replacement specifications."',
            'AI Agent Action: Giving an AI agent (like Claude Code) a goal: "Refactor this 10-file repository to use asynchronous I/O and run pytest to confirm zero test breakages."'
          ],
          engineeringExamples: [
            'Autonomous Structural Audit: An AI drone agent capturing video of a building façade, using multimodal vision to flag stress cracks, generating 3D CAD repair models, and drafting an engineering report.'
          ],
          practicalApplication: {
            title: 'Preparing for Agentic Engineering Workflows',
            steps: [
              'Step 1: Practice defining clear, unambiguous high-level problem goals.',
              'Step 2: Learn to evaluate agent execution logs and intermediate tool outputs.',
              'Step 3: Develop strong verification protocols to test agent-generated software and engineering designs.'
            ]
          },
          keyTakeaways: [
            'Multimodal AI processes blueprints, video, audio, and code natively.',
            'AI agents execute complex multi-step goal plans autonomously.',
            'The future engineer\'s value lies in system architecture, goal formulation, and rigorous verification.'
          ]
        }
      }
    ],
    teacherExamples: [
      {
        id: 'u5-ex1',
        number: 1,
        title: 'Documented Case of AI Hallucination & Fact-Checking Walkthrough',
        description: 'Show a documented case of AI hallucination (a fabricated fact or citation) and demonstrate how to fact-check it.',
        steps: [
          'Step 1: Enter Prompt into AI: "Provide 3 IEEE citations on high-speed C++ sorting algorithms published between 2021 and 2023 with DOIs."',
          'Step 2: Display the 3 AI-generated citations.',
          'Step 3: Open Google Scholar (scholar.google.com) and IEEE Xplore live on screen.',
          'Step 4: Search for the generated titles and DOIs to prove to the class that 2 of the 3 papers are completely fabricated hallucinations.',
          'Step 5: Demonstrate proper verification protocol: Only cite papers verified on Google Scholar/IEEE.'
        ],
        teachingNote: 'This live demonstration vividly proves to students why blind copy-pasting of AI citations leads to academic failure.'
      },
      {
        id: 'u5-ex2',
        number: 2,
        title: 'Walkthrough of Citing AI Assistance in Academic Submissions',
        description: 'Walk through an example of properly citing AI assistance in an academic submission according to institutional guidelines.',
        steps: [
          'Step 1: Display a sample student assignment report.',
          'Step 2: Add formal APA / IEEE citation entry in References section.',
          'Step 3: Draft an "AI Assistance Declaration" box at the end of the report detailing: 1. Tool used (ChatGPT 4o), 2. Extent of use (Drafting initial outline for Section 2), 3. Verification method (Manual cross-check against textbook Chapter 4).'
        ],
        teachingNote: 'Show students that institutional transparency builds academic trust rather than hiding tool usage.'
      },
      {
        id: 'u5-ex3',
        number: 3,
        title: 'Checking Copyright & IP Concerns in AI Text/Image Outputs',
        description: 'Walk through a worked example of checking whether AI-generated text or image output raises a copyright/IP concern (example: close paraphrasing of a source).',
        steps: [
          'Step 1: Paste AI-generated text into a plagiarism detection tool (e.g., Turnitin or open-source similarity checker).',
          'Step 2: Identify any verbatim or close paraphrasing matches with existing published web pages.',
          'Step 3: Demonstrate rewriting the section in your own words, adding original engineering analysis and personal commentary to ensure substantial human transformation.'
        ],
        teachingNote: 'Reinforce that human creative editing is necessary to convert raw AI text into protected, original intellectual property.'
      }
    ],
    studentExercises: [
      {
        id: 'u5-stu1',
        number: 1,
        title: 'Documenting AI Hallucination or Bias Instance',
        problemStatement: 'Identify and document an instance of AI hallucination or bias produced by an AI tool when queried on a factual or mathematical engineering topic.',
        deliverable: 'A 1-page case document showing the prompt, the hallucinated AI output, proof of factual error from a verified source, and a reflection on why the error occurred.',
        guidance: 'Try asking for obscure citations, precise thermodynamic values, or complex historical dates.'
      },
      {
        id: 'u5-stu2',
        number: 2,
        title: 'Drafting a Formal AI Usage Declaration',
        problemStatement: 'Draft a complete "AI Usage Declaration" for a hypothetical course assignment, citing all tools used, specific prompts, extent of use, and human verification steps performed.',
        deliverable: 'A formal 1-page AI Declaration Statement adhering to APA or IEEE citation guidelines.',
        guidance: 'Include tool name, version, date accessed, exact prompt summary, and verification check.'
      },
      {
        id: 'u5-stu3',
        number: 3,
        title: 'DPDP Act 2023 Compliance Review of an AI Tool',
        problemStatement: 'Review the privacy/data-handling policy of one AI tool used in this course and identify one DPDP Act, 2023 compliance consideration relevant to student personal data.',
        deliverable: 'A short 200-word analysis connecting a specific clause in the tool\'s privacy policy with obligations under India\'s DPDP Act, 2023.',
        guidance: 'Focus on how user chat history is stored, whether data is used for model training, and how consent is obtained.'
      }
    ]
  }
];

export const TEXTBOOKS: BookResource[] = [
  {
    id: 'tb-1',
    authors: 'Marr, B.',
    year: '2024',
    title: 'Generative AI in Practice: 100+ Amazing Ways Generative Artificial Intelligence Is Changing Business and Society',
    publisher: 'Wiley',
    description: 'Comprehensive practical guide exploring real-world applications, tools, and societal impacts of Generative AI across industries.'
  },
  {
    id: 'tb-2',
    authors: 'Mollick, E.',
    year: '2024',
    title: 'Co-Intelligence: Living and Working with AI',
    publisher: 'Portfolio/Penguin',
    description: 'Foundational text on human-AI collaboration, prompt engineering principles, and navigating the co-intelligence era in education and work.'
  }
];

export const REFERENCE_BOOKS: BookResource[] = [
  {
    id: 'rb-1',
    authors: 'Selwyn, N.',
    year: '2022',
    edition: '3rd ed.',
    title: 'Education and Technology: Key Issues and Debates',
    publisher: 'Bloomsbury',
    description: 'Critical exploration of educational technology, digital learning tools, and ethical integration in academic environments.'
  },
  {
    id: 'rb-2',
    authors: 'Susskind, R., & Susskind, D.',
    year: '2022',
    edition: 'Updated ed.',
    title: 'The Future of the Professions: How Technology Will Transform the Work of Human Experts',
    publisher: 'Oxford University Press',
    description: 'Insightful analysis of how AI and automation redefine engineering, legal, educational, and medical professions.'
  },
  {
    id: 'rb-3',
    authors: 'Russell, S., & Norvig, P.',
    year: '2021',
    edition: '4th ed.',
    title: 'Artificial Intelligence: A Modern Approach',
    publisher: 'Pearson',
    description: 'The definitive textbook on Artificial Intelligence principles, search algorithms, machine learning models, and ethical AI agent design.'
  }
];

export const WEB_RESOURCES: WebResource[] = [
  {
    id: 'wr-1',
    title: 'Google AI Essentials',
    url: 'https://grow.google/ai-essentials/',
    description: 'Official self-paced foundational course by Google covering practical AI tools, prompt ideas, and responsible usage.',
    badgeText: 'Google Course'
  },
  {
    id: 'wr-2',
    title: 'OpenAI Documentation and Guides',
    url: 'https://platform.openai.com/docs',
    description: 'Official API documentation, prompt engineering guides, and model capabilities reference from OpenAI.',
    badgeText: 'OpenAI Docs'
  },
  {
    id: 'wr-3',
    title: 'Anthropic Prompt Engineering Overview',
    url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview',
    description: 'Comprehensive guide by Anthropic on system prompts, few-shot prompting, and chain-of-thought optimization for Claude.',
    badgeText: 'Anthropic Guide'
  },
  {
    id: 'wr-4',
    title: 'UNESCO — Guidance for Generative AI in Education and Research',
    url: 'https://unesdoc.unesco.org/',
    description: 'Global policy guidance on ethical AI deployment, student privacy, and academic integrity in higher education.',
    badgeText: 'UNESCO Policy'
  },
  {
    id: 'wr-5',
    title: 'AICTE — Inputs on Artificial Intelligence / Year of AI Initiative',
    url: 'https://www.aicte-india.org/',
    description: 'Official AICTE portal resources on AI curriculum guidelines, student skill initiatives, and technical education standards.',
    badgeText: 'AICTE Portal'
  },
  {
    id: 'wr-6',
    title: 'MeitY — Digital Personal Data Protection Act, 2023',
    url: 'https://www.meity.gov.in/content/digital-personal-data-protection-act-2023',
    description: 'Official gazette notification and legal framework of India\'s DPDP Act, 2023 for data privacy and user consent compliance.',
    badgeText: 'MeitY Legal Act'
  }
];

export function getTopicById(topicId: string) {
  for (const unit of COURSE_UNITS) {
    const found = unit.topics.find(t => t.id === topicId);
    if (found) return { topic: found, unit };
  }
  return null;
}

export function getAllTopics() {
  return COURSE_UNITS.flatMap(u => u.topics);
}
