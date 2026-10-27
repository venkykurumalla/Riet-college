import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from y4_helper import create_topic, write_ts_file
from generate_y4_data import generate_8_examples, generate_practice_set

# Let's extract the two existing topics from src/data/crtYear4Data.ts if possible
existing_topics = []
try:
    with open("src/data/crtYear4Data.ts", "r", encoding="utf-8") as f:
        content = f.read()
        start = content.find("{\n  \"yearId\": 4,")
        if start == -1:
            start = content.find("{\n  \"yearId\": 4")
        if start == -1:
            start = content.find("{")
        end = content.rfind("}") + 1
        raw = content[start:end]
        data = json.loads(raw)
        for cat in data.get("categories", []):
            for top in cat.get("topics", []):
                existing_topics.append(top)
except Exception as e:
    print(f"Extraction error: {e}")

print(f"Found {len(existing_topics)} existing topics in Year 4 data.")

strategy_specs = [
    ("y4-strat-mental-calculation", "Mental Calculation Techniques: Left-to-Right Arithmetic & Complements", "Left-to-right addition/subtraction, base-100/1000 complements, instant squaring of numbers near reference bases."),
    ("y4-strat-approximation", "High-Velocity Approximation Techniques & Reciprocal Baselines", "Reciprocal fraction multipliers (1/7 = 0.1428, 1/8 = 0.125), bounding invariants, percentage anchor points, and error estimation."),
    ("y4-strat-percentage-ratio-shortcuts", "Percentage & Ratio Shortcuts: Successive Changes & Multipliers", "Successive percentage change formulas (a + b + ab/100), inverse percentage multipliers, and cross-ratio scaling."),
    ("y4-strat-average-deviation-shortcuts", "Average & Mixture Shortcuts: Center of Gravity & Allegations", "Deviation method for large datasets, visual alligation balances, and multi-stage replacement shortcuts."),
    ("y4-strat-elimination-techniques", "Systematic Option Elimination: Parity, Digital Roots & Outliers", "Unit-digit parity filters, Modulo-9 digital sums, magnitude bounding, and extreme outlier pruning in under 5 seconds."),
    ("y4-strat-time-management-triage", "3-Pass Sectional Time Triage: The Green-Yellow-Red Protocol", "Allocating 25% of time to instant solves (Green), 50% to medium calculations (Yellow), and 25% to review/triage (Red)."),
    ("y4-strat-common-traps", "Common Aptitude & Reasoning Traps: Distractor Deconstruction", "Off-by-one errors, inverse ratio distractors, premature rounding pitfalls, and negative word phrasing traps."),
    ("y4-strat-exam-day-playbook", "Exam-Day Mental Conditioning & Strategic Execution", "Peak cognitive performance readiness, managing test anxiety, interface navigation discipline, and zero-panic recovery protocols.")
]

topics = []

# If we extracted existing topics, keep them first
if len(existing_topics) >= 1:
    topics.append(existing_topics[0]) # y4-strat-speed-math-shortcuts
if len(existing_topics) >= 2:
    topics.append(existing_topics[1]) # y4-strat-recruiter-patterns

