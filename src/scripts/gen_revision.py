import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from y4_helper import create_topic, write_ts_file
from generate_y4_data import generate_8_examples, generate_practice_set

rev_specs = [
    ("y4-rev-quant-formula-sheet", "Master Quantitative Aptitude Formula Sheet & Compendium", "Comprehensive formula repository covering arithmetic, algebra, geometry, number theory, progressions, and modern math."),
    ("y4-rev-lr-quick-rules", "Master Logical Reasoning Frameworks & Decision Trees", "Decision matrices for circular/linear seating, family bloodline codes, syllogism Venn models, and critical logic truth tables."),
    ("y4-rev-va-rules-mnemonics", "Master Verbal Ability Grammar Rules & Tone Glossary", "High-frequency grammar rules (parallelism, concord, modifiers), root-word mnemonics, and rhetorical tone classifications."),
    ("y4-rev-di-shortcuts-summary", "Master Data Interpretation Calculation Tables (1/1 to 1/25)", "Instant mental lookup tables for fractional equivalents (1/1 to 1/25), squares (1-50), cubes (1-25), and percentage factors."),
    ("y4-rev-common-mistakes-compendium", "Top 50 Most Common Aptitude Pitfalls & Prevention", "Deconstructing recurring student errors across unit conversions, inverse ratios, misread questions, and cognitive biases."),
    ("y4-rev-frequently-tested-concepts", "Frequently Tested Concepts in Corporate Placement Drives", "The high-yield 80/20 syllabus breakdown: Identifying the 20% of core concepts that account for 80% of all test questions."),
    ("y4-rev-mock-strategy-analysis", "Mock Test Diagnostic Analysis & Error Log Protocol", "Systematic post-mock error auditing: Categorizing misses into Conceptual, Calculation, or Time-Management root causes."),
    ("y4-rev-full-length-practice", "Full-Length Integrated Placement Mock Assessment Chapter", "Complete cross-disciplinary simulated placement assessment module with detailed step-by-step explanatory blueprints.")
]

