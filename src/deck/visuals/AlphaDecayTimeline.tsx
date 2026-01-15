import React from 'react';
import { GlassCard } from '../components/GlassCard';

const STEPS = [
  { t: 'T+0.00s', label: 'News hits the internet' },
  { t: 'T+0.01s', label: 'Bots ingest + compute' },
  { t: 'T+0.10s', label: 'Orderbook reprices' },
  { t: 'T+30.00s', label: 'Human notices' },
  { t: 'T+45.00s', label: 'Human clicks “Buy”' },
] as const;

export const AlphaDecayTimeline: React.FC = () => {
  return (
    <GlassCard className="p-6">
      <div className="text-[12px] text-white/70">Alpha decays before humans can react</div>
      <div className="mt-5 grid gap-3">
        {STEPS.map((s, idx) => (
          <div key={s.t} className="flex items-center gap-3">
            <div
              className={
                `h-2 w-2 rounded-full ` +
                (idx <= 2 ? 'bg-better-blue' : idx === 3 ? 'bg-white/40' : 'bg-danger')
              }
            />
            <div className="w-20 text-[11px] text-white/60">{s.t}</div>
            <div className="flex-1 text-[12px] text-white">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-white/10 pt-4 text-[11px] text-white/60">
        BETTER targets the machine window with bounded agents + low-latency execution.
      </div>
    </GlassCard>
  );
};