# Now append the remaining 8 new strategy topics
for idx, (t_id, title, desc) in enumerate(strategy_specs):
    slug = t_id.replace("y4-strat-", "")
    num = len(topics) + 1
    easy, inter, adv, pl, mixed = generate_practice_set(slug, title)
    exs = generate_8_examples(slug, title, f"Speed Heuristic / Strategy for {title}")
    
    topic = create_topic(
        t_id=t_id,
        cat="Placement Strategy & Shortcuts",
        num=num,
        title=title,
        tagline=f"Mastery of {title} — Computational Velocity, Cognitive Triage & Tactical Test Execution",
        est_min=60,
        diff="Placement-Ready",
        overview=f"{title} represents an indispensable strategic asset for competitive campus recruitment examinations (TCS NQT/Digital, Infosys, Capgemini, Cognizant, Wipro, Accenture, and AMCAT). It transforms high-stress timed testing into disciplined, high-speed execution.",
        placement_rel=f"Recruiters evaluate candidate performance under strict sectional limits where velocity heuristics in {title} make the difference between an 80th percentile and a 99th percentile qualifying score.",
        weightage="Strategic Multiplier (Impacts score throughput by 40%–60% across all sections).",
        real_world="High-velocity data processing, incident response triage, rapid risk estimation, and tactical engineering execution under constraints.",
        objs=[
            f"Master practical mental shortcuts, calculation rules, and triage heuristics in {title}",
            "Eliminate 50%–75% of multiple-choice distractors in under 5 seconds",
            "Optimize sectional time allocation and score throughput in high-stakes online tests",
            "Eliminate calculation and comprehension errors under exam-day pressure"
        ],
        prereqs=["Basic arithmetic operations", "Percentage equivalents", "Standard aptitude question formats"],
        refresher="Review fundamental fraction-to-percentage tables and baseline modular arithmetic concepts.",
        defs=[
            f"Strategic Framework: The systematic operational principles governing {title}.",
            "Throughput Efficiency: Ratio of correctly solved questions to total available test duration.",
            "Distractor Pruning: Systematic discard of mathematically inconsistent choices before attempting full calculation."
        ],
        intuition=f"Strategic success in {title} stems from recognizing that multiple-choice tests are tests of elimination and estimation, not long-form academic derivations.",
        visual="Color-coded 3-Pass time triage flowchart mapping problems to Green, Yellow, and Red priority queues.",
        formulas=[
            {
                "title": "Successive Percentage Shift",
                "formula": "Net Change = a + b + (a × b)/100",
                "variables": "a, b = percentage changes with appropriate sign (+ for increase, - for decrease)",
                "description": "Computes instantaneous net effect of two successive percentage adjustments.",
                "whenToUse": "Whenever dealing with compounded inflation, profit markups, or discounts.",
                "simpleExample": "+20% followed by -10%: Net = 20 - 10 + [20 × (-10)]/100 = 10 - 2 = +8%."
            }
        ],
        narrative=[
            f"This chapter presents an actionable playbook for mastering {title}.",
            "We systematically dismantle mechanical calculation habits, replacing them with left-to-right mental estimates, complement techniques, and strategic triage."
        ],
        deep_dives=[
            {
                "title": "The Left-to-Right Mental Arithmetic Principle",
                "content": "Why processing the most significant digits first enables instant estimation and distractor elimination."
            },
            {
                "title": "Combating Psychological Test Fatigue",
                "content": "Techniques for maintaining cognitive focus and peak accuracy across 2+ hour multi-section assessments."
            }
        ],
        variations=[
            {"typeName": "Direct Mental Shortcuts", "description": "Applying specific Vedic or arithmetic shortcuts to reduce calculation duration."},
            {"typeName": "Option-Based Reverse Verification", "description": "Substituting option values into given constraints to find matching solutions in seconds."},
            {"typeName": "Time Triage Scenarios", "description": "Executing dynamic pass-selection across unfamiliar question sets."}
        ],
        examples=exs,
        alt_method={
            "title": "Standard High-School Math vs Competitive Aptitude Shortcut",
            "methods": [
                {
                    "methodName": "Traditional High-School Algebraic Method",
                    "steps": ["Write complete variable declarations", "Perform step-by-step arithmetic long-hand"],
                    "prosAndCons": "Guarantees formal proof but exhausts 90–120 seconds per question.",
                    "whenToUse": "Only for non-timed subjective examinations."
                },
                {
                    "methodName": "High-Velocity Competitive Heuristic",
                    "steps": ["Check unit digits/digital sum", "Estimate bounds", "Eliminate flawed choices", "Verify match"],
                    "prosAndCons": "Delivers verified correct answer in 15–30 seconds with 99% reliability.",
                    "whenToUse": "Mandatory for all campus recruitment online assessments."
                }
            ]
        },
        shortcuts={
            "title": f"Core Speed Rule for {title}",
            "traditionalVsShortcut": {
                "traditionalMethod": "Lengthy pencil calculation (~90s).",
                "shortcutMethod": "Mental shortcut estimation (~20s).",
                "timeSavedPercent": "78% time saved"
            },
            "rulesForApplication": [
                "Always scan all 4 answer options before lifting the pen to calculate.",
                "If the difference between options is large (>10%), round numbers aggressively."
            ]
        },
        mistakes=[
            {
                "mistake": "Calculating out to 4 decimal places when options differ by full integers.",
                "whyItHappens": "Mechanical habit of over-precision without checking option precision requirements.",
                "howToAvoid": "Check option precision first; calibrate calculation depth to the minimum required to distinguish options."
            }
        ],
        tips={
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Use terminal digits, digital roots, and bounds to discard 2 options before calculating.",
            "questionSelectionAdvice": "Apply these shortcuts universally across every quantitative and reasoning section.",
            "recruiterInsight": "High speed-efficiency candidates stand out in recruitment dashboards and are prioritized for advanced technical interviews."
        },
        p_easy=easy,
        p_inter=inter,
        p_adv=adv,
        p_placement=pl,
        mixed=mixed,
        rev_bullets=[
            f"Always check the options before beginning calculations in {title}.",
            "Use left-to-right mental estimation for rapid order-of-magnitude bounds.",
            "Apply the 3-Pass sectional time triage to ensure no easy questions are missed."
        ],
        rev_formulas=[
            "Net Percentage = a + b + ab/100",
            "Throughput = Accurate Solves / Available Time"
        ],
        takeaways=[
            f"Mastery of {title} turns the clock from an adversary into an advantage in placement tests.",
            "Combining speed arithmetic with systematic elimination produces consistent 95%+ sectional percentiles."
        ],
        sources=[
            {"sourceName": "Vedic Mathematics (Swami Bharati Krishna Tirtha)", "sourceType": "Textbook", "referenceNote": "Sutras for mental arithmetic, base multiplication, and duplex squaring."},
            {"sourceName": "RIET Placement Cell Training Framework", "sourceType": "Institutional Framework", "referenceNote": "Strategic testing protocols, time triage algorithms, and error remediation."}
        ]
    )
    topics.append(topic)

# Ensure all topics have correct numbering
for idx, t in enumerate(topics):
    t["topicNumber"] = idx + 1
    t["category"] = "Placement Strategy & Shortcuts"

write_ts_file("src/data/crtYear4/strategyTopics.ts", "CRT_Y4_STRATEGY_TOPICS", topics)
