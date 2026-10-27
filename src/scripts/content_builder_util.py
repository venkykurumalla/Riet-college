import json

def format_topic_object(
    t_id, year_id, category, num, title, tagline, est_min, difficulty,
    overview, placement_rel, recruiter_weight, real_world,
    learning_objs, prereqs, refresher,
    defs, theory_intuition, visual_model,
    formulas, narrative_paragraphs, deep_dives, variations,
    solved_examples,
    alt_methods, shortcuts, mistakes, placement_tips,
    practice_easy, practice_inter, practice_adv, practice_placement, mixed_challenge,
    rev_bullets, rev_formulas, takeaways, sources
):
    return {
        "id": t_id,
        "yearId": year_id,
        "category": category,
        "topicNumber": num,
        "title": title,
        "tagline": tagline,
        "estimatedMinutes": est_min,
        "difficulty": difficulty,
        "introduction": {
            "overview": overview,
            "placementRelevance": placement_rel,
            "historicalRecruiterWeightage": recruiter_weight,
            "realWorldContext": real_world
        },
        "learningObjectives": learning_objs,
        "prerequisiteKnowledge": {
            "requiredTopics": prereqs,
            "quickRefresher": refresher
        },
        "conceptExplanation": {
            "coreDefinitions": defs,
            "theoreticalIntuition": theory_intuition,
            "visualOrMentalModel": visual_model
        },
        "importantRulesAndFormulas": formulas,
        "detailedExplanation": {
            "mainNarrative": narrative_paragraphs,
            "deepDiveAspects": deep_dives
        },
        "problemVariations": variations,
        "solvedExamples": solved_examples,
        "alternativeMethods": alt_methods,
        "shortcutMethods": shortcuts,
        "commonMistakes": mistakes,
        "placementTips": placement_tips,
        "practiceSets": {
            "easy": practice_easy,
            "intermediate": practice_inter,
            "advanced": practice_adv,
            "placementStyle": practice_placement
        },
        "mixedChallengeSet": mixed_challenge,
        "quickRevision": {
            "summaryBullets": rev_bullets,
            "quickFormulas": rev_formulas
        },
        "keyTakeaways": takeaways,
        "sourcesAndReferences": sources
    }

def serialize_year_curriculum(filepath, var_name, year_id, year_name, level_title, description, target_focus, categories):
    data = {
        "yearId": year_id,
        "yearName": year_name,
        "levelTitle": level_title,
        "description": description,
        "targetFocus": target_focus,
        "categories": categories
    }
    content = f"import {{ CRTYearCurriculum }} from '../types/crtTypes';\n\nexport const {var_name}: CRTYearCurriculum = " + json.dumps(data, indent=2) + ";\n"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    total_t = sum(len(c["topics"]) for c in categories)
    print(f"[SUCCESS] Wrote {year_name}: {total_t} topics across {len(categories)} categories to {filepath}")
