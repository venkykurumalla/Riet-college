import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from curriculum_generator_core import create_rich_topic, write_year_file

y3_quant_specs = [
    ("y3-quant-adv-number-properties", "Advanced Number Properties & Factorials", "Divisor functions, sum of factors, product of factors, co-prime pairs, and factorial prime power decompositions."),
    ("y3-quant-remainder-theorems", "Remainder Theorems: Euler, Fermat & Wilson", "Euler's Totient function φ(n), Fermat's Little Theorem a^(p-1) ≡ 1 (mod p), and Wilson's theorem (p-1)! ≡ -1 (mod p)."),
    ("y3-quant-unit-digit-cycles", "Unit Digit Cycles & Prime Power in Factorials", "4-step cyclicity rules for powers of digits 2, 3, 7, 8 and Legendre's formula E_p(n!) for finding prime powers in factorials."),
    ("y3-quant-trailing-zeros", "Trailing Zeros in Large Products & Factorials", "Determining the power of 10 in factorials and continuous integer products by counting 5s via Legendre's summation."),
    ("y3-quant-adv-mixtures", "Advanced Mixtures & Repeated Dilutions", "Multi-stage successive replacement formula Final = Initial × (1 - Replacement / Volume)^n and ternary 3-component alligations."),
    ("y3-quant-adv-work-problems", "Advanced Work Problems & Variable Efficiency", "Multi-crew dynamic work schedules, variable individual efficiency scaling, and fractional completion checkpoints."),
    ("y3-quant-alternate-work", "Alternate Work Patterns & Negative Work Destruction", "Alternating day work cycles, identifying integer cycle blocks, and negative destruction rates by opposing agents."),
    ("y3-quant-adv-pipes-cisterns", "Advanced Pipes and Cisterns with Flow Adjustments", "Pipes opening at scheduled intervals, variable leak positions along tank height, and overflowing fluid dynamics."),
    ("y3-quant-adv-relative-speed", "Advanced Relative Speed & Chasing Dynamics", "Relative speeds with delayed departure offsets, variable speed profiles, and dynamic multi-point meeting locations."),
    ("y3-quant-circular-motion-races", "Circular Motion & Linear Race Problems", "Races on linear tracks with distance/time head starts, dead-heats, and circular track meeting point periodicities."),
    ("y3-quant-adv-boats-streams", "Advanced Boats and Streams with Current Shifts", "Variable river current speeds, multi-stage upstream-downstream journeys, and harmonic round-trip travel times."),
    ("y3-quant-adv-train-problems", "Advanced Train Problems with Accelerated Platforms", "Dual train crossings with non-uniform velocity, moving observer references, and multi-span bridge clearings."),
    ("y3-quant-permutations", "Permutations: Restricted Arrangements", "Linear permutations with grouped elements, separated elements, identical items, and circular relative ordering."),
    ("y3-quant-combinations", "Combinations: Selections & Partitions", "Selection criteria, forming committees with gender/skill quotas, distributing identical items into distinct groups."),
    ("y3-quant-adv-probability", "Advanced Probability & Conditional Case Trees", "Multi-stage conditional probability trees, independent and dependent compound events, and selection with/without replacement."),
    ("y3-quant-bayes-theorem", "Bayes' Theorem Applications", "Posterior probability calculation P(A|B) = [P(B|A)P(A)] / P(B), diagnostic testing likelihoods, and reliability engineering models."),
    ("y3-quant-algebraic-inequalities", "Algebraic Inequalities & Modulus Systems", "Wavy curve (sign chart) method for rational inequalities, absolute value modulus equations |x - a| < b, and quadratic bounds."),
    ("y3-quant-adv-polynomial-equations", "Advanced Polynomial Equations & Maxima-Minima", "Vieta's root relations for cubics/quartics, AM-GM inequality for optimization, and finding global/local quadratic extrema."),
    ("y3-quant-sequences-series", "Sequences and Series: Sigma Notations", "Closed-form summation of first n natural numbers Σn, squares Σn², cubes Σn³, and telescoping fraction cancellations."),
    ("y3-quant-arithmetic-progressions", "Arithmetic Progressions (AP Advanced)", "General nth term a_n = a + (n-1)d, sum of n terms S_n = n/2[2a + (n-1)d], arithmetic means, and term selection rules."),
    ("y3-quant-geometric-progressions", "Geometric Progressions & Infinite Series (GP)", "nth term T_n = a·r^(n-1), finite sum S_n = a(r^n - 1)/(r - 1), infinite convergent sum S_∞ = a / (1 - r) for |r| < 1."),
    ("y3-quant-agp-hp", "Arithmetico-Geometric Progressions (AGP) & HP", "Sum of AGP series using common ratio multiplier subtraction, and harmonic progression properties H = 2ab / (a + b)."),
    ("y3-quant-adv-geometry", "Advanced Geometry: Circle Theorems & Cyclic Quads", "Tangent-secant theorem, Ptolemy's theorem for cyclic quadrilaterals, Apollonius theorem, and centroid/incenter coordinates."),
    ("y3-quant-coordinate-geometry", "Coordinate Geometry & Linear Slopes", "Distance formula, section formula, slope of parallel/perpendicular lines, equation of straight lines, and area of polygons."),
    ("y3-quant-adv-mensuration-3d", "Advanced Mensuration 3D: Frustums & Composite Solids", "Volume and surface area of frustum of cones/pyramids, spherical caps, composite melting, and volume ratio scaling."),
    ("y3-quant-clocks", "Clocks: Angular Displacements & Faulty Clocks", "Relative speed between minute and hour hands (5.5° per minute), hand coincidences/right angles, and losing/gaining clock drift."),
    ("y3-quant-calendars", "Calendars: Modulo-7 Day Calculation & Odd Days", "Odd days in ordinary vs leap years, 100/400 year century cycles, and determining the exact day of any historical date.")
]