topics = []
for idx, (t_id, title, desc) in enumerate(rev_specs):
    slug = t_id.replace("y4-rev-", "")
    num = idx + 1
    easy, inter, adv, pl, mixed = generate_practice_set(slug, title)
    exs = generate_8_examples(slug, title, f"Revision & Diagnostic Blueprint for {title}")
    
    topic = create_topic(
        t_id=t_id,
        cat="Mock Test & Revision Preparation",
        num=num,
        title=title,
        tagline=f"Mastery of {title} — Rapid Recall, Error Auditing & High-Yield Pre-Exam Synthesis",
        est_min=60,
        diff="Placement-Ready",
        overview=f"{title} serves as the definitive high-speed revision and diagnostic synthesis module for final-year placement candidates. It consolidates 4 years of training into actionable, rapid-recall reference frameworks, diagnostic error logs, and comprehensive test simulations.",
        placement_rel=f"Recruiters evaluate candidates who demonstrate consistent, error-free execution across entire multi-hour tests. Reviewing {title} directly prior to placement drives eliminates last-minute panic and solidifies recall.",
        weightage="Essential Capstone (Directly consolidates performance across all corporate test rounds).",
        real_world="Pre-flight engineering checklists, production release verification protocols, and high-reliability operational reviews.",
        objs=[
            f"Achieve instant, subconscious recall of core formulas and decision frameworks in {title}",
            "Conduct structured post-mock diagnostic reviews and eliminate recurring personal error patterns",
            "Master fractional conversion tables (1/1 to 1/25) and mental math constants",
            "Synthesize multi-disciplinary knowledge into calm, high-velocity placement execution"
        ],
        prereqs=["Completion of core Quantitative, Logical, and Verbal syllabus chapters"],
        refresher="Review fundamental definitions and formula sheets across all 4 years of CRT training.",
        defs=[
            f"Revision Architecture: The condensed synthesis framework defining {title}.",
            "Error Log Taxonomy: Categorizing test errors into Conceptual Gaps, Careless Calculation Slips, and Time-Pressure Blunders.",
            "High-Yield Concept: A core mathematical or logical principle tested with disproportionately high frequency across corporate drives."
        ],
        intuition=f"Final revision in {title} is about converting active cognitive struggle into automatic, rapid-fire pattern recognition.",
        visual="Color-coded 1-page master cheat sheet consolidating formulas, pitfalls, and decision matrices.",
        formulas=[
            {
                "title": "Master Revision Invariant",
                "formula": "Score Retention = (Structured Formula Review) + (Diagnostic Error Auditing)",
                "variables": "Continuous cyclic review protocol",
                "description": "The golden rule of pre-placement revision.",
                "whenToUse": "Daily in the final 14 days preceding recruitment drives.",
                "simpleExample": "Reviewing formula sheets for 15 minutes each morning yields a 30% reduction in careless slips."
            }
        ],
        narrative=[
            f"This chapter serves as your definitive pre-exam synthesis manual for {title}.",
            "We organize key formulas, high-frequency shortcuts, and critical decision trees into concise, easily scannable modules for zero-friction review."
        ],
        deep_dives=[
            {
                "title": "The Post-Mock Error Audit Protocol",
                "content": "Step-by-step methods for logging every incorrect or skipped question in an error journal to prevent repeat mistakes."
            },
            {
                "title": "The 24-Hour Pre-Test Protocol",
                "content": "Physical, mental, and cognitive preparation for peak performance in the final 24 hours before your campus placement test."
            }
        ],
        variations=[
            {"typeName": "Rapid Formula Memory Retrieval", "description": "Instant recall of closed-form formulas and boundary conditions."},
            {"typeName": "Pitfall Identification & Debugging", "description": "Recognizing subtle distractor traps before calculating."},
            {"typeName": "Comprehensive Mock Synthesis", "description": "Executing full-length multi-section practice tests under timed conditions."}
        ],
        examples=exs,
        alt_method={
            "title": "Unstructured Passive Reading vs Active Diagnostic Error Auditing",
            "methods": [
                {
                    "methodName": "Passive Textbook Re-reading",
                    "steps": ["Flip through solved examples without testing recall"],
                    "prosAndCons": "Creates a false illusion of competence without improving retrieval speed.",
                    "whenToUse": "Not recommended."
                },
                {
                    "methodName": "Active Diagnostic Error Auditing",
                    "steps": ["Write formulas from memory", "Solve timed mixed sets", "Log and fix error root causes"],
                    "prosAndCons": "Guarantees 95%+ retrieval speed and permanently eliminates recurring mistakes.",
                    "whenToUse": "Standard operating procedure for all placement preparation."
                }
            ]
        },
        shortcuts={
            "title": f"Master Rule for {title}",
            "traditionalVsShortcut": {
                "traditionalMethod": "Randomly solving hundreds of unorganized practice questions.",
                "shortcutMethod": "Targeted revision of high-yield 80/20 concepts and personal error log.",
                "timeSavedPercent": "80% preparation efficiency"
            },
            "rulesForApplication": [
                "Spend 50% of revision time analyzing mistakes and only 50% solving new problems.",
                "Review the Master Fractional Lookup Table daily until fractions 1/2 to 1/20 are recognized instantly."
            ]
        },
        mistakes=[
            {
                "mistake": "Ignoring mistakes in mock tests and only looking at the final score.",
                "whyItHappens": "Ego-defense mechanism avoiding the discomfort of confronting weaknesses.",
                "howToAvoid": "Every mock test is worthless without a full 60-minute diagnostic review of every missed question."
            }
        ],
        tips={
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Use the master formula sheet and parity filters for rapid option pruning.",
            "questionSelectionAdvice": "In full-length practice, strictly adhere to the 3-Pass time triage algorithm.",
            "recruiterInsight": "Candidates with disciplined pre-exam revision protocols consistently outperform across both online tests and technical interviews."
        },
        p_easy=easy,
        p_inter=inter,
        p_adv=adv,
        p_placement=pl,
        mixed=mixed,
        rev_bullets=[
            f"Review the master formula sheet in {title} daily.",
            "Maintain an active error log to track and eliminate personal error patterns.",
            "Execute simulated full-length tests to build stamina for 2+ hour placement drives."
        ],
        rev_formulas=[
            "1/7 ≈ 14.28%, 1/8 = 12.5%, 1/9 ≈ 11.11%, 1/11 ≈ 9.09%, 1/13 ≈ 7.69%",
            "25² = 625, 35² = 1225, 45² = 2025, 55² = 3025"
        ],
        takeaways=[
            f"Mastery of {title} ensures peak performance and complete confidence on placement day.",
            "Systematic revision and diagnostic error auditing transform preparation into guaranteed placement success."
        ],
        sources=[
            {"sourceName": "How to Prepare for Quantitative Aptitude for CAT (Arun Sharma)", "sourceType": "Textbook", "referenceNote": "Comprehensive formula sheets, diagnostic test frameworks, and error logs."},
            {"sourceName": "RIET Placement Cell Training & Placement Blueprint", "sourceType": "Institutional Manual", "referenceNote": "Pre-drive checklists, company question banks, and mock analysis guidelines."}
        ]
    )
    topics.append(topic)

write_ts_file("src/data/crtYear4/revisionTopics.ts", "CRT_Y4_REVISION_TOPICS", topics)
