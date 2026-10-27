import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from y4_helper import create_topic, write_ts_file
from generate_y4_data import generate_8_examples, generate_practice_set

va_specs = [
    ("y4-va-adv-grammar", "Advanced English Grammar & Syntax Mastery", "Subject-verb agreement (concord), subjunctive mood, parallelism, dangling modifiers, and inverted syntax."),
    ("y4-va-adv-error-detection", "Spotting Errors: Tense, Modifiers & Concord", "Tense consistency across compound sentences, pronoun-antecedent ambiguity, and comparative degree traps."),
    ("y4-va-adv-sentence-correction", "Sentence Correction & Phrase Replacement", "Identifying idiom errors, redundancy trimming, active vs passive voice precision, and clause conjunctions."),
    ("y4-va-adv-contextual-vocab", "Vocabulary in Context: Etymology & Connotations", "Greek and Latin roots, contextual connotation shifts, high-frequency corporate vocabulary, and collocations."),
    ("y4-va-adv-synonyms-antonyms", "Advanced Synonyms & Antonyms: Semantic Shades", "Nuanced degree of intensity, tone matching (pejorative vs laudatory), and distractor elimination."),
    ("y4-va-adv-sentence-completion", "Single & Double Blank Sentence Completion", "Contrast transition markers (although, despite, nonetheless), cause-effect markers, and tonal consistency."),
    ("y4-va-adv-para-jumbles", "Para Jumbles & Sentence Sequencing Strategies", "Mandatory pairing heuristics, acronym-first rules, pronoun backward referencing, and chronological markers."),
    ("y4-va-adv-sentence-rearrangement", "Sentence Rearrangement: Clause-Level Syntax", "Reconstructing fragmented clauses, prepositional phrase attachments, and relative pronoun anchors."),
    ("y4-va-adv-paragraph-completion", "Paragraph Completion & Summary Selection", "Predicting concluding sentences, evaluating premise-conclusion harmony, and eliminating out-of-scope options."),
    ("y4-va-adv-rc-foundations", "Reading Comprehension Foundations & Skimming", "Active skimming protocols, identifying structural paragraph pivots, and question-stem taxonomy."),
    ("y4-va-adv-rc-advanced", "Advanced Reading Comprehension: Multi-Disciplinary", "Deconstructing dense 800-word passages across economics, philosophy, emerging technology, and geopolitics."),
    ("y4-va-adv-critical-reasoning", "Critical Reasoning: Weaken, Strengthen & Assumption", "Identifying the hidden premise, isolating the conclusion, targeting assumptions, and testing causal leaps."),
    ("y4-va-adv-inference-questions", "Inference-Based Comprehension & Deductions", "Differentiating explicit factual statements from true logical inferences and avoiding speculative traps."),
    ("y4-va-adv-tone-main-idea", "Author's Tone, Style & Central Idea Identification", "Decoding authorial perspective (objective, sarcastic, pedantic, laudatory, critical) and thesis statements."),
    ("y4-va-adv-corporate-communication", "Corporate Verbal Ability & Cloze Test Mastery", "Professional business email etiquette, idiomatic phrasal verbs, and multi-blank contextual cloze tests."),
    ("y4-va-adv-mixed-verbal", "Comprehensive Advanced Mixed Verbal Ability Challenge", "Full-spectrum placement verbal simulation integrating grammar, vocabulary, reading comprehension, and logic.")
]

