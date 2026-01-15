import React from 'react';
import { CornerDots } from './CornerDots';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
  return (
    <div
      className={
        `relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl ` +
        `shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${className ?? ''}`
      }
    >
      <CornerDots />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,38,255,0.18) 0%, rgba(0,0,0,0) 45%, rgba(76,82,111,0.18) 100%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};
