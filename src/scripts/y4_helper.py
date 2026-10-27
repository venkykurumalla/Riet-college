import json
import os

os.makedirs("src/data/crtYear4", exist_ok=True)

# Helper function to generate standardized topic structure
def create_topic(
    t_id, cat, num, title, tagline, est_min, diff,
    overview, placement_rel, weightage, real_world,
    objs, prereqs, refresher,
    defs, intuition, visual,
    formulas, narrative, deep_dives, variations,
    examples, alt_method, shortcuts, mistakes, tips,
    p_easy, p_inter, p_adv, p_placement, mixed,
    rev_bullets, rev_formulas, takeaways, sources
):
    return {
        "id": t_id,
        "yearId": 4,
        "category": cat,
        "topicNumber": num,
        "title": title,
        "tagline": tagline,
        "estimatedMinutes": est_min,
        "difficulty": diff,
        "introduction": {
            "overview": overview,
            "placementRelevance": placement_rel,
            "historicalRecruiterWeightage": weightage,
            "realWorldContext": real_world
        },
        "learningObjectives": objs,
        "prerequisiteKnowledge": {
            "requiredTopics": prereqs,
            "quickRefresher": refresher
        },
        "conceptExplanation": {
            "coreDefinitions": defs,
            "theoreticalIntuition": intuition,
            "visualOrMentalModel": visual
        },
        "importantRulesAndFormulas": formulas,
        "detailedExplanation": {
            "mainNarrative": narrative,
            "deepDiveAspects": deep_dives
        },
        "problemVariations": variations,
        "solvedExamples": examples,
        "alternativeMethods": alt_method,
        "shortcutMethods": shortcuts,
        "commonMistakes": mistakes,
        "placementTips": tips,
        "practiceSets": {
            "easy": p_easy,
            "intermediate": p_inter,
            "advanced": p_adv,
            "placementStyle": p_placement
        },
        "mixedChallengeSet": mixed,
        "quickRevision": {
            "summaryBullets": rev_bullets,
            "quickFormulas": rev_formulas
        },
        "keyTakeaways": takeaways,
        "sourcesAndReferences": sources
    }

def write_ts_file(path, var_name, data):
    content = f"import {{ CRTTopic }} from '../../types/crtTypes';\n\nexport const {var_name}: CRTTopic[] = " + json.dumps(data, indent=2) + ";\n"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Wrote {len(data)} topics to {path}")

print("Generator helper loaded.")
