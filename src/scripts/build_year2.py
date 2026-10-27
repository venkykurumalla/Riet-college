import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from curriculum_generator_core import create_rich_topic, write_year_file

y2_quant_specs = [
    ("y2-quant-adv-ratio-prop", "Advanced Ratio and Proportion", "Compound ratios, duplicate/triplicate ratios, continued proportions, and proportional distribution with scaling constants."),
    ("y2-quant-partnership", "Partnership Arithmetic", "Investment capital and duration products, active vs sleeping partner compensation, and profit sharing distributions."),
    ("y2-quant-mixtures-allegations", "Mixtures and Allegations", "Rule of alligation, mean price balance line, two-component blending ratios, and concentration calculations."),
    ("y2-quant-compound-interest", "Compound Interest", "Annual, semi-annual, quarterly compounding formulas, effective rate of interest, and CI - SI difference formulas for 2 and 3 years."),
    ("y2-quant-discounts", "Discounts & Marked Price", "Marked price markup percentages, successive trade discounts series, cash discounts, and net selling price equations."),
    ("y2-quant-successive-percentages", "Successive Percentage Applications", "Net change formula: a + b + (ab/100), compounded population growth, geometric asset depreciation, and revenue scaling."),
    ("y2-quant-adv-averages", "Advanced Averages & Weighted Means", "Weighted average formula Σ(w·x)/Σw, deviation method for large values, and replacement/addition shifts in groups."),
    ("y2-quant-time-work", "Time and Work Fundamentals", "Unitary work rate method, total work LCM model, combined efficiency equations, and individual completion times."),
    ("y2-quant-work-wages", "Work and Wages", "Distributing total earnings strictly proportional to total work done and individual daily efficiency ratios."),
    ("y2-quant-pipes-cisterns", "Pipes and Cisterns Basics", "Inlet filling rates (positive work), outlet emptying rates (negative work), and net tank filling time calculations."),
    ("y2-quant-tsd-fundamentals", "Time, Speed and Distance Fundamentals", "Speed-distance-time relationships, unit conversions (km/h × 5/18 = m/s), average speed across equal distance intervals."),
    ("y2-quant-relative-speed", "Relative Speed", "Relative velocity for objects in same direction (S1 - S2) vs opposite directions (S1 + S2), and meeting point calculations."),
    ("y2-quant-problems-trains", "Problems on Trains", "Train crossing stationary point objects (poles/people) vs moving platforms/bridges, total length additions, and passing times."),
    ("y2-quant-boats-streams", "Boats and Streams", "Downstream speed (u + v), upstream speed (u - v), still-water speed u = (D + U)/2, and stream speed v = (D - U)/2."),
    ("y2-quant-algebraic-expressions", "Algebraic Expressions", "Polynomial expansions, algebraic identities (a+b)³, (a-b)³, a³+b³+c³-3abc, simplification, and degree reductions."),
    ("y2-quant-linear-equations", "Linear Equations", "Simultaneous linear equations in two variables, elimination and substitution methods, and unique/infinite/no solution conditions."),
    ("y2-quant-quadratic-equations", "Quadratic Equations", "Roots of ax² + bx + c = 0, discriminant D = b² - 4ac, nature of roots, sum of roots (-b/a), and product of roots (c/a)."),
    ("y2-quant-basic-geometry", "Basic Geometry", "Angle properties of parallel lines, triangle angle-sum theorem, congruence and similarity criteria, and Pythagoras theorem."),
    ("y2-quant-basic-mensuration", "Basic Mensuration 2D", "Perimeter and area formulas for triangles (Heron's formula), rectangles, squares, rhombuses, trapeziums, and circles."),
    ("y2-quant-probability-fundamentals", "Probability Fundamentals", "Classical probability P(E) = n(E)/n(S), mutually exclusive events, independent coin tosses, dice rolls, and standard card decks.")
]

