# Content pipeline (rewritten chapters and topic quizzes)

- `src/data/chapters/<topicId>.json` replaces the generated chapter with the same id (loaded in `src/data/crtCourseData.ts`).
- `src/data/topicQuizzes/<topicId>.json` is the quiz shown at the bottom of that chapter (`TopicQuiz` component). To add questions later, edit this file only: append to `questions` with the next `id`, 4 `options`, `answerIndex` (0-3), `explanation`, optional `shortcut`.
- `scripts/content/year1/*.cjs` are the authoring sources for 1st Year. Run `node scripts/content/runAll.cjs year1` to regenerate the JSON files, then `node scripts/content/patchGoodChapters.cjs` for ch 1-6.
  If you edit a JSON file by hand, do not re-run the generators afterwards (they overwrite it).
- `node scripts/content/verify.cjs y1` checks every quiz and chapter (4 options, unique options, valid answerIndex, no placeholder text, 3+ solved examples).
- `node scripts/content/checkNumeric.cjs` independently recomputes 215 numeric answers of 1st Year ch 1-12.
