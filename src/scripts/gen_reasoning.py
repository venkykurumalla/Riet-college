import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from y4_helper import create_topic, write_ts_file
from generate_y4_data import generate_8_examples, generate_practice_set

lr_specs = [
    ("y4-lr-adv-series", "Advanced Number, Letter & Symbol Series", "Polynomial difference sequences, interleaved geometric-prime progressions, and alphanumeric shift matrices."),
    ("y4-lr-adv-coding-decoding", "Advanced Coding-Decoding & Matrix Ciphers", "Modular alphabetical arithmetic, reverse positional indexing, symbol substitution grids, and multi-stage bracket ciphers."),
    ("y4-lr-adv-blood-relations", "Blood Relations: Complex Coded Hierarchies", "Coded binary operators (A+B, A*B), multi-generational family trees, gender-polarity deduction, and maternal/paternal invariants."),
    ("y4-lr-adv-direction-sense", "Direction Sense: 3D Vectors & Shadow Parallax", "Multi-segment displacement vectors, angular turn matrices, sunrise/sunset shadow angles, and shortest Euclidean distance."),
    ("y4-lr-adv-ranking-ordering", "Ranking & Ordering: Overlapping Intervals", "Rank shifts, left/right positional overlaps, maximum/minimum capacity bounding, and cross-column comparisons."),
    ("y4-lr-adv-linear-seating", "Linear Seating Arrangement: Dual Facing Rows", "Parallel linear tracks, alternating facing directions (North/South), unknown total participant counts, and end-position constraints."),
    ("y4-lr-adv-circular-seating", "Circular Seating: Inward/Outward Mixed Facing", "Mixed orientation circular arrangements, radial relative positioning, and angular diametrical pairing."),
    ("y4-lr-adv-complex-seating", "Complex Multi-Attribute Seating Arrangements", "Polygonal seating matrices integrated with professions, favorite colors, companies, and blood relations."),
    ("y4-lr-adv-logical-puzzles", "Multi-Dimensional Floor & Box Logic Puzzles", "Multi-tier grid elimination, vertical floor distributions, box stacking constraints, and parameter exclusivity."),
    ("y4-lr-adv-scheduling-puzzles", "Scheduling & Time-Slot Puzzles", "Conference agenda timing, manufacturing shift rotations, consecutive weekday restrictions, and deadline optimization."),
    ("y4-lr-adv-selection-distribution", "Selection & Distribution Problems", "Conditional team formation, mandatory inclusion/exclusion pairs, quota allocations, and departmental eligibility matrices."),
    ("y4-lr-adv-syllogisms", "Advanced Syllogisms: 'Only a Few' & Possibility Deductions", "Modern categorical syllogisms, 'only a few' conditional bounds, existential possibility Venn diagrams, and negative quantifiers."),
    ("y4-lr-adv-statements-conclusions", "Statements & Definite Logical Conclusions", "Formal deductive logic, non-assumptive validity, universal affirmatives, and direct logical consequence extraction."),
    ("y4-lr-adv-statements-assumptions", "Statements & Implicit Assumptions", "Underlying unstated premises, speaker intent reconstruction, validity bounds, and necessary assumption tests."),
    ("y4-lr-adv-statements-arguments", "Statements & Strong/Weak Arguments", "Evaluating argumentative strength: policy viability, empirical causal evidence, emotional bias avoidance, and logical fallacies."),
    ("y4-lr-adv-cause-effect", "Cause & Effect Analytical Reasoning", "Differentiating direct causation from correlation, common cause manifestations, and temporal consequence chains."),
    ("y4-lr-adv-analytical-reasoning", "Advanced Analytical Reasoning & Figure Counting", "Geometric figure enumeration (triangles, squares, rectangles, lines), network path counts, and logic tree traversals."),
    ("y4-lr-adv-data-sufficiency-lr", "Data Sufficiency in Logical Reasoning", "Evaluating positional uniqueness, family tree completeness, and single-truth resolution across dual statements."),
    ("y4-lr-adv-pattern-reasoning", "Non-Verbal & Abstract Pattern Reasoning", "Geometric spatial rotations, folded paper cube nets, matrix analogies, and mirror/water reflection invariants."),
    ("y4-lr-adv-mixed-reasoning", "Comprehensive Advanced Mixed Reasoning Challenge", "Full-spectrum placement assessment logic challenge integrating deductive, inductive, and spatial reasoning.")
]

