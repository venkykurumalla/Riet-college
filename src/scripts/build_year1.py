import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from curriculum_generator_core import create_rich_topic, write_year_file

y1_quant_specs = [
    ("y1-quant-num-sys", "Number System Fundamentals", "Classification of real numbers, prime vs composite integers, place value representations, and parity arithmetic."),
    ("y1-quant-divisibility", "Divisibility Basics", "Divisibility tests for 2, 3, 4, 5, 6, 8, 9, 10, and 11 with multi-digit application rules."),
    ("y1-quant-hcf-lcm", "HCF and LCM Fundamentals", "Prime factorization methods, division algorithms, and the fundamental product theorem: HCF(a,b) × LCM(a,b) = a × b."),
    ("y1-quant-fractions-decimals", "Fractions and Decimals", "Proper, improper, mixed fractions, recurring decimals to vulgar fractions, and order comparisons."),
    ("y1-quant-simplification", "Simplification & BODMAS / PEMDAS", "Order of operations, bracket nesting hierarchy, surds, and basic algebraic identity expansions."),
    ("y1-quant-basic-percentages", "Basic Percentages", "Percentage-fraction equivalences (1/2 to 1/20), percentage of a quantity, and base reference conversions."),
    ("y1-quant-basic-ratio", "Basic Ratio", "Ratio scaling, simplifying antecedent and consequent terms, and proportional division of total quantities."),
    ("y1-quant-basic-proportion", "Basic Proportion", "Direct and inverse proportions, mean proportionals, third and fourth proportionals."),
    ("y1-quant-basic-averages", "Basic Averages", "Arithmetic mean formula: Sum of observations / Number of observations, and balancing deviation concepts."),
    ("y1-quant-basic-profit-loss", "Basic Profit and Loss", "Cost price (CP), Selling price (SP), profit percentage, loss percentage, and break-even calculations."),
    ("y1-quant-basic-simple-interest", "Basic Simple Interest", "Simple interest equation SI = (P × R × T) / 100, total amount calculations, and rate-time scaling."),
    ("y1-quant-basic-ages", "Basic Problems on Ages", "Translating age statements across past, present, and future into single-variable linear equations.")
]

y1_lr_specs = [
    ("y1-lr-number-series", "Number Series", "Identifying arithmetic step differences, geometric ratios, square/cube sequences, and alternating patterns."),
    ("y1-lr-letter-series", "Letter Series", "Alphabetical positional indexing (A=1 to Z=26), forward/backward skips, and periodic modular cycling."),
    ("y1-lr-analogy", "Analogy", "Identifying semantic, mathematical, and functional pair relationships: A is to B as C is to D."),
    ("y1-lr-classification", "Classification", "Grouping items sharing common mathematical, logical, or semantic characteristics."),
    ("y1-lr-odd-one-out", "Odd One Out", "Isolating the unique non-conforming element within numerical and verbal clusters."),
    ("y1-lr-basic-coding", "Basic Coding-Decoding", "Letter-to-letter shifting (Caesar shifts), letter-to-number substitutions, and direct symbol mappings."),
    ("y1-lr-basic-blood-relations", "Basic Blood Relations", "Mapping maternal and paternal family trees, generations, and direct relationship designations."),
    ("y1-lr-basic-direction", "Basic Direction Sense", "Cardinal and ordinal directions (N, S, E, W, NE, NW, SE, SW), right/left turns, and Pythagoras distance."),
    ("y1-lr-ranking-basics", "Ranking Basics", "Linear position formula: Total = Left + Right - 1, and single-shift position adjustments."),
    ("y1-lr-alphabetical-reasoning", "Alphabetical Reasoning", "Dictionary word ordering, letter-word arrangements, and letter-pair distance matching.")
]

y1_verbal_specs = [
    ("y1-verbal-parts-of-speech", "Parts of Speech", "Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections in context."),
    ("y1-verbal-basic-tenses", "Basic Tenses", "Present, past, and future simple and continuous tenses with correct auxiliary verbs."),
    ("y1-verbal-articles", "Articles", "Definite article 'The' vs indefinite articles 'A' and 'An', vowel sound rules, and zero article cases."),
    ("y1-verbal-prepositions", "Prepositions", "Prepositions of time (at, on, in), place, direction, and common prepositional phrase attachments."),
    ("y1-verbal-subject-verb-agreement", "Subject-Verb Agreement", "Singular/plural subject concord, intervening prepositional phrases, and collective noun rules."),
    ("y1-verbal-basic-vocabulary", "Basic Vocabulary", "Core academic and professional word roots, prefixes, suffixes, and dictionary definitions."),
    ("y1-verbal-synonyms-antonyms", "Synonyms and Antonyms", "Direct word pairings with identical and opposite semantic meanings in standard English."),
    ("y1-verbal-basic-sentence-correction", "Basic Sentence Correction", "Correcting fundamental syntax errors, fragmented clauses, and incorrect auxiliary verb usage.")
]

y1_data_specs = [
    ("y1-data-reading-tables", "Reading Tables", "Extracting row and column entries, locating intersections, and calculating basic row/column sums."),
    ("y1-data-basic-charts", "Basic Charts", "Interpreting simple single-series bar graphs, horizontal charts, and basic line plots."),
    ("y1-data-basic-di", "Basic Data Interpretation", "Calculating direct differences, simple ratios, and baseline percentage increases from simple tables.")
]

