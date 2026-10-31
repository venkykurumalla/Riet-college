import React from 'react';
import { getCRTTopicById } from '../data/crtCourseData';
import { CRTYearId } from '../types/crtTypes';
import { CRTTopicPage } from './CRTTopicPage';

interface CRTTopicViewProps {
  topicId: string;
  yearId: CRTYearId;
  onSelectTopic: (topicId: string) => void;
  onBackToOverview: () => void;
}

// Looks the chapter up in the (code-split) CRT data and renders it, or a not-found state.
export const CRTTopicView: React.FC<CRTTopicViewProps> = ({ topicId, onSelectTopic, onBackToOverview }) => {
  const item = getCRTTopicById(topicId);
  if (!item) {
    return (
      <div className="text-center py-20 space-y-4">
        <p className="text-slate-600 font-semibold">CRT Topic not found.</p>
        <button
          onClick={onBackToOverview}
          className="px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-xs cursor-pointer"
        >
          Back to CRT Overview
        </button>
      </div>
    );
  }
  return (
    <CRTTopicPage
      topic={item.topic}
      year={item.year}
      categoryName={item.category}
      onSelectTopic={onSelectTopic}
      onBackToOverview={onBackToOverview}
    />
  );
};
