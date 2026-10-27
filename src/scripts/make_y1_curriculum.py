import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from curriculum_topic_factory import build_topic_entry, save_curriculum_ts

def create_y1_topic_entry(
    t_id, cat, num, title, tagline, est_min,
    overview, placement_rel, weightage, real_world,
    objs, prereqs, refresher,
    defs, intuition, visual,
    formulas, narrative, deep_dives, variations,
    exs,
    methods_title, trad_m, short_m, time_sav,
    mistakes, tips,
    p_easy, p_inter, p_adv, p_pl, p_mc,
    rev_b, rev_f, takeaways, sources
):
    return build_topic_entry(
        t_id=t_id, year_id=1, category=cat, num=num, title=title, tagline=tagline,
        est_min=est_min, difficulty="Foundation",
        overview=overview, placement_rel=placement_rel, recruiter_weight=weightage, real_world=real_world,
        learning_objs=objs, prereqs=prereqs, refresher=refresher,
        defs=defs, theory_intuition=intuition, visual_model=visual,
        formulas=formulas, narrative_paragraphs=narrative, deep_dives=deep_dives, variations=variations,
        solved_examples=exs,
        alt_methods={
            "title": methods_title,
            "methods": [
                {"methodName": "Traditional Longhand Method", "steps": ["Set up full formal equations", "Perform multi-line algebraic division"], "prosAndCons": "High formal rigor but requires 60–90 seconds.", "whenToUse": "For initial verification or subjective tests."},
                {"methodName": "Direct Foundational Mental Shortcut", "steps": ["Apply direct formula or ratio equivalence", "Execute 1-line mental arithmetic"], "prosAndCons": "Takes 15–25 seconds with zero clutter.", "whenToUse": "Standard recommendation for recruitment screening assessments."}
            ]
        },
        shortcuts={
            "title": f"Foundational Speed Heuristic for {title}",
            "traditionalVsShortcut": {
                "traditionalMethod": trad_m,
                "shortcutMethod": short_m,
                "timeSavedPercent": time_sav
            },
            "rulesForApplication": [
                "Verify dimensional consistency before calculating.",
                "Check unit digit parity to eliminate impossible answer choices."
            ]
        },
        mistakes=[{"mistake": m[0], "why": m[1], "avoid": m[2]} for m in mistakes],
        placement_tips=tips,
        practice_easy=p_easy, practice_inter=p_inter, practice_adv=p_adv, practice_placement=p_pl, mixed_challenge=p_mc,
        rev_bullets=rev_b, rev_formulas=rev_f, takeaways=takeaways, sources=sources
    )

print("make_y1_curriculum module loaded.")
