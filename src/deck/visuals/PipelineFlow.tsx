import React from 'react';
import { GlassCard } from '../components/GlassCard';

const STEPS = [
  { title: 'Signals', desc: 'Elite wallets / informed flow across markets' },
  { title: 'Agents', desc: 'BRAID-bounded decision records' },
  { title: 'HFT Exec', desc: 'Rust infra + in-region routing' },
  { title: 'Vaults', desc: 'Automated positions for depositors' },
  { title: 'Yield', desc: 'Users get exposure to prediction-market alpha' },
] as const;

export const PipelineFlow: React.FC = () => {
  return (
    <GlassCard className="p-6">
      <div className="text-[13px] text-white/70">System flow</div>
      <div className="mt-5 grid gap-3">
        {STEPS.map((s, idx) => (
          <div key={s.title} className="flex items-start gap-3">
            <div className="mt-1 h-6 w-6 flex-none border border-white/15 bg-white/5 text-center text-[12px] leading-6 text-white/70">
              {idx + 1}
            </div>
            <div className="flex-1">
              <div className="text-[14px] text-white">{s.title}</div>
              <div className="mt-1 text-[12px] leading-6 text-white/60">{s.desc}</div>
            </div>
            {idx < STEPS.length - 1 ? (
              <div className="mt-3 h-px w-10 flex-none bg-white/10" />
            ) : null}
          </div>
        ))}
      </div>
    </GlassCard>
  );
};
