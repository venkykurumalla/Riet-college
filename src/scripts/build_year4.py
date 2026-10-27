import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from curriculum_generator_core import create_rich_topic, write_year_file

# Check for preserved topics from strategyTopics.ts
preserved_speed_math = None
preserved_recruiter_bp = None

try:
    with open("src/data/crtYear4/strategyTopics.ts", "r", encoding="utf-8") as f:
        c = f.read()
        idx = c.find(" = [")
        raw = c[idx + 3:].rstrip("; \n")
        tops = json.loads(raw)
        for t in tops:
            if t.get("id") == "y4-strat-speed-math-shortcuts":
                preserved_speed_math = t
            elif t.get("id") in ["y4-strat-recruiter-patterns", "y4-strat-recruiter-blueprints"]:
                preserved_recruiter_bp = t
except Exception as e:
    print(f"Notice on loading preserved topics: {e}")

y4_mqm_specs = [
    ("y4-mqm-problem-solving", "Mixed Quantitative Problem Solving", "Cross-disciplinary problem synthesis integrating arithmetic proportions, algebra, and geometry under timed conditions."),
    ("y4-mqm-multi-concept", "Multi-Concept Arithmetic Synthesis", "Multi-tier problems connecting ratios with percentages, time-speed-distance, and work efficiencies into unified problem statements."),
    ("y4-mqm-adv-calc-techniques", "Advanced Calculation Techniques", "Rapid mental arithmetic, base-100 multiplication, duplex squaring, and instantaneous digital root verification."),
    ("y4-mqm-approx-estimation", "Approximation and Estimation Heuristics", "Bounding invariants, order-of-magnitude estimation, and reciprocal benchmark anchors for rapid option pruning."),
    ("y4-mqm-data-based-quant", "Data-Based Quantitative Problem Solving", "Solving complex quantitative word problems presented inside visual graphs, balance sheets, and operations dashboards."),
    ("y4-mqm-high-diff-sets", "High-Difficulty Quantitative Sets (TCS Digital / Infosys DSE)", "Elite high-cognitive quantitative problem sets calibrated against premier 7–14 LPA engineering recruitment benchmarks."),
    ("y4-mqm-time-bound-drills", "Time-Bound Quantitative Practice Drills", "30-second rapid-fire quantitative drills designed to build computational stamina and instinctive pattern recognition.")
]

y4_mrm_specs = [
    ("y4-mrm-assessment-sets", "Mixed Logical Reasoning Assessment Sets", "Cross-functional logic problem sets combining seating matrices, family bloodlines, and conditional team formation."),
    ("y4-mrm-multi-constraint-puzzles", "Multi-Constraint Analytical Puzzles", "Solving complex 4-variable logic grids under simultaneous floor, color, profession, and vehicle constraints."),
    ("y4-mrm-complex-arrangements", "Complex Arrangement Synthesis Sets", "Multi-row parallel seating configurations with mixed orientation circular tables and missing participant counts."),
    ("y4-mrm-integrated-reasoning", "Integrated Reasoning Placement Problems", "Hybrid reasoning problems fusing Venn set calculations, binary logic puzzles, and numerical deductions."),
    ("y4-mrm-high-diff-logic", "High-Difficulty Analytical Logic Sets", "Advanced analytical puzzle sets reflecting elite corporate recruitment screening rounds (Infosys SP / Capgemini)."),
    ("y4-mrm-time-bound-drills", "Time-Bound Reasoning Practice Drills", "45-second rapid-fire deductive reasoning and matrix puzzle drills to build speed under countdown timer pressure.")
]