y2_lr_specs = [
    ("y2-lr-adv-coding", "Advanced Coding-Decoding", "Matrix coding grids, conditional multi-rule coding, symbol-based operations, and reverse alphabetical shifts."),
    ("y2-lr-symbol-coding", "Symbol-Based Coding", "Replacing standard mathematical operators (+, -, ×, ÷) with arbitrary symbols and evaluating expression validity."),
    ("y2-lr-adv-blood-relations", "Advanced Blood Relations", "Coded binary relational operators (e.g., P $ Q means P is mother of Q), family pedigree charts, and polarity deduction."),
    ("y2-lr-complex-direction", "Complex Direction Problems", "Multi-segment displacement vectors, angular turns (45°, 90°, 135°), shortest straight-line distance, and relative final positioning."),
    ("y2-lr-ordering-sequencing", "Ordering and Sequencing", "Comparing items across multiple quantitative dimensions (height, weight, age, marks), rank boundaries, and linear order."),
    ("y2-lr-venn-diagrams", "Venn Diagram Problems", "2-set and 3-set Venn diagrams, calculating intersections, exclusive single-set regions, and universal complement counts."),
    ("y2-lr-syllogisms", "Syllogisms Fundamentals", "Categorical syllogism propositions: Universal Affirmative (All), Particular Affirmative (Some), Universal Negative (No), and Venn checks."),
    ("y2-lr-statements-conclusions", "Statements and Conclusions", "Evaluating definite logical conclusions that follow directly from given factual statements without external assumptions."),
    ("y2-lr-statements-assumptions", "Statements and Assumptions", "Identifying valid implicit assumptions that the speaker/author necessarily took for granted in making a statement."),
    ("y2-lr-data-sufficiency-intro", "Data Sufficiency — Introduction", "Understanding the 5 standard Data Sufficiency decision choices; testing Statement 1 alone, 2 alone, both, or neither."),
    ("y2-lr-basic-seating", "Basic Seating Arrangement", "Single-row linear seating arrangements facing a common direction, identifying immediate neighbors, and extreme end positions."),
    ("y2-lr-linear-arrangement", "Linear Arrangement", "Dual parallel row linear arrangements facing each other (North vs South), relative lateral positioning, and vacant slots."),
    ("y2-lr-logical-connectives", "Logical Connectives", "Truth values of conditional statements (IF p THEN q), contrapositive equivalence (~q ⟹ ~p), and converse/inverse fallacies."),
    ("y2-lr-mathematical-reasoning", "Mathematical Reasoning", "Solving mathematical puzzles, inserting missing arithmetic signs, balancing equations, and grid matrix arithmetic.")
]

y2_verbal_specs = [
    ("y2-verbal-adv-tenses", "Advanced Tenses & Sequence of Tenses", "Past perfect vs simple past, future perfect continuous, conditional if-clauses (zero, first, second, third conditionals)."),
    ("y2-verbal-error-detection", "Error Detection", "Spotting grammatical errors in split sentence sections: Subject-verb concord, tense shifts, pronoun cases, and modifiers."),
    ("y2-verbal-sentence-improvement", "Sentence Improvement & Phrase Replacement", "Replacing underlined sentence segments with grammatically superior, concise, and idiomatically correct alternatives."),
    ("y2-verbal-sentence-completion", "Sentence Completion", "Single-blank vocabulary and grammatical completion using contextual clues, tone consistency, and transition markers."),
    ("y2-verbal-contextual-vocab", "Contextual Vocabulary & Collocations", "Words with multiple distinct meanings across contexts, standard professional collocations, and idiomatic word pairings."),
    ("y2-verbal-word-usage", "Word Usage & Confusable Words", "Distinguishing commonly confused word pairs: affect/effect, discrete/discreet, principal/principle, elicit/illicit."),
    ("y2-verbal-para-completion", "Paragraph Completion", "Selecting the most logically consistent, tone-coherent concluding sentence that summarizes and resolves a paragraph."),
    ("y2-verbal-basic-para-jumbles", "Basic Para Jumbles", "Reordering 4 jumbled sentences (A, B, C, D) by identifying mandatory pronoun pairs, noun-first rules, and chronological markers."),
    ("y2-verbal-rc-foundation", "Reading Comprehension — Foundation", "Locating direct factual answers in passage text, identifying central themes, and summarizing individual paragraphs."),
    ("y2-verbal-vocab-in-context", "Vocabulary in Context", "Deducing the precise meaning of unfamiliar academic and business vocabulary from surrounding sentence context.")
]

