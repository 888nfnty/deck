import React from 'react';
import { GlassCard } from '../components/GlassCard';

export const MoatMatrix: React.FC = () => {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between">
        <div className="text-[13px] text-white/70">Positioning</div>
        <div className="text-[12px] text-white/50">Automation × Speed</div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="border border-white/10 bg-black/20 p-4">
          <div className="text-[12px] text-white/60">Low speed</div>
          <div className="mt-1 text-[14px] text-white/80">Manual tools</div>
        </div>
        <div className="border border-white/10 bg-black/20 p-4">
          <div className="text-[12px] text-white/60">High speed</div>
          <div className="mt-1 text-[14px] text-white/80">Pro desks</div>
        </div>
        <div className="border border-white/10 bg-black/20 p-4">
          <div className="text-[12px] text-white/60">Low automation</div>
          <div className="mt-1 text-[14px] text-white/80">Analytics only</div>
        </div>
        <div className="relative border border-better-blue/40 bg-better-blue/10 p-4">
          <div className="text-[12px] text-white/80">High automation</div>
          <div className="mt-1 text-[14px] text-white">BETTER</div>
          <div className="mt-2 text-[12px] leading-6 text-white/70">
            Bounded agents + low-latency execution for retail.
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-40" style={{
            background:
              'radial-gradient(500px circle at 70% 10%, rgba(0,38,255,0.45) 0%, rgba(0,38,255,0.0) 55%)',
          }} />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-[12px] text-white/55">
        <span>← Manual</span>
        <span>Automation →</span>
      </div>
    </GlassCard>
  );
};