y3_lr_specs = [
    ("y3-lr-complex-seating", "Complex Seating Arrangements with Multiple Attributes", "Arranging individuals along linear or circular tracks while simultaneously matching professions, ages, and hometowns."),
    ("y3-lr-circular-seating", "Circular Seating: Inward/Outward Mixed Facing", "Radial seating configurations where some participants face the center and others face outward with relative positioning."),
    ("y3-lr-multiple-row-seating", "Multiple-Row & Parallel Seating Arrangements", "Dual and triple parallel rows facing opposite directions with diagonally opposite and immediate opposite constraints."),
    ("y3-lr-floor-puzzles", "Floor-Based Multi-Story Building Logic Puzzles", "Distributing residents across 6 to 10 vertical building floors with vacant floors and adjacent/even-odd floor rules."),
    ("y3-lr-box-puzzles", "Box-Stacking Puzzles with Variable Heights", "Vertical box stacks with positional gap constraints, numbered tiers, and categorical box attributes."),
    ("y3-lr-scheduling-puzzles", "Scheduling & Time-Slot Puzzles with Day Shifts", "Allocating events, conference seminars, or manufacturing shifts across weekdays and multiple daily time slots."),
    ("y3-lr-selection-distribution", "Selection and Distribution Puzzles with Quotas", "Team formation under strict inclusion/exclusion rules, mandatory pairings, and departmental eligibility quotas."),
    ("y3-lr-grouping-problems", "Grouping and Departmental Distribution Problems", "Partitioning individuals into teams with minimum and maximum capacity constraints and cross-team restrictions."),
    ("y3-lr-adv-syllogisms", "Advanced Syllogisms: 'Only a Few' & Possibilities", "Categorical logic with modern qualifiers: 'Only a few A are B', 'Each A is B', 'None except A is B', and possibility Venns."),
    ("y3-lr-adv-statements-conclusions", "Advanced Statements and Conclusions", "Complex propositional arguments requiring formal deductive validity and elimination of assumptive extrapolations."),
    ("y3-lr-statements-arguments", "Statements and Arguments: Strong vs Weak Arguments", "Evaluating argumentative strength based on direct policy relevance, empirical cause-effect, and absence of logical fallacies."),
    ("y3-lr-cause-and-effect", "Cause and Effect Reasoning", "Analyzing paired statements to determine whether one is the cause and the other is the effect, or both are effects of common causes."),
    ("y3-lr-assumptions-inferences", "Assumptions and Inferences in Complex Passages", "Distinguishing implicit necessary assumptions from unstated direct inferences in multi-sentence arguments."),
    ("y3-lr-critical-reasoning", "Critical Reasoning & Argument Flaw Identification", "Isolating hidden assumptions, identifying logical leaps, and spotting informal fallacies (ad hominem, false dilemma)."),
    ("y3-lr-adv-data-sufficiency", "Advanced Data Sufficiency in Logical Reasoning", "Testing uniqueness of family trees, rankings, and seating positions using formal two-statement sufficiency checks."),
    ("y3-lr-complex-matrix-puzzles", "Complex Multi-Attribute Matrix Grids (3+ Parameters)", "Setting up 3D and multi-table elimination matrices to solve 4-variable puzzle prompts systematically."),
    ("y3-lr-analytical-decision-problems", "Analytical Decision-Making & Eligibility Criteria", "Evaluating candidate profile records against multi-tier institutional eligibility criteria and exception rules.")
]