y2_data_specs = [
    ("y2-di-bar-graphs", "Bar Graphs", "Interpreting vertical, horizontal, and grouped bar charts; calculating absolute differences, group totals, and percentage shares."),
    ("y2-di-line-graphs", "Line Graphs", "Analyzing multi-series trend lines, identifying peak periods, calculating slope rates of change, and period-over-period growth."),
    ("y2-di-pie-charts", "Pie Charts", "Converting sector angles (360° total) to percentages (100% total), calculating sub-group values, and multi-pie chart comparisons."),
    ("y2-di-percentage-di", "Percentage-Based DI", "Calculating percentage growth, percentage decline, and relative percentage point differences directly from graphical data."),
    ("y2-di-ratio-di", "Ratio-Based DI", "Formulating simplified ratios between distinct categories, years, or demographic groups from chart datasets."),
    ("y2-di-average-di", "Average-Based DI", "Computing multi-year arithmetic averages, moving group averages, and weighted average metrics from graphical displays.")
]

def make_y2_category(cat_name, desc, specs):
    topics = []
    for idx, (t_id, title, overview_detail) in enumerate(specs):
        num = idx + 1
        t = create_rich_topic(
            t_id=t_id,
            year_id=2,
            cat=cat_name,
            num=num,
            title=title,
            tagline=f"2nd Year Intermediate — Applied Principles, Multi-Step Problem Solving & Analytical Fluency",
            est_min=50,
            diff="Intermediate",
            overview=f"{title} is an essential intermediate topic in 2nd-year CRT training. {overview_detail} It bridges foundational mathematical principles with applied problem-solving techniques commonly tested in corporate technical and general aptitude assessments.",
            placement_rel=f"Corporate recruitment evaluations (TCS NQT, Infosys, Cognizant, Wipro, Accenture) feature {title} heavily in their numerical and logical screening sections.",
            weightage="Core Intermediate Topic (Appears in 80%+ of standard corporate placement assessment rounds).",
            real_world="Applied financial modeling, commercial transactions, algorithmic scheduling, operations research, and structured technical reasoning.",
            objs=[
                f"Master intermediate principles, formulas, and operational models of {title}",
                "Execute multi-step problem transformations in under 50 seconds",
                "Apply structured shortcut methods to eliminate unnecessary calculation steps",
                "Build problem-solving fluency in preparation for 3rd-year advanced analytical aptitude"
            ],
            prereqs=["1st Year foundational arithmetic, reasoning, and grammar modules"],
            refresher="Review fundamental ratio scaling, basic percentage formulas, and linear algebraic reductions before beginning.",
            defs=[
                f"Intermediate Principle: The governing mathematical or logical rule defining {title}.",
                "Operating Formula / Matrix: The algebraic equation or deductive grid used for multi-step resolution.",
                "Boundary Constraint: Limits and conditions that define valid solutions."
            ],
            intuition=f"Intermediate mastery in {title} requires recognizing problem patterns quickly and converting narrative word problems into structured equations or matrices.",
            visual="Structured 3-step decision flow connecting given variables to equation setup and final evaluation.",
            formulas=[
                {
                    "title": f"Governing Relationship ({title})",
                    "formula": "Standard Governing Equation",
                    "variables": "Core problem parameters",
                    "description": f"Standard formula for {title}.",
                    "whenToUse": "Apply across intermediate problem sets.",
                    "simpleExample": "Direct evaluation under standard values."
                }
            ],
            narrative=[
                f"In this intermediate chapter on {title}, we move beyond basic definitions to multi-step problem solving.",
                "We break down common question variations and demonstrate how to structure scratchwork cleanly to minimize errors under timed conditions."
            ],
            deep_dives=[
                {
                    "title": "Systematic Problem Formulation",
                    "content": "Techniques for setting up equations without redundant intermediate steps."
                }
            ],
            variations=[
                {"typeName": "Direct Intermediate Application", "description": "Applying governing formulas across standard multi-variable constraints."},
                {"typeName": "Inverse & Comparative Problems", "description": "Comparing two states or solving for initial conditions from final results."}
            ],
            methods_title="Standard Step-by-Step Method vs Proportional / Shortcut Technique",
            trad_method="Traditional multi-line algebraic substitution (~90s).",
            shortcut_method="Direct application of proportional scaling and mental formulas (~30s).",
            time_saved="67% time saved",
            mistake_list=[
                {
                    "mistake": "Applying formulas without checking unit compatibility (e.g., mixing km/h and m/s).",
                    "why": "Rushing through calculation setup without converting all variables to standard units.",
                    "avoid": "Always harmonize all units (time in seconds/hours, distances in meters/kilometers) before writing formulas."
                }
            ],
            tips={
                "timeAllocationSeconds": 50,
                "eliminationTechnique": "Use option bounds, unit digits, and parity to discard 2 distractor options immediately.",
                "questionSelectionAdvice": "Attempt intermediate questions steadily; they form the bulk of qualifying score cutoffs.",
                "recruiterInsight": "Recruiters evaluate intermediate topics to assess practical problem-solving competence and speed."
            },
            practice_title=title,
            rev_bullets=[
                f"Always state the governing relationship clearly for {title}.",
                "Harmonize all units before starting computational steps.",
                "Use answer choices to guide the precision level required for calculations."
            ],
            rev_formulas=["Operating Relationship = Standard Form"],
            takeaways=[
                f"Mastery of {title} provides the essential stepping stone to advanced 3rd-year analytical problem solving.",
                "Practicing multi-step intermediate problems builds the speed and stamina required for placement success."
            ],
            sources=[
                {"sourceName": "Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)", "sourceType": "Textbook", "referenceNote": "Intermediate problem taxonomies and arithmetic methods."},
                {"sourceName": "A Modern Approach to Logical Reasoning (R.S. Aggarwal)", "sourceType": "Textbook", "referenceNote": "Standard reasoning puzzles and deductive models."}
            ]
        )
        topics.append(t)
    return {
        "category": cat_name,
        "description": desc,
        "topics": topics
    }