topics = []
for idx, (t_id, title, desc) in enumerate(lr_specs):
    slug = t_id.replace("y4-lr-", "")
    num = idx + 1
    easy, inter, adv, pl, mixed = generate_practice_set(slug, title)
    exs = generate_8_examples(slug, title, f"Logical Deductive Principle for {title}")
    
    topic = create_topic(
        t_id=t_id,
        cat="Advanced Logical Reasoning",
        num=num,
        title=title,
        tagline=f"Mastery of {title} — Deductive Proofs, Matrix Constraints & High-Speed Elimination",
        est_min=60,
        diff="Placement-Ready" if num > 10 else "Advanced",
        overview=f"{title} is a critical evaluation component in high-tier corporate placement screenings (TCS Digital/Prime, Infosys DSE, Cognizant, Wipro, Capgemini, and AMCAT). It tests structured analytical thinking, rule-constraint satisfaction, and deductive problem solving under strict time constraints.",
        placement_rel=f"Recruiters use {title} to assess software engineering aptitude, algorithmic decomposition capability, and disciplined logical reasoning.",
        weightage="Core Pillar (Appears in 90%+ of corporate recruitment reasoning sections).",
        real_world="Algorithmic state machines, compiler syntax parsing, database constraint verification, and distributed consensus logic.",
        objs=[
            f"Master core constraint satisfaction and deductive rules for {title}",
            "Construct clean matrix representations and decision grids in under 60 seconds",
            "Eliminate logical contradictions and deceptive distractor options instantaneously",
            "Solve multi-attribute placement puzzles with 100% precision"
        ],
        prereqs=["Basic propositional logic", "Venn diagram sets", "Elementary sequence patterns"],
        refresher="Review fundamental logical connectives (AND, OR, NOT, IF-THEN) and categorical proposition truth tables.",
        defs=[
            f"Logical Framework: The systematic rules governing {title}.",
            "Constraint Satisfaction: Finding an assignment of variables that satisfies all conditional statements simultaneously.",
            "Deductive Invariant: A conclusion that follows necessarily from given premises without external assumption."
        ],
        intuition=f"Logical reasoning in {title} requires mapping raw descriptive constraints into a standardized matrix, grid, or relational tree to expose single-truth pathways.",
        visual="2D multi-attribute grid matrix with binary tick-and-cross elimination marks.",
        formulas=[
            {
                "title": f"Deductive Constraint Rule ({title})",
                "formula": "Premises ⟹ Unique Consistent State",
                "variables": "Set of positive and negative conditions",
                "description": f"Standard deductive rule for {title}.",
                "whenToUse": "Whenever structuring complex multi-variable conditions.",
                "simpleExample": "Grid mapping to discard contradictory branches."
            }
        ],
        narrative=[
            f"This chapter establishes a rigorous blueprint for solving {title}.",
            "We focus on creating structured representations that eliminate mental cognitive overload, enabling rapid deduction without second-guessing."
        ],
        deep_dives=[
            {
                "title": "Grid Representation & Elimination Tactics",
                "content": "Techniques for setting up clean 2D/3D grids and using negative clues to isolate valid configurations."
            },
            {
                "title": "Handling Ambiguous & Multi-Possibility Cases",
                "content": "Branching into parallel sub-cases and pruning invalid branches upon hitting contradiction."
            }
        ],
        variations=[
            {"typeName": "Direct Deductive Scenarios", "description": "Single-track linear deductions with clear positive constraints."},
            {"typeName": "Mixed Orientation & Inverted Clues", "description": "Scenarios involving bidirectional cues, negation, and dual facing directions."},
            {"typeName": "Multi-Variable Complex Matrix", "description": "Puzzles mapping 4+ independent attributes simultaneously."}
        ],
        examples=exs,
        alt_method={
            "title": "Mental Tracking vs Structured 2D Grid Mapping",
            "methods": [
                {
                    "methodName": "Mental Intuitive Reasoning",
                    "steps": ["Read clues sequentially", "Hold multiple states in working memory"],
                    "prosAndCons": "High cognitive strain with 40%+ risk of oversight on complex constraints.",
                    "whenToUse": "Only for simple 1-step linear problems."
                },
                {
                    "methodName": "Systematic Matrix Cross-Elimination",
                    "steps": ["Draw grid", "Mark definite clues", "Prune contradicted cells", "Read final solution"],
                    "prosAndCons": "Zero ambiguity, guaranteed accuracy, and scalable to 6-variable puzzles.",
                    "whenToUse": "Essential for high-stakes placement puzzle sets (TCS, Infosys, Capgemini)."
                }
            ]
        },
        shortcuts={
            "title": f"Speed Shortcut for {title}",
            "traditionalVsShortcut": {
                "traditionalMethod": "Trial-and-error narrative parsing (~120s).",
                "shortcutMethod": "Direct grid elimination of extreme conditions (~40s).",
                "timeSavedPercent": "66% time saved"
            },
            "rulesForApplication": [
                "Always anchor the solution around the most constrained parameter (the bottleneck variable).",
                "Scan options before full puzzle resolution to see if partial deduction solves the question."
            ]
        },
        mistakes=[
            {
                "mistake": "Making unstated real-world assumptions instead of sticking strictly to given premises.",
                "whyItHappens": "Conflating everyday common sense with formal deductive constraints.",
                "howToAvoid": "Treat every clue as a mathematical axiom with zero external assumption."
            }
        ],
        tips={
            "timeAllocationSeconds": 60,
            "eliminationTechnique": "Check options against negative clues first; invalid options usually violate basic negative statements.",
            "questionSelectionAdvice": "Attempt if the clue set has direct anchor points; defer if all clues are relative and involve 3+ nested cases.",
            "recruiterInsight": "High accuracy in puzzle sections signals strong analytical debugging and architectural mindset to tech recruiters."
        },
        p_easy=easy,
        p_inter=inter,
        p_adv=adv,
        p_placement=pl,
        mixed=mixed,
        rev_bullets=[
            f"Always extract definite anchor clues first in {title}.",
            "Use binary matrix elimination to prevent working memory overload.",
            "Validate final configuration against every clue in the original prompt."
        ],
        rev_formulas=[
            "Total = Left + Right - 1 (Linear Overlap)",
            "Possibility ∧ Contradiction = False"
        ],
        takeaways=[
            f"Mastery of {title} provides a massive competitive advantage in technical recruitment tests.",
            "Disciplined matrix structuring transforms complex puzzles into routine mechanical executions."
        ],
        sources=[
            {"sourceName": "A Modern Approach to Logical Reasoning (R.S. Aggarwal)", "sourceType": "Textbook", "referenceNote": "Comprehensive logical taxonomy and analytical models."},
            {"sourceName": "Infosys & TCS Assessment Guidelines", "sourceType": "Corporate Assessment Blueprint", "referenceNote": "Standard reasoning test weights and puzzle formats."}
        ]
    )
    topics.append(topic)

write_ts_file("src/data/crtYear4/reasoningTopics.ts", "CRT_Y4_REASONING_TOPICS", topics)
