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
        `relative overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl ` +
        `shadow-[0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_0_1px_rgba(255,255,255,0.03),inset_0_0_40px_rgba(255,255,255,0.04)] ${className ?? ''}`
      }
    >
      <CornerDots />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(0,38,255,0.18) 35%, rgba(0,0,0,0) 55%, rgba(76,82,111,0.20) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(500px circle at 20% 15%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 60%), radial-gradient(600px circle at 85% 85%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 65%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};