y3_verbal_specs = [
    ("y3-verbal-adv-rc", "Advanced Reading Comprehension: Dense Passages", "Active reading and critical deconstruction of dense 700-word passages across philosophy, economics, and emerging tech."),
    ("y3-verbal-inference-comprehension", "Inference-Based Comprehension & Deductions", "Deriving necessary logical deductions from text while rigorously rejecting plausible but unsupported real-world facts."),
    ("y3-verbal-author-tone", "Author's Tone, Style & Rhetorical Perspective", "Identifying authorial attitude (cynical, laudatory, objective, didactic, polemical, reverent) from lexical choices."),
    ("y3-verbal-main-idea", "Main Idea, Central Thesis & Title Identification", "Isolating the primary overarching argument, filtering out supporting subordinate examples, and choosing accurate titles."),
    ("y3-verbal-critical-reasoning-verbal", "Critical Reasoning — Verbal Argument Analysis", "Deconstructing arguments into Premise, Assumption, and Conclusion; formulating strengtheners and weakeners."),
    ("y3-verbal-adv-para-jumbles", "Advanced Para Jumbles: 6-Sentence Sequences", "Reconstructing 6-sentence disordered narratives using mandatory acronym pairs, chronological pivots, and pronoun referents."),
    ("y3-verbal-sentence-rearrangement", "Sentence Rearrangement & Split Syntax", "Reassembling fragmented sentence clauses by analyzing relative pronoun anchors and subordinate conjunction placements."),
    ("y3-verbal-para-completion", "Paragraph Completion & Coherent Summary Selection", "Selecting concluding sentences that complete the logical argument without introducing extraneous out-of-scope ideas."),
    ("y3-verbal-adv-sentence-correction", "Advanced Sentence Correction & Structural Parallelism", "Enforcing parallel grammatical structures in correlative conjunctions (neither...nor, not only...but also) and comparisons."),
    ("y3-verbal-adv-error-detection", "Advanced Error Detection & Subjunctive Mood Syntax", "Spotting subtle errors: Subjunctive verbs (e.g. 'were he to arrive'), dangling participles, and ambiguous pronoun antecedents."),
    ("y3-verbal-vocab-in-context", "Vocabulary in Context: Nuanced Semantic Connotations", "Distinguishing exact semantic intensity and tone (e.g. frugal vs parsimonious, confident vs arrogant) in context."),
    ("y3-verbal-idiomatic-expressions", "Idiomatic Expressions & Prepositional Collocations", "Standard English idioms, fixed prepositional attachments (e.g., comply with, adhere to, abstain from), and phrasal verbs."),
    ("y3-verbal-logical-connectors", "Logical Connectors & Discourse Markers", "Analyzing how transition words (moreover, nonetheless, consequently, paradoxically) govern argumentation flow."),
    ("y3-verbal-argument-evaluation", "Argument Evaluation & Rhetorical Fallacy Detection", "Identifying formal and informal logical fallacies: post hoc ergo propter hoc, straw man, circular reasoning, and false equivalence.")
]

y3_di_specs = [
    ("y3-di-caselet-di", "Caselet DI: Paragraphs to Structured Data Matrices", "Parsing descriptive narrative text containing nested percentages and market ratios into organized mathematical tables."),
    ("y3-di-multi-table-di", "Multi-Table Complex Data Interpretation", "Correlating data across multiple interdependent tables with cross-referencing row/column parameters."),
    ("y3-di-mixed-graph-di", "Mixed Graph DI: Combined Pie, Bar & Line Charts", "Synthesizing information simultaneously from a pie chart displaying total shares and bar/line charts showing growth."),
    ("y3-di-data-comparison", "Data Comparison & Normalized Indices", "Evaluating comparative growth across multiple entities by normalizing to a common base year index."),
    ("y3-di-multi-step-di", "Multi-Step Cumulative Calculation DI", "Performing multi-stage calculations where intermediate answers serve as inputs for secondary percentage and ratio queries."),
    ("y3-di-approximation-di", "Approximation-Based DI & Fractional Benchmark Anchors", "Using fractional approximations (1/7 ≈ 14.28%, 1/13 ≈ 7.69%) to evaluate complex multi-digit ratios in under 15 seconds."),
    ("y3-di-adv-percentage-di", "Advanced Percentage DI & CAGR Analysis", "Calculating Compound Annual Growth Rate CAGR = (End/Start)^(1/n) - 1 and basis point spreads from financial charts."),
    ("y3-di-adv-ratio-di", "Advanced Ratio DI & Weighted Component Aggregates", "Evaluating weighted component ratios and demographic proportions across multi-year institutional datasets."),
    ("y3-di-missing-data-di", "Data Interpretation with Missing Table Entries", "Reconstructing blank cells in tabulated balance sheets using aggregate totals, row/column averages, and constraints."),
    ("y3-di-adv-data-sufficiency", "Advanced Data Sufficiency in Data Interpretation", "Determining whether provided chart metrics and supplementary statements are sufficient to uniquely compute target values.")
]