y4_avm_specs = [
    ("y4-avm-long-rc", "Long Reading Comprehension (Multi-Paragraphs)", "Deconstructing 900-word multi-paragraph texts under tight time limits using active skimming and paragraph mapping."),
    ("y4-avm-multi-disciplinary-rc", "Multi-Disciplinary Text Analysis", "Navigating dense texts spanning philosophy, macroeconomics, cognitive science, and geopolitical technology policies."),
    ("y4-avm-adv-critical-reasoning", "Advanced Critical Reasoning Synthesis", "Evaluating complex argument structures, detecting hidden premises, and formulating robust strengtheners/weakeners."),
    ("y4-avm-complex-inferences", "Complex Logical Inferences in Verbal Texts", "Distinguishing between strictly necessary textual deductions, probable extrapolations, and subtle speculative traps."),
    ("y4-avm-contextual-vocab", "Contextual Vocabulary & Corporate Discourse", "Mastering high-frequency corporate vocabulary, business idioms, collocations, and rhetorical registers."),
    ("y4-avm-integrated-verbal-sets", "Integrated Verbal Assessment Sets", "Full-spectrum verbal practice combining sentence correction, error detection, para jumbles, and reading comprehension."),
    ("y4-avm-time-bound-drills", "Time-Bound Verbal Speed Drills", "25-second rapid verbal sprints for grammar and vocabulary to maximize available time for reading comprehension.")
]

y4_ada_specs = [
    ("y4-ada-integrated-di-sets", "Complex Integrated Data Interpretation Sets", "Multi-variable business scenarios correlating financial tables, production logs, and market share distributions."),
    ("y4-ada-multi-chart-dashboards", "Multi-Chart Dashboard Analysis", "Interpreting tripartite dashboards combining pie charts, stacked bar graphs, and secondary line trend overlays."),
    ("y4-ada-caselet-business-analytics", "Caselet-Based Business Analysis", "Extracting multi-variable tabular datasets from dense unstructured corporate quarterly reports and case narratives."),
    ("y4-ada-data-sufficiency-mastery", "Data Sufficiency Mastery in Assessments", "Determining minimum required dataset inputs across complex multi-variable data interpretation questions."),
    ("y4-ada-high-speed-di-approx", "High-Speed DI Approximation Under Pressure", "Executing 2-digit truncation and fraction-to-percentage mental approximations under strict sectional timers."),
    ("y4-ada-mixed-di-sets", "Mixed DI Placement Sets", "Comprehensive multi-chart data interpretation challenge sets reflecting contemporary recruitment assessment formats.")
]

y4_speed_specs = [
    ("y4-strat-mental-calculation", "Mental Calculation & Left-to-Right Arithmetic", "Left-to-right addition/subtraction, base-100/1000 complements, and rapid estimation without scratchpad reliance."),
    ("y4-strat-calculation-shortcuts", "Calculation Shortcuts & Complements", "Vedic base deviations (Nikhilam), instantaneous squaring (Ekadhikena Purvena), and reciprocal fraction multipliers."),
    ("y4-strat-option-elimination", "Option Elimination via Unit Digits & Modulo-9 Digital Sums", "Using unit digit parity filters and Modulo-9 digital sum invariants to eliminate 75% of distractors in 5 seconds."),
    ("y4-strat-approx-strategy", "Strategic Approximation & Bounding Invariants", "Calculating upper and lower mathematical bounds to isolate correct multiple-choice answers without exact computation."),
    ("y4-strat-time-triage", "3-Pass Sectional Time Allocation (Green-Yellow-Red Protocol)", "Strategic time triage: 25% time on instant Green solves, 50% on medium Yellow problems, 25% on Red challenge sets."),
    ("y4-strat-question-selection", "Question Selection & 5-Second Triage Matrix", "Rapidly identifying high-yield, low-effort questions and bypassing deceptive multi-minute time-sink traps in 5 seconds."),
    ("y4-strat-accuracy-mgmt", "Accuracy Management & Careless Error Prevention", "Systematic personal error prevention protocols: Unit verification, sign auditing, and question-stem constraint validation."),
    ("y4-strat-negative-marking", "Avoiding Negative-Marking Errors & Expected Value Guessing", "Mathematical risk modeling: Calculating expected value EV = P(Correct)·(+Marks) - P(Wrong)·(Penalty) before guessing."),
    ("y4-strat-time-pressure", "Solving High-Stakes Assessments Under Time Pressure", "Managing adrenaline, cognitive tunnel vision, and test anxiety during countdown timers in online hiring rounds.")
]

