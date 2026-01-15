import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { ROADMAP } from '../deckContent';

export const RoadmapTimeline: React.FC = () => {
  return (
    <GlassCard className="p-6">
      <div className="text-[13px] text-white/70">Roadmap</div>
      <div className="mt-5 space-y-4">
        {ROADMAP.map((r) => (
          <div key={`${r.when}-${r.what}`} className="relative pl-5">
            <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-white/50" />
            <div className="text-[12px] text-white/55">{r.when}</div>
            <div className="mt-1 text-[14px] leading-7 text-white">{r.what}</div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};
