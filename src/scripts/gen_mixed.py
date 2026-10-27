import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from y4_helper import create_topic, write_ts_file
from generate_y4_data import generate_8_examples, generate_practice_set

mixed_specs = [
    ("y4-mix-quant-challenges", "Multi-Concept Quantitative Problem Solving", "Integrating geometry, number theory, progressions, and modular arithmetic into multi-tier composite challenges."),
    ("y4-mix-reasoning-challenges", "Multi-Concept Logical Reasoning Problem Solving", "Cross-pollinating seating arrangements with bloodline constraints, day scheduling, and categorical exclusion."),
    ("y4-mix-verbal-challenges", "Multi-Concept Verbal & Logic Problem Solving", "Fusing critical reasoning argument deconstruction with paragraph sequencing and nuance vocabulary."),
    ("y4-mix-quant-reasoning", "Hybrid Quantitative-Reasoning Problems", "Numerical code grids, quantitative syllogisms, set-theoretic Venn calculations, and logic-based arithmetic."),
    ("y4-mix-di-quant", "Hybrid Data Interpretation & Quantitative Optimization", "Applying linear optimization, cost minimization, and capacity constraints directly to graphical data dashboards."),
    ("y4-mix-placement-tough", "Elite Placement-Style Questions (TCS Digital & Infosys DSE)", "Advanced high-cognitive tier problems calibrated against premier engineering recruitment assessment patterns."),
    ("y4-mix-time-attack", "Time-Limited Problem Solving: 30-Second Sprint Drills", "Rapid-fire pattern recognition, lightning arithmetic estimation, and instant option-pruning mechanics."),
    ("y4-mix-speed-accuracy-tradeoff", "Speed vs Accuracy Strategy in Negative-Marking Tests", "Mathematical risk modeling, expected value guessing calculations, and confidence-band calibration."),
    ("y4-mix-question-selection", "Question Selection Strategy: The 5-Second Triage Matrix", "Identifying low-effort/high-yield questions vs time-sink traps in under 5 seconds of scanning."),
    ("y4-mix-comprehensive-simulation", "Full-Length Mixed Aptitude Simulation Chapter", "Comprehensive 30-question cross-disciplinary placement simulation test with complete explanatory blueprints.")
]

