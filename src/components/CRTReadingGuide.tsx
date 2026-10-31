import React, { useState } from 'react';
import { BookOpen, Eye, EyeOff, Lightbulb, Zap } from 'lucide-react';
import { CRTReadingGuide as Guide } from '../types/crtTypes';

const CARD = 'rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4';
const LABEL = 'flex items-center space-x-2 text-blue-700 font-bold uppercase tracking-wider text-xs';

const levelStyle: Record<string, string> = {
  Easy: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Medium: 'bg-amber-50 text-amber-800 border-amber-200',
  Placement: 'bg-rose-50 text-rose-800 border-rose-200'
};

const Heading: React.FC<{ n: number; label: string; title: string }> = ({ n, label, title }) => (
  <>
    <div className={LABEL}>
      <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
      <span>{n}. {label}</span>
    </div>
    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">{title}</h2>
  </>
);

const TryItBox: React.FC<{ items: Guide['tryIt'] }> = ({ items }) => {
  const [shown, setShown] = useState<Record<number, boolean>>({});
  return (
    <div className="space-y-3">
      {items.map((t, i) => (
        <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <p className="text-sm font-medium text-slate-800"><strong>Q{i + 1}.</strong> {t.question}</p>
          {t.hint && <p className="text-xs text-slate-500">Hint: {t.hint}</p>}
          <button
            onClick={() => setShown(s => ({ ...s, [i]: !s[i] }))}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 cursor-pointer"
          >
            {shown[i] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {shown[i] ? 'Hide answer' : 'Show answer'}
          </button>
          {shown[i] && (
            <p className="text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-xl p-3 animate-year-fade">{t.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

// Returns the guide as sibling cards. `num` hands out the next section number in order.
export const renderReadingGuide = (g: Guide, num: () => number): React.ReactNode[] => [
  <div key="buildup" className={CARD}>
    <Heading n={num()} label="Concept Build-Up" title="Understanding It Step by Step" />
    {g.buildUp.map((b, i) => (
      <div key={i} className="space-y-2">
        <h3 className="text-sm font-extrabold text-slate-900">{i + 1}. {b.heading}</h3>
        {b.paragraphs.map((p, j) => (
          <p key={j} className="text-sm text-slate-700">{p}</p>
        ))}
      </div>
    ))}
  </div>,

  <div key="terms" className={CARD}>
    <Heading n={num()} label="Key Terms" title="Words You Must Know" />
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {g.keyTerms.map((k, i) => (
        <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <dt className="text-sm font-extrabold text-slate-900">{k.term}</dt>
          <dd className="text-xs sm:text-sm text-slate-600 mt-1">{k.meaning}</dd>
        </div>
      ))}
    </dl>
  </div>,

  <div key="rules" className={CARD}>
    <Heading n={num()} label="Rules & Conditions" title="What Holds, and When" />
    <ul className="space-y-2.5">
      {g.rules.map((r, i) => (
        <li key={i} className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-sm">
          <span className="font-bold text-blue-950">{r.rule}</span>
          <span className="block text-xs sm:text-sm text-slate-600 mt-1">Condition: {r.condition}</span>
        </li>
      ))}
    </ul>
  </div>,

  <div key="recognise" className={CARD}>
    <Heading n={num()} label="Spot the Question" title="How to Recognise This Question Type" />
    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
      {g.recognise.map((r, i) => <li key={i}>{r}</li>)}
    </ul>
  </div>,

  <div key="examples" className={CARD}>
    <Heading n={num()} label="Worked Examples" title={`${g.workedExamples.length} Examples, Easy to Placement`} />
    <div className="space-y-5">
      {g.workedExamples.map((e, i) => (
        <div key={i} className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-slate-500">Example {i + 1}</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${levelStyle[e.level]}`}>{e.level}</span>
          </div>
          <p className="text-sm font-semibold text-slate-900">{e.question}</p>
          <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-700">
            {e.steps.map((s, j) => <li key={j}>{s}</li>)}
          </ol>
          <p className="text-sm font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">Answer: {e.answer}</p>
          {e.shortcut && (
            <p className="text-sm text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-2 flex gap-2">
              <Zap className="w-4 h-4 mt-0.5 shrink-0 text-indigo-600" />
              <span><strong>Shortcut:</strong> {e.shortcut}</span>
            </p>
          )}
        </div>
      ))}
    </div>
  </div>,

  <div key="variations" className={CARD}>
    <Heading n={num()} label="Variations" title="Forms the Question Can Take" />
    <ul className="space-y-2.5">
      {g.variations.map((v, i) => (
        <li key={i} className="text-sm text-slate-700"><strong className="text-slate-900">{v.name}.</strong> {v.note}</li>
      ))}
    </ul>
  </div>,

  <div key="mistakes" className={CARD}>
    <Heading n={num()} label="Typical Mistakes" title="Where Marks Are Lost" />
    <div className="space-y-3">
      {g.mistakes.map((m, i) => (
        <div key={i} className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-1.5 text-sm">
          <p className="text-rose-900"><strong>Mistake:</strong> {m.wrong}</p>
          <p className="text-slate-600"><strong>Why it happens:</strong> {m.why}</p>
          <p className="text-emerald-900"><strong>Corrected:</strong> {m.corrected}</p>
        </div>
      ))}
    </div>
  </div>,

  <div key="revision" className={CARD}>
    <Heading n={num()} label="Mini Revision Table" title="One Look Before the Test" />
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-100 text-slate-800">
          <tr>{g.revisionTable.headers.map((h, i) => <th key={i} className="px-3 py-2 font-bold whitespace-nowrap">{h}</th>)}</tr>
        </thead>
        <tbody>
          {g.revisionTable.rows.map((r, i) => (
            <tr key={i} className="border-t border-slate-200">
              {r.map((c, j) => <td key={j} className="px-3 py-2 text-slate-700 align-top">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>,

  <div key="tryit" className={CARD}>
    <Heading n={num()} label="Try It Yourself" title="Three Quick Questions" />
    <p className="text-xs text-slate-500 flex items-center gap-1.5"><Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Solve on paper first, then open the answer.</p>
    <TryItBox items={g.tryIt} />
  </div>
];
