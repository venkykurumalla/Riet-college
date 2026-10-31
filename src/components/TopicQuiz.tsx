import React, { useEffect, useState } from 'react';
import { ClipboardList, ExternalLink, CheckCircle2, XCircle, Star } from 'lucide-react';
import { animate, useReducedMotion } from 'framer-motion';
import { CRTYearId, TopicQuizData } from '../types/crtTypes';
import { crtProgressService } from '../services/crtProgressService';

const PAGE_SIZE = 5;

// A question may carry its data set (table, chart values) before the actual question, separated by a blank line.
const splitQuestion = (text: string) => {
  const parts = text.split('\n\n');
  const stem = parts.pop() ?? text;
  return { context: parts.join('\n\n'), stem };
};
const LETTERS = ['A', 'B', 'C', 'D'];

// Counts up to the final score (instantly with reduced motion).
const CountUp: React.FC<{ to: number }> = ({ to }) => {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (reduce) { setN(to); return; }
    const c = animate(0, to, { duration: 0.7, ease: [0.22, 1, 0.36, 1], onUpdate: v => setN(Math.round(v)) });
    return () => c.stop();
  }, [to, reduce]);
  return <>{n}</>;
};

interface TopicQuizProps {
  topicId: string;
  yearId: CRTYearId;
  quiz: TopicQuizData;
  sectionNumber?: number;
}