y3_analytical_specs = [
    ("y3-an-multi-concept-quant", "Multi-Concept Quantitative Problem Solving", "Integrating geometry, number theory, progressions, and modular arithmetic into unified multi-step challenges."),
    ("y3-an-quant-logical-puzzles", "Quantitative Logical Puzzles & Numerical Grid Deduction", "Solving cryptarithmetic alphametic puzzles (e.g. SEND + MORE = MONEY), magic squares, and operator grids."),
    ("y3-an-constraint-optimization", "Constraint-Based Aptitude Problems & Linear Optimization", "Formulating boundary inequalities to maximize profit or minimize cost under resource capacity limits."),
    ("y3-an-multi-step-placement", "Multi-Step Placement Analytical Challenges", "Comprehensive high-tier placement assessment questions that require synthesizing multiple distinct analytical methods.")
]

def make_y3_category(cat_name, desc, specs):
    topics = []
    for idx, (t_id, title, overview_detail) in enumerate(specs):
        num = idx + 1
        t = create_rich_topic(
            t_id=t_id,
            year_id=3,
            cat=cat_name,
            num=num,
            title=title,
            tagline=f"3rd Year Advanced — Analytical Depth, Complex Models & Placement-Tier Problem Solving",
            est_min=60,
            diff="Advanced",
            overview=f"{title} is a core advanced topic in 3rd-year CRT training. {overview_detail} It bridges theoretical depth with the sophisticated multi-concept problem solving required for premium corporate placement drives.",
            placement_rel=f"Recruiters for premier engineering, software development, and technical consulting roles (TCS Digital, Infosys DSE, Cognizant GenC Next, Accenture) evaluate {title} to identify top-tier analytical talent.",
            weightage="Advanced High-Tier Topic (Core differentiator for premium compensation packages).",
            real_world="Algorithm design, cryptographic hashing, combinatorial network routing, predictive data science, and complex systems architecture.",
            objs=[
                f"Master advanced theorems, complex mathematical models, and deductive frameworks in {title}",
                "Solve multi-concept placement-tier problems within 60 seconds",
                "Apply structured elimination heuristics to eliminate distractors under pressure",
                "Achieve high-percentile benchmark performance in recruitment screening tests"
            ],
            prereqs=["1st and 2nd Year quantitative, reasoning, and verbal curriculum modules"],
            refresher="Ensure solid command of prime factorizations, permutation-combination formulas, and algebraic equation solving.",
            defs=[
                f"Advanced Principle: The theoretical theorem or analytical framework defining {title}.",
                "Closed-Form Equation: A mathematical formula giving exact solutions without numerical iteration.",
                "Symmetry & Invariance: Structural properties that simplify complex multi-variable systems."
            ],
            intuition=f"Advanced problem solving in {title} relies on decomposing complex scenarios into symmetric, modular, or proportional sub-problems.",
            visual="Multi-branching decision tree mapping complex constraints to verified analytical pathways.",
            formulas=[
                {
                    "title": f"Advanced Theorem / Governing Relation ({title})",
                    "formula": "Advanced Closed-Form Mathematical Formulation",
                    "variables": "Core system parameters",
                    "description": f"Standard advanced formula for {title}.",
                    "whenToUse": "Apply across advanced placement-tier problem sets.",
                    "simpleExample": "Direct evaluation under boundary constraints."
                }
            ],
            narrative=[
                f"This advanced chapter provides a rigorous masterclass on {title}.",
                "We deconstruct complex multi-stage problem types and demonstrate how advanced shortcuts cut solution times by up to 75%."
            ],
            deep_dives=[
                {
                    "title": "Advanced Analytical Decomposition",
                    "content": "Techniques for isolating bottlenecks and eliminating multi-variable complexity."
                }
            ],
            variations=[
                {"typeName": "Complex Multi-Stage Problem", "description": "Problems requiring 3+ consecutive analytical transformations."},
                {"typeName": "Constraint Optimization & Extremum", "description": "Finding maximum/minimum values under boundary constraints."}
            ],
            methods_title="Formal Theoretical Derivation vs Advanced Shortcut Heuristic",
            trad_method="Longhand multi-page algebraic derivation (~120s).",
            shortcut_method="Direct application of advanced theorem and boundary invariant (~35s).",
            time_saved="71% time saved",
            mistake_list=[
                {
                    "mistake": "Overlooking boundary exceptions, modular constraints, or parity conditions.",
                    "why": "Applying formulas blindly without verifying that all necessary mathematical preconditions hold.",
                    "avoid": "Always verify that input values satisfy the domain constraints before applying closed-form theorems."
                }
            ],
            tips={
                "timeAllocationSeconds": 60,
                "eliminationTechnique": "Use modular arithmetic, digital roots, and boundary limits to prune 2-3 distractor choices immediately.",
                "questionSelectionAdvice": "Identify the underlying theorem in 10 seconds; if clear, solve immediately. If ambiguous, flag for review.",
                "recruiterInsight": "High accuracy on advanced topics signals strong mathematical rigor and algorithmic maturity."
            },
            practice_title=title,
            rev_bullets=[
                f"Always check the mathematical preconditions before applying theorems in {title}.",
                "Look for symmetry and modular properties to simplify high-exponent or multi-variable problems.",
                "Maintain a systematic error log to eliminate recurring conceptual slips."
            ],
            rev_formulas=["Advanced Theorem Formulation = Standard Closed Form"],
            takeaways=[
                f"Mastery of {title} is a decisive factor in securing premium tier technical placement offers.",
                "Combining analytical depth with high-speed elimination delivers unbeatable test performance."
            ],
            sources=[
                {"sourceName": "Higher Algebra & Quantitative Mastery (Hall & Knight / Arun Sharma)", "sourceType": "Textbook", "referenceNote": "Advanced algebraic theorems, number properties, and progression summations."},
                {"sourceName": "TCS Digital / Infosys DSE Assessment Blueprints", "sourceType": "Corporate Assessment Blueprint", "referenceNote": "Advanced placement problem standards and difficulty matrices."}
            ]
        )
        topics.append(t)
    return {
        "category": cat_name,
        "description": desc,
        "topics": topics
    }