y4_recruiter_specs = [
    ("y4-rec-online-assessments", "Understanding Online Aptitude Assessments & IRT Algorithms", "Demystifying Item Response Theory (IRT) adaptive engines, webcam/screen AI proctoring, and scoring normalization curves."),
    ("y4-rec-company-profiles", "Company-Specific Assessment Profiles (TCS, Infosys, Cognizant, Wipro, Accenture)", "Comparative topic distributions, question depths, negative marking rules, and sectional weightages across top recruiters."),
    ("y4-rec-platform-strategies", "Adaptive vs Static Platform Strategies", "Calibrating test strategy for adaptive engines (TCS/Infosys) where early question accuracy establishes the final score ceiling."),
    ("y4-rec-sectional-cutoffs", "Sectional Cutoff Management & Score Balancing", "Securing mandatory 70th+ percentile baseline cutoffs across Quant, Logic, and Verbal before chasing peak specialization."),
    ("y4-rec-difficulty-recognition", "Question Difficulty Recognition & Time Traps", "Categorizing questions into Tier-1 (Instant), Tier-2 (Procedural), and Tier-3 (Complex) in under 10 seconds."),
    ("y4-rec-skipping-vs-attempting", "Skipping vs Attempting Decision Framework", "Establishing a rigid 60-second hard cutoff to prevent the sunk cost fallacy from derailing sectional completion."),
    ("y4-rec-speed-accuracy-tradeoff", "Speed vs Accuracy Trade-Off Calibration", "Optimizing net score throughput based on individual accuracy bands and platform negative marking penalties."),
    ("y4-rec-proctoring-compliance", "AI Proctoring Compliance & Zero-Panic Protocols", "Ensuring full compliance with facial tracking, audio thresholds, browser restrictions, and technical glitch recovery.")
]

y4_revision_specs = [
    ("y4-rev-quant-formulas", "Master Quantitative Formula Compendium", "Exhaustive formula reference covering arithmetic, algebra, geometry, number theory, progressions, and modern math."),
    ("y4-rev-reasoning-patterns", "Master Reasoning Pattern & Decision Tree Compendium", "Decision matrices for circular/linear seating, family bloodline codes, syllogism Venn models, and logic truth tables."),
    ("y4-rev-verbal-strategy", "Master Verbal Strategy & Grammar Mnemonics", "High-frequency grammar rules (parallelism, concord, modifiers), root-word mnemonics, and rhetorical tone classifications."),
    ("y4-rev-di-tables", "Master Data Interpretation 1/1 to 1/25 Calculation Tables", "Instant mental lookup tables for fractional equivalents (1/1 to 1/25), squares (1-50), cubes (1-25), and percentage factors."),
    ("y4-rev-common-traps", "The Top 50 Common Aptitude Pitfalls & How to Avoid Them", "Deconstructing recurring student errors across unit conversions, inverse ratios, misread questions, and cognitive biases."),
    ("y4-rev-frequently-tested", "Frequently Tested Concepts (The 80/20 Placement Rule)", "The high-yield 80/20 syllabus breakdown: Identifying the 20% of core concepts that account for 80% of all test questions."),
    ("y4-rev-mock-analysis", "Mock Test Diagnostic Analysis & Error Log Protocol", "Systematic post-mock error auditing: Categorizing misses into Conceptual, Calculation, or Time-Management root causes."),
    ("y4-rev-full-length-practice", "Full-Length Integrated Placement Mock Simulation", "Complete cross-disciplinary simulated placement assessment module with detailed step-by-step explanatory blueprints.")
]