def make_y1_category(cat_name, desc, specs):
    topics = []
    for idx, (t_id, title, overview_detail) in enumerate(specs):
        num = idx + 1
        t = create_rich_topic(
            t_id=t_id,
            year_id=1,
            cat=cat_name,
            num=num,
            title=title,
            tagline=f"1st Year Foundation — Core Concepts, Step-by-Step Problem Solving & Verification",
            est_min=45,
            diff="Foundation",
            overview=f"{title} is a foundational building block in 1st-year training. {overview_detail} It establishes core analytical confidence, eliminating confusion and building solid fundamentals.",
            placement_rel=f"Recruitment screening tests require strong foundational fluency in {title} to ensure rapid computation and zero elementary errors in subsequent advanced rounds.",
            weightage="Foundational Essential (Underpins 100% of higher-level aptitude coursework).",
            real_world="Everyday financial arithmetic, quantitative data literacy, baseline logical communication, and structured programming logic.",
            objs=[
                f"Understand fundamental definitions and core concepts of {title}",
                "Solve foundational problems with 100% computational accuracy",
                "Apply mental calculation and verification rules to avoid common slips",
                "Build confidence for progressing to intermediate 2nd-year topics"
            ],
            prereqs=["High school mathematics fundamentals", "Basic reading and analytical comprehension"],
            refresher="Ensure familiarity with basic arithmetic tables (1 to 20), addition/subtraction fluency, and basic sentence construction.",
            defs=[
                f"Foundational Definition: The core principle defining {title}.",
                "Standard Formula / Rule: The governing algebraic or logical relationship used in computation.",
                "Verification Invariant: A simple check (such as parity or substitution) that confirms result validity."
            ],
            intuition=f"Mastering {title} requires focusing on understanding the 'why' behind each rule rather than rote memorization.",
            visual="Clear 2-step decision diagram mapping given problem inputs directly to the solution equation.",
            formulas=[
                {
                    "title": f"Core Formula / Rule ({title})",
                    "formula": "Governing Relationship",
                    "variables": "Standard parameters",
                    "description": f"Standard operational formula for {title}.",
                    "whenToUse": "Apply across all foundational exercises.",
                    "simpleExample": "Direct evaluation under standard values."
                }
            ],
            narrative=[
                f"In this foundational chapter on {title}, we build understanding from the ground up.",
                "We walk through clear step-by-step worked examples to illustrate exact problem-solving patterns."
            ],
            deep_dives=[
                {
                    "title": "Step-by-Step Problem Breakdown",
                    "content": "A systematic approach to reading the problem statement, identifying the unknown, and executing the calculation."
                }
            ],
            variations=[
                {"typeName": "Direct Application", "description": "Applying the basic rule directly to calculate the unknown."},
                {"typeName": "Two-Step Problem", "description": "Combining two foundational steps to reach the final answer."}
            ],
            methods_title="Step-by-Step Working vs Mental Verification",
            trad_method="Full pencil-and-paper longhand arithmetic (~60s).",
            shortcut_method="Direct application of core formula with mental arithmetic (~20s).",
            time_saved="65% time saved",
            mistake_list=[
                {
                    "mistake": "Misreading problem numbers or copying digits incorrectly.",
                    "why": "Rushing through foundational problems without double-checking.",
                    "avoid": "Always read the question stem twice and verify written numbers before computing."
                }
            ],
            tips={
                "timeAllocationSeconds": 45,
                "eliminationTechnique": "Check basic unit digits and magnitude to rule out impossible options.",
                "questionSelectionAdvice": "Solve foundational questions immediately to secure baseline accuracy.",
                "recruiterInsight": "Recruiters expect 100% accuracy on foundational questions."
            },
            practice_title=title,
            rev_bullets=[
                f"Always remember the core definition of {title}.",
                "Double check basic arithmetic calculations to avoid careless slips.",
                "Use simple verification checks to confirm answer accuracy."
            ],
            rev_formulas=["Core Relationship = Standard Form"],
            takeaways=[
                f"Strong foundation in {title} is critical for success in 2nd and 3rd year advanced aptitude.",
                "Consistent practice on fundamentals ensures speed, accuracy, and confidence."
            ],
            sources=[
                {"sourceName": "Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)", "sourceType": "Textbook", "referenceNote": "Foundational problem sets and step-by-step arithmetic explanations."},
                {"sourceName": "High School English Grammar and Composition (Wren & Martin)", "sourceType": "Textbook", "referenceNote": "Grammatical foundations and parts of speech rules."}
            ]
        )
        topics.append(t)
    return {
        "category": cat_name,
        "description": desc,
        "topics": topics
    }

categories = [
    make_y1_category("Quantitative Foundation", "Foundational arithmetic, number properties, fractions, percentages, ratios, and simple interest.", y1_quant_specs),
    make_y1_category("Logical Reasoning Foundation", "Series completion, analogies, classification, basic coding-decoding, blood relations, and direction sense.", y1_lr_specs),
    make_y1_category("Verbal Foundation", "Parts of speech, basic tenses, articles, prepositions, subject-verb concord, and vocabulary basics.", y1_verbal_specs),
    make_y1_category("Data Foundation", "Reading tables, simple charts, and introductory data interpretation calculations.", y1_data_specs)
]

write_year_file(
    filepath="src/data/crtYear1Data.ts",
    var_name="CRT_YEAR_1_DATA",
    year_id=1,
    year_name="1st Year",
    level_title="1st Year Foundation CRT — Core Mathematical, Logical & Verbal Fundamentals",
    description="Comprehensive 1st-year foundational curriculum designed to build solid mathematical fluency, step-by-step logical deductions, grammatical precision, and table/chart reading skills.",
    target_focus=[
        "Building core arithmetic intuition: Number properties, divisibility, fractions, percentages, and ratios",
        "Developing systematic reasoning: Number/letter series, analogies, basic coding-decoding, and direction sense",
        "Mastering English grammar fundamentals: Parts of speech, tenses, subject-verb agreement, and vocabulary",
        "Interpreting foundational data representations: Tabular data extraction and basic chart comparisons"
    ],
    categories=categories
)