categories = [
    make_y3_category("Advanced Quantitative Aptitude", "Advanced number theory, modular remainders, kinematics, combinatorics, probability, algebra, progressions, geometry, clocks, and calendars.", y3_quant_specs),
    make_y3_category("Advanced Logical Reasoning", "Complex seating grids, floor and box puzzles, scheduling, advanced syllogisms, cause-effect, critical reasoning, and decision tables.", y3_lr_specs),
    make_y3_category("Advanced Verbal Ability", "Dense reading comprehension, inference deduction, author's tone, critical reasoning arguments, 6-sentence para jumbles, and rhetoric.", y3_verbal_specs),
    make_y3_category("Advanced Data Interpretation", "Caselet DI, multi-table analysis, mixed graphs, CAGR, fraction approximations, missing data reconstruction, and data sufficiency.", y3_di_specs),
    make_y3_category("Advanced Analytical Problem Solving", "Multi-concept quantitative challenges, quantitative logical puzzles, constraint optimization, and placement caselets.", y3_analytical_specs)
]

write_year_file(
    filepath="src/data/crtYear3Data.ts",
    var_name="CRT_YEAR_3_DATA",
    year_id=3,
    year_name="3rd Year",
    level_title="3rd Year Advanced CRT — Analytical Depth, Complex Systems & Placement Problem Solving",
    description="Comprehensive 3rd-year advanced curriculum designed to elevate candidates to competitive placement-ready standards across higher number theory, kinematics, combinatorics, multi-floor grid puzzles, dense textual comprehension, and complex multi-chart data analysis.",
    target_focus=[
        "Higher Quantitative Theory: Euler's totient, modular arithmetic, permutations, combinations, Bayes' theorem, AP/GP/AGP, and 3D mensuration",
        "Multi-Dimensional Logical Deduction: Complex seating, floor & box puzzles, scheduling grids, 'only a few' syllogisms, and critical reasoning",
        "Advanced Verbal & Rhetorical Analysis: Dense reading comprehension, deductive inferences, authorial tone, and critical argument analysis",
        "Complex Data Interpretation & Analytics: Caselets, multi-table dashboards, missing data matrices, and CAGR growth models"
    ],
    categories=categories
)
