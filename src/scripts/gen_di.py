import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from y4_helper import create_topic, write_ts_file
from generate_y4_data import generate_8_examples, generate_practice_set

di_specs = [
    ("y4-di-tables", "Advanced Tabular Data Interpretation", "Multi-year corporate balance sheets, missing cell matrices, row/column aggregate percentages, and year-over-year delta analysis."),
    ("y4-di-bar-charts", "Complex Bar Charts: Grouped, Stacked & Floating", "Dual-category comparisons, stacked cumulative totals, percentage-subdivided segments, and baseline offset deviations."),
    ("y4-di-line-graphs", "Multi-Line Graphs: Dual Y-Axes & Trend Derivatives", "Dual-scale Y axes, trend crossovers, rate-of-change inflection points, and piecewise linear projections."),
    ("y4-di-pie-charts", "Single & Multi-Tier Pie Charts: Degree-Percentage Shifts", "Converting 360-degree sector angles to 100% bases, concentric nested doughnut charts, and sector growth reallocations."),
    ("y4-di-mixed-graphs", "Mixed Graphs: Multi-Source Integrated Datasets", "Correlating financial metrics across pie charts + tables, bar charts + line graphs, and cross-dataset ratio normalization."),
    ("y4-di-caselets", "Caselet Data Interpretation: Qualitative to Quantitative", "Extracting algebraic and numerical equations from dense descriptive paragraphs, market share narratives, and production logs."),
    ("y4-di-percentage-calculations", "Percentage-Based DI: Growth, CAGR & Basis Points", "Compound Annual Growth Rate (CAGR = (End/Start)^(1/n) - 1), basis point spreads (1 bps = 0.01%), and relative market share gains."),
    ("y4-di-ratio-calculations", "Ratio & Proportion in Data Interpretation", "Weighted composite ratios, per-capita productivity indices, input-output efficiency coefficients, and normalized scaling."),
    ("y4-di-averages-calculations", "Averages, Moving Trends & Variance in DI", "Multi-period moving averages, rolling 12-month metrics, deviation from industry median, and harmonic weighted averages."),
    ("y4-di-comparison-heuristics", "High-Speed Fraction Comparison Heuristics", "Cross-multiplication shortcuts, reciprocal baseline approximations, and percentage difference estimation under 5 seconds."),
    ("y4-di-multi-chart", "Multi-Chart Dashboards & Tri-Variable Metrics", "Navigating 3+ interdependent charts, tracking multi-subsidiary enterprise performance, and supply chain metric flows."),
    ("y4-di-advanced-visuals", "Advanced Visualizations: Radar, Spider, Bubble & Funnel", "Multi-axial radar charts, multi-dimensional bubble radii, conversion funnel analytics, and visual trend deduction."),
    ("y4-di-data-sufficiency", "Data Sufficiency in Data Interpretation", "Determining whether provided chart metrics and statements contain sufficient information to uniquely compute target values."),
    ("y4-di-timed-pressure", "Data Interpretation Under Strict Time Pressure", "Approximation strategies, scanning for order-of-magnitude clues, and rapid distractor elimination in timed assessments.")
]