topics = []
for idx, (t_id, title, desc) in enumerate(va_specs):
    slug = t_id.replace("y4-va-", "")
    num = idx + 1
    easy, inter, adv, pl, mixed = generate_practice_set(slug, title)
    exs = generate_8_examples(slug, title, f"Linguistic / Grammatical Principle for {title}")
    
    topic = create_topic(
        t_id=t_id,
        cat="Advanced Verbal Ability",
        num=num,
        title=title,
        tagline=f"Mastery of {title} — Precision Grammar, Contextual Semantics & Critical Reading",
        est_min=60,
        diff="Placement-Ready" if num > 8 else "Advanced",
        overview=f"{title} forms an essential pillar of verbal assessment across global technology recruiters (TCS, Infosys, Cognizant, Wipro, Accenture, AMCAT, eLitmus). It tests grammatical precision, syntactic fluency, contextual vocabulary, and high-velocity reading comprehension under tight time constraints.",
        placement_rel=f"Corporate assessments test {title} to evaluate professional written communication, analytical clarity, and ability to extract critical insights from complex documentation.",
        weightage="High Frequency (Constitutes 25%–35% of total marks in recruitment aptitude evaluations).",
        real_world="Executive communication, technical specification drafting, cross-cultural stakeholder management, and legal/business contract comprehension.",
        objs=[
            f"Master core grammatical rules, transition mechanics, and rhetorical patterns for {title}",
            "Analyze sentence structures and identify syntax violations in under 30 seconds",
            "Eliminate verbal distractors using tone matching, structural parallelism, and scope analysis",
            "Read and comprehend dense multi-disciplinary texts with 95%+ retention and accuracy"
        ],
        prereqs=["Basic English grammar", "Standard vocabulary", "Sentence clause identification"],
        refresher="Review parts of speech, active/passive voice, direct/indirect speech, and coordinating conjunctions.",
        defs=[
            f"Core Framework: The rules and principles governing {title}.",
            "Parallelism: The requirement that coordinate elements in a sentence have identical grammatical form.",
            "Tonal Consistency: Aligning word connotations and rhetoric with the overall passage register."
        ],
        intuition=f"Verbal ability in {title} is governed by structured structural rules and logical cohesion, transforming language comprehension into systematic pattern matching.",
        visual="Flow diagram mapping sentence clauses, transition pivots, and core subject-verb-object relationships.",
        formulas=[
            {
                "title": f"Structural Cohesion Principle ({title})",
                "formula": "Premise + Transition + Evidence ⟹ Valid Conclusion",
                "variables": "Grammatical agreement and logical connectors",
                "description": f"Guiding structural relationship for {title}.",
                "whenToUse": "Applicable across error detection, sentence correction, and reading comprehension.",
                "simpleExample": "Identifying subject-verb agreement across intervening prepositional phrases."
            }
        ],
        narrative=[
            f"In this comprehensive module on {title}, we break down language rules into logical, deterministic patterns.",
            "By understanding how recruiters engineer common distractors (scope shifts, extreme wording, and subtle grammar traps), students can solve questions with high speed and zero guesswork."
        ],
        deep_dives=[
            {
                "title": "Transition Signposts & Logical Direction",
                "content": "Analyzing continuation markers (moreover, furthermore) vs pivot markers (however, nonetheless, conversely)."
            },
            {
                "title": "Distractor Anatomy in Verbal Tests",
                "content": "Categorizing common traps: Out of Scope (OOS), Distortion, Extreme Language, and Reverse Causality."
            }
        ],
        variations=[
            {"typeName": "Direct Error Identification", "description": "Detecting specific syntax or concord errors in highlighted sections."},
            {"typeName": "Contextual Fillers & Cloze Tests", "description": "Selecting words that maintain semantic meaning and collocations."},
            {"typeName": "Passage Synthesis & Inferences", "description": "Deriving unstated logical conclusions from dense multi-paragraph texts."}
        ],
        examples=exs,
        alt_method={
            "title": "Intuitive 'Sounds-Right' Approach vs Rule-Based Syntax Elimination",
            "methods": [
                {
                    "methodName": "Auditory Intuition ('Sounds Right')",
                    "steps": ["Read sentence silently", "Pick option that sounds natural"],
                    "prosAndCons": "High failure rate (45%+) on idiomatic or parallel structure questions.",
                    "whenToUse": "Not recommended for standardized corporate tests."
                },
                {
                    "methodName": "Systematic Syntax & Scope Elimination",
                    "steps": ["Identify subject and verb", "Check tense, parallelism, and modifiers", "Eliminate flawed options"],
                    "prosAndCons": "100% deterministic accuracy with minimal time expenditure.",
                    "whenToUse": "Mandatory for all competitive placement verbal assessments."
                }
            ]
        },
        shortcuts={
            "title": f"Speed Shortcut for {title}",
            "traditionalVsShortcut": {
                "traditionalMethod": "Reading whole passage multiple times (~90s).",
                "shortcutMethod": "Targeted question-stem keyword scanning and pivot analysis (~30s).",
                "timeSavedPercent": "67% time saved"
            },
            "rulesForApplication": [
                "Read the question stem first to determine whether it asks for detail, tone, or inference.",
                "In error detection, immediately isolate the subject by crossing out prepositional modifiers."
            ]
        },
        mistakes=[
            {
                "mistake": "Selecting options containing true real-world facts that are not supported by the passage text.",
                "whyItHappens": "Relying on external general knowledge rather than passage boundaries.",
                "howToAvoid": "Every correct answer must have explicit or direct deductive support within the prompt."
            }
        ],
        tips={
            "timeAllocationSeconds": 40,
            "eliminationTechnique": "Discard options with extreme qualifiers (always, never, exclusively) in inference questions.",
            "questionSelectionAdvice": "Attempt grammar and vocab questions immediately (20-30s each) to reserve time for RC passages.",
            "recruiterInsight": "Verbal scores are heavily weighted in client-facing role shortlists and global consulting profiles."
        },
        p_easy=easy,
        p_inter=inter,
        p_adv=adv,
        p_placement=pl,
        mixed=mixed,
        rev_bullets=[
            f"Always enforce singular/plural subject-verb concord in {title}.",
            "Watch for transition words that reverse or intensify authorial stance.",
            "Eliminate extreme qualifiers in reading comprehension and inference questions."
        ],
        rev_formulas=[
            "Singular Subject ⟹ Singular Verb (-s / -es)",
            "Active Voice: Subject + Action + Object"
        ],
        takeaways=[
            f"Mastery of {title} ensures top-bracket verbal percentiles in corporate recruitment assessments.",
            "Applying rule-based grammatical filters eliminates subjective ambiguity in multiple-choice questions."
        ],
        sources=[
            {"sourceName": "High School English Grammar and Composition (Wren & Martin)", "sourceType": "Textbook", "referenceNote": "Comprehensive grammatical rules and syntax structures."},
            {"sourceName": "Word Power Made Easy (Norman Lewis)", "sourceType": "Textbook", "referenceNote": "Etymology, root words, and vocabulary building strategies."}
        ]
    )
    topics.append(topic)

write_ts_file("src/data/crtYear4/verbalTopics.ts", "CRT_Y4_VERBAL_TOPICS", topics)