def make_y4_category(cat_name, desc, specs, start_num=1, preserved_first=None):
    topics = []
    if preserved_first:
        preserved_first["topicNumber"] = start_num
        preserved_first["category"] = cat_name
        topics.append(preserved_first)
        start_num += 1

    for idx, (t_id, title, overview_detail) in enumerate(specs):
        num = start_num + idx
        t = create_rich_topic(
            t_id=t_id,
            year_id=4,
            cat=cat_name,
            num=num,
            title=title,
            tagline=f"4th Year Placement Mastery — Tactical Execution, Velocity Heuristics & Recruitment Readiness",
            est_min=60,
            diff="Placement-Ready",
            overview=f"{title} is a core placement mastery module in 4th-year CRT training. {overview_detail} It focuses on strategic test execution, high computational velocity, and optimal decision making under high-stakes competitive hiring conditions.",
            placement_rel=f"Recruiters evaluate candidate performance in final-year assessments to select candidates for technical, consulting, and engineering roles with competitive compensation packages.",
            weightage="Placement Mastery Essential (Directly determines final recruitment test percentiles).",
            real_world="Production engineering triage, real-time algorithmic execution, enterprise resource optimization, and decision making under strict operational deadlines.",
            objs=[
                f"Master strategic placement application models, speed heuristics, and execution protocols in {title}",
                "Maximize score throughput and accuracy under countdown timer constraints",
                "Apply instant option elimination, digital roots, and triage matrices to bypass distractors",
                "Achieve 95%+ percentile qualifying benchmark scores across campus recruitment drives"
            ],
            prereqs=["Comprehensive 1st, 2nd, and 3rd year CRT aptitude, logic, and verbal coursework"],
            refresher="Review the Master Quantitative Formula Sheet, Logical Decision Trees, and Fractional Lookup Tables before beginning.",
            defs=[
                f"Mastery Protocol: The operational test-taking strategy defining {title}.",
                "Expected Value (EV): Score expectation accounting for accuracy probability and negative penalties.",
                "3-Pass Triage: Allocating sectional time across Green (instant), Yellow (procedural), and Red (challenge) questions."
            ],
            intuition=f"Placement mastery in {title} is about converting deep conceptual knowledge into high-velocity, disciplined test-taking execution.",
            visual="Tactical assessment dashboard mapping question selection, time allocation, and error-prevention checkpoints.",
            formulas=[
                {
                    "title": f"Strategic Placement Formulation ({title})",
                    "formula": "Throughput Score = (Total Solved × Accuracy) - Penalties",
                    "variables": "Strategic parameters for score maximization",
                    "description": f"Core governing strategic model for {title}.",
                    "whenToUse": "Apply across all placement assessment sections.",
                    "simpleExample": "Demonstrates why avoiding unforced errors is critical for clearing 90th percentile cutoffs."
                }
            ],
            narrative=[
                f"This final-year placement chapter prepares students for real-world recruitment test dynamics in {title}.",
                "We focus on tactical execution: how to triage questions in under 5 seconds, how to eliminate distractors instantly, and how to maintain high accuracy under time pressure."
            ],
            deep_dives=[
                {
                    "title": "Tactical Question Triage & Time Management",
                    "content": "Methods for scanning, categorizing, and executing questions to ensure no easy marks are left uncollected."
                }
            ],
            variations=[
                {"typeName": "High-Velocity Standard Question", "description": "Solving high-frequency placement formats in under 30 seconds."},
                {"typeName": "Complex Multi-Concept Challenge", "description": "Synthesizing multiple analytical tools to solve novel assessment problems."}
            ],
            methods_title="Traditional Slow Method vs Tactical Placement Heuristic",
            trad_method="Standard brute-force solving without checking options (~90s).",
            shortcut_method="5-second triage, option pruning via digital root/parity, and rapid mental execution (~25s).",
            time_saved="72% time saved",
            mistake_list=[
                {
                    "mistake": "Spending 3+ minutes on a single stubborn question due to ego or the sunk cost fallacy.",
                    "why": "Failing to recognize a time-trap question early in the section.",
                    "avoid": "Enforce a strict 60-second hard cutoff: if no clear path is visible at 60s, flag and move on immediately."
                }
            ],
            tips={
                "timeAllocationSeconds": 45,
                "eliminationTechnique": "Use digital sum Modulo-9, unit digits, and magnitude bounds to eliminate 2-3 options in under 5 seconds.",
                "questionSelectionAdvice": "Clear all Green (instant) questions first to establish score momentum before tackling Yellow/Red problems.",
                "recruiterInsight": "Top-tier tech recruiters prioritize candidates who demonstrate calm analytical discipline, speed, and zero careless errors."
            },
            practice_title=title,
            rev_bullets=[
                f"Always apply the 3-Pass time triage protocol in {title}.",
                "Inspect answer choices before calculating to gauge required precision.",
                "Maintain strict time discipline to ensure full sectional coverage."
            ],
            rev_formulas=["Score Throughput = (Correct Solves × Marks) - Penalties"],
            takeaways=[
                f"Mastery of {title} ensures peak performance and high-percentile success across all campus recruitment drives.",
                "Strategic discipline and computational velocity are the decisive differentiators for premier placement offers."
            ],
            sources=[
                {"sourceName": "TCS iON / Infosys / AMCAT Assessment Frameworks", "sourceType": "Corporate Assessment Blueprint", "referenceNote": "Testing algorithms, adaptive engine mechanics, and difficulty normalization."},
                {"sourceName": "RIET Campus Recruitment Training Manual", "sourceType": "Institutional Framework", "referenceNote": "Time triage algorithms, error log protocols, and high-velocity problem-solving heuristics."}
            ]
        )
        topics.append(t)
    return {
        "category": cat_name,
        "description": desc,
        "topics": topics
    }