topics = []
for idx, (t_id, title, desc) in enumerate(di_specs):
    slug = t_id.replace("y4-di-", "")
    num = idx + 1
    easy, inter, adv, pl, mixed = generate_practice_set(slug, title)
    exs = generate_8_examples(slug, title, f"Analytical & Computational Formula for {title}")
    
    topic = create_topic(
        t_id=t_id,
        cat="Data Interpretation",
        num=num,
        title=title,
        tagline=f"Mastery of {title} — Rapid Data Extraction, Speed Approximations & Graphical Analytics",
        est_min=60,
        diff="Placement-Ready" if num > 7 else "Advanced",
        overview=f"{title} represents an indispensable component of corporate recruitment assessments (TCS NQT/Digital, Infosys, Capgemini, Cognizant, Wipro, Accenture, and AMCAT). It tests data literacy, quantitative graph analysis, rapid numerical synthesis, and mental estimation under tight time limits.",
        placement_rel=f"Recruiters evaluate {title} to measure how effectively a candidate extracts actionable quantitative insights from real-world corporate dashboards, financial tables, and operational graphs.",
        weightage="High Frequency (Appears in 100% of advanced aptitude and analytics screening tests).",
        real_world="Business intelligence, financial data analytics, predictive modeling dashboards, and cloud resource metric monitoring.",
        objs=[
            f"Master visual parsing and data extraction protocols for {title}",
            "Perform rapid fraction comparisons and percentage growth estimations in under 20 seconds",
            "Calculate compound growth rates, moving averages, and weighted ratios without long division",
            "Solve complex placement-tier multi-chart and caselet data sets with 100% accuracy"
        ],
        prereqs=["Percentage-fraction equivalents", "Ratio proportions", "Basic arithmetic operations"],
        refresher="Review fractional equivalents from 1/2 to 1/20 and standard percentage change formulas.",
        defs=[
            f"Core Visual Model: The visual and structural syntax defining {title}.",
            "CAGR: Compound Annual Growth Rate representing smoothed annual growth over multiple periods.",
            "Basis Points (bps): Unit of measure for percentages where 100 bps = 1.00%."
        ],
        intuition=f"Data interpretation in {title} is won through visual scanning and approximation heuristics rather than brute-force pencil arithmetic.",
        visual="Multi-dimensional structured dashboard combining tabulated data and coordinate charts.",
        formulas=[
            {
                "title": "Percentage Growth / Change",
                "formula": "Percentage Change = [(Final - Initial) / Initial] × 100",
                "variables": "Final = terminal value, Initial = baseline reference value",
                "description": "Standard formula for period-over-period growth calculation.",
                "whenToUse": "Whenever evaluating growth, increase, or contraction across time periods.",
                "simpleExample": "Growth from 40 to 50: [(50 - 40) / 40] × 100 = (10/40) × 100 = 25%."
            },
            {
                "title": "Angle to Percentage Conversion (Pie Charts)",
                "formula": "Percentage = (Angle in Degrees / 360°) × 100",
                "variables": "Angle = sector angle in degrees",
                "description": "Transforms central sector degrees into standard base-100 percentages.",
                "whenToUse": "Direct conversion in circular pie charts.",
                "simpleExample": "72° sector: (72 / 360) × 100 = (1/5) × 100 = 20%."
            }
        ],
        narrative=[
            f"This chapter details the exact mechanics for mastering {title}.",
            "We emphasize the 'look before you compute' philosophy: inspect the answer options first to gauge required precision before doing arithmetic."
        ],
        deep_dives=[
            {
                "title": "Approximation & Truncation Rules",
                "content": "Using 2-digit rounding and fractional anchors to estimate complex ratios within 1% error."
            },
            {
                "title": "Avoiding Visual Scale & Axis Distortions",
                "content": "Detecting non-zero baselines, dual Y-axis discrepancies, and deceptive bar-width visual artifacts."
            }
        ],
        variations=[
            {"typeName": "Direct Tabular Extraction", "description": "Reading specific cell data and computing row/column metrics."},
            {"typeName": "Comparative Growth & Market Share", "description": "Evaluating which entity achieved maximum percentage or absolute gains."},
            {"typeName": "Multi-Source Correlated Queries", "description": "Combining data across two distinct visual formats to compute a secondary metric."}
        ],
        examples=exs,
        alt_method={
            "title": "Exact Long Calculation vs High-Speed Approximation",
            "methods": [
                {
                    "methodName": "Exact Long-Division Method",
                    "steps": ["Extract exact 6-digit numbers", "Perform full manual long division"],
                    "prosAndCons": "Takes 90–120 seconds per question with high risk of mechanical arithmetic error.",
                    "whenToUse": "Only when answer options differ by less than 0.2%."
                },
                {
                    "methodName": "Fractional Benchmark Approximation",
                    "steps": ["Round values to 2 significant digits", "Map to nearest benchmark fraction", "Pick matching option"],
                    "prosAndCons": "Executes in 15–20 seconds with 99%+ accuracy.",
                    "whenToUse": "Standard recommendation for all corporate recruitment assessments."
                }
            ]
        },
        shortcuts={
            "title": f"Speed Shortcut for {title}",
            "traditionalVsShortcut": {
                "traditionalMethod": "Calculating exact decimals across all options (~120s).",
                "shortcutMethod": "Cross-multiplication difference comparison (~25s).",
                "timeSavedPercent": "79% time saved"
            },
            "rulesForApplication": [
                "Inspect option spread: If options are far apart (>5%), round aggressively.",
                "In pie charts, work directly with degrees or percentages without converting to absolute values until the final step."
            ]
        },
        mistakes=[
            {
                "mistake": "Calculating absolute values when the question only asks for a ratio or percentage comparison.",
                "whyItHappens": "Mechanical habit of converting percentages into raw numbers unnecessarily.",
                "howToAvoid": "If the answer is a ratio or percentage, keep all operations in ratios/percentages."
            }
        ],
        tips={
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Calculate the first 2 significant digits or estimate order of magnitude to eliminate 3 options.",
            "questionSelectionAdvice": "A 5-question DI set often has 2 easy, 2 medium, and 1 tedious calculation. Solve the 4 fast ones and skip the tedious calculation if pressed for time.",
            "recruiterInsight": "Speed and accuracy in DI correlate strongly with success in business analytics and tech consulting roles."
        },
        p_easy=easy,
        p_inter=inter,
        p_adv=adv,
        p_placement=pl,
        mixed=mixed,
        rev_bullets=[
            f"Always check the unit scale and axis baselines before calculating in {title}.",
            "Keep operations in percentages/degrees when solving comparative questions.",
            "Use benchmark fractions (1/6 ≈ 16.67%, 1/7 ≈ 14.28%, 1/8 ≈ 12.5%) for instant division."
        ],
        rev_formulas=[
            "CAGR = (End / Start)^(1/n) - 1",
            "Weighted Mean = Σ(w_i · x_i) / Σw_i"
        ],
        takeaways=[
            f"Mastery of {title} ensures top-tier scores in placement analytics and aptitude rounds.",
            "Developing confident mental approximation is the #1 superpower in high-velocity DI tests."
        ],
        sources=[
            {"sourceName": "Data Interpretation and Logical Reasoning for the CAT (Arun Sharma)", "sourceType": "Textbook", "referenceNote": "Comprehensive chart models, fraction heuristics, and caselet algorithms."},
            {"sourceName": "TCS NQT / AMCAT Quantitative Analytics Guidelines", "sourceType": "Corporate Assessment Blueprint", "referenceNote": "Standard data interpretation formats and time constraints."}
        ]
    )
    topics.append(topic)

write_ts_file("src/data/crtYear4/diTopics.ts", "CRT_Y4_DI_TOPICS", topics)