export const TopicQuiz: React.FC<TopicQuizProps> = ({ topicId, yearId, quiz, sectionNumber = 18 }) => {
  const total = quiz.questions.length;
  const pageCount = Math.ceil(total / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | undefined>(undefined);

  useEffect(() => {
    setPage(0);
    setSelected({});
    setRevealed({});
    setFinished(false);
    setBest(crtProgressService.getTopicProgress(topicId, yearId).quizBest);
  }, [topicId, yearId]);

  const score = quiz.questions.filter(q => selected[q.id] === q.answerIndex).length;
  const pageQuestions = quiz.questions.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const submit = () => {
    crtProgressService.recordQuizScore(topicId, yearId, score, total);
    setBest(crtProgressService.getTopicProgress(topicId, yearId).quizBest);
    setFinished(true);
    window.scrollTo({ top: document.getElementById('topic-quiz')?.offsetTop ?? 0, behavior: 'smooth' });
  };

  const retake = () => {
    setSelected({});
    setRevealed({});
    setFinished(false);
    setPage(0);
  };

  return (
    <div id="topic-quiz" className="scroll-mt-36 md:scroll-mt-48 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-indigo-700 font-bold uppercase tracking-wider text-xs">
          <ClipboardList className="w-4 h-4 shrink-0" />
          <span>{sectionNumber}. Topic Quiz • {quiz.topicTitle}</span>
        </div>
        {best !== undefined && (
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold">
            <Star className="w-3 h-3" /> Best: {best}/{total}
          </span>
        )}
      </div>

      {!finished ? (
        <>
          <p className="text-xs text-slate-500 font-medium">
            {total} questions • choose an option, then click “View Answer” • page {page + 1} of {pageCount}
          </p>

          <div key={page} className="space-y-5 animate-year-fade">
            {pageQuestions.map((q, i) => {
              const number = page * PAGE_SIZE + i + 1;
              const chosen = selected[q.id];
              const isRevealed = !!revealed[q.id];
              return (
                <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 space-y-2">
                      {splitQuestion(q.question).context && (
                        <pre className="text-xs font-mono text-slate-700 bg-white border border-slate-200 rounded-xl p-3 overflow-x-auto whitespace-pre-wrap">
                          {splitQuestion(q.question).context}
                        </pre>
                      )}
                      <p className="text-sm font-bold text-slate-900 leading-relaxed whitespace-pre-line">
                        {number}. {splitQuestion(q.question).stem}
                      </p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 text-[10px] font-bold uppercase">
                      {q.difficulty}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt, oi) => {
                      const isChosen = chosen === oi;
                      const isCorrect = q.answerIndex === oi;
                      let style = 'bg-white border-slate-200 hover:border-indigo-300';
                      if (isRevealed && isCorrect) style = 'bg-emerald-50 border-emerald-400';
                      else if (isRevealed && isChosen) style = 'bg-rose-50 border-rose-400';
                      else if (isChosen) style = 'bg-indigo-50 border-indigo-400';
                      return (
                        <label
                          key={oi}
                          className={`flex items-start gap-3 px-3 py-2.5 rounded-xl border text-sm cursor-pointer transition-[background-color,border-color,transform] duration-150 active:scale-[0.99] ${isChosen || (isRevealed && isCorrect) ? 'opt-pop ' : ''}${style}`}
                        >
                          <input
                            type="radio"
                            name={`tq-${topicId}-${q.id}`}
                            checked={isChosen}
                            disabled={isRevealed}
                            onChange={() => setSelected(prev => ({ ...prev, [q.id]: oi }))}
                            className="mt-1 shrink-0"
                          />
                          <span className="font-bold text-slate-500 shrink-0">{LETTERS[oi]}.</span>
                          <span className="text-slate-800 break-words min-w-0">{opt}</span>
                        </label>
                      );
                    })}
                  </div>

                  {!isRevealed ? (
                    <button
                      disabled={chosen === undefined}
                      onClick={() => setRevealed(prev => ({ ...prev, [q.id]: true }))}
                      className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      View Answer
                    </button>
                  ) : (
                    <div className="space-y-2 text-xs yr-rise">
                      <p
                        className={`flex items-center gap-1.5 font-extrabold ${
                          chosen === q.answerIndex ? 'text-emerald-700' : 'text-rose-700'
                        }`}
                      >
                        {chosen === q.answerIndex ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <XCircle className="w-4 h-4" />
                        )}
                        {chosen === q.answerIndex ? 'Correct!' : `Wrong — correct answer is ${LETTERS[q.answerIndex]}`}
                      </p>
                      <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                      {q.shortcut && (
                        <p className="text-blue-800 leading-relaxed">
                          <strong>Shortcut:</strong> {q.shortcut}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 disabled:opacity-40 cursor-pointer"
              >
                ‹ Prev
              </button>
              {Array.from({ length: pageCount }, (_, p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold cursor-pointer ${
                    p === page ? 'bg-indigo-600 text-white' : 'border border-slate-300 text-slate-700'
                  }`}
                >
                  {p + 1}
                </button>
              ))}
              <button
                disabled={page === pageCount - 1}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 disabled:opacity-40 cursor-pointer"
              >
                Next ›
              </button>
            </div>
            <button
              onClick={submit}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold cursor-pointer"
            >
              Finish Quiz ({Object.keys(selected).length}/{total} answered)
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-4 yr-rise">
          <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 text-center">
            <p className="text-3xl font-extrabold text-indigo-800">
              <CountUp to={score} /> / {total}
            </p>
            <p className="text-xs font-bold text-indigo-700 pt-1">
              Your score{best !== undefined ? ` • Best so far: ${best}/${total}` : ''}
            </p>
          </div>

          <h3 className="text-sm font-extrabold text-slate-900">Questions to review</h3>
          {quiz.questions.filter(q => selected[q.id] !== q.answerIndex).length === 0 ? (
            <p className="text-xs text-emerald-700 font-bold">Perfect score — nothing to review.</p>
          ) : (
            <div className="space-y-3">
              {quiz.questions
                .map((q, idx) => ({ q, idx }))
                .filter(({ q }) => selected[q.id] !== q.answerIndex)
                .map(({ q, idx }) => (
                  <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <p className="font-bold text-slate-900 whitespace-pre-line">
                      {idx + 1}. {splitQuestion(q.question).stem}
                    </p>
                    <p className="text-rose-700">
                      Your answer:{' '}
                      {selected[q.id] === undefined ? 'not answered' : `${LETTERS[selected[q.id]]}. ${q.options[selected[q.id]]}`}
                    </p>
                    <p className="text-emerald-700 font-bold">
                      Correct: {LETTERS[q.answerIndex]}. {q.options[q.answerIndex]}
                    </p>
                    <p className="text-slate-700 whitespace-pre-line">{q.explanation}</p>
                  </div>
                ))}
            </div>
          )}

          <button onClick={retake} className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer">
            Retake Quiz
          </button>
        </div>
      )}

      {quiz.morePracticeUrl && (
        <a
          href={quiz.morePracticeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
        >
          More practice <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};

export default TopicQuiz;