categories = [
    make_y4_category("Mixed Quantitative Mastery", "Cross-disciplinary quantitative synthesis, multi-concept arithmetic, high-difficulty problems, and timed speed drills.", y4_mqm_specs),
    make_y4_category("Mixed Reasoning Mastery", "Integrated logical assessment sets, multi-constraint floor/scheduling puzzles, complex arrangements, and rapid logic drills.", y4_mrm_specs),
    make_y4_category("Advanced Verbal Mastery", "Long-form multi-paragraph reading comprehension, multi-disciplinary texts, critical reasoning arguments, and timed verbal sprints.", y4_avm_specs),
    make_y4_category("Advanced Data Analysis", "Integrated multi-chart dashboards, caselet business analytics, data sufficiency mastery, and rapid DI approximations.", y4_ada_specs),
    make_y4_category("Speed & Accuracy", "Vedic mathematics shortcuts, mental arithmetic, Modulo-9 digital sums, option elimination, 3-pass time triage, and careless error prevention.", y4_speed_specs, preserved_first=preserved_speed_math),
    make_y4_category("Placement Assessment Preparation", "Recruiter assessment blueprints, IRT adaptive test engines, company profiles (TCS, Infosys, Cognizant, Wipro, Accenture), and proctoring compliance.", y4_recruiter_specs, preserved_first=preserved_recruiter_bp),
    make_y4_category("Final Revision", "Master formula compendium, reasoning decision trees, 1/1 to 1/25 DI tables, top 50 aptitude traps, 80/20 concepts, and full-length mock simulation.", y4_revision_specs)
]

write_year_file(
    filepath="src/data/crtYear4Data.ts",
    var_name="CRT_YEAR_4_DATA",
    year_id=4,
    year_name="4th Year",
    level_title="4th Year Placement Mastery — Speed, Accuracy, Assessment Blueprints & Final Synthesis",
    description="Comprehensive 4th-year placement mastery curriculum designed to maximize student performance under real corporate recruitment assessment conditions through mixed multi-concept sets, Vedic speed mathematics, recruiter blueprints, 3-pass time triage, and diagnostic error auditing.",
    target_focus=[
        "Mixed Quantitative & Logical Mastery: Cross-disciplinary multi-concept challenges and high-difficulty sets (TCS Digital / Infosys DSE)",
        "Advanced Verbal & Data Analysis: Long-form reading comprehension, multi-chart dashboards, and caselet business analytics",
        "Speed, Accuracy & Heuristics: Vedic speed mathematics, Modulo-9 digital sums, option elimination, and 3-pass sectional time triage",
        "Recruiter Preparation & Final Revision: Assessment engine dynamics (IRT), company-specific profiles, master formula sheets, and full-length mock simulations"
    ],
    categories=categories
)
