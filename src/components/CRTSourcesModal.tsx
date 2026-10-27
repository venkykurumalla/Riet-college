import React, { useState } from 'react';
import { X, Search, ExternalLink, ShieldCheck, Database, BookOpen, CheckCircle, Info } from 'lucide-react';
import { CRT_SOURCES } from '../data/crtSources';

interface CRTSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CRTSourcesModal: React.FC<CRTSourcesModalProps> = ({ isOpen, onClose }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filtered = CRT_SOURCES.filter(src => {
    const matchesType = filterType === 'all' || src.type === filterType;
    const matchesSearch =
      src.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                CRT Curriculum Research & Auditable Sources
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                18 Cross-Referenced Industry Assessment Frameworks, Standard Textbooks & Curricula
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mandatory Research Disclaimer Note */}
        <div className="px-6 py-3.5 bg-blue-50/80 border-b border-blue-100 flex items-start space-x-3 text-xs text-blue-900">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Mandatory Note:</strong> This year-wise learning path is organized from research across placement assessments, institutional training curricula and established aptitude-learning resources. Recruiter-specific requirements and exam patterns may vary over time.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-3 bg-white">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search source by name, topic, or keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-1 overflow-x-auto text-xs font-bold">
            {[
              { id: 'all', label: 'All Sources (18)' },
              { id: 'official assessment', label: 'Official Assessments' },
              { id: 'institutional placement', label: 'Institutional Curricula' },
              { id: 'standard reference', label: 'Standard Textbooks' },
              { id: 'educational platform', label: 'Educational Platforms' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  filterType === f.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sources List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No sources matched your filter query.
            </div>
          ) : (
            filtered.map(src => (
              <div
                key={src.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-2xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <h3 className="text-sm font-extrabold text-slate-900 font-display">
                      {src.name}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                      {src.type}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Checked: {src.checked}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {src.notes}
                </p>

                {/* Topics Covered */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {src.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 text-[10px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Source External Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-blue-600 hover:text-blue-800 font-bold"
                  >
                    <span>Visit Reference Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-slate-400 font-mono">
                    ID: {src.id}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Internal Research Registry • src/data/crtSources.ts</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
