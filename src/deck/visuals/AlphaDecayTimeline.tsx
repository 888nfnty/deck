import React from 'react';
import { GlassCard } from '../components/GlassCard';

const STEPS = [
  { t: 'T plus 0.00 seconds', label: 'News hits the internet' },
  { t: 'T plus 0.01 seconds', label: 'Automated systems ingest and compute' },
  { t: 'T plus 0.10 seconds', label: 'The order book reprices' },
  { t: 'T plus 30.00 seconds', label: 'A person notices' },
  { t: 'T plus 45.00 seconds', label: 'A person clicks “Buy”' },
] as const;

export const AlphaDecayTimeline: React.FC = () => {
  return (
    <GlassCard className="p-6">
      <div className="text-[13px] text-white/70">Alpha decays before people can react</div>
      <div className="mt-5 grid gap-3">
        {STEPS.map((s, idx) => (
          <div key={s.t} className="flex items-center gap-3">
            <div
              className={
                `h-2 w-2 rounded-full ` +
                (idx <= 2 ? 'bg-better-blue' : idx === 3 ? 'bg-white/40' : 'bg-danger')
              }
            />
            <div className="w-36 text-[11px] text-white/60">{s.t}</div>
            <div className="flex-1 text-[14px] text-white">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-white/10 pt-4 text-[12px] leading-6 text-white/60">
        BETTER targets the machine window with bounded agents and low-latency execution.
      </div>
    </GlassCard>
  );
};
