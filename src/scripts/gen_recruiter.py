import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from y4_helper import create_topic, write_ts_file
from generate_y4_data import generate_8_examples, generate_practice_set

rec_specs = [
    ("y4-rec-online-assessments", "Understanding Online Aptitude Assessments: IRT & Proctoring", "Item Response Theory (IRT) adaptive engines, webcam/screen AI proctoring parameters, and scoring normalization curves."),
    ("y4-rec-quant-prep", "Company-Specific Quantitative Assessment Architectures", "Comparative topic distributions, calculation depths, and speed benchmarks across major technology employers."),
    ("y4-rec-lr-prep", "Company-Specific Logical Reasoning Architectures", "Deductive vs inductive emphasis, puzzle complexity matrices, and algorithmic logic weighting across recruiters."),
    ("y4-rec-va-prep", "Company-Specific Verbal Ability Architectures", "Grammar-heavy vs reading comprehension-heavy formats, vocabulary bands, and business communication benchmarks."),
    ("y4-rec-di-prep", "Company-Specific Data Interpretation Architectures", "Financial table density vs multi-chart dashboard analysis across corporate test providers."),
    ("y4-rec-time-bound-tests", "Cracking High-Velocity Time-Bound Tests", "Tactics for rigid non-revisitable sections, countdown timer psychological management, and rapid question cycling."),
    ("y4-rec-negative-marking", "Strategic Management of Negative Marking: Risk Calibration", "Mathematical risk modeling, option elimination thresholds, and expected value calculation under -0.25 to -0.33 penalties."),
    ("y4-rec-section-management", "Sectional Cutoff Management & Energy Balancing", "Securing mandatory 70th+ percentile baseline cutoffs across all sections before pursuing peak domain specialization."),
    ("y4-rec-pattern-research", "Assessment Pattern Research & Verification Methodology", "Cross-checking recruitment syllabus changes, official assessment provider updates (TCS iON, SHL, Mettl), and avoiding stale prep."),
    ("y4-rec-technical-readiness", "Comprehensive Pre-Assessment Environment & Zero-Panic Protocols", "Hardware, internet failover, dual-screen guidelines, browser compatibility, and real-time technical glitch recovery.")
]

