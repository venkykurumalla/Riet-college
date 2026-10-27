import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  RefreshCcw,
  ChevronRight,
  RotateCcw,
  Trophy,
  Lightbulb,
  Star,
  BookOpen,
  ClipboardList
} from 'lucide-react';
import { QuizQuestion, QuizAttempt, CRTYearId } from '../types/crtTypes';
import {
  getModuleId,
  selectQuizQuestions,
  loadQuizProgress,
  saveQuizProgress,
  updateRecentQuestionIds,
  getBestScore,
  getAttemptCount
} from '../data/quizData/index';

// ============================================================
// Types
// ============================================================
interface CRTModuleQuizProps {
  yearId: CRTYearId;
  categoryName: string;
  moduleId: string;
  onBack: () => void; // Navigate back to last topic or overview
}

type QuizPhase = 'intro' | 'question' | 'explanation' | 'results';

// ============================================================
// Helper: Score color & label
// ============================================================
function getScoreStyle(score: number, total: number = 5) {
  const pct = (score / total) * 100;
  if (pct === 100) return { color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200', label: 'Perfect Score! 🏆', emoji: '🎉' };
  if (pct >= 80)  return { color: 'text-blue-600',    bg: 'bg-blue-50 border-blue-200',     label: 'Excellent Work! 🌟', emoji: '⭐' };
  if (pct >= 60)  return { color: 'text-amber-600',   bg: 'bg-amber-50 border-amber-200',   label: 'Good Attempt! 👍', emoji: '👏' };
  return           { color: 'text-rose-600',    bg: 'bg-rose-50 border-rose-200',     label: 'Keep Practicing! 💪', emoji: '📖' };
}

// ============================================================
// Option Button Sub-Component
// ============================================================
interface OptionButtonProps {
  option: string;
  index: number;
  selected: boolean;
  revealed: boolean;
  isCorrect: boolean;
  isUserAnswer: boolean;
  onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  option, index, selected, revealed, isCorrect, isUserAnswer, onClick
}) => {
  const labels = ['A', 'B', 'C', 'D'];

  let btnClass = 'w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm font-semibold text-left transition-all cursor-pointer ';
  let labelClass = 'w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ';

  if (!revealed) {
    if (selected) {
      btnClass += 'border-blue-500 bg-blue-50 text-blue-800 shadow-sm shadow-blue-100';
      labelClass += 'bg-blue-500 text-white';
    } else {
      btnClass += 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 text-slate-700';
      labelClass += 'bg-slate-100 text-slate-600';
    }
  } else {
    if (isCorrect) {
      btnClass += 'border-emerald-400 bg-emerald-50 text-emerald-800';
      labelClass += 'bg-emerald-500 text-white';
    } else if (isUserAnswer && !isCorrect) {
      btnClass += 'border-rose-400 bg-rose-50 text-rose-800';
      labelClass += 'bg-rose-500 text-white';
    } else {
      btnClass += 'border-slate-100 bg-slate-50/50 text-slate-400 opacity-60';
      labelClass += 'bg-slate-200 text-slate-400';
    }
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
      onClick={!revealed ? onClick : undefined}
      disabled={revealed}
      className={btnClass}
    >
      <span className={labelClass}>{labels[index]}</span>
      <span className="flex-1">{option}</span>
      {revealed && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
      {revealed && isUserAnswer && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
    </motion.button>
  );
};

// ============================================================
// Main Quiz Component
// ============================================================
export const CRTModuleQuiz: React.FC<CRTModuleQuizProps> = ({
  yearId, categoryName, moduleId, onBack
}) => {
  // Quiz state
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  // History stats
  const bestScore = getBestScore(moduleId);
  const attemptCount = getAttemptCount(moduleId);

  // Load & select questions
  const initQuiz = useCallback(() => {
    const progress = loadQuizProgress(moduleId);
    const selected = selectQuizQuestions(moduleId, progress.recentQuestionIds);
    setQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers({});
    setShowExplanation(false);
    setScore(0);
    setPhase('question');
  }, [moduleId]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelectAnswer = (answer: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));
    setShowExplanation(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Save progress
      const progress = loadQuizProgress(moduleId);
      const attempt: QuizAttempt = {
        questionIds: questions.map(q => q.id),
        score: score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0),
        // If last question correct, score was already incremented above
        answers: { ...answers, [currentQuestion.id]: selectedAnswer ?? '' },
        completedAt: new Date().toISOString()
      };
      // Recalculate final score properly
      const finalAnswers = { ...answers, [currentQuestion.id]: selectedAnswer ?? '' };
      const finalScore = questions.filter(q => finalAnswers[q.id] === q.correctAnswer).length;
      attempt.score = finalScore;

      const updatedRecent = updateRecentQuestionIds(
        progress.recentQuestionIds,
        questions.map(q => q.id)
      );

      const updatedProgress = {
        ...progress,
        recentQuestionIds: updatedRecent,
        attempts: [...progress.attempts, attempt],
        lastCompletedAt: new Date().toISOString()
      };

      saveQuizProgress(updatedProgress);
      setScore(finalScore);
      setPhase('results');
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRetake = () => {
    initQuiz();
  };

  if (phase === 'intro') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto px-4 py-10 space-y-8"
      >
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Quiz Intro Card */}
        <motion.div
          initial={{ scale: 0.97 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl shadow-blue-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ClipboardList className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Module Quiz</p>
              <h1 className="text-2xl font-extrabold leading-tight">{categoryName}</h1>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { icon: '📝', label: '5 Questions', sub: 'Random selection' },
              { icon: '🏆', label: 'Best: ' + (bestScore !== null ? `${bestScore}/5` : 'Not taken'), sub: `${attemptCount} attempt${attemptCount !== 1 ? 's' : ''}` },
              { icon: '🔄', label: 'Smart Shuffle', sub: 'No repeats' },
            ].map(item => (
              <div key={item.label} className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs font-bold">{item.label}</div>
                <div className="text-[10px] text-blue-200 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Instructions */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h2 className="text-sm font-extrabold text-slate-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            How it works
          </h2>
          <ul className="space-y-3">
            {[
              'Select one answer from four options for each question.',
              'After choosing, the correct answer and explanation are revealed immediately.',
              'You cannot change your answer once selected.',
              'Each quiz shows 5 unique questions from a pool of 40.',
              'Retake anytime — you\'ll get fresh questions each time.',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={initQuiz}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-blue-200 transition-all cursor-pointer flex items-center justify-center gap-3"
        >
          <Brain className="w-5 h-5" />
          Start Quiz
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    );
  }

  if (phase === 'question' && currentQuestion) {
    const answeredCorrectly = showExplanation && selectedAnswer === currentQuestion.correctAnswer;
    const answeredWrongly = showExplanation && selectedAnswer !== currentQuestion.correctAnswer && selectedAnswer !== null;

    return (
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        className="max-w-2xl mx-auto px-4 py-8 space-y-6"
      >
        {/* Progress Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Exit Quiz
          </button>
          <div className="flex items-center gap-2">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i < currentIndex
                    ? 'bg-emerald-500 w-6'
                    : i === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-slate-200 w-6'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-500">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
          {/* Difficulty Badge */}
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest ${
              currentQuestion.difficulty === 'Easy'
                ? 'bg-emerald-100 text-emerald-700'
                : currentQuestion.difficulty === 'Medium'
                ? 'bg-amber-100 text-amber-700'
                : 'bg-rose-100 text-rose-700'
            }`}>
              {currentQuestion.difficulty}
            </span>
            <span className="text-xs text-slate-400 font-mono">Q{currentIndex + 1}</span>
          </div>

          {/* Question Text */}
          <p className="text-base font-bold text-slate-800 leading-relaxed">
            {currentQuestion.question}
          </p>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuestion.options.map((option, i) => (
              <OptionButton
                key={option}
                option={option}
                index={i}
                selected={selectedAnswer === option}
                revealed={showExplanation}
                isCorrect={option === currentQuestion.correctAnswer}
                isUserAnswer={selectedAnswer === option}
                onClick={() => handleSelectAnswer(option)}
              />
            ))}
          </div>
        </div>

        {/* Explanation Panel */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`rounded-2xl border-2 p-5 space-y-3 ${
                answeredCorrectly
                  ? 'bg-emerald-50 border-emerald-200'
                  : 'bg-rose-50 border-rose-200'
              }`}
            >
              <div className="flex items-center gap-2">
                {answeredCorrectly ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
                <span className={`text-sm font-extrabold ${answeredCorrectly ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {answeredCorrectly ? 'Correct! Well done.' : `Incorrect. Correct answer: ${currentQuestion.correctAnswer}`}
                </span>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-white">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-600 mb-1">Why?</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {isLastQuestion ? (
                  <>
                    <Trophy className="w-4 h-4" />
                    See Results
                  </>
                ) : (
                  <>
                    Next Question
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint to select */}
        {!showExplanation && (
          <p className="text-center text-xs text-slate-400 font-medium">
            Select an answer to reveal the explanation
          </p>
        )}
      </motion.div>
    );
  }

  if (phase === 'results') {
    const style = getScoreStyle(score);
    const pct = Math.round((score / questions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto px-4 py-10 space-y-6"
      >
        {/* Score Hero */}
        <div className={`rounded-3xl border-2 p-8 text-center space-y-4 ${style.bg}`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-6xl"
          >
            {style.emoji}
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-5xl font-black ${style.color}`}
            >
              {score}<span className="text-2xl opacity-60">/{questions.length}</span>
            </motion.div>
            <p className={`text-sm font-bold mt-1 ${style.color}`}>{style.label}</p>
          </div>

          {/* Progress Ring (simple bar) */}
          <div className="w-full bg-white/60 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className={`h-full rounded-full ${
                pct === 100 ? 'bg-emerald-500' : pct >= 60 ? 'bg-blue-500' : 'bg-rose-500'
              }`}
            />
          </div>
          <p className={`text-xs font-semibold ${style.color}`}>{pct}% correct</p>
        </div>

        {/* Question Review */}
        <div className="space-y-3">
          <h2 className="text-sm font-extrabold text-slate-700 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Question Review
          </h2>
          {questions.map((q, i) => {
            const userAns = answers[q.id] ?? '';
            const isRight = userAns === q.correctAnswer;
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-4 space-y-2 ${
                  isRight ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  {isRight
                    ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    : <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  }
                  <p className="text-xs font-semibold text-slate-800 flex-1">
                    <span className="text-slate-400 mr-1.5">Q{i + 1}.</span>
                    {q.question}
                  </p>
                </div>
                {!isRight && (
                  <div className="ml-6 text-xs text-slate-600 space-y-0.5">
                    <div className="text-rose-600"><span className="font-bold">Your answer:</span> {userAns || 'Not answered'}</div>
                    <div className="text-emerald-700"><span className="font-bold">Correct:</span> {q.correctAnswer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRetake}
            className="flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-blue-200 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <RefreshCcw className="w-4 h-4" />
            Retake Quiz
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="flex-1 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-extrabold text-sm rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Topics
          </motion.button>
        </div>

        {/* Best Score Hint */}
        {bestScore !== null && bestScore < score && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-emerald-600 font-bold flex items-center justify-center gap-1"
          >
            <Star className="w-3.5 h-3.5" />
            New personal best! Previous best was {bestScore}/{questions.length}
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Loading / empty state
  return (
    <div className="flex items-center justify-center py-32 text-slate-400">
      <div className="text-center space-y-3">
        <RotateCcw className="w-8 h-8 animate-spin mx-auto" />
        <p className="text-sm font-semibold">Loading quiz questions...</p>
      </div>
    </div>
  );
};

export default CRTModuleQuiz;