categories = [
    make_y2_category("Quantitative Aptitude", "Intermediate applied mathematics: Partnership, mixtures, compound interest, discounts, time-work, TSD, trains, boats, and quadratic equations.", y2_quant_specs),
    make_y2_category("Logical Reasoning", "Intermediate deductive reasoning: Advanced coding, coded blood relations, direction paths, Venn diagrams, syllogisms, and seating.", y2_lr_specs),
    make_y2_category("Verbal Ability", "Intermediate English fluency: Advanced tenses, error detection, sentence improvement, contextual vocab, and paragraph completion.", y2_verbal_specs),
    make_y2_category("Data Interpretation", "Intermediate graphical analysis: Bar graphs, line graphs, pie charts, percentage DI, ratio DI, and average DI.", y2_data_specs)
]

write_year_file(
    filepath="src/data/crtYear2Data.ts",
    var_name="CRT_YEAR_2_DATA",
    year_id=2,
    year_name="2nd Year",
    level_title="2nd Year Intermediate CRT — Applied Numerical, Logical & Verbal Aptitude",
    description="Comprehensive 2nd-year intermediate curriculum designed to expand problem-solving capabilities across applied commercial mathematics, kinematic systems, categorical deductions, grammar improvement, and standard graph interpretation.",
    target_focus=[
        "Applied Commercial Arithmetic: Partnership, mixtures, compound interest, discounts, and successive percentages",
        "Kinematics & Work Systems: Time & work, pipes & cisterns, relative speed, trains, and boats & streams",
        "Intermediate Deductive Logic: Coded blood relations, Venn diagrams, categorical syllogisms, and linear seating",
        "Applied Verbal & Data Interpretation: Sentence improvement, error detection, para jumbles, and bar/line/pie charts"
    ],
    categories=categories
)