topics = []
for idx, (t_id, title, desc) in enumerate(mixed_specs):
    slug = t_id.replace("y4-mix-", "")
    num = idx + 1
    easy, inter, adv, pl, mixed = generate_practice_set(slug, title)
    exs = generate_8_examples(slug, title, f"Integrated Analytical Framework for {title}")
    
    topic = create_topic(
        t_id=t_id,
        cat="Advanced Aptitude / Mixed Problems",
        num=num,
        title=title,
        tagline=f"Mastery of {title} — Cross-Disciplinary Synthesis & High-Cognitive Execution",
        est_min=60,
        diff="Placement-Ready",
        overview=f"{title} represents the pinnacle of aptitude assessment in premier corporate recruitment drives (TCS Digital/Prime, Infosys Specialist Programmer / DSE, Accenture Advanced, and Cognizant GenC Next). It tests cognitive agility, cross-disciplinary synthesis, and optimal decision making under high-stakes competitive conditions.",
        placement_rel=f"Elite product and technology recruiters use {title} to identify top 5% candidates capable of solving non-standard algorithmic and analytical challenges with zero predefined templates.",
        weightage="Premier Tier (Distinguishes 7 LPA+ packages from standard entry-level hiring).",
        real_world="Full-stack system architecture, incident triage under operational pressure, algorithmic trading models, and enterprise resource optimization.",
        objs=[
            f"Master cross-disciplinary problem decomposition across quant, logic, and verbal in {title}",
            "Execute optimal question triage and time allocation in high-stakes placement environments",
            "Calculate expected value and statistical risk under negative-marking rules",
            "Solve premier-tier placement questions with speed and computational precision"
        ],
        prereqs=["Comprehensive quantitative foundations", "Advanced logical reasoning models", "Grammar and critical reading fluency"],
        refresher="Review fundamental theorems across arithmetic, algebra, set theory, and deductive logic.",
        defs=[
            f"Integrated Model: The unified problem-solving architecture defining {title}.",
            "Expected Value (EV): Mathematical expectation of score gain versus penalty when attempting a question: EV = P(Correct)·(+Marks) - P(Incorrect)·(-Penalty).",
            "Cognitive Load Triage: Allocating peak mental energy to high-yield problems while aggressively bypassing low-ROI time traps."
        ],
        intuition=f"Mastery in {title} requires seeing beyond individual subject silos, treating aptitude as a single unified system of logical and numerical problem-solving.",
        visual="Triangular decision matrix balancing Quant, Logic, and Strategic Time Allocation.",
        formulas=[
            {
                "title": "Expected Value of an Attempted Question",
                "formula": "EV = [P_c × M] - [P_w × P_n]",
                "variables": "P_c = prob of correct, M = marks, P_w = prob of wrong, P_n = negative penalty",
                "description": "Calculates whether attempting or guessing a question is statistically advantageous.",
                "whenToUse": "Use when deciding whether to guess after eliminating 1 or 2 options in negative-marking tests.",
                "simpleExample": "If 2 options eliminated in a 4-choice test with -0.25 penalty: EV = (0.5 × 1) - (0.5 × 0.25) = +0.375 marks. Statistically optimal to guess!"
            }
        ],
        narrative=[
            f"This chapter prepares candidates for high-complexity hybrid questions in {title}.",
            "We analyze multi-stage problem architectures where a quantitative answer feeds into a logical seating matrix, or where verbal critical reasoning guides data selection."
        ],
        deep_dives=[
            {
                "title": "Handling Hybrid Multi-Concept Questions",
                "content": "Step-by-step algorithms for decoupling fused quant-logic problems into sequential linear steps."
            },
            {
                "title": "The Psychology of Timed Decision Making",
                "content": "Overcoming the 'sunk cost fallacy' when a problem takes longer than 90 seconds without yielding a clear answer."
            }
        ],
        variations=[
            {"typeName": "Cross-Domain Hybrid Problems", "description": "Questions combining arithmetic equations with logical constraint matrices."},
            {"typeName": "Speed-Accuracy Tradeoff Scenarios", "description": "Selecting optimal attempt counts based on test percentile curves."},
            {"typeName": "High-Cognitive Novel Formats", "description": "Unfamiliar question designs that test raw adaptability rather than memorized formulas."}
        ],
        examples=exs,
        alt_method={
            "title": "Brute-Force Solving vs Strategic Triage",
            "methods": [
                {
                    "methodName": "Linear Sequential Solving",
                    "steps": ["Solve every problem in order of appearance regardless of difficulty"],
                    "prosAndCons": "Causes candidates to get stuck on difficult questions and miss easy questions at the end.",
                    "whenToUse": "Not recommended for any modern timed test."
                },
                {
                    "methodName": "3-Pass Triage Matrix",
                    "steps": ["Pass 1: Instant solves (<30s)", "Pass 2: Medium calculations (45–60s)", "Pass 3: Tough problems"],
                    "prosAndCons": "Maximizes total attempted questions and guarantees 95%+ percentile score efficiency.",
                    "whenToUse": "Standard operating procedure for all placement tests."
                }
            ]
        },
        shortcuts={
            "title": f"Strategic Shortcut for {title}",
            "traditionalVsShortcut": {
                "traditionalMethod": "Getting stuck for 3 minutes on complex hybrid problems.",
                "shortcutMethod": "5-second problem triage and instant variable mapping (~40s).",
                "timeSavedPercent": "75% time saved"
            },
            "rulesForApplication": [
                "If no clear solution path emerges within 15 seconds, flag and move immediately.",
                "Eliminate at least 2 options before making an informed probabilistic choice under negative marking."
            ]
        },
        mistakes=[
            {
                "mistake": "Spending 4+ minutes on a single difficult problem due to ego or sunk cost fallacy.",
                "whyItHappens": "Emotional reluctance to abandon a question after investing initial time.",
                "howToAvoid": "Strict 90-second hard cutoff: if unsolved at 90s, mark for review and proceed immediately."
            }
        ],
        tips={
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "Use structural symmetry, extreme limit testing, and order-of-magnitude estimates to discard impossible choices.",
            "questionSelectionAdvice": "Scan the entire section first if free navigation is allowed; target high-confidence topics to build momentum.",
            "recruiterInsight": "Top-tier hiring managers look for candidates who exhibit calm analytical discipline and high time-management maturity under pressure."
        },
        p_easy=easy,
        p_inter=inter,
        p_adv=adv,
        p_placement=pl,
        mixed=mixed,
        rev_bullets=[
            f"Always apply the 3-Pass time triage algorithm in {title}.",
            "Calculate expected value before guessing in negative-marking sections.",
            "Decouple hybrid problems into sequential sub-problems to avoid cognitive overload."
        ],
        rev_formulas=[
            "EV = P(Correct)·(+Marks) - P(Wrong)·(Penalty)",
            "Score Efficiency = (Total Solved × Accuracy) / Total Time"
        ],
        takeaways=[
            f"Mastery of {title} elevates candidates into premier placement compensation brackets (7–14+ LPA).",
            "Strategic test-taking discipline is just as critical as raw mathematical and logical capability."
        ],
        sources=[
            {"sourceName": "Quantitative Aptitude & Advanced Reasoning for CAT / Placement (Arun Sharma & Nishit K. Sinha)", "sourceType": "Textbook", "referenceNote": "Multi-concept problem integration and strategic testing frameworks."},
            {"sourceName": "TCS Digital / Infosys DSE Assessment Frameworks", "sourceType": "Corporate Assessment Blueprint", "referenceNote": "Advanced recruitment test blueprints and question depth benchmarks."}
        ]
    )
    topics.append(topic)

write_ts_file("src/data/crtYear4/mixedTopics.ts", "CRT_Y4_MIXED_TOPICS", topics)