topics = []
for idx, (t_id, title, desc) in enumerate(rec_specs):
    slug = t_id.replace("y4-rec-", "")
    num = idx + 1
    easy, inter, adv, pl, mixed = generate_practice_set(slug, title)
    exs = generate_8_examples(slug, title, f"Assessment Architecture Framework for {title}")
    
    topic = create_topic(
        t_id=t_id,
        cat="Recruiter / Assessment Preparation",
        num=num,
        title=title,
        tagline=f"Mastery of {title} — Assessment Engine Dynamics, Test Provider Architectures & Strategic Compliance",
        est_min=60,
        diff="Placement-Ready",
        overview=f"{title} provides candidates with deep operational intelligence regarding modern recruitment assessment architectures (TCS iON, Infosys Assessment Platform, AMCAT / Aspiring Minds, CoCubes, Mercer Mettl, and SHL). It demystifies testing algorithms, scoring engines, and proctoring constraints.",
        placement_rel=f"Understanding {title} prevents high-potential candidates from getting disqualified by system traps, strict sectional cutoffs, adaptive algorithm missteps, or proctoring flags.",
        weightage="Foundational Intelligence (Governs test execution across 100% of corporate placement tests).",
        real_world="Standardized psychometric evaluation, corporate competency benchmarking, automated hiring funnels, and enterprise talent acquisition pipelines.",
        objs=[
            f"Understand the algorithmic scoring and structural constraints governing {title}",
            "Navigate adaptive and non-adaptive testing platforms with confidence and high efficiency",
            "Maintain sectional cutoff balances across Quant, Logical, and Verbal modules",
            "Execute compliant, panic-free test sessions under AI and human proctored environments"
        ],
        prereqs=["Basic test navigation familiarity", "Awareness of major tech recruitment platforms"],
        refresher="Review standard testing terminology: Sectional cutoffs, Item Response Theory, adaptive question branching, and raw vs scaled percentiles.",
        defs=[
            f"Assessment Architecture: The technological and psychometric design defining {title}.",
            "Item Response Theory (IRT): An adaptive testing paradigm where question difficulty dynamically scales based on candidate's rolling accuracy.",
            "Sectional Cutoff: The minimum qualifying score threshold required in each individual subject module to pass the overall screening."
        ],
        intuition=f"Modern placement tests in {title} are sophisticated software systems; understanding how test engines calculate scores allows candidates to play to the algorithm's strengths.",
        visual="Comparative architectural matrix contrasting Adaptive (IRT) vs Linear Static test engines.",
        formulas=[
            {
                "title": "Normalized Sectional Score",
                "formula": "Scaled Score = μ_ref + [(Raw - μ_cand) / σ_cand] × σ_ref",
                "variables": "μ = mean score, σ = standard deviation across testing cohorts",
                "description": "Standard statistical normalization equation used by test providers to equate difficulties across test slots.",
                "whenToUse": "Explains why performance on tough questions yields higher scaled percentiles.",
                "simpleExample": "Demonstrates why avoiding early errors in adaptive tests is critical for high final ratings."
            }
        ],
        narrative=[
            f"This research-backed module dissects the exact mechanics of {title}.",
            "We emphasize verified assessment intelligence, debunking common campus myths and equipping students with pragmatic, rule-compliant testing strategies."
        ],
        deep_dives=[
            {
                "title": "Demystifying AI Proctoring Systems",
                "content": "How facial tracking, eye gaze monitoring, acoustic noise analysis, and secondary device detection operate in modern test engines."
            },
            {
                "title": "Adaptive IRT Algorithm Traps",
                "content": "Why getting the first 5 questions correct in an adaptive test sets a high score ceiling, while early careless errors trap candidates in low-difficulty bands."
            }
        ],
        variations=[
            {"typeName": "Adaptive Testing Strategies", "description": "Managing pace and accuracy when questions dynamically scale in difficulty."},
            {"typeName": "Non-Revisitable Timed Sections", "description": "Strategies for platforms where once a question is skipped, it can never be revisited."},
            {"typeName": "Multi-Section Balancing", "description": "Distributing cognitive effort to clear all cutoffs rather than maxing out only one favorite domain."}
        ],
        examples=exs,
        alt_method={
            "title": "Uninformed Brute-Force Testing vs Engine-Aware Strategic Execution",
            "methods": [
                {
                    "methodName": "Uninformed Static Approach",
                    "steps": ["Treat all tests as simple paper-like linear exams", "Rush through early questions carelessly"],
                    "prosAndCons": "Severe risk of being trapped in low-scoring IRT branches or failing sectional cutoffs.",
                    "whenToUse": "Not recommended."
                },
                {
                    "methodName": "Engine-Aware Strategic Execution",
                    "steps": ["Identify engine type (IRT vs Static)", "Invest high precision in initial questions", "Track sectional cutoffs actively"],
                    "prosAndCons": "Maximizes scaled percentile and guarantees multi-section clearance.",
                    "whenToUse": "Mandatory for all top-tier corporate recruitment tests."
                }
            ]
        },
        shortcuts={
            "title": f"Engine Rule for {title}",
            "traditionalVsShortcut": {
                "traditionalMethod": "Treating all tests with the same generic pace.",
                "shortcutMethod": "Calibrating speed and risk according to the specific platform engine.",
                "timeSavedPercent": "40% performance gain"
            },
            "rulesForApplication": [
                "In adaptive tests, allocate 20% more time to the first 5 questions to anchor in high-scoring tiers.",
                "Never leave questions blank on platforms with zero negative marking (e.g., TCS iON)."
            ]
        },
        mistakes=[
            {
                "mistake": "Leaving easy questions unanswered at the end because of poor sectional pacing.",
                "whyItHappens": "Spending too long on mid-section time traps.",
                "howToAvoid": "Strictly monitor the section countdown clock; ensure at least 2 minutes remain for final question cleanup."
            }
        ],
        tips={
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Use option elimination to avoid getting trapped on obscure questions.",
            "questionSelectionAdvice": "Prioritize clearing the sectional cutoff threshold first before hunting bonus difficult questions.",
            "recruiterInsight": "Recruiters require balanced competence across all domains; an off-the-charts Quant score does not compensate for a failed Verbal cutoff."
        },
        p_easy=easy,
        p_inter=inter,
        p_adv=adv,
        p_placement=pl,
        mixed=mixed,
        rev_bullets=[
            f"Always check if the test platform allows backward navigation in {title}.",
            "In adaptive IRT engines, early question accuracy determines your final score ceiling.",
            "Ensure full compliance with webcam, lighting, and proctoring guidelines to avoid automated disqualification."
        ],
        rev_formulas=[
            "Scaled Percentile = (Rank / Total Candidates) × 100",
            "Sectional Balance = min(Quant %, Logic %, Verbal %) ≥ 70%"
        ],
        takeaways=[
            f"Mastery of {title} ensures that your technical and analytical capabilities translate into maximum test scores.",
            "Understanding test engine design gives candidates a massive psychological and competitive edge."
        ],
        sources=[
            {"sourceName": "TCS iON Assessment Engine Architecture Guide", "sourceType": "Official Documentation", "referenceNote": "Sectional navigation rules, negative marking policies, and time allocation models."},
            {"sourceName": "Mercer Mettl / SHL Psychometric & IRT Standards", "sourceType": "Industry Standards", "referenceNote": "Item response theory, adaptive difficulty scaling, and proctoring compliance."}
        ]
    )
    topics.append(topic)

write_ts_file("src/data/crtYear4/recruiterTopics.ts", "CRT_Y4_RECRUITER_TOPICS", topics)
