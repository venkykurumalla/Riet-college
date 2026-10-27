import os
import json

# Ensure target directories exist
os.makedirs("src/data/crtYear4", exist_ok=True)

def make_topic(
    t_id, year_id, cat, num, title, tagline, est_min, diff,
    overview, placement_rel, recruiter_weight, real_world,
    learning_objs, prereqs, quick_refresher,
    core_defs, theory_intuition, visual_model,
    formulas, narrative, deep_dives, variations,
    solved_exs, alt_methods, shortcuts, mistakes,
    placement_tips, p_easy, p_inter, p_adv, p_placement,
    mixed_ch, quick_rev, takeaways, references
):
    return {
        "id": t_id,
        "yearId": year_id,
        "category": cat,
        "topicNumber": num,
        "title": title,
        "tagline": tagline,
        "estimatedMinutes": est_min,
        "difficulty": diff,
        "introduction": {
            "overview": overview,
            "placementRelevance": placement_rel,
            "historicalRecruiterWeightage": recruiter_weight,
            "realWorldContext": real_world
        },
        "learningObjectives": learning_objs,
        "prerequisiteKnowledge": {
            "requiredTopics": prereqs,
            "quickRefresher": quick_refresher
        },
        "conceptExplanation": {
            "coreDefinitions": core_defs,
            "theoreticalIntuition": theory_intuition,
            "visualOrMentalModel": visual_model
        },
        "importantRulesAndFormulas": formulas,
        "detailedExplanation": {
            "mainNarrative": narrative,
            "deepDiveAspects": deep_dives
        },
        "problemVariations": variations,
        "solvedExamples": solved_exs,
        "alternativeMethods": alt_methods,
        "shortcutMethods": shortcuts,
        "commonMistakes": mistakes,
        "placementTips": placement_tips,
        "practiceSets": {
            "easy": p_easy,
            "intermediate": p_inter,
            "advanced": p_adv,
            "placementStyle": p_placement
        },
        "mixedChallengeSet": mixed_ch,
        "quickRevision": quick_rev,
        "keyTakeaways": takeaways,
        "sourcesAndReferences": references
    }

print("Helper defined.")
